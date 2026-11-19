import { ChallengesSection } from "@/components/sections/challenges-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Challenges",
  "Practical, impact-driven challenges for the ADSC Hackathon. Briefs will be announced.",
  "/challenges",
);

export default function ChallengesPage() {
  return (
    <>
      <PageHero
        eyebrow="Challenges"
        title="Real problems, practical briefs"
        lede="Teams work on challenges with tangible impact. Briefs have not been published yet."
      />
      <ChallengesSection />
    </>
  );
}
