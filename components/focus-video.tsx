import type { UiCopy } from "@/lib/i18n";

export function FocusVideo({ copy }: { copy: UiCopy }) {
  return (
    <section className="focus-video section-shell section-padding" aria-labelledby="focus-video-title">
      <div className="focus-video__heading">
        <p className="eyebrow">{copy.focus.videoLabel}</p>
        <h2 id="focus-video-title">{copy.focus.videoTitle}</h2>
        <p>{copy.focus.videoDescription}</p>
      </div>
      <div className="focus-video__frame">
        <video controls preload="metadata" playsInline>
          <source src="/focus-presentation.mp4" type="video/mp4" />
          {copy.focus.videoFallback}
        </video>
      </div>
    </section>
  );
}
