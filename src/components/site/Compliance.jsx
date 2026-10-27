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
    title: "These are four of the main duties under the DPDP\u00a0Act.",
    desc: "JShield tracks each of these duties for you.",
    points: [
      "Ask for consent and keep the proof",
      "Keep personal data safe",
      "Delete it when the customer asks",
      "Report a loss of data quickly",
    ],
  },
  {
    tag: "SOC 2",
    title: "Jago is preparing for a SOC 2 audit, a widely used security\u00a0check.",
    desc: "We will share the report once it is\u00a0issued.",
    points: [
      "Who can see and do what, set by you",
      "A record of every action",
      "A person approves the key steps",
      "You choose where your data is stored",
    ],
  },
];

export default function Compliance() {
  return (
    <Reveal id="compliance" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* JShield spotlight */}
        <div className="mx-auto min-w-0 max-w-[1024px] rounded-2xl border border-[#2f3641] bg-[rgba(19,22,27,0.3)] p-6 text-center sm:p-8">
          <p className="site-label site-eyebrow">Add-on</p>
          <h2 className="mt-3 font-heading text-balance">
            JShield tracks consent, breaches and legal deadlines for&nbsp;you.
          </h2>
          <p className="mx-auto mt-4 max-w-[772px] text-base sm:text-lg text-pretty">
            <CopyEmphasis
              text="JShield works alongside your Jago agents and tracks your duties under the DPDP Act and GDPR, and your SOC 2 controls."
              bold={["companion product for data protection laws"]}
              accent={["consent, breaches"]}
              italic={["alongside your Jago agents"]}
            />
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {JSHIELD_POINTS.map((point) => (
              <li key={point} className="min-w-0 rounded-xl border border-[rgba(245,247,250,0.1)] bg-[#0f1318] p-4 text-left font-ui text-sm font-medium leading-6 text-[#dde4ee]">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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
        <div className="mt-16">
          <SectionIntro eyebrow="Compliance" title="India's DPDP Act sets duties for every company that holds personal&nbsp;data.">
            <CopyEmphasis
              text="The main duties start on 13 May 2027, and fines can reach Rs 250 crore."
              bold={["every company that holds personal data"]}
              accent={["13 May 2027", "Rs 250 crore"]}
              italic={["the DPDP Act"]}
            />
          </SectionIntro>

          <div className="mx-auto mt-10 grid max-w-[1024px] gap-6 lg:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <div key={f.tag} className="site-col">
                <p className="site-label">{f.tag}</p>
                <h3 className="mt-3 !font-ui !text-lg !font-bold !leading-[1.375] text-balance">
                  {f.title}
                </h3>
                <p className="site-line mt-3 text-base leading-6 text-[#dde4ee] text-pretty">
                  <CopyEmphasis
                    text={f.desc}
                    bold={["The main duties apply from 13 May 2027", "built to it"]}
                    accent={["share the report"]}
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

          <p className="mx-auto mt-8 max-w-[772px] text-center text-base">
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