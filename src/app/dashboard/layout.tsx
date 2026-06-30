"use client";

import { ReactNode } from "react";
import Sidebar from "@/src/components/dashboard/sidebar";
import Navbar from "@/src/components/dashboard/navbar";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <div className="h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-screen w-64 z-40">
                <Sidebar />
            </div>

            {/* Content */}
            <div className="ml-64 flex h-screen flex-col">

                {/* Navbar */}
                <div className="sticky top-0 z-30">
                    <Navbar title="Dashboard" />
                </div>

                {/* Content Scroll */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}