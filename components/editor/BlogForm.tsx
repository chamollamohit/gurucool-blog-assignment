"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "./TiptapEditor";

interface BlogFormProps {
    initialData?: {
        title: string;
        author: string;
        category: string;
        content: string;
        id?: string;
    };
    mode: "create" | "update";
}

export default function BlogForm({ initialData, mode }: BlogFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({
        title: initialData?.title || "",
        author: initialData?.author || "",
        category: initialData?.category || "",
        content: initialData?.content || "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const url =
            mode === "create" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
        const method = mode === "create" ? "POST" : "PUT";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });

            if (res.ok) router.push("/");
        } catch (error) {
            console.error("Operation failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 h-[calc(100vh-80px)] flex flex-col pt-8">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col h-full">
                <div className="flex-none space-y-6 mb-8">
                    <div className="flex items-center justify-center border-b border-(--warm-black) pb-4">
                        <span className="text-xl font-bold text-(--accent) uppercase tracking-widest">
                            {mode === "create" ? "New Blog" : "Editing Blog"}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <input
                            required
                            placeholder="The Title..."
                            value={post.title}
                            className="bg-transparent text-3xl font-semibold outline-none border-b border-(--warm-border) focus:border-(--accent) transition-all"
                            onChange={(e) =>
                                setPost({ ...post, title: e.target.value })
                            }
                        />
                        <div className="flex gap-4">
                            <input
                                required
                                placeholder="Author"
                                value={post.author}
                                className="w-1/2 bg-transparent text-md font-bold tracking-widest outline-none border-b border-(--warm-border) focus:border-(--accent) pb-1"
                                onChange={(e) =>
                                    setPost({ ...post, author: e.target.value })
                                }
                            />
                            <input
                                required
                                placeholder="Category"
                                value={post.category}
                                className="w-1/2 bg-transparent text-md font-bold tracking-widest outline-none border-b border-(--warm-border) focus:border-(--accent) pb-1"
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        category: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden mb-6">
                    <TiptapEditor
                        content={post.content}
                        onChange={(html) => setPost({ ...post, content: html })}
                    />
                </div>

                <footer className="flex-none flex justify-between items-center py-6 border-t border-(--warm-black)/5">
                    <button
                        type="button"
                        disabled={loading}
                        onClick={() => router.back()}
                        className="px-12 py-4 bg-(--warm-gray) text-(--warm-black) text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-(--accent) transition-all  disabled:opacity-50">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-12 py-4 bg-(--warm-black) text-(--primary) text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-(--accent) transition-all disabled:opacity-50">
                        {loading
                            ? "Processing..."
                            : mode === "create"
                              ? "Publish Blog"
                              : "Save Changes"}
                    </button>
                </footer>
            </form>
        </div>
    );
}
