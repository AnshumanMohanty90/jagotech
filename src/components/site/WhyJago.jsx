import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const REASONS = [
  {
    t: "Built for India",
    d: "50+ languages, WhatsApp, and India's data law built in.",
    bold: ["50+ languages"],
    accent: ["India's data law"],
  },
  {
    t: "You stay in control",
    d: "A person approves the key steps, and every action is on record.",
    bold: ["A person approves"],
    accent: ["every action is on record"],
  },
  {
    t: "Costs less to run",
    d: "Jago picks the right AI for each task, and can run on your own servers.",
    bold: ["the right AI for each task"],
    italic: ["your own servers"],
  },
];

export default function WhyJago() {
  return (
    <section id="why" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-emerald/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Why Jago" title="Why teams choose Jago" />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold tracking-tight">{r.t}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={r.d} bold={r.bold} accent={r.accent} italic={r.italic} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}