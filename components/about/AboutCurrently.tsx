"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const NOW_ITEMS = [
  {
    label: "Building",
    description:
      "Personal projects to deepen Next.js App Router and testing skills.",
  },
  {
    label: "Reading",
    description:
      "Code from production codebases I admire \u2014 patterns, file structure, decisions.",
  },
  {
    label: "Looking for",
    description:
      "Frontend or full-stack roles where I can ship real product work.",
  },
  {
    label: "Location",
    description: "Currently in Moncton, NB. Relocating to Toronto in early 2026.",
  },
];

export function AboutCurrently() {
  return (
    <section className="py-12 lg:py-24 bg-olive-light/20">
      <div className="container-base">
        <div className="max-w-[640px]">
          <FadeIn>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-4">
              Currently
            </p>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08] mb-3">
              Now
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-px w-12 bg-olive/45 mb-7 sm:mb-9" />
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="bg-surface rounded-2xl border border-border/70 shadow-soft px-5 py-5 sm:px-7 sm:py-6 divide-y divide-border/40">
              {NOW_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <p className="shrink-0 sm:w-32 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-olive mb-1 sm:mb-0">
                    {item.label}
                  </p>
                  <p className="text-[0.9375rem] text-text/70 leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
