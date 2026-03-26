"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import type { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

/* ─── Mockup Previews ─── */

function DetailPreview({ type }: { type: string }) {
  if (type === "interface") {
    return (
      <div className="w-full h-full bg-surface rounded-xl shadow-soft border border-border/40 flex flex-col overflow-hidden">
        <div className="px-4 py-2 border-b border-border/30 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/30" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/30" />
            <div className="w-2 h-2 rounded-full bg-green-400/30" />
          </div>
          <div className="h-2 rounded-full bg-text-muted/8 w-28 ml-3" />
        </div>
        <div className="flex-1 p-4 flex gap-4">
          <div className="w-28 flex flex-col gap-2 shrink-0">
            <div className="h-16 rounded-lg bg-olive/10" />
            <div className="h-3 rounded bg-text-muted/10 w-4/5" />
            <div className="h-2 rounded bg-text-muted/6 w-3/5" />
            <div className="mt-auto h-6 rounded-lg bg-olive/12" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex-1 h-9 rounded-lg bg-olive/8" />
              <div className="flex-1 h-9 rounded-lg bg-olive/12" />
              <div className="flex-1 h-9 rounded-lg bg-olive/6" />
            </div>
            <div className="flex-1 rounded-lg bg-text-muted/5 p-3 flex flex-col gap-1.5">
              <div className="h-2 rounded-full bg-text-muted/12 w-full" />
              <div className="h-2 rounded-full bg-text-muted/8 w-4/5" />
              <div className="h-2 rounded-full bg-text-muted/10 w-11/12" />
              <div className="h-2 rounded-full bg-text-muted/6 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "platform") {
    return (
      <div className="w-full h-full bg-surface rounded-xl shadow-soft border border-border/40 flex flex-col overflow-hidden">
        <div className="px-4 py-2 border-b border-border/30 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/30" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/30" />
            <div className="w-2 h-2 rounded-full bg-green-400/30" />
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-12 rounded-full bg-olive/10" />
            <div className="h-5 w-5 rounded-full bg-text-muted/10" />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-12 border-r border-border/30 p-2 flex flex-col gap-2">
            <div className="w-full h-2.5 rounded bg-olive/14" />
            <div className="w-full h-2.5 rounded bg-text-muted/10" />
            <div className="w-full h-2.5 rounded bg-text-muted/8" />
            <div className="w-full h-2.5 rounded bg-text-muted/6" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <div className="h-3 rounded bg-text-muted/12 w-1/2 mb-1" />
            <div className="h-2 rounded-full bg-text-muted/10 w-full" />
            <div className="h-2 rounded-full bg-text-muted/8 w-11/12" />
            <div className="h-2 rounded-full bg-text-muted/6 w-4/5" />
            <div className="mt-2 h-2 rounded-full bg-text-muted/10 w-full" />
            <div className="h-2 rounded-full bg-text-muted/8 w-5/6" />
            <div className="mt-auto flex gap-2">
              <div className="h-5 w-12 rounded-full bg-olive/12" />
              <div className="h-5 w-12 rounded-full bg-text-muted/8" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-surface rounded-xl shadow-soft border border-border/40 flex flex-col overflow-hidden">
      <div className="px-4 py-2 border-b border-border/30 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/30" />
          <div className="w-2 h-2 rounded-full bg-green-400/30" />
        </div>
        <div className="h-2 rounded-full bg-text-muted/8 w-20 ml-3" />
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex-1 flex items-end gap-1.5 pb-2 border-b border-border/30">
          {[55, 35, 70, 45, 60, 30, 50, 65, 40, 55, 42].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-olive/15"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="pt-2 flex gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 rounded-full bg-text-muted/10 w-full" />
            <div className="h-1.5 rounded-full bg-text-muted/6 w-3/4" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 rounded-full bg-olive/10 w-full" />
            <div className="h-1.5 rounded-full bg-olive/6 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Impact Stat ─── */

function ImpactStat({ value }: { value: string }) {
  const parts = value.match(/^([+\-]?\d+[%x]?)(.*)/);
  if (!parts) return <span className="text-sm text-text-muted">{value}</span>;

  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-3xl lg:text-4xl font-medium text-olive tracking-tight">
        {parts[1]}
      </span>
      <span className="text-sm text-text-muted leading-snug max-w-40">
        {parts[2].trim()}
      </span>
    </div>
  );
}

/* ─── Main Component ─── */

interface ProjectDetailProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectDetail({ project, reversed }: ProjectDetailProps) {
  const isEven = !reversed;

  return (
    <section className={cn("py-14 lg:py-20", isEven ? "bg-transparent" : "bg-olive-light/40")}>
      <div className="container-base">
        <div className="max-w-2xl">
          {/* Preview — aligned with text, controlled aspect ratio */}
          <FadeIn>
            <div className="aspect-4/3 bg-olive-medium rounded-2xl p-4 lg:p-5 shadow-soft border border-border mb-8">
              <DetailPreview type={project.previewType} />
            </div>
          </FadeIn>
          {/* Label */}
          <FadeIn delay={0.05}>
            <p className="text-[0.6rem] uppercase tracking-[0.14em] text-text-muted font-semibold mb-4">
              {project.number} / {project.category}
            </p>
          </FadeIn>

          {/* Title + subtitle */}
          <FadeIn delay={0.08}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.06] mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-text-muted tracking-wide mb-5">
              {project.subtitle}
            </p>
          </FadeIn>

          {/* Accent line */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-olive" />
              <div className="h-px flex-1 bg-border" />
            </div>
          </FadeIn>

          {/* Impact stats */}
          <FadeIn delay={0.12}>
            <div className="flex flex-wrap gap-8 mb-8">
              {project.impact.map((m) => (
                <ImpactStat key={m} value={m} />
              ))}
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.14}>
            <p className="text-[0.9375rem] text-text-muted leading-[1.75] mb-6 max-w-xl">
              {project.description}
            </p>
          </FadeIn>

          {/* Role */}
          <FadeIn delay={0.16}>
            <p className="text-[0.55rem] uppercase tracking-[0.22em] text-text-muted font-bold mb-7">
              {project.role}
            </p>
          </FadeIn>

          {/* Features */}
          <FadeIn delay={0.18}>
            <div className="mb-7">
              <p className="text-[0.55rem] uppercase tracking-[0.15em] font-bold mb-3">
                Key Features
              </p>
              <ul className="space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-olive shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-border text-xs font-medium text-text-muted tag-hover"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 bg-olive text-surface px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-olive-hover btn-lift"
              >
                Live Demo
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 border border-border bg-surface px-5 py-2.5 rounded-full text-sm font-semibold text-text hover:border-olive/30 btn-lift"
              >
                GitHub
                <GithubIcon />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
