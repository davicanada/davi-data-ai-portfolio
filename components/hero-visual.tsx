import type { UiCopy } from "@/lib/i18n";

export function HeroVisual({ copy }: { copy: UiCopy }) {
  return (
    <div className="hero-visual" aria-label="A data pipeline moving from raw operations to decisions">
      <div className="hero-visual__topline">
        <span className="status-dot" aria-hidden="true" />
        <span>{copy.artwork.endToEnd}</span>
        <span className="hero-visual__status">{copy.artwork.live}</span>
      </div>

      <div className="hero-visual__stages" aria-hidden="true">
        <div className="stage-card stage-card--active">
          <span>01</span>
          <strong>{copy.artwork.model}</strong>
          <small>{copy.artwork.reliableData}</small>
        </div>
        <span className="stage-arrow">→</span>
        <div className="stage-card">
          <span>02</span>
          <strong>{copy.artwork.analyze}</strong>
          <small>{copy.artwork.clearSignals}</small>
        </div>
        <span className="stage-arrow">→</span>
        <div className="stage-card">
          <span>03</span>
          <strong>{copy.artwork.automate}</strong>
          <small>{copy.artwork.usefulAction}</small>
        </div>
      </div>

      <div className="hero-chart" aria-hidden="true">
        <div className="hero-chart__label">
          <span>{copy.artwork.decisionSignal}</span>
          <strong>{copy.artwork.ready}</strong>
        </div>
        <svg viewBox="0 0 520 165" role="presentation">
          <defs>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d7ff46" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#d7ff46" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 142 C48 130 58 108 102 116 C148 125 158 82 206 90 C252 98 280 48 326 63 C372 79 402 27 446 39 C474 46 494 27 520 18 L520 165 L0 165 Z"
            fill="url(#heroArea)"
          />
          <path
            d="M0 142 C48 130 58 108 102 116 C148 125 158 82 206 90 C252 98 280 48 326 63 C372 79 402 27 446 39 C474 46 494 27 520 18"
            fill="none"
            stroke="#d7ff46"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="520" cy="18" r="6" fill="#d7ff46" />
        </svg>
      </div>

      <div className="hero-visual__footer" aria-hidden="true">
        <span>SQL</span>
        <span>Python</span>
        <span>Power BI</span>
        <span>PostgreSQL</span>
        <span>LLMs</span>
      </div>
    </div>
  );
}
