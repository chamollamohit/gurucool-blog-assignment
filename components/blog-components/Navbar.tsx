import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-(--primary)/90 backdrop-blur-md border-b border-(--warm-border)">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="group flex items-center gap-2">
                    <span className="text-sm font-black uppercase tracking-tighter">
                        Blogy
                        <span className="text-(--accent) group-hover:text-(--warm-black) transition-colors">
                            .io
                        </span>
                    </span>
                </Link>
                <nav className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-(--warm-gray)">
                    <Link
                        href="/dashboard"
                        className="hover:text-(--accent) transition-colors">
                        Dashboard
                    </Link>
                    <Link
                        href="/create"
                        className="hover:bg-(--accent) hover:border-(--accent) px-3 py-1.5 border border-(--warm-border) rounded-full transition-all hover:text-white">
                        New Blog
                    </Link>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
