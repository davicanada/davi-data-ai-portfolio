import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-shell">
      <p className="eyebrow">404 · Signal not found</p>
      <h1>This page stepped outside the model</h1>
      <p>The project may have moved, but the rest of the work is still here.</p>
      <Link className="button button--lime" href="/">
        <ArrowLeft size={17} aria-hidden="true" />
        Return home
      </Link>
    </main>
  );
}
