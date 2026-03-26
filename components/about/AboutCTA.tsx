"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutCTA() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-olive-light/20">
      <div className="container-base">
        <FadeIn>
          <div className="bg-surface rounded-3xl border border-border/70 shadow-medium px-6 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20 text-center max-w-2xl mx-auto">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-4">
              Get In Touch
            </p>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.1] mb-3">
              Interested in working together?
            </h2>

            <p className="text-sm sm:text-[0.9375rem] text-text/60 leading-relaxed max-w-sm mx-auto mb-7 sm:mb-8">
              Let&apos;s create something great. I&apos;m available for freelance work
              and full-time opportunities.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-olive text-surface px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-olive-hover shadow-soft hover:shadow-medium btn-lift"
              >
                <Mail size={14} strokeWidth={2} />
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
