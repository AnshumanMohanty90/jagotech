import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import PlanColumn from "@/components/site/PlanColumn";
import { useCurrency, formatPrice, CurrencyToggle } from "@/lib/currency";

const PLANS = [
  {
    name: "Starter",
    priceInr: 15000,
    priceUsd: 199,
    price: "Rs 15,000 a month",
    desc: "Ask questions and see why numbers move, for up to 10 people.",
    cta: "Try it free for a week",
    href: "/contact?intent=trial",
  },
  {
    name: "Growth",
    price: "Custom pricing",
    desc: "All four modules for up to 50 people, on WhatsApp, Slack and Teams.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Growth",
    trialHref: "/contact?intent=trial",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    desc: "Every module, with as many AI agents and people as you need.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=Enterprise",
    primary: true,
  },
  {
    name: "JShield add-on",
    price: "Custom pricing",
    desc: "Customer consent, breach response and a record of the personal data you hold.",
    cta: "Get pricing",
    href: "/contact?intent=pricing&plan=JShield%20add-on",
  },
  {
    name: "Own servers",
    price: "Custom pricing",
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
  const { currency, rate } = useCurrency();
  const plans = PLANS.map((p) => (p.priceInr ? { ...p, price: `${formatPrice(p.priceInr, currency, rate, 0, p.priceUsd)} a month` } : p));
  return (
    <Reveal id="pricing" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-heading text-balance">Plans</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-slate-300">
          Custom plans are priced on your team size and the modules you use.
        </p>
        <CurrencyToggle className="mt-3" />

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.slice(0, 3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {plans.slice(3).map((p) => (
            <PlanColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-8">
          <p className="site-label">Every plan includes</p>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-300">
            {INCLUDED.join(", ")}
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