import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { highlights } from "@/config/event";

export function HighlightsSection() {
  return (
    <section aria-labelledby="highlights-heading" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="highlights-heading"
          eyebrow="Format"
          title="What to expect"
        />
        <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="border-l-2 border-turquoise pl-5">
              <dt className="font-serif text-2xl text-foreground">{item.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
