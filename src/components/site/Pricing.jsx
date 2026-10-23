import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const PLANS = [
  {
    name: "Starter",
    price: "Rs 15,000 a month",
    desc: "Ask questions and see why numbers move, for up to 10 people.",
    cta: "Try it free for a week",
    href: "/contact?intent=trial",
  },
  {
    name: "Growth",
    price: "Rs 8 lakh a year",
    desc: "All four modules for up to 50 people, on WhatsApp, Slack and Teams.",
    cta: "Try it free for a week",
    href: "/contact?intent=trial",
  },
  {
    name: "Enterprise",
    price: "Rs 30 lakh a year",
    desc: "Every module, with as many AI agents and people as you need.",
    cta: "Talk to us",
    href: "/contact?intent=enterprise",
    primary: true,
  },
  {
    name: "JShield add-on",
    price: "Rs 12 lakh a year",
    desc: "Customer consent, breach response and a record of the personal data you hold.",
    cta: "Check your readiness",
    href: "https://jshield.ai",
    external: true,
  },
  {
    name: "Own servers",
    price: "From Rs 60 lakh a year, plus Rs 15 lakh set-up",
    desc: "Jago runs on your own servers, with AI tuned to your data.",
    cta: "Talk to us",
    href: "/contact?intent=enterprise",
  },
];

const INCLUDED = [
  "Who-sees-what controls",
  "A record of every action",
  "Document and data analysis",
  "No long lock-in",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -right-32 top-20 w-[34rem] h-[34rem] rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Plans" title="Start with one team. Grow into the whole company.">
          <strong className="copy-accent">Clear prices in rupees.</strong>{" "}
          <strong className="copy-focus">Try any plan free for a week.</strong>
        </SectionIntro>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="relative rounded-3xl border border-border bg-card/40 hover:border-primary/30 transition-colors p-7 flex flex-col"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
              </div>

              <div className="mt-4 flex flex-col items-start gap-1">
                <span className="font-heading text-xl sm:text-2xl font-semibold leading-snug text-primary">
                  {p.price}
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground flex-1">
                <CopyEmphasis text={p.desc} bold={["up to 10 people", "up to 50 people", "as many AI agents and people as you need", "personal data you hold", "your own servers"]} />
              </p>

              {p.external ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-cta-secondary group mt-6 gap-2 px-4 py-2.5 rounded-xl text-sm"
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <Link
                  to={p.href}
                  className={`group mt-6 gap-2 px-4 py-2.5 rounded-xl text-sm ${
                    p.primary ? "site-cta-primary" : "site-cta-secondary"
                  }`}
                >
                  {p.cta}
                  <ArrowRight
                    className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${
                      p.primary ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
            Every plan includes
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {INCLUDED.map((c) => (
              <span
                key={c}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-border bg-background/60 text-sm text-foreground/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="copy-focus">Built to a global security standard (SOC 2); certification under way.</strong>
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <em className="copy-aside">WhatsApp, Slack and Teams may charge their own messaging fees.</em>
          </p>
        </div>
      </div>
    </section>
  );
}