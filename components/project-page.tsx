import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Check,
  ExternalLink,
  Play,
} from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { FocusVideo } from "@/components/focus-video";
import { getNextProject, getProject } from "@/lib/projects";
import { LocaleShell } from "@/components/locale-shell";
import { localizedPath, ui, type Locale } from "@/lib/i18n";

function LinkIcon({ kind }: { kind: "live" | "github" | "video" }) {
  if (kind === "github") return <Code2 size={17} aria-hidden="true" />;
  if (kind === "video") return <Play size={17} fill="currentColor" aria-hidden="true" />;
  return <ExternalLink size={17} aria-hidden="true" />;
}

export function ProjectPage({ slug, locale }: { slug: string; locale: Locale }) {
  const copy = ui[locale];
  const project = getProject(slug, locale);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug, locale);
  const isFocusProject = project.slug === "focus-school-intelligence";

  const caseStudyData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Davi Almeida",
      url: "https://www.davianalyst.com",
    },
    url: "https://www.davianalyst.com/work/" + project.slug,
    keywords: project.tools.join(", "),
  };

  return (
    <LocaleShell locale={locale}>
    <main
      id="main-content"
      className={"case-study accent-" + project.accent}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData) }}
      />

      <section className="case-hero section-shell">
        <div className="case-hero__copy">
          <Link className="back-link" href={localizedPath(locale) + "#work"}>
            <ArrowLeft size={16} aria-hidden="true" />
            {copy.caseStudy.back}
          </Link>
          <p className="eyebrow">
            {isFocusProject ? (
              <>
                {copy.focus.kicker}
              </>
            ) : (
              project.kicker
            )}
          </p>
          <h1>
            {project.title}
          </h1>
          <p className="case-hero__summary">{project.summary}</p>

          <div className="case-categories">
            {project.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          {project.links.length > 0 ? (
            <div className="button-row">
              {project.links.map((link, index) => (
                <a
                  className={index === 0 ? "button button--lime" : "button button--ghost"}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label}
                  <LinkIcon kind={link.kind} />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="case-hero__visual">
          <ProjectArtwork visual={project.visual} copy={copy} />
          {project.embed ? (
            <a
              className="case-status"
              href={project.embed.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.status}. Open full-screen report`}
            >
              {project.status}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className="case-status">{project.status}</span>
          )}
        </div>
      </section>

      <section className="case-metrics section-shell" aria-label={copy.caseStudy.evidence}>
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      {isFocusProject ? <FocusVideo copy={copy} /> : null}

      {project.embed ? (
        <section className="case-embed section-shell section-padding" aria-labelledby="live-report-title">
          <div className="case-embed__heading">
            <div>
              <p className="eyebrow">{copy.caseStudy.interactive}</p>
              <h2 id="live-report-title">{copy.caseStudy.exploreReport}</h2>
              <p>{project.embed.description}</p>
            </div>
            <a
              className="button button--dark"
              href={project.embed.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.caseStudy.openFull}
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="case-embed__frame">
            <iframe
              title={project.embed.title}
              src={project.embed.url}
              loading="eager"
              allow="fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
      ) : null}

      <section className="case-narrative section-shell section-padding">
        <article>
          <p className="eyebrow">{copy.caseStudy.problem}</p>
          <h2>{copy.caseStudy.problemTitle}</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <p className="eyebrow">{copy.caseStudy.approach}</p>
          <h2>{copy.caseStudy.approachTitle}</h2>
          <p>{project.approach}</p>
        </article>
      </section>

      <section className="architecture-section section-padding">
        <div className="section-shell">
          <div className="architecture-section__heading">
            <p className="eyebrow">{copy.caseStudy.flow}</p>
            <h2>{copy.caseStudy.flowTitle}</h2>
          </div>
          <ol className="architecture-flow">
            {project.architecture.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < project.architecture.length - 1 ? (
                  <ArrowRight size={16} aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-build section-shell section-padding">
        <div className="case-build__heading">
          <p className="eyebrow">{copy.caseStudy.built}</p>
          <h2>{copy.caseStudy.builtTitle}</h2>
        </div>
        <ul>
          {project.built.map((item) => (
            <li key={item}>
              <span>
                <Check size={15} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="decisions-section section-shell section-padding">
        <div className="decisions-section__heading">
          <p className="eyebrow">{copy.caseStudy.decisions}</p>
          <h2>{copy.caseStudy.decisionsTitle}</h2>
        </div>
        <div className="decision-grid">
          {project.decisions.map((decision, index) => (
            <article key={decision.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{decision.title}</h3>
              <p>{decision.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-outcome section-shell">
        <div>
          <p className="eyebrow">{copy.caseStudy.result}</p>
          <h2>{copy.caseStudy.resultTitle}</h2>
          <p>{project.result}</p>
        </div>
        <div>
          <p className="eyebrow">{copy.caseStudy.nextImprovement}</p>
          <h2>{copy.caseStudy.nextImprovementTitle}</h2>
          <p>{project.next}</p>
        </div>
      </section>

      <section className="case-stack section-shell section-padding">
        <p className="eyebrow">{copy.caseStudy.tools}</p>
        <div>
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section
        className="next-project section-shell"
      >
        <div>
          <p className="eyebrow">{copy.caseStudy.nextCase}</p>
          <h2>{nextProject.shortTitle}</h2>
          <p>{nextProject.summary}</p>
        </div>
        <Link className="button button--lime" href={localizedPath(locale, "/work/" + nextProject.slug)}>
          {copy.caseStudy.continue}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
    </LocaleShell>
  );
}
