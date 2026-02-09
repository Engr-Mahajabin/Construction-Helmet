import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/projects/ProjectCard"; // আপনার ফোল্ডার পাথ অনুযায়ী
import { projectsData } from "@/data/ProjectsData";

export default function ProjectsListPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* পেজ হেডার (ঐচ্ছিক) */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of commercial, residential, and
              industrial construction excellence.
            </p>
          </div>

          {/* প্রোজেক্ট গ্রিড - ছবিতে যেমন ৩টি কলাম ছিল */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
