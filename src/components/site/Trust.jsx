import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const TRUST = [
  {
    title: "DPDPA 2023",
    desc: "India privacy compliance. Automated PII scrubbing, consent management and localized data storage nodes.",
  },
  {
    title: "SOC 2 Type II",
    desc: "Audited security. Strictly isolated tenant databases, with zero training of public models on your data.",
  },
  {
    title: "GDPR compliant",
    desc: "EU data protection. Right-to-be-forgotten controls and European cloud residency guarantees.",
  },
  {
    title: "ISO 27001 and VPC",
    desc: "Private cloud and on-prem ready. AES-256 at rest, TLS 1.3 in transit, air-gapped deployments.",
  },
  {
    title: "People in control",
    desc: "Consequential actions wait for human approval, and uniform access control plus audit logging covers every department.",
  },
  {
    title: "Multilingual by design",
    desc: "Voice, text or images, in 50+ languages, with governance and PII handling applied in every one of them.",
  },
];

const ENGINE_STATS = [
  { v: "100+", l: "Commercial and open-source models" },
  { v: "-65%", l: "Automated token cost efficiency" },
  { v: "<100ms", l: "Sub-second local SLM inference" },
];

export default function Trust() {
  return (
    <section id="trust" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div>
          <div className="min-w-0">
            <SectionIntro eyebrow="Security and governance" title="Bank-grade compliance, built in.">
              Engineered for <strong className="copy-focus">regulated industries.</strong>{" "}
              <strong className="copy-accent">Uniform access control and audit logging</strong>, everywhere.
            </SectionIntro>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold leading-snug">{t.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={t.desc} bold={["PII scrubbing", "Strictly isolated tenant databases", "European cloud residency", "AES-256 at rest, TLS 1.3 in transit", "50+ languages"]} accent={["zero training of public models", "human approval"]} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic engine band */}
        <div className="mt-8 sm:mt-10 rounded-3xl border border-border bg-card/40 backdrop-blur p-7 sm:p-9">
          <h3 className="font-heading text-lg font-semibold">100+ multi-LLM dynamic routing engine</h3>
          <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Every query is routed to the <strong className="copy-focus">best-suited model</strong>, commercial or fine-tuned, automatically.
            Optimal accuracy, <strong className="copy-accent">sub-100ms speed</strong>, <em className="copy-aside">with zero manual tuning.</em>
          </p>
          <div className="mt-7 grid sm:grid-cols-3 gap-4">
            {ENGINE_STATS.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-background/60 px-4 py-4 text-center sm:text-left">
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-primary">{s.v}</div>
                <div className="mt-1 font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}