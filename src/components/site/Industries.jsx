import React from "react";
import { motion } from "framer-motion";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const INDUSTRIES = [
  {
    slug: "banks-and-lenders",
    name: "Banks and Lenders",
    desc: "Branch risk checks with live data, customer consent on WhatsApp, and audit reports drafted for your team to review.",
    bold: ["Branch risk checks with live data", "consent on WhatsApp", "audit reports"],
  },
  {
    slug: "logistics",
    name: "Supply Chain and Logistics",
    desc: "Check stock by voice in the warehouse, read shipping documents, and get a warning before a shipment runs late.",
    bold: ["by voice in the warehouse", "before a shipment runs late"],
  },
  {
    slug: "retail-fmcg",
    name: "Retail and FMCG",
    desc: "Field teams place orders by voice message, shelf photos are checked against display rules, and reorder alerts go out on time.",
    bold: ["orders by voice message", "reorder alerts"],
  },
  {
    slug: "healthcare",
    name: "Healthcare and Pharma",
    desc: "Ask questions across research documents and lab reports, and answer patients in their own language.",
    bold: ["research documents and lab reports", "in their own language"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    desc: "Ask about a machine by voice on the shop floor, check quality from line photos, and order parts without the paperwork.",
    bold: ["by voice on the shop floor", "without the paperwork"],
  },
  {
    slug: "telecom",
    name: "Telecom and Services",
    desc: "Sort customer tickets as they arrive, get a warning before a service promise is broken, and help field engineers by voice.",
    bold: ["as they arrive", "help field engineers by voice"],
  },
];

const DEPARTMENTS = ["Customer Support", "Finance", "Operations", "HR", "IT", "Marketing", "Sales", "Legal", "Procurement"];

export default function Industries() {
  return (
    <section className="relative site-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name}
              id={it.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="site-col scroll-mt-24"
            >
              <h2 className="font-heading !text-xl font-semibold leading-snug text-balance">{it.name}</h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">
                <CopyEmphasis text={it.desc} bold={it.bold} />
              </p>
            </motion.div>
          ))}
        </div>

        {/* department marquee */}
        <div className="mt-8 relative overflow-hidden mask-fade-edges py-2">
          <div className="flex gap-10 w-max animate-marquee">
            {[...DEPARTMENTS, ...DEPARTMENTS].map((d, i) => (
              <span
                key={i}
                className="shrink-0 font-mono text-xs uppercase tracking-wide text-muted-foreground"
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