"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

/* ── Project icon (abstract shape per project type) ── */
function ProjectIcon({ type }: { type: Project["previewType"] }) {
  if (type === "interface") {
    return (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="10" width="8" height="6" rx="1.5" fill="currentColor" opacity="0.2" />
        <rect x="17" y="10" width="9" height="2.5" rx="1" fill="currentColor" opacity="0.15" />
        <rect x="17" y="14.5" width="6" height="1.5" rx="0.75" fill="currentColor" opacity="0.1" />
        <rect x="6" y="19" width="20" height="2.5" rx="1" fill="currentColor" opacity="0.12" />
      </svg>
    );
  }
  if (type === "platform") {
    return (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="4" width="28" height="7" rx="4" fill="currentColor" opacity="0.08" />
        <rect x="6" y="6.5" width="6" height="2" rx="1" fill="currentColor" opacity="0.2" />
        <rect x="6" y="15" width="20" height="3" rx="1" fill="currentColor" opacity="0.12" />
        <rect x="6" y="20" width="14" height="3" rx="1" fill="currentColor" opacity="0.08" />
      </svg>
    );
  }
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="14" width="3" height="8" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="11" y="11" width="3" height="11" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="16" y="13" width="3" height="9" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="21" y="10" width="3" height="12" rx="1" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

/* ── Compact project card ── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-[#dbd7ce] overflow-hidden transition-all duration-400 hover:shadow-medium hover:-translate-y-0.5" style={{ background: "#edeae2" }}>

      {/* Image preview */}
      <div className="relative w-full aspect-video bg-[#0e1820] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-olive/40">
            <ProjectIcon type={(project as Project).previewType} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">

        {/* Title + badge */}
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-display text-xl font-medium tracking-tight text-text truncate group-hover:text-olive transition-colors duration-300">
            {project.title}
          </h3>
          <span className="shrink-0 px-2 py-0.5 rounded-full bg-olive/12 border border-olive/20 text-[0.55rem] font-bold uppercase tracking-widest text-olive">
            {project.number === "01" ? "Featured" : project.category.split(" ")[0]}
          </span>
        </div>

        {/* Description */}
        <p className="text-[0.8rem] text-text/50 leading-snug line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-olive/8 border border-olive/18 text-[0.65rem] font-bold text-olive tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom row — stats + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/6">
          <div className="flex items-center gap-4">
            {project.impact.slice(0, 2).map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[0.7rem] text-text/45 font-medium">
                <span className="w-1 h-1 rounded-full bg-olive/60" />
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/projects"
            className="text-[0.72rem] font-bold text-olive hover:underline underline-offset-4 transition-all duration-200"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container-base">

        <FadeIn>
          <p className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
            Selected Work
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12">
            Featured projects
          </h2>
        </FadeIn>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-olive transition-colors duration-300 group"
            >
              View all projects
              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
