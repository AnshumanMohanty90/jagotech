import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const USE_CASES = [
  {
    id: "employee-productivity",
    title: "Team Productivity",
    desc: "Your team asks questions and gets answers from your own systems, so the morning is not spent hunting for numbers.",
    bold: ["answers from your own systems"],
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    desc: "Jago reads complaints from every channel and language, groups them by cause, and routes them to the right person.",
    bold: ["every channel and language"],
    accent: ["groups them by cause"],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    desc: "Jago moves work between your systems and assigns it, so nothing waits in a queue for someone to notice.",
    bold: ["moves work between your systems"],
    accent: ["nothing waits in a queue"],
  },
  {
    id: "decision-support",
    title: "Business Decision Support",
    desc: "Ask a business question in plain words, get the number, and see the reason behind it.",
    bold: ["in plain words"],
    accent: ["the reason behind it"],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="By use case" title="The same platform, aimed at the result you need.">
          Pick the outcome first. <strong className="copy-focus">The work starts in 8 weeks.</strong>{" "}
          <em className="copy-aside">Whatever you pick.</em>
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