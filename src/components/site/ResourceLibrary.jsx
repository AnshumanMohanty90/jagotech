import React from "react";
import { motion } from "framer-motion";

import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const BLOGS = [
  {
    tag: "Enterprise AI",
    date: "Oct 2026",
    title: "Chatbots answer. Agents finish the work.",
    excerpt:
      "A tool that only answers questions stalls. Agents carry the work to done, inside your systems.",
  },
  {
    tag: "Transformation",
    date: "Sep 2026",
    title: "Your first 8 weeks with AI agents.",
    excerpt:
      "A practical sequence: pick one process, connect the systems, prove the win, then scale across departments.",
  },
  {
    tag: "Controls",
    date: "Sep 2026",
    title: "Who sees what, and a record of every action.",
    excerpt:
      "How approvals and audit records make AI safe enough for a bank or a lender.",
  },
];

const GUIDES = [
  {
    title: "Choosing your first process",
    meta: "Worksheet · Quick read",
    desc: "Find the process that eats the most hours, and frame it as a first win.",
  },
  {
    title: "Connecting your systems safely",
    meta: "Playbook · Quick read",
    desc: "What Jago reads, what it writes, and who approves, before anything changes.",
  },
  {
    title: "Measuring what changed",
    meta: "Framework · Quick read",
    desc: "The hours, the cycle time and the error rate to track from week one.",
  },
];

export default function ResourceLibrary() {
  return (
    <>
      <section id="blogs" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro eyebrow="Blogs" title="Notes from teams doing it.">
            Short pieces on putting AI agents to work,{" "}
            <em className="copy-aside">not speculation about the future.</em>
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
                <p className="mt-5 text-sm text-primary font-semibold">Read on the Jago blog</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="relative scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro eyebrow="Guides" title="Working guides, ready when you are.">
            Short documents for the decisions you will actually face,{" "}
            <em className="copy-aside">written for managers, not researchers.</em>
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
                <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
                  {g.meta}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-balance">
                  {g.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{g.desc}</p>
                <p className="mt-5 text-sm text-muted-foreground">Included with your trial workspace</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}