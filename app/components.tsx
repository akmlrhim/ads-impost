"use client";

import Link from "next/link";
import { CaretRight, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

// Single icon family for the project (Phosphor). Client boundary lives here
// so server pages never import the icon package directly.
export function Chevron({ className = "" }: { className?: string }) {
  return (
    <CaretRight
      size={20}
      weight="bold"
      aria-hidden="true"
      className={className}
    />
  );
}

// Motion-based reveal. Transform and opacity only. Static under reduced motion.
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "figure";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as as unknown as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  const M = (
    as === "li"
      ? motion.li
      : as === "section"
        ? motion.section
        : as === "span"
          ? motion.span
          : as === "figure"
            ? motion.figure
            : motion.div
  ) as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}

// Shape rule: buttons are full pill, cards are 16px, inputs n/a.
export function CtaPlate({
  href,
  children,
  tone = "gold",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "gold" | "bronze";
}) {
  const reduce = useReducedMotion();
  const fill =
    tone === "gold"
      ? "bg-impost-primary hover:bg-impost-primary-dark text-[#040404]"
      : "bg-impost-secondary hover:bg-impost-primary-dark text-[#040404]";
  if (reduce) {
    return (
      <a
        href={href}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-base font-bold tracking-tight sm:whitespace-nowrap ${fill}`}
      >
        {children}
      </a>
    );
  }
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 text-base font-bold tracking-tight sm:whitespace-nowrap ${fill}`}
    >
      {children}
    </motion.a>
  );
}

export function Section({
  id,
  children,
  muted = false,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-impost-third/25 ${
        muted ? "bg-impost-fourth/25" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  desc,
  align = "center",
}: {
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const pos = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${pos}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 leading-relaxed text-impost-ink-dim">{desc}</p>
      ) : null}
    </Reveal>
  );
}

export type NavLink = { href: string; label: string };

export function SiteHeader({
  vertical,
  ctaHref,
  ctaLabel,
  links = [],
  tone = "gold",
}: {
  vertical: string;
  ctaHref: string;
  ctaLabel: string;
  links?: NavLink[];
  tone?: "gold" | "bronze";
}) {
  const btn =
    tone === "gold"
      ? "bg-impost-primary hover:bg-impost-primary-dark text-[#040404]"
      : "bg-impost-secondary hover:bg-impost-primary-dark text-[#040404]";
  return (
    <header className="sticky top-0 z-40 border-b border-impost-third/25 bg-impost-fifth/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-extrabold tracking-[0.18em] uppercase">
            Impost
          </span>
          <span className="hidden text-sm text-impost-ink-dim sm:inline">
            {vertical}
          </span>
        </Link>
        {links.length > 0 ? (
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-6 text-sm font-semibold text-impost-ink-dim lg:flex"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-impost-ink">
                {l.label}
              </a>
            ))}
          </nav>
        ) : null}
        <a
          href={ctaHref}
          className={`rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap ${btn}`}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-impost-third/25">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 40}>
          <details
            className="group border-b border-impost-third/20 last:border-0"
            {...(i === 0 ? { open: true } : {})}
          >
            <summary className="cursor-pointer list-none px-6 py-4 font-bold marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span
                  aria-hidden="true"
                  className="text-impost-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="px-6 pb-5 leading-relaxed text-impost-ink-dim">
              {f.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCta({
  title,
  desc,
  ctaHref,
  ctaLabel,
  note,
  tone = "gold",
}: {
  title: string;
  desc: string;
  ctaHref: string;
  ctaLabel: React.ReactNode;
  note?: string;
  tone?: "gold" | "bronze";
}) {
  return (
    <section className="bg-impost-fourth">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-impost-ink-dim">
            {desc}
          </p>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5">
          <CtaPlate href={ctaHref} tone={tone}>
            {ctaLabel}
            <Chevron className="ml-2" />
          </CtaPlate>
          {note ? (
            <p className="mt-3 text-sm text-impost-ink-dim">{note}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter({
  waHref = "https://wa.me/6280000000000",
  vertical = "Klinik dan Property",
}: {
  waHref?: string;
  vertical?: string;
}) {
  return (
    <footer className="bg-impost-fifth">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-base font-extrabold tracking-[0.18em] uppercase">
            Impost
          </p>
          <p className="mt-2 text-sm text-impost-ink-dim">
            Performance marketing untuk {vertical}.
          </p>
          <a
            href={waHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-impost-primary underline-offset-4 hover:underline"
          >
            <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
            Chat WhatsApp <Chevron />
          </a>
        </div>
        <div className="md:col-span-4">
          <p className="text-sm font-extrabold tracking-wider uppercase">
            Layanan
          </p>
          <ul className="mt-3 space-y-2 text-sm text-impost-ink-dim">
            <li>Strategy Marketing</li>
            <li>Content dan Social Media</li>
            <li>Performance Marketing</li>
            <li>Website dan Landing Page</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-extrabold tracking-wider uppercase">
            Operasional
          </p>
          <ul className="mt-3 space-y-2 text-sm text-impost-ink-dim">
            <li>Senin sampai Sabtu, 09.00 sampai 18.00 WIB</li>
            <li>Respons kurang dari 1x24 jam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-impost-third/25">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-impost-ink-dim md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Impost. Seluruh hak cipta dilindungi.</p>
          <p>Hasil campaign dapat berbeda tiap project.</p>
        </div>
      </div>
    </footer>
  );
}
