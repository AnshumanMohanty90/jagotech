import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-8 sm:pb-10">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-b" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-heading text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-4 max-w-[75ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-balance">
            {children}
          </p>
        </motion.div>
      </div>
    </section>
  );
}