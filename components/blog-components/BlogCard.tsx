import { Blog } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {blogs.map((blog) => (
                <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="group flex flex-col">
                    <article className="relative">
                        <span className="absolute -left-7 top-1 size-1.5 bg-(--accent) rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-left-4"></span>

                        <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-(--warm-gray) uppercase tracking-widest">
                            <span className="group-hover:text-(--accent) transition-colors">
                                {blog.category}
                            </span>
                            <span className="opacity-30">/</span>
                            <span>{blog.date}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 group-hover:text-(--accent) transition-colors line-clamp-2">
                            {blog.title}
                        </h2>

                        <p className="text-sm text-(--warm-gray) group-hover:text-(--warm-black) leading-relaxed mb-8 line-clamp-2 max-w-md">
                            {blog.preview}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-b border-(--warm-border)/40 pb-4 group-hover:border-(--accent) transition-all">
                            <div className="flex gap-3 items-center">
                                <Image
                                    src={blog.authorImage}
                                    width={30}
                                    height={30}
                                    alt="authorImage"
                                    className="rounded-full grayscale group-hover:grayscale-0"
                                />
                                <span className="text-[10px] font-bold uppercase tracking-tight italic opacity-60 group-hover:opacity-100">
                                    {blog.author}
                                </span>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-(--accent) opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                Read More{" "}
                                <span className="text-2xl mb-3">→</span>
                            </span>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
};

export default BlogCard;
