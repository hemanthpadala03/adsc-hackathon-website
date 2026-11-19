import { ParticipationSection } from "@/components/sections/participation-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Participation",
  "Who can take part in the ADSC Hackathon and how registration will work. Registration is not open yet.",
  "/participation",
);

export default function ParticipationPage() {
  return (
    <>
      <PageHero
        eyebrow="Participate"
        title="Take part"
        lede="All experience levels are welcome and interdisciplinary teams are encouraged. Registration opens once the platform is confirmed."
      />
      <ParticipationSection />
    </>
  );
}
