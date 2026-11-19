import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, getSiteUrl()).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url,
    },
  };
}
