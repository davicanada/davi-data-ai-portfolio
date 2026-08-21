import { Bot, ChartNoAxesCombined, DatabaseZap } from "lucide-react";
import type { UiCopy } from "@/lib/i18n";

const capabilities = [
  {
    number: "01",
    icon: ChartNoAxesCombined,
    skills: ["Power BI", "Excel", "Python", "Forecasting", "KPI design"],
  },
  {
    number: "02",
    icon: DatabaseZap,
    skills: ["SQL", "PostgreSQL", "RLS", "APIs", "Pipelines"],
  },
  {
    number: "03",
    icon: Bot,
    skills: ["LLM workflows", "Python", "Gemini", "Groq", "Agents"],
  },
];

export function CapabilityMap({ copy }: { copy: UiCopy }) {
  return (
    <div className="capability-grid">
      {capabilities.map(({ number, icon: Icon, skills }, index) => {
        const card = copy.capabilityCards[index];
        return (
        <article className="capability-card" key={card.title}>
          <div className="capability-card__top">
            <span>{number}</span>
            <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="capability-card__skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <footer>
            <small>{copy.capabilityResult}</small>
            <strong>{card.outcome}</strong>
          </footer>
        </article>
      )})}
    </div>
  );
}
