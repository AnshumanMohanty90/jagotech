import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const POINTS = [
  "You decide who can see and do what.",
  "A person approves the key steps before anything changes.",
  "Every action is on record, ready for an audit.",
  "You choose which AI is used for each task.",
  "Jago can run on your own servers.",
  "Your data stays in India.",
];

export default function SecurityPoints() {
  return (
    <section className="relative pt-4 pb-16 overflow-hidden">
      <div className="absolute -right-32 top-10 w-[32rem] h-[32rem] rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <ul className="border-t border-border">
          {POINTS.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-border py-4 flex items-start gap-3"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-base sm:text-lg leading-relaxed text-foreground/90">{p}</span>
            </motion.li>
          ))}
        </ul>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
          Security certification (SOC 2 and ISO 27001, two global standards) is under way.
        </p>

        <Link to="/contact?intent=enterprise" className="site-cta-primary group mt-8 gap-2 px-5 py-3 rounded-xl">
          Talk to us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}