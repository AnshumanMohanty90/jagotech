import React from "react";

// Section intro: eyebrow, then a centered heading. An optional second clause
// (titleMuted) sits on the same heading. Set large for the 48px pricing-style heading.
export default function SectionIntro({ eyebrow, title, titleMuted, large = false, children }) {
  return (
    <div className="min-w-0 max-w-5xl mx-auto text-center">
      <p className="site-label site-eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 font-heading text-balance ${
          large ? "sm:!text-5xl sm:!leading-[1.1667] sm:!tracking-[-0.02em]" : ""
        }`}
      >
        {title}
        {titleMuted ? <span className="title-muted"> {titleMuted}</span> : null}
      </h2>
      {children ? (
        <p className="mt-4 mx-auto max-w-[772px] text-base sm:text-lg text-pretty">{children}</p>
      ) : null}
    </div>
  );
}
