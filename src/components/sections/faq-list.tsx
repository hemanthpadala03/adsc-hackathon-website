"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types/content";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion className="border-t border-border">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="py-5 text-base text-foreground">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
