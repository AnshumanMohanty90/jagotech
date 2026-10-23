import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STORY = [
  {
    label: "Who",
    text: "A non-bank lender (NBFC) with about Rs 11,000 crore of loans to small borrowers across 22 states, mostly rural and semi-urban.",
    bold: ["Rs 11,000 crore of loans"],
    italic: ["mostly rural and semi-urban"],
  },
  {
    label: "Before",
    text: "160 auditors covered 1,600 branches on a fixed calendar, using old risk reports.",
    bold: ["160 auditors covered 1,600 branches"],
    italic: ["old risk reports"],
  },
  {
    label: "Now",
    text: "Jago checks every branch on live data and ranks them by risk, so auditors go where problems are most likely.",
    bold: ["checks every branch on live data"],
    accent: ["ranks them by risk"],
  },
  {
    label: "Next",
    text: "Staff will ask questions in local languages, and customers will give consent on WhatsApp.",
    bold: ["in local languages"],
    accent: ["consent on WhatsApp"],
  },
];

export default function CustomerStory({ showLink = true }) {
  return (
    <section id="story" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Customer story" title="A major lending NBFC now knows which branches to audit first" />

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-5">
          {STORY.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card/40 p-6"
            >
              <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">{s.label}</p>
              <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
                <CopyEmphasis text={s.text} bold={s.bold} accent={s.accent} italic={s.italic} />
              </p>
            </motion.div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8">
            <Link to="/customers" className="site-cta-secondary group gap-2 px-5 py-3 rounded-xl">
              Read the story
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}