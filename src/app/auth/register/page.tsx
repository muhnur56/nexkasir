"use client";

import { useEffect, useState } from "react";
import { registerUser } from "@/src/services/auth/register";
import { Eye, EyeOff } from "lucide-react";

const slides = [
    {
        color: "bg-violet-600",
        shape: "bg-violet-500",
        image: "/slide1.png",
        title: "Kelola Toko Anda dengan Lebih Mudah",
        description:
            "Kelola produk, transaksi, stok, pelanggan, dan laporan penjualan dalam satu platform.",
    },
    {
        color: "bg-blue-600",
        shape: "bg-blue-500",
        image: "/slide2.png",
        title: "Lebih Mudah dan Cepat Melakukan Transaksi",
        description:
            "Dari katalog online hingga kasir, semua bisa dilakukan dengan cepat dan efisien.",
    },
    {
        color: "bg-orange-500",
        shape: "bg-orange-400",
        image: "/slide3.png",
        title: "Digitalisasi Usahamu untuk Pembukuan yang Lebih Baik",
        description:
            "Buat catatan usahamu lebih rapi, profesional, dan aman setiap hari.",
    },
];

export default function RegisterPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ownerName, setOwnerName] = useState("");
    const [storeName, setStoreName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Konfirmasi password tidak sama.");
            return;
        }

        setLoading(true);

        const result = await registerUser({
            ownerName,
            storeName,
            email,
            password,
        });

        setLoading(false);

        if (!result.success) {
            alert(result.message);
            return;
        }

        alert("Pendaftaran berhasil. Silakan cek email Anda.");
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <main className="h-screen flex overflow-hidden">
            {/* Left Side */}
            <div
                className={`hidden lg:flex lg:w-[62%] h-screen sticky top-0 relative overflow-hidden transition-colors duration-700 ${slides[currentSlide].color}`}
            >
                {/* Decorative Shapes */}
                <div
                    className={`absolute top-20 right-20 w-96 h-96 rounded-[80px] rotate-45 opacity-30 transition-colors duration-700 ${slides[currentSlide].shape}`}
                />

                <div
                    className={`absolute -bottom-20 left-10 w-80 h-80 rounded-[60px] rotate-45 opacity-20 transition-colors duration-700 ${slides[currentSlide].shape}`}
                />

                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 text-white">

                    {/* Preview Image */}
                    <img
                        src={slides[currentSlide].image}
                        alt="NextKasir Preview"
                        className="w-[320px] xl:w-[380px] mb-8"
                    />

                    {/* Title */}
                    <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-4 max-w-xl">
                        {slides[currentSlide].title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-white/90 max-w-md">
                        {slides[currentSlide].description}
                    </p>

                    {/* Indicator */}
                    <div className="absolute bottom-16 left-12 xl:left-16 flex gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "w-8 bg-white"
                                    : "w-3 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-[38%] h-screen overflow-y-auto bg-gray-50 flex justify-center px-4">
                <div className="w-full max-w-[360px] py-12 pb-20">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <img
                            src="/Logo.png"
                            alt="NextKasir Logo"
                            className="w-60 mx-auto"
                        />

                        <p className="text-gray-600 font-medium mt-2">
                            Buat akun untuk mulai mengelola toko Anda
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Pemilik
                            </label>

                            <input
                                type="text"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                                placeholder="Masukkan nama lengkap"
                                className="w-full border-b border-gray-500 bg-transparent py-2 text-gray-900 outline-none focus:border-violet-600 placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Toko
                            </label>

                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                placeholder="Masukkan nama toko"
                                className="w-full border-b border-gray-500 bg-transparent py-2 text-gray-900 outline-none focus:border-violet-600 placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email"
                                className="w-full border-b border-gray-500 bg-transparent py-2 text-gray-900 outline-none focus:border-violet-600 placeholder:text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full border-b border-gray-500 bg-transparent py-2 pr-10 text-gray-900 outline-none focus:border-violet-600 placeholder:text-gray-300"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Konfirmasi Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full border-b border-gray-500 bg-transparent py-2 pr-10 text-gray-900 outline-none focus:border-violet-600 placeholder:text-gray-300"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-600"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50"
                        >
                            {loading ? "Memproses..." : "Daftar"}
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-gray-400 text-sm">
                            atau
                        </span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 text-gray-700 hover:bg-gray-50 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            className="w-5 h-5"
                        >
                            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.21 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.348 4.337-17.694 10.691z" />
                            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.145 35.091 26.715 36 24 36c-5.19 0-9.626-3.326-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.793 2.372-2.313 4.403-4.274 5.57l6.19 5.238C36.785 38.493 44 33 44 24c0-1.341-.138-2.65-.389-3.917z" />
                        </svg>

                        Daftar dengan Google
                    </button>

                    {/* Register */}
                    <p className="text-center text-gray-600 text-sm mt-8">
                        Sudah punya akun?{" "}
                        <a
                            href="/auth/login"
                            className="font-semibold text-violet-600 hover:text-violet-700"
                        >
                            Masuk sekarang
                        </a>
                    </p>
                    <div className="h-10"></div>

                </div>
            </div>
        </main>
    );
}