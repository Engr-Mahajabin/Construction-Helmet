export default function AboutCompany() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col gap-10">
                <div className="max-w-4xl">
                    <p className="text-yellow-600 font-bold uppercase text-xs tracking-widest mb-4">
                        about company
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-tight tracking-tighter">
                        CRAFTING YOUR VISION. TURNING INNOVATIVE IDEAS INTO LASTING & SUSTAINABLE STRUCTURES, WITH YEARS OF EXPERTISE
                    </h2>
                </div>
                <div className="max-w-3xl space-y-8">
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                        Structa construction is a leader in the world of construction, known for delivering high-quality projects.
                        We focus on innovative and sustainable solutions that exceed our clients' expectations. Our team is
                        committed to excellence, from large-scale commercial renovations to detailed project management.
                    </p>
                    <button className="bg-yellow-600 text-white px-8 py-4 font-bold uppercase flex items-center gap-2 hover:bg-slate-900 transition-all group w-fit">
                        explore services
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </button>
                </div>
            </div>
        </section>
    );
}