'use client';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-yellow-600 font-bold text-sm tracking-widest uppercase mb-4">
                            <span className="w-2 h-2 bg-yellow-500"></span> About Us <span className="w-2 h-2 bg-yellow-500"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Focused On Excellence <br /> In Every Project
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Our unwavering commitment to excellence drives every project we undertake.
                            From concept to completion, we meticulously craft solutions that embody quality, precision and innovation.
                        </p>
                        <div className="mb-8">
                            <h3 className="text-2xl font-serif italic text-gray-800">John Doe</h3>
                            <p className="text-sm text-gray-400">Company CEO</p>
                        </div>
                        <button className="bg-yellow-500 text-black px-8 py-4 font-bold flex items-center gap-4 hover:bg-black hover:text-white transition">
                            CONTACT US <span className="bg-black text-white p-1 text-xs">↗</span>
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-500 z-0"></div>
                        <img
                            src="/img/about/img.jpg"
                            alt="Team"
                            className="relative z-10 w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}