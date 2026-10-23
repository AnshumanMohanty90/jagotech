import React from "react";
import { motion } from "framer-motion";
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
    desc: "See why a number moved, with the reasons behind it. \"Why did South fall 4%?\"",
    bold: ["why a number moved"],
    accent: ["the reasons behind it"],
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
    <section id="modules" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="What Jago does" title="Four AI modules with one login, under your rules." />

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="site-col flex flex-col"
            >
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">{m.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
              </p>
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-cta-secondary mt-5 self-start px-4 py-2.5 rounded-xl text-sm"
                >
                  {m.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}