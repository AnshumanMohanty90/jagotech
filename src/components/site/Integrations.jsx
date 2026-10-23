import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";

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
    desc: "Contracts, reports and PDFs, read and summarised.",
  },
  {
    title: "Voice",
    desc: "Meeting recordings and voice notes, written out and searchable.",
  },
  {
    title: "Messaging channels",
    desc: "WhatsApp, Slack and Teams, where your people already work.",
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative scroll-mt-24 site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Integrations" title="Connected to the systems you already run.">
          Nothing gets replaced. Jago reads and writes in the systems you already have, and{" "}
          who can see and do what stays{" "}
          under your control.
        </SectionIntro>

        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {INTEGRATIONS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="site-col"
            >
              <h4 className="font-heading text-xl font-semibold leading-snug text-balance">{it.title}</h4>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}