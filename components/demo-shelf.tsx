import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { localizedPath, type Locale, type UiCopy } from "@/lib/i18n";

const demos = [
  {
    label: "Excel + VBA",
    href: "https://www.youtube.com/watch?v=2cHLNBWRQfg",
    image: "https://i.ytimg.com/vi/2cHLNBWRQfg/hqdefault.jpg",
  },
  {
    label: "Excel + VBA",
    href: "https://www.youtube.com/watch?v=2Bg3I0QyR0s",
    image: "https://i.ytimg.com/vi/2Bg3I0QyR0s/hqdefault.jpg",
  },
];

export function DemoShelf({ locale, copy }: { locale: Locale; copy: UiCopy }) {
  return (
    <div className="demo-grid">
      <Link
        className="demo-card demo-card--focus"
        href={localizedPath(locale, "/work/focus-school-intelligence")}
      >
        <div className="demo-card__media">
          <ProjectArtwork visual="focus" compact copy={copy} />
          <span className="demo-card__live">{copy.focus.demoBadge}</span>
        </div>
        <div className="demo-card__body">
          <span>Next.js + PostgreSQL + AI</span>
          <h3>
            {copy.focus.demoTitle}
          </h3>
          <p>{copy.focus.demoDescription}</p>
          <strong>
            {copy.focus.demoAction} <ArrowUpRight size={16} aria-hidden="true" />
          </strong>
        </div>
      </Link>

      {demos.map((demo, index) => {
        const translatedDemo = copy.demoCards[index];
        return (
        <a
          className="demo-card"
          href={demo.href}
          target="_blank"
          rel="noreferrer"
          key={demo.href}
        >
          <div className="demo-card__media">
            <Image
              src={demo.image}
              alt={translatedDemo.title}
              fill
              sizes="(max-width: 760px) 100vw, 33vw"
            />
            <span className="play-button" aria-hidden="true">
              <Play size={20} fill="currentColor" />
            </span>
          </div>
          <div className="demo-card__body">
            <span>{demo.label}</span>
            <h3>{translatedDemo.title}</h3>
            <p>{translatedDemo.description}</p>
            <strong>
              {translatedDemo.action} <ArrowUpRight size={16} aria-hidden="true" />
            </strong>
          </div>
        </a>
      )})}
    </div>
  );
}
