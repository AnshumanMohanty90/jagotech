import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STEPS = [
  {
    title: "Connect",
    desc: "Jago links your sales, finance and HR systems, documents and voice\u00a0notes.",
    bold: ["sales, finance and HR systems"],
  },
  {
    title: "Learn",
    desc: "Jago learns your data, your rules and how your team\u00a0works.",
    bold: ["your data, your rules"],
    accent: ["how your team works"],
  },
  {
    title: "Act",
    desc: "Jago creates, updates, assigns and notifies, and logs who approved each\u00a0change.",
    bold: ["logs who approved each change"],
  },
];

export default function PlatformOverview() {
  return (
    <Reveal id="overview" className="relative scroll-mt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Platform overview"
          title="Jago connects to your systems, learns your rules and then&nbsp;acts."
        >
          Jago works on top of the tools you already&nbsp;use.
        </SectionIntro>

        <div className="mt-10 grid md:grid-cols-3 gap-8 sm:gap-10">
          {STEPS.map((s) => (
            <div key={s.title} className="site-col">
              <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pretty">
                <CopyEmphasis text={s.desc} bold={s.bold} accent={s.accent} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center gap-5">
          <p className="text-base leading-relaxed max-w-xl mx-auto">
            Each job gets its own AI agent, ready in 8&nbsp;weeks.
          </p>
          <a href="#agents" className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm ">
            See the agents
          </a>
        </div>
      </div>
    </Reveal>
  );
}