import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";

import { Container } from "@/components/shared/container";
import { FieldIllustration } from "@/components/shared/field-illustration";
import { Motto } from "@/components/shared/motto";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rwth via-teal to-green text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_20%,rgba(31,181,176,0.22),transparent),radial-gradient(50%_60%_at_5%_100%,rgba(0,84,159,0.45),transparent)]"
      />
      <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal">
          <p className="text-sm font-medium tracking-wide text-[#c7ebe6]">
            {siteConfig.organiser} · {siteConfig.university}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <Motto tone="inverse" className="mt-5 text-3xl sm:text-4xl md:text-4xl" />
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d5e2ea]">
            A large-scale, interdisciplinary hackathon about technology that serves
            people and the planet. Approximately 24 hours, practical challenges, and
            teams from every discipline and every level of experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "xl" }),
                "bg-white text-deep hover:bg-white/90",
              )}
            >
              Explore Hackathon
              <ArrowRight aria-hidden />
            </Link>
            <Link
              href="/sponsors"
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Become a Partner
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#aebfcb]">
            Date, venue and registration will be announced here once confirmed.
          </p>
        </div>
        <div className="hidden lg:block" aria-hidden>
          <FieldIllustration />
        </div>
      </Container>
    </section>
  );
}
