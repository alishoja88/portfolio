"use client";

import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

/* ─── GitHub icon (lucide-react has no brand icons) ─── */
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

/* ─── Product mockup previews ─── */
function ModalPreview({ type }: { type: Project["previewType"] }) {
  if (type === "interface") {
    return (
      <div className="w-full h-full bg-[#fbf8f3] rounded-xl border border-border/30 flex flex-col overflow-hidden shadow-soft">
        <div className="px-4 py-2.5 border-b border-border/25 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/30" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/30" />
            <div className="w-2 h-2 rounded-full bg-green-400/30" />
          </div>
          <div className="flex-1 h-2 rounded-full bg-text-muted/8 mx-2" />
          <div className="h-4 w-12 rounded-full bg-olive/12" />
        </div>
        <div className="flex-1 p-4 grid grid-cols-5 gap-3">
          <div className="col-span-2 rounded-lg bg-olive/8 p-2.5 flex flex-col gap-2">
            <div className="h-2.5 rounded bg-olive/18 w-3/4" />
            {[82, 65, 48].map((w, i) => (
              <div key={i} className="h-1.5 rounded bg-text-muted/10" style={{ width: `${w}%` }} />
            ))}
            <div className="mt-auto h-5 rounded-md bg-olive/15 w-full" />
          </div>
          <div className="col-span-3 flex flex-col gap-2.5">
            <div className="rounded-lg bg-text-muted/5 p-2.5 flex flex-col gap-1.5">
              <div className="h-2 rounded bg-text-muted/12 w-1/2" />
              <div className="h-1.5 rounded bg-text-muted/8 w-full" />
              <div className="h-1.5 rounded bg-text-muted/7 w-5/6" />
            </div>
            <div className="rounded-lg bg-text-muted/5 p-2.5 flex-1 flex flex-col gap-1">
              <div className="flex-1 flex items-end gap-1">
                {[38, 62, 28, 78, 52, 44, 68].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-olive/15" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "platform") {
    return (
      <div className="w-full h-full bg-[#fbf8f3] rounded-xl border border-border/30 flex flex-col overflow-hidden shadow-soft">
        <div className="px-4 py-2.5 border-b border-border/25 flex items-center justify-between">
          <div className="h-2 rounded bg-text-muted/10 w-16" />
          <div className="flex gap-2">
            <div className="h-5 w-14 rounded-full bg-olive/14" />
            <div className="h-5 w-5 rounded-full bg-text-muted/8" />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-12 border-r border-border/25 p-2 flex flex-col gap-2">
            <div className="h-2.5 rounded bg-olive/18" />
            <div className="h-2.5 rounded bg-text-muted/10" />
            <div className="h-2.5 rounded bg-text-muted/8" />
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-2.5 rounded bg-text-muted/12 w-1/2" />
            <div className="grid grid-cols-3 gap-1.5 flex-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-lg bg-olive/7 border border-border/20 p-2 flex flex-col gap-1">
                  <div className="h-1.5 rounded bg-text-muted/10 w-3/4" />
                  <div className="h-1.5 rounded bg-text-muted/7 w-1/2" />
                  <div className="mt-auto h-3 rounded-full bg-olive/13 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#fbf8f3] rounded-xl border border-border/30 flex flex-col overflow-hidden shadow-soft">
      <div className="px-4 py-2.5 border-b border-border/25 flex items-center justify-between">
        <div className="h-2 rounded bg-text-muted/10 w-20" />
        <div className="flex gap-1.5">
          <div className="h-5 w-5 rounded-full bg-olive/12" />
          <div className="h-5 w-5 rounded-full bg-text-muted/8" />
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {["3x", "200+", "98%"].map((v, i) => (
            <div key={i} className="rounded-lg bg-olive/8 p-2 flex flex-col items-center gap-0.5">
              <span className="font-display text-base font-medium text-olive/65">{v}</span>
              <div className="h-1 w-6 rounded bg-text-muted/10" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg bg-text-muted/5 p-2.5 flex flex-col">
          <div className="flex-1 flex items-end gap-1">
            {[48, 32, 62, 42, 68, 28, 52, 38, 58, 24, 72, 46].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 0 ? "rgba(90,107,82,0.22)" : "rgba(90,107,82,0.10)",
                }}
              />
            ))}
          </div>
          <div className="h-px bg-border/25 mt-1" />
        </div>
      </div>
    </div>
  );
}

/* ─── Main ProjectModal ─── */

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal open={!!project} onClose={onClose}>
      {project && (
        <div className="flex flex-col">
          {/* ── Preview image ── */}
          <div className="relative h-72 sm:h-96 lg:h-104 rounded-t-2xl shrink-0 overflow-hidden bg-[#0e1820]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="820px"
                priority
              />
            ) : (
              <div className="w-full h-full p-5 sm:p-6">
                <ModalPreview type={(project as Project).previewType} />
              </div>
            )}
          </div>

          {/* ── Content ── */}
          <div className="px-7 sm:px-9 py-7 sm:py-8 flex flex-col gap-6">

            {/* Label + title */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-olive mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                {project.category}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.06] text-text">
                {project.title}
              </h2>
              <p className="text-[1.0625rem] text-text/70 mt-2 leading-snug font-medium">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-base text-text/75 leading-[1.8]">
              {project.description}
            </p>

            {/* Problem / Solution */}
            <div className="flex flex-col gap-3 border-l-2 border-olive/30 pl-4">
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.16em] font-bold text-text/40">Problem</span>
                <p className="text-[0.9375rem] text-text/70 mt-1 leading-relaxed">{project.features[0]}</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.16em] font-bold text-text/40">Solution</span>
                <p className="text-[0.9375rem] text-text/70 mt-1 leading-relaxed">{project.features[1]}</p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-olive/12 border border-olive/30 text-[0.78rem] font-bold text-olive tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Impact */}
            <div className="flex flex-col gap-2.5">
              {project.impact.map((m) => (
                <div key={m} className="flex items-center gap-2.5 text-[0.9375rem] text-text/70 font-medium">
                  <Zap size={13} strokeWidth={2} className="text-olive shrink-0" />
                  {m}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 pt-2 border-t border-border/50">
              <a
                href={project.liveUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-olive text-surface px-5 py-3 rounded-full text-sm font-semibold hover:bg-olive-hover btn-lift"
              >
                Live Demo
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={project.githubUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-border bg-surface px-5 py-3 rounded-full text-sm font-semibold text-text hover:border-olive/30 btn-lift"
              >
                GitHub
                <GithubIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
