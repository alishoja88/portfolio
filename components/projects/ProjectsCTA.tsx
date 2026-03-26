"use client";

import { Mail, ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectsCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-base">
        <FadeIn>
          <div className="bg-olive-light rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-4">
              Have a project like these?
            </h2>

            <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-lg mx-auto mb-8">
              {"Let\u2019s build something together. I\u2019m available for freelance work and full-time opportunities."}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-olive text-surface px-6 py-3 rounded-full text-sm font-semibold hover:bg-olive-hover btn-lift"
              >
                Get in Touch
                <Mail size={15} strokeWidth={2} />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-border bg-surface px-6 py-3 rounded-full text-sm font-semibold text-text hover:border-olive/30 btn-lift"
              >
                Back to Portfolio
                <ArrowLeft size={15} strokeWidth={2} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
