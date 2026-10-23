import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    title: "Ask",
    desc: "Get answers from your company data in seconds. \"What were North region sales against target?\"",
    bold: ["answers from your company data"],
    accent: ["in seconds"],
  },
  {
    title: "Automate",
    desc: "Stop retyping the same data into three systems. Jago updates the records; you approve the important steps.",
    bold: ["Jago updates the records"],
    accent: ["you approve the important steps"],
  },
  {
    title: "Analyze",
    desc: "See why a number moved, not just that it moved. \"Why did South fall 4%?\"",
    bold: ["why a number moved"],
    accent: ["not just that it moved"],
  },
  {
    title: "Predict",
    desc: "Hear about a problem before it hits your results. Alerts arrive on WhatsApp.",
    bold: ["before it hits your results"],
    accent: ["Alerts arrive on WhatsApp"],
  },
  {
    title: "JShield",
    desc: "Keep your handling of customer data within the law, with proof ready for any audit.",
    bold: ["within the law"],
    accent: ["proof ready for any audit"],
    link: "https://jshield.ai",
    linkLabel: "Learn more",
  },
];

export default function WhatJagoDoes() {
  return (
    <section id="modules" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="What Jago does" title="Four AI modules. One login. Your rules." />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors flex flex-col"
            >
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">{m.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
              </p>
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-cta-secondary group/link mt-5 self-start gap-1.5 px-4 py-2 rounded-lg text-sm"
                >
                  {m.linkLabel}
                  <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}