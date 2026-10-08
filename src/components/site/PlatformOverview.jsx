import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STEPS = [
  {
    title: "Connect",
    desc: "Your CRM, ERP, databases, documents, and business applications.",
    bold: ["CRM, ERP, databases"],
  },
  {
    title: "Understand",
    desc: "Your business data, processes, rules, and context.",
    bold: ["data, processes, rules"],
    accent: ["context"],
  },
  {
    title: "Act",
    desc: "Create, update, assign, approve, notify, and trigger workflows.",
    bold: ["approve, notify"],
    accent: ["trigger workflows"],
  },
];

export default function PlatformOverview() {
  return (
    <section id="overview" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Platform overview"
          title="Connect your systems. Give agents context. Let them act."
        >
          Jago gives AI agents access to the{" "}
          <strong className="copy-focus">information, systems and workflows</strong> your business
          already relies on, <em className="copy-aside">so the work gets done, not just discussed.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                <CopyEmphasis text={s.desc} bold={s.bold} accent={s.accent} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="copy-focus">AI agents for the work that matters</strong>, deployed across
            every department. <em className="copy-aside">Meet them.</em>
          </p>
          <a href="#agents" className="site-cta-secondary group gap-1.5 px-4 py-2 rounded-lg text-sm self-start lg:self-auto">
            Explore AI agents
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}