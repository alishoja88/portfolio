"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/lib/constants";

const STATS = [
  { value: `${PROJECTS.length}`, label: "Projects" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "TypeScript" },
];

const ALL_TAGS = [...new Set(PROJECTS.flatMap((p) => [...p.tags]))].slice(0, 6);

export function ProjectsHero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container-base">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-16">

          {/* ── Left: badge + title + description ── */}
          <div className="flex-1">
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-olive" />
                Portfolio
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-5">
                All Projects
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-md">
                A visual collection of work showcasing thoughtful design, scalable
                frontends, and measurable impact.
              </p>
            </FadeIn>
          </div>

          {/* ── Right: stats + tech snapshot ── */}
          <div className="flex flex-col gap-8 lg:min-w-[260px] lg:pb-1">

            {/* Stats row */}
            <FadeIn delay={0.18} direction="left">
              <div className="flex gap-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-text leading-none">
                      {s.value}
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-text-muted/60 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Divider */}
            <FadeIn delay={0.22} direction="left">
              <div className="h-px bg-border/60" />
            </FadeIn>

            {/* Tech stack used */}
            <FadeIn delay={0.25} direction="left">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] font-bold text-text-muted/50 mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {ALL_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-olive/10 border border-olive/25 text-[0.72rem] font-bold text-olive tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
