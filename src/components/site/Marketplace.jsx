import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/site/SectionIntro";
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
    <section id="marketplace" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Marketplace" title="Pick a single agent. Pay only as you use.">
          Add one agent to your website or system, <strong className="copy-focus">pay per use</strong>, and
          expand when it proves its worth.{" "}
          <strong className="copy-accent">Agents cover documents, audio and images.</strong>
        </SectionIntro>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="flex flex-col rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/30 transition-colors"
            >
              <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{b.kind}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">{b.name}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed flex-1">
                <CopyEmphasis text={b.desc} bold={["structured records", "clauses, liabilities and terms", "ERP and CRM entries", "structured summaries and action triggers", "quality compliance", "forecasts close rates"]} italic={["with no manual page reviews"]} />
              </p>
              <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <span className="font-heading text-lg font-semibold">{b.price}</span>
                <Link
                  to={`/contact?intent=trial&task=${encodeURIComponent(b.name)}`}
                  className="site-cta-secondary group gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                >
                  {b.cta}
                  <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}