"use client";

import { FadeIn } from "@/components/ui/FadeIn";

/* ─── Brand SVG icons ─── */

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16" aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#222"
        d="M6 18.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C5.8 15.8 5 15 5 13.6c0-1.5 1.1-2.6 2.9-2.6 1.2 0 2.1.4 2.7 1.5l-1.4.9c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.6.3C11 15.5 12 16.3 12 17.8c0 1.7-1.3 2.8-3.1 2.8-1.7 0-2.8-.8-3.4-2l1.5-.9zm7.5-6.3h1.8v5.1c0 2.3-1.1 3.2-2.7 3.2-.5 0-.9-.1-1.2-.2l.3-1.6c.2.1.5.2.8.2.6 0 1-.3 1-1.5v-5.2z"
      />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path fill="#fff" d="M9.5 7.5h1.3v5.7l4.2-5.7H16v9h-1.3v-5.7L10.5 16.5H9.5V7.5z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 10.85 14.57 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.63 7.15 14.43 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 16.85 9.57 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.63 13.15 9.43 12 7 12z"
      />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.19 0L8.708 2.62l2.76 2.76a1.838 1.838 0 0 1 2.327 2.343l2.658 2.66a1.838 1.838 0 1 1-1.1 1.037l-2.48-2.48v6.511a1.84 1.84 0 1 1-1.51-.036V9.23a1.839 1.839 0 0 1-.999-2.418L7.614 4.087.45 11.25a1.55 1.55 0 0 0 0 2.19l10.48 10.48a1.55 1.55 0 0 0 2.19 0l10.424-10.42a1.55 1.55 0 0 0 0-2.19"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#1b1f23"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#2496ED"
        d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
      />
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#D97757" />
      <path
        fill="#fff"
        d="M14.64 6.8 12 13.6 9.36 6.8H7.2L11.04 17.2h1.92L16.8 6.8h-2.16z"
      />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1a1a1a" />
      <path d="M7 17L12 7l5 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#336791"
        d="M17.128 0a10.134 10.134 0 0 0-2.755.403 5.834 5.834 0 0 0-2.501-.549c-1.765 0-3.25.735-4.218 1.887a9.99 9.99 0 0 0-3.353 1.67C2.568 4.83 1.6 6.696 1.6 8.801c0 1.93.618 3.5 1.595 4.47.409.409.878.7 1.384.876-.016.148-.024.297-.024.446 0 1.29.546 2.457 1.494 3.33C6.996 18.8 8.3 19.2 9.7 19.2c.482 0 .953-.056 1.4-.163a3.97 3.97 0 0 0 2.694 1.063c.73 0 1.415-.197 2.002-.545.46.088.93.134 1.404.134 2.97 0 5.4-1.875 5.4-4.589 0-.67-.17-1.303-.473-1.853A3.897 3.897 0 0 0 23.2 10.4c0-1.55-.794-2.94-2.051-3.77a6.416 6.416 0 0 0-.579-3.72C19.793.983 18.552 0 17.128 0z"
      />
      <path
        fill="#fff"
        d="M12 6.4c2.21 0 4 1.343 4 3s-1.79 3-4 3-4-1.343-4-3 1.79-3 4-3zm0 1.2c-1.546 0-2.8.81-2.8 1.8S10.454 11.2 12 11.2s2.8-.81 2.8-1.8S13.546 7.6 12 7.6z"
      />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="#47A248"
        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.3 6.338 4.633 9.537 5.054 9.809l.096.063a.912.912 0 0 0 .145-.324c.503-1.307 2.276-5.197 5.276-11.197zm-2.67 10.56c-.03.166-.065.308-.09.41a.913.913 0 0 1-.032.128l.065.045c1.078.714 1.79.942 2.156 1.032.13.03.256.054.394.064-.08-.176-.176-.464-.305-.927-.327-1.178-.553-2.47-.61-3.688a14.487 14.487 0 0 1-.016-.524 20.21 20.21 0 0 1-1.563 3.46z"
      />
    </svg>
  );
}

function SQLIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <ellipse cx="8" cy="4.5" rx="5.5" ry="2" stroke="#6b7d5f" strokeWidth="1.3" />
      <path d="M2.5 4.5v7c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2v-7" stroke="#6b7d5f" strokeWidth="1.3" />
      <path d="M2.5 8c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2" stroke="#6b7d5f" strokeWidth="1.3" />
    </svg>
  );
}

/* Generic */

function ComponentsIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
    </svg>
  );
}

function UISystemsIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="3.5" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="1" y="6.5" width="6" height="3.5" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="9" y="6.5" width="6" height="3.5" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
      <rect x="1" y="12" width="14" height="3" rx="1.5" stroke="#6b7d5f" strokeWidth="1.4" />
    </svg>
  );
}

function APIIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <circle cx="3" cy="8" r="2" stroke="#6b7d5f" strokeWidth="1.4" />
      <circle cx="13" cy="8" r="2" stroke="#6b7d5f" strokeWidth="1.4" />
      <path d="M5 8h6" stroke="#6b7d5f" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 5.5l2.5 2.5L9 10.5" stroke="#6b7d5f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M2 12 C2 7.58 5.58 4 10 4" stroke="#6b7d5f" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 4 C12.21 4 14 5.79 14 8 C14 10.21 12.21 12 10 12 C9.1 12 8.27 11.72 7.6 11.24" stroke="#6b7d5f" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 8 L7 5" stroke="#6b7d5f" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="8" r="1" fill="#6b7d5f" />
    </svg>
  );
}

/* ─── Skill groups data ─── */

const SKILL_GROUPS = [
  {
    category: "Core Stack",
    description: "Primary languages and frameworks I build with every day",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
    ],
  },
  {
    category: "UI & Systems",
    description: "Design systems, styling, and component architecture",
    skills: [
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "UI Systems", icon: <UISystemsIcon /> },
      { name: "Components", icon: <ComponentsIcon /> },
    ],
  },
  {
    category: "Tooling & DevOps",
    description: "Version control, containerization, and collaboration",
    skills: [
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub", icon: <GitHubIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document-based data storage",
    skills: [
      { name: "SQL", icon: <SQLIcon /> },
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
    ],
  },
  {
    category: "AI & Productivity",
    description: "AI-powered tools that accelerate development",
    skills: [
      { name: "Claude AI", icon: <ClaudeIcon /> },
      { name: "Cursor AI", icon: <CursorIcon /> },
      { name: "API Integration", icon: <APIIcon /> },
      { name: "Performance", icon: <PerformanceIcon /> },
    ],
  },
];

export function AboutExpertise() {
  return (
    <section className="py-12 lg:py-24 bg-olive-light/20">
      <div className="container-base">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <FadeIn>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive mb-3.5">
                Expertise
              </p>
            </FadeIn>
            <FadeIn delay={0.07}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08]">
                What I Work With
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.12} direction="left">
            <p className="text-[0.875rem] text-text/60 max-w-xs leading-relaxed">
              A focused toolkit chosen for quality, scalability, and developer experience.
            </p>
          </FadeIn>
        </div>

        {/* Skill groups */}
        <div className="flex flex-col divide-y divide-border/40">
          {SKILL_GROUPS.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.08}>
              <div className="py-5 sm:py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">

                {/* Category label */}
                <div className="md:w-52 shrink-0">
                  <p className="text-[0.9375rem] font-bold tracking-tight text-text/85 mb-0.5">
                    {group.category}
                  </p>
                  <p className="text-[0.8rem] text-text/50 leading-snug">
                    {group.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3.5 py-2 bg-surface rounded-xl border border-border/70 hover:border-olive/35 hover:bg-olive-light/50 hover:shadow-soft transition-all duration-200 cursor-default"
                    >
                      <span className="shrink-0 flex items-center justify-center w-4 h-4">
                        {skill.icon}
                      </span>
                      <span className="text-[0.8125rem] font-semibold text-text/70 group-hover:text-text/90 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
