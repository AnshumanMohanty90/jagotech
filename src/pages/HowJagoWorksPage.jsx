import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import HowJagoWorks from "@/components/site/HowJagoWorks";
import Footer from "@/components/site/Footer";

export default function HowJagoWorksPage() {
  usePageMeta("How Jago Works | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <HowJagoWorks />
      </main>
      <Footer />
    </div>
  );
}