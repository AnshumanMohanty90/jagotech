import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask questions in plain words, by text or voice, in 50+ languages. Jago answers from your own data, not from generic guesses.",
    example: "\"What were North region sales against target?\"",
    result: "The number and the chart, in seconds.",
    bold: ["your own data"],
    accent: ["50+ languages"],
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Stop retyping the same data into three systems. Jago updates the records. You approve the important steps, and every change is on record.",
    example: "\"Update the CRM with this order and notify finance.\"",
    result: "Records updated, after your approval.",
    bold: ["Jago updates the records"],
    accent: ["you approve the important steps"],
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "See why a number moved, not just that it moved. Jago shows the reasons behind a change, with the numbers it used.",
    example: "\"Why did South fall 4%?\"",
    result: "The reasons, with the numbers behind them.",
    bold: ["why a number moved"],
    accent: ["the numbers it used"],
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Hear about a problem before it hits your results. Jago watches your data and sends an alert when a number starts to slip.",
    example: "\"Which branches are likely to miss target this month?\"",
    result: "An alert on WhatsApp, before month end.",
    bold: ["before it hits your results"],
    accent: ["when a number starts to slip"],
  },
];

const BLOCKS = [
  {
    title: "Jago Compute",
    desc: "Jago picks the right AI for each task from more than 100 AI models, so simple jobs do not need expensive AI. It can also run on your own servers.",
    bold: ["the right AI for each task"],
    accent: ["more than 100 AI models"],
  },
  {
    title: "Ease of Use",
    desc: "Your team keeps working in WhatsApp, Slack and Teams. There is no new screen to learn. A person approves the key steps, and every action is on record.",
    bold: ["WhatsApp, Slack and Teams"],
    accent: ["every action is on record"],
  },
];

export default function HowJagoWorks() {
  return (
    <section id="how-jago-works" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="How Jago Works" title="Ask. Automate. Analyze. Predict.">
          The full detail behind the four modules,{" "}
          <strong className="copy-focus">plus the engine underneath them.</strong>{" "}
          <em className="copy-aside">One login, your rules.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-5">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="scroll-mt-24 rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">{m.title}</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm leading-relaxed text-foreground/80">{m.example}</p>
                <p className="mt-2 font-mono text-sm leading-relaxed text-primary">{m.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-primary/30 bg-primary/5 p-7"
            >
              <h3 className="font-heading text-xl font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={b.desc} bold={b.bold} accent={b.accent} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}