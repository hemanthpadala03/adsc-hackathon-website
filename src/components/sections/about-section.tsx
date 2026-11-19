import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          id="about-heading"
          eyebrow="Vision"
          title="Technology with a purpose beyond the demo"
        />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            The {siteConfig.name} brings together students, researchers and
            practitioners to work on problems where data and technology can make a
            tangible difference, with sustainability at the centre.
          </p>
          <p>
            It is organised by the {siteConfig.organiser} at {siteConfig.university},
            and aims to connect academia, industry and society around shared, practical
            challenges.
          </p>
          <p>
            Teams are mixed on purpose. Engineers, designers, scientists and people new
            to hackathons all have something to contribute.
          </p>
        </div>
      </Container>
    </section>
  );
}
