"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
            const controls = animate(count, numericValue, {
                duration: 2.5,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref} className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none flex items-center">
            <motion.span>{rounded}</motion.span>
            {value.includes("%") && <span>%</span>}
        </span>
    );
};

export default function AboutStats() {
    const stats = [
        { label: "Happy Clients", value: "630" },
        { label: "Successfully Completed", value: "2400" },
        { label: "Material Used", value: "98%" },
    ];

    return (
        <section className="max-w-[1600px] mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 h-[500px] md:h-[650px] w-full overflow-hidden">
                    <img
                        src="/img/about/about-stats.png"
                        className="w-full h-full object-cover shadow-2xl hover:scale-105 transition-transform duration-700"
                        alt="Construction Stats"
                    />
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-16 lg:pl-10">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col group">
                            <Counter value={item.value} />
                            <span className="text-gray-500 uppercase font-black text-sm md:text-base tracking-[0.3em] mt-4 group-hover:text-orange-600 transition-colors">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}