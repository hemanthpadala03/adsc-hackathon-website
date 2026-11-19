import { SponsorsSection } from "@/components/sections/sponsors-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Sponsors and partners",
  "Partner with the ADSC Hackathon. Sponsors have not been announced yet.",
  "/sponsors",
);

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title="Support sustainable technology"
        lede="The hackathon connects academia, industry and society. Partnership details and confirmed partners will be listed here."
      />
      <SponsorsSection />
    </>
  );
}
