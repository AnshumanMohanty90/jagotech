import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Database, Bell } from "lucide-react";
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
  intro: "I tested four likely reasons. Two hold up:",
  answer:
    "I tested four likely reasons. Two hold up: collections slowed in the last six weeks and three large orders moved to the next quarter. Price changes and staff turnover do not explain the gap.",
  chips: ["CRM", "Sales ledger", "2 Teams review notes"],
  reasons: [
    ["Collections slowed in the last six weeks", "One of the two reasons that hold up."],
    ["Three large orders moved to next quarter", "Price changes and staff turnover do not explain the gap."],
  ],
  next: "Want an alert when collections slow again? Jago can monitor this for you.",
};

export default function BeforeAfter() {
  const [mode, setMode] = useState("with");
  const isWith = mode === "with";

  return (
    <Reveal id="compare" className="relative" data-hide-sticky>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Before and after" title="One question, two ways to answer it." />

        <div className="mx-auto mt-8 max-w-[1100px] overflow-hidden rounded-[20px] border border-[#2f3641] bg-[#13161b] lg:grid lg:grid-cols-[5fr_7fr]">
          {/* Chat preview */}
          <div className="flex min-h-[240px] flex-col justify-center gap-4 bg-[#0d0f13] px-5 py-6 sm:px-9 sm:py-8">
            <div className="flex justify-end">
              <p className="site-line max-w-[440px] rounded-[14px] rounded-br-[4px] border border-[#2f3641] bg-[#1e2530] px-4 py-3 font-ui text-sm font-medium leading-[22px] text-[#dde4ee]">
                {QUESTION}
              </p>
            </div>
            {isWith && (
              <>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,242,255,0.2)] bg-[rgba(0,242,255,0.1)]">
                    <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <p className="site-line max-w-[500px] rounded-[14px] rounded-bl-[4px] border border-[rgba(0,242,255,0.2)] bg-[rgba(0,242,255,0.06)] px-4 py-3 font-ui text-sm font-medium leading-[22px] text-primary">
                    I tested four likely reasons. Two hold up.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {WITH.chips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[rgba(0,242,255,0.2)] bg-[rgba(0,242,255,0.05)] px-2.5 py-1.5 font-ui text-[11px] font-medium leading-4 text-primary"
                    >
                      <Database aria-hidden="true" className="h-3 w-3" />
                      {c}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="h-px bg-[#2f3641] lg:hidden" />

          {/* Answer */}
          <div className="px-5 pb-8 pt-6 sm:px-9 lg:border-l lg:border-[#2f3641]" aria-live="polite">
            <div role="group" aria-label="Show the answer" className="flex gap-2.5">
              {[
                ["without", "Without Jago"],
                ["with", "With Jago"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={mode === key}
                  onClick={() => setMode(key)}
                  className={`min-h-[44px] rounded-[10px] border px-[18px] py-2 font-ui text-sm leading-[22px] ${
                    mode === key
                      ? "border-primary bg-[rgba(0,242,255,0.1)] font-semibold text-primary"
                      : "border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.02)] font-medium text-[#8896a4]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {isWith ? (
              <div key="with" className="compare-in">
                <div className="flex items-center gap-2.5 pt-5">
                  <Sparkles aria-hidden="true" className="h-[18px] w-[18px] text-primary" />
                  <span className="font-ui text-sm font-bold leading-5 text-primary">Jago AI</span>
                </div>
                <p className="site-line pt-3 text-[17px] leading-[27px] text-foreground">{WITH.answer}</p>
                <div className="flex flex-col gap-2.5 pt-5">
                  {WITH.reasons.map(([t, d], i) => (
                    <div key={t} className="flex items-start gap-3.5 rounded-xl border border-[#2f3641] bg-[#0d0f13] px-4 py-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,242,255,0.2)] bg-[rgba(0,242,255,0.1)] font-ui text-[13px] font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="font-ui text-sm font-semibold leading-5 text-foreground">{t}</span>
                        <span className="text-[13px] leading-5 text-[#8896a4]">{d}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2.5 rounded-[10px] border border-[rgba(0,242,255,0.13)] bg-[rgba(0,242,255,0.03)] px-4 py-3">
                  <Bell aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                  <p className="site-line flex-1 text-[13px] leading-5 text-[#c1cbd7]">{WITH.next}</p>
                </div>
                <Link
                  to="/contact?intent=trial&module=analyze"
                  className="mt-5 flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-center font-ui text-[15px] font-bold leading-[22px] text-primary-foreground"
                >
                  Try it on sample data free for a week →
                </Link>
              </div>
            ) : (
              <div key="without" className="compare-in pt-6">
                <ol className="space-y-3">
                  {WITHOUT.map((step, i) => (
                    <li key={step} className="flex gap-3 text-base leading-6 text-[#dde4ee]">
                      <span className="w-6 shrink-0 font-ui font-semibold text-[#8896a4]">{i + 1}.</span>
                      <span className="min-w-0">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="site-line mt-4 text-base leading-6 text-[#c1cbd7]">
                  Five people, three systems and a meeting, and the reason is still a guess.
                </p>
                <button
                  type="button"
                  onClick={() => setMode("with")}
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
