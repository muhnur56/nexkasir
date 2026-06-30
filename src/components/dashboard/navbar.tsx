"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

import {
    Bell,
    Search,
    ChevronDown,
    User,
    Settings,
    LogOut,
} from "lucide-react";

interface NavbarProps {
    title: string;
}

export default function Navbar({ title }: NavbarProps) {
    const router = useRouter();

    const [openMenu, setOpenMenu] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/auth/login");
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    {title}
                </h1>
                {/* <p className="text-sm text-gray-500">
                    Selamat datang di NextKasir 👋
                </p> */}
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">

                    <Search
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Cari..."
                        className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    />

                </div>

                {/* Notification */}
                <button className="relative w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center">

                    <Bell
                        size={20}
                        className="text-gray-600"
                    />

                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

                </button>

                {/* Profile */}
                <div
                    className="relative"
                    ref={menuRef}
                >

                    <button
                        onClick={() =>
                            setOpenMenu(!openMenu)
                        }
                        className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-100 transition"
                    >

                        <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-semibold">
                            M
                        </div>

                        <div className="hidden md:block text-left">

                            <h2 className="text-sm font-semibold text-gray-800">
                                Muhammad Nur
                            </h2>

                            <p className="text-xs text-gray-500">
                                Owner
                            </p>

                        </div>

                        <ChevronDown
                            size={18}
                            className={`text-gray-500 transition-transform duration-300 ${
                                openMenu
                                    ? "rotate-180"
                                    : ""
                            }`}
                        />

                    </button>

                    {openMenu && (
                        <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50">

                            {/* Header */}
                            <div className="px-5 py-4 border-b">

                                <h3 className="font-semibold text-gray-800">
                                    Muhammad Nur
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Owner
                                </p>

                            </div>

                            {/* Menu */}

                            <button
                                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition text-gray-700"
                            >

                                <User size={18} />

                                Profil Saya

                            </button>

                            <button
                                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition text-gray-700"
                            >

                                <Settings size={18} />

                                Pengaturan

                            </button>

                            <div className="border-t"></div>

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-500 transition"
                            >

                                <LogOut size={18} />

                                Logout

                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}