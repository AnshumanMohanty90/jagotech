import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const USE_CASES = [
  {
    id: "employee-productivity",
    title: "Team Productivity",
    desc: "Your team asks questions and gets answers from your own systems, so the morning is not spent hunting for numbers.",
    bold: ["answers from your own systems"],
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    desc: "Jago reads complaints from every channel and language, groups them by cause, and routes them to the right person.",
    bold: ["every channel and language"],
    accent: ["groups them by cause"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    desc: "Jago moves work between your systems and assigns it, so nothing waits in a queue for someone to notice.",
    bold: ["moves work between your systems"],
    accent: ["nothing waits in a queue"],
  },
  {
    id: "decision-support",
    title: "Business Decision Support",
    desc: "Ask a business question in plain words, get the number, and see the reason behind it.",
    bold: ["in plain words"],
    accent: ["the reason behind it"],
  },
];

export default function UseCases() {
  return (
    <Reveal id="use-cases" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="By use case" title="The same platform, aimed at the result you need.">
          Start with the result you want.{" "}
          We set it up in 8 weeks.
        </SectionIntro>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {USE_CASES.map((u) => (
            <div key={u.id} id={u.id} className="site-col scroll-mt-24">
              <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">{u.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pretty">
                <CopyEmphasis text={u.desc} bold={u.bold} accent={u.accent} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}