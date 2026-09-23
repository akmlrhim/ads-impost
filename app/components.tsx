"use client";

import { useEffect, useRef } from "react";

// ponytail: single IO instance per Reveal, unobserved after firing. No libs.
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "p" | "span";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error polymorphic ref is safe here
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function Chapter({
  no,
  children,
  tone = "gold",
}: {
  no: string;
  children: React.ReactNode;
  tone?: "gold" | "bronze";
}) {
  const numeral =
    tone === "gold" ? "text-impost-primary" : "text-impost-secondary";
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div
        aria-hidden="true"
        className={`text-5xl font-extrabold tabular-nums tracking-tight md:col-span-3 md:text-6xl ${numeral}`}
      >
        {no}
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export function CtaPlate({
  href,
  children,
  tone = "gold",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "gold" | "bronze";
}) {
  const fill =
    tone === "gold"
      ? "bg-impost-primary hover:bg-impost-primary-dark text-[#040404]"
      : "bg-impost-secondary hover:bg-impost-primary-dark text-[#040404]";
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-7 py-3.5 text-base font-bold tracking-tight transition-colors ${fill}`}
    >
      {children}
    </a>
  );
}

export function SiteHeader({
  vertical,
  ctaHref,
  ctaLabel,
  tone = "gold",
}: {
  vertical: string;
  ctaHref: string;
  ctaLabel: string;
  tone?: "gold" | "bronze";
}) {
  const link =
    tone === "gold" ? "text-impost-primary" : "text-impost-secondary";
  return (
    <header className="border-b border-impost-third/25">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <p className="text-sm font-extrabold tracking-[0.22em] uppercase">
          Impost
          <span className="ml-3 font-medium text-impost-ink-dim normal-case tracking-normal">
            {vertical}
          </span>
        </p>
        <a
          href={ctaHref}
          className={`text-sm font-bold underline-offset-4 hover:underline ${link}`}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-impost-third/25">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm font-extrabold tracking-[0.22em] uppercase">
          Impost
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-impost-ink-dim">
          Hasil setiap campaign dapat berbeda tergantung project, market,
          offer, budget, dan faktor lainnya.
        </p>
      </div>
    </footer>
  );
}
