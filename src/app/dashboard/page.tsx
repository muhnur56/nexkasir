"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

export default function DashboardPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.replace("/auth/login");
                return;
            }

            setLoading(false);
        };

        checkUser();
    }, [router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {/* Isi Dashboard */}

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Selamat Datang 👋
            </h2>

            <p className="text-gray-500 mb-8">
                Anda berhasil login ke NextKasir.
            </p>

            {/* Statistik nanti */}
        </>
    );
}