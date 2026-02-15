export default function AboutHero() {
    return (
        <section className="max-w-[2480px] mx-auto">
            <div className="flex flex-col gap-6 px-16 py-16">
                <h1 className="text-6xl md:text-7xl font-black text-slate-900 uppercase leading-none">
                    Crafting <br /> Structures for a <br /> better future
                </h1>
                <p className="text-yellow-600 font-bold uppercase text-sm tracking-widest mb-2">
                    about our construct construction company
                </p>
            </div>
            <div className="mt-12 w-full h-[1000px] mx-auto">
                <img
                    src="/img/about/about-bg.png"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}