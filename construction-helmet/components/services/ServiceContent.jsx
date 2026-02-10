"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProgressBar = ({ label, percentage }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="space-y-2" ref={ref}>
            <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 uppercase text-sm tracking-wider">
                    {label}
                </span>
                <span className="text-sm font-bold text-gray-500">{percentage}%</span>
            </div>
            <div className="w-full h-[2px] bg-gray-200 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-orange-600"
                />
            </div>
        </div>
    );
};

export default function ServiceContent() {
    const skills = [
        { label: "Building Construction", percentage: 95 },
        { label: "Interiors Design", percentage: 70 },
        { label: "Renovations and Remodeling", percentage: 85 },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Image */}
                <div className="relative h-[500px] md:h-[600px]">
                    <img
                        src="/img/testimonials/img.jpg"
                        alt="Workers discussing"
                        className="w-full h-full object-cover rounded-sm"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="space-y-8">
                    <div>
                        <p className="text-orange-600 font-bold uppercase text-xs tracking-[0.2em] mb-4">
                            why choose structa
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-[1.1] tracking-tighter">
                            TRANSFORMING SPACES & ENRICHING LIVES WITH STRUCTA
                        </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Construction is a premier construction company dedicated to delivering exceptional
                        projects characterized by quality, innovation, and client satisfaction. With a
                        strong foundation built on years of industry expertise.
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-8 pt-4">
                        {skills.map((skill, index) => (
                            <ProgressBar
                                key={index}
                                label={skill.label}
                                percentage={skill.percentage}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}