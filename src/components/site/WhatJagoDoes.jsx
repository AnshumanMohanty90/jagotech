import React from "react";
import { motion } from "framer-motion";
import { Plug, BrainCircuit, Workflow, ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STEPS = [
  {
    n: "01",
    icon: Plug,
    title: "Connect",
    desc: "Your CRM, ERP, databases, documents, and business applications.",
    bold: ["CRM, ERP, databases"],
  },
  {
    n: "02",
    icon: BrainCircuit,
    title: "Understand",
    desc: "Your business data, processes, rules, and context.",
    bold: ["data, processes, rules"],
    accent: ["context"],
  },
  {
    n: "03",
    icon: Workflow,
    title: "Act",
    desc: "Create, update, assign, approve, notify, and trigger workflows.",
    bold: ["approve, notify"],
    accent: ["trigger workflows"],
  },
];

const AGENTS = ["Sales", "Customer Experience", "Operations", "Finance", "HR", "Leadership"];

export default function WhatJagoDoes() {
  return (
    <section id="how" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="02 · What Jago does"
          title="Connect your systems. Give agents context. Let them act."
        >
          Jago gives AI agents access to the{" "}
          <strong className="copy-focus">information, systems and workflows</strong> your business
          already relies on, <em className="copy-aside">so the work gets done, not just discussed.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl border border-border bg-background/60 group-hover:border-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={s.desc} bold={s.bold} accent={s.accent} />
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="copy-focus">AI agents for the work that matters</strong>, deployed across
            every department. <em className="copy-aside">Pick yours.</em>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {AGENTS.map((a) => (
              <span
                key={a}
                className="px-3.5 py-1.5 rounded-full border border-border bg-background/60 text-sm text-foreground/80"
              >
                {a}
              </span>
            ))}
            <a href="#solutions" className="site-cta-secondary group gap-1.5 px-4 py-2 rounded-lg text-sm">
              Explore AI agents
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}