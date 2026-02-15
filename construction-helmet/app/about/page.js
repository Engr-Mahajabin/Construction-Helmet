import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about/AboutCompany";
import AboutStats from "@/components/about/AboutStats";
import ExpertTeam from "@/components/home/ExpertTeam";
import TestimonialSlider from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Navbar />
      <AboutHero />
      <AboutCompany />
      <AboutStats />
      <ExpertTeam />
      <TestimonialSlider />
      <CTA />
      <Footer />
    </main>
  );
}
