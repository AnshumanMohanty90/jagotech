import React, { useEffect, useState } from "react";
import { tabKeys } from "@/lib/tabKeys";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "One question, in your language, answered from your systems and documents across every channel, with the source.",
    anchor: "ask",
    example: "How did each region do against target in Q3, and what is holding South back?",
    answer:
      "North is 18% ahead of target and South is 4% behind. The South review notes on Teams and the dispatch report shared on WhatsApp both point to late deliveries. Sources: CRM, sales ledger and two documents.",
    result: "One answer, from systems and documents across channels.",
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "Jago tests the likely reasons a number moved and shows which ones your data supports.",
    anchor: "analyze",
    example: "Why did South region miss its sales target last quarter?",
    answer:
      "I tested four likely reasons. Two hold up: collections slowed in the last six weeks, and three large orders moved to the next quarter. Price changes and staff turnover do not explain the gap.",
    result: "4 reasons tested, 2 confirmed by your data.",
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Jago reads trends across departments and warns you what is likely to slip, and why.",
    anchor: "predict",
    example: "Which deals are likely to slip this quarter?",
    answer:
      "Three deals are likely to slip. Two have waited on procurement sign-off longer than usual, and one buyer has gone quiet for two weeks. The deal owners have an alert on WhatsApp.",
    result: "3 deals flagged, each with the signals behind it.",
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Describe a workflow in plain words and Jago builds an agent that runs it, with your sign-off.",
    anchor: "automate",
    example: "When a large order is booked, update the CRM, draft the invoice and tell finance on WhatsApp.",
    answer:
      "Agent built with three steps. It runs on every order above your limit, waits for your sign-off before the invoice goes out, and logs each run.",
    result: "Agent ready. Sign-off set on the invoice step.",
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
          <div role="tablist" aria-label="Jago modules" className="flex flex-col min-w-0 lg:pt-2">
            {MODULES.map((mod, i) => (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                tabIndex={active === i ? 0 : -1}
                onClick={() => pick(i)}
                onKeyDown={(e) => tabKeys(e, MODULES.length, i, pick)}
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