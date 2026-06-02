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
              From Tier 3 Support to Building Software
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-px w-12 bg-olive/45 mb-7 sm:mb-9" />
          </FadeIn>

          <div className="flex flex-col gap-5">
            <FadeIn delay={0.14}>
              <p className="text-[0.9375rem] text-text/68 leading-[1.88]">
                I worked 4+ years in technical support, the last 2.5 years as
                Tier 3 production support on a core banking platform serving 5
                major banks. My job was reading server logs, reproducing bugs
                in the browser, and tracing issues through source code and SQL
                queries. That daily exposure to real codebases is what made me
                want to build software, not just support it.
              </p>
            </FadeIn>

            <FadeIn delay={0.19}>
              <p className="text-[0.9375rem] text-text/68 leading-[1.88]">
                After moving to Canada, I spent over two years transitioning
                into frontend development through structured self-study while
                doing non-technical part-time work. In 2025, that work led to a
                volunteer frontend role with Civic Tech Moncton (donation app
                used by a local food bank) and a 5-month full-stack contract
                with Venn Innovation, where I shipped three production modules
                that are in active use today.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <blockquote className="mt-3 pl-4 border-l-2 border-olive/40">
                <p className="text-[0.9375rem] font-medium text-text/75 italic leading-relaxed">
                  &ldquo;Years of reading production code taught me that good
                  frontend isn&apos;t about being clever &mdash; it&apos;s
                  about being clear.&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
