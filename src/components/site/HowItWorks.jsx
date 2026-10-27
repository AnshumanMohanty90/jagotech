import React, { useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

// The 8-week plan: the same "We do, You do, You get" lines as the plan PDF.
const PHASES = [
  {
    label: "Weeks 1 to 2",
    title: "Connect",
    weDo: "Link Jago to your systems and set who sees what.",
    youDo: "Give read access and name your approvers.",
    youGet: "Answers to questions on your own data.",
  },
  {
    label: "Weeks 3 to 5",
    title: "Set up",
    weDo: "Build AI agents for the roles involved and test them on your data.",
    youDo: "Test with five to ten users and decide which actions need a sign-off.",
    youGet: "Agents running the task, with sign-offs in place.",
  },
  {
    label: "Weeks 6 to 8",
    title: "Go live",
    weDo: "Move your team onto Jago on WhatsApp, Slack or Teams and track the results.",
    youDo: "Use Jago daily for the task and flag what to change.",
    youGet: "Before and after numbers on hours, time and errors.",
  },
];

const DETAIL = [
  ["We do", "weDo"],
  ["You do", "youDo"],
  ["You get", "youGet"],
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <Reveal id="how" className="relative">
      <div className="relative mx-auto max-w-[1216px] px-5 sm:px-8">
        <SectionIntro eyebrow="How it works" title="Live in 8 weeks." />

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#1c1e21] bg-[#0b0d10]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1c1e21] px-6 py-5">
            <div className="flex flex-col gap-0.5">
              <p className="site-line font-ui text-sm font-semibold text-primary">Rollout timeline</p>
              <p className="site-line text-[13px] text-[#c1cbd7]">Three ordered milestones from kickoff to launch</p>
            </div>
            <div className="flex items-center gap-2 font-ui text-xs font-semibold">
              <span className="rounded-full bg-[rgba(0,245,255,0.06)] px-2.5 py-1.5 text-primary">Weeks 1–8</span>
              <span className="rounded-full bg-[#111418] px-2.5 py-1.5 text-[#c1cbd7]">3 stages</span>
            </div>
          </div>

          <ol className="grid gap-8 p-6 md:grid-cols-3 md:gap-6">
            {PHASES.map((ph, i) => {
              const on = active === i;
              return (
                <li key={ph.label} className="relative flex min-w-0 flex-col">
                  {/* Rail node, joined to its neighbours by a horizontal line on wide screens */}
                  <div aria-hidden="true" className="relative mb-4 flex h-4 items-center">
                    {i < PHASES.length - 1 && (
                      <span className="absolute -right-6 left-4 top-1/2 hidden h-0.5 -translate-y-1/2 bg-[rgba(0,242,255,0.2)] md:block" />
                    )}
                    <span
                      className={`relative z-10 h-4 w-4 rounded-full border-2 ${
                        on ? "border-primary bg-primary" : "border-primary/60 bg-[#0b0d10]"
                      }`}
                    />
                  </div>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    className={`site-choice flex min-w-0 flex-1 flex-col rounded-[20px] border p-6 text-left ${
                      on ? "border-primary bg-[rgba(0,245,255,0.06)]" : "border-[#1c1e21] bg-[#111418]"
                    }`}
                  >
                    <span
                      className={`self-start rounded-full px-2.5 py-1.5 font-ui text-xs font-semibold ${
                        on ? "bg-[rgba(0,242,255,0.1)] text-primary" : "bg-[#1c1e21] text-[#c1cbd7]"
                      }`}
                    >
                      {ph.label}
                    </span>
                    <span className="mt-2 block font-ui text-2xl font-bold leading-[1.25] text-foreground">{ph.title}</span>
                    <span className="mt-5 flex flex-col gap-4">
                      {DETAIL.map(([label, key]) => (
                        <span key={key} className="flex flex-col gap-1.5">
                          <span className="font-ui text-xs font-semibold uppercase tracking-[0.8px] text-primary">{label}</span>
                          <span className="font-ui text-base font-medium leading-6 text-[#dde4ee]">{ph[key]}</span>
                        </span>
                      ))}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}
