import type { ProjectVisual } from "@/lib/projects";
import type { UiCopy } from "@/lib/i18n";

type ProjectArtworkProps = {
  visual: ProjectVisual;
  compact?: boolean;
  copy: UiCopy;
};

function FocusArtwork({ copy }: { copy: UiCopy }) {
  return (
    <div className="art-focus">
      <div className="art-window__bar">
        <span />
        <span />
        <span />
        <small>
          Focus · {copy.artwork.analytics}
        </small>
      </div>
      <div className="art-focus__body">
        <aside>
          <b>F</b>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="art-focus__main">
          <div className="art-focus__heading">
            <span>{copy.artwork.occurrenceIntelligence}</span>
            <em>{copy.artwork.productView}</em>
          </div>
          <div className="art-focus__kpis">
            <span>
              <small>{copy.artwork.records}</small>
              <strong>{copy.artwork.tracked}</strong>
            </span>
            <span>
              <small>{copy.artwork.patterns}</small>
              <strong>{copy.artwork.analyzed}</strong>
            </span>
            <span>
              <small>{copy.artwork.followUp}</small>
              <strong>{copy.artwork.followedUp}</strong>
            </span>
          </div>
          <div className="art-focus__panels">
            <div className="mini-bars">
              {[34, 52, 42, 74, 58, 88, 68, 96].map((height, index) => (
                <i key={index} style={{ height: height + "%" }} />
              ))}
            </div>
            <div className="risk-list">
              <span>
                <i />
                <b>{copy.artwork.priorityAlert}</b>
                <em>{copy.artwork.high}</em>
              </span>
              <span>
                <i />
                <b>{copy.artwork.weeklyPattern}</b>
                <em>{copy.artwork.watch}</em>
              </span>
              <span>
                <i />
                <b>{copy.artwork.followUp}</b>
                <em>{copy.artwork.open}</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentArtwork({ copy }: { copy: UiCopy }) {
  return (
    <div className="art-agent">
      <div className="art-agent__top">
        <span>run_archive_0248</span>
        <em>● {copy.artwork.historical}</em>
      </div>
      <div className="art-agent__flow">
        <div>
          <small>01</small>
          <strong>{copy.artwork.fetch}</strong>
          <span>{copy.artwork.multiSource}</span>
        </div>
        <i>→</i>
        <div>
          <small>02</small>
          <strong>{copy.artwork.score}</strong>
          <span>{copy.artwork.llmChain}</span>
        </div>
        <i>→</i>
        <div>
          <small>03</small>
          <strong>{copy.artwork.tailor}</strong>
          <span>DOCX</span>
        </div>
      </div>
      <div className="art-agent__log">
        <span>
          <b>Gemini</b>
          <i className="log-bar log-bar--long" />
          scored
        </span>
        <span>
          <b>Groq</b>
          <i className="log-bar log-bar--mid" />
          {copy.artwork.fallback}
        </span>
        <span>
          <b>Output</b>
          <i className="log-bar log-bar--short" />
          {copy.artwork.verified}
        </span>
      </div>
    </div>
  );
}

function BatteryArtwork({ copy }: { copy: UiCopy }) {
  const consumptionBars = [42, 58, 47, 76, 64, 88, 71, 82];

  return (
    <div className="art-battery">
      <div className="art-battery__header">
        <span>
          <i />
          {copy.artwork.batteryLifecycle}
          <small>{copy.artwork.operationsOverview}</small>
        </span>
        <em>POWER BI</em>
      </div>

      <div className="battery-tabs">
        <span className="is-active">{copy.artwork.overview}</span>
        <span>{copy.artwork.assetDetail}</span>
        <span>{copy.artwork.forecast}</span>
      </div>

      <div className="battery-dashboard">
        <div className="battery-kpis">
          <div>
            <small>{copy.artwork.lifetimeRemaining}</small>
            <strong>{copy.artwork.priorityView}</strong>
            <i><span style={{ width: "68%" }} /></i>
          </div>
          <div>
            <small>{copy.artwork.consumption}</small>
            <strong>{copy.artwork.historicalAverage}</strong>
            <i><span style={{ width: "52%" }} /></i>
          </div>
          <div>
            <small>{copy.artwork.batteryLevel}</small>
            <strong>{copy.artwork.assetTrend}</strong>
            <i><span style={{ width: "79%" }} /></i>
          </div>
        </div>

        <div className="battery-chart">
          <header>
            <strong>{copy.artwork.consumptionAverage}</strong>
            <span><i /> {copy.artwork.belowAverage} <i /> {copy.artwork.aboveAverage}</span>
          </header>
          <div className="battery-bars" aria-hidden="true">
            {consumptionBars.map((height, index) => (
              <i
                key={index}
                className={index === 3 || index === 5 ? "is-high" : undefined}
                style={{ height: height + "%" }}
              />
            ))}
          </div>
        </div>

        <div className="battery-map">
          <header>
            <strong>{copy.artwork.assetLocations}</strong>
            <span>{copy.artwork.mapView}</span>
          </header>
          <div aria-hidden="true">
            <i className="battery-map__route battery-map__route--one" />
            <i className="battery-map__route battery-map__route--two" />
            <span className="battery-map__dot battery-map__dot--one" />
            <span className="battery-map__dot battery-map__dot--two" />
            <span className="battery-map__dot battery-map__dot--three" />
            <span className="battery-map__dot battery-map__dot--four" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExcelArtwork({ copy }: { copy: UiCopy }) {
  const weeklyBars = [38, 54, 45, 70, 62, 86];

  return (
    <div className="art-excel">
      <div className="excel-ribbon">
        <b>X</b>
        <span>
          {copy.artwork.operationsAutomation}
          <small>{copy.artwork.excelVba}</small>
        </span>
        <em>{copy.artwork.workflowReady}</em>
      </div>

      <div className="excel-dashboard">
        <aside className="excel-workflow">
          <small>{copy.artwork.automatedProcess}</small>
          <span className="is-complete"><b>01</b> {copy.artwork.importRecords}</span>
          <span className="is-complete"><b>02</b> {copy.artwork.validateFields}</span>
          <span className="is-active"><b>03</b> {copy.artwork.createDocuments}</span>
          <span><b>04</b> {copy.artwork.prepareDelivery}</span>
        </aside>

        <div className="excel-dashboard__main">
          <div className="excel-kpis">
            <div><small>{copy.artwork.input}</small><strong>{copy.artwork.validated}</strong></div>
            <div><small>{copy.artwork.output}</small><strong>{copy.artwork.pdfReady}</strong></div>
            <div><small>{copy.artwork.delivery}</small><strong>{copy.artwork.prepared}</strong></div>
          </div>

          <div className="excel-analysis">
            <header>
              <strong>{copy.artwork.weeklyVolume}</strong>
              <span>{copy.artwork.automated}</span>
            </header>
            <div className="excel-bars" aria-hidden="true">
              {weeklyBars.map((height, index) => (
                <i key={index} style={{ height: height + "%" }} />
              ))}
            </div>
          </div>

          <div className="excel-output-list">
            <span><i /> {copy.artwork.invoiceBatch} <b>{copy.artwork.ready}</b></span>
            <span><i /> {copy.artwork.validationLog} <b>{copy.artwork.checked}</b></span>
          </div>
        </div>
      </div>

      <div className="excel-action-bar">
        <span>{copy.artwork.controlledWorkflow}</span>
        <strong>{copy.artwork.runAutomation}</strong>
      </div>
    </div>
  );
}

export function ProjectArtwork({ visual, compact = false, copy }: ProjectArtworkProps) {
  return (
    <div
      className={"project-artwork project-artwork--" + visual + (compact ? " is-compact" : "")}
      aria-hidden="true"
    >
      {visual === "focus" ? <FocusArtwork copy={copy} /> : null}
      {visual === "agent" ? <AgentArtwork copy={copy} /> : null}
      {visual === "battery" ? <BatteryArtwork copy={copy} /> : null}
      {visual === "excel" ? <ExcelArtwork copy={copy} /> : null}
    </div>
  );
}
