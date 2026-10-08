import React from "react";
import { motion } from "framer-motion";
import { Languages, MessagesSquare, Database, Zap, Check } from "lucide-react";
import ChannelSimulator from "@/components/site/ChannelSimulator";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const FEATURES = [
  {
    icon: Languages,
    title: "50+ local languages",
    desc: "Speak or text in Hindi, Tamil, English or regional dialects, with speech-to-intent parsing.",
  },
  {
    icon: MessagesSquare,
    title: "Chat apps they already use",
    desc: "Native assistants inside WhatsApp Business, Zoho Cliq, Google Chat and Microsoft Teams.",
  },
  {
    icon: Database,
    title: "Talk to data and docs",
    desc: "Question spreadsheets, internal SQL databases and scanned paper. No analyst required.",
  },
  {
    icon: Zap,
    title: "Direct action execution",
    desc: "Approve workflows, raise invoices and dispatch alerts, right from the chat.",
  },
];

const CHANNELS = ["WhatsApp Business", "Zoho Cliq", "Google Chat", "Microsoft Teams"];

export default function Channels() {
  return (
    <section id="channels" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="02 · Ease of use"
          title="In any language, inside the apps they already use."
        >
          <strong className="copy-accent">Zero new software to learn.</strong> People send
          voice notes, photos or plain messages, <em className="copy-aside">and Jago does the rest.</em>
        </SectionIntro>

        <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/30 transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl border border-border bg-background/60">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">{f.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  <CopyEmphasis text={f.desc} bold={["Hindi, Tamil, English", "Native assistants", "internal SQL databases", "Approve workflows"]} italic={["No analyst required."]} />
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">
            Native channels
          </span>
          {CHANNELS.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-background/60 text-sm text-foreground/80"
            >
              <Check className="w-3.5 h-3.5 text-primary" />
              {c}
            </span>
          ))}
        </div>

        <ChannelSimulator />
      </div>
    </section>
  );
}