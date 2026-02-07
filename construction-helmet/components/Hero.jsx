'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center bg-black overflow-hidden text-white">
            {/* Background Image */}
            <img src="/img/hero/bg2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" alt="bg" />

            <div className="container mx-auto px-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold uppercase italic">
                        Build Your <br /> <span className="text-yellow-500">Dream</span> House Today
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-md">Quality construction services for your next dream project.</p>

                    <div className="mt-8 flex gap-4 font-bold">
                        <button className="bg-yellow-500 text-black px-6 py-3 hover:scale-105 transition">Get Quote</button>
                        <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition">Our Work</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}