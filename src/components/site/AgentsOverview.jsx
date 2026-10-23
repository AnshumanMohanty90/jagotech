import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const LIFECYCLE = [
  {
    title: "Watch",
    desc: "Jago keeps an eye on your systems, so nothing waits for someone to notice.",
  },
  {
    title: "Check",
    desc: "Jago reads the records and documents behind a question before it answers.",
  },
  {
    title: "Do",
    desc: "Jago creates, updates, assigns and notifies in the systems where the work lives.",
  },
  {
    title: "Approve",
    desc: "You choose which actions need a sign-off, and every action is on record.",
  },
];

const DEPARTMENTS = ["Sales", "Customer Experience", "Operations", "Finance", "HR", "Leadership"];

export default function AgentsOverview() {
  return (
    <Reveal id="agents" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="AI agents" title="Agents that watch, check and do the work.">
          An agent is software that carries a job from question to finished
          work, inside your systems, under your rules.
        </SectionIntro>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {LIFECYCLE.map((s) => (
            <div key={s.title} className="site-col">
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed max-w-xl">
            Every department has its own agent.{" "}
            See what yours does.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {DEPARTMENTS.map((d) => (
              <span key={d} className="site-label">
                {d}
              </span>
            ))}
            <Link to="/role-wins" className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm">
              See the role examples
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}