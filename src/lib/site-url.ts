/**
 * Canonical origin for metadata and the sitemap.
 * Prefer NEXT_PUBLIC_SITE_URL. On Vercel, fall back to the project domain.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    return `https://${production.replace(/\/$/, "")}`;
  }

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) {
    return `https://${preview.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}
