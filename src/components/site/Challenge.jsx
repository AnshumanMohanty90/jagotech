import React, { useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STOPPERS = [
  {
    t: "Customer data leaks",
    d: "Staff paste customer details into public AI tools. That can break India's data law.",
    answer: "Jago keeps customer data inside your systems",
    bold: ["customer details into public AI tools"],
    accent: ["India's data law"],
  },
  {
    t: "No one is checking",
    d: "AI acts without a person approving, and nothing is on record if a regulator asks.",
    answer: "A person approves key steps and every action is logged",
    bold: ["without a person approving"],
    accent: ["on record"],
    italic: ["if a regulator asks"],
  },
  {
    t: "Costs pile up",
    d: "Every department pays for its own AI tool, and expensive AI does even simple jobs.",
    answer: "One platform, with low-cost AI for simple tasks",
    bold: ["its own AI tool"],
    italic: ["even simple jobs"],
  },
];

export default function Challenge() {
  const [tapped, setTapped] = useState(null);

  return (
    <Reveal id="problem" className="relative">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The problem" title="Your teams want to use AI. Three things stop them." />

        <div className="mt-6 grid md:grid-cols-3 gap-4 sm:gap-6">
          {STOPPERS.map((s, i) => (
            <button
              key={s.t}
              type="button"
              aria-expanded={tapped === i}
              onClick={() => setTapped((t) => (t === i ? null : i))}
              className="site-row site-choice group rounded-xl px-4 py-4 text-left min-h-[44px]"
            >
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">
                {s.t}
              </h3>
              <p className="mt-3 text-base leading-relaxed">
                <CopyEmphasis text={s.d} bold={s.bold} accent={s.accent} italic={s.italic} />
              </p>
              <p
                className={`site-label mt-3 transition-opacity duration-150 ${
                  tapped === i
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                {s.answer}
              </p>
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}