"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

/* ── Type helpers ── */
type CaseStudyData = {
  heroDescription?: string;
  valueBullets: readonly string[];
  overview: { what: string; howSteps: readonly string[] };
  features: readonly { readonly title: string; readonly description: string }[];
  testing?: {
    subtitle: string;
    layers: readonly {
      readonly title: string;
      readonly count: string;
      readonly details: readonly string[];
    }[];
    results: readonly { readonly label: string; readonly value: string }[];
  };
  techStack: Record<string, readonly string[]>;
  techDescriptions: Record<string, string>;
  challenges: readonly { readonly title: string; readonly description: string }[];
  highlights: readonly string[];
};

function hasCaseStudy(p: Project): p is Project & { caseStudy: CaseStudyData } {
  return "caseStudy" in p;
}

/* ── Image captions per index ── */
const IMG_CAPTIONS: Record<string, readonly string[]> = {
  receipttrack: [
    "Dashboard overview",
    "Receipt upload flow",
    "Expense analytics",
    "Smart categorization",
    "Search and filtering",
  ],
};

/* ── Section card wrapper ── */
const card = "bg-[#edeae2] rounded-2xl border border-[#dbd7ce]";
const sectionBgA = "#f5f2eb";
const sectionBgB = "#eeebe3";

interface Props {
  project: Project;
}

export function ProjectCaseStudy({ project }: Props) {
  const cs = hasCaseStudy(project) ? project.caseStudy : null;
  const images = "images" in project ? (project.images as readonly string[]) : [];
  const [activeImg, setActiveImg] = useState(0);
  const captions = IMG_CAPTIONS[project.slug] ?? [];

  return (
    <main className="min-h-screen">

      {/* ══════════ HERO — two-column ══════════ */}
      <section
        className="relative pt-14 pb-14 lg:pt-20 lg:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f5f2eb 0%, #eeebe2 50%, #e8e4d8 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e1d1a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container-base relative z-10">
          {/* Back */}
          <FadeIn>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-text/45 hover:text-olive transition-colors duration-200 mb-8 group">
              <ArrowLeft size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to Projects
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_52%] gap-10 lg:gap-14 items-start">

            {/* ── LEFT: content ── */}
            <div className="flex flex-col">
              <FadeIn>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive/12 border border-olive/25 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-olive mb-5">
                  <span className="w-1 h-1 rounded-full bg-olive" />
                  {project.category}
                </span>
              </FadeIn>

              <FadeIn delay={0.04}>
                <h1 className="font-display text-5xl sm:text-6xl font-medium tracking-tight leading-[1.02] text-text mb-3">
                  {project.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.06}>
                <p className="text-lg text-text/55 leading-snug mb-5">
                  {project.subtitle}
                </p>
              </FadeIn>

              <FadeIn delay={0.08}>
                <p className="text-[0.875rem] text-text/60 leading-[1.8] mb-6 max-w-md">
                  {cs?.heroDescription ?? project.description}
                </p>
              </FadeIn>

              {/* Value bullets */}
              {cs && (
                <FadeIn delay={0.1}>
                  <ul className="flex flex-col gap-2 mb-6">
                    {cs.valueBullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[0.82rem] text-text/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              )}

              {/* Tags */}
              <FadeIn delay={0.12}>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-olive/10 border border-olive/22 text-[0.7rem] font-bold text-olive tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.14}>
                <div className="flex flex-wrap gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-surface text-sm font-semibold hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200">
                    Live Demo <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-text/20 text-text/70 text-sm font-semibold hover:border-olive hover:text-olive hover:-translate-y-0.5 transition-all duration-200">
                    <GithubIcon size={14} /> View Code
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* ── RIGHT: gallery ── */}
            {images.length > 0 && (
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-3">
                  {/* Main preview */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[#0e1820] shadow-medium" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={images[activeImg]}
                      alt={`${project.title} — ${captions[activeImg] ?? `Screenshot ${activeImg + 1}`}`}
                      fill
                      className="object-cover object-top transition-opacity duration-500"
                      sizes="(max-width: 1024px) 100vw, 54vw"
                      priority
                    />
                  </div>
                  {/* Caption */}
                  <p className="text-[0.7rem] text-text/35 font-medium text-center tracking-wide">
                    {captions[activeImg] ?? `Screenshot ${activeImg + 1}`}
                  </p>
                  {/* Thumbnails */}
                  <div className="flex gap-2">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImg(i)}
                        className={`relative flex-1 rounded-lg overflow-hidden bg-[#0e1820] transition-all duration-200 ${
                          i === activeImg ? "ring-2 ring-olive ring-offset-2 ring-offset-[#eeebe2]" : "opacity-60 hover:opacity-100"
                        }`}
                        style={{ aspectRatio: "16/10" }}
                      >
                        <Image src={src} alt="" fill className="object-cover object-top" sizes="120px" />
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ OVERVIEW ══════════ */}
      {cs && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgA }}>
          <div className="container-base">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-6">Overview</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* What */}
              <FadeIn delay={0.04}>
                <div className={`${card} p-6 lg:p-7 h-full`}>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text/38 mb-2.5">What it does</p>
                  <p className="text-[0.875rem] text-text/65 leading-[1.8]">{cs.overview.what}</p>
                </div>
              </FadeIn>
              {/* How */}
              <FadeIn delay={0.08}>
                <div className={`${card} p-6 lg:p-7 h-full`}>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text/38 mb-2.5">How it works</p>
                  <ol className="flex flex-col gap-2">
                    {cs.overview.howSteps.map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5 text-[0.85rem] text-text/65 leading-snug">
                        <span className="w-5 h-5 rounded-full bg-olive/12 flex items-center justify-center shrink-0 mt-0.5 text-[0.6rem] font-bold text-olive">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ══════════ FEATURES ══════════ */}
      {cs && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgB }}>
          <div className="container-base">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-2">Features</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text mb-8">What it can do</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {cs.features.map((feat, i) => (
                <FadeIn key={feat.title} delay={0.04 * i}>
                  <div className={`${card} p-5 h-full`} style={{ background: sectionBgA }}>
                    <div className="w-6 h-6 rounded-full bg-olive/12 border border-olive/18 flex items-center justify-center mb-3">
                      <span className="text-[0.58rem] font-bold text-olive">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-[0.85rem] font-bold text-text mb-1">{feat.title}</h3>
                    <p className="text-[0.78rem] text-text/50 leading-relaxed">{feat.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ TESTING ══════════ */}
      {cs?.testing && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgA }}>
          <div className="container-base">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-2">Testing</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text mb-3">Tested &amp; Verified</h2>
              <p className="text-[0.86rem] text-text/58 leading-relaxed max-w-2xl mb-8">{cs.testing.subtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-6">
              {cs.testing.layers.map((layer, i) => (
                <FadeIn key={layer.title} delay={0.04 * i}>
                  <div className={`${card} p-5 h-full`} style={{ background: sectionBgB }}>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-text/40 mb-2">{layer.title}</p>
                    <p className="text-[0.82rem] font-semibold text-olive mb-3">{layer.count}</p>
                    <ul className="space-y-2">
                      {layer.details.map((item) => (
                        <li key={item} className="text-[0.78rem] text-text/58 leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.08}>
              <div className={`${card} p-5`} style={{ background: sectionBgB }}>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text/40 mb-3">Results</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cs.testing.results.map((result) => (
                    <div key={result.label} className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-surface/70 px-3 py-2.5">
                      <span className="text-[0.78rem] text-text/58">{result.label}</span>
                      <span className="text-[0.78rem] font-semibold text-olive">{result.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ══════════ TECH STACK ══════════ */}
      {cs && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgA }}>
          <div className="container-base">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-2">Stack</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text mb-8">Built with</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {Object.entries(cs.techStack).map(([group, techs], i) => (
                <FadeIn key={group} delay={0.04 * i}>
                  <div className={`${card} p-5 h-full flex flex-col`}>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-text/38 mb-3">{group}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {techs.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-olive/10 border border-olive/18 text-[0.68rem] font-bold text-olive tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                    {cs.techDescriptions[group] && (
                      <p className="text-[0.75rem] text-text/45 leading-relaxed mt-auto">{cs.techDescriptions[group]}</p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ CHALLENGES ══════════ */}
      {cs && cs.challenges.length > 0 && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgB }}>
          <div className="container-base">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-2">Decisions</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text mb-8">Technical challenges</h2>
            </FadeIn>
            <div className={`grid grid-cols-1 gap-3.5 ${cs.challenges.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {cs.challenges.map((ch, i) => (
                <FadeIn key={ch.title} delay={0.04 * i}>
                  <div className={`${card} p-5 h-full`} style={{ background: sectionBgA }}>
                    <div className="w-6 h-6 rounded-full bg-olive/12 border border-olive/18 flex items-center justify-center mb-3">
                      <span className="text-[0.58rem] font-bold text-olive">{String.fromCharCode(65 + i)}</span>
                    </div>
                    <h3 className="text-[0.85rem] font-bold text-text mb-1">{ch.title}</h3>
                    <p className="text-[0.78rem] text-text/50 leading-relaxed">{ch.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ HIGHLIGHTS ══════════ */}
      {cs && cs.highlights.length > 0 && (
        <section className="py-12 lg:py-16" style={{ background: sectionBgA }}>
          <div className="container-base max-w-2xl">
            <FadeIn>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-olive mb-2 text-center">Highlights</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text mb-8 text-center">Key capabilities</h2>
            </FadeIn>
            <div className="flex flex-col gap-2.5">
              {cs.highlights.map((item, i) => (
                <FadeIn key={item} delay={0.04 * i}>
                  <div className={`flex items-start gap-3 ${card} px-5 py-3.5`}>
                    <span className="w-5 h-5 rounded-full bg-olive/15 flex items-center justify-center shrink-0 mt-px">
                      <Check size={11} strokeWidth={3} className="text-olive" />
                    </span>
                    <p className="text-[0.84rem] font-medium text-text/65 leading-snug">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="py-10 lg:py-14 border-t border-[#dbd7ce]" style={{ background: sectionBgA }}>
        <div className="container-base">
          <FadeIn>
            <p className="text-[0.8rem] text-text/40 text-center mb-5">
              Explore the live product or review the implementation details in the repository.
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-text/45 hover:text-olive transition-colors duration-200 group">
              <ArrowLeft size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              All Projects
            </Link>
            <div className="flex gap-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-surface text-sm font-semibold hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200">
                Live Demo <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-text/20 text-text/70 text-sm font-semibold hover:border-olive hover:text-olive hover:-translate-y-0.5 transition-all duration-200">
                <GithubIcon size={13} /> View Code
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
