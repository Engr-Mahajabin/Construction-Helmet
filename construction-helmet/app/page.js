import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
    </div>
  );
}
