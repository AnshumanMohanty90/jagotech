import React from "react";
import Reveal from "@/components/site/Reveal";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask in plain words, by text or voice, in 50+ languages, on WhatsApp, Slack or Teams. Jago answers from every team's systems and from the documents spread across email, Teams, Slack, WhatsApp and shared drives, and shows the source.",
    example: "\"How did each region do against target, and what is holding South back?\"",
    result: "One answer, from systems and documents across channels, with sources.",
    bold: ["documents spread across email, Teams, Slack, WhatsApp and shared drives"],
    accent: ["50+ languages"],
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Describe a workflow in plain words and Jago builds an agent that runs it end to end across your systems. You choose which steps need a sign-off, and every run is on record.",
    example: "\"When a large order is booked, update the CRM, draft the invoice and tell finance.\"",
    result: "An agent that runs on every new order, with your sign-off.",
    bold: ["Jago builds an agent"],
    accent: ["You choose which steps need a sign-off"],
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "When a number moves, Jago lists the likely reasons, tests each one against your data across departments and shows which ones hold up, with the numbers it used.",
    example: "\"Why did South miss target?\"",
    result: "Four reasons tested, two confirmed, with the numbers.",
    bold: ["tests each one against your data"],
    accent: ["which ones hold up"],
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Jago reads trends across sales, finance and operations, warns you about what is likely to slip and shows the signals behind each warning, so you can act before month end.",
    example: "\"Which branches are likely to miss target this month?\"",
    result: "An alert on WhatsApp, with the reasons, before month end.",
    bold: ["what is likely to slip"],
    accent: ["the signals behind each warning"],
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
    <Reveal id="how-jago-works" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {MODULES.map((m) => (
            <div key={m.id} className="site-col scroll-mt-24">
              <h2 className="font-heading !text-xl font-semibold leading-snug text-balance">{m.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-pretty">
                <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
              </p>
              <div className="mt-5 pt-4">
                <p className="text-sm leading-relaxed">{m.example}</p>
                <p className="mt-2 font-mono text-sm leading-relaxed text-primary">{m.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 min-w-0">
          <h3 className="font-heading text-xl font-semibold leading-snug text-balance">Jago Compute</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-pretty">
            Averages hide problems. Jago looks one level down, by
            region, product or team, and shows where a number really moved.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {COMPUTE_EXAMPLES.map((c) => (
              <div key={c.label} className="min-w-0">
                <p className="site-label">{c.label}</p>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-pretty">
                  <CopyEmphasis text={c.text} bold={c.bold} />
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-pretty">
            Jago also picks the right AI for each task from more than 100 AI
            models, so you pay less.
          </p>
        </div>

        <div className="mt-8 min-w-0">
          <h3 className="font-heading text-xl font-semibold leading-snug text-balance">Ease of Use</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-pretty">
            Your team works in WhatsApp, Slack and Teams, typed or
            spoken, in 50+ languages. There is no new screen to
            learn and no coding to write. A person approves the key steps.
          </p>
        </div>
      </div>
    </Reveal>
  );
}