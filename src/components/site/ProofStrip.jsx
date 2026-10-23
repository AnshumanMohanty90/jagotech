import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { v: "8 weeks", l: "to go live across your teams" },
  { v: "50+", l: "languages, typed or spoken" },
  { v: "15", l: "job roles with ready-made AI agents" },
  { v: "1,600", l: "branches checked for risk at a major lending NBFC" },
];

export default function ProofStrip() {
  return (
    <section className="relative pt-2 sm:pt-4 pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card/40 p-6 text-center"
            >
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-primary">{s.v}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}