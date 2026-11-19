import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaqList } from "@/components/sections/faq-list";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/config/event";

type Props = { preview?: boolean };

export function FaqSection({ preview = false }: Props) {
  const items = preview ? faqs.slice(0, 5) : faqs;
  return (
    <section aria-labelledby="faq-heading" className="bg-muted/60 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions"
            lede="Answers cover only what is confirmed. Everything else is marked as not yet announced."
          />
          {preview ? (
            <Link
              href="/faq"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rwth underline-offset-4 hover:underline"
            >
              All questions <ArrowRight className="size-4" aria-hidden />
            </Link>
          ) : null}
        </div>
        <FaqList items={items} />
      </Container>
    </section>
  );
}
