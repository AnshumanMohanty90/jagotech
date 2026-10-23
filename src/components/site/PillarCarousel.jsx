import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    id: "analyze",
    label: "Analyze",
    tag: "Conversational BI",
    title: "Query data warehouses in plain language.",
    prompt: "Show regional sales performance against target for Q3.",
    output: "SQL executed in 0.04s. Chart created: North +18%, South -4%.",
  },
  {
    id: "predict",
    label: "Predict",
    tag: "Risk and forecasting",
    title: "Flag risk before it lands.",
    prompt: "Highlight stalled deals with a high risk of slipping this month.",
    output: "3 deals flagged (Jasper score below 0.35). Alert logged.",
  },
  {
    id: "automate",
    label: "Automate",
    tag: "Action execution",
    title: "Execute zero-code actions.",
    prompt: "Approve PO #441 and notify the vendor on WhatsApp.",
    output: "PO approved in SAP. Notification dispatched.",
  },
];

export default function PillarCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % PILLARS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const p = PILLARS[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="rounded-2xl bg-card/30 backdrop-blur p-4 sm:p-5"
    >
      <div className="flex items-center gap-2">
        {PILLARS.map((pl, i) => (
          <button
            key={pl.id}
            onClick={() => setActive(i)}
            className={`site-choice flex-1 px-3 py-2 rounded-xl font-heading text-sm font-semibold transition-colors ${
              i === active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {pl.label}
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[9.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{p.tag}</p>
            <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">"{p.prompt}"</p>
            <p className="mt-1.5 font-mono text-sm leading-relaxed text-primary">{p.output}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {PILLARS.map((pl, i) => (
          <button
            key={pl.id}
            onClick={() => setActive(i)}
            aria-label={`Show ${pl.label}`}
            className={`site-choice h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}