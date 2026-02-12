import { ArrowUpRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black">
            <div className="relative z-10 text-center px-6">
                <h2 className="text-white text-4xl md:text-6xl font-bold uppercase mb-8">
                    Excited To Start Your <br /> Next Construct?
                </h2>
                <button className="bg-yellow-500 text-white px-8 py-4 uppercase font-bold text-sm flex items-center gap-2 mx-auto hover:bg-yellow-600 transition-colors">
                    get a quote
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </section>
    );
}