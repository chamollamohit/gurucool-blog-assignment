import BlogCard from "@/components/dashboard-components/BlogCard";
import { getAllBlogs } from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function Dashboard() {
    const blogs = getAllBlogs();

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <header className="mb-12">
                <h1 className="text-2xl font-black uppercase t mb-2">
                    Dashboard
                </h1>
                <p className="text-[10px] font-bold text-(--warm-gray) uppercase tracking-[0.2em]">
                    Showing {blogs.length} Blogs
                </p>
            </header>

            <section className="space-y-4">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                    />
                ))}
            </section>
        </main>
    );
}
