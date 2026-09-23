"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

// Word-mask kinetic reveal. No measurement, wraps naturally.
export function Kinetic({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="-mb-1 inline-block overflow-hidden pb-1 align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.05 + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Subtle global-scroll parallax. Transform only.
export function HeroParallax({
  children,
  className = "",
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, -distance]);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Pinned plate: opaque sticky backdrop piles over the previous chapter
// while content scrolls in normal flow, so long ledgers stay readable.
export function StackChapter({
  no,
  tone = "gold",
  solid = false,
  children,
}: {
  no: string;
  tone?: "gold" | "bronze";
  solid?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yNum = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const numeral =
    tone === "gold" ? "text-impost-primary" : "text-impost-secondary";

  return (
    <section
      // @ts-expect-error section ref is safe here
      ref={ref}
      className={`relative border-b border-impost-third/25 ${
        solid ? "bg-impost-fourth" : "bg-impost-fifth"
      }`}
    >
      <div
        aria-hidden="true"
        className="sticky top-0 -mb-[100dvh] flex h-[100dvh] items-center justify-end overflow-hidden"
      >
        <motion.span
          style={reduce ? undefined : { y: yNum }}
          className={`pointer-events-none -mr-6 text-[42vw] leading-none font-extrabold tracking-[-0.05em] tabular-nums select-none md:text-[26vw] ${
            solid ? "text-impost-fifth/25" : "text-impost-fourth/60"
          } ${reduce ? "" : "will-change-transform"}`}
        >
          {no}
        </motion.span>
      </div>
      <div className="relative">
        <span
          aria-hidden="true"
          className={`absolute top-0 left-5 h-px w-16 md:left-8 ${numeral} bg-current`}
        />
        {children}
      </div>
    </section>
  );
}

// Gold scroll-progress hairline. Hidden under reduced motion.
export function PageProgress({ tone = "gold" }: { tone?: "gold" | "bronze" }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className={`fixed inset-x-0 top-0 z-50 h-[3px] origin-left ${
        tone === "gold" ? "bg-impost-primary" : "bg-impost-secondary"
      }`}
      style={{ scaleX }}
    />
  );
}
