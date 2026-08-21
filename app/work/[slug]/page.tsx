import type { Metadata } from "next";
import { ProjectPage } from "@/components/project-page";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.shortTitle, description: project.summary } : { title: "Project not found" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage slug={slug} locale="en" />;
}
