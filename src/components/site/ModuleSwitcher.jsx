import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask a question about your data in plain words and get the answer.",
    anchor: "ask",
    example: "Show regional sales performance against target for Q3.",
    answer:
      "North is 18% ahead of target. South is 4% behind. West and East are on target. Chart attached.",
    result: "Answered in 2 seconds.",
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "Find out why a number went up or down, with the reasons listed.",
    anchor: "analyze",
    example: "Why did South region sales fall behind target last quarter?",
    answer:
      "Two branches account for most of the gap: collections slowed in the last six weeks of the quarter and three large orders moved to the next quarter.",
    result: "Answered in 2 seconds, with the reasons behind it.",
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Get an early warning when a deal, payment or target is at risk.",
    anchor: "predict",
    example: "Which deals will slip this quarter?",
    answer:
      "Three deals are likely to slip: two are waiting on procurement sign-off and one has gone quiet for two weeks. An alert has gone to the deal owners on WhatsApp.",
    result: "3 deals flagged. Alert logged.",
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Let Jago update your systems and send notes, after you approve.",
    anchor: "automate",
    example: "Update the CRM with this order and notify the finance team.",
    answer:
      "Draft ready: the order is filled in the CRM and a note for the finance team is written. Nothing changes until you approve.",
    result: "Order drafted. Waiting for your sign-off.",
  },
];

export default function ModuleSwitcher() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  // Auto-advance every 6 seconds; pauses on hover or focus, stops for good once a visitor clicks.
  useEffect(() => {
    if (paused || stopped) return;
    const t = setInterval(() => setActive((a) => (a + 1) % MODULES.length), 6000);
    return () => clearInterval(t);
  }, [paused, stopped]);

  const pick = (i) => {
    setActive(i);
    setStopped(true);
  };

  const m = MODULES[active];

  return (
    <Reveal id="modules" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="What Jago does" title="Four AI modules with one login," titleMuted="under your rules." />

        <div
          className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          {/* Left: the four modules, in the order a team uses Jago */}
          <div role="tablist" aria-label="Jago modules" className="flex flex-col min-w-0">
            {MODULES.map((mod, i) => (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => pick(i)}
                className={`site-row site-choice flex flex-col rounded-lg px-3 py-3 text-left min-h-[44px] transition-colors ${
                  active === i ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    aria-hidden="true"
                    className={`h-6 w-1 rounded-full shrink-0 transition-colors ${active === i ? "bg-primary" : "bg-transparent"}`}
                  />
                  <span className="font-heading text-lg font-semibold leading-snug">{mod.title}</span>
                </span>
                <span className="mt-1 pl-7 text-[16px] leading-relaxed text-muted-foreground">
                  {mod.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Right: scripted sample panel for the selected module */}
          <div className="min-w-0" role="tabpanel">
            <div className="h-full rounded-2xl border border-border bg-card/30 p-5">
              <div className="flex items-start gap-3 min-w-0">
                <Sparkles aria-hidden="true" className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="min-w-0 font-body text-base leading-relaxed text-foreground/90">
                  {m.example}
                </p>
              </div>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{m.answer}</p>
              <p className="mt-3 text-[16px] font-medium leading-relaxed text-foreground">
                {m.result}
              </p>
              <Link
                to={`/platform#${m.anchor}`}
                className="site-row site-choice mt-4 inline-flex items-center gap-1.5 -mx-2 rounded-lg px-2 py-2 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary min-h-[44px]"
              >
                See how {m.title} works
                <ArrowRight aria-hidden="true" className="site-row-arrow w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed">
          Add <span className="copy-focus">JShield</span> to keep customer data within the law.{" "}
          <a
            href="https://jshield.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="site-inline-link text-primary underline underline-offset-4 hover:decoration-primary/60 transition-colors"
          >
            Read about JShield
          </a>
        </p>
      </div>
    </Reveal>
  );
}