import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const LIFECYCLE = [
  {
    title: "Watch",
    desc: "Jago watches your systems, so nothing waits for someone to\u00a0notice.",
  },
  {
    title: "Check",
    desc: "Jago reads the records and documents behind a question before\u00a0answering.",
  },
  {
    title: "Do",
    desc: "Jago creates, updates, assigns and notifies where the work\u00a0lives.",
  },
  {
    title: "Approve",
    desc: "You choose which actions need sign-off, and every action is\u00a0recorded.",
  },
];

const DEPARTMENTS = ["Sales", "Customer Experience", "Operations", "Finance", "HR", "Leadership"];

export default function AgentsOverview() {
  return (
    <Reveal id="agents" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="AI agents" title="Each agent watches your systems, checks the facts and does the&nbsp;work.">
          An agent is software that does one job inside your systems, under your&nbsp;rules.
        </SectionIntro>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {LIFECYCLE.map((s) => (
            <div key={s.title} className="site-col">
              <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center gap-5">
          <p className="text-base leading-relaxed max-w-xl mx-auto">
            Every department has its own&nbsp;agent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {DEPARTMENTS.map((d) => (
              <span key={d} className="site-label">
                {d}
              </span>
            ))}
            <Link to="/role-wins" className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm">
              See examples by role
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}