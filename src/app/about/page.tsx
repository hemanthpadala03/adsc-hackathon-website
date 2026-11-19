import { AboutSection } from "@/components/sections/about-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About",
  `The vision behind the ${siteConfig.name}: sustainability, emerging technology and real-world impact.`,
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Innovate. Sustain. Inspire."
        lede={siteConfig.description}
      />
      <AboutSection />
      <PillarsSection />
      <HighlightsSection />
    </>
  );
}
