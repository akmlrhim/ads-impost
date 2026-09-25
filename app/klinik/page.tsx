import type { Metadata } from "next";
import {
  Chevron,
  CountUp,
  CtaPlate,
  FinalCta,
  HeroBackdrop,
  MediaRow,
  Reveal,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "../components";

// TODO: ganti dengan nomor WA asli. Pola pre-filled text siap pakai.
const WA_KLINIK =
  "https://wa.me/6280000000000?text=Halo%20Impost%2C%20saya%20ingin%20konsultasikan%20marketing%20klinik%20saya.";

export const metadata: Metadata = {
  title: "Impost - Marketing Klinik Punya Jalur",
  description:
    "Kami bantu klinik membangun jalur dari treatment yang tepat, konten, iklan, sampai reservasi.",
};

const NAV = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#bukti", label: "Bukti" },
  { href: "#layanan", label: "Layanan" },
];

export default function KlinikPage() {
  return (
    <div>
      <SiteHeader
        vertical="Klinik"
        ctaHref={WA_KLINIK}
        ctaLabel="Konsultasikan Klinik Anda"
        links={NAV}
      />

      <main>
        {/* 1 - HERO: full-height centered manifesto over a photo backdrop */}
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden border-b border-impost-third/25">
          <HeroBackdrop
            src="/img/klinik-hero.jpg"
            alt="Dokter konsultasi dengan pasien di klinik"
            priority
          />
          <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center md:px-8">
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-6xl md:leading-[1.05]">
                Biaya Operasional Jalan Terus, Tapi Jadwal Treatment Sering
                Kosong? Waktunya Berhenti Buang Budget.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-impost-ink-dim">
                Mendatangkan traffic saja tidak cukup untuk membayar tagihan
                klinik. Kami membantu klinik Anda membangun jalur konversi
                cerdas: dari klik iklan, edukasi konten, hingga pasien
                benar-benar melakukan reservasi.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CtaPlate href={WA_KLINIK}>
                  Konsultasikan Strategi Klinik Anda
                  <Chevron className="ml-2" />
                </CtaPlate>
              </div>
              <p className="mt-4 text-sm text-impost-ink-dim">
                Identifikasi celah marketing yang membuat jadwal Anda sepi.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2 - PROBLEM AGITATION: staggered ledger */}
        <Section id="masalah">
          <SectionHeading
            title="Masalahnya Bukan Karena Anda Kurang Posting di Instagram."
            desc="Tapi karena strategi yang salah sasaran:"
            align="left"
          />
          <div className="mt-10 space-y-8">
            {[
              {
                n: "1",
                t: "Posting Setiap Hari",
                d: "Tapi yang datang bukan pasien berkualitas, hanya penonton.",
                img: "/img/klinik-m1.jpg",
              },
              {
                n: "2",
                t: "Punya Banyak Treatment",
                d: 'Tapi tidak ada satupun yang menonjol sebagai "Magnet Pasien".',
                img: "/img/klinik-m2.jpg",
              },
              {
                n: "3",
                t: "Iklan Selalu Berjalan",
                d: "Tapi budget habis tanpa hasil reservasi yang terukur.",
                img: "/img/klinik-m3.jpg",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <MediaRow
                  media={p.img}
                  outerClassName={`border-t border-impost-third/25 ${
                    i === 1 ? "md:ml-16" : i === 2 ? "md:ml-32" : ""
                  }`}
                  className="grid gap-2 pt-5 pb-5 md:grid-cols-12 md:gap-6"
                >
                  <p className="text-sm font-extrabold text-impost-primary tabular-nums md:col-span-1">
                    {p.n}
                  </p>
                  <p className="text-2xl font-extrabold tracking-tight uppercase md:col-span-6">
                    {p.t}
                  </p>
                  <p className="leading-relaxed text-impost-ink-dim md:col-span-5">
                    {p.d}
                  </p>
                </MediaRow>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-xl text-lg font-bold">
              Marketing terlihat sibuk, tapi omzet tetap naik-turun tidak
              menentu.
            </p>
          </Reveal>
        </Section>

        {/* 3 - SOLUTION: horizontal timeline */}
        <Section id="solusi" muted>
          <SectionHeading title='Kami Ubah "Followers" Menjadi "Pasien Setia" dengan Funnel yang Tepat.' />
          <ol className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                n: "1",
                t: "Pilih Treatment Andalan",
                d: "Mengurasi treatment paling potensial untuk dijadikan ujung tombak penawaran.",
              },
              {
                n: "2",
                t: "Tarik Perhatian",
                d: "Menghentikan scrolling audiens dengan konten visual dan campaign yang relevan dengan keluhan mereka.",
              },
              {
                n: "3",
                t: "Bangun Kepercayaan",
                d: "Menghapus keraguan calon pasien dengan edukasi medis dan social proof yang solid.",
              },
              {
                n: "4",
                t: "Kunci Reservasi",
                d: "Mengarahkan minat yang sudah terbangun langsung ke admin WhatsApp untuk booking jadwal.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 60}>
                <div className="border-t-2 border-impost-primary/60 pt-4">
                  <p className="text-sm font-extrabold text-impost-primary tabular-nums">
                    {s.n}
                  </p>
                  <p className="mt-2 text-xl font-extrabold uppercase">
                    {s.t}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-impost-ink-dim">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="mx-auto mt-10 max-w-xl text-center font-bold">
              Bukan sekadar mendatangkan klik. Kami memastikan setiap traffic
              memiliki tujuan akhir: Reservasi.
            </p>
          </Reveal>
        </Section>

        {/* 4 - SOCIAL PROOF: stat display + single media moment */}
        <Section id="bukti">
          <SectionHeading title="Tinggalkan Metrik 'Likes'. Waktunya Fokus Pada Reservasi & Omzet." />
          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-impost-ink-dim">
              Bagi klinik, metrik yang paling penting adalah Leads, Jumlah
              Reservasi, Omzet, dan ROAS (Return on Ad Spend).
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-impost-third/25 p-8 text-center md:p-10">
              <p className="text-sm font-extrabold tracking-[0.14em] text-impost-primary uppercase">
                Pencapaian Kami
              </p>
              <p className="mt-3 text-5xl font-extrabold tracking-tight text-impost-primary tabular-nums md:text-7xl">
                <CountUp value={12} suffix="X" duration={1.6} />
              </p>
              <p className="mt-3 text-xl font-extrabold">
                ROAS Hingga 12X Lipat
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-impost-ink-dim">
                Kami pernah mencetak pengembalian omzet hingga 12 kali lipat
                dari biaya iklan pada salah satu campaign klinik klien kami.
                (Hasil dapat berbeda untuk setiap campaign).
              </p>
            </div>
          </Reveal>
        </Section>

        {/* 5 - SERVICES: grouped rows */}
        <Section id="layanan" muted>
          <SectionHeading title="Semua Amunisi Marketing Klinik Anda, Dalam Satu Atap." />
          <ul className="mx-auto mt-8 max-w-3xl divide-y divide-impost-third/20 border-y border-impost-third/20">
            {[
              {
                t: "Strategi Marketing",
                d: "Cetak biru yang jelas, bukan sekadar tebak-tebakan.",
              },
              {
                t: "Website & Landing Page",
                d: "Halaman pendaftaran yang cepat, terpercaya, dan memaksa pengunjung untuk bertindak.",
              },
              {
                t: "Content & Social Media",
                d: "Konten estetis yang mengedukasi dan membangun otoritas dokter/klinik.",
              },
              {
                t: "Performance Marketing",
                d: "Iklan yang dikelola ketat untuk mendatangkan pasien baru dengan biaya termurah.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 40}>
                <div className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="text-lg font-extrabold">{s.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-impost-ink-dim">
                      {s.d}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm font-bold text-impost-third tabular-nums"
                  >
                    {i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* TESTIMONI */}
        <Section id="testimoni">
          <SectionHeading title="Kata owner klinik" align="left" />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {[
              {
                q: "Akhirnya tahu treatment mana yang jadi magnet.",
                n: "Ayu Lestari, Owner Klinik Ayu, Jakarta",
              },
              {
                q: "Chat masuk lebih rapi. Admin tinggal follow up.",
                n: "Rina Marlina, Owner Klinik Rina, Bandung",
              },
            ].map((t, i) => (
              <Reveal as="figure" key={t.n} delay={i * 60}>
                <blockquote className="border-l-2 border-impost-primary/60 pl-5 text-xl leading-snug font-bold">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="mt-3 pl-5 text-sm text-impost-ink-dim">
                  {t.n}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 6 - CLOSING CTA */}
        <FinalCta
          title="Jangan Tunggu Jadwal Kosong Baru Panik Mencari Pasien."
          desc="Saat klinik sepi, Anda bukan sedang membangun bisnis. Anda sedang bertahan hidup. Bangun keran pasien baru yang konsisten dari sekarang."
          ctaHref={WA_KLINIK}
          ctaLabel="Audit Kondisi Marketing Klinik Anda Sekarang"
        />
      </main>

      <SiteFooter
        waHref={WA_KLINIK}
        vertical="klinik kecantikan dan kesehatan"
      />
    </div>
  );
}
