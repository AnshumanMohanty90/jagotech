import React from "react";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";

const INTEGRATIONS = [
  {
    title: "Sales systems",
    desc: "Deals, accounts and call history in your CRM, read and\u00a0updated.",
  },
  {
    title: "Finance systems",
    desc: "Invoices, purchase orders and ledgers in your ERP.",
  },
  {
    title: "HR systems",
    desc: "Leave, attendance and payroll\u00a0records.",
  },
  {
    title: "Documents",
    desc: "Contracts, reports and PDFs, read and summarised wherever they are\u00a0stored.",
  },
  {
    title: "Messaging channels",
    desc: "WhatsApp, Slack and Teams, where your people already work.",
  },
];

export default function Integrations() {
  return (
    <Reveal id="integrations" className="relative scroll-mt-24 site-section-alt">
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-32">
          <p className="site-label site-eyebrow">Integrations</p>
          <h2 className="mt-3 font-heading text-balance">Jago connects to the systems you already&nbsp;use.</h2>
          <p className="site-line mt-4 text-base sm:text-lg text-[#dde4ee] text-pretty">
            Jago reads and updates the systems you have now, and you control who sees&nbsp;what.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7">
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