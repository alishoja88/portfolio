"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer (Contract)",
    company: "Venn Innovation",
    location: "Moncton, Canada",
    period: "June 2025 — Oct 2025",
    badge: "Contract",
    description: [
      "Built a production management platform for an Early Childhood Family Resource Centre (team of 8), replacing a paper-based workflow.",
      "Owned the Events, Programs, and Registration modules end-to-end across frontend and backend.",
      "Built the recurring events system using rrule with \u201cdelete this\u201d vs \u201cdelete future\u201d semantics.",
      "Defined the backoffice frontend architecture, adopted by other developers as the standard for new modules.",
    ],
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "TanStack Query"],
  },
  {
    role: "Frontend Developer (Volunteer)",
    company: "Civic Tech Moncton",
    location: "Moncton, Canada",
    period: "Feb 2025 — Nov 2025",
    badge: "Volunteer",
    description: [
      "Built the Incoming and Outgoing modules end-to-end on the frontend (team of 4) for a donation management app used by a local food bank.",
      "Implemented a barcode scanner for product intake using react-qr-barcode-scanner.",
      "Integrated REST APIs from the backend team and contributed to Figma design.",
      "Application is in active use by the food bank today.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    role: "Career Transition \u2014 Frontend Development",
    company: "Self-Directed",
    location: "Canada",
    period: "Jul 2022 — Jan 2025",
    badge: "Career Transition",
    description: [
      "Transitioned from technical support into frontend development through structured self-study of React, TypeScript, and Next.js.",
      "Built portfolio projects with cloud deployment and test coverage.",
      "Supported the transition with non-technical part-time work.",
    ],
    stack: ["React", "TypeScript", "Next.js"],
  },
  {
    role: "Technical Support Specialist (Tier 3)",
    company: "Dotin (Core Banking Software)",
    location: "Tehran, Iran",
    period: "Nov 2019 — Jun 2022",
    badge: "Full-time",
    description: [
      "Tier 3 production support for a web-based core banking platform used by 5 major banks.",
      "Directly responsible for the cheque subsystem \u2014 owned all tier 3 tickets and bank-facing escalations.",
      "Diagnosed bugs via server logs, in-browser reproduction, and source code reading; wrote SQL queries to investigate data.",
      "Trained two new team members; handled 250\u2013300 tickets per month.",
    ],
    stack: ["SQL", "JavaScript", "Debugging", "Jira"],
  },
];

/* ─── Single timeline entry ─── */

interface EntryProps {
  exp: (typeof EXPERIENCES)[number];
  index: number;
  activeIndex: number;
}

function TimelineEntry({ exp, index, activeIndex }: EntryProps) {
  const isActive = index <= activeIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className="relative pl-8 md:pl-14"
    >
      {/* Dot ring (background circle for active state) */}
      <motion.div
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[3px] w-5 h-5 rounded-full bg-olive/12 z-0"
        style={{ marginLeft: "-10px" }}
      />
      {/* Dot */}
      <motion.div
        animate={{
          scale: isActive ? 1.2 : 1,
          backgroundColor: isActive ? "var(--color-olive)" : "var(--color-border)",
        }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-[7px] w-3 h-3 rounded-full border-[2.5px] border-surface z-10"
        style={{ marginLeft: "-6px" }}
      />

      {/* Content */}
      <div className="pb-12 last:pb-0">
        {/* Period */}
        <div className="flex items-center flex-wrap gap-2 mt-5 mb-1.5">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-text/55">
            {exp.period}
          </p>
          {exp.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-olive/12 border border-olive/25 text-[0.6rem] font-bold text-olive">
              {exp.badge}
            </span>
          )}
        </div>

        {/* Role */}
        <h3 className="font-display text-xl sm:text-2xl md:text-[1.75rem] font-medium tracking-tight leading-tight mb-1">
          {exp.role}
        </h3>

        {/* Company + location — improved contrast */}
        <p className="text-[0.875rem] font-semibold text-text/75 mb-5">
          {exp.company}
          <span className="text-text/45 font-normal mx-1.5">·</span>
          <span className="font-normal text-text/55">{exp.location}</span>
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5">
          {exp.description.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[0.875rem] text-text/60 leading-[1.7]">
              <span className="mt-[8px] w-1 h-1 rounded-full bg-olive/55 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Stack badges */}
        {exp.stack && exp.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full bg-olive/8 border border-olive/18 text-[0.7rem] font-bold text-olive tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main timeline ─── */

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const height = useSpring(rawHeight, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.floor(v * EXPERIENCES.length) - 1;
      setActiveIndex(Math.min(idx, EXPERIENCES.length - 1));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section className="py-12 lg:py-24">
      <div className="container-base">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-3.5"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]"
          >
            Where I&apos;ve Worked
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div
          ref={containerRef}
          className="relative max-w-2xl ml-0 md:ml-8 lg:ml-16"
        >
          {/* Track — thicker, more visible */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border/50" style={{ marginLeft: "-1px" }} />

          {/* Animated fill */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 overflow-hidden" style={{ marginLeft: "-1px" }}>
            <motion.div
              className="w-full bg-olive origin-top"
              style={{ height }}
            />
          </div>

          {/* Entries */}
          <div>
            {EXPERIENCES.map((exp, i) => (
              <TimelineEntry
                key={`${exp.company}-${exp.period}`}
                exp={exp}
                index={i}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
