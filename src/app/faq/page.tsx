import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "FAQ",
  "Frequently asked questions about the ADSC Hackathon, based on confirmed information.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede="What is confirmed, and what is still open."
      />
      <FaqSection />
    </>
  );
}
