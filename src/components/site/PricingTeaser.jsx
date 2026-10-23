import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/site/SectionIntro";

export default function PricingTeaser() {
  return (
    <section id="pricing-teaser" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <SectionIntro eyebrow="Pricing" title="Plans from Rs 15,000 a month.">
            Try any plan free for a week. Enterprise and own-server plans are also available.
          </SectionIntro>
          <Link
            to="/pricing"
            className="mt-6 inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            See pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}