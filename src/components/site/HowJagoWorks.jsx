import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask questions in plain words, by text or voice, in 50+ languages. Jago answers from your own data, with its source shown.",
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
    desc: "See why a number moved. Jago shows the reasons behind a change, with the numbers it used.",
    example: "\"Why did South miss target?\"",
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

const COMPUTE_EXAMPLES = [
  {
    label: "Sales",
    text: "Total sales look fine. Jago shows the region behind the slip, and the deals that caused it.",
    bold: ["the region behind the slip"],
  },
  {
    label: "Finance",
    text: "Costs look flat for the quarter. Jago shows the expense head that moved, and the invoice behind it.",
    bold: ["the expense head that moved"],
  },
  {
    label: "Operations",
    text: "Output looks steady. Jago shows the line and the shift behind most of the delay.",
    bold: ["the line and the shift"],
  },
];

export default function HowJagoWorks() {
  return (
    <section id="how-jago-works" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="How Jago Works" title="Ask. Automate. Analyze. Predict.">
          The full detail behind the four modules, {" "}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-3xl border border-primary/30 bg-primary/5 p-7 sm:p-9"
        >
          <h3 className="font-heading text-xl font-semibold tracking-tight">Jago Compute</h3>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
            <strong className="copy-focus">Averages hide problems.</strong> Jago looks one level down, by
            region, product or team, and shows where a number really moved.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {COMPUTE_EXAMPLES.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-background/60 p-5"
              >
                <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">{c.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  <CopyEmphasis text={c.text} bold={c.bold} />
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground leading-relaxed">
            Jago also <strong className="copy-accent">picks the right AI for each task from more than 100 AI
            models</strong>, <strong className="copy-focus">so you pay less.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-3xl border border-border bg-card/40 p-7 sm:p-9"
        >
          <h3 className="font-heading text-xl font-semibold tracking-tight">Ease of Use</h3>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
            Your team works in <strong className="copy-focus">WhatsApp, Slack and Teams</strong>, typed or
            spoken, in <strong className="copy-accent">50+ languages.</strong> There is no new screen to
            learn and no coding to write. <em className="copy-aside">A person approves the key steps.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}