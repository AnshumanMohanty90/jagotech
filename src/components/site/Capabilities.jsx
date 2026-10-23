import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/site/SectionIntro";

const CAPS = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask a question in plain words and get the number from your own data.",
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Get a message on WhatsApp when a number starts to slip.",
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "See why a number moved, with the reasons behind it.",
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Let Jago update your systems, after a person approves the key steps.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The four modules" title="Four modules, one login.">
          Each one works on your data, under your rules.{" "}
          <Link to="/how-jago-works" className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary whitespace-nowrap">
            See How Jago Works
          </Link>{" "}
          for the full detail.
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPS.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="scroll-mt-24 rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">{c.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}