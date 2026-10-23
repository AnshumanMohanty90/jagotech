import React from "react";
import Navbar from "@/components/site/Navbar";
import Industries from "@/components/site/Industries";
import Footer from "@/components/site/Footer";

export default function IndustriesPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-16 pb-12 sm:pb-16">
        <Industries />
      </main>
      <Footer />
    </div>
  );
}