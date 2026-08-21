"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import type { Project, ProjectCategory } from "@/lib/projects";
import { localizedPath, type Locale, type UiCopy } from "@/lib/i18n";
type ProjectFilter = "All" | ProjectCategory;
type ExplorerProject = Pick<
  Project,
  | "slug"
  | "shortTitle"
  | "kicker"
  | "status"
  | "summary"
  | "categories"
  | "tools"
  | "visual"
  | "accent"
>;

export function ProjectExplorer({ projects, locale, copy }: { projects: ExplorerProject[]; locale: Locale; copy: UiCopy }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const projectFilters: Array<{ value: ProjectFilter; label: string }> = [
    { value: "All", label: copy.explorer.all },
    { value: "Analytics", label: copy.explorer.analytics },
    { value: "Data Engineering", label: copy.explorer.engineering },
    { value: "Applied AI", label: copy.explorer.ai },
  ];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter as ProjectCategory),
        );

  return (
    <div className="project-explorer">
      <div className="project-filters" aria-label={copy.explorer.filterLabel}>
        {projectFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? "is-active" : undefined}
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {copy.explorer.showing.replace("{count}", String(visibleProjects.length))}
      </p>

      <div className="project-grid">
        {visibleProjects.map((project) => {
          return (
            <article
              className={"project-card accent-" + project.accent}
              key={project.slug}
            >
            <Link
              className="project-card__visual-link"
              href={localizedPath(locale, "/work/" + project.slug)}
              aria-label={`${copy.explorer.readLabel}: ${project.shortTitle}`}
            >
              <ProjectArtwork visual={project.visual} compact copy={copy} />
            </Link>

            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.kicker.split(" · ")[0]}</span>
                <span>{project.status}</span>
              </div>
              <h3>
                <Link
                  href={localizedPath(locale, "/work/" + project.slug)}
                >
                  {project.shortTitle}
                </Link>
              </h3>
              <p>{project.summary}</p>
              <div className="project-card__tags" aria-label={copy.explorer.tools}>
                {project.tools.slice(0, 4).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <Link className="card-link" href={localizedPath(locale, "/work/" + project.slug)}>
                {copy.explorer.view}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
