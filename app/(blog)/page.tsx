import BlogCard from "@/components/blog-components/BlogCard";
import FeaturedBlog from "@/components/blog-components/FeaturedBlog";
import { getAllBlogs } from "@/lib/db";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Home",
    description:
        "A platform for high-end technical stories and design philosophy.",
    keywords: "Next.js, WebDevlopment, SSR, React, Javascript",
    openGraph: {
        title: "Blogy.io | Minimalist Engineering Blog",
        description:
            "A platform for high-end technical stories and design philosophy.",
        siteName: "blogy.io",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function Home() {
    const blogs = getAllBlogs();
    const featuredBlog = blogs[0];
    const restBlogs = blogs.slice(1);
    return (
        <main className="max-w-6xl mx-auto px-6 py-20">
            {featuredBlog && <FeaturedBlog featuredBlog={featuredBlog} />}
            <BlogCard blogs={restBlogs} />
        </main>
    );
}
