import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const BEFORE = [
  { t: "Multiple vendors", d: "Separate tools juggling across HR, Sales, Legal and Operations." },
  { t: "Integration debt", d: "Massive engineering hours spent wiring disparate APIs together." },
  { t: "Data security gaps", d: "Proprietary company data dispersed across separate vendor clouds." },
  { t: "Overlapping spend", d: "Premium AI seats for a privileged few, plus a licence for every slice." },
];

const AFTER = [
  { t: "Single architecture", d: "Every departmental workflow powered from one unified console." },
  { t: "Familiar channels", d: "Non-technical staff work directly in WhatsApp, Cliq or Teams." },
  { t: "Enterprise governance", d: "Uniform access control, SOC 2 compliance and audit logging." },
  { t: "One predictable spend", d: "One suite replaces the patchwork, with marketplace bots for quick wins." },
];

function PanelList({ items, danger }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((b) => (
        <li key={b.t} className="flex items-start gap-3">
          <span
            className={`grid place-items-center w-5 h-5 rounded-full border shrink-0 mt-0.5 ${
              danger
                ? "bg-red-500/10 border-red-500/20"
                : "bg-primary/15 border-primary/30"
            }`}
          >
            {danger ? (
              <X className="w-3 h-3 text-red-400/80" />
            ) : (
              <Check className="w-3 h-3 text-primary" />
            )}
          </span>
          <div>
            <span className="block text-base font-medium leading-relaxed text-foreground/90">{b.t}</span>
            <span className="mt-1 block text-base leading-relaxed text-muted-foreground text-pretty">
              <CopyEmphasis text={b.d} bold={["engineering hours", "separate vendor clouds", "licence for every slice", "one unified console", "SOC 2 compliance and audit logging", "One suite replaces the patchwork"]} accent={danger ? [] : ["Non-technical staff"]} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function GameChanger() {
  return (
    <section id="platform" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="05 · Suite advantage" title="Stop buying AI by the slice.">
          Replace vendor sprawl, fragmented API integrations and <em className="copy-aside">overlapping subscription costs</em>{" "}
          with a <strong className="copy-accent">single governed AI platform.</strong>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-border bg-card/30 p-7 sm:p-9"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Before · the patchwork</span>
              <span className="font-mono text-xs text-red-400/80">High overhead, high risk</span>
            </div>
            <PanelList items={BEFORE} danger />
            <div className="mt-8 pt-5 border-t border-border flex items-baseline justify-between">
              <span className="font-mono text-xs text-muted-foreground">Total spend</span>
              <span className="font-heading text-2xl font-semibold text-muted-foreground">6+ licences</span>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative rounded-3xl border border-primary/40 bg-card/60 backdrop-blur p-7 sm:p-9 glow-cyan"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="font-mono text-xs uppercase tracking-wide text-primary">After · with Jago</span>
              <span className="font-mono text-xs text-primary">1 governed suite</span>
            </div>
            <PanelList items={AFTER} />
            <div className="mt-8 pt-5 border-t border-border flex items-baseline justify-between">
              <span className="font-mono text-xs text-muted-foreground">Total spend</span>
              <span className="font-heading text-2xl font-semibold text-primary">1 suite</span>
            </div>
            <a
              href="#contact"
              className="site-cta-primary group mt-6 gap-2 px-4 py-2.5 rounded-xl text-sm"
            >
              Start your trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}