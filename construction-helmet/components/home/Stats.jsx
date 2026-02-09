'use client';

import { useEffect, useRef, useState } from 'react';

const Counter = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let start = 0;
                    const duration = 2000;
                    const stepTime = 20;
                    const increment = value / (duration / stepTime);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, stepTime);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold">
            {count}
            {suffix}
        </div>
    );
};

export default function Stats() {
    const stats = [
        { label: 'Client Satisfaction', value: 75, suffix: '%' },
        { label: 'Successful Projects', value: 608, suffix: '+' },
        { label: 'Happy Clients', value: 24, suffix: 'k' },
        { label: 'Years of Experience', value: 20, suffix: '+' },
    ];

    return (
        <section className="bg-[#111] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="text-gray-400 text-xs md:text-sm mt-2 uppercase tracking-widest">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
