import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const STILL_MANUAL = [
  {
    t: "Find the right information",
    d: "Across systems, folders and inboxes that never talk to each other.",
  },
  {
    t: "Move between systems",
    d: "Re-entering the same data in the CRM, the ERP and the ticket queue.",
  },
  {
    t: "Make the decisions",
    d: "Judging what matters, with half the picture and a deadline.",
  },
  {
    t: "Update the records",
    d: "Typing outcomes back into systems by hand, one field at a time.",
  },
  {
    t: "Follow through",
    d: "Chasing approvals, reminders and next steps across the team.",
  },
];

export default function Challenge() {
  return (
    <section id="challenge" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-violet/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="The challenge" title="Your people already have AI. They still have to do the work.">
          Most AI tools can answer questions and generate content, but the{" "}
          <strong className="copy-focus">real work still sits with your people.</strong>
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90 text-pretty">
              <CopyEmphasis
                text="Jago brings AI into the workflow, so it can understand the context, take action, and help get the work done."
                bold={["understand the context", "take action"]}
                accent={["get the work done"]}
              />
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <em className="copy-aside">
                Not another chat window your people paste questions into. An AI workforce that works
                where the work already happens.
              </em>
            </p>
            <a
              href="#how"
              className="site-cta-secondary group mt-6 gap-2 px-4 py-2.5 rounded-xl text-sm"
            >
              See how Jago works
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {STILL_MANUAL.map((m, i) => (
                <motion.li
                  key={m.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="border-b border-border py-4"
                >
                  <p className="text-base font-medium leading-relaxed text-foreground/90">{m.t}</p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground text-pretty">{m.d}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}