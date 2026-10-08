import React from "react";
import { motion } from "framer-motion";
import { Factory, Landmark, ShoppingBag, HeartPulse, Truck, Radio } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const INDUSTRIES = [
  {
    icon: Landmark,
    name: "BFSI and Banking",
    desc: "Instant KYC parsing from mobile snapshots, automated loan eligibility triage, and compliance audit log generation.",
  },
  {
    icon: Truck,
    name: "Supply Chain and Logistics",
    desc: "Voice-based warehouse stock checks, automated bill-of-lading parsing, and predictive shipment delay warnings.",
  },
  {
    icon: ShoppingBag,
    name: "Retail and FMCG",
    desc: "Field sales orders placed by voice message, store display audit photo analysis, and automated reorder alerts.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare and Pharma",
    desc: "Clinical research document questions, lab report parsing, and compliant multilingual patient support.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Equipment maintenance voice lookup, shop-floor quality inspection, and automated spare parts procurement.",
  },
  {
    icon: Radio,
    name: "Telecom and Services",
    desc: "Customer service ticket classification, SLA breach predictions, and voice assistant support for field engineers.",
  },
];

const DEPARTMENTS = ["Customer Support", "Finance", "Operations", "HR", "IT", "Marketing", "Sales", "Legal", "Procurement"];

export default function Industries() {
  return (
    <section id="industries" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-15 mask-fade-edges" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="04 · Vertical workflows" title="Deploy by vertical, on day one.">
          <strong className="copy-focus">Tailored pipelines, ready on day one.</strong>{" "}
          <em className="copy-aside">No months of bespoke build.</em>
        </SectionIntro>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl border border-border bg-background/60 group-hover:border-primary/30 transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </span>
                  <h3 className="min-w-0 font-heading text-lg font-semibold leading-snug">{it.name}</h3>
                </div>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={it.desc} bold={["Instant KYC parsing", "predictive shipment delay warnings", "automated reorder alerts", "compliant multilingual patient support", "automated spare parts procurement", "SLA breach predictions"]} />
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* department marquee */}
        <div className="mt-10 relative overflow-hidden mask-fade-edges py-2">
          <div className="flex gap-3 w-max animate-marquee">
            {[...DEPARTMENTS, ...DEPARTMENTS].map((d, i) => (
              <span
                key={i}
                className="shrink-0 px-4 py-2 rounded-full border border-border bg-card/40 font-mono text-xs text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}