import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

export default function PricingTeaser() {
  return (
    <Reveal id="pricing-teaser" className="relative pb-0">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Pricing" title="Plans from Rs 15,000 a month.">
          Try any plan free for a week. Enterprise and own-server plans are also available.
        </SectionIntro>
        <Link
          to="/pricing"
          className="mt-6 inline-block text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
        >
          See pricing
        </Link>
      </div>
    </Reveal>
  );
}