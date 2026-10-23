import React from "react";

export default function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="min-w-0 max-w-5xl">
      <p className="site-label">{eyebrow}</p>
      <h2 className="mt-3 font-heading font-semibold leading-[1.15] tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-3 max-w-[75ch] text-base sm:text-lg leading-relaxed text-pretty">
        {children}
      </p>
    </div>
  );
}