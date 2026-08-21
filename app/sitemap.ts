import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { locales, localizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.davianalyst.com";

  return locales.flatMap((locale) => [
    { url: baseUrl + localizedPath(locale), lastModified: new Date("2026-08-11"), changeFrequency: "monthly" as const, priority: locale === "en" ? 1 : 0.9 },
    ...projects.map((project) => ({ url: baseUrl + localizedPath(locale, "/work/" + project.slug), lastModified: new Date("2026-08-11"), changeFrequency: "monthly" as const, priority: 0.8 })),
  ]);
}
