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
    <section id="integrations" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-emerald/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Integrations" title="Connected to the systems you already run.">
          Nothing gets replaced. Jago reads and writes in the systems you already have, and{" "}
          <strong className="copy-focus">who can see and do what</strong> stays{" "}
          <strong className="copy-accent">under your control.</strong>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INTEGRATIONS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <h4 className="font-heading text-base font-semibold leading-snug">{it.title}</h4>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}