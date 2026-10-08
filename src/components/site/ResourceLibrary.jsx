import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, Clock } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const BLOGS = [
  {
    tag: "Enterprise AI",
    date: "Oct 2026",
    title: "Chatbots answer. Agents finish the work.",
    excerpt:
      "Why question-answering tools stall in the enterprise, and what changes when AI can act inside your systems.",
  },
  {
    tag: "Transformation",
    date: "Sep 2026",
    title: "Your first 90 days with an AI workforce.",
    excerpt:
      "A practical sequence: pick one process, connect the systems, prove the win, then scale across departments.",
  },
  {
    tag: "Governance",
    date: "Sep 2026",
    title: "Governance is a feature, not a blocker.",
    excerpt:
      "How approvals, audit logging and access control make agents safe enough for regulated industries.",
  },
];

const GUIDES = [
  {
    title: "Choosing your first agent process",
    meta: "Worksheet · 10 min read",
    desc: "Find the process where context-finding eats the most hours, and frame it as a first win.",
  },
  {
    title: "Connecting your systems safely",
    meta: "Integration playbook · 15 min read",
    desc: "Read versus write access, PII handling, and how to phase connections without a rip-and-replace.",
  },
  {
    title: "Measuring agent ROI",
    meta: "Framework · 12 min read",
    desc: "Hours returned, cycle-time and error-rate baselines to track from day one.",
  },
];

export default function ResourceLibrary() {
  return (
    <>
      <section id="blogs" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro eyebrow="Blogs" title="Perspectives on putting AI agents to work.">
            Notes from teams doing it, <em className="copy-aside">not speculation about the future.</em>
          </SectionIntro>

          <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
            {BLOGS.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
                    {b.tag}
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-muted-foreground">{b.date}</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-balance">
                  {b.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={b.excerpt} />
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-semibold">
                  <BookOpen className="w-4 h-4" />
                  Read on the Jago blog
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro eyebrow="Guides" title="Practical playbooks, ready when you are.">
            Short, working documents for the decisions you'll actually face,{" "}
            <em className="copy-aside">written for operators, not researchers.</em>
          </SectionIntro>

          <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-5">
            {GUIDES.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
                    {g.meta}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-balance">
                  {g.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{g.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Included with your trial workspace
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}