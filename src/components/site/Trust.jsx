import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/site/SectionIntro";

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
    <section id="trust" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Trust" title="Built for companies that handle customer data." />

        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="site-col"
            >
              <h3 className="font-heading text-xl font-semibold leading-snug text-balance">{p.t}</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed text-pretty">{p.d}</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/security"
          className="mt-8 inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
        >
          Read about security
        </Link>
      </div>
    </section>
  );
}