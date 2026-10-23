import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import PageHeader from "@/components/site/PageHeader";
import Footer from "@/components/site/Footer";

export default function AboutPage() {
  return (
    <div className="site-typography relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <PageHeader eyebrow="About" title="We build AI that Indian companies can trust with their data.">
          Jago AI was founded in Bengaluru in February 2026. We are recognised by Startup India and were
          chosen in the top 200 of more than 11,000 applicants to the UAE-India Start-Up Series 2.0.
        </PageHeader>
        <section className="pt-4 pb-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Link to="/contact" className="site-cta-primary group gap-2 px-5 py-3 rounded-xl">
              Get your free 8-week plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}