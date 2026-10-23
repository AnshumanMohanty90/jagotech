import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STEPS = [
  {
    title: "Connect",
    desc: "Your sales, finance and HR systems, your documents and your voice notes, in one place.",
    bold: ["sales, finance and HR systems"],
  },
  {
    title: "Understand",
    desc: "Jago learns your data, your rules and how your team works.",
    bold: ["your data, your rules"],
    accent: ["how your team works"],
  },
  {
    title: "Act",
    desc: "Jago creates, updates, assigns and notifies. A person approves the key steps.",
    bold: ["A person approves the key steps"],
  },
];

export default function PlatformOverview() {
  return (
    <section id="overview" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Platform overview"
          title="Connect your systems. Let Jago do the work."
        >
          Jago sits on top of the tools you already run and carries the work from question to done,{" "}
          <em className="copy-aside">so the work gets done, not just discussed.</em>
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
            <strong className="copy-focus">One agent per job, ready in 8 weeks.</strong>{" "}
            <em className="copy-aside">Meet them.</em>
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