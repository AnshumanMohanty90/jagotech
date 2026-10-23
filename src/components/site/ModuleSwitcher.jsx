import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    title: "Ask",
    anchor: "ask",
    desc: "Get answers from your company data in seconds. \"What were North region sales against target?\"",
    bold: ["answers from your company data"],
    accent: ["in seconds"],
  },
  {
    title: "Analyze",
    anchor: "analyze",
    desc: "See why a number moved, with the reasons behind it. \"Why did South fall 4%?\"",
    bold: ["why a number moved"],
    accent: ["the reasons behind it"],
  },
  {
    title: "Predict",
    anchor: "predict",
    desc: "Hear about a problem before it hits your results. Alerts arrive on WhatsApp.",
    bold: ["before it hits your results"],
    accent: ["Alerts arrive on WhatsApp"],
  },
  {
    title: "Automate",
    anchor: "automate",
    desc: "Stop retyping the same data into three systems. Jago updates the records; you approve the important steps.",
    bold: ["Jago updates the records"],
    accent: ["you approve the important steps"],
  },
];

const JSHIELD = {
  desc: "Keep your handling of customer data within the law, with proof ready for any audit.",
  bold: ["within the law"],
  accent: ["proof ready for any audit"],
  link: "https://jshield.ai",
  linkLabel: "Read about JShield",
};

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
          className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,260px),minmax(0,1fr)] lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <div role="tablist" aria-label="Jago modules" className="flex flex-row gap-1 overflow-x-auto min-w-0 lg:flex-col">
            {MODULES.map((mod, i) => (
              <button
                key={mod.title}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => pick(i)}
                className={`site-row site-choice flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-left min-h-[44px] transition-colors ${
                  active === i ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-6 w-1 rounded-full shrink-0 transition-colors ${active === i ? "bg-primary" : "bg-transparent"}`}
                />
                <span className="font-heading text-base sm:text-lg font-semibold leading-snug">{mod.title}</span>
              </button>
            ))}
          </div>

          <div className="min-w-0" role="tabpanel">
            <p className="text-base sm:text-lg leading-relaxed text-pretty max-w-2xl">
              <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
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

        <div className="mt-8 min-w-0">
          <h3 className="font-heading text-xl font-semibold leading-snug text-balance">JShield</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">
            <CopyEmphasis text={JSHIELD.desc} bold={JSHIELD.bold} accent={JSHIELD.accent} />
          </p>
          <a
            href={JSHIELD.link}
            target="_blank"
            rel="noopener noreferrer"
            className="site-cta-secondary mt-4 inline-flex px-4 py-2.5 rounded-xl text-sm"
          >
            {JSHIELD.linkLabel}
          </a>
        </div>
      </div>
    </Reveal>
  );
}