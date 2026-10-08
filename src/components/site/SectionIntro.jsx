import React from "react";

export default function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="min-w-0 max-w-5xl">
      <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-3 max-w-[75ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-balance">
        {children}
      </p>
    </div>
  );
}