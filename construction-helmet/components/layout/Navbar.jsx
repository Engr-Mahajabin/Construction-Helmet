'use client';
import Link from 'next/link';

export default function Navbar() {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-black/90 text-white sticky top-0 z-50 backdrop-blur-md">
            <h2 className="text-xl font-bold italic ml-16">
                CONSTRUCT<span className="text-yellow-500">.</span>
            </h2>

            <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold ml-auto">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="hover:text-yellow-500 transition scroll-smooth">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button className="ml-12 bg-yellow-500 text-black px-5 py-2 text-xs font-bold hover:bg-white transition">
                FREE QUOTE
            </button>
        </nav>
    );
}