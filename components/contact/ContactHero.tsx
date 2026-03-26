"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function ContactHero() {
  return (
    <section className="pt-24 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 text-center">
      <div className="container-base">
        <FadeIn>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-5">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.07}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight leading-[1.06] mb-4 max-w-2xl mx-auto">
            Let&apos;s work together
          </h1>
        </FadeIn>

        <FadeIn delay={0.13}>
          <p className="text-[0.9375rem] text-text/60 leading-relaxed max-w-md mx-auto">
            Have a project in mind or just want to chat?
            I&apos;d love to hear from you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
