import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

export default function CTA({ tinted = false }) {
  return (
    <Reveal id="contact" className={`relative overflow-hidden ${tinted ? "site-section-alt" : ""}`}>
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="font-heading font-semibold leading-[1.15] tracking-tight text-balance">
          Try Jago free for a week.
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
          Activate a trial workspace and see what Jago does on sample data. Want the roll-out plan
          first? Download the 8-week plan.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
            Try it free for a week
          </Link>
          <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
            Download the 8-week plan
          </Link>
        </div>
      </div>
    </Reveal>
  );
}