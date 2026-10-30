import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/site/Logo";

const COLS = [
  {
    title: "Platform",
    links: [
      { label: "Capabilities", href: "/platform" },
      { label: "Solutions", href: "/solutions" },
      { label: "Security", href: "/security" },
      { label: "DPDP Assessment", href: "/compliance" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Data analysis", href: "/platform#analyze" },
      { label: "Document analysis", href: "/platform#ask" },
      { label: "Agentic AI", href: "/platform#automate" },
      { label: "Voice-to-text", href: "/platform" },
      { label: "All capabilities", href: "/platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "HR", href: "/role-wins" },
      { label: "Sales", href: "/role-wins" },
      { label: "Finance", href: "/role-wins" },
      { label: "Customer Support", href: "/role-wins" },
    ],
  },
];

const CONTACTS = [
  { label: "administrator@jago-tech.ai", href: "mailto:administrator@jago-tech.ai" },
  { label: "transformsales@v-align.in", href: "mailto:transformsales@v-align.in" },
  { label: "+91 98805 66044", href: "tel:+919880566044" },
  { label: "+91 82176 42460", href: "tel:+918217642460" },
];

const CERTS = [
  { src: "data:image/webp;base64,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", alt: "ISO 27001 Certified", w: 51 },
  { src: "data:image/webp;base64,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", alt: "IAF International Accreditation Forum", w: 128 },
  { src: "data:image/webp;base64,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", alt: "JAS-ANZ", w: 76 },
  { src: "data:image/webp;base64,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", alt: "IQC Global", w: 84 },
  { src: "data:image/webp;base64,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", alt: "CRISCOD Australia Secure by Design", w: 80 },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Refunds", href: "/refund-policy" },
  { label: "Compliance", href: "/compliance" },
  { label: "Security", href: "/security" },
];

const linkCls = "site-inline-link text-sm text-foreground/90 hover:text-primary transition-colors";

export default function Footer({ logoVariant }) {
  return (
    <footer className="relative site-section-alt">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link to="/#top" className="inline-flex min-h-[44px] items-center" aria-label="Jago AI home">
              <Logo variant={logoVariant} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 site-line text-base text-[#dde4ee] max-w-sm leading-[1.6]">
              One AI platform. Every department. Infinite possibilities. The enterprise AI powerhouse that
              turns scattered data into strategic advantage.
            </p>

            <p className="mt-6 site-label">Contact Us</p>
            <ul className="mt-2 space-y-1.5">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className={linkCls}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-[#f5a25d]/60 bg-[#fff7ef] px-3 py-2">
              <span aria-hidden="true" className="text-lg leading-none">🇮🇳</span>
              <span className="leading-tight">
                <span className="block text-xs font-semibold text-[#e8590c]">Startup India Registered</span>
                <span className="block text-[11px] text-[#3b3b3b]">DPIIT Recognised</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="site-label">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="site-line mx-auto text-xs font-semibold tracking-[0.18em] text-[#dde4ee]">CERTIFIED &amp; RECOGNISED</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {CERTS.map((c) => (
              <li key={c.alt} className="flex h-14 items-center rounded-md bg-white px-2.5">
                <img src={c.src} alt={c.alt} width={c.w / 2} height={40} loading="lazy" className="h-10 w-auto" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="site-line text-sm text-[#dde4ee] text-center md:text-left">
            © 2026 Jago AI Technologies Private Limited. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
