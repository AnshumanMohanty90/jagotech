import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STEPS = [
  {
    title: "Connect",
    desc: "Your sales, finance and HR systems, your documents and your voice notes, in one place.",
    bold: ["sales, finance and HR systems"],
  },
  {
    title: "Understand",
    desc: "Jago learns your data, your rules and how your team works.",
    bold: ["your data, your rules"],
    accent: ["how your team works"],
  },
  {
    title: "Act",
    desc: "Jago creates, updates, assigns and notifies. Every change is logged with who approved it.",
    bold: ["Every change is logged with who approved it"],
  },
];

export default function PlatformOverview() {
  return (
    <Reveal id="overview" className="relative scroll-mt-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Platform overview"
          title="Connect your systems. Let Jago do the work."
        >
          Jago sits on top of the tools you already run and carries the work from question to done.
        </SectionIntro>

        <div className="mt-8 grid md:grid-cols-3 gap-8 sm:gap-10">
          {STEPS.map((s) => (
            <div key={s.title} className="site-col">
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pretty">
                <CopyEmphasis text={s.desc} bold={s.bold} accent={s.accent} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed max-w-xl">
            One agent per job, ready in 8 weeks.{" "}
            Meet them.
          </p>
          <a href="#agents" className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm self-start lg:self-auto">
            Explore AI agents
          </a>
        </div>
      </div>
    </Reveal>
  );
}