"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "impost:adblock-dismissed";
const START_DELAY_MS = 700;
const PROBE_TIMEOUT_MS = 3000;
const REQUIRED_BAIT_HITS = 2;

// Dua host berbeda: satu saja yang lolos berarti belum bisa disimpulkan.
const AD_PROBES = [
  "https://pagead2.googlesyndication.com/pagead/gen_204",
  "https://www.googletagservices.com/tag/js/gpt.js",
];

// Kontrol memakai aset sendiri. Gagal semua = jaringan/offline, bukan pemblokiran.
const CONTROL_PROBES = ["/favicon.ico", "/og-image.png"];

const ALLOWLIST_HINTS = [
  "googlesyndication.com",
  "googletagservices.com",
  "doubleclick.net",
];

type Verdict = "blocked" | "clear" | "unknown";

// Pakai fetch no-cors supaya tidak ada skrip iklan yang dieksekusi dan status
// error (403/404/5xx) tetap dihitung "tersedia". Hanya kegagalan jaringan
// yang berarti request ditolak. Timeout juga dihitung "tersedia" agar jaringan
// lambat tidak ikut dituduh.
function requestFails(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const controller = new AbortController();
    let settled = false;
    const finish = (failed: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(failed);
    };
    const timer = window.setTimeout(() => {
      controller.abort();
      finish(false);
    }, PROBE_TIMEOUT_MS);

    fetch(url, {
      mode: "no-cors",
      credentials: "omit",
      cache: "no-store",
      signal: controller.signal,
    }).then(
      () => finish(false),
      () => finish(true),
    );
  });
}

async function originReachable(): Promise<boolean> {
  for (const url of CONTROL_PROBES) {
    if (!(await requestFails(url))) return true;
  }
  return false;
}

function isHidden(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return (
    style.display === "none" ||
    style.visibility === "hidden" ||
    style.opacity === "0" ||
    element.getClientRects().length === 0
  );
}

const BAIT_STYLE = "display:block;height:250px;width:300px;";

// Filter cosmetic menyembunyikan elemen bercorak iklan. Kita hitung berapa
// bait yang hilang, lalu mengembalikan unknown bila elemen kontrol ikut hilang
// (artinya lingkungan mencurigakan, bukan bukti pemblokiran).
function countHiddenBaits(): number | null {
  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.cssText =
    "position:fixed;top:0;left:0;width:300px;height:250px;overflow:hidden;pointer-events:none;z-index:-2147483647;";

  const control = document.createElement("div");
  control.className = "impost-probe-control";
  control.style.cssText = BAIT_STYLE;

  const adsbox = document.createElement("div");
  adsbox.className = "adsbox ad-banner ad-unit pub_300x250";
  adsbox.style.cssText = BAIT_STYLE;

  const ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.setAttribute("data-ad-client", "ca-pub-0000000000000000");
  ins.setAttribute("data-ad-slot", "0000000000");
  ins.style.cssText = BAIT_STYLE;

  const slot = document.createElement("div");
  slot.id = "google_ads_iframe_1";
  slot.className = "ad-container";
  slot.style.cssText = BAIT_STYLE;

  const label = document.createElement("div");
  label.className = "text-ad sponsor-ad ad-planner";
  label.style.cssText = BAIT_STYLE;

  host.append(control, adsbox, ins, slot, label);
  document.body.appendChild(host);

  const controlVisible = control.offsetHeight > 0 && !isHidden(control);
  const baits = [adsbox, ins, slot, label];
  const hits = baits.filter((bait) => isHidden(bait)).length;
  host.remove();

  return controlVisible ? hits : null;
}

// Notifikasi hanya muncul bila dua bukti independen sama-sama cocok: filter
// cosmetic aktif dan request ke host iklan ditolak, sementara aset sendiri
// tetap bisa dimuat. Selain itu tidak ada yang ditampilkan.
async function detectAdBlock(): Promise<Verdict> {
  const hits = countHiddenBaits();
  if (hits === null || hits < REQUIRED_BAIT_HITS) return "clear";

  const [controlOk, adResults] = await Promise.all([
    originReachable(),
    Promise.all(AD_PROBES.map(requestFails)),
  ]);
  if (!controlOk) return "unknown";

  return adResults.every(Boolean) ? "blocked" : "clear";
}

export default function AdBlockerNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let cancelled = false;

    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* localStorage bisa diblokir; abaikan */
    }

    const run = async () => {
      await new Promise((resolve) => setTimeout(resolve, START_DELAY_MS));
      if (cancelled) return;

      if ((await detectAdBlock()) !== "blocked") return;
      if (cancelled) return;

      setShow(true);
      (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({
        event: "adblock_detected",
      });
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!show) return null;

  const close = () => {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* abaikan */
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="impost-adblock-title"
      aria-describedby="impost-adblock-body"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-impost-primary/40 bg-impost-fifth/95 p-5 shadow-xl backdrop-blur md:p-6">
        <h2
          id="impost-adblock-title"
          className="text-base font-extrabold leading-snug tracking-tight text-impost-ink md:text-lg"
        >
          Sebagian tampilan belum lengkap
        </h2>

        <div
          id="impost-adblock-body"
          className="mt-3 space-y-2 text-sm leading-relaxed text-impost-ink-dim"
        >
          <p>
            Halaman ini memuat beberapa aset dari domain yang sering
            diblokir oleh browser atau ekstensi. Aset yang diblokir membuat
            sebagian tampilan dan tombol di bawah ikut hilang.
          </p>
          <p>
            Kalau halaman tetap tampil normal, abaikan pesan ini. Kalau ada
            bagian yang kosong, izinkan domain berikut untuk situs ini
            (Allowlist) lalu muat ulang halaman.
          </p>
        </div>

        <ul className="mt-3 flex flex-wrap gap-2">
          {ALLOWLIST_HINTS.map((domain) => (
            <li
              key={domain}
              className="rounded-full border border-impost-primary/30 bg-impost-primary/10 px-2.5 py-1 font-mono text-xs text-impost-primary"
            >
              {domain}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="#closing"
            onClick={close}
            className="rounded-full bg-impost-primary px-5 py-2.5 text-sm font-bold text-[#040404] transition-colors hover:bg-impost-primary-dark"
          >
            Lanjut ke formulir
          </a>
          <button
            type="button"
            onClick={close}
            className="text-sm font-semibold text-impost-ink-dim underline-offset-4 hover:underline"
          >
            Tutup pesan ini
          </button>
        </div>

        <p className="mt-3 text-xs text-impost-ink-dim/80">
          Pesan ini tidak akan muncul lagi di peramban ini.
        </p>
      </div>
    </div>
  );
}
