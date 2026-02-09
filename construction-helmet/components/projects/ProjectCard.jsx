import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ProjectCard({ project }) {
    return (
        <Card className="group relative overflow-hidden border-none shadow-lg">
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-orange-600 font-semibold text-sm">{project.category}</p>

                {/* লিঙ্কে এখন slug ব্যবহার হচ্ছে */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:bg-orange-500 hover:text-white"
                >
                    <ArrowRight size={20} />
                </Link>
            </div>
        </Card>
    );
}