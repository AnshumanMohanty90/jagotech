import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import Accordion from "@/components/site/Accordion";

const POINTS = [
  {
    t: "Data stays in India",
    d: "Your data is stored in India, or on your own servers if you prefer.",
  },
  {
    t: "You approve key actions",
    d: "You choose which actions need a sign-off before anything changes.",
  },
  {
    t: "Every action is logged",
    d: "A record of who did what, ready for an audit.",
  },
  {
    t: "Data law built in",
    d: "Consent and access rules from JShield apply to every answer.",
  },
];

export default function Trust() {
  return (
    <Reveal id="trust" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Trust" title="Built for companies that handle customer data." />

        <div className="mt-6 max-w-3xl">
          <Accordion
            firstOpen
            items={POINTS.map((p) => ({
              key: p.t,
              title: p.t,
              body: <p className="text-base leading-relaxed text-pretty">{p.d}</p>,
            }))}
          />
        </div>

        <Link
          to="/security"
          className="mt-8 inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
        >
          Read about security
        </Link>
      </div>
    </Reveal>
  );
}