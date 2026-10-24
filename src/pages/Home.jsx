import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ProofStrip from "@/components/site/ProofStrip";
import Challenge from "@/components/site/Challenge";
import ModuleSwitcher from "@/components/site/ModuleSwitcher";
import HowItWorks from "@/components/site/HowItWorks";
import CustomerStory from "@/components/site/CustomerStory";
import RoleWins from "@/components/site/RoleWins";
import Trust from "@/components/site/Trust";
import PricingTeaser from "@/components/site/PricingTeaser";
import CTA from "@/components/site/CTA";
import SectionNav from "@/components/site/SectionNav";

const SECTIONS = [
  { id: "problem", label: "The problem" },
  { id: "modules", label: "Modules" },
  { id: "how", label: "How it works" },
  { id: "story", label: "Customer story" },
  { id: "solutions", label: "By role" },
  { id: "trust", label: "Trust" },
  { id: "pricing-teaser", label: "Pricing" },
];
import Footer from "@/components/site/Footer";

export default function Home() {
  usePageMeta(
    "Jago AI | Put AI to work across your company in 8 weeks",
    "Jago AI puts AI agents to work in Indian companies in 8 weeks. Ask questions in 50+ languages, automate routine updates and get early warnings, with customer data kept within India's data law."
  );
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <SectionNav items={SECTIONS} />
      <main id="main-content">
        <Hero />
        <ProofStrip />
        <Challenge />
        <ModuleSwitcher />
        <HowItWorks />
        <CustomerStory />
        <RoleWins />
        <Trust />
        <PricingTeaser />
        <CTA tinted />
      </main>
      <Footer />
    </div>
  );
}