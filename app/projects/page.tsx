import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import { SectionDivider } from "@/components/layout/SectionDivider";

export const metadata: Metadata = {
  title: "Projects — Ali Shoja",
  description:
    "Three projects built end-to-end while transitioning into frontend development. Each one shipped, tested, and deployed to a real cloud platform.",
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
