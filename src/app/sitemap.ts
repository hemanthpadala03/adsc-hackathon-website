import type { MetadataRoute } from "next";

import { footerNavigation } from "@/config/navigation";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return footerNavigation.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
  }));
}
