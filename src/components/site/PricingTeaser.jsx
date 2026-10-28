import React from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";
import { useCurrency, formatPrice } from "@/lib/currency";

export default function PricingTeaser() {
  const { currency, rate } = useCurrency();
  const price = formatPrice(15999, currency, rate, 0, 219);
  return (
    <Reveal id="pricing-teaser" className="relative pb-0">
      <div className="relative mx-auto max-w-[1024px] px-5 sm:px-8 flex flex-col gap-8">
        <SectionIntro large eyebrow="Pricing" title={`Plans start at ${price} a\u00a0month.`}>
          Try any plan free for a week.
        </SectionIntro>

        <div className="flex flex-col gap-6 rounded-3xl border border-[#1e293b] bg-[#0f1317] p-6 sm:p-8 shadow-[0_16px_20px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="site-line font-ui text-xs font-semibold leading-5 text-primary">Starter plan</p>
            <p className="site-line text-sm leading-5 text-[#dde4ee]">Billed yearly · 7-day free trial</p>
          </div>

          <div className="flex items-baseline justify-center gap-2">
            <span className="font-ui text-[32px] sm:text-[36px] font-bold leading-none text-foreground">
              {price}
            </span>
            <span className="font-ui text-[32px] sm:text-[36px] font-bold leading-none text-foreground">a month</span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#1e293b] bg-[#0b0f14] p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(0,242,255,0.08)]">
              <Info className="h-4 w-4 text-primary" aria-hidden="true" />
            </span>
            <p className="site-line flex-1 text-center text-xs leading-5 text-[#dde4ee]">
              Team, Growth, Enterprise and own-server plans are also&nbsp;available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
            <Link
              to="/contact?intent=trial"
              className="inline-flex h-11 flex-1 basis-0 items-center justify-center rounded-xl bg-primary font-ui text-sm font-bold text-primary-foreground"
            >
              Book a free trial
            </Link>
            <Link
              to="/pricing"
              className="inline-flex h-11 flex-1 basis-0 items-center justify-center rounded-xl border border-primary bg-[#0f1317] px-5 font-ui text-sm font-semibold text-primary"
            >
              See all plans
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
