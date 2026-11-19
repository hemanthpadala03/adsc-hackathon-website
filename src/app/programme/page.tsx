import { ProgrammeSection } from "@/components/sections/programme-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Programme",
  "The ADSC Hackathon programme. The schedule has not been published yet.",
  "/programme",
);

export default function ProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Approximately 24 hours of hacking"
        lede="The detailed programme is still being planned and will be published here."
      />
      <ProgrammeSection />
    </>
  );
}
