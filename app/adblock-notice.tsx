"use client";

import { useEffect, useState } from "react";

// Deteksi ad blocker tanpa bergantung pada stylesheet eksternal: elemen
// pemikat disembunyikan lewat inline style, bukan CSS yang bisa diblokir.
const BAIT_CLASSES =
  "adsbox ad-planner ad-unit ad-banner pub_300x250 text-ad sponsor-ad";

function baitBlocked(): boolean {
  const bait = document.createElement("div");
  bait.className = BAIT_CLASSES;
  bait.setAttribute("aria-hidden", "true");
  bait.style.cssText =
    "position:absolute!important;left:-9999px!important;top:-9999px!important;height:1px!important;width:1px!important;";

  const host = document.createElement("div");
  host.appendChild(bait);
  document.body.appendChild(host);

  // Blocker cosmetic menyetel display:none / visibility:hidden pada elemen
  // yang cocok pola. Elemen tetap terlihat kalau tidak kena filter.
  const blocked =
    bait.offsetParent === null ||
    bait.offsetHeight === 0 ||
    getComputedStyle(bait).visibility === "hidden" ||
    getComputedStyle(bait).display === "none";

  host.remove();
  return blocked;
}

function requestBlocked(): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;
    const done = (v: boolean) => {
      if (settled) return;
      settled = true;
      resolve(v);
    };
    // Callback dipanggil untuk kedua hasil, jadi timeout pendek sudah cukup.
    img.onload = () => done(false);
    img.onerror = () => done(true);
    setTimeout(() => done(false), 1500);
    img.src =
      "https://pagead2.googlesyndication.com/pagead/img/ads/banner.png?n=" +
      Date.now();
  });
}

export default function AdBlockerNotice() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let ignore = false;

      // Kalau user sudah pernah menutup, jangan tampilkan lagi.
    try {
      if (localStorage.getItem("impost:adblock-dismissed") === "1") ignore = true;
    } catch {
      /* localStorage bisa diblokir; abaikan */
    }
    if (ignore) return;

    const run = async () => {
      // Beri jeda agar filter cosmetic sudah terpasang.
      await new Promise((r) => setTimeout(r, 400));
      if (cancelled) return;

      const blocked = baitBlocked() || (await requestBlocked());
      if (cancelled) return;

      if (blocked) {
        setShow(true);
        // Beri tahu GTM (dengan konfirmasi klik CTA). GTM loader di layout
        // yang membuat window.dataLayer, tapi bisa gagal bila diblokir.
        (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({
          event: "adblock_detected",
        });
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!show || dismissed) return null;

  const close = () => {
    setDismissed(true);
    try {
      localStorage.setItem("impost:adblock-dismissed", "1");
    } catch {
      /* abaikan */
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="adblock-title"
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-impost-primary/40 bg-impost-fifth/95 p-5 shadow-xl backdrop-blur md:p-6">
        <h2 id="adblock-title" className="text-lg font-extrabold tracking-tight">
          Ads Anda tidak dapat dimuat
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-impost-ink-dim">
          Kami mendeteksi Ad Blocker aktif. Sebagian konten kami dimuat dari
          domain yang sering diblokir, sehingga sebagian tampilan bisa tidak
          muncul. Nonaktifkan Ad Blocker untuk situs ini, atau tambahkan
          <span className="font-semibold text-impost-ink">ads.impostmedia.com</span>{" "}
          ke daftar Allowlist. Konten dan form kontak tetap dapat Anda akses.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="#closing"
            onClick={close}
            className="rounded-full bg-impost-primary px-5 py-2.5 text-sm font-bold text-[#040404] transition-colors hover:bg-impost-primary-dark"
          >
            Lanjut ke formulir konsultasi
          </a>
          <button
            type="button"
            onClick={close}
            className="text-sm font-semibold text-impost-ink-dim underline-offset-4 hover:underline"
          >
            Lanjut saja
          </button>
        </div>
      </div>
    </div>
  );
}
