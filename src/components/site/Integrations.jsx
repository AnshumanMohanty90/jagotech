import React from "react";
import { motion } from "framer-motion";
import { Users, Landmark, Database, FileText, AppWindow, Slack } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";

const INTEGRATIONS = [
  {
    icon: Users,
    title: "CRM and Sales",
    desc: "Pipeline records, deal history and account context, read and written in place.",
  },
  {
    icon: Landmark,
    title: "ERP and Finance",
    desc: "Invoices, purchase orders, approvals and ledgers across your ERP.",
  },
  {
    icon: Database,
    title: "Databases and Warehouses",
    desc: "Plain-language queries translated to governed SQL over your data.",
  },
  {
    icon: FileText,
    title: "Documents and Files",
    desc: "Contracts, reports, images and audio, parsed and understood.",
  },
  {
    icon: AppWindow,
    title: "Business Applications",
    desc: "Tickets, HR systems and internal tools, connected without rip-and-replace.",
  },
  {
    icon: Slack,
    title: "Messaging Channels",
    desc: "Slack, email and voice, so agents meet people where work happens.",
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-emerald/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Integrations" title="Connected to the systems you already run.">
          No rip-and-replace. Jago sits <strong className="copy-focus">on top of your existing stack</strong>,
          with governance applied to <strong className="copy-accent">every read and write</strong>.
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INTEGRATIONS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <h4 className="min-w-0 font-heading text-base font-semibold leading-snug">{it.title}</h4>
                </div>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}