import React from "react";
import Reveal from "@/components/site/Reveal";

const STATS = [
  { v: "8 weeks", l: "to go live across your teams" },
  { v: "50+", l: "languages, typed or spoken" },
  { v: "11", l: "job roles with ready-made AI agents" },
  { v: "1,000+", l: "branches checked for risk at a large lender" },
];

export default function ProofStrip() {
  return (
    <Reveal className="relative site-section-alt py-8">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {STATS.map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-ui text-[24px] sm:text-[30px] leading-tight font-semibold text-foreground tabular">
                {s.v}
              </div>
              <div className="mt-1.5 text-[16px] leading-relaxed text-pretty">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}