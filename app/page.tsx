import type { Metadata } from "next";
import { Reveal } from "./components";

export const metadata: Metadata = {
  title: "Impost — Pilih Vertical",
  description: "Marketing klinik dan property yang punya jalur.",
};

export default function RootPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 md:px-8">
        <Reveal>
          <p className="text-sm font-extrabold tracking-[0.22em] uppercase">
            Impost
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.03em] leading-[0.95] text-balance md:text-6xl">
            Marketing yang punya jalur, bukan sekadar traffic.
          </h1>
        </Reveal>
        <div className="mt-12 grid gap-px border border-impost-third/25 bg-impost-third/25 md:grid-cols-2">
          <Reveal delay={60}>
            <a
              href="/klinik"
              className="group flex h-full flex-col justify-between gap-10 bg-impost-fifth p-8 transition-colors hover:bg-impost-fourth/40"
            >
              <p className="text-sm font-bold tracking-[0.16em] text-impost-primary uppercase">
                Klinik
              </p>
              <div>
                <p className="text-2xl font-extrabold tracking-tight">
                  Treatment → konten → iklan → reservasi.
                </p>
                <p className="mt-3 font-bold text-impost-primary">
                  Lihat jalur klinik
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="/property"
              className="group flex h-full flex-col justify-between gap-10 bg-impost-fifth p-8 transition-colors hover:bg-impost-fourth/40"
            >
              <p className="text-sm font-bold tracking-[0.16em] text-impost-secondary uppercase">
                Property
              </p>
              <div>
                <p className="text-2xl font-extrabold tracking-tight">
                  Perhatian → kepercayaan → inquiry.
                </p>
                <p className="mt-3 font-bold text-impost-secondary">
                  Lihat jalur property
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
