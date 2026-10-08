import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Radar, BrainCircuit, Workflow, ShieldCheck, ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";

const LIFECYCLE = [
  {
    icon: Radar,
    title: "Detect",
    desc: "Watches your connected systems around the clock, so nothing waits for someone to notice.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze",
    desc: "Pulls context across records, documents and history before drawing a conclusion.",
  },
  {
    icon: Workflow,
    title: "Act",
    desc: "Creates, updates, assigns and notifies inside the systems where the work lives.",
  },
  {
    icon: ShieldCheck,
    title: "Govern",
    desc: "Waits for human approval where stakes are high, and logs every step it takes.",
  },
];

const DEPARTMENTS = ["Sales", "Customer Experience", "Operations", "Finance", "HR", "Leadership"];

export default function AgentsOverview() {
  return (
    <section id="agents" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="AI agents" title="Agents that watch, understand, and do the work.">
          An agent is <strong className="copy-focus">not a chatbot</strong>. It carries a job from signal to
          finished outcome, <em className="copy-aside">inside your systems, under your rules.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIFECYCLE.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs leading-relaxed text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="copy-focus">One agent per job</strong>, across every department.{" "}
            <em className="copy-aside">See what yours does.</em>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {DEPARTMENTS.map((d) => (
              <span
                key={d}
                className="px-3.5 py-1.5 rounded-full border border-border bg-background/60 text-sm text-foreground/80"
              >
                {d}
              </span>
            ))}
            <Link to="/solutions#by-user" className="site-cta-secondary group gap-1.5 px-4 py-2 rounded-lg text-sm">
              Explore by user
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}