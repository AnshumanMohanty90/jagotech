import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, MessagesSquare, Radar, ShieldCheck, Server, UserCheck, Cpu } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const PLANS = [
  {
    name: "Starter",
    tier: "Department pilot",
    blurb: "Ideal for piloting AI transformation in a single department.",
    price: "1-week free",
    priceNote: "Full access to test with your team",
    specs: [
      { icon: Building2, label: "1 department, 1 channel (WhatsApp or Cliq)" },
      { icon: MessagesSquare, label: "Ask and Automate modules" },
      { icon: Radar, label: "Up to 50,000 monthly queries" },
      { icon: ShieldCheck, label: "Standard DPDPA compliance" },
    ],
    cta: "Start 1-week free trial",
  },
  {
    name: "Growth",
    tier: "Multi-department",
    tag: "Most popular",
    blurb: "Scale across Sales, Operations and HR teams.",
    price: "1-week free",
    priceNote: "Access for up to 3 departments",
    specs: [
      { icon: Radar, label: "All four pillars: Ask, Automate, Predict, Analyze" },
      { icon: MessagesSquare, label: "WhatsApp, Zoho Cliq and MS Teams" },
      { icon: Cpu, label: "Dynamic 100+ multi-LLM router" },
      { icon: ShieldCheck, label: "SOC 2 and GDPR compliance plane" },
    ],
    cta: "Start 1-week free trial",
  },
  {
    name: "Scale",
    tier: "Organization-wide",
    blurb: "Full enterprise transformation with dedicated VPC hosting.",
    price: "Custom POC",
    priceNote: "Tailored trial with private fine-tuning",
    specs: [
      { icon: Building2, label: "Unlimited departments and modalities" },
      { icon: Server, label: "On-premise or private cloud VPC air-gapping" },
      { icon: UserCheck, label: "Dedicated enterprise solutions architect" },
      { icon: Cpu, label: "Custom fine-tuned SLMs" },
    ],
    cta: "Request enterprise POC",
  },
];

const COMMON = [
  "Role-based access control",
  "Audit logging",
  "Document and data analysis",
  "No seats",
  "No subscription lock-in",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[34rem] h-[34rem] rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="09 · Plans and pricing" title="Start with a 1-week free trial.">
          <strong className="copy-accent">Any plan free for one week</strong>, or start with a
          <strong className="copy-focus"> single quick-win BOT</strong> from the{" "}
          <a href="#marketplace" className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary whitespace-nowrap">
            marketplace, from ₹1
          </a>
          , and scale as results come in.
        </SectionIntro>

        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-3xl border p-7 flex flex-col ${
                p.tag
                  ? "border-primary/50 bg-card/70 backdrop-blur glow-cyan"
                  : "border-border bg-card/40 hover:border-primary/30 transition-colors"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
                {p.tag && (
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary border border-primary/30 bg-primary/10 rounded-full px-2.5 py-1">
                    {p.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{p.tier}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                <CopyEmphasis text={p.blurb} bold={["single department", "Sales, Operations and HR", "dedicated VPC hosting"]} />
              </p>

              <div className="mt-5 flex flex-col items-start gap-1">
                <span className="font-heading text-2xl font-semibold leading-snug">{p.price}</span>
                <span className="text-sm leading-relaxed text-muted-foreground"><em>{p.priceNote}</em></span>
              </div>

              <ul className="mt-6 space-y-3.5">
                {p.specs.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label} className="flex items-start gap-3 text-base leading-relaxed">
                      <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">
                        <CopyEmphasis text={s.label} bold={["1 department", "50,000 monthly queries", "All four pillars", "100+ multi-LLM router", "Unlimited departments", "private cloud VPC"]} />
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className={`group mt-7 gap-2 px-4 py-2.5 rounded-xl text-sm ${p.tag ? "site-cta-primary" : "site-cta-secondary"}`}
              >
                {p.cta}
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${p.tag ? "text-primary-foreground" : "text-primary"}`} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
            Included in every plan
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {COMMON.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-background/60 text-sm text-foreground/80"
              >
                <Check className="w-3 h-3 text-emerald" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            WhatsApp, Zoho Cliq, Google Chat and Teams usage charges are billed by those platforms
            to you. People keep review and oversight throughout.
          </p>
          <a
            href="https://www.jago-tech.ai/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0 underline underline-offset-4 decoration-border"
          >
            Prefer a guided walkthrough first? Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}