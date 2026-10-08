import React from "react";
import { motion } from "framer-motion";
import { FileText, Video, AudioLines, ArrowUpRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const ADDONS = [
  {
    icon: FileText,
    tag: "Read",
    title: "Documents and OCR",
    desc: "Ingest PDFs, scans, contracts and spreadsheets. Extract structured data and ask questions across your entire document library.",
  },
  {
    icon: Video,
    tag: "Watch",
    title: "Video intelligence",
    desc: "See what is inside your recordings: meetings, training and screen captures, without rewatching a single minute of them.",
  },
  {
    icon: AudioLines,
    tag: "Listen",
    title: "Audio and call analytics",
    desc: "Transcribe and analyze calls and voice notes at scale. Catch sentiment, compliance gaps and trends the moment they happen.",
  },
];

export default function GenAIAddons() {
  return (
    <section id="addons" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="06 · GenAI add-ons" title="Read. Watch. Listen.">
          <strong className="copy-focus">Text, audio and video in one AI.</strong>{" "}
          <em className="copy-aside">Stop paying three vendors</em> for what one suite already does.
        </SectionIntro>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-3 gap-5">
          {ADDONS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative rounded-3xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl border border-border bg-background/60">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{a.tag}</span>
                </div>
                <h3 className="relative mt-6 font-heading text-xl font-semibold">{a.title}</h3>
                <p className="relative mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={a.desc} bold={["structured data", "sentiment, compliance gaps and trends"]} italic={["without rewatching a single minute of them"]} />
                </p>
                <a href="#contact" className="site-cta-secondary relative mt-6 self-start gap-1.5 px-4 py-2.5 rounded-xl text-sm">
                  Start your trial
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}