import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

// One real question, answered two ways. The visitor flips between the usual manual chase
// and the Jago answer, then takes the trial.
const QUESTION = "Why did South region miss its sales target last quarter?";

const WITHOUT = [
  "Ask the CRM team for an export of South's deals.",
  "Ask finance for the collections report and wait for it.",
  "Search Teams and WhatsApp for the regional review notes.",
  "Join it all in a spreadsheet and guess at the reasons.",
  "Call a meeting to agree which reason is right.",
];

const WITH = {
  answer:
    "I tested four likely reasons. Two hold up: collections slowed in the last six weeks, and three large orders moved to the next quarter. Price changes and staff turnover do not explain the gap.",
  sources: "Sources: CRM, sales ledger and two review notes from Teams.",
  next: "Want an alert when collections slow again? Jago can watch it for you.",
};

export default function BeforeAfter() {
  const [mode, setMode] = useState("without");
  const withRef = useRef(null);
  const isWith = mode === "with";

  return (
    <Reveal id="compare" className="relative" data-hide-sticky>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Before and after" title="One question, two ways to answer it.">
          Pick a side to see what changes for your team.
        </SectionIntro>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-muted-foreground">The question</p>
            <p className="mt-2 font-heading text-xl font-semibold leading-snug text-balance">{QUESTION}</p>
            <div
              role="group"
              aria-label="Show the answer"
              className="mt-5 inline-flex rounded-xl border border-border bg-background/60 p-1"
            >
              {[
                ["without", "Without Jago"],
                ["with", "With Jago"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  ref={key === "with" ? withRef : undefined}
                  aria-pressed={mode === key}
                  onClick={() => setMode(key)}
                  className={`min-h-[44px] rounded-lg px-4 text-[16px] font-semibold transition-colors ${
                    mode === key ? "bg-primary text-primary-foreground" : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-base leading-relaxed text-pretty">
              {isWith
                ? "One answer in the chat your team already uses, with the reasons tested and the sources named."
                : "Five people, three systems and a meeting, and the reason is still a guess."}
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-border bg-card/30 p-5" aria-live="polite">
            {isWith ? (
              <div key="with" className="compare-in">
                <div className="flex items-start gap-3">
                  <Sparkles aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base leading-relaxed text-foreground/90">{WITH.answer}</p>
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{WITH.sources}</p>
                <p className="mt-3 text-[16px] font-medium leading-relaxed text-foreground">{WITH.next}</p>
                <Link to="/contact?intent=trial&module=analyze" className="site-cta-primary mt-5 inline-flex px-5 py-3 rounded-xl">
                  Try it on sample data free for a week
                </Link>
              </div>
            ) : (
              <div key="without" className="compare-in">
                <ol className="space-y-3">
                  {WITHOUT.map((step, i) => (
                    <li key={step} className="flex gap-3 text-base leading-relaxed">
                      <span className="w-6 shrink-0 font-heading font-semibold text-muted-foreground">{i + 1}.</span>
                      <span className="min-w-0">{step}</span>
                    </li>
                  ))}
                </ol>
                <button
                  type="button"
                  onClick={() => {
                    setMode("with");
                    withRef.current?.focus();
                  }}
                  className="site-cta-secondary mt-5 inline-flex px-5 py-3 rounded-xl"
                >
                  See the Jago answer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
