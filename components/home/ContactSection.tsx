"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT_DETAILS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-olive-medium">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text + buttons */}
          <div>
            <FadeIn>
              <p className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
                {"Let\u2019s Connect"}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                Ready to work
                <br />
                together?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[0.9375rem] text-text-muted leading-relaxed mb-8 max-w-lg">
                {"I\u2019m interested in freelance projects and full-time opportunities where I can contribute to thoughtful product interfaces and scalable systems."}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-olive text-surface px-6 py-3 rounded-full text-sm font-semibold hover:bg-olive-hover btn-lift"
                >
                  Contact Me
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — stacked info cards */}
          <div className="flex flex-col gap-4">
            {CONTACT_DETAILS.map((detail, i) => (
              <FadeIn key={detail.label} delay={0.15 + i * 0.1} direction="left">
                <div className="bg-surface rounded-2xl p-6 border border-border/50 card-hover">
                  <p className="text-[0.6rem] uppercase tracking-[0.15em] text-olive font-bold mb-3">
                    {detail.label}
                  </p>
                  <h3 className="font-display text-2xl font-medium tracking-tight mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {detail.description}
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
