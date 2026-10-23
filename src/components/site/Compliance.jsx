import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const JSHIELD_POINTS = [
  "Takes customer consent and keeps the proof",
  "Plans your response if data is lost, before you need it",
  "Keeps a record of the personal data you hold, ready for an audit",
];

const FRAMEWORKS = [
  {
    tag: "The DPDP Act",
    title: "India's data protection law, in plain words.",
    desc: "The law sets duties for every company that holds personal data. The main duties apply from 13 May 2027, and fines can reach Rs 250 crore. JShield tracks each duty for you.",
    points: [
      "Ask for consent and keep the proof",
      "Keep personal data safe",
      "Delete it when the customer asks",
      "Report a loss of data quickly",
    ],
  },
  {
    tag: "SOC 2",
    title: "Built to a global security standard.",
    desc: "SOC 2 is a global security standard. Jago is built to it, and certification is under way. We will show the certificate when it is issued.",
    points: [
      "Who can see and do what, set by you",
      "A record of every action",
      "A person approves the key steps",
      "Your data stays in India",
    ],
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="relative pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* JShield spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card/40 backdrop-blur p-7 sm:p-10 glow-cyan"
        >
          <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[110px] animate-pulse-glow" />
          <div className="relative">
            <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
              Companion product
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                JShield
              </h2>
            </div>
            <p className="mt-4 max-w-[70ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-balance">
              <CopyEmphasis
                text="JShield is our companion product for India's data protection law. It tracks consent, breaches and the duties that start on 13 May 2027, alongside your Jago agents."
                bold={["companion product for India's data protection law"]}
                accent={["consent, breaches"]}
                italic={["alongside your Jago agents"]}
              />
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {JSHIELD_POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-border bg-background/60 px-5 py-4 text-sm leading-relaxed text-foreground/90"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://jshield.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-cta-primary group gap-2 px-5 py-3 rounded-xl"
              >
                Explore JShield
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* DPDP duties and SOC 2 */}
        <div className="mt-14 sm:mt-16">
          <SectionIntro eyebrow="Compliance" title="What the law asks of you.">
            <CopyEmphasis
              text="India's data protection law, the DPDP Act, applies to every company that holds personal data. The main duties start on 13 May 2027, and fines can reach Rs 250 crore."
              bold={["every company that holds personal data"]}
              accent={["13 May 2027", "Rs 250 crore"]}
              italic={["the DPDP Act"]}
            />
          </SectionIntro>

          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            {FRAMEWORKS.map((f, i) => (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 hover:border-primary/30 transition-colors"
              >
                <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">
                  {f.tag}
                </p>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug text-balance">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                  <CopyEmphasis
                    text={f.desc}
                    bold={["The main duties apply from 13 May 2027", "built to it"]}
                    accent={["certification is under way", "Your data stays in India"]}
                  />
                </p>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-foreground/90 border-l border-primary/40 pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="mt-8 max-w-[70ch] text-sm leading-relaxed text-muted-foreground"
          >
            <CopyEmphasis
              text="A person approves the key steps before anything changes, and every action is on record, ready for an audit."
              bold={["A person approves the key steps"]}
              accent={["on record"]}
              italic={["ready for an audit"]}
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}