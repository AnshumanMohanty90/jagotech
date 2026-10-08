import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, FileText, Mail, AudioLines, Image, TrendingUp } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const BOTS = [
  {
    icon: CreditCard,
    kind: "API + Widget",
    name: "Card Scanner BOT",
    desc: "Extract clean structured records from business cards and IDs straight into your CRM.",
    price: "₹2.00 / scan",
    cta: "Get key",
  },
  {
    icon: FileText,
    kind: "API + Widget",
    name: "Document Analysis BOT",
    desc: "Pull clauses, liabilities and terms out of legal contracts, with no manual page reviews.",
    price: "₹5.00 / page",
    cta: "Get key",
  },
  {
    icon: Mail,
    kind: "API + Widget",
    name: "Email Parser BOT",
    desc: "Turn inbound customer inquiries and purchase orders into ERP and CRM entries.",
    price: "₹1.00 / email",
    cta: "Get key",
  },
  {
    icon: AudioLines,
    kind: "API",
    name: "Voice-to-Text Transcription",
    desc: "Transcribe local-language audio into structured summaries and action triggers.",
    price: "₹3.00 / min",
    cta: "Get key",
  },
  {
    icon: Image,
    kind: "API",
    name: "Image Analysis BOT",
    desc: "Inspect store shelves, warehouse racks and field photos for quality compliance.",
    price: "₹3.00 / image",
    cta: "Get key",
  },
  {
    icon: TrendingUp,
    kind: "Predict model · Zoho CRM native",
    name: "Jasper: Sales Predict Model",
    desc: "Ranks deals by value, chance and urgency, flags stalled pipelines and forecasts close rates.",
    price: "Pilot model",
    cta: "Deploy model",
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[32rem] h-[32rem] rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Marketplace" title="Pick a single BOT. Pay only as you use.">
          Drop a capability in via API or widget, <strong className="copy-focus">prove the quick win</strong>,
          then scale — including{" "}
          <strong className="copy-accent">document, audio and video analysis add-ons</strong>.
        </SectionIntro>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BOTS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="flex flex-col rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{b.kind}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">{b.name}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed flex-1">
                  <CopyEmphasis text={b.desc} bold={["structured records", "clauses, liabilities and terms", "ERP and CRM entries", "structured summaries and action triggers", "quality compliance", "forecasts close rates"]} italic={["with no manual page reviews"]} />
                </p>
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                  <span className="font-heading text-lg font-semibold">{b.price}</span>
                  <a
                    href="#contact"
                    className="site-cta-secondary group gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                  >
                    {b.cta}
                    <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}