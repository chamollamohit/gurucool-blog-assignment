import FeaturedBlog from "@/components/blog-components/FeaturedBlog";
import { getAllBlogs } from "@/lib/db";

export default async function Home() {
    const blogs = getAllBlogs();
    const featuredBlog = blogs[0];
    const restBlogs = blogs.slice(1);
    return (
        <main className="max-w-6xl mx-auto px-6 py-20">
            <FeaturedBlog featuredBlog={featuredBlog} />
        </main>
    );
}
