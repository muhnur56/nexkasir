"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Fitur", href: "#fitur" },
    { name: "Tentang", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">
                    {/* Logo */}
                    <a href="#home" className="flex flex-col items-center">
                        <Image
                            src="/Logo.png"
                            alt="NexKasir Logo"
                            width={98}
                            height={98}
                            priority
                        />
                        {/* <span className="font-mono text-[7px] md:text-[8px] text-gray-600 tracking-[2px] uppercase">
                            Aplikasi Kasir
                        </span> */}
                    </a>

                    {/* Desktop Menu + Button */}
                    <div className="hidden md:flex items-center gap-8 ml-auto font-medium">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-gray-700 transition-colors hover:text-violet-700"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="hidden items-center gap-3 md:flex">
                            <Link
                                href="/login"
                                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Masuk
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-lg bg-violet-700 px-4 py-2 text-white hover:bg-violet-800"
                            >
                                Daftar
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-auto text-gray-700 md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="border-t border-gray-200 bg-white md:hidden">
                        <div className="flex flex-col py-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-2 py-3 text-gray-700 transition hover:text-violet-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}

                            import Link from "next/link";

                            <div className="mt-4 flex flex-col gap-3 px-2">
                                <Link
                                    href="/login"
                                    className="rounded-lg border border-gray-300 px-4 py-2 text-center text-gray-700 transition hover:bg-gray-100"
                                >
                                    Masuk
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-lg bg-violet-700 px-4 py-2 text-center text-white transition hover:bg-violet-800"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}