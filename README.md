# sparklabs-web

The global website for **SparkLabs** — `www.sparklabs.co.kr`.
Bilingual (KO / EN), built on Next.js 14 + MDX, deployed on Vercel.

## Stack

- **Next.js 14** (App Router, TypeScript, RSC)
- **Tailwind CSS** with custom brand tokens (see `tailwind.config.ts`)
- **next-intl** for `/ko` · `/en` routing
- **MDX** content collections in `/content/` — edit files, push, auto-deploy
- **Vercel** for hosting + preview deployments

## Quickstart

```bash
npm install
npm run dev
# → http://localhost:3000 (redirects to /ko)
```

Type-check & build:

```bash
npm run typecheck
npm run build
```

## Project layout

```
src/
├── app/                    # App Router pages
│   ├── [locale]/           # Localized routes (ko/en)
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── portfolio/
│   │   ├── programs/
│   │   ├── newsroom/
│   │   └── contact/
│   ├── globals.css
│   └── layout.tsx          # Root (pass-through)
├── components/
│   ├── home/               # Home page sections
│   └── layout/             # Header, Footer, Language toggle
├── i18n/                   # next-intl config
└── lib/                    # Utilities (content loader, metrics, entities)

content/                    # MDX content collections
├── entities/
├── portfolio/
├── programs/
├── press/
├── perspectives/
└── announcements/

messages/                   # UI string translations
├── ko.json
└── en.json
```

## Content workflow

**To add a press release:**

1. Create `content/press/ko/<slug>.mdx` with the Korean version.
2. Create `content/press/en/<slug>.mdx` with the English transcreation.
3. Frontmatter required fields: `title`, `date`, `summary`, `entity`, `tags`.
4. Commit and push — Vercel deploys automatically.

**To update brand tokens (colors, fonts, spacing):**

Edit `tailwind.config.ts` → `theme.extend.colors` / `fontSize`.

**To add a new entity:**

1. Add metadata to `src/lib/entities.ts`.
2. Create `content/entities/ko/<slug>.mdx` and `content/entities/en/<slug>.mdx`.

## Design tokens

Full design system reference: `../planning/01_visual_identity.md`

- Primary: `#0A1440` (ink), `#0C2A6B` (navy), `#1E5BFF` (brand blue)
- Accent spectrum (spark): orange · yellow · green · teal · pink · red · violet
- Typography: Pretendard Variable (KO) + Inter (EN)

## Deploy

Connected to Vercel via `main` branch.

- **Staging**: `new.sparklabs.co.kr` (DNS CNAME → Vercel)
- **Production (post-cutover)**: `www.sparklabs.co.kr`

See `SETUP.md` for first-time deploy instructions.

## License

© 2026 SparkLabs. All rights reserved.
