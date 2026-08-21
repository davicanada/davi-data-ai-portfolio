import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localizedPath, type Locale, type UiCopy } from "@/lib/i18n";

export function SiteHeader({ locale, copy }: { locale: Locale; copy: UiCopy }) {
  const home = localizedPath(locale);
  const navItems = [
    { label: copy.nav.work, href: `${home}#work` },
    { label: copy.nav.capabilities, href: `${home}#capabilities` },
    { label: copy.nav.about, href: `${home}#about` },
  ];
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href={home} aria-label="Davi Almeida, home">
          <Image
            className="brand__avatar"
            src="/davi-almeida-linkedin.jpg"
            alt=""
            width={39}
            height={39}
          />
          <span className="brand__name">Davi Almeida</span>
        </Link>

        <nav className="desktop-nav" aria-label={copy.nav.primary}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-contact" href={`${home}#contact`}>
            {copy.nav.contact}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <LanguageSwitcher locale={locale} label={copy.nav.language} />
        </nav>

        <details className="mobile-nav">
          <summary aria-label={copy.nav.open}>
            <Menu size={21} aria-hidden="true" />
          </summary>
          <nav aria-label={copy.nav.mobile}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={`${home}#contact`}>{copy.nav.contact}</Link>
            <LanguageSwitcher locale={locale} label={copy.nav.language} />
          </nav>
        </details>
      </div>
    </header>
  );
}
