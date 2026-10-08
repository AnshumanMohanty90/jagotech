import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const SIMS = [
  {
    id: "whatsapp",
    label: "WhatsApp Business",
    badge: "Native WhatsApp API",
    inputLabel: "Voice note · Hindi",
    input: "Jago, check Delhi warehouse inventory for part #881 and order 50 replacements.",
    output:
      "Delhi hub stock: 12 units remaining, below buffer threshold. Purchase order generated in your ERP, with an approval card sent to the Operations Director.",
  },
  {
    id: "zoho",
    label: "Zoho Cliq",
    badge: "Native Cliq bot",
    inputLabel: "Team channel message",
    input: "Find all pending customer tax clearance documents in the Tamil Nadu branch.",
    output:
      "Database scan complete. 3 customer files need GST verification. Automated follow-up drafts are prepared in Zoho Desk.",
  },
  {
    id: "gchat",
    label: "Google Chat",
    badge: "Workspace native",
    inputLabel: "Leadership space message",
    input: "Summarize Q3 variance against target and post it to the leadership space.",
    output:
      "Q3 brief generated: revenue $41.7M, up 14% year over year. PDF brief posted directly to the Google Chat leadership space.",
  },
  {
    id: "teams",
    label: "Microsoft Teams",
    badge: "Teams native",
    inputLabel: "Channel message",
    input: "Audit the Acme vendor contract against SOC 2 and DPDPA compliance rules.",
    output:
      "Compliance audit complete. DPDPA: passed. SOC 2 Type II: verified. Data residency: India on-premise node.",
  },
];

export default function ChannelSimulator() {
  const [active, setActive] = useState(SIMS[0].id);
  const sim = SIMS.find((s) => s.id === active);

  return (
    <div className="mt-8 max-w-5xl rounded-3xl border border-border bg-card/50 backdrop-blur p-5 sm:p-6">
      <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
        See it in action
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SIMS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`site-choice px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              s.id === active
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border bg-background/60 text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={sim.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-4"
        >
          <div className="rounded-2xl border border-border bg-background/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
                {sim.inputLabel}
              </span>
              <span className="font-mono text-xs leading-relaxed text-primary">{sim.badge}</span>
            </div>
            <p className="mt-2 text-base leading-relaxed text-foreground/90"><em>"{sim.input}"</em></p>
          </div>
          <div className="mt-3 rounded-2xl border border-primary/25 bg-primary/5 p-4">
            <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">
              Jago response
            </span>
            <p className="mt-2 text-base text-foreground/90 leading-relaxed">
              <CopyEmphasis text={sim.output} bold={["12 units remaining", "3 customer files", "up 14% year over year", "India on-premise node"]} accent={["approval card", "follow-up drafts"]} />
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}