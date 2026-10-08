import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";
import ScopeGrid from "@/components/site/ScopeGrid";

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
    <section id="top" className="relative flex items-center overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-10">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,245,255,0.18),transparent_70%)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
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
            Enterprise AI transformation suite
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-[clamp(1.75rem,9vw,2.25rem)] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] tracking-tight"
          >
            <span className="block">Unify enterprise AI</span>
            <span className="block text-primary text-glow">into one governed suite.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-balance"
          >
            <span className="block">
              Drive <strong className="copy-accent">AI transformation</strong> across every department,
              platform, channel and industry.
            </span>
            <span className="mt-3 block">
              <strong className="copy-focus">Your non-technical workforce</strong> asks, acts, predicts
              and analyzes across data, documents, audio and video, <em className="copy-aside">by voice or text</em>,
              inside the apps they already use.
            </span>
          </motion.p>

          {/* Interactive prompt terminal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 max-w-xl"
          >
            <div className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-2 glow-cyan">
              <div className="flex items-center gap-2 px-2 pt-1.5 pb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
                <span className="ml-2 font-mono text-xs leading-relaxed text-muted-foreground">jago › ask</span>
              </div>
              <AskDemo placeholder={typed} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="site-cta-primary group gap-2 px-5 py-3 rounded-xl"
            >
              Start your trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#ask"
              className="site-cta-secondary gap-2 px-5 py-3 rounded-xl backdrop-blur"
            >
              <Play className="w-4 h-4 text-primary" />
              Explore the platform
            </a>
          </motion.div>
          <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
            1-week free trial · No seats · No lock-in
          </p>

          <ScopeGrid />
        </div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6ac3fb313d8c3f935e09f7df/bff337c03_generated_04464918.jpg"
                alt="Abstract neural network of crystalline light filaments"
                className="w-full h-full object-cover opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 rounded-xl border border-border bg-card/80 backdrop-blur-xl px-3.5 py-2.5 shadow-xl"
            >
              <div className="font-mono text-xs leading-relaxed text-muted-foreground">YOUR DATA</div>
              <div className="font-heading text-lg font-semibold text-foreground">Grounded</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-12 rounded-xl border border-border bg-card/80 backdrop-blur-xl px-3.5 py-2.5 shadow-xl"
            >
              <div className="font-mono text-xs leading-relaxed text-muted-foreground">LANGUAGES</div>
              <div className="font-heading text-lg font-semibold text-primary">50+</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-8 -top-4 rounded-xl border border-border bg-card/80 backdrop-blur-xl px-3.5 py-2.5 shadow-xl"
            >
              <div className="font-mono text-xs leading-relaxed text-muted-foreground">OVERSIGHT</div>
              <div className="font-heading text-lg font-semibold text-emerald">People</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}