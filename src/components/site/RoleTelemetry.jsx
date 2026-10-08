import React from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function RoleTelemetry({ telemetry, channel }) {
  if (!telemetry) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-5 rounded-3xl border border-border bg-background/80 backdrop-blur p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pb-3 border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
        </div>
        <span className="font-mono text-xs leading-relaxed text-muted-foreground">Channel: {channel}</span>
      </div>

      <div className="mt-4 rounded-xl border border-red-400/30 bg-red-500/5 px-4 py-3">
        <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-red-400">Radar telemetry alert</span>
        <p className="mt-2 text-base leading-relaxed text-foreground/90">{telemetry.alert}</p>
      </div>

      <div className="mt-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
        <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">Query</span>
        <p className="mt-2 text-base leading-relaxed text-foreground/90"><em>"{telemetry.query}"</em></p>
      </div>

      <div className="mt-3 rounded-xl border border-emerald/25 bg-emerald/5 px-4 py-3">
        <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-emerald">Jago decision engine</span>
        <p className="mt-2 text-base leading-relaxed text-foreground/90">{telemetry.findings}</p>
        <p className="mt-3 flex items-start gap-2 text-base leading-relaxed text-emerald">
          <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
          <span><strong className="font-semibold">Recommended action:</strong> {telemetry.action}</span>
        </p>
      </div>
    </motion.div>
  );
}