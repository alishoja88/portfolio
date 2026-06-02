"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const PRINCIPLES = [
  {
    number: "01",
    title: "Clear architecture",
    description:
      "Explicit data flow, predictable patterns, separation between server and client state. The architecture I defined at Venn was adopted by other developers as the standard for new modules.",
  },
  {
    number: "02",
    title: "Tested where it counts",
    description:
      "Unit tests for logic, integration tests for behavior, E2E tests for critical flows. My Atelier project has 91 passing tests across all three layers (Vitest, RTL, Playwright).",
  },
  {
    number: "03",
    title: "Read before write",
    description:
      "Years of reading production code to debug it taught me that good frontend isn\u2019t about being clever \u2014 it\u2019s about being clear.",
  },
];

export function AboutApproach() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container-base">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* Left: heading + paragraph */}
          <div className="flex-1 max-w-lg">
            <FadeIn>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-4">
                My Approach
              </p>
            </FadeIn>

            <FadeIn delay={0.07}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-5 sm:mb-7">
                How I work
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-[0.9375rem] text-text/65 leading-[1.85]">
                I write frontend code that&apos;s honest about what it does. That
                means clear naming, explicit data flow between server and client,
                and tests where they pay back. Most of my recent production work
                uses Next.js App Router with TypeScript &mdash; I&apos;m comfortable
                with the boundaries between server components, client components,
                and server actions.
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-[0.9375rem] text-text/65 leading-[1.85] mt-4">
                My background in Tier 3 support shapes how I think about software.
                I&apos;ve spent years reading code that other people wrote, often
                in a hurry, to debug it under pressure. So when I build something,
                I try to write the kind of code I&apos;d want to inherit.
              </p>
            </FadeIn>
          </div>

          {/* Right: principles */}
          <div className="flex-1 flex flex-col justify-center divide-y divide-border/40">
            {PRINCIPLES.map((p, i) => (
              <FadeIn key={p.number} delay={0.08 + i * 0.09} direction="left">
                <div className="group py-4 sm:py-5 flex items-start gap-4">
                  <span className="font-display text-3xl font-medium text-olive/30 group-hover:text-olive/55 transition-colors duration-250 leading-none mt-0.5 shrink-0 w-9 tabular-nums">
                    {p.number}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[0.9375rem] font-bold text-text/85 mb-1 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[0.8375rem] text-text/55 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
