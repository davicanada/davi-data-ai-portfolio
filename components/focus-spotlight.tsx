import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { getProject } from "@/lib/projects";
import { localizedPath, type Locale, type UiCopy } from "@/lib/i18n";

export function FocusSpotlight({ locale, copy }: { locale: Locale; copy: UiCopy }) {
  const project = getProject("focus-school-intelligence", locale);
  if (!project) return null;

  return (
    <section
      className="spotlight section-shell"
      aria-labelledby="spotlight-title"
      data-focus-copy
    >
      <div className="spotlight__copy">
        <p className="eyebrow">
          {copy.focus.kicker}
        </p>
        <h2 id="spotlight-title" data-focus-title>
          {project.title}
        </h2>
        <p>{project.summary}</p>

        <div className="spotlight__metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="button-row">
          <Link className="button button--dark" href={localizedPath(locale, "/work/" + project.slug)}>
            {copy.focus.read}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <span className="spotlight__review-note">{copy.focus.review}</span>
        </div>
      </div>

      <div className="spotlight__visual">
        <ProjectArtwork visual="focus" copy={copy} />
        <div className="spotlight__badge">
          <span className="status-dot status-dot--amber" aria-hidden="true" />
          {copy.focus.badge}
        </div>
      </div>
    </section>
  );
}
