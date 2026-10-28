import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, children, showActions = true }) {
  return (
    <section className="relative overflow-hidden pt-14 pb-14 sm:pt-[5.5rem] sm:pb-[5.5rem]">
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="min-w-0 max-w-5xl mx-auto text-center">
          <p className="site-label site-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-balance">
            {title}
          </h1>
          {children && (
            <p className="mt-4 mx-auto max-w-[772px] text-base sm:text-lg text-pretty">
              {children}
            </p>
          )}
          {showActions && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
                Book a free trial
              </Link>
              <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
                Download the 8-week plan
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}