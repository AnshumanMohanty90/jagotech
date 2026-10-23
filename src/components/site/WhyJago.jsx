import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const REASONS = [
  {
    t: "Built for India",
    d: "Indian languages, WhatsApp and India's data law, built in.",
    bold: ["Indian languages"],
    accent: ["India's data law"],
  },
  {
    t: "You stay in control",
    d: "You choose what needs a sign-off. Every action is logged.",
    bold: ["You choose"],
    accent: ["Every action is logged"],
  },
  {
    t: "Costs less to run",
    d: "Simple tasks go to lower-cost AI. Runs on your own servers if you prefer.",
    bold: ["lower-cost AI"],
    italic: ["your own servers"],
  },
];

export default function WhyJago() {
  return (
    <section id="why" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Why Jago" title="Why teams choose Jago" />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-8 sm:gap-10">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="site-col"
            >
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">{r.t}</h3>
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