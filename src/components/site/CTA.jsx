import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const GOALS = [
  { id: "ask", label: "Get answers faster", module: "Ask" },
  { id: "analyze", label: "Understand why numbers move", module: "Analyze" },
  { id: "predict", label: "See problems before they happen", module: "Predict" },
  { id: "automate", label: "Take routine work off my team", module: "Automate" },
];

export default function CTA({ tinted = false }) {
  const [goal, setGoal] = useState(null);
  const picked = GOALS.find((g) => g.id === goal);
  return (
    <Reveal id="contact" className={`relative overflow-hidden ${tinted ? "site-section-alt" : ""}`}>
      <div aria-hidden="true" className="absolute inset-0 hero-glow opacity-70" />

      <div className="relative mx-auto flex max-w-[896px] flex-col items-center gap-4 px-5 sm:px-8 text-center">
        <h2 className="font-heading text-balance">
          Try Jago <span className="text-primary">free for a week.</span>
        </h2>
        <p className="text-base sm:text-lg max-w-[772px] mx-auto text-pretty">
          Activate a trial workspace and see what Jago does on sample data. Want the roll-out plan
          first? Download the 8-week plan.
        </p>

        <p className="site-line pt-4 font-ui text-lg font-semibold leading-7 text-foreground">What do you want to fix first?</p>
        <div role="group" aria-label="What do you want to fix first?" className="grid w-full gap-3 sm:grid-cols-2">
          {GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={goal === g.id}
              onClick={() => setGoal(g.id)}
              className="site-chip w-full"
            >
              {g.label}
            </button>
          ))}
        </div>
        <p className="site-line mx-auto min-h-[26px] max-w-2xl text-base leading-[26px] text-slate-200" aria-live="polite">
          {picked ? (
            <>
              <span className="font-semibold text-white">Start with {picked.module}.</span> We pass your choice to the team setting up your trial.
            </>
          ) : (
            <span className="font-ui font-semibold text-white">Pick one to tailor your trial.</span>
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to={picked ? `/contact?intent=trial&module=${picked.id}` : "/contact?intent=trial"}
            className="site-cta-primary px-5 py-3 rounded-xl"
          >
            {picked ? `Try ${picked.module} free for a week` : "Try it free for a week"}
          </Link>
          <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
            Download the 8-week plan
          </Link>
        </div>
      </div>
    </Reveal>
  );
}