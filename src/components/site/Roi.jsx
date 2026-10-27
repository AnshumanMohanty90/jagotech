import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

import { useCurrency, formatLarge, CurrencyToggle } from "@/lib/currency";

export default function Roi() {
  const { currency, rate } = useCurrency();
  // Savings are modelled in US dollars, then shown in the visitor's currency.
  const fmt = (usdAmount) => formatLarge(usdAmount * rate, currency, rate);
  const [emp, setEmp] = useState(1200);
  const [tools, setTools] = useState(4);
  const [queries, setQueries] = useState(250000);

  const vendorSavings = emp * tools * 5 * 12;
  const routingSavings = Math.round(queries * 12 * 0.015 * 0.65);
  const platformLicense = emp * 160;
  const netRoi = ((vendorSavings + routingSavings) / platformLicense).toFixed(1);

  return (
    <Reveal id="roi" className="relative" data-hide-sticky>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Your estimated savings" title="Estimate what you save by moving to one&nbsp;platform.">
          Enter your team size, the tools you replace and your monthly questions to see a yearly&nbsp;estimate.
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
                  <span className="text-sm font-semibold leading-relaxed text-primary tabular">{s.display}</span>
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
              This is an estimate based on your inputs. We confirm the real figure in your 8-week&nbsp;plan.
            </p>
          </div>

          <div className="site-col">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="site-label">Your estimate</p>
              <CurrencyToggle />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-y-1 min-[420px]:grid-cols-[minmax(0,1fr)_auto] min-[420px]:items-baseline min-[420px]:gap-x-6 min-[420px]:gap-y-6">
              {[
                ["Yearly savings from retiring separate tools", fmt(vendorSavings)],
                ["Yearly savings from using lower-cost AI for simple tasks", fmt(routingSavings)],
                [currency === "INR" ? "Back for every rupee you spend" : "Back for every dollar you spend", currency === "INR" ? `Rs ${netRoi}` : `$${netRoi}`],
              ].map(([label, value]) => (
                <React.Fragment key={label}>
                  <dt className="text-base leading-relaxed text-pretty">{label}</dt>
                  <dd className="roi-figure font-ui text-lg sm:text-xl font-semibold text-foreground whitespace-nowrap mb-4 min-[420px]:mb-0 min-[420px]:text-right">{value}</dd>
                </React.Fragment>
              ))}
            </dl>
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