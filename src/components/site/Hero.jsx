import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";
import ScopeGrid from "@/components/site/ScopeGrid";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const PROMPTS = [
  "Finance: which invoices risk slipping past due?",
  "Sales: which deals will slip this quarter?",
  "Operations: why is line 4 downtime rising?",
];

function useTypewriter(strings, typeMs = 55, pauseMs = 1400) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let t;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      t = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? typeMs / 2 : typeMs);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, strings, typeMs, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PROMPTS);

  return (
    <section id="top" className="relative flex items-center overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,245,255,0.18),transparent_70%)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: editorial copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-mono text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Enterprise AI workforce
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-[clamp(1.75rem,9vw,2.25rem)] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] tracking-tight"
          >
            <span className="block">AI agents that understand your business</span>
            <span className="block text-primary text-glow">and get work done.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-balance"
          >
            <CopyEmphasis
              text="Jago AI connects your business systems, understands your data and processes, and puts AI agents to work across everyday operations, with governance and control built in."
              bold={["connects your business systems", "puts AI agents to work"]}
              accent={["understands your data and processes"]}
              italic={["with governance and control built in"]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="site-cta-primary group gap-2 px-5 py-3 rounded-xl"
            >
              Start the trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how"
              className="site-cta-secondary gap-2 px-5 py-3 rounded-xl backdrop-blur"
            >
              <Play className="w-4 h-4 text-primary" />
              See how Jago works
            </a>
          </motion.div>

          <ScopeGrid />
        </div>

        {/* Right: live Ask Jago demo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5 lg:pt-24"
        >
          <div className="rounded-2xl border border-primary/25 bg-card/50 backdrop-blur-xl p-4 sm:p-5 glow-cyan">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Ask Jago · live demo
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs leading-relaxed text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                live
              </span>
            </div>
            <AskDemo placeholder={typed} />
            <p className="mt-3 px-1 font-mono text-xs leading-relaxed text-muted-foreground">
              Grounded in your systems · 50+ languages ·{" "}
              <span className="text-primary">text or voice</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}