import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import CountUp from "@/components/site/CountUp";

const STORY = [
  {
    label: "Who",
    text: "A large lender with a branch network spread across many regions.",
  },
  {
    label: "Before",
    text: "Auditors visited branches on a fixed calendar, using risk reports that were weeks old.",
  },
  {
    label: "Now",
    text: "Jago checks every branch on live data and ranks them by risk, so auditors go where problems are most likely.",
  },
  {
    label: "Next",
    text: "Staff will ask questions in local languages, and customers will give consent on WhatsApp.",
  },
];

const CARD = "rounded-2xl border border-[rgba(245,247,250,0.1)] bg-[#11161d] p-6";
const LABEL = "site-line font-ui text-sm font-bold leading-5";

export default function CustomerStory({ showLink = true }) {
  return (
    <Reveal id="story" className="relative site-section-alt">
      <div className="relative mx-auto max-w-[1216px] px-5 sm:px-8 flex flex-col gap-6">
        <SectionIntro eyebrow="Customer story" title="A large lender now knows which branches to audit&nbsp;first." />

        <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
          <div className="grid gap-6">
            <div className={`${CARD} flex flex-col gap-2`}>
              <p className={`${LABEL} text-primary`}>Outcome</p>
              <p className="site-line font-ui font-bold text-[32px] sm:text-[36px] leading-[1.1] tabular text-foreground">
                <span className="whitespace-nowrap"><CountUp value={1000} suffix="+" /> branches</span>
              </p>
              <p className="site-line text-base leading-6 text-[#dde4ee]">
                Every branch is scored on live data, so auditors visit the riskiest&nbsp;first.
              </p>
            </div>
            <div className={`${CARD} flex flex-col gap-2`}>
              <p className={`${LABEL} text-primary`}>Coverage</p>
              <p className="site-line font-ui font-bold text-[32px] sm:text-[36px] leading-[1.1] tabular text-foreground">
                5 audit types
              </p>
              <p className="site-line text-base leading-6 text-[#dde4ee]">
                One system covers all five audit types across the branch&nbsp;network.
              </p>
            </div>
          </div>

          <div className={`${CARD} flex flex-col gap-4`}>
            <p className={`${LABEL} text-primary`}>The story</p>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {STORY.map((s) => (
                <div
                  key={s.label}
                  className="min-w-0 flex flex-col gap-2 rounded-xl border border-[rgba(245,247,250,0.1)] bg-[#0f1318] p-4"
                >
                  <p className={`${LABEL} text-foreground`}>{s.label}</p>
                  <p className="site-line text-base leading-6 text-[#dde4ee]">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showLink && (
          <Link to="/customers" className="site-cta-secondary w-full px-5 py-3 rounded-xl font-bold">
            Read the full story
          </Link>
        )}
      </div>
    </Reveal>
  );
}
