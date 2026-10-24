import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const DOES = [
  "Ranks every branch by risk, using live data",
  "Puts the questions most likely to find issues first",
  "Sends auditors to the branches that need them most",
  "Learns from each audit, so the next ranking is sharper",
];

export default function CustomersStory() {
  return (
    <Reveal className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="min-w-0">
          <p className="site-label">The problem</p>
          <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-pretty">
            Audits kept slipping. Risk reports used old data, and no tool showed which branches were likely
            to have problems. Auditors could not tell where to go first.
          </p>
        </div>

        <div className="mt-8 min-w-0">
          <p className="site-label">What Jago does</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-8">
            {DOES.map((d) => (
              <div key={d} className="pt-2 min-w-0">
                <p className="text-base leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="min-w-0">
            <p className="site-label">The scale</p>
            <p className="mt-3 text-[16px] leading-relaxed text-slate-300">
              1,600 branches, 160 auditors, five audit types, live data
            </p>
          </div>
          <div className="min-w-0">
            <p className="site-label">The cost</p>
            <p className="mt-3 text-base leading-relaxed text-pretty">
              About Rs 13 of AI cost each time Jago checks a branch,
              before setup and hosting. Checking all 1,600 branches costs about{" "}
              Rs 21,000 in AI.
            </p>
          </div>
        </div>

        <div className="mt-8 min-w-0">
          <p className="site-label">What comes next</p>
          <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-pretty">
            Staff will ask questions in local languages, customers will give consent on WhatsApp, and Jago
            will flag likely fraud for a person to check.
          </p>
        </div>

        <Link to="/contact?intent=trial" className="site-cta-primary mt-8 px-5 py-3 rounded-xl">
          Try it free for a week
        </Link>
      </div>
    </Reveal>
  );
}