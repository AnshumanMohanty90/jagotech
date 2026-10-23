import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, children, showActions = true }) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 max-w-5xl"
        >
          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-3 font-heading font-semibold leading-tight tracking-tight text-balance">
            {title}
          </h1>
          {children && (
            <p className="mt-3 sm:mt-4 max-w-[75ch] text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
              {children}
            </p>
          )}
          {showActions && (
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact?intent=trial" className="site-cta-primary px-5 py-3 rounded-xl">
                Try it free for a week
              </Link>
              <Link to="/contact?intent=plan" className="site-cta-secondary px-5 py-3 rounded-xl">
                Download the 8-week plan
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}