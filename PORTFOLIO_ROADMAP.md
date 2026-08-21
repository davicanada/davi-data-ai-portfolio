# Portfolio launch roadmap

## Positioning

Use one story across the website, résumé, LinkedIn, and GitHub:

> I build end-to-end data products: I model reliable data, turn it into analysis, and automate decisions with AI.

This makes Data Analyst, Data Engineer, and Applied AI roles feel like one progression:

1. Analyze the decision.
2. Engineer the data path.
3. Automate the useful next action.

## P0: fix before promoting Focus

- Authenticate and authorize every service-role API route, especially user approvals and AI query execution.
- Verify institution membership inside server-side AI/data routes; never trust tenant or reviewer IDs supplied by request JSON.
- Remove or rotate shared test/demo passwords and personal test identities in public test/seed files.
- Create a dedicated read-only demo institution with synthetic data.
- Update the Focus repository homepage from the dead URL to the current deployment.
- Run a targeted security review, then restore the live/source links in lib/projects.ts.

## P0: recruiter-facing GitHub cleanup

- Replace the profile README link to the private tag-decommission-site repository with this portfolio or a sanitized public case study.
- Replace “Aspiring Data Engineer” with the same end-to-end positioning used on the website.
- Separate “demonstrated in public projects” tools from “currently learning” tools.
- Pin Focus, Job Hunter Agent, School Management SQL, and one polished dashboard repository.
- Give every pinned repository a working homepage, one screenshot, a concise outcome-first README, setup steps, and explicit limitations.

## Short video strategy

AI-assisted video is useful when it helps explain real work. The evidence should still come from the actual product.

Best format:

- Real screen recording of the solution.
- AI-assisted narration, captions, zooms, callouts, and motion graphics.
- Synthetic scenes only for context, clearly labeled “concept visualization.”
- Captions and a text case study so the story works without sound or playback.
- No autoplay with sound.

Recommended 60-second structure:

1. **0 to 7 seconds, problem:** who had the problem and why it mattered.
2. **7 to 35 seconds, workflow:** show the real interface completing one useful task.
3. **35 to 50 seconds, architecture:** animate the data or AI flow behind it.
4. **50 to 60 seconds, decision:** show the operational result and the case-study link.

### Video 1: Focus

- Problem: schools record occurrences but struggle to see patterns and close the follow-up loop.
- Workflow: professor records an occurrence → administrator sees the analytical signal → alert/follow-up is created.
- Architecture: Next.js → PostgreSQL/RLS → ECharts → Gemini/Groq → report/alert.
- End card: “Multi-tenant data product · Full case study.”

### Video 2: Job Hunter Agent

- Problem: fragmented feeds and repetitive evaluation.
- Workflow: sources fetched → duplicates removed → fit scored → grounded résumé/letter created → Telegram alert delivered.
- Architecture: adapters → Supabase → deterministic prefilter → LLM fallback → DOCX/Telegram.
- Include one sanitized run summary and provider telemetry view.

### Video 3: Battery Lifecycle Power BI

- Problem: replacement planning is reactive without asset-level forecast visibility.
- Workflow: filter low-life devices → inspect history vs forecast → locate devices → build maintenance list.
- Show real Power BI interactions and captions; avoid a generic animated dashboard montage.

## Evidence upgrades by project

### Focus

- Finish the P0 security work.
- Add a seeded demo account and sanitized product screenshots.
- Publish one architecture diagram and one end-to-end test screenshot.

### Job Hunter Agent

- Re-enable the GitHub Actions workflow if it should be described as currently scheduled.
- Add a monitoring screenshot covering sources, deduplication, model fallback, latency, token usage, and delivery.
- Publish a sanitized example of generated output.

### Battery Lifecycle Power BI

- Document source shape, Power Query steps, the semantic model, representative DAX, and forecast validation.
- Add a “decision enabled” section rather than only listing dashboard visuals.

## Launch checklist

- Add a current résumé PDF and a visible download link.
- Review every project claim against the repository or dashboard.
- Confirm WhatsApp, LinkedIn, GitHub, and video links.
- Test keyboard navigation, mobile layout, reduced motion, and social previews.
- Deploy to a Vercel preview and review it on desktop and mobile.
- Only then connect davianalyst.com; keep the current site available until the replacement is accepted.
