export default function AboutHero() {
    return (
        <section className="px-6 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <h1 className="text-6xl md:text-7xl font-black text-slate-900 uppercase leading-none">
                    Crafting <br /> Structures for a <br /> better future
                </h1>
                <p className="text-orange-600 font-bold uppercase text-sm tracking-widest mb-2">
                    about our structa construction company
                </p>
            </div>
            <div className="mt-12 w-full h-[500px]">
                <img
                    src="/img/about/about-bg.png"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}