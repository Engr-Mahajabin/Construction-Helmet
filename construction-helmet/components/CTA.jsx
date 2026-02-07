import { ArrowUpRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('/your-cta-bg.jpg')", backgroundColor: "black" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                    Excited To Start Your <br /> Next Construct?
                </h2>

                <button className="bg-[#ff5c35] text-white px-8 py-4 uppercase font-bold text-sm flex items-center gap-2 mx-auto hover:bg-[#e44d2a] transition-colors">
                    get a quote
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </section>
    );
}