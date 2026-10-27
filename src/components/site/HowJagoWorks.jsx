import React from "react";
import Reveal from "@/components/site/Reveal";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const MODULES = [
  {
    id: "ask",
    title: "Ask",
    desc: "Ask by text or voice in 50+ languages, on WhatsApp, Slack or Teams. Jago answers from your systems and documents, and shows the\u00a0source.",
    example: "\"How did each region do against target, and what is holding South back?\"",
    result: "You get one answer with its\u00a0sources.",
    bold: ["your systems and documents"],
    accent: ["50+ languages"],
  },
  {
    id: "analyze",
    title: "Analyze",
    desc: "When a number moves, Jago lists the likely reasons, tests each against your data and shows which hold up, with the\u00a0numbers.",
    example: "\"Why did South miss target?\"",
    result: "Jago tests four reasons and confirms two, with the\u00a0numbers.",
    bold: ["tests each against your data"],
    accent: ["which hold up"],
  },
  {
    id: "predict",
    title: "Predict",
    desc: "Jago reads trends across sales, finance and operations and warns you what is likely to slip, with the signals behind each\u00a0warning.",
    example: "\"Which branches are likely to miss target this month?\"",
    result: "You get a WhatsApp alert with the reasons before month\u00a0end.",
    bold: ["what is likely to slip"],
    accent: ["the signals behind each warning"],
  },
  {
    id: "automate",
    title: "Automate",
    desc: "Describe a task in plain words and Jago builds an agent that runs it across your systems. You choose which steps need sign-off, and every run is\u00a0recorded.",
    example: "\"When a large order is booked, update the CRM, draft the invoice and tell finance.\"",
    result: "Jago runs an agent on every new order, with your\u00a0sign-off.",
    bold: ["Jago builds an agent"],
    accent: ["You choose which steps need sign-off"],
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div key={m.id} className="site-col flex scroll-mt-24 flex-col">
              <h2 className="!font-ui !text-lg !font-bold !leading-[1.375] !tracking-normal text-balance">{m.title}</h2>
              <p className="site-line mt-4 text-base leading-6 text-[#dde4ee] text-pretty">
                <CopyEmphasis text={m.desc} bold={m.bold} accent={m.accent} />
              </p>
              <div className="mt-auto pt-5">
                <p className="site-line text-sm leading-5 text-[#c1cbd7]">{m.example}</p>
                <p className="mt-2 font-ui text-sm leading-relaxed text-primary">{m.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="site-col mt-6 !p-6">
          <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">Jago finds which part of the business moved a&nbsp;number.</h3>
          <p className="site-line mt-3 text-base leading-6 text-[#dde4ee] text-pretty">
            Jago looks one level below the total, by region, product or team, and shows
            the&nbsp;cause.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {COMPUTE_EXAMPLES.map((c) => (
              <div key={c.label} className="min-w-0 rounded-xl border border-[rgba(245,247,250,0.1)] bg-[#0f1318] p-4">
                <p className="site-label">{c.label}</p>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-pretty">
                  <CopyEmphasis text={c.text} bold={c.bold} />
                </p>
              </div>
            ))}
          </div>
          <p className="site-line mt-6 text-base leading-6 text-[#dde4ee] text-pretty">
            Jago also picks the right AI for each task from more than 100 AI
            models, so you pay less.
          </p>
        </div>

        <div className="site-col mt-6 !p-6">
          <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance">Your team uses Jago in WhatsApp, Slack and&nbsp;Teams.</h3>
          <p className="site-line mt-3 text-base leading-6 text-[#dde4ee] text-pretty">
            People type or speak in 50+ languages. There is no new screen to learn and no code to write.
            A person approves the key&nbsp;steps.
          </p>
        </div>
      </div>
    </Reveal>
  );
}