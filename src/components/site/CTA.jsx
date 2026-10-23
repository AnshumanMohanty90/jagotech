import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LeadForm from "@/components/site/LeadForm";

export default function CTA() {
  return (
    <section id="contact" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
            Bring one process. We will show you Jago running it{" "}
            <span className="whitespace-nowrap text-primary text-glow">in 8 weeks.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-balance">
            Tell us the work that takes your team the most time. In one call, we map it and give you a{" "}
            <strong className="copy-accent">free 8-week plan</strong>.
          </p>

          <div className="mt-8 mx-auto max-w-xl text-left">
            <LeadForm intent="plan" buttonLabel="Get my 8-week plan" />
          </div>

          <div className="mt-8">
            <Link to="/contact?intent=trial" className="site-cta-secondary px-5 py-3 rounded-xl">
              Try it free for a week
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}