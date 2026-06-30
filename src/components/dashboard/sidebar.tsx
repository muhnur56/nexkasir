"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Tags,
    Users,
    UserCog,
    BarChart3,
    Settings,
    LogOut,
    Store,
} from "lucide-react";

const menus = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Kasir",
        href: "/dashboard/kasir",
        icon: ShoppingCart,
    },
    {
        title: "Produk",
        href: "/dashboard/produk",
        icon: Package,
    },
    {
        title: "Kategori",
        href: "/dashboard/kategori",
        icon: Tags,
    },
    {
        title: "Pelanggan",
        href: "/dashboard/pelanggan",
        icon: Users,
    },
    {
        title: "Karyawan",
        href: "/dashboard/karyawan",
        icon: UserCog,
    },
    {
        title: "Laporan",
        href: "/dashboard/laporan",
        icon: BarChart3,
    },
    {
        title: "Pengaturan",
        href: "/dashboard/pengaturan",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">

            <div className="h-16 flex items-center gap-3 px-6 border-b">
                <Image
                    src="/Icon.png"
                    alt="NextKasir Icon"
                    width={50}
                    height={50}
                    className="w-10 h-10 object-contain"
                />

                <div>
                    <Image
                        src="/Logo_font.png"
                        alt="NextKasir Icon"
                        width={70}
                        height={50}
                        className="w-40 h-10 object-contain"
                    />

                    <p className="text-xs text-gray-500 text px-2">
                        Owner Panel
                    </p>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 py-6 px-4 space-y-2">

                {menus.map((menu) => {

                    const Icon = menu.icon;
                    const active = pathname === menu.href;

                    return (
                        <Link
                            key={menu.title}
                            href={menu.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                            ${active
                                    ? "bg-violet-600 text-white shadow"
                                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{menu.title}</span>
                        </Link>
                    );
                })}

            </nav>

            {/* Logout */}
            <div className="p-4 border-t">

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>
    );
}