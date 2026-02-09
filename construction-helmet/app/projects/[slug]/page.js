import { projectsData } from "@/data/ProjectsData";
import { notFound } from "next/navigation";

// ফাংশনের আগে 'async' কীওয়ার্ড যোগ করুন
export default async function ProjectDetailsPage({ params }) {
  // ১. params-কে await করে slug বের করে নিন
  const { slug } = await params;

  // ২. স্ল্যাগ অনুযায়ী ডাটা ফিল্টার করুন
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-orange-500 font-medium">{project.category}</p>

      <div className="mt-8">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full max-w-4xl"
        />
        <p className="mt-6 text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
