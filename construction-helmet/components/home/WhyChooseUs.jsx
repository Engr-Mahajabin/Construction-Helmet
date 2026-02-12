import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function WhyChooseUs() {
    const data = [
        { id: "item-1", title: "QUALITY CRAFTSMANSHIP", content: "We deliver top-tier quality in every project." },
        { id: "item-2", title: "CLIENT-CENTERED APPROACH", content: "Our clients are at the heart of everything we do." },
        { id: "item-3", title: "SAFETY COMES FIRST", content: "Rigorous safety standards for every worksite." },
        { id: "item-4", title: "SUSTAINABLE PRACTICES", content: "Eco-friendly building solutions for a better future." },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-gray-500">
                    why choose us
                </span>
                <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-[1.1] uppercase">
                    Where Trust <br /> Meets Excellence
                </h2>
            </div>
            <div className="w-full">
                <Accordion type="single" collapsible className="w-full border-t border-black/10">
                    {data.map((item) => (
                        <AccordionItem key={item.id} value={item.id} className="border-b border-black/10">
                            <AccordionTrigger className="py-6 text-xl font-bold hover:no-underline uppercase text-left">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6 text-lg">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}