import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const CAPS = [
  {
    id: "ask",
    title: "Ask",
    tag: "Conversational BI",
    desc: "Plain-language questions over your data, by text or voice, in 50+ languages. Answers grounded in your connected systems, not generic guesses.",
    bold: ["50+ languages"],
    accent: ["grounded in your connected systems"],
    prompt: "Show regional sales performance against target for Q3.",
    output: "SQL executed in 0.04s. Chart created: North +18%, South -4%.",
  },
  {
    id: "predict",
    title: "Predict",
    tag: "Risk and forecasting",
    desc: "Flags risks and opportunities before they land: deals about to slip, invoices heading past due, downtime on the rise.",
    bold: ["before they land"],
    accent: ["invoices heading past due"],
    prompt: "Highlight stalled deals with a high risk of slipping this month.",
    output: "3 deals flagged (score below 0.35). Alert logged.",
  },
  {
    id: "analyze",
    title: "Analyze",
    tag: "Root-cause analysis",
    desc: "Query your data in plain language. Trends, variances and root causes, explained with the numbers behind every answer.",
    bold: ["Trends, variances and root causes"],
    accent: ["the numbers behind every answer"],
    prompt: "Why did the South region miss target in Q3?",
    output: "3 factors: churn in 2 key accounts, 11-day supply gap, one pricing exception.",
  },
  {
    id: "automate",
    title: "Automate",
    tag: "Action execution",
    desc: "Zero-code actions: create, update, assign, approve, notify and trigger workflows across your systems.",
    bold: ["Zero-code actions"],
    accent: ["trigger workflows"],
    prompt: "Approve PO #441 and notify the vendor on Slack.",
    output: "PO approved in SAP. Notification dispatched.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Capabilities" title="Ask. Predict. Analyze. Automate.">
          Four capabilities, one platform. Each one works on{" "}
          <strong className="copy-focus">your data, in your context</strong>,{" "}
          <em className="copy-aside">with governance applied throughout.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-5">
          {CAPS.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="scroll-mt-24 rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">{c.title}</h3>
                <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={c.desc} bold={c.bold} accent={c.accent} />
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm leading-relaxed text-foreground/80">"{c.prompt}"</p>
                <p className="mt-2 font-mono text-sm leading-relaxed text-primary">{c.output}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}