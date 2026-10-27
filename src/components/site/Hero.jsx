import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-16">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 sm:px-8 xl:grid-cols-[1fr_1.1fr] xl:gap-12">
        {/* Everything above the fold renders immediately: no entrance animations. */}
        <div className="flex min-w-0 flex-col items-center text-center xl:items-start xl:text-left">
          <p className="site-label site-eyebrow">AI agents for growing companies</p>

          <h1 className="mt-4 font-heading text-3xl sm:text-4xl xl:!text-[42px] !font-semibold !leading-[1.15] !tracking-[-0.025em] text-balance">
            Put AI to work across your company <span className="text-primary">in 8 weeks.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty break-words">
            Jago <strong className="copy-focus">answers questions from your data</strong>, explains why
            numbers move, warns of risks and{" "}
            <strong className="copy-focus">runs routine work</strong> you&nbsp;approve.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
            <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
              Try it free for a week
            </Link>
            <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
              Download the 8-week plan
            </Link>
          </div>
        </div>

        {/* Overview video */}
        <div className="mx-auto w-full max-w-[720px] min-w-0 overflow-hidden rounded-3xl border border-border bg-black glow-cyan xl:max-w-none">
          <video
            className="block w-full aspect-video"
            src="/videos/jago-overview-720p.mp4"
            poster="/videos/jago-overview-poster.jpg"
            autoPlay
            muted
            controls
            playsInline
            preload="metadata"
            aria-label="Jago AI overview video"
          />
        </div>
      </div>
    </section>
  );
}