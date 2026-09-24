import type { Metadata } from "next";
import {
  Chevron,
  CtaPlate,
  Faq,
  FinalCta,
  Reveal,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "./components";

export const metadata: Metadata = {
  title: "Impost - Marketing Klinik & Property Punya Jalur",
  description:
    "Impost membantu klinik dan developer property membangun jalur dari perhatian menjadi reservasi dan inquiry.",
};

const WA =
  "https://wa.me/6280000000000?text=Halo%20Impost%2C%20saya%20ingin%20konsultasi%20marketing.";

const NAV = [
  { href: "#vertical", label: "Fokus" },
  { href: "#layanan", label: "Layanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export default function RootPage() {
  return (
    <div>
      <SiteHeader
        vertical="Klinik dan Property"
        ctaHref={WA}
        ctaLabel="Konsultasi Gratis"
        links={NAV}
      />

      <main>
        {/* HERO: centered manifesto, no image, no eyebrow */}
        <section className="border-b border-impost-third/25">
          <div className="mx-auto w-full max-w-3xl px-5 pt-20 pb-14 text-center md:px-8 md:pt-24 md:pb-16">
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-6xl md:leading-[1.02]">
                Marketing yang punya jalur.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-impost-ink-dim">
                Kami bantu klinik dapat reservasi dan developer dapat inquiry,
                dari konten sampai WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CtaPlate href={WA}>
                  Konsultasi Gratis
                  <Chevron className="ml-2" />
                </CtaPlate>
                <a
                  href="#vertical"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-impost-third/40 px-7 py-3.5 text-base font-bold"
                >
                  Pilih Fokus Anda
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TRUST STRIP under hero */}
        <div className="border-b border-impost-third/25">
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-impost-third/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
            {[
              { v: "Gratis", l: "Audit marketing awal" },
              { v: "Leads", l: "Fokus reservasi dan inquiry" },
              { v: "Terbuka", l: "Laporan yang bisa dicek" },
            ].map((s) => (
              <div key={s.l} className="px-2 py-5 text-center">
                <dd className="text-xl font-extrabold tracking-tight">
                  {s.v}
                </dd>
                <dt className="mt-1 text-sm text-impost-ink-dim">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* FOKUS */}
        <Section id="vertical">
          <SectionHeading
            title="Dua jalur yang kami kuasai"
            desc="Pilih yang sesuai dengan bisnis Anda. Tiap fokus punya halaman khusus."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <a
                href="/klinik"
                className="flex h-full flex-col justify-between gap-10 rounded-2xl bg-impost-fourth/50 p-7 md:p-8"
              >
                <p className="text-xs font-extrabold tracking-[0.14em] text-impost-primary uppercase">
                  Klinik
                </p>
                <span>
                  <span className="block text-2xl font-extrabold tracking-tight">
                    Treatment, konten, iklan, reservasi.
                  </span>
                  <span className="mt-2 block text-impost-ink-dim">
                    Jadwal treatment stabil.
                  </span>
                  <span className="mt-4 flex items-center gap-1 font-bold text-impost-primary">
                    Buka jalur klinik <Chevron />
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a
                href="/property"
                className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-impost-third/25 p-7 md:p-8"
              >
                <p className="text-xs font-extrabold tracking-[0.14em] text-impost-secondary uppercase">
                  Property
                </p>
                <span>
                  <span className="block text-2xl font-extrabold tracking-tight">
                    Perhatian, kepercayaan, inquiry.
                  </span>
                  <span className="mt-2 block text-impost-ink-dim">
                    Buyer datang sudah kenal project.
                  </span>
                  <span className="mt-4 flex items-center gap-1 font-bold text-impost-secondary">
                    Buka jalur property <Chevron />
                  </span>
                </span>
              </a>
            </Reveal>
          </div>
        </Section>

        {/* LAYANAN: grouped rows, single divider direction */}
        <Section id="layanan" muted>
          <SectionHeading
            title="Satu tim untuk semua kebutuhan"
            desc="Dari strategi sampai calon customer masuk ke WhatsApp Anda."
          />
          <ul className="mx-auto mt-8 max-w-3xl divide-y divide-impost-third/20 border-y border-impost-third/20">
            {[
              {
                t: "Strategy Marketing",
                d: "Tentukan offer dan jalur yang paling potensial.",
              },
              {
                t: "Content dan Sosmed",
                d: "Konten yang menarik perhatian dan membangun trust.",
              },
              {
                t: "Performance Ads",
                d: "Iklan yang dioptimasi ke chat dan leads.",
              },
              {
                t: "Website dan Landing",
                d: "Tempat calon buyer belajar sebelum bertanya.",
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
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* HASIL: single media moment with functional caption */}
        <Section id="hasil">
          <SectionHeading
            title="Angka yang jadi patokan"
            desc="Contoh hasil klien. Hasil tiap campaign dapat berbeda."
          />
          <Reveal className="mt-8">
            <img
              src="https://picsum.photos/seed/impost-umkm-kerja/1600/700"
              alt="Suasana tim menyiapkan materi campaign"
              loading="lazy"
              decoding="async"
              className="h-[30vh] w-full rounded-2xl border border-impost-third/25 object-cover brightness-[0.8] md:h-[40vh]"
            />
            <p className="mt-3 text-sm text-impost-ink-dim">
              Materi campaign disiapkan per vertikal, lalu diuji ke audience
              yang tepat.
            </p>
          </Reveal>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { v: "12X", l: "ROAS terbaik campaign klinik" },
              { v: "200", l: "Leads satu campaign property" },
              { v: "3", l: "Sales property dalam sebulan" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="rounded-2xl border border-impost-third/25 p-6 text-center">
                  <dd className="text-4xl font-extrabold tracking-tight text-impost-primary tabular-nums md:text-5xl">
                    {s.v}
                  </dd>
                  <dt className="mt-2 text-sm text-impost-ink-dim">{s.l}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Section>

        {/* CARA KERJA: timeline, verb-led */}
        <Section id="cara-kerja" muted>
          <SectionHeading title="Mulai dalam tiga langkah" />
          <ol className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3 md:gap-6">
            {[
              {
                n: "01",
                t: "Chat",
                d: "Ceritakan bisnis dan target Anda. Gratis.",
              },
              {
                n: "02",
                t: "Audit",
                d: "Kami petakan bagian marketing yang bocor.",
              },
              {
                n: "03",
                t: "Jalan",
                d: "Campaign berjalan dan laporan masuk rutin.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 60}>
                <div className="border-t-2 border-impost-primary/60 pt-4">
                  <p className="text-sm font-extrabold text-impost-primary tabular-nums">
                    {s.n}
                  </p>
                  <p className="mt-2 text-xl font-extrabold">{s.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-impost-ink-dim">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* TESTIMONI: editorial quotes */}
        <Section id="testimoni">
          <SectionHeading title="Kata mereka yang sudah jalan" align="left" />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {[
              {
                q: "Jadwal treatment lebih terisi. Iklan akhirnya jelas arahnya.",
                n: "Ayu Lestari, Owner Klinik Ayu, Jakarta",
              },
              {
                q: "Leads masuk sudah tahu project. Sales tidak mulai dari nol.",
                n: "Budi Santoso, Marketing Property, Tangerang",
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

        {/* FAQ */}
        <Section id="faq" muted>
          <SectionHeading title="Pertanyaan yang sering masuk" />
          <Faq
            items={[
              {
                q: "Berapa budget iklan minimal?",
                a: "Tergantung vertikal dan kota. Setelah audit gratis, kami beri rekomendasi yang masuk akal. Tidak memaksa mulai besar.",
              },
              {
                q: "Kapan hasilnya terlihat?",
                a: "Sinyal awal seperti chat dan biaya per leads biasanya 2 sampai 4 minggu. Reservasi dan closing mengikuti kualitas follow up Anda.",
              },
              {
                q: "Apakah konten dibuatkan?",
                a: "Ya. Ada paket yang sudah termasuk konsep, brief shooting, editing, sampai posting.",
              },
              {
                q: "Bagaimana sistem laporannya?",
                a: "Laporan rutin berisi spend, leads, biaya per leads, dan insight. Semua angka bisa Anda verifikasi sendiri.",
              },
            ]}
          />
        </Section>

        <FinalCta
          title="Cari tahu bagian marketing yang bocor."
          desc="Chat sekarang untuk audit gratis. Alurnya chat, audit, jalan."
          ctaHref={WA}
          ctaLabel="Konsultasi Gratis"
          note="Senin sampai Sabtu, 09.00 sampai 18.00 WIB. Respons kurang dari 1x24 jam."
        />
      </main>

      <SiteFooter waHref={WA} />
    </div>
  );
}
