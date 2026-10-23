import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";

const USD_TO_INR = 83;
const fmt = (n) => `Rs ${Math.round(n * USD_TO_INR).toLocaleString("en-IN")} (about $${Math.round(n).toLocaleString("en-US")})`;

export default function Roi() {
  const [emp, setEmp] = useState(1200);
  const [tools, setTools] = useState(4);
  const [queries, setQueries] = useState(250000);

  const vendorSavings = emp * tools * 5 * 12;
  const routingSavings = Math.round(queries * 12 * 0.015 * 0.65);
  const platformLicense = emp * 160;
  const netRoi = ((vendorSavings + routingSavings) / platformLicense).toFixed(1);

  return (
    <section id="roi" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-15 mask-fade-edges" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Financial impact" title="See what consolidation saves.">
          Estimate savings from <strong className="copy-focus">retiring fragmented tools</strong> and routing
          every query to the <strong className="copy-accent">right model.</strong>
        </SectionIntro>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-border bg-card/50 backdrop-blur p-7 sm:p-9 space-y-8"
          >
            {[
              { label: "Enterprise headcount", value: emp, set: setEmp, min: 100, max: 10000, step: 100, display: emp.toLocaleString("en-US") + " employees" },
              { label: "Standalone tools replaced", value: tools, set: setTools, min: 1, max: 10, step: 1, display: tools + " tools" },
              { label: "Monthly AI queries", value: queries, set: setQueries, min: 10000, max: 1000000, step: 10000, display: queries.toLocaleString("en-US") + " queries" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-base font-medium leading-relaxed">{s.label}</span>
                  <span className="font-mono text-sm leading-relaxed text-primary whitespace-nowrap">{s.display}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="mt-3 w-full accent-primary"
                  aria-label={s.label}
                />
              </div>
            ))}
            <p className="text-sm leading-relaxed text-muted-foreground">
              <em>Estimate based on typical enterprise benchmarks. Your assessment may vary.</em>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-primary/40 bg-card/60 backdrop-blur p-7 sm:p-9 glow-cyan flex flex-col"
          >
            <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">Estimated annual savings</p>
            <div className="mt-6 space-y-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed text-muted-foreground">Vendor consolidation</span>
                <span className="font-heading text-2xl sm:text-3xl font-semibold text-emerald">{fmt(vendorSavings)}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed text-muted-foreground">LLM routing efficiency</span>
                <span className="font-heading text-2xl sm:text-3xl font-semibold text-primary">{fmt(routingSavings)}</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-base leading-relaxed text-muted-foreground">Estimated net ROI</span>
                <span className="font-heading text-3xl sm:text-4xl font-semibold text-violet">{netRoi}x ROI</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="site-cta-primary group mt-8 gap-2 px-5 py-3 rounded-xl"
            >
              Get your free 8-week plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}