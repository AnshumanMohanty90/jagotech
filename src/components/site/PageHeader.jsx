import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-5xl"
        >
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-3 sm:mt-4 max-w-[75ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            {children}
          </p>
        </motion.div>
      </div>
    </section>
  );
}