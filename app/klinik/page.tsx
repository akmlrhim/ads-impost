import type { Metadata } from "next";
import { Chapter, CtaPlate, Reveal, SiteFooter, SiteHeader } from "../components";
import {
  HeroParallax,
  Kinetic,
  PageProgress,
  StackChapter,
} from "../motion-ux";

// TODO: ganti dengan nomor WA asli. Pola pre-filled text siap pakai.
const WA_KLINIK =
  "https://wa.me/6280000000000?text=Halo%20Impost%2C%20saya%20ingin%20konsultasikan%20marketing%20klinik%20saya.";

export const metadata: Metadata = {
  title: "Impost — Marketing Klinik Punya Jalur",
  description:
    "Kami bantu klinik membangun jalur dari treatment yang tepat, konten, iklan, sampai reservasi.",
};

const PROBLEMS = [
  { lead: "Posting banyak", rest: "pasien baru nggak jelas." },
  { lead: "Treatment banyak", rest: "nggak ada yang jadi magnet." },
  { lead: "Iklan jalan", rest: "budget habis, hasil samar." },
];

const PATH = [
  { no: "01", name: "PILIH", desc: "Treatment yang paling potensial." },
  {
    no: "02",
    name: "TARIK",
    desc: "Perhatian calon pasien lewat konten & campaign.",
  },
  {
    no: "03",
    name: "PERCAYA",
    desc: "Bangun alasan sebelum mereka mengambil keputusan.",
  },
  { no: "04", name: "RESERVASI", desc: "Arahkan sampai WhatsApp / booking." },
];

const SERVICES = [
  "Strategy Marketing",
  "Content & Social Media",
  "Performance Marketing",
  "Website & Landing Page",
];

export default function KlinikPage() {
  return (
    <div className="[--accent:var(--color-impost-primary)]">
      <PageProgress />
      <SiteHeader
        vertical="Klinik"
        ctaHref={WA_KLINIK}
        ctaLabel="Konsultasikan Klinik Anda"
      />

      <main>
        {/* 01 — HERO: asymmetric 7/5, right column drops below cap height */}
        <section className="border-b border-impost-third/25">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-medium tracking-[0.16em] text-impost-ink-dim uppercase">
                  Impost — Performance Marketing untuk Klinik
                </p>
              </Reveal>
              <h1 className="mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.03em] text-balance md:text-6xl">
                <Kinetic text="Budget Marketing Terus Keluar. Tapi Pasien Baru Belum Konsisten?" />
              </h1>
            </div>
            <HeroParallax className="lg:col-span-5 lg:pt-24">
              <Reveal delay={120}>
                <p className="text-xl font-bold">Jangan cuma cari traffic.</p>
                <p className="mt-4 max-w-md text-base leading-[1.7] text-impost-ink-dim">
                  Kami bantu klinik membangun jalur dari treatment yang tepat →
                  konten → iklan → reservasi.
                </p>
                <div className="mt-8">
                  <CtaPlate href={WA_KLINIK}>
                    Konsultasikan Klinik Anda
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </CtaPlate>
                </div>
                <p className="mt-4 text-sm text-impost-ink-dim">
                  Cari tahu bagian marketing mana yang masih bocor.
                </p>
              </Reveal>
            </HeroParallax>
          </div>
        </section>

        {/* 02 — MASALAH */}
        <StackChapter no="02">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <Chapter no="02">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Masalahnya Sering Bukan Kurang Posting.
                </h2>
                <p className="mt-4 text-lg text-impost-ink-dim">Tapi...</p>
              </Reveal>
              <ul className="mt-10 border-t border-impost-third/25">
                {PROBLEMS.map((p, i) => (
                  <Reveal as="li" key={p.lead} delay={i * 60}>
                    <div className="flex items-baseline gap-4 border-b border-impost-third/25 py-5">
                      <span
                        aria-hidden="true"
                        className="font-bold text-impost-primary"
                      >
                        →
                      </span>
                      <p className="text-lg leading-relaxed md:text-xl">
                        <strong className="font-bold">{p.lead}</strong>
                        <span className="text-impost-ink-dim"> {p.rest}</span>
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal>
                <p className="mt-8 max-w-xl text-base leading-[1.7] text-impost-ink-dim">
                  Marketing terlihat sibuk. Tapi jadwal treatment tetap
                  naik-turun.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 03 — JALUR */}
        <StackChapter no="03" solid>
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <Chapter no="03">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Kami Bikin Marketing Klinik Punya Jalur.
                </h2>
              </Reveal>
              <ol className="mt-10 border-t border-impost-third/25">
                {PATH.map((s, i) => (
                  <Reveal as="li" key={s.no} delay={i * 60}>
                    <div className="grid gap-1 border-b border-impost-third/25 py-6 sm:grid-cols-12 sm:gap-4">
                      <p className="text-sm font-bold tracking-[0.16em] text-impost-primary tabular-nums sm:col-span-2">
                        {s.no}
                      </p>
                      <p className="text-xl font-extrabold tracking-tight sm:col-span-3">
                        {s.name}
                      </p>
                      <p className="leading-[1.7] text-impost-ink-dim sm:col-span-7">
                        {s.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal>
                <p className="mt-8 max-w-xl text-base leading-[1.7]">
                  Bukan sekadar mendatangkan orang. Tapi membangun jalur agar
                  traffic punya tujuan.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 04 — ANGKA */}
        <StackChapter no="04">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <Chapter no="04">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Likes Tidak Bisa Menghasilkan Omset.
                </h2>
                <p className="mt-6 text-base leading-[1.7] text-impost-ink-dim">
                  Yang lebih penting:
                </p>
                <p className="mt-2 text-xl font-bold md:text-2xl">
                  Leads. Reservasi. Omzet. ROAS.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <div className="mt-10 border-t border-impost-third/40 pt-8">
                  <p className="text-6xl font-extrabold tracking-[-0.03em] text-impost-primary tabular-nums md:text-8xl">
                    12X
                  </p>
                  <p className="mt-3 text-xl font-bold">ROAS hingga 12X</p>
                  <p className="mt-2 max-w-xl text-base leading-[1.7] text-impost-ink-dim">
                    Salah satu campaign yang kami tangani mencapai ROAS hingga
                    12X.
                  </p>
                  <p className="mt-4 text-sm text-impost-ink-dim">
                    Hasil setiap campaign dapat berbeda.
                  </p>
                </div>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 05 — LAYANAN: ledger, bukan kartu */}
        <StackChapter no="05" solid>
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <Chapter no="05">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Yang Klinik Anda Butuhkan, Kami Siapkan.
                </h2>
              </Reveal>
              <ul className="mt-10 border-t border-impost-third/25">
                {SERVICES.map((s, i) => (
                  <Reveal as="li" key={s} delay={i * 60}>
                    <div className="flex items-baseline justify-between gap-6 border-b border-impost-third/25 py-5">
                      <p className="text-lg font-bold md:text-xl">{s}</p>
                      <span
                        aria-hidden="true"
                        className="text-sm font-bold text-impost-third tabular-nums"
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal>
                <p className="mt-8 text-base leading-[1.7] text-impost-ink-dim">
                  Dari strategi sampai calon pasien masuk.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 06 — CTA AKHIR */}
        <section>
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.03em] leading-[0.95] text-balance md:text-6xl">
                  <Kinetic text="Jangan Tunggu Jadwal Kosong Baru Panik Cari Pasien." />
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <Reveal delay={60}>
                <p className="max-w-md text-base leading-[1.7] text-impost-ink-dim">
                  Karena saat jadwal sudah sepi, Anda bukan sedang membangun
                  marketing.
                </p>
                <p className="mt-3 max-w-md text-base leading-[1.7]">
                  Anda sedang mengejar ketertinggalan.
                </p>
                <div className="mt-8">
                  <CtaPlate href={WA_KLINIK}>
                    Konsultasikan Klinik Anda
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </CtaPlate>
                </div>
                <p className="mt-4 text-sm text-impost-ink-dim">
                  Mulai dari melihat kondisi marketing klinik Anda.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
