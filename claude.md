# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Handoff note** — This is the SparkLabs corporate website renewal. The project owner is **Eunbit**. The day-to-day operator is non-technical, so when you summarize work for the human, focus on the *action they need to take* (click, review, approve) rather than code internals. When working in code, full technical depth is expected.

---

## 1. What this project is

SparkLabs website full renewal, repositioning from a Korea-centric traditional VC to a **"Global AI-First Venture Capital / accelerator network."** Every page — hero, home sections, Programs, Portfolio, Entities — is framed around the global network (multiple SparkLabs entities) and the AI portfolio.

- **Owner:** Eunbit (all decisions, DNS/deploy ops, external comms)
- **Target production domain:** `www.sparklabs.co.kr`
- **Staging:** `new.sparklabs.co.kr` (Vercel, auto-deploy from `main`)
- **Languages:** Korean (default) + English, URL-prefixed `/ko` and `/en`
- **Current phase:** Most pages built; DNS cutover to production and a 2nd-pass audit of individual team bios are the remaining open items.

### Naming & brand rules (important)
- In **all** SparkLabs documents/comms, refer to the owner only as **Eunbit** — no nicknames, no parenthetical alternates.
- Tone — KO: polite, clear business Korean, minimal flourish. EN: clear, direct, globally resonant, minimal adjectives. Both should let the "Global AI-First" positioning read naturally.
- Do not attribute a group/team achievement to a single partner in bios. Global AI deals (e.g. OpenAI) are led by Bernard Moon — avoid "under his leadership"-style phrasing for collective wins.

---

## 2. Commands

```bash
npm run dev        # Dev server at http://localhost:3000 (redirects to /ko)
npm run build      # Production build
npm run typecheck  # TypeScript check (tsc --noEmit)
npm run lint       # ESLint via next lint
```

No test suite — verify changes by running the dev server. **Before pushing, run `npm run typecheck` and `npm run lint`.**

---

## 3. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14.2 (App Router) |
| Language | TypeScript 5.6, React 18.3 |
| i18n | next-intl 3.22 (`ko` default, `en`) |
| Content | MDX (`@next/mdx`, `@mdx-js/*`) + `gray-matter` frontmatter |
| Markdown render | `remark-gfm`, `rehype-slug`, `rehype-pretty-code` + `shiki` |
| Styling | Tailwind CSS 3.4 + `class-variance-authority`, `clsx`, `tailwind-merge` |
| Icons | `lucide-react` |
| Map | `react-simple-maps` (homepage global network map) |
| Email | Resend (contact form) |
| Ops DB | Notion (Contact Inquiries DB) |
| Hosting | Vercel |

---

## 4. Repository map

```
content/                 # MDX "CMS" — see §6. Pairs of {ko,en}/<slug>.mdx
messages/ko.json,en.json # UI strings (next-intl)
public/                  # brand/, hero/, team/, portfolio/logos/, co-investors/, promo/
src/
  app/
    layout.tsx                  # root <html> shell
    opengraph-image.tsx, robots.ts, sitemap.ts
    api/contact/route.ts        # contact POST → Resend + Notion
    [locale]/
      layout.tsx, page.tsx (home), not-found.tsx
      about/        overview, team, advisors, entities (+ entities/[slug])
      programs/     index, batch, partnership, spark-claw, global
      portfolio/    index, ai
      newsroom/     index, press, media, perspectives, announcements,
                    insights, [kind]/[slug] (detail)
      contact/, apply/
      privacy/, terms/, cookie-policy/
  components/       home/, layout/, newsroom/, portfolio/, team/, contact/, legal/, seo/
  i18n/             routing.ts (locales config), request.ts
  lib/              data sources + helpers (see §5)
  middleware.ts     next-intl middleware (locale prefixing)
```

---

## 5. Data sources (TypeScript, not MDX)

These `src/lib/*.ts` files are the source of truth for structured content. Most carry `{ ko, en }` bilingual fields — **edit both languages together.**

- `entities.ts` — `EntityMeta[]` for the 7 SparkLabs entities (slugs: `korea`, `group`, `taipei`, `saudi-arabia`, `cultiv8`, `biolabs`, `partners`). Drives the homepage world map and About → Entities. Holds coordinates, accent color, focus blurb. Long-form prose lives in `content/entities/{locale}/<slug>.mdx`.
- `entity-details.ts` — extended per-entity detail used on entity pages.
- `team.ts` — leadership, co-founders & partners (5), divisions, and advisors. `TeamMember` has `slug`, `name` (EN), optional `koName`, `title{ko,en}`, `entity`, optional `bio{ko,en}` (partners have bios; many members don't), `linkedinUrl`, `photo`. **This file is the focus of the ongoing bio audit.**
- `portfolio.ts` — curated `PortfolioCompany[]`: `tagline{ko,en}`, `category`, `entity` (slug), `aiPick` (surfaces on `/portfolio/ai`), `featured`, `logoFile` → `/public/portfolio/logos/`.
- `portfolio-full.ts` — the full scraped dataset (~168 companies). Also `public/portfolio/portfolio_data.json` and `public/portfolio/scraped-portfolio.ts` are the raw source.
- `co-investors.ts`, `testimonials.ts`, `metrics.ts` — homepage co-investor grid, testimonials, and the impact/stats bar.
- `content.ts` — MDX loader (build-time, `gray-matter`). `newsroom.ts` — aggregates newsroom collections, excludes `draft: true`, sorts by `date` desc. `seo.ts`, `markdown.ts`, `utils.ts` — helpers (`utils.ts` exports the `cn()` class merger).

---

## 6. Content system (MDX)

MDX files live at `content/{collection}/{locale}/<slug>.mdx` and are loaded at build time. Collections: `entities`, `press`, `media`, `insights`, `perspectives`, `announcements` (+ portfolio/programs prose where used).

**Bilingual pairing is mandatory** — every entry exists as `ko/<slug>.mdx` AND `en/<slug>.mdx` with the **same slug**. Never edit one language and leave the other stale.

Required newsroom frontmatter: `title`, `date` (YYYY-MM-DD), `summary`, `entity`, `tags`. Optional: `outlet`, `sourceUrl`, `draft`.

Current inventory (approx.): **10 press releases**, **~21 media coverage** entries, plus insights/perspectives/announcements — all as ko/en pairs.

> Note: "Insights" was briefly renamed "Perspectives" then reverted per UX feedback — both routes/collections currently exist. Check `nav-items.tsx` and `newsroom/` before assuming which label is live.

---

## 7. Routing & i18n

- All pages under `src/app/[locale]/`. Locales `['ko','en']`, default `ko`, `localePrefix: 'always'` (`src/i18n/routing.ts`).
- `src/middleware.ts` runs next-intl on every request except `api`, `_next`, `_vercel`, metadata files, and any path with a dot. `/` → `/ko`.
- UI strings in `messages/{ko,en}.json`, typed through next-intl. Top-level keys: `site, seo, nav, about, portfolio, programs, newsroom, hero, impact, network, why, ai, news, programsShort, footer, locale, coInvestors, testimonials`. **Keep both JSON files structurally identical.**
- Use the `Link`/navigation helpers exported from `src/i18n/routing.ts` (locale-aware), not bare `next/link`, for internal nav.

---

## 8. Design tokens (Tailwind)

Defined in `tailwind.config.ts`:
- Palette: `ink`, `navy`, `brand.blue`; accent spectrum `spark.{blue,orange,yellow,green,teal,pink,red,violet}` (per-entity color coding); neutrals `surface.{DEFAULT,subtle,border}`. Current direction is indigo-purple + black + cream.
- Fonts: `font-sans` = Pretendard Variable (KO) + Inter (EN); `font-display` = Inter first.
- **Safelisting:** dynamic accent classes (e.g. `bg-spark-blue/20`) composed from runtime strings are safelisted in `tailwind.config.ts` so they survive purge. If you add a new runtime-composed color class, add it to the safelist or it will be stripped in production.

---

## 9. Contact form

`src/app/api/contact/route.ts` — single POST endpoint. Routes each submission to a category-specific inbox via **Resend** and writes a record to a **Notion** database. The two channels are attempted independently; the route returns 502 only if **both** fail.

Category → inbox mapping (env): `founders → CONTACT_INBOX_FOUNDERS`, `partnership → CONTACT_INBOX_PARTNERSHIP`, `press → CONTACT_INBOX_PRESS`, `general → CONTACT_INBOX_GENERAL`, fallback `CONTACT_INBOX_EMAIL`.

The Notion DB must have properties: `Name` (title), `Email` (email), `Organization` (rich_text), `Category` (select), `Subject` (rich_text), `Locale` (select), `SubmittedAt` (date), `Status` (select). **The live Notion Contact Inquiries DB is localized to Korean** (e.g. 티켓번호, 상태) — when operating it, reference the Korean field/option names.

---

## 10. Environment variables

Copy `.env.example` → `.env.local` for local dev.

- `NEXT_PUBLIC_SITE_URL` — drives canonical URLs, OG tags, sitemap. Staging URL before DNS cutover, then `https://www.sparklabs.co.kr`.
- Contact form: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_INBOX_EMAIL`, `CONTACT_INBOX_{FOUNDERS,PARTNERSHIP,PRESS,GENERAL}`, `NOTION_TOKEN`, `NOTION_CONTACT_DATABASE_ID`.
- Optional: `NEXT_PUBLIC_GA_ID`.

---

## 11. Content workflows

**Add a press release**
1. `content/press/ko/<slug>.mdx` (Korean) + `content/press/en/<slug>.mdx` (English) — same slug.
2. Frontmatter: `title`, `date`, `summary`, `entity`, `tags`.
3. The `sparklabs-pr` skill (if available) follows the house press-release pattern for Korean copy.

**Add a portfolio company** — edit `src/lib/portfolio.ts`. Set `aiPick: true` to surface on `/portfolio/ai`, `featured: true` for brand highlights. Logo → `public/portfolio/logos/`.

**Add an entity** — add metadata to `src/lib/entities.ts` (coordinates, accent, focus) + create `content/entities/{ko,en}/<slug>.mdx`.

**Edit a team bio** — edit `src/lib/team.ts`, both `ko`/`en` fields. Mind the attribution rule in §1.

**Update UI strings** — edit `messages/ko.json` AND `messages/en.json`.

---

## 12. Working conventions & guardrails

- **Bilingual parity:** any change to one language must check/update its pair (MDX pairs, `messages/*.json`, `{ko,en}` data fields).
- **Preview → approve → merge:** structural or design changes go to a Vercel preview first, get Eunbit's approval, then merge to `main`. Don't push large changes straight to production.
- **Pre-push checks:** `npm run typecheck` + `npm run lint` must pass.
- **Internal links:** use locale-aware `Link` from `src/i18n/routing.ts`.
- **New runtime color classes:** add to the Tailwind safelist.

---

## 13. Known gotchas

- **Working tree shows everything as "modified" (CRLF).** A fresh checkout on Windows can show every file as changed due to line-ending normalization. Before assuming there are real pending edits, check `git config core.autocrlf` and run `git diff` on a single file. Avoid committing whole-tree line-ending churn — keep diffs scoped to actual content changes.
- `CLAUDE.md` itself is currently untracked — commit it if you want it versioned.
- Insights vs Perspectives — both exist (see §6); confirm the live label before editing nav.

---

## 14. Deployment

Vercel, connected to `main`. Push to `main` → auto-deploy. Staging at `new.sparklabs.co.kr`; production cutover to `www.sparklabs.co.kr` is pending (set `NEXT_PUBLIC_SITE_URL` accordingly at cutover).

---

## 15. Current status (as of handoff)

**Done:** full IA + all pages (Home, About/Team/Advisors/Entities, Programs ×4, Portfolio + AI, Newsroom collections, Contact, Apply, legal pages); design system refresh (indigo-purple/black/cream, mobile hamburger nav, footer icons); portfolio populated (~168 companies + logos, taglines rewritten); 10 press releases + ~21 media entries (ko/en); Contact API (Resend + Notion) wired.

**In progress:** 2nd-pass audit of individual team bios → `src/lib/team.ts`.

**Pending:** DNS cutover / production launch at `www.sparklabs.co.kr`.
