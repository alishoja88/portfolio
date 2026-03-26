"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function AboutJourney() {
  return (
    <section className="py-12 lg:py-24 bg-olive-light/20">
      <div className="container-base">
        <div className="max-w-[640px]">
          <FadeIn>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-4">
              My Journey
            </p>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08] mb-3">
              From Support to Systems Thinking
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-px w-12 bg-olive/45 mb-7 sm:mb-9" />
          </FadeIn>

          <div className="flex flex-col gap-5">
            <FadeIn delay={0.14}>
              <p className="text-[0.9375rem] text-text/68 leading-[1.88]">
                I started my career in technical support, solving real problems for users on
                the ground. That foundation taught me empathy, patience, and how to think
                about the actual human impact of technology. From there, I transitioned into
                frontend development, bringing that user-first mindset with me.
              </p>
            </FadeIn>

            <FadeIn delay={0.19}>
              <p className="text-[0.9375rem] text-text/68 leading-[1.88]">
                Today, I focus on building thoughtful frontend systems that scale —
                components that work seamlessly across products, code that&apos;s
                maintainable for teams, and experiences that feel polished and intentional.
                I believe the best frontend work combines clean architecture with an
                obsession for detail.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <blockquote className="mt-3 pl-4 border-l-2 border-olive/40">
                <p className="text-[0.9375rem] font-medium text-text/75 italic leading-relaxed">
                  &ldquo;Good code is invisible — users just feel the result.&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
