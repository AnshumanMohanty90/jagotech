import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="contact" className="relative site-section overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
            Try Jago free for a week.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-pretty">
            Activate a trial workspace and see what Jago does on sample data. Want the roll-out plan
            first? Download the 8-week plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
              Try it free for a week
            </Link>
            <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
              Download the 8-week plan
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}