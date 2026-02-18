import React from "react";
import { Blog } from "@/lib/db";
import Link from "next/link";

const FeaturedBlog = ({ featuredBlog }: { featuredBlog: Blog }) => {
    return (
        <section className="mb-28">
            <Link
                href={`/blog/${featuredBlog.id}`}
                className="group block relative">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 bg-(--accent) text-white text-[9px] font-bold rounded uppercase tracking-widest">
                            Featured
                        </span>
                        <span className="h-px w-12 bg-(--warm-border)"></span>
                        <span className="text-[10px] font-bold text-(--warm-gray) uppercase tracking-widest">
                            {featuredBlog.date}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight group-hover:tracking-tighter group-hover:text-(--accent) transition-all duration-700 line-clamp-3 pb-1.5 md:pb-5 leading-none">
                        {featuredBlog.title}
                    </h1>

                    <div className="flex flex-col justify-between md:flex-row gap-10 ">
                        <p className="text-xl text-(--warm-gray) max-w-xl leading-relaxed group-hover:text-(--warm-black) transition-colors">
                            {featuredBlog.preview}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-(--accent) group-hover:gap-6 transition-all">
                            Read Blog <span className="text-2xl mb-2">→</span>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default FeaturedBlog;
