import { Container } from "@/components/shared/container";
import { SpectrumRule } from "@/components/shared/spectrum-rule";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-deep text-white">
      <Container className="py-16 md:py-24">
        <p className="text-sm font-medium tracking-wide text-[#c7ebe6]">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
          {title}
        </h1>
        <SpectrumRule className="mt-6" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d5e2ea]">{lede}</p>
      </Container>
    </section>
  );
}
