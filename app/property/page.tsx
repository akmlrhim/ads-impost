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
} from "../components";

// TODO: ganti dengan nomor WA asli. Pola pre-filled text siap pakai.
const WA_PROPERTY =
  "https://wa.me/6280000000000?text=Halo%20Impost%2C%20saya%20ingin%20konsultasikan%20marketing%20project%20property%20saya.";

export const metadata: Metadata = {
  title: "Impost - Marketing Property Punya Jalur",
  description:
    "Kami membantu developer membangun jalur marketing dari menarik perhatian, membangun kepercayaan, sampai inquiry.",
};

const NAV = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#bukti", label: "Bukti" },
  { href: "#layanan", label: "Layanan" },
  { href: "#faq", label: "FAQ" },
];

export default function PropertyPage() {
  return (
    <div>
      <SiteHeader
        vertical="Property"
        ctaHref={WA_PROPERTY}
        ctaLabel="Konsultasikan Project Anda"
        links={NAV}
        tone="bronze"
      />

      <main>
        {/* 1 - HERO: centered manifesto, no image, no eyebrow */}
        <section className="border-b border-impost-third/25">
          <div className="mx-auto w-full max-w-3xl px-5 pt-20 pb-14 text-center md:px-8 md:pt-24 md:pb-16">
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl md:leading-[1.05]">
                Stop Bakar Budget Marketing Kalau Sales Masih Harus Memulai
                dari Nol!
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-impost-ink-dim">
                Marketing yang benar tidak hanya mendatangkan traffic, tapi
                menyaringnya menjadi hot buyer. Kami membantu developer
                membangun sistem otomatis yang menarik perhatian, mengedukasi,
                hingga mengirimkan inquiry matang ke meja sales Anda.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CtaPlate href={WA_PROPERTY} tone="bronze">
                  Konsultasikan Project Property Anda
                  <Chevron className="ml-2" />
                </CtaPlate>
              </div>
              <p className="mt-4 text-sm text-impost-ink-dim">
                Cari tahu di titik mana kebocoran budget marketing Anda terjadi.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TRUST STRIP under hero */}
        <div className="border-b border-impost-third/25">
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-impost-third/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
            {[
              { v: "Matang", l: "Buyer teredukasi sebelum ke sales" },
              { v: "Otomatis", l: "Corong yang menyaring inquiry" },
              { v: "Terukur", l: "Metrik jelas tiap campaign" },
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
            title="Project Bagus Bernilai Miliaran Bisa Mati Kutu Kalau Buyer Tidak Menemukannya."
            desc="Jika penjualan mandek, biasanya 3 hal ini yang sedang terjadi:"
            align="left"
          />
          <div className="mt-10 space-y-8">
            {[
              {
                n: "01",
                t: "Project Invisible (Tidak Terlihat)",
                d: "Project Anda kalah saing dan tidak muncul saat buyer potensial sedang mencari properti.",
              },
              {
                n: "02",
                t: "Leads Sampah (Tidak Berkualitas)",
                d: 'WhatsApp sales penuh, tapi 90% hanya "tanya-tanya" tanpa daya beli yang sesuai.',
              },
              {
                n: "03",
                t: "Sales Kehabisan Waktu",
                d: "Marketing gagal membangun trust di awal, sehingga sales harus lelah menjelaskan semuanya dari nol berulang kali.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div
                  className={`grid gap-2 border-t border-impost-third/25 pt-5 md:grid-cols-12 md:gap-6 ${
                    i === 1 ? "md:ml-16" : i === 2 ? "md:ml-32" : ""
                  }`}
                >
                  <p className="text-sm font-extrabold text-impost-secondary tabular-nums md:col-span-1">
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
              Traffic tinggi tidak ada artinya jika tidak mengundang buyer yang
              tepat.
            </p>
          </Reveal>
        </Section>

        {/* 3 - SOLUTION: horizontal timeline */}
        <Section id="solusi" muted>
          <SectionHeading
            title="Sebelum Menghubungi Sales, Buyer Sudah Menilai Project Anda."
            desc="Kami Pastikan Penilaian Mereka Sempurna."
          />
          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-impost-ink-dim">
              Kami membangun &ldquo;Corong Penjualan&rdquo; yang memfilter dan
              mengedukasi buyer sebelum mereka mengetuk pintu Anda:
            </p>
          </Reveal>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                n: "01",
                t: "Tarik Audiens Tepat",
                d: "Iklan dan konten muncul hanya di depan mereka yang sedang mencari dan mampu membeli.",
              },
              {
                n: "02",
                t: "Bangun Ketertarikan",
                d: "Mengubah fitur project menjadi alasan kuat mengapa mereka harus membeli sekarang.",
              },
              {
                n: "03",
                t: "Bentuk Kepercayaan",
                d: "Mempresentasikan lokasi, reputasi developer, dan value project secara elegan dan meyakinkan.",
              },
              {
                n: "04",
                t: "Arahkan Konversi",
                d: "Mendorong buyer yang sudah teredukasi langsung ke WhatsApp sales Anda.",
              },
            ].map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 60}>
                <div className="border-t-2 border-impost-secondary/60 pt-4">
                  <p className="text-sm font-extrabold text-impost-secondary tabular-nums">
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
              Fokus kami: Menyiapkan buyer matang, bukan sekadar melempar leads
              mentah.
            </p>
          </Reveal>
        </Section>

        {/* 4 - SOCIAL PROOF: stats + single media moment */}
        <Section id="bukti">
          <SectionHeading
            title="Marketing Property Harus Bisa Diukur. Ini Buktinya."
            desc="Salah satu campaign properti yang kami tangani menghasilkan metrik yang jelas:"
          />
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { v: "1", l: "Campaign" },
              { v: "200", l: "Leads" },
              { v: "3", l: "Sales dalam 1 bulan" },
              { v: "Rp 30 Jt", l: "Ad Spend" },
              { v: "Rp 7 M", l: "Revenue" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="rounded-2xl border border-impost-third/25 p-6 text-center">
                  <dd className="text-4xl font-extrabold tracking-tight text-impost-secondary tabular-nums md:text-5xl">
                    {s.v}
                  </dd>
                  <dt className="mt-2 text-sm text-impost-ink-dim">{s.l}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-impost-ink-dim">
              Catatan: Hasil dapat bervariasi bergantung pada project, kondisi
              pasar, dan budget penawaran.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <img
              src="https://picsum.photos/seed/impost-property-tower/1600/700"
              alt="Fasad tower property modern"
              loading="lazy"
              decoding="async"
              className="h-[30vh] w-full rounded-2xl border border-impost-third/25 object-cover brightness-[0.8] md:h-[40vh]"
            />
            <p className="mt-3 text-sm text-impost-ink-dim">
              Visual project yang jelas membantu buyer mempertimbangkan lebih
              cepat.
            </p>
          </Reveal>
        </Section>

        {/* 5 - SERVICES: grouped rows */}
        <Section id="layanan" muted>
          <SectionHeading
            title="Satu Tim Ahli untuk Semua Kebutuhan Pemasaran Project Anda."
            desc="Tidak perlu vendor terpisah. Kami tangani ekosistem digital Anda dari hulu ke hilir:"
          />
          <ul className="mx-auto mt-8 max-w-3xl divide-y divide-impost-third/20 border-y border-impost-third/20">
            {[
              {
                t: "Branding dan Growth",
                d: "Menentukan positioning agar project Anda menonjol.",
              },
              {
                t: "Website dan Landing Page",
                d: "Membangun showroom digital 24/7 yang meyakinkan buyer.",
              },
              {
                t: "Content dan Social Media",
                d: "Mengubah spesifikasi teknis menjadi visual yang menggugah selera.",
              },
              {
                t: "Performance Marketing",
                d: "Memburu audiens potensial dengan optimasi iklan presisi.",
              },
              {
                t: "Creative dan Production",
                d: "Menyajikan visual premium yang mencerminkan kelas project Anda.",
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
          <SectionHeading title="Kata tim developer" align="left" />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {[
              {
                q: "Inquiry sudah tahu tipe unit dan harga. Closing lebih cepat.",
                n: "Budi Santoso, Marketing Property, Tangerang",
              },
              {
                q: "Konten project jauh lebih mudah dipahami buyer awam.",
                n: "Dewi Anggraini, Developer, Bogor",
              },
            ].map((t, i) => (
              <Reveal as="figure" key={t.n} delay={i * 60}>
                <blockquote className="border-l-2 border-impost-secondary/60 pl-5 text-xl leading-snug font-bold">
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
          <SectionHeading title="Sering ditanyakan developer" />
          <Faq
            items={[
              {
                q: "Cocok untuk project apa?",
                a: "Perumahan, ruko, apartemen, dan tanah kavling. Kuncinya ada di kejelasan offer dan kesiapan sales menindaklanjuti.",
              },
              {
                q: "Bagaimana kualitas leads dijaga?",
                a: "Dengan targeting tepat, materi yang memfilter seperti harga dan lokasi, dan optimasi rutin ke leads yang responsif.",
              },
              {
                q: "Apakah termasuk foto dan video?",
                a: "Ada paket yang termasuk creative production seperti foto, video, dan brosur digital. Disesuaikan dengan kebutuhan project.",
              },
            ]}
          />
        </Section>

        {/* 6 - CLOSING CTA */}
        <FinalCta
          title="Project Anda Bernilai Miliaran. Jangan Serahkan Marketingnya Pada Strategi Coba-Coba."
          desc="Amankan investasi Anda dengan strategi yang terukur. Kami siap membantu project Anda agar mudah ditemukan, dipertimbangkan, dipercaya, dan dibeli."
          ctaHref={WA_PROPERTY}
          ctaLabel={"Mulai Konsultasikan Project & Target Buyer Anda"}
          tone="bronze"
        />
      </main>

      <SiteFooter
        waHref={WA_PROPERTY}
        vertical="developer dan project property"
      />
    </div>
  );
}
