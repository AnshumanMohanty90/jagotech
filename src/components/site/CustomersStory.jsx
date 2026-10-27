import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const DOES = [
  "Ranks every branch by risk, using live data",
  "Puts the questions most likely to find issues first",
  "Sends auditors to the branches that need them most",
  "Learns from each audit, so the next ranking is sharper",
];

const CARD = "rounded-2xl border border-[rgba(245,247,250,0.1)] bg-[#11161d] p-6";
const LABEL = "site-line font-ui text-sm font-bold leading-5 text-primary";
const TEXT = "site-line mt-3 text-base leading-6 text-[#dde4ee] text-pretty";

export default function CustomersStory() {
  return (
    <Reveal className="relative site-section-alt">
      <div className="relative mx-auto flex max-w-[1024px] flex-col gap-6 px-5 sm:px-8">
        <div className={CARD}>
          <p className={LABEL}>The problem</p>
          <p className={TEXT}>
            Audits kept slipping. Risk reports used old data, and no tool showed which branches were likely
            to have problems. Auditors could not tell where to go first.
          </p>
        </div>

        <div className={CARD}>
          <p className={LABEL}>What Jago does</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {DOES.map((d) => (
              <div key={d} className="min-w-0 rounded-xl border border-[rgba(245,247,250,0.1)] bg-[#0f1318] p-4">
                <p className="site-line text-base leading-6 text-[#dde4ee]">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className={CARD}>
            <p className={LABEL}>The scale</p>
            <p className={TEXT}>1,000+ branches, a large audit team, five audit types, all checked on live data.</p>
          </div>
          <div className={CARD}>
            <p className={LABEL}>What comes next</p>
            <p className={TEXT}>
              Staff will ask questions in local languages, customers will give consent on WhatsApp, and Jago
              will flag likely fraud for a person to check.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
            Try it free for a week
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
