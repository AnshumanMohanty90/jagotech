import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

const USD_TO_INR = 83;
const fmtInr = (inr) => {
  if (inr >= 10000000) return `Rs ${(inr / 10000000).toFixed(1)} crore a year`;
  if (inr >= 100000) return `Rs ${(inr / 100000).toFixed(1)} lakh a year`;
  return `Rs ${Math.round(inr).toLocaleString("en-IN")} a year`;
};
const fmt = (n) => `${fmtInr(n * USD_TO_INR)} (about $${Math.round(n).toLocaleString("en-US")})`;

export default function Roi() {
  const [emp, setEmp] = useState(1200);
  const [tools, setTools] = useState(4);
  const [queries, setQueries] = useState(250000);

  const vendorSavings = emp * tools * 5 * 12;
  const routingSavings = Math.round(queries * 12 * 0.015 * 0.65);
  const platformLicense = emp * 160;
  const netRoi = ((vendorSavings + routingSavings) / platformLicense).toFixed(1);

  return (
    <Reveal id="roi" className="relative">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Your estimated savings" title="See what you could save.">
          Enter your team size and current AI spend. We estimate what you save by replacing{" "}
          separate tools with{" "}
          one platform.
        </SectionIntro>

        <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="site-col">
            {[
              { label: "People in your company", value: emp, set: setEmp, min: 100, max: 10000, step: 100, display: emp.toLocaleString("en-US") + " employees" },
              { label: "Separate tools you replace", value: tools, set: setTools, min: 1, max: 10, step: 1, display: tools + " tools" },
              { label: "Questions asked in a month", value: queries, set: setQueries, min: 10000, max: 1000000, step: 10000, display: queries.toLocaleString("en-US") + " questions" },
            ].map((s) => (
              <div key={s.label} className="mt-6 first:mt-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-base font-medium leading-relaxed">{s.label}</span>
                  <span className="font-mono text-sm leading-relaxed text-primary">{s.display}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="mt-1 h-11 w-full cursor-pointer accent-primary"
                  aria-label={s.label}
                />
              </div>
            ))}
            <p className="mt-8 text-sm leading-relaxed">
              Estimate only. Based on the numbers you enter. We confirm the real figure in your 8-week plan.
            </p>
          </div>

          <div className="site-col">
            <p className="site-label">Estimated annual savings</p>
            <div className="mt-6 space-y-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed max-w-xs">Savings from retiring separate tools</span>
                <span className="font-heading text-2xl sm:text-3xl font-semibold text-emerald">{fmt(vendorSavings)}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed max-w-xs">Savings from using lower-cost AI for simple tasks</span>
                <span className="font-heading text-2xl sm:text-3xl font-semibold text-primary">{fmt(routingSavings)}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed max-w-xs">Return on what you spend</span>
                <span className="font-heading text-3xl sm:text-4xl font-semibold text-violet">Rs {netRoi} back for every rupee you spend</span>
              </div>
            </div>
            <Link
              to="/contact?intent=plan"
              className="site-cta-primary mt-8 self-start px-5 py-3 rounded-xl"
            >
              Download the 8-week plan
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}