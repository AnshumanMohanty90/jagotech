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
    <section id="use-cases" className="relative scroll-mt-24 site-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="By use case" title="The same platform, aimed at the result you need.">
          Start with the result you want.{" "}
          <strong className="copy-focus">We set it up in 8 weeks.</strong>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {USE_CASES.map((u, i) => (
            <motion.div
              key={u.id}
              id={u.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="site-col scroll-mt-24"
            >
              <h4 className="font-heading text-xl font-semibold leading-snug text-balance">{u.title}</h4>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">
                <CopyEmphasis text={u.desc} bold={u.bold} accent={u.accent} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}