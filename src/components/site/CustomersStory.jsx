import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DOES = [
  "Ranks every branch by risk, using live data",
  "Puts the questions most likely to find issues first",
  "Sends auditors to the branches that need them most",
  "Learns from each audit, so the next ranking is sharper",
];

export default function CustomersStory() {
  return (
    <section className="relative pt-4 pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">The problem</p>
          <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/90 text-pretty">
            Audits kept slipping. Risk reports used old data, and no tool showed which branches were likely
            to have problems. <strong className="copy-focus">Auditors could not tell where to go first.</strong>
          </p>
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">What Jago does</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {DOES.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card/40 p-5"
              >
                <p className="text-base leading-relaxed text-foreground/90">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card/40 p-6"
          >
            <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">The scale</p>
            <p className="mt-3 font-heading text-lg sm:text-xl font-semibold leading-snug">
              1,600 branches · 160 auditors · five audit types · live data
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-6"
          >
            <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">The cost</p>
            <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
              About <strong className="copy-accent">Rs 13 of AI cost</strong> each time Jago checks a branch,
              before setup and hosting. Checking all 1,600 branches costs about{" "}
              <strong className="copy-focus">Rs 21,000 in AI.</strong>
            </p>
          </motion.div>
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">What comes next</p>
          <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/90 text-pretty">
            Staff will ask questions in local languages, customers will give consent on WhatsApp, and Jago
            will flag likely fraud <em className="copy-aside">for a person to check.</em>
          </p>
        </div>

        <Link to="/contact" className="site-cta-primary group mt-10 gap-2 px-5 py-3 rounded-xl">
          Get your free 8-week plan
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}