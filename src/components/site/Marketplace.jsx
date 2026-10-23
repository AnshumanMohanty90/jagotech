import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
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
    <Reveal id="marketplace" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Accordion
            firstOpen
            items={AGENTS.map((b) => ({
              key: b.name,
              title: b.name,
              body: (
                <div className="min-w-0">
                  <p className="site-label">{b.kind}</p>
                  <p className="mt-2 text-base leading-relaxed text-pretty">
                    <CopyEmphasis
                      text={b.desc}
                      bold={["structured records", "clauses, liabilities and terms", "ERP and CRM entries", "structured summaries and action triggers", "quality compliance", "forecasts close rates"]}
                      italic={["with no manual page reviews"]}
                    />
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="font-heading text-lg font-semibold">{b.price}</span>
                    <Link
                      to={`/contact?intent=trial&task=${encodeURIComponent(b.name)}`}
                      className="site-cta-secondary px-4 py-2.5 rounded-xl text-sm"
                    >
                      {b.cta}
                    </Link>
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </Reveal>
  );
}