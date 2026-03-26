import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — Ali Shoja",
  description:
    "Frontend developer based in Moncton, Canada. Building thoughtful React and TypeScript interfaces with a focus on craft and scalability.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutJourney />
      <AboutTimeline />
      <AboutExpertise />
      <AboutApproach />
      <AboutCTA />
    </main>
  );
}
