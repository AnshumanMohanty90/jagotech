import React from "react";
import { Link } from "react-router-dom";

export default function PlanColumn({ plan: p }) {
  return (
    <div className="site-row min-w-0 rounded-xl px-5 py-4">
      <h3>{p.name}</h3>
      <p className="mt-3 font-heading text-lg font-semibold text-foreground">{p.price}</p>
      {p.priceNote && (
        <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{p.priceNote}</p>
      )}
      <p className="mt-3 text-base leading-relaxed text-pretty">{p.desc}</p>
      <div className="mt-4 flex flex-col items-start gap-3">
        <Link
          to={p.href}
          className={p.primary ? "site-cta-primary px-4 py-2.5 rounded-xl text-sm" : "site-cta-secondary px-4 py-2.5 rounded-xl text-sm"}
        >
          {p.cta}
        </Link>
        {p.trialHref && (
          <Link
            to={p.trialHref}
            className="text-sm leading-relaxed hover:text-primary underline-offset-4 hover:underline transition-colors"
          >
            Try it free for a week
          </Link>
        )}
      </div>
    </div>
  );
}