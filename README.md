# Davi Almeida Portfolio

The source code for [davianalyst.com](https://davianalyst.com), a recruiter-focused portfolio covering analytics, data engineering, and applied AI.

## What this project demonstrates

- Answer-first portfolio positioning instead of a tool list.
- Evidence-backed case studies for dashboards, data platforms, automation, SQL, Python, and AI workflows.
- Native English, French, Spanish, and Portuguese routes with English as the default.
- Interactive project pages with translated copy, responsive layouts, reduced-motion support, and accessible navigation.
- Real Excel/VBA demonstration videos and a short Focus product presentation.
- SEO foundations including metadata, Open Graph imagery, sitemap, and robots directives.
- Static generation for the homepage and case-study routes.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- pnpm
- Vercel
- Lucide React icons

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The GitHub Actions workflow in `.github/workflows/ci.yml` runs the same checks for pushes and pull requests.

## Project structure

```text
app/                 App Router pages, metadata, sitemap, and robots
components/          Reusable portfolio sections and case-study UI
lib/i18n.ts          UI copy and locale metadata
lib/projects.ts      Project narratives, metrics, links, and translations
public/              Profile image, presentation videos, and static assets
```

## Editing content

- Update project narratives, metrics, tools, links, and honest limitations in `lib/projects.ts`.
- Update navigation, headings, and shared interface copy in `lib/i18n.ts`.
- Update homepage composition in `app/page.tsx` and `components/home-page.tsx`.
- Update visual styling and responsive behavior in `app/globals.css`.

## Deployment

The production site is deployed on Vercel and served through `davianalyst.com`. A safe workflow is:

1. Run the quality checks locally.
2. Push a branch and review the Vercel preview.
3. Merge only after checking the homepage, language routes, case studies, videos, and external links.

## Portfolio scope

This repository contains the portfolio presentation layer. The featured applications and data projects remain in their respective repositories. Links are intentionally described with the level of evidence currently available, including any public-demo or security follow-up notes.
