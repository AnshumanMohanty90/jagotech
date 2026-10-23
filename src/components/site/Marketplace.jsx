import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const AGENTS = [
  {
    kind: "API + Widget",
    name: "Card Scanner Agent",
    desc: "Extract clean structured records from business cards and IDs straight into your CRM.",
    price: "₹2.00 / scan",
    cta: "Request access",
  },
  {
    kind: "API + Widget",
    name: "Document Analysis Agent",
    desc: "Pull clauses, liabilities and terms out of legal contracts, with no manual page reviews.",
    price: "₹5.00 / page",
    cta: "Request access",
  },
  {
    kind: "API + Widget",
    name: "Email Parser Agent",
    desc: "Turn inbound customer inquiries and purchase orders into ERP and CRM entries.",
    price: "₹1.00 / email",
    cta: "Request access",
  },
  {
    kind: "API",
    name: "Voice-to-Text Transcription",
    desc: "Transcribe local-language audio into structured summaries and action triggers.",
    price: "₹3.00 / min",
    cta: "Request access",
  },
  {
    kind: "API",
    name: "Image Analysis Agent",
    desc: "Inspect store shelves, warehouse racks and field photos for quality compliance.",
    price: "₹3.00 / image",
    cta: "Request access",
  },
  {
    kind: "Predict model · Zoho CRM native",
    name: "Jasper: Sales Predict Model",
    desc: "Ranks deals by value, chance and urgency, flags stalled pipelines and forecasts close rates.",
    price: "Pilot model",
    cta: "Request a pilot",
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {AGENTS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="site-col flex flex-col"
            >
              <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{b.kind}</span>
              <h2 className="mt-3 font-heading !text-xl font-semibold leading-snug text-balance">{b.name}</h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty flex-1">
                <CopyEmphasis text={b.desc} bold={["structured records", "clauses, liabilities and terms", "ERP and CRM entries", "structured summaries and action triggers", "quality compliance", "forecasts close rates"]} italic={["with no manual page reviews"]} />
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-heading text-lg font-semibold">{b.price}</span>
                <Link
                  to={`/contact?intent=trial&task=${encodeURIComponent(b.name)}`}
                  className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm"
                >
                  {b.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}