import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full flex flex-col items-center text-center">
        {/* Everything above the fold renders immediately: no entrance animations. */}
        <p className="site-label site-eyebrow">AI agents for growing companies</p>

        <h1 className="mt-4 max-w-[1199px] font-heading text-3xl sm:text-4xl lg:text-5xl !font-semibold !leading-[1.12] !tracking-[-0.025em] text-balance">
          Put AI to work across your company <span className="text-primary">in 8 weeks.</span>
        </h1>

        <p className="mt-4 max-w-5xl text-base sm:text-lg text-muted-foreground text-pretty break-words">
          <strong className="copy-focus">Build AI agents in plain language</strong>, predict trends, and
          analyze cross-department data across text, audio, image, and video. Query via key channels,{" "}
          <strong className="copy-focus">automate workflows end-to-end</strong>, and scale safely with
          multi-region Compliance AI.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
            Try it free for a week
          </Link>
          <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
            Download the 8-week plan
          </Link>
        </div>

        {/* Overview video */}
        <div className="mt-8 sm:mt-10 w-full max-w-[1039px] overflow-hidden rounded-3xl border border-border bg-black glow-cyan">
          <video
            className="block w-full aspect-video"
            src="/videos/jago-overview.mp4"
            poster="/videos/jago-overview-poster.jpg"
            autoPlay
            muted
            controls
            playsInline
            preload="auto"
            aria-label="Jago AI overview video"
          />
        </div>
      </div>
    </section>
  );
}