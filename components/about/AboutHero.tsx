"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

const ease = [0.16, 1, 0.3, 1] as const;

const HIGHLIGHTS = [
  { label: "React & TypeScript" },
  { label: "5+ Years Experience" },
  { label: "Moncton, Canada" },
];

export function AboutHero() {
  return (
    <section className="pt-20 pb-12 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-20">
      <div className="container-base">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-20">

          {/* ── Left content ── */}
          <div className="flex-1 max-w-xl text-center">
            <FadeIn>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-4">
                About
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.04] mb-2">
                {SITE_CONFIG.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-base sm:text-lg font-semibold text-text/80 mb-4 sm:mb-5 tracking-tight">
                Front-End Developer
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-sm sm:text-[0.9375rem] text-text/65 leading-[1.8] mb-7 sm:mb-8 max-w-[420px] mx-auto">
                Passionate about building clean, performant, and user-focused
                interfaces. I combine technical precision with thoughtful design
                to create scalable frontend systems that people actually enjoy using.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-2 justify-center">
                {HIGHLIGHTS.map((h) => (
                  <span
                    key={h.label}
                    className="px-4 py-1.5 rounded-full border border-border bg-surface text-[0.75rem] font-semibold text-text/75 hover:border-olive/35 hover:bg-olive-light/50 hover:text-text transition-all duration-200 cursor-default"
                  >
                    {h.label}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right: photo ── */}
          <FadeIn delay={0.1} direction="left" className="flex justify-center lg:justify-end shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-3xl border border-olive/15 rotate-3" />
              <div className="absolute inset-0 rounded-3xl border border-border/50 -rotate-1" />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                className="absolute inset-2 rounded-2xl overflow-hidden bg-olive-light"
              >
                <Image
                  src="/images/headshot.png"
                  alt={SITE_CONFIG.name}
                  fill
                  priority
                  className="object-cover object-[50%_15%]"
                  sizes="320px"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.75 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-surface border border-border shadow-medium rounded-2xl px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                <span className="text-[0.72rem] font-bold text-text/80 tracking-wide">Available for work</span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
