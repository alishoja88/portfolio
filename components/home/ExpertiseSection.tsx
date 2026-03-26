"use client";

import { Layers, Zap, Type, Accessibility } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { FOCUS_AREAS } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  Type,
  Accessibility,
};

export function ExpertiseSection() {
  return (
    <section className="py-20 lg:py-28 bg-olive-light">
      <div className="container-base">
        <FadeIn>
          <p className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
            What I Focus On
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12">
            Building with intention.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <FadeIn key={area.title} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-olive flex items-center justify-center">
                    <Icon size={18} className="text-surface" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1.5">
                      {area.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
