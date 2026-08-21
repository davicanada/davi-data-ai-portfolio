import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/project-page";
import { isLocale, locales } from "@/lib/i18n";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") return { title: "Project not found" };
  const project = getProject(slug, locale);
  return project ? { title: project.shortTitle, description: project.summary } : { title: "Project not found" };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <ProjectPage slug={slug} locale={locale} />;
}
