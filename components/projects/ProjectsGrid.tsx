"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

const hasDetailPage = (p: Project) => "caseStudy" in p;

/* ─────────────────── Shared mockup previews ─────────────────── */

function CardPreview({ type }: { type: Project["previewType"] }) {
  if (type === "interface") {
    return (
      <div className="w-full h-full bg-surface rounded-2xl border border-border/40 flex flex-col overflow-hidden shadow-medium">
        <div className="px-5 py-3 border-b border-border/25 flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
          </div>
          <div className="flex-1 h-2.5 rounded-full bg-text-muted/8 mx-2" />
          <div className="h-5 w-14 rounded-full bg-olive/14" />
        </div>
        <div className="flex-1 p-5 grid grid-cols-5 gap-4">
          <div className="col-span-2 rounded-xl bg-olive/10 p-3 flex flex-col gap-2.5">
            <div className="h-3 rounded bg-olive/20 w-3/4" />
            {[85, 68, 50].map((w, i) => (
              <div key={i} className="h-2 rounded bg-text-muted/10" style={{ width: `${w}%` }} />
            ))}
            <div className="mt-auto h-6 rounded-lg bg-olive/16 w-full" />
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <div className="rounded-xl bg-text-muted/5 p-3 flex flex-col gap-2">
              <div className="h-2.5 rounded bg-text-muted/12 w-1/2" />
              <div className="h-2 rounded bg-text-muted/8 w-full" />
              <div className="h-2 rounded bg-text-muted/7 w-11/12" />
            </div>
            <div className="rounded-xl bg-text-muted/5 p-3 flex-1 flex flex-col gap-2">
              <div className="flex items-end gap-1.5 flex-1">
                {[40, 65, 30, 80, 55, 45, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-olive/16" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="h-2 rounded bg-text-muted/8 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "platform") {
    return (
      <div className="w-full h-full bg-surface rounded-2xl border border-border/40 flex flex-col overflow-hidden shadow-medium">
        <div className="px-5 py-3 border-b border-border/25 flex items-center justify-between">
          <div className="h-2.5 rounded bg-text-muted/10 w-20" />
          <div className="flex gap-2.5">
            <div className="h-6 w-16 rounded-full bg-olive/14" />
            <div className="h-6 w-6 rounded-full bg-text-muted/8" />
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-14 border-r border-border/25 p-3 flex flex-col gap-2.5">
            <div className="h-3 rounded bg-olive/20" />
            <div className="h-3 rounded bg-text-muted/10" />
            <div className="h-3 rounded bg-text-muted/8" />
            <div className="h-3 rounded bg-text-muted/6" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="h-3 rounded bg-text-muted/12 w-1/2" />
            <div className="grid grid-cols-3 gap-2 flex-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-xl bg-olive/8 border border-border/20 p-2 flex flex-col gap-1.5">
                  <div className="h-2 rounded bg-text-muted/10 w-3/4" />
                  <div className="h-2 rounded bg-text-muted/7 w-1/2" />
                  <div className="mt-auto h-4 rounded-full bg-olive/14 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-surface rounded-2xl border border-border/40 flex flex-col overflow-hidden shadow-medium">
      <div className="px-5 py-3 border-b border-border/25 flex items-center justify-between">
        <div className="h-2.5 rounded bg-text-muted/10 w-24" />
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-full bg-olive/12" />
          <div className="h-6 w-6 rounded-full bg-text-muted/8" />
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["3x", "200+", "98%"].map((val, i) => (
            <div key={i} className="rounded-xl bg-olive/8 p-3 flex flex-col items-center gap-1">
              <div className="font-display text-lg font-medium text-olive/60">{val}</div>
              <div className="h-1.5 w-8 rounded bg-text-muted/10" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-text-muted/5 p-3 flex flex-col gap-1">
          <div className="flex-1 flex items-end gap-1.5">
            {[50, 35, 65, 45, 70, 30, 55, 40, 60, 25, 75, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 0 ? "rgba(90,107,82,0.22)" : "rgba(90,107,82,0.11)",
                }}
              />
            ))}
          </div>
          <div className="h-px bg-border/30 mt-1" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Featured (hero-scale) card ─────────────────── */

function ProjectCard({ project, isFeatured = false }: { project: Project; isFeatured?: boolean }) {
  const isPage = hasDetailPage(project);

  return (
    <FadeIn>
      <div
        className="group flex flex-col rounded-2xl overflow-hidden border border-[#d5d1c8] shadow-soft hover:shadow-elevation hover:-translate-y-0.5 transition-all duration-400"
        style={{ background: "#e6e3da" }}
      >
        {/* Image preview */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#0e1820]">
          {project.images && project.images.length > 0 ? (
            <ImageCarousel
              images={project.images}
              alt={project.title}
              objectPosition="top center"
              interval={isFeatured ? 4000 : 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]">
              <CardPreview type={(project as Project).previewType} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Type label */}
          <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-olive/10 border border-olive/20 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-olive mb-3">
            <span className="w-1 h-1 rounded-full bg-olive" />
            {project.category}
          </span>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-text mb-2 group-hover:text-olive transition-colors duration-300">
            {project.title}
          </h3>

          {/* One-line description */}
          <p className="text-[0.82rem] text-text/50 leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-olive/8 border border-olive/18 text-[0.65rem] font-bold text-olive tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-text/6">
            {isPage ? (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-olive hover:underline underline-offset-4 transition-all duration-200"
              >
                View Project
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            ) : (
              <span className="text-[0.78rem] font-bold text-text/40">Coming soon</span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] font-semibold text-text/40 hover:text-olive transition-colors duration-200"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─────────────────── Grid ─────────────────── */

export function ProjectsGrid() {
  return (
    <section className="bg-olive-light/35 pb-16 lg:pb-24">
      <div className="container-base pt-10 pb-4 lg:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} isFeatured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
