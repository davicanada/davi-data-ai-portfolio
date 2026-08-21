import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MessageCircle,
} from "lucide-react";
import { CapabilityMap } from "@/components/capability-map";
import { DemoShelf } from "@/components/demo-shelf";
import { FocusSpotlight } from "@/components/focus-spotlight";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectExplorer } from "@/components/project-explorer";
import { SectionHeading } from "@/components/section-heading";
import { LocaleShell } from "@/components/locale-shell";
import { ui, type Locale } from "@/lib/i18n";
import { getProjects } from "@/lib/projects";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Davi Almeida",
  url: "https://www.davianalyst.com",
  image: "https://davi-data-ai-portfolio.vercel.app/davi-almeida-linkedin.jpg",
  sameAs: [
    "https://github.com/davicanada",
    "https://www.linkedin.com/in/daviao/",
  ],
  jobTitle: ["Data Analyst", "Data Engineer", "Applied AI Engineer"],
  knowsAbout: [
    "Power BI",
    "SQL",
    "Python",
    "PostgreSQL",
    "Data modeling",
    "Workflow automation",
    "Applied artificial intelligence",
  ],
};

export function HomePage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  const projects = getProjects(locale);
  return (
    <LocaleShell locale={locale}>
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero section-shell">
        <div className="hero__copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>
            {copy.hero.before}{" "}
            <span>{copy.hero.accent}</span>
          </h1>
          <p className="hero__lede">
            {copy.hero.lede}
          </p>
          <div className="button-row">
            <a className="button button--lime" href="#work">
              {copy.hero.explore}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button--ghost"
              href="#contact"
            >
              {copy.hero.conversation}
              <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__social">
            <a href="https://github.com/davicanada" target="_blank" rel="noreferrer">
              <Code2 size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daviao/"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <HeroVisual copy={copy} />
          <span className="hero__orbit hero__orbit--one" aria-hidden="true">
            SQL
          </span>
          <span className="hero__orbit hero__orbit--two" aria-hidden="true">
            AI
          </span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        <div className="section-shell proof-strip__inner">
          {copy.proof.map((item) => <span key={item.code}><strong>{item.code}</strong>{item.text}</span>)}
        </div>
      </section>

      <FocusSpotlight locale={locale} copy={copy} />

      <section className="work-section section-shell section-padding" id="work">
        <SectionHeading
          eyebrow={copy.work.eyebrow}
          title={copy.work.title}
          description={copy.work.description}
        />
        <ProjectExplorer
          projects={projects.map(
            ({
              slug,
              shortTitle,
              kicker,
              status,
              summary,
              categories,
              tools,
              visual,
              accent,
            }) => ({
              slug,
              shortTitle,
              kicker,
              status,
              summary,
              categories,
              tools,
              visual,
              accent,
            }),
          )}
          locale={locale}
          copy={copy}
        />
      </section>

      <section className="capabilities-section section-padding" id="capabilities">
        <div className="section-shell">
          <SectionHeading
            eyebrow={copy.capabilities.eyebrow}
            title={copy.capabilities.title}
            description={copy.capabilities.description}
          />
          <CapabilityMap copy={copy} />
        </div>
      </section>

      <section className="demo-section section-padding">
        <div className="section-shell">
          <SectionHeading
            eyebrow={copy.demos.eyebrow}
            title={copy.demos.title}
            description={copy.demos.description}
          />
          <DemoShelf locale={locale} copy={copy} />
        </div>
      </section>

      <section className="about-section section-shell section-padding" id="about">
        <div className="about-card">
          <div className="about-card__portrait">
            <div className="portrait-frame">
              <Image
                src="/davi-almeida-linkedin.jpg"
                alt="Davi Almeida"
                fill
                sizes="(max-width: 760px) 70vw, 320px"
              />
            </div>
            <span>{copy.about.badge}</span>
          </div>

          <div className="about-card__copy">
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2>{copy.about.title}</h2>
            <p>{copy.about.body}</p>
            <div className="about-principles">
              {copy.about.principles.map((principle, index) => <span key={principle}><b>{String(index + 1).padStart(2, "0")}</b>{principle}</span>)}
            </div>
            <a
              className="text-link"
              href="https://github.com/davicanada"
              target="_blank"
              rel="noreferrer"
            >
              {copy.about.github}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-section__signal" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h2>{copy.contact.title}</h2>
        <p>{copy.contact.body}</p>
        <div className="button-row button-row--center">
          <a
            className="button button--lime"
            href={`https://wa.me/15149144064?text=${encodeURIComponent(copy.contact.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
          >
            {copy.contact.whatsapp}
            <MessageCircle size={17} aria-hidden="true" />
          </a>
          <a
            className="button button--ghost"
            href="https://www.linkedin.com/in/daviao/"
            target="_blank"
            rel="noreferrer"
          >
            {copy.contact.linkedin}
            <BriefcaseBusiness size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
    </LocaleShell>
  );
}
