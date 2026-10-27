import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";

const POINTS = [
  {
    t: "Data residency you control",
    q: "Where is customer data stored by default?",
    d: "Your data is stored in our India region by default, or on your own servers if you prefer.",
  },
  {
    t: "You approve key actions",
    q: "Who approves key actions?",
    d: "You choose which actions need a sign-off before anything changes.",
  },
  {
    t: "Every action is logged",
    q: "Are all actions logged?",
    d: "Yes. Jago records who did what, ready for an audit.",
  },
  {
    t: "Data law built in",
    q: "Is data law built into the product?",
    d: "Yes, with JShield, an add-on. It applies your consent and access rules to every\u00a0answer.",
  },
];

export default function Trust() {
  return (
    <Reveal id="trust" className="relative site-section-alt">
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-32">
          <div className="text-left">
            <p className="site-label site-eyebrow">Trust and security</p>
            <h2 className="mt-3 font-heading text-balance">Jago keeps customer data under your&nbsp;control.</h2>
            <p className="site-line mt-4 text-base sm:text-lg text-[#dde4ee] text-pretty">
              Here are four answers on where your data lives and who approves&nbsp;what.
            </p>
          </div>
          <Link
            to="/security"
            className="mt-6 hidden font-ui text-primary font-semibold underline underline-offset-4 lg:inline-block"
          >
            Read about security
          </Link>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <Accordion
            variant="card"
            firstOpen
            items={POINTS.map((p) => ({
              key: p.t,
              title: p.q,
              body: <p className="site-line text-base leading-6 text-[#dde4ee]">{p.d}</p>,
            }))}
          />
          <Link
            to="/security"
            className="mt-6 inline-block font-ui text-primary font-semibold underline underline-offset-4 lg:hidden"
          >
            Read about security
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
