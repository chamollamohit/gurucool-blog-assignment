import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="border-b border-(--warm-border)/50 bg-white/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <span className="text-sm font-black uppercase tracking-widest border-r border-(--warm-border) pr-8">
                        Blogy
                        <span className="text-(--accent)">.io</span>
                    </span>
                    <div className="md:flex gap-6">
                        <Link
                            href="/dashboard"
                            className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-(--accent)">
                            Dashboard
                        </Link>
                        <Link
                            href="/"
                            className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                            Home
                        </Link>
                    </div>
                </div>
                <Link
                    href="/create"
                    className="flex items-center gap-2 px-6 py-2 bg-(--warm-black) text-(--primary) text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-(--accent) transition-all">
                    <Plus size={14} /> New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
