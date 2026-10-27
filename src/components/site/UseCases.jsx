import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const USE_CASES = [
  {
    id: "employee-productivity",
    title: "Team productivity",
    desc: "Jago answers staff questions from your own systems, so no one hunts for\u00a0numbers.",
    bold: ["answers from your own systems"],
  },
  {
    id: "customer-experience",
    title: "Customer experience",
    desc: "Jago groups complaints from every channel by cause and routes\u00a0them.",
    bold: ["every channel and language"],
    accent: ["groups them by cause"],
  },
  {
    id: "workflow-automation",
    title: "Routine work",
    desc: "Jago moves work between systems and assigns it, so nothing\u00a0waits.",
    bold: ["moves work between your systems"],
    accent: ["nothing waits"],
  },
  {
    id: "decision-support",
    title: "Business decisions",
    desc: "Jago gives the number behind a business question, with the\u00a0reason.",
    bold: ["in plain words"],
    accent: ["the reason behind it"],
  },
];

export default function UseCases() {
  return (
    <Reveal id="use-cases" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="By use case" title="You can start with one of these four&nbsp;results.">
          We set up the one you pick in 8&nbsp;weeks.
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