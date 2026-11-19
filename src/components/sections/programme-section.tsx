import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { schedule, scheduleNote } from "@/config/event";

type Props = { showLink?: boolean };

const stages = ["Opening", "Hacking", "Presentations", "Closing"];

export function ProgrammeSection({ showLink = false }: Props) {
  return (
    <section aria-labelledby="programme-heading" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            id="programme-heading"
            eyebrow="Programme"
            title="Schedule coming soon"
            lede={scheduleNote}
          />
          {showLink ? (
            <Link
              href="/programme"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rwth underline-offset-4 hover:underline"
            >
              Programme page <ArrowRight className="size-4" aria-hidden />
            </Link>
          ) : null}
        </div>
        {schedule.length > 0 ? (
          <ol className="space-y-6 border-l border-foreground/15 pl-6">
            {schedule.map((item) => (
              <li key={item.id}>
                <p className="text-sm font-medium text-teal">
                  {item.time ?? "Time to be confirmed"}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="space-y-4" aria-label="Programme placeholder">
            {stages.map((stage) => (
              <li
                key={stage}
                className="flex items-center justify-between rounded-lg border border-dashed border-foreground/25 px-5 py-4"
              >
                <span className="font-medium text-foreground">{stage}</span>
                <span className="text-sm text-muted-foreground">Coming soon</span>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
