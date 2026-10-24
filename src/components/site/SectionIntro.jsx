import React from "react";

// Section intro: muted label, then a strong heading. An optional second clause
// (titleMuted) sits in a softer tone on the same heading, so one line carries the point
// and the rest supports it.
export default function SectionIntro({ eyebrow, title, titleMuted, children }) {
  return (
    <div className="min-w-0 max-w-5xl">
      <p className="site-label">{eyebrow}</p>
      <h2 className="mt-3 font-heading font-semibold leading-[1.15] tracking-tight text-balance">
        {title}
        {titleMuted ? <span className="title-muted"> {titleMuted}</span> : null}
      </h2>
      {children ? (
        <p className="mt-6 max-w-[75ch] text-base sm:text-lg leading-relaxed text-pretty">{children}</p>
      ) : null}
    </div>
  );
}
