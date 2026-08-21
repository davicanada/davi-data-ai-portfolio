"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { languageOptions, localizedPath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();

  function changeLanguage(nextLanguage: Locale) {
    const currentUrl = new URL(window.location.href);
    const segments = currentUrl.pathname.split("/").filter(Boolean);

    if (["fr", "es", "pt"].includes(segments[0] ?? "")) segments.shift();

    const basePath = `/${segments.join("/")}` || "/";
    const destination = localizedPath(nextLanguage, basePath);
    router.push(`${destination}${currentUrl.search}${currentUrl.hash}`);
  }

  return (
    <label className="language-switcher">
      <Languages size={16} aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => changeLanguage(event.target.value as Locale)}
      >
        {languageOptions.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
