"use client";
import { Blog } from "@/lib/db";
import { Edit3, ExternalLink, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelte = async (id: string) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) return router.refresh();
        } catch (error) {
            console.error("Unable to delete blog", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-(--primary) border border-(--warm-border) rounded-xl hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-(--accent) rounded-md">
                        {blog.category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                        • {blog.date}
                    </span>
                </div>

                <h2 className="text-base font-semibold sm:line-clamp-1 line-clamp-2 text-slate-900 group-hover:text-(--accent) transition-colors">
                    {blog.title}
                </h2>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-(--warm-border)">
                <div className=" flex flex-col md:items-end px-4 sm:border-r border-(--warm-border)">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        Status
                    </span>
                    <span
                        className={`text-[11px] font-black uppercase ${blog.isPublished ? "text-emerald-600" : "text-amber-600"}`}>
                        {blog.isPublished ? "● Published" : "○ Draft"}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href={`/blog/edit/${blog.id}`}
                        className="p-2 text-slate-400 hover:text-(--accent) hover:bg-slate-100  rounded-lg transition-colors"
                        title="Edit Post">
                        <Edit3 size={18} />
                    </Link>

                    <Link
                        href={`/blog/${blog.id}`}
                        className="p-2 text-slate-400 hover:text-(--accent) hover:bg-slate-100 rounded-lg transition-colors"
                        title="View Live">
                        <ExternalLink size={18} />
                    </Link>

                    <button
                        disabled={loading}
                        onClick={() => handleDelte(blog.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Post">
                        {loading ? (
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                        ) : (
                            <Trash2 size={18} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
