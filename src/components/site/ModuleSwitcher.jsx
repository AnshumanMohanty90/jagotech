import React, { useEffect, useState } from "react";
import { tabKeys } from "@/lib/tabKeys";
import { Link } from "react-router-dom";
import { Sparkles, MessageSquare, Search, TrendingUp, Workflow } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const MODULES = [
  {
    id: "ask",
    Icon: MessageSquare,
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
    Icon: Search,
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
    Icon: TrendingUp,
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
    Icon: Workflow,
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
        <SectionIntro eyebrow="What Jago does" title="Four AI modules with one login, under your rules." />

        <div
          className="mx-auto mt-10 flex max-w-[1016px] flex-col gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          {/* The four modules, in the order a team uses Jago */}
          <div role="tablist" aria-label="Jago modules" className="grid gap-6 md:grid-cols-2">
            {MODULES.map((mod, i) => {
              const on = active === i;
              return (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => pick(i)}
                  onKeyDown={(e) => tabKeys(e, MODULES.length, i, pick)}
                  className={`site-choice flex min-h-[44px] flex-col gap-4 rounded-2xl border bg-[rgba(19,22,27,0.3)] p-5 text-left md:h-[320px] ${
                    on ? "border-primary" : "border-[#2f3641]"
                  }`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(0,242,255,0.22)] bg-[rgba(0,242,255,0.07)]">
                    <mod.Icon aria-hidden="true" className="h-8 w-8 text-primary" />
                  </span>
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className={`h-6 w-1 rounded-full ${on ? "bg-primary" : "bg-[#2f3641]"}`} />
                    <span className={`font-ui text-lg font-bold leading-[1.375] ${on ? "text-foreground" : "text-[#c1cbd7]"}`}>
                      {mod.title}
                    </span>
                  </span>
                  <span className="text-base leading-[26px] text-[#c1cbd7]">{mod.desc}</span>
                </button>
              );
            })}
          </div>

          {/* Scripted sample panel for the selected module */}
          <div role="tabpanel" className="flex flex-col gap-4 rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-5">
            <div className="flex items-center gap-3 min-w-0">
              <Sparkles aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
              <p className="site-line min-w-0 text-lg leading-[1.6] text-[#dde4ee]">{m.example}</p>
            </div>
            <p className="site-line text-lg leading-[1.6] text-[#dde4ee]">{m.answer}</p>
            <p className="site-line text-lg font-medium leading-[1.6] text-[#dde4ee]">{m.result}</p>
            <Link
              to={`/platform#${m.anchor}`}
              className="site-choice -mx-2 inline-flex min-h-[44px] items-center self-start rounded-xl p-2 font-ui font-bold text-primary underline"
            >
              See how {m.title} works
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-base leading-relaxed">
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