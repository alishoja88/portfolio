"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Venn Innovation",
    location: "Moncton, Canada",
    period: "June 2025 — Oct 2025",
    current: true,
    description: [
      "Developed scalable frontend and backend features",
      "Built reusable UI components using React and TypeScript",
      "Collaborated with cross-functional teams",
      "Contributed to API design and architecture",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Civic Tech Moncton",
    location: "Moncton, Canada",
    period: "Feb 2025 — Oct 2025",
    current: false,
    description: [
      "Built responsive UI for community platforms",
      "Improved usability and accessibility",
      "Worked in agile team environment",
      "Delivered user-focused frontend features",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dotin",
    location: "Tehran, Iran",
    period: "2021 — 2023",
    current: false,
    description: [
      "Developed banking UI systems",
      "Built multi-step loan application flow",
      "Improved performance and UI consistency",
      "Integrated REST APIs with frontend",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "Dotin",
    location: "Tehran, Iran",
    period: "2019 — 2021",
    current: false,
    description: [
      "Resolved system-level issues",
      "Debugged frontend and backend problems",
      "Improved response workflows",
      "Supported large-scale banking systems",
    ],
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
  const isCurrent = index === 0;

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
          {isCurrent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-olive/12 border border-olive/25 text-[0.6rem] font-bold text-olive">
              <span className="w-1 h-1 rounded-full bg-olive animate-pulse" />
              Current
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
