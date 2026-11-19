import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusPill } from "@/components/shared/status-pill";
import { capacityPolicy, unconfirmedDetails } from "@/config/event";
import { RegistrationCta } from "@/features/registration/registration-cta";

type Props = { showLink?: boolean };

export function ParticipationSection({ showLink = false }: Props) {
  return (
    <section aria-labelledby="participation-heading" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="participation-heading"
            eyebrow="Participate"
            title="Join a team"
            lede="Different levels of technical experience are welcome, and interdisciplinary teams are encouraged. You work with others on a practical challenge for approximately 24 hours."
          />
          <div className="mt-8 space-y-4">
            <StatusPill>Registration is not open yet</StatusPill>
            <div>
              <RegistrationCta />
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {capacityPolicy.publicStatement}
            </p>
            {showLink ? (
              <Link
                href="/participation"
                className="inline-flex items-center gap-2 text-sm font-medium text-rwth underline-offset-4 hover:underline"
              >
                How participation works <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-foreground">Still to be confirmed</h3>
          <p className="mt-3 text-muted-foreground">
            These details are not final. We will publish them here as soon as they are.
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {unconfirmedDetails.map((detail) => (
              <li
                key={detail}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="text-foreground">{detail}</span>
                <span className="text-muted-foreground">Coming soon</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
