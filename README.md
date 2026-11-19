# ADSC Hackathon website

Website for the hackathon organised by the Aachen Data Science Club (ADSC) at RWTH Aachen University.
Motto: **Innovate. Sustain. Inspire.**

The official event name, date, venue, programme, speakers, sponsors, challenges, registration platform and
pricing are **not final**. The site uses "ADSC Hackathon" as a provisional name and shows "Coming soon"
for everything unconfirmed. `sustAInIT` is a working theme, not the confirmed name.

## Stack

Next.js 16 (App Router, Cache Components), React 19, TypeScript (strict), Tailwind CSS 4,
shadcn/ui (Base UI) and Lucide icons.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                 | Purpose          |
| ---------------------- | ---------------- |
| `npm run lint`         | ESLint           |
| `npm run typecheck`    | `tsc --noEmit`   |
| `npm run build`        | Production build |
| `npm run format`       | Prettier (write) |
| `npm run format:check` | Prettier (check) |

## Where to edit content

All editable content is centralised in `src/config/`:

- `site.ts` – name, motto, theme label, contact email.
- `event.ts` – pillars, highlights, challenges, schedule, sponsor slots, FAQ, capacity policy.
- `registration.ts` – registration URL. Leave `url` as `null` until a platform is confirmed; the
  registration button then stays disabled.
- `navigation.ts`, `social.ts` – navigation and social links.

**Capacity:** the venue limit of 199 includes participants, volunteers and ADSC members. Never publish
it as the number of participant places.

## Structure

```
src/app/            routes (/, about, challenges, programme, sponsors, faq, participation)
src/components/     ui (shadcn), layout, sections, shared
src/features/       independent modules (registration; dashboards, submissions etc. later)
src/config, lib, types
```

## Branches and deployment

`feature/initial-website` → `dev` → `main`. CI (`.github/workflows/ci.yml`) runs lint, typecheck and
build. Deploy with Vercel's GitHub integration: `main` is production, other branches get previews.
Optionally set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the final domain.
