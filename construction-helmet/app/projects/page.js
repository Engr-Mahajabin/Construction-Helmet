import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/ProjectsData";

export default function ProjectsListPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* পেজ হেডার (ঐচ্ছিক) */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 uppercase leading-none">
              Transform Vision <br /> into reality
            </h1>
            <p className="text-orange-600 font-bold uppercase text-sm tracking-widest mb-2">
              explore our projects
            </p>
          </div>

          {/* প্রোজেক্ট গ্রিড - ছবিতে যেমন ৩টি কলাম ছিল */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
