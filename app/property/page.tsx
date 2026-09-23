import type { Metadata } from "next";
import {
  Chapter,
  CtaPlate,
  FigureBand,
  Reveal,
  SiteFooter,
  SiteHeader,
} from "../components";
import {
  HeroParallax,
  Kinetic,
  PageProgress,
  StackChapter,
} from "../motion-ux";

// TODO: ganti dengan nomor WA asli. Pola pre-filled text siap pakai.
const WA_PROPERTY =
  "https://wa.me/6280000000000?text=Halo%20Impost%2C%20saya%20ingin%20konsultasikan%20marketing%20project%20property%20saya.";

export const metadata: Metadata = {
  title: "Impost — Marketing Property Punya Jalur",
  description:
    "Kami membantu developer membangun jalur marketing dari menarik perhatian, membangun kepercayaan, sampai inquiry.",
};

const PROBLEMS = [
  {
    no: "01",
    name: "Sulit ditemukan",
    desc: "Project tidak muncul saat calon buyer mulai mencari.",
  },
  {
    no: "02",
    name: "Leads tidak berkualitas",
    desc: "Inquiry banyak, tapi sedikit yang benar-benar potensial.",
  },
  {
    no: "03",
    name: "Sales terlalu banyak menjelaskan",
    desc: "Marketing belum membangun cukup informasi dan kepercayaan sebelum buyer menghubungi sales.",
  },
];

const PATH = [
  {
    no: "01",
    name: "TARIK",
    desc: "Project muncul di depan audience yang tepat.",
  },
  {
    no: "02",
    name: "BUAT TERTARIK",
    desc: "Keunggulan project dikemas menjadi alasan untuk mencari tahu.",
  },
  {
    no: "03",
    name: "BANGUN TRUST",
    desc: "Lokasi, developer, fasilitas, harga, dan value dijelaskan dengan tepat.",
  },
  {
    no: "04",
    name: "ARAHKAN",
    desc: "Buyer yang sudah tertarik diarahkan ke WhatsApp / sales.",
  },
];

const SERVICES = [
  {
    name: "Branding & Growth",
    desc: "Positioning & arah komunikasi project.",
  },
  {
    name: "Content & Social Media",
    desc: "Membuat project lebih menarik dan mudah dipahami.",
  },
  {
    name: "Website & Landing Page",
    desc: "Tempat buyer mempelajari project sebelum bertanya.",
  },
  {
    name: "Performance Marketing",
    desc: "Mendatangkan audience dan mengoptimalkan campaign.",
  },
  {
    name: "Creative & Production",
    desc: "Visual yang membuat project lebih layak diperhatikan.",
  },
];

export default function PropertyPage() {
  return (
    <div>
      <PageProgress tone="bronze" />
      <SiteHeader
        vertical="Property"
        ctaHref={WA_PROPERTY}
        ctaLabel="Konsultasikan Project Anda"
        tone="bronze"
      />

      <main>
        {/* 01 — HERO */}
        <section className="border-b border-impost-third/25">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-medium tracking-[0.16em] text-impost-ink-dim uppercase">
                  Impost — Performance Marketing untuk Property
                </p>
              </Reveal>
              <h1 className="mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.03em] text-balance md:text-6xl">
                <Kinetic text="Sudah Keluar Budget Marketing. Tapi Buyer Property Masih Harus Dikejar Sales?" />
              </h1>
            </div>
            <HeroParallax className="lg:col-span-5 lg:pt-24">
              <Reveal delay={120}>
                <p className="max-w-md text-base leading-[1.7] text-impost-ink-dim">
                  Marketing seharusnya membantu sales mendapatkan buyer yang
                  sudah mengenal dan mempertimbangkan project. Bukan membuat
                  sales mengulang penjelasan dari nol.
                </p>
                <p className="mt-4 max-w-md text-base leading-[1.7]">
                  Kami membantu developer membangun jalur marketing dari menarik
                  perhatian → membangun kepercayaan → menghasilkan inquiry.
                </p>
                <div className="mt-8">
                  <CtaPlate href={WA_PROPERTY} tone="bronze">
                    Konsultasikan Project Anda
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </CtaPlate>
                </div>
                <p className="mt-4 text-sm text-impost-ink-dim">
                  Cari tahu bagian marketing mana yang masih menghambat
                  penjualan.
                </p>
              </Reveal>
            </HeroParallax>
          </div>
        </section>

        {/* BAND — placeholder project property */}
        <FigureBand
          src="https://picsum.photos/seed/impost-property-tower/1600/800"
          alt="Placeholder fasad tower property modern"
        />

        {/* 02 — MASALAH */}
        <StackChapter no="02" tone="bronze">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <Chapter no="02" tone="bronze">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Project Bagus Bisa Tetap Sepi Kalau Buyer Tidak Menemukannya.
                </h2>
                <p className="mt-4 text-lg text-impost-ink-dim">
                  Biasanya masalahnya ada di sini:
                </p>
              </Reveal>
              <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-12">
                {PROBLEMS.map((p, i) => (
                  <Reveal
                    as="li"
                    key={p.no}
                    delay={i * 60}
                    className={
                      i === 0
                        ? "md:col-span-5"
                        : i === 1
                          ? "md:col-span-5 md:col-start-8"
                          : "md:col-span-6 md:col-start-4"
                    }
                  >
                    <div className="border-t-2 border-impost-secondary/70 pt-5">
                      <p className="text-sm font-bold tracking-[0.16em] text-impost-secondary tabular-nums">
                        {p.no}
                      </p>
                      <p className="mt-3 text-2xl font-extrabold tracking-tight uppercase md:text-3xl">
                        {p.name}
                      </p>
                      <p className="mt-2 leading-[1.7] text-impost-ink-dim">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal>
                <p className="mt-8 max-w-xl text-base leading-[1.7] text-impost-ink-dim">
                  Marketing yang hanya mendatangkan traffic belum tentu
                  mendatangkan buyer.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 03 — JALUR */}
        <StackChapter no="03" tone="bronze" solid>
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <Chapter no="03" tone="bronze">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Sebelum Buyer Menghubungi Sales, Mereka Sudah Menilai Project
                  Anda.
                </h2>
                <p className="mt-4 text-lg text-impost-ink-dim">
                  Karena itu kami membangun jalurnya:
                </p>
              </Reveal>
              <ol className="mt-10 border-t border-impost-third/25">
                {PATH.map((s, i) => (
                  <Reveal as="li" key={s.no} delay={i * 60}>
                    <div className="grid gap-1 border-b border-impost-third/25 py-6 sm:grid-cols-12 sm:gap-4">
                      <p className="text-sm font-bold tracking-[0.16em] text-impost-secondary tabular-nums sm:col-span-2">
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
                  Bukan sekadar mencari leads. Tapi menyiapkan buyer sebelum
                  masuk ke sales.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 04 — ANGKA */}
        <StackChapter no="04" tone="bronze">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <Chapter no="04" tone="bronze">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Marketing Property Harus Bisa Bicara Dalam Angka.
                </h2>
              </Reveal>
              <Reveal delay={60}>
                <dl className="mt-10 grid gap-px border border-impost-third/25 bg-impost-third/25 sm:grid-cols-3">
                  {[
                    { v: "1", l: "Campaign" },
                    { v: "200", l: "Leads" },
                    { v: "3", l: "Sales" },
                  ].map((s) => (
                    <div key={s.l} className="bg-impost-fifth px-6 py-8">
                      <dd className="text-5xl font-extrabold tracking-[-0.03em] text-impost-secondary tabular-nums md:text-6xl">
                        {s.v}
                      </dd>
                      <dt className="mt-2 text-sm font-bold tracking-[0.16em] uppercase">
                        {s.l}
                      </dt>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 max-w-xl text-base leading-[1.7] text-impost-ink-dim">
                  3 Sales dalam 1 bulan. Salah satu campaign property yang kami
                  tangani. Hasil campaign dapat berbeda tergantung project,
                  market, offer, budget, dan faktor lainnya.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* 05 — LAYANAN */}
        <StackChapter no="05" tone="bronze" solid>
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <Chapter no="05" tone="bronze">
              <Reveal>
                <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-balance md:text-5xl md:leading-[1.02]">
                  Semua Yang Dibutuhkan Project Untuk Dipasarkan, Dalam Satu
                  Tim.
                </h2>
              </Reveal>
              <ul className="mt-10 border-t border-impost-third/25">
                {SERVICES.map((s, i) => (
                  <Reveal as="li" key={s.name} delay={i * 60}>
                    <div className="grid gap-1 border-b border-impost-third/25 py-5 sm:grid-cols-12 sm:gap-4">
                      <p className="text-lg font-bold md:text-xl sm:col-span-5">
                        {s.name}
                      </p>
                      <p className="leading-[1.7] text-impost-ink-dim sm:col-span-6">
                        {s.desc}
                      </p>
                      <span
                        aria-hidden="true"
                        className="text-sm font-bold text-impost-third tabular-nums sm:col-span-1 sm:text-right"
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal>
                <p className="mt-8 text-base leading-[1.7] text-impost-ink-dim">
                  Strategi. Kreatif. Traffic. Conversion.
                </p>
              </Reveal>
            </Chapter>
          </div>
        </StackChapter>

        {/* BAND — placeholder fasilitas project */}
        <FigureBand
          src="https://picsum.photos/seed/impost-property-lobby/1600/800"
          alt="Placeholder lobi dan fasilitas project"
        />

        {/* 06 — CTA AKHIR */}
        <section>
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.03em] leading-[0.95] text-balance md:text-6xl">
                  <Kinetic text="Project Anda Sudah Bernilai Miliaran. Jangan Biarkan Marketing Menjadi Bagian yang Paling Tidak Pasti." />
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <Reveal delay={60}>
                <p className="text-base leading-[1.7] text-impost-ink-dim">
                  Kami bantu membangun jalur agar project Anda:
                </p>
                <ul className="mt-4 border-t border-impost-third/25">
                  {["ditemukan", "dipertimbangkan", "dipercaya", "dihubungi"].map(
                    (w) => (
                      <li
                        key={w}
                        className="border-b border-impost-third/25 py-3 text-lg font-bold"
                      >
                        {w}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-8">
                  <CtaPlate href={WA_PROPERTY} tone="bronze">
                    Konsultasikan Project Anda
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </CtaPlate>
                </div>
                <p className="mt-4 text-sm text-impost-ink-dim">
                  Mulai dari membahas project dan target buyer Anda.
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
