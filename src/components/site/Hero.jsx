import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";
import PillarCarousel from "@/components/site/PillarCarousel";

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
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary"
        >
          AI agents for Indian companies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-4xl font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance"
        >
          Put AI to work across your company <span className="text-primary">in 8 weeks.</span>
        </motion.h1>

        <div className="mt-6 sm:mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: copy and CTAs */}
          <div className="lg:col-span-6 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty break-words"
            >
              Jago connects to the systems you already use. Your teams{" "}
              <strong className="copy-accent">ask questions</strong>,{" "}
              <strong className="copy-focus">see why numbers move</strong>,{" "}
              <strong className="copy-accent">get early warnings</strong> and{" "}
              <strong className="copy-focus">hand routine updates</strong> to Jago. Customer data stays
              within India's data law.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
                Try it free for a week
              </Link>
              <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
                Download the 8-week plan
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground"
            >
              Live at a major lending NBFC · Works on WhatsApp, Slack and Teams ·{" "}
              50+ languages
            </motion.p>
          </div>

          {/* Right: live demo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-6 min-w-0"
          >
            <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-xl p-4 sm:p-5 glow-cyan">
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
                Uses your own data · 50+ languages ·{" "}
                <span className="text-primary">text or voice</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillar carousel */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 mx-auto w-full max-w-2xl min-w-0"
        >
          <PillarCarousel />
        </motion.div>
      </div>
    </section>
  );
}