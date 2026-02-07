'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/ServicesData';

export default function Services() {
    const [activeTab, setActiveTab] = useState(servicesData[0]);

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center gap-2 text-yellow-600 font-bold text-sm tracking-widest uppercase mb-4 w-full">
                    <span className="w-2 h-2 bg-yellow-500"></span>
                    Our Services
                    <span className="w-2 h-2 bg-yellow-500"></span>
                </div>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase italic">Solutions We <span className="text-yellow-500">Provide</span></h2>
                    <p className="text-gray-500 mt-2">Offering tailored construction solutions from planning to completion.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDE: Tabs Menu */}
                    <div className="lg:col-span-3 flex flex-col gap-2">
                        {servicesData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item)}
                                className={`flex items-center gap-4 p-5 font-bold transition-all text-sm tracking-widest uppercase
                  ${activeTab.id === item.id ? 'bg-black text-white' : 'bg-white text-gray-400 hover:bg-gray-100'}`}
                            >
                                <span className={`p-2 ${activeTab.id === item.id ? 'bg-white text-black' : 'bg-yellow-500 text-black'}`}>
                                    {item.icon}
                                </span>
                                {item.id}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Dynamic Content */}
                    <div className="lg:col-span-9 bg-white p-10 shadow-xl min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 gap-10"
                            >
                                {/* Images */}
                                <div className="grid grid-rows-2 gap-4">
                                    {activeTab.images.map((img, idx) => (
                                        <div key={idx} className="bg-gray-200 h-48 w-full overflow-hidden">
                                            <img src={img} className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="work" />
                                        </div>
                                    ))}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">{activeTab.title}</h3>
                                    <p className="text-gray-500 mb-6 leading-relaxed">{activeTab.desc}</p>

                                    <ul className="grid grid-cols-2 gap-3 mb-8">
                                        {activeTab.points.map((p) => (
                                            <li key={p} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <span className="text-yellow-500 font-bold">▪</span> {p}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="bg-yellow-500 text-black px-8 py-3 font-bold flex items-center gap-3 hover:bg-black hover:text-white transition">
                                        READ MORE <span className="bg-black text-white p-1 text-[10px]">↗</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}