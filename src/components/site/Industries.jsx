import React from "react";
import { motion } from "framer-motion";
import { Factory, Landmark, ShoppingBag, HeartPulse, Truck, Radio } from "lucide-react";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const INDUSTRIES = [
  {
    icon: Landmark,
    slug: "bfsi",
    name: "BFSI and Banking",
    desc: "Instant KYC parsing from mobile snapshots, automated loan eligibility triage, and compliance audit log generation.",
  },
  {
    icon: Truck,
    slug: "logistics",
    name: "Supply Chain and Logistics",
    desc: "Voice-based warehouse stock checks, automated bill-of-lading parsing, and predictive shipment delay warnings.",
  },
  {
    icon: ShoppingBag,
    slug: "retail-fmcg",
    name: "Retail and FMCG",
    desc: "Field sales orders placed by voice message, store display audit photo analysis, and automated reorder alerts.",
  },
  {
    icon: HeartPulse,
    slug: "healthcare",
    name: "Healthcare and Pharma",
    desc: "Clinical research document questions, lab report parsing, and compliant multilingual patient support.",
  },
  {
    icon: Factory,
    slug: "manufacturing",
    name: "Manufacturing",
    desc: "Equipment maintenance voice lookup, shop-floor quality inspection, and automated spare parts procurement.",
  },
  {
    icon: Radio,
    slug: "telecom",
    name: "Telecom and Services",
    desc: "Customer service ticket classification, SLA breach predictions, and voice assistant support for field engineers.",
  },
];

const DEPARTMENTS = ["Customer Support", "Finance", "Operations", "HR", "IT", "Marketing", "Sales", "Legal", "Procurement"];

export default function Industries() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">By industry</p>
          <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-semibold leading-snug tracking-tight">
            Vertical workflows, ready on day one.
          </h3>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          <strong className="copy-focus">Tailored pipelines for your sector.</strong>{" "}
          <em className="copy-aside">No months of bespoke build.</em>
        </p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDUSTRIES.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.name}
              id={it.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group scroll-mt-24 rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <h4 className="min-w-0 font-heading text-lg font-semibold leading-snug">{it.name}</h4>
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
  );
}