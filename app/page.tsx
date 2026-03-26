import { SectionDivider } from "@/components/layout/SectionDivider";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ExpertiseSection />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}
