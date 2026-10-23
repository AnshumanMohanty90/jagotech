import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/site/Navbar";
import Industries from "@/components/site/Industries";
import Footer from "@/components/site/Footer";

export default function IndustriesPage() {
  usePageMeta("Industries | Jago AI");
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Industries />
      </main>
      <Footer />
    </div>
  );
}