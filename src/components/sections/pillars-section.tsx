import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { pillars } from "@/config/event";

export function PillarsSection() {
  return (
    <section aria-labelledby="pillars-heading" className="bg-muted/60 py-20 md:py-28">
      <Container>
        <SectionHeading id="pillars-heading" eyebrow="Themes" title="Four pillars" />
        <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {pillars.map((pillar) => (
            <li key={pillar.index} className="group border-t border-foreground/15 pt-6">
              <span className="inline-block font-serif text-3xl text-teal transition-transform duration-300 group-hover:translate-x-1">
                {pillar.index}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
