import type { Metadata } from "next";
import {
  Chevron,
  CountUp,
  CtaPlate,
  Faq,
  FinalCta,
  ParallaxBand,
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
  { href: "#faq", label: "FAQ" },
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
        {/* 1 - HERO: centered manifesto, no image, no eyebrow */}
        <section className="border-b border-impost-third/25">
          <div className="mx-auto w-full max-w-3xl px-5 pt-20 pb-14 text-center md:px-8 md:pt-24 md:pb-16">
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl md:leading-[1.05]">
                Biaya Operasional Jalan Terus, Tapi Jadwal Treatment Sering
                Kosong? Waktunya Berhenti Buang Budget.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-impost-ink-dim">
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

        {/* TRUST STRIP under hero */}
        <div className="border-b border-impost-third/25">
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-impost-third/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
            {[
              { v: "Reservasi", l: "Fokus jadwal terisi" },
              { v: "Edukasi", l: "Konten yang membangun trust" },
              { v: "Terukur", l: "Leads dan ROAS jelas" },
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
                n: "01",
                t: "Posting Setiap Hari",
                d: "Tapi yang datang bukan pasien berkualitas, hanya penonton.",
              },
              {
                n: "02",
                t: "Punya Banyak Treatment",
                d: 'Tapi tidak ada satupun yang menonjol sebagai "Magnet Pasien".',
              },
              {
                n: "03",
                t: "Iklan Selalu Berjalan",
                d: "Tapi budget habis tanpa hasil reservasi yang terukur.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div
                  className={`grid gap-2 border-t border-impost-third/25 pt-5 md:grid-cols-12 md:gap-6 ${
                    i === 1 ? "md:ml-16" : i === 2 ? "md:ml-32" : ""
                  }`}
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
                </div>
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
                n: "01",
                t: "Pilih Treatment Andalan",
                d: "Mengurasi treatment paling potensial untuk dijadikan ujung tombak penawaran.",
              },
              {
                n: "02",
                t: "Tarik Perhatian",
                d: "Menghentikan scrolling audiens dengan konten visual dan campaign yang relevan dengan keluhan mereka.",
              },
              {
                n: "03",
                t: "Bangun Kepercayaan",
                d: "Menghapus keraguan calon pasien dengan edukasi medis dan social proof yang solid.",
              },
              {
                n: "04",
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
          <ParallaxBand
            src="https://picsum.photos/seed/impost-klinik-room/1600/700"
            alt="Suasana ruang treatment klinik yang rapi"
            caption="Ruang treatment yang rapi membantu pasien percaya sebelum datang."
          />
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
                    0{i + 1}
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

        {/* FAQ */}
        <Section id="faq" muted>
          <SectionHeading title="Sering ditanyakan klinik" />
          <Faq
            items={[
              {
                q: "Apakah cocok untuk klinik baru?",
                a: "Cocok. Justru di awal penting menentukan treatment magnet dan jalur reservasi agar budget tidak terbuang.",
              },
              {
                q: "Siapa yang membalas chat pasien?",
                a: "Tim Anda tetap membalas. Kami bantu siapkan template respons dan alur follow up agar chat hangat tidak dingin.",
              },
              {
                q: "Bagaimana sistem kontraknya?",
                a: "Fleksibel per bulan setelah periode awal. Kami jaga dengan laporan transparan, bukan kontrak yang mengikat.",
              },
            ]}
          />
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
