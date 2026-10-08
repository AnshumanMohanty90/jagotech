import React from "react";
import { motion } from "framer-motion";
import { Users, Layers, MessagesSquare, Landmark } from "lucide-react";

const SCOPE = [
  {
    icon: Users,
    title: "Multiple departments",
    sub: "HR, Sales, Operations, Legal, Customer Experience",
  },
  {
    icon: Layers,
    title: "Multiple platforms",
    sub: "SAP, Zoho, Salesforce, Databases",
  },
  {
    icon: MessagesSquare,
    title: "Multiple channels",
    sub: "WhatsApp, Cliq, Google Chat, Teams",
  },
  {
    icon: Landmark,
    title: "Multiple verticals",
    sub: "BFSI, Logistics, Retail, Healthcare",
  },
];

export default function ScopeGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 pt-6 border-t border-border max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {SCOPE.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.title}
            className="flex items-start gap-3 rounded-xl border border-border bg-card/40 backdrop-blur px-3.5 py-3"
          >
            <span className="grid place-items-center w-8 h-8 rounded-lg border border-border bg-background/60 shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.sub}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}