"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

export default function DashboardPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.replace("/auth/login");
                return;
            }

            setUserEmail(session.user.email || "");
            setLoading(false);
        };

        checkUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/auth/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Memuat Dashboard...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-violet-700">
                            NextKasir
                        </h1>
                        <p className="text-sm text-gray-500">
                            Dashboard
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            {userEmail}
                        </span>

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <section className="max-w-7xl mx-auto p-6">

                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Selamat Datang 👋
                </h2>

                <p className="text-gray-500 mb-8">
                    Anda berhasil login ke NextKasir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-gray-500">Produk</h3>
                        <p className="text-4xl font-bold mt-3 text-violet-600">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-gray-500">Transaksi</h3>
                        <p className="text-4xl font-bold mt-3 text-blue-600">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-gray-500">Pelanggan</h3>
                        <p className="text-4xl font-bold mt-3 text-green-600">
                            0
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="text-gray-500">Pendapatan</h3>
                        <p className="text-4xl font-bold mt-3 text-orange-500">
                            Rp0
                        </p>
                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow mt-8 p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                        🚀 NextKasir Dashboard
                    </h3>

                    <p className="text-gray-500 mt-3">
                        Halaman ini masih tahap pengembangan.
                    </p>
                </div>

            </section>
        </main>
    );
}