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
      <div className="relative mx-auto max-w-[1024px] px-5 sm:px-8 flex flex-col gap-8">
        <SectionIntro eyebrow="Customer story" title="A large lender now knows which branches to audit first." />

        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${CARD} flex flex-col gap-3`}>
              <p className={`${LABEL} text-primary`}>Outcome</p>
              <p className="site-line font-heading font-bold text-[32px] sm:text-[42px] leading-[1.1] tabular text-foreground">
                <CountUp value={1000} />+ branches ranked by risk
              </p>
              <p className="site-line text-base leading-6 text-[#dde4ee]">
                Every branch is scored on live data so the highest-risk locations are prioritized first.
              </p>
            </div>
            <div className={`${CARD} flex flex-col gap-3`}>
              <p className={`${LABEL} text-primary`}>Coverage</p>
              <p className="site-line font-heading font-bold text-[32px] sm:text-[42px] leading-[1.1] tabular text-foreground">
                5 audit types covered
              </p>
              <p className="site-line text-base leading-6 text-[#dde4ee]">
                A single system supports multiple audit workflows across the branch network.
              </p>
            </div>
          </div>

          <div className={`${CARD} flex flex-col gap-4`}>
            <p className={`${LABEL} text-primary`}>The story</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            Read the story
          </Link>
        )}
      </div>
    </Reveal>
  );
}
