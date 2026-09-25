"use client";

import Image from "next/image";
import Link from "next/link";
import { CaretRight, WhatsappLogo } from "@phosphor-icons/react";
import {
  animate,
  motion,
  useInView,
  useMotionValueEvent,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

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
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </M>
  );
}

// Scroll-linked parallax for media bands. Transform only, static when reduced.
export function ParallaxBand({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <Reveal className={`mt-8 ${className}`}>
      <div
        ref={ref}
        className="overflow-hidden rounded-2xl border border-impost-third/25"
      >
        {reduce ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-[30vh] w-full object-cover brightness-[0.8] md:h-[40vh]"
          />
        ) : (
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ y }}
            className="h-[30vh] w-full scale-[1.18] object-cover brightness-[0.8] will-change-transform md:h-[40vh]"
          />
        )}
      </div>
      {caption ? (
        <p className="mt-3 text-sm text-impost-ink-dim">{caption}</p>
      ) : null}
    </Reveal>
  );
}

// Count-up stat. Animates once on entry, snaps to final when reduced.
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(reduce ? value : 0);
  const text = useTransform(mv, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, mv, value, duration]);

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }
  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
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

// Full-bleed hero backdrop. The photo sits under a heavy scrim so the
// headline keeps AAA contrast; it reads as atmosphere, not as focal imagery.
export function HeroBackdrop({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-impost-fifth/82" />
      <div className="absolute inset-0 bg-gradient-to-b from-impost-fifth/70 via-impost-fifth/60 to-impost-fifth" />
      <div className="absolute inset-0 bg-gradient-to-r from-impost-fifth via-transparent to-impost-fifth/70" />
    </div>
  );
}

// Problem row with a photo that surfaces on hover. The image starts nearly
// invisible and scales in, so the text stays the primary read at rest.
export function MediaRow({
  media,
  children,
  className = "",
  align = "left",
}: {
  media: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden ${className}`}
    >
      <Image
        src={media}
        alt=""
        aria-hidden
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        className="-z-10 scale-100 object-cover opacity-[0.14] saturate-[0.7] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-30 group-hover:saturate-100 motion-reduce:transition-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-impost-fifth via-impost-fifth/85 to-transparent"
      />
      <div
        className={
          align === "center"
            ? "relative mx-auto max-w-xl text-center"
            : "relative"
        }
      >
        {children}
      </div>
    </div>
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
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-24">
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
      <h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
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
  // Sticky in-flow header (not fixed). Transparent over the full-height hero,
  // solid background once scrolled. Scroll state via Motion, no raw listener.
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  return (
    <header
      className={`sticky top-0 z-40 -mb-20 transition-colors ${
        scrolled
          ? "border-b border-impost-third/25 bg-impost-fifth/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {" "}
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="Impost - beranda">
          <img
            src="/logo_original.webp"
            alt="Impost"
            width={949}
            height={718}
            className="h-12 w-auto"
          />
        </Link>
        <div className="ml-auto flex items-center gap-6">
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
      </div>
    </header>
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
          <img
            src="/logo_original.webp"
            alt="Impost"
            width={949}
            height={718}
            className="h-10 w-auto"
          />
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
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm text-impost-ink-dim">
            <li>
              <a
                href="https://legal.impostmedia.com/id/kebijakan-privasi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-impost-ink hover:underline"
              >
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a
                href="https://legal.impostmedia.com/id/syarat-ketentuan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-impost-ink hover:underline"
              >
                Syarat &amp; Ketentuan
              </a>
            </li>
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
