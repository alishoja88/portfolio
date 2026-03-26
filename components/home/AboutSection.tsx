"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SKILLS, ABOUT_BULLETS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-olive-light">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left — heading, paragraph, bullet points */}
          <div>
            <FadeIn>
              <p className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
                About Me
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                Building thoughtful
                <br />
                interfaces.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[0.9375rem] text-text-muted leading-relaxed mb-10 max-w-lg">
                I work at the intersection of product thinking and interface
                craft — building React and TypeScript systems that are scalable,
                performant, and genuinely pleasant to use. From component
                architecture to polished interactions, I care about code clarity
                and user experience equally.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-5">
              {ABOUT_BULLETS.map((item, i) => (
                <FadeIn key={item.title} delay={0.2 + i * 0.08}>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-text shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — stacked skill cards */}
          <div className="flex flex-col gap-4">
            {SKILLS.map((skill, i) => (
              <FadeIn key={skill.title} delay={0.1 + i * 0.1}>
                <div className="bg-surface rounded-2xl p-6 lg:p-7 border border-border/50 card-hover">
                  <p className="text-[0.6rem] uppercase tracking-[0.15em] text-olive font-bold mb-3">
                    {skill.label}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tight mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
