import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const JSHIELD_POINTS = [
  "Purpose-built privacy and compliance automation, from consent capture to breach readiness",
  "Continuous compliance monitoring across your systems, with evidence gathered as work happens",
  "Regulatory coverage spanning DPDPA, GDPR and SOC 2 workflows in a single control plane",
];

const FRAMEWORKS = [
  {
    tag: "SOC 2 Type II",
    title: "Audited security, independently verified.",
    desc: "Strictly isolated tenant databases, with zero training of public models on your data. Access is uniform and role-scoped, and every agent action lands in an immutable audit log your auditors can actually read.",
    points: [
      "Strictly isolated tenant databases",
      "Zero training of public models on your data",
      "Uniform access control and audit logging across every department",
    ],
  },
  {
    tag: "GDPR",
    title: "EU data protection, engineered in.",
    desc: "Right-to-be-forgotten controls and European cloud residency guarantees, with PII handled consistently in every language your teams work in.",
    points: [
      "Right-to-be-forgotten controls",
      "European cloud residency guarantees",
      "Consent and PII handling applied across 50+ languages",
    ],
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="relative pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* JShield spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card/40 backdrop-blur p-7 sm:p-10 glow-cyan"
        >
          <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[110px] animate-pulse-glow" />
          <div className="relative">
            <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
              Companion product
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                JShield
              </h2>
              <span className="font-mono text-sm text-muted-foreground">jshield.ai</span>
            </div>
            <p className="mt-4 max-w-[70ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-balance">
              <CopyEmphasis
                text="From the makers of Jagotech, JShield is our dedicated compliance platform: it automates privacy operations, keeps regulatory evidence current, and works alongside your Jagotech agents, so compliance moves at the speed of the work itself."
                bold={["dedicated compliance platform"]}
                accent={["works alongside your Jagotech agents"]}
                italic={["at the speed of the work itself"]}
              />
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {JSHIELD_POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-border bg-background/60 px-5 py-4 text-sm leading-relaxed text-foreground/90"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://jshield.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-cta-primary group gap-2 px-5 py-3 rounded-xl"
              >
                Explore JShield
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="font-mono text-xs leading-relaxed text-muted-foreground">
                Opens jshield.ai in a new tab
              </span>
            </div>
          </div>
        </motion.div>

        {/* SOC 2 and GDPR */}
        <div className="mt-14 sm:mt-16">
          <SectionIntro eyebrow="Compliance posture" title="Certainty you can hand to your auditors.">
            <CopyEmphasis
              text="Jagotech is built for regulated industries: security, privacy and governance are part of the platform, not a layer bolted on afterwards."
              bold={["built for regulated industries"]}
              accent={["part of the platform"]}
              italic={["not a layer bolted on afterwards"]}
            />
          </SectionIntro>

          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            {FRAMEWORKS.map((f, i) => (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 hover:border-primary/30 transition-colors"
              >
                <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
                  {f.tag}
                </p>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug text-balance">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                  <CopyEmphasis
                    text={f.desc}
                    bold={["Strictly isolated tenant databases", "Right-to-be-forgotten controls", "European cloud residency guarantees"]}
                    accent={["zero training of public models", "immutable audit log"]}
                  />
                </p>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-foreground/90 border-l border-primary/40 pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="mt-8 max-w-[70ch] text-sm leading-relaxed text-muted-foreground"
          >
            <CopyEmphasis
              text="Consequential actions wait for human approval before they run, and every department works under the same governance, so your compliance story stays consistent no matter where agents operate."
              bold={["same governance"]}
              accent={["human approval"]}
              italic={["no matter where agents operate"]}
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}