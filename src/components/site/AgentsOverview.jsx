import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";

const LIFECYCLE = [
  {
    title: "Watch",
    desc: "Jago keeps an eye on your systems, so nothing waits for someone to notice.",
  },
  {
    title: "Check",
    desc: "Jago reads the records and documents behind a question before it answers.",
  },
  {
    title: "Do",
    desc: "Jago creates, updates, assigns and notifies in the systems where the work lives.",
  },
  {
    title: "Approve",
    desc: "You choose which actions need a sign-off, and every action is on record.",
  },
];

const DEPARTMENTS = ["Sales", "Customer Experience", "Operations", "Finance", "HR", "Leadership"];

export default function AgentsOverview() {
  return (
    <section id="agents" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="AI agents" title="Agents that watch, check and do the work.">
          An agent is <strong className="copy-focus">software that carries a job from question to finished
          work</strong>, <em className="copy-aside">inside your systems, under your rules.</em>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIFECYCLE.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            <strong className="copy-focus">Every department has its own agent.</strong>{" "}
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
            <Link to="/role-wins" className="site-cta-secondary group gap-1.5 px-4 py-2 rounded-lg text-sm">
              See the role examples
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}