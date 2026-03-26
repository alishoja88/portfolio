"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease } },
};

/* ─── Inline brand SVGs ─── */

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22" aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        fill="#fff"
        d="M13.5 14.5v1.7c.3.2.7.3 1.1.3.5 0 .9-.1 1.2-.4.3-.3.4-.6.4-1 0-.3-.1-.6-.3-.8-.2-.2-.5-.4-1-.6l-.5-.2c-.3-.1-.5-.2-.6-.3-.1-.1-.2-.3-.2-.4 0-.1.1-.3.2-.4.1-.1.3-.1.5-.1.2 0 .4.1.6.2.2.1.3.3.3.5h1.4c0-.5-.2-.9-.5-1.2-.4-.3-.8-.5-1.4-.5-.5 0-1 .1-1.3.4-.3.3-.5.6-.5 1.1 0 .3.1.5.2.7.1.2.3.4.5.5.2.1.5.3.8.4l.4.1c.3.1.5.2.6.3.1.1.2.2.2.4 0 .2-.1.3-.2.4-.1.1-.3.2-.6.2-.3 0-.5-.1-.7-.2-.2-.1-.3-.3-.3-.6H13.5zM7 12h3v1.3H8.4v5.2H7V12z"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path
        fill="#fff"
        d="M9.5 7.5h1.3v5.7l4.2-5.7H16v9h-1.3v-5.7L10.5 16.5H9.5V7.5z"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 10.85 14.57 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.63 7.15 14.43 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 16.85 9.57 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.63 13.15 9.43 12 7 12z"
      />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.19 0L8.708 2.62l2.76 2.76a1.838 1.838 0 0 1 2.327 2.343l2.658 2.66a1.838 1.838 0 1 1-1.1 1.037l-2.48-2.48v6.511a1.84 1.84 0 1 1-1.51-.036V9.23a1.839 1.839 0 0 1-.999-2.418L7.614 4.087 .45 11.25a1.55 1.55 0 0 0 0 2.19l10.48 10.48a1.55 1.55 0 0 0 2.19 0l10.424-10.42a1.55 1.55 0 0 0 0-2.19"
      />
    </svg>
  );
}

/* ─── Floating badge ─── */

interface BadgeProps {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay: number;
}

function FloatingBadge({ icon, label, className, delay }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease, delay }}
      className={`absolute flex items-center gap-2 bg-surface/90 backdrop-blur-sm border border-border shadow-medium rounded-2xl px-3 py-2 ${className}`}
    >
      <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-surface border border-border/60 shadow-soft shrink-0">
        {icon}
      </div>
      <span className="text-[0.7rem] font-bold text-text tracking-wide whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-bg">
      {/* Subtle radial glow behind the photo */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(90,107,82,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-base flex flex-col lg:flex-row items-center min-h-svh pt-24 pb-20 lg:pt-0 lg:pb-0 gap-12 lg:gap-0">

        {/* ── Left: text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-xl lg:py-40"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/80 backdrop-blur-sm text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              Available for work
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.02] mb-4"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl font-medium text-text mb-6">
            Front-End Developer
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-text-muted leading-relaxed max-w-md mb-10">
            I build thoughtful React and TypeScript interfaces with a focus on
            real products, clean systems, and refined user experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-olive text-surface px-6 py-3 rounded-full text-sm font-semibold hover:bg-olive-hover btn-lift"
            >
              View My Work
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-border bg-surface/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold text-text hover:border-olive/30 btn-lift"
            >
              Get in Touch
              <Mail size={15} strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: circular photo + floating badges ── */}
        <div className="flex-1 flex items-center justify-center lg:justify-end lg:py-32 relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">

            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-olive/15" />

            {/* Soft glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 60px 20px rgba(90,107,82,0.08)" }}
            />

            {/* Photo circle */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute inset-3 rounded-full overflow-hidden border border-border/60 shadow-elevation"
            >
              <Image
                src="/images/headshot.png"
                alt={SITE_CONFIG.name}
                fill
                priority
                className="object-cover object-[50%_15%]"
                sizes="420px"
              />
              {/* Subtle warm vignette */}
              <div className="absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 40px 12px rgba(246,243,237,0.25)" }}
              />
            </motion.div>

            {/* ── Floating tech badges ── */}

            {/* React — top left */}
            <FloatingBadge
              icon={<ReactIcon />}
              label="React"
              className="-top-2 -left-8 lg:-left-12"
              delay={0.7}
            />

            {/* TypeScript — top right */}
            <FloatingBadge
              icon={<TypeScriptIcon />}
              label="TypeScript"
              className="-top-4 -right-8 lg:-right-10"
              delay={0.85}
            />

            {/* Next.js — middle right */}
            <FloatingBadge
              icon={<NextIcon />}
              label="Next.js"
              className="top-1/2 -translate-y-1/2 -right-10 lg:-right-16"
              delay={1.0}
            />

            {/* Tailwind — bottom right */}
            <FloatingBadge
              icon={<TailwindIcon />}
              label="Tailwind"
              className="-bottom-2 -right-6 lg:-right-8"
              delay={1.1}
            />

            {/* Git — bottom left */}
            <FloatingBadge
              icon={<GitIcon />}
              label="Git"
              className="-bottom-4 -left-6 lg:-left-10"
              delay={0.95}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
