import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";
import PillarCarousel from "@/components/site/PillarCarousel";
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
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,245,255,0.18),transparent_70%)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-heading text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-balance"
        >
          <span className="block">AI agents that understand your business</span>
          <span className="block text-primary text-glow">and get work done.</span>
        </motion.h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: copy and CTAs */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty"
            >
              <CopyEmphasis
                text="Jagotech connects your business systems, understands your data and processes, and puts AI agents to work across everyday operations, with governance and control built in."
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
              <a href="#contact" className="site-cta-primary group gap-2 px-5 py-3 rounded-xl">
                Start Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#how" className="site-cta-secondary gap-2 px-5 py-3 rounded-xl backdrop-blur">
                <Play className="w-4 h-4 text-primary" />
                See how Jago works
              </a>
            </motion.div>
          </div>

          {/* Right: live demo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-card/30 backdrop-blur-xl p-4 sm:p-5 glow-cyan">
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

        {/* Centered pillar carousel */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 mx-auto w-full max-w-2xl"
        >
          <PillarCarousel />
        </motion.div>
      </div>
    </section>
  );
}