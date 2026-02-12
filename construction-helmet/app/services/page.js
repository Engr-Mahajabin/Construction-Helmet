"use client";
import CTA from "@/components/home/CTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceHero from "@/components/services/ServiceHero";

const ServicePage = () => {
  return (
    <main className="max-w-[1280px] mx-auto px-4">
      <Navbar />
      <ServiceHero />
      <ServiceContent />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
};

export default ServicePage;
