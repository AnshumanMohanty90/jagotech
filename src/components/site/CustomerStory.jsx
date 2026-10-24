import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";
import CountUp from "@/components/site/CountUp";

const STORY = [
  {
    label: "Who",
    text: "A large Indian lender with a branch network spread across many states.",
    bold: ["large Indian lender"],
  },
  {
    label: "Before",
    text: "Auditors visited branches on a fixed calendar, using risk reports that were weeks old.",
    bold: ["on a fixed calendar"],
    italic: ["weeks old"],
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
        <SectionIntro eyebrow="Customer story" title="A large lender now knows" titleMuted="which branches to audit first." />

        <div className="mt-6 flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <p className="site-line font-heading font-bold text-[48px] leading-none text-foreground">
              <CountUp value={1000} />+
            </p>
            <p className="mt-1 text-base leading-relaxed">branches ranked by risk</p>
          </div>
          <div>
            <p className="site-line font-heading font-bold text-[48px] leading-none text-foreground">
              5
            </p>
            <p className="mt-1 text-base leading-relaxed">audit types covered</p>
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