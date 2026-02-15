import { projectsData } from "@/data/ProjectsData";
import { notFound } from "next/navigation";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 max-w-[1280px]">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-yellow-500 font-medium">{project.category}</p>

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
