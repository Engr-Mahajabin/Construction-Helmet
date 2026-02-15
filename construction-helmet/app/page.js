import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import ExpertTeam from "@/components/home/ExpertTeam";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-[2480px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonial />
      <ExpertTeam />
      <CTA />
      <Footer />
    </div>
  );
}
