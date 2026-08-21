import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ui, type Locale } from "@/lib/i18n";

export function LocaleShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const copy = ui[locale];

  return (
    <div lang={locale}>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <SiteHeader locale={locale} copy={copy} />
      {children}
      <SiteFooter locale={locale} copy={copy} />
    </div>
  );
}
