import React from "react";
import Reveal from "@/components/site/Reveal";
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
    <Reveal id="compliance" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* JShield spotlight */}
        <div className="min-w-0">
          <p className="site-label">Companion product</p>
          <h2 className="mt-3 font-heading font-semibold leading-[1.15] tracking-tight text-balance">
            JShield
          </h2>
          <p className="mt-3 max-w-[75ch] text-base sm:text-lg leading-relaxed text-pretty">
            <CopyEmphasis
              text="JShield is our companion product for India's data protection law. It tracks consent, breaches and the duties that start on 13 May 2027, alongside your Jago agents."
              bold={["companion product for India's data protection law"]}
              accent={["consent, breaches"]}
              italic={["alongside your Jago agents"]}
            />
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {JSHIELD_POINTS.map((point) => (
              <li key={point} className="min-w-0 text-sm sm:text-base leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://jshield.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta-primary px-5 py-3 rounded-xl"
            >
              Explore JShield
            </a>
          </div>
        </div>

        {/* DPDP duties and SOC 2 */}
        <div className="mt-8">
          <SectionIntro eyebrow="Compliance" title="What the law asks of you.">
            <CopyEmphasis
              text="India's data protection law, the DPDP Act, applies to every company that holds personal data. The main duties start on 13 May 2027, and fines can reach Rs 250 crore."
              bold={["every company that holds personal data"]}
              accent={["13 May 2027", "Rs 250 crore"]}
              italic={["the DPDP Act"]}
            />
          </SectionIntro>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {FRAMEWORKS.map((f) => (
              <div key={f.tag} className="site-col">
                <p className="site-label">{f.tag}</p>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold leading-snug text-balance">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-pretty">
                  <CopyEmphasis
                    text={f.desc}
                    bold={["The main duties apply from 13 May 2027", "built to it"]}
                    accent={["certification is under way", "Your data stays in India"]}
                  />
                </p>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((point) => (
                    <li key={point} className="text-sm sm:text-base leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[75ch] text-sm sm:text-base leading-relaxed">
            <CopyEmphasis
              text="A person approves the key steps before anything changes, and every action is on record, ready for an audit."
              bold={["A person approves the key steps"]}
              accent={["on record"]}
              italic={["ready for an audit"]}
            />
          </p>
        </div>
      </div>
    </Reveal>
  );
}