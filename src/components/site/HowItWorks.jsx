import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const PHASES = [
  {
    title: "Weeks 1 to 2: Connect",
    desc: "We link your sales, finance and HR systems and agree who can see what.",
    bold: ["sales, finance and HR systems"],
    accent: ["who can see what"],
  },
  {
    title: "Weeks 3 to 5: Set up",
    desc: "We build AI agents for your roles and test them on your own data.",
    bold: ["AI agents for your roles"],
    accent: ["your own data"],
  },
  {
    title: "Weeks 6 to 8: Go live",
    desc: "Your teams use Jago every day, and we show you what changed.",
    bold: ["use Jago every day"],
    italic: ["we show you what changed"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="How it works" title="Live in 8 weeks." />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
          {PHASES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={p.desc} bold={p.bold} accent={p.accent} italic={p.italic} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}