import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const USE_CASES = [
  {
    id: "employee-productivity",
    title: "Employee Productivity",
    desc: "Instant answers from connected systems, automated reports and multilingual drafting, so people spend their time on judgment, not on searching.",
    bold: ["Instant answers", "automated reports"],
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    desc: "Resolve issues, understand customers, and create and route tickets automatically, with full context on every conversation.",
    bold: ["Resolve issues"],
    accent: ["full context"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    desc: "Move workflows forward, manage exceptions and assign work, without swivel-chair handoffs between systems.",
    bold: ["manage exceptions"],
    accent: ["without swivel-chair handoffs"],
  },
  {
    id: "decision-support",
    title: "Business Decision Support",
    desc: "Ask business questions in plain language, spot risks early, and make informed decisions on grounded numbers.",
    bold: ["Ask business questions"],
    accent: ["grounded numbers"],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="By use case" title="Start with the outcome you need.">
          The same platform, aimed at the result that matters to you,{" "}
          <em className="copy-aside">in whatever order you want to move.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USE_CASES.map((u, i) => (
            <motion.div
              key={u.id}
              id={u.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="scroll-mt-24 group rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <h4 className="font-heading text-lg font-semibold leading-snug">{u.title}</h4>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={u.desc} bold={u.bold} accent={u.accent} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}