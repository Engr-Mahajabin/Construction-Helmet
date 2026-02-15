export default function AboutHero() {
    return (
        <section className="max-w-[2480px] mx-auto">
            <div className="flex flex-col gap-6 px-16 py-16">
                <h1 className="text-6xl md:text-7xl font-black text-slate-900 uppercase leading-none">
                    Builing Timeless <br />spaces
                </h1>
                <p className="text-orange-600 font-bold uppercase text-sm mb-2">
                    our services
                </p>
            </div>
            <div className="mt-12 w-full h-[1000px]">
                <img
                    src="/img/about/about-bg.png"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}