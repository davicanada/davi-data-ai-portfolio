import type { Project } from "@/lib/projects";

type ProjectVideoProps = {
  video: NonNullable<Project["video"]>;
  fallback: string;
};

export function ProjectVideo({ video, fallback }: ProjectVideoProps) {
  return (
    <section className="focus-video section-shell section-padding" aria-labelledby="project-video-title">
      <div className="focus-video__heading">
        <p className="eyebrow">{video.label}</p>
        <h2 id="project-video-title">{video.title}</h2>
        <p>{video.description}</p>
      </div>
      <div className="focus-video__frame">
        <video controls preload="metadata" playsInline poster={video.poster}>
          <source src={video.src} type="video/mp4" />
          {fallback}
        </video>
      </div>
    </section>
  );
}
