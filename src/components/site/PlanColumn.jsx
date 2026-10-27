import React from "react";
import { Link } from "react-router-dom";

export default function PlanColumn({ plan: p }) {
  return (
    <div className="site-col flex flex-col">
      <h3 className="!font-ui !text-lg !font-bold !leading-[1.375]">{p.name}</h3>
      <p className="site-line mt-3 font-ui text-xl font-bold leading-snug text-foreground">{p.price}</p>
      {p.priceNote && (
        <p className="site-line mt-2 text-sm leading-5 text-[#c1cbd7]">{p.priceNote}</p>
      )}
      <p className="site-line mt-3 text-base leading-6 text-[#dde4ee] text-pretty">{p.desc}</p>
      <div className="mt-auto flex flex-col items-start gap-3 pt-5">
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