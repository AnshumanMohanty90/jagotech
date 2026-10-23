import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STOPPERS = [
  {
    t: "Customer data leaks",
    d: "Staff paste customer details into public AI tools. That can break India's data law.",
    bold: ["customer details into public AI tools"],
    accent: ["India's data law"],
  },
  {
    t: "No one is checking",
    d: "AI acts without a person approving, and nothing is on record if a regulator asks.",
    bold: ["without a person approving"],
    accent: ["on record"],
    italic: ["if a regulator asks"],
  },
  {
    t: "Costs pile up",
    d: "Every department pays for its own AI tool, and expensive AI does even simple jobs.",
    bold: ["its own AI tool"],
    italic: ["even simple jobs"],
  },
];

export default function Challenge() {
  return (
    <section id="problem" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-violet/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The problem" title="Your teams want to use AI. Three things stop them." />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
          {STOPPERS.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={s.d} bold={s.bold} accent={s.accent} italic={s.italic} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}