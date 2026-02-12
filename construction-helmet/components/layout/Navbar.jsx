'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-black/90 text-white sticky top-0 z-50 backdrop-blur-md">
            <div className="flex justify-between items-center px-6 md:px-16 py-5">
                <h2 className="text-xl font-bold italic">
                    CONSTRUCT<span className="text-yellow-500">.</span>
                </h2>
                <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold ml-auto">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-yellow-500 transition">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="hidden md:block ml-12 bg-yellow-500 text-black px-5 py-2 text-xs font-bold hover:bg-white transition">
                    FREE QUOTE
                </button>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black/95 border-t border-gray-800">
                    <ul className="flex flex-col gap-4 p-6 text-sm uppercase font-semibold text-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 hover:text-yellow-500 transition"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="w-full bg-yellow-500 text-black px-5 py-3 text-xs font-bold mt-2">
                                FREE QUOTE
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}