import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const CUSTOM_PRICING_NOTE = "Priced on your team size and the modules you use.";

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
    price: "Custom pricing",
    priceNote: CUSTOM_PRICING_NOTE,
    desc: "All four modules for up to 50 people, on WhatsApp, Slack and Teams.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Growth",
    trialHref: "/contact?intent=trial",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    priceNote: CUSTOM_PRICING_NOTE,
    desc: "Every module, with as many AI agents and people as you need.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Enterprise",
    primary: true,
  },
  {
    name: "JShield add-on",
    price: "Custom pricing",
    priceNote: CUSTOM_PRICING_NOTE,
    desc: "Customer consent, breach response and a record of the personal data you hold.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=JShield%20add-on",
  },
  {
    name: "Own servers",
    price: "Custom pricing",
    priceNote: CUSTOM_PRICING_NOTE,
    desc: "Jago runs on your own servers, with AI tuned to your data.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Own%20servers",
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
    <section id="pricing" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="site-col flex flex-col"
            >
              <h2 className="font-heading !text-xl font-semibold leading-snug text-balance">{p.name}</h2>

              <p className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug text-primary">
                {p.price}
              </p>

              {p.priceNote && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.priceNote}
                </p>
              )}

              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty flex-1">
                <CopyEmphasis text={p.desc} bold={["up to 10 people", "up to 50 people", "as many AI agents and people as you need", "personal data you hold", "your own servers"]} />
              </p>

              <div className="mt-6 flex flex-col items-start gap-3">
                <Link
                  to={p.href}
                  className={`self-start px-4 py-2.5 rounded-xl text-sm ${
                    p.primary ? "site-cta-primary" : "site-cta-secondary"
                  }`}
                >
                  {p.cta}
                </Link>
                {p.trialHref && (
                  <Link
                    to={p.trialHref}
                    className="text-sm leading-relaxed text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
                  >
                    Try it free for a week
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
            Every plan includes
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
            {INCLUDED.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Built to a global security standard (SOC 2); certification under way.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            WhatsApp, Slack and Teams may charge their own messaging fees.
          </p>
        </div>
      </div>
    </section>
  );
}