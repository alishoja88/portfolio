import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import { SectionDivider } from "@/components/layout/SectionDivider";

export const metadata: Metadata = {
  title: "Projects — Ali Shoja",
  description:
    "A visual collection of work showcasing thoughtful design, scalable frontends, and measurable impact.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <SectionDivider />
      <ProjectsCTA />
    </main>
  );
}
