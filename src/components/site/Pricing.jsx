import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
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
    <Reveal id="pricing" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Accordion
            firstOpen
            items={PLANS.map((p) => ({
              key: p.name,
              title: `${p.name} · ${p.price}`,
              body: (
                <div className="min-w-0">
                  {p.priceNote && (
                    <p className="text-sm leading-relaxed text-pretty">{p.priceNote}</p>
                  )}
                  <p className="mt-2 text-base leading-relaxed text-pretty">
                    <CopyEmphasis text={p.desc} bold={["up to 10 people", "up to 50 people", "as many AI agents and people as you need", "personal data you hold", "your own servers"]} />
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-3">
                    <Link
                      to={p.href}
                      className={p.primary ? "site-cta-primary px-4 py-2.5 rounded-xl text-sm" : "site-cta-secondary px-4 py-2.5 rounded-xl text-sm"}
                    >
                      {p.cta}
                    </Link>
                    {p.trialHref && (
                      <Link
                        to={p.trialHref}
                        className="text-sm leading-relaxed hover:text-primary underline-offset-4 hover:underline transition-colors"
                      >
                        Try it free for a week
                      </Link>
                    )}
                  </div>
                </div>
              ),
            }))}
          />
        </div>

        <div className="mt-8">
          <p className="site-label">Every plan includes</p>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            {INCLUDED.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <p className="text-sm leading-relaxed">
            Built to a global security standard (SOC 2); certification under way.
          </p>
          <p className="text-sm leading-relaxed">
            WhatsApp, Slack and Teams may charge their own messaging fees.
          </p>
        </div>
      </div>
    </Reveal>
  );
}