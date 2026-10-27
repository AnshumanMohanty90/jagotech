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
        <SectionIntro large eyebrow="Pricing" title={`Plans from ${price} a month.`}>
          Try any plan free for a week. Enterprise and own-server plans are also available.
        </SectionIntro>

        <div className="flex flex-col gap-6 rounded-3xl border border-[#1e293b] bg-[#0f1317] p-6 sm:p-8 shadow-[0_16px_20px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <p className="site-line font-ui text-sm font-semibold leading-5 text-primary">Starting plan</p>
              <p className="site-line text-base leading-6 text-[#dde4ee]">Monthly billing</p>
            </div>
            <span className="rounded-full border border-[#1e293b] bg-[#0b0f14] px-3 py-2 font-ui text-[13px] font-semibold leading-[18px] text-[#dde4ee]">
              7-day free trial
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="site-line font-ui text-sm font-semibold leading-5 text-[#dde4ee]">Monthly price</p>
            <div className="flex items-baseline justify-center gap-3">
              <span className="font-heading text-[56px] sm:text-[72px] font-bold leading-none tracking-[-0.028em] text-foreground">
                {price}
              </span>
              <span className="font-ui text-xl font-medium leading-7 text-[#dde4ee]">/mo</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#1e293b] bg-[#0b0f14] p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(0,242,255,0.08)]">
              <Info className="h-4 w-4 text-primary" aria-hidden="true" />
            </span>
            <p className="site-line flex-1 text-center text-sm leading-[22px] text-[#dde4ee]">
              Enterprise and own-server plans are also available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
            <Link
              to="/contact?intent=trial"
              className="inline-flex h-14 flex-1 items-center justify-center rounded-2xl bg-primary font-ui text-base font-bold text-primary-foreground"
            >
              Start free trial
            </Link>
            <Link
              to="/pricing"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-primary bg-[#0f1317] px-5 font-ui text-base font-semibold text-primary"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
