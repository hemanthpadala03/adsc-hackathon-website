import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { sponsorSlots } from "@/config/event";
import { siteConfig } from "@/config/site";

type Props = { showLink?: boolean };

export function SponsorsSection({ showLink = false }: Props) {
  return (
    <section aria-labelledby="sponsors-heading" className="bg-muted/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          id="sponsors-heading"
          eyebrow="Partners"
          title="Partners and sponsors"
          lede="No partners have been confirmed yet. If your organisation would like to support a hackathon on sustainable technology, we would like to hear from you."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sponsorSlots.map((slot) => (
            <li
              key={slot.id}
              className="flex h-28 items-center justify-center rounded-lg border border-dashed border-foreground/25 bg-white text-sm text-muted-foreground"
            >
              {slot.label}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">
          {siteConfig.contactEmail ? (
            <>
              Partnership enquiries:{" "}
              <a
                className="font-medium text-rwth underline underline-offset-4"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
            </>
          ) : (
            "A partnership contact will be published here soon."
          )}
        </p>
        {showLink ? (
          <Link
            href="/sponsors"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rwth underline-offset-4 hover:underline"
          >
            Partnering with us <ArrowRight className="size-4" aria-hidden />
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
