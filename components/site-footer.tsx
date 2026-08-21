import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Code2, MessageCircle } from "lucide-react";
import { localizedPath, type Locale, type UiCopy } from "@/lib/i18n";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/davicanada",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daviao/",
    icon: BriefcaseBusiness,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/15149144064?text=Hi%20Davi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
    icon: MessageCircle,
  },
];

export function SiteFooter({ locale, copy }: { locale: Locale; copy: UiCopy }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="brand brand--footer" href={localizedPath(locale)}>
          <Image
            className="brand__avatar"
            src="/davi-almeida-linkedin.jpg"
            alt=""
            width={39}
            height={39}
          />
          <span>
            <strong>Davi Almeida</strong>
            <small>{copy.footer.tagline}</small>
          </span>
        </Link>

        <div className="footer-socials" aria-label={copy.footer.social}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p>{copy.footer.built}</p>
      </div>
    </footer>
  );
}
