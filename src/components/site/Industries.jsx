import React from "react";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
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
    <Reveal className="relative site-section-alt">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Accordion
            firstOpen
            items={INDUSTRIES.map((it) => ({
              key: it.slug,
              anchorId: it.slug,
              title: it.name,
              body: (
                <p className="text-base leading-relaxed text-pretty">
                  <CopyEmphasis text={it.desc} bold={it.bold} />
                </p>
              ),
            }))}
          />
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
    </Reveal>
  );
}