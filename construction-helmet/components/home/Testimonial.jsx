"use client";
import * as React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/TestimonialsData";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialSlider() {
    const [api, setApi] = React.useState();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="relative w-full bg-white pt-24 pb-0 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-20">
                <Carousel
                    setApi={setApi}
                    plugins={[Autoplay({ delay: 5000 })]}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className="bg-[#181818] text-white p-10 md:p-16 lg:p-20 min-h-[450px] flex flex-col justify-between">
                                    <div>
                                        <div className="flex gap-1 mb-8">
                                            <Quote
                                                size={48}
                                                strokeWidth={1.5}
                                                className="text-[#ff5c35] -scale-x-100"
                                            />
                                        </div>

                                        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight mb-12">
                                            “ {item.quote} ”
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-end border-t border-white/10 pt-8">
                                        <div>
                                            <h4 className="font-bold text-lg uppercase tracking-widest">
                                                {item.author}
                                            </h4>
                                            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                                                {item.role}
                                            </p>
                                        </div>

                                        <div className="flex gap-3 mb-2">
                                            {testimonials.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => api?.scrollTo(i)}
                                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${current === i ? "bg-white scale-125" : "bg-gray-600"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="-mt-40 w-full h-[500px] relative z-10">
                <Image
                    src="/img/testimonials/testimonial_bg.jpg"
                    alt="Construction Site Detail"
                    fill
                    priority
                    className="object-cover brightness-[0.5] contrast-125"
                />
            </div>
        </section>
    );
}