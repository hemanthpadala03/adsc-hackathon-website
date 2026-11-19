import Link from "next/link";

import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { SpectrumRule } from "@/components/shared/spectrum-rule";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="size-9" />
            <p className="font-serif text-xl">{siteConfig.name}</p>
          </div>
          <SpectrumRule className="mt-5" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#d5e2ea]">
            Organised by the {siteConfig.organiser} ({siteConfig.organiserShort}) at{" "}
            {siteConfig.university}.
          </p>
          <p className="mt-3 text-sm text-[#c7ebe6]">{siteConfig.motto}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-medium text-[#c7ebe6]">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#d5e2ea] underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-medium text-[#c7ebe6]">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#d5e2ea]">
            {siteConfig.contactEmail ? (
              <li>
                <a
                  className="underline-offset-4 hover:text-white hover:underline"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            ) : (
              <li>Contact details will be added soon.</li>
            )}
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="underline-offset-4 hover:text-white hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-[#aebfcb]">
          © {siteConfig.organiser}. The event name, date and venue are not yet final.
        </Container>
      </div>
    </footer>
  );
}
