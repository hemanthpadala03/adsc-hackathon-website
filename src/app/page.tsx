import { AboutSection } from "@/components/sections/about-section";
import { ChallengesSection } from "@/components/sections/challenges-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { ParticipationSection } from "@/components/sections/participation-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { ProgrammeSection } from "@/components/sections/programme-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PillarsSection />
      <HighlightsSection />
      <ChallengesSection showLink />
      <ProgrammeSection showLink />
      <SponsorsSection showLink />
      <ParticipationSection showLink />
      <FaqSection preview />
    </>
  );
}
