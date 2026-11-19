import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { challenges } from "@/config/event";

type Props = { showLink?: boolean };

export function ChallengesSection({ showLink = false }: Props) {
  return (
    <section
      aria-labelledby="challenges-heading"
      className="bg-muted/60 py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="challenges-heading"
          eyebrow="Challenges"
          title="Briefs will be announced here"
          lede="Challenges will address real problems with a path to impact. None have been confirmed yet, so the entries below are placeholders and not actual tasks."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {challenges.map((challenge) => (
            <li
              key={challenge.id}
              className="rounded-xl border border-dashed border-foreground/25 bg-white p-6 transition-colors hover:border-turquoise"
            >
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                {challenge.statusLabel}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground">
                {challenge.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {challenge.summary}
              </p>
            </li>
          ))}
        </ul>
        {showLink ? (
          <Link
            href="/challenges"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-rwth underline-offset-4 hover:underline"
          >
            About the challenges <ArrowRight className="size-4" aria-hidden />
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
