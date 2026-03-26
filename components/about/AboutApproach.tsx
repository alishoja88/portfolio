"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const PRINCIPLES = [
  {
    number: "01",
    title: "Clean Architecture",
    description:
      "Code that future teammates can read, extend, and trust. Maintainability is a feature.",
  },
  {
    number: "02",
    title: "Scalable UI",
    description:
      "Components built to grow with the product — not rebuilt every quarter.",
  },
  {
    number: "03",
    title: "User-Focused Design",
    description:
      "Every decision traced back to the person clicking the button, not the developer writing it.",
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
                Clean, scalable, and human-centered frontend.
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-[0.9375rem] text-text/65 leading-[1.85]">
                I believe frontend development is about more than writing code that works —
                it&apos;s about writing code that lasts. That means building UI systems that
                scale with your product, components that are intuitive for other developers
                to use, and interfaces that respect the user&apos;s time and attention.
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-[0.9375rem] text-text/65 leading-[1.85] mt-4">
                I focus on clean architecture, performance optimization, and creating
                reusable patterns that let teams move faster without sacrificing quality.
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
