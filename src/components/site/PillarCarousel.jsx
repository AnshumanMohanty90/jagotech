import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    id: "analyze",
    label: "Analyze",
    tag: "Ask your data",
    title: "Ask a question, get the answer with the numbers behind it.",
    prompt: "Show regional sales performance against target for Q3.",
    output: "Answered in 2 seconds. Chart created: North +18%, South -4%.",
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
      className="border-t border-border pt-5 min-w-0"
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {PILLARS.map((pl, i) => (
          <button
            key={pl.id}
            onClick={() => setActive(i)}
            className={`site-choice pb-1 font-heading text-sm font-semibold border-b-2 transition-colors ${
              i === active
                ? "text-primary border-primary"
                : "text-muted-foreground hover:text-foreground border-transparent"
            }`}
          >
            {pl.label}
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[9rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{p.tag}</p>
            <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-balance">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.prompt}</p>
            <p className="mt-1.5 font-mono text-sm leading-relaxed text-primary">{p.output}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}