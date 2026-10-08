import React from "react";
import { motion } from "framer-motion";

export default function RoleManifesto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-3xl border border-emerald/30 bg-emerald/5 backdrop-blur p-7 text-center"
    >
      <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-emerald">The biggest win</p>
      <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug">
        One foundation. Intelligence across every department.
      </h3>
      <p className="mt-4 mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground text-balance">
        Every win follows the exact same pattern: the right person sees the right finding in time,
        <strong className="copy-focus"> reviews the evidence, and acts.</strong> In Cliq or WhatsApp,
        <em className="copy-aside"> by text or voice, in their own language</em>, at low cost.
      </p>
      <p className="mt-5 font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">
        Awareness · Clarity · Right action
      </p>
    </motion.div>
  );
}