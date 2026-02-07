import About from "@/components/About";
import CTA from "@/components/CTA";
import ExpertTeam from "@/components/ExpertTeam";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
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
