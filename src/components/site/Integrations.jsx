import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import Accordion from "@/components/site/Accordion";

const INTEGRATIONS = [
  {
    title: "Sales systems",
    desc: "Deals, accounts and call history in your CRM, read and updated in place.",
  },
  {
    title: "Finance systems",
    desc: "Invoices, purchase orders and ledgers in your ERP.",
  },
  {
    title: "HR systems",
    desc: "Leave, attendance and payroll records, in one place.",
  },
  {
    title: "Documents",
    desc: "Contracts, reports and PDFs, read and summarised wherever they sit: email, Teams, Slack, WhatsApp or shared drives.",
  },
  {
    title: "Messaging channels",
    desc: "WhatsApp, Slack and Teams, where your people already work.",
  },
];

export default function Integrations() {
  return (
    <Reveal id="integrations" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Integrations" title="Connected to the systems you already run.">
          Nothing gets replaced. Jago reads and writes in the systems you already have, and{" "}
          who can see and do what stays{" "}
          under your control.
        </SectionIntro>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion
            variant="card"
            firstOpen
            items={INTEGRATIONS.map((it) => ({
              key: it.title,
              title: it.title,
              body: <p className="site-line text-base leading-6 text-[#dde4ee]">{it.desc}</p>,
            }))}
          />
        </div>
      </div>
    </Reveal>
  );
}