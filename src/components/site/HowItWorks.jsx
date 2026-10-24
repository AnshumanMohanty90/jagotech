import React, { useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import useInView from "@/hooks/useInView";

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

// Segment widths for weeks 1-2, 3-5, 6-8 out of 8.
const GROW = [2, 3, 3];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [trackRef, inView] = useInView("0px 0px -15% 0px");
  const p = PHASES[active];

  // Eight week ticks; the cyan fill sweeps from week 1 to week 8 when in view.
  const ticks = [];
  PHASES.forEach((ph, pi) => {
    for (let k = 0; k < GROW[pi]; k++) ticks.push(pi);
  });

  return (
    <Reveal id="how" className="relative">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="How it works" title="Live in 8 weeks." />

        <div ref={trackRef} className="mt-6 min-w-0">
          {/* Progress track: weeks 1 to 8 */}
          <div className="flex gap-1.5 min-w-0" aria-hidden="true">
            {ticks.map((seg, i) => (
              <div key={i} className="h-1.5 flex-1 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{
                    width: inView ? "100%" : "0%",
                    transition: "width 1000ms ease-out",
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Phase buttons */}
          <div className="mt-5 grid grid-cols-3 gap-1.5 min-w-0 sm:flex">
            {PHASES.map((ph, i) => {
              const on = active === i;
              return (
                <button
                  key={ph.label}
                  type="button"
                  aria-expanded={on}
                  onClick={() => setActive(i)}
                  style={{ flex: `${GROW[i]} 1 0%` }}
                  className={`site-row site-choice min-w-0 rounded-lg px-2.5 py-3 text-left min-h-[44px] sm:px-3 ${
                    on ? "bg-[rgba(0,245,255,0.06)]" : ""
                  }`}
                >
                  <span className="block whitespace-nowrap text-xs leading-relaxed text-muted-foreground">{ph.label}</span>
                  <span
                    className={`mt-0.5 block font-heading text-base sm:text-lg font-semibold leading-snug ${
                      on ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {ph.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Open phase: We do / You do / You get */}
          <div className="mt-6 grid gap-5 sm:grid-cols-3 sm:gap-8 min-w-0">
            <div>
              <p className="site-label">We do</p>
              <p className="mt-2 text-base leading-relaxed">{p.weDo}</p>
            </div>
            <div>
              <p className="site-label">You do</p>
              <p className="mt-2 text-base leading-relaxed">{p.youDo}</p>
            </div>
            <div>
              <p className="site-label">You get</p>
              <p className="mt-2 text-base leading-relaxed">{p.youGet}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}