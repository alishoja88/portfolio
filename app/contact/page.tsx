import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMain } from "@/components/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact — Ali Shoja",
  description:
    "Get in touch with Ali Shoja. Available for freelance work and full-time frontend opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMain />
    </main>
  );
}
