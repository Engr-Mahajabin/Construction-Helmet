'use client';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/ProjectsData';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex justify-center items-center gap-2 text-yellow-600 font-bold text-sm tracking-widest uppercase mb-4">
                    <span className="w-2 h-2 bg-yellow-500"></span> Our Work <span className="w-2 h-2 bg-yellow-500"></span>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase italic">
                        Discover Our <span className="text-yellow-500">Latest Projects</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Providing expert services designed to deliver quality and innovation in every project we undertake.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden bg-gray-100 cursor-pointer shadow-lg"
                        >
                            {/* Project Image */}
                            <div className="h-72 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay Content (Hover hole dekhabe) */}
                            <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">
                                    {project.category}
                                </p>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                <div className="mt-4 w-10 h-1 bg-yellow-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center">
                    <button className="bg-yellow-500 text-black px-10 py-4 font-bold uppercase text-sm hover:bg-black hover:text-white transition-all duration-300">
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
}