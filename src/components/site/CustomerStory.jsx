import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";
import CountUp from "@/components/site/CountUp";

const STORY = [
  {
    label: "Who",
    text: "A non-bank lender (NBFC) with about Rs 11,000 crore of loans to small borrowers across 22 states, mostly rural and semi-urban.",
    bold: ["Rs 11,000 crore of loans"],
    italic: ["mostly rural and semi-urban"],
  },
  {
    label: "Before",
    text: "160 auditors covered 1,600 branches on a fixed calendar, using old risk reports.",
    bold: ["160 auditors covered 1,600 branches"],
    italic: ["old risk reports"],
  },
  {
    label: "Now",
    text: "Jago checks every branch on live data and ranks them by risk, so auditors go where problems are most likely.",
    bold: ["checks every branch on live data"],
    accent: ["ranks them by risk"],
  },
  {
    label: "Next",
    text: "Staff will ask questions in local languages, and customers will give consent on WhatsApp.",
    bold: ["in local languages"],
    accent: ["consent on WhatsApp"],
  },
];

export default function CustomerStory({ showLink = true }) {
  return (
    <Reveal id="story" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Customer story" title="A major lending NBFC now knows which branches to audit first" />

        <div className="mt-8 flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <CountUp
              value={1600}
              className="font-heading font-bold text-[56px] leading-none text-primary"
            />
            <p className="mt-1 text-base leading-relaxed">branches</p>
          </div>
          <div>
            <CountUp
              value={160}
              className="font-heading font-bold text-[56px] leading-none text-primary"
            />
            <p className="mt-1 text-base leading-relaxed">auditors</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-8 sm:gap-10">
          {STORY.map((s) => (
            <div key={s.label} className="min-w-0">
              <p className="site-label">{s.label}</p>
              <p className="mt-3 text-base leading-relaxed text-pretty">
                <CopyEmphasis text={s.text} bold={s.bold} accent={s.accent} italic={s.italic} />
              </p>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8">
            <Link to="/customers" className="site-cta-secondary px-5 py-3 rounded-xl">
              Read the story
            </Link>
          </div>
        )}
      </div>
    </Reveal>
  );
}