import Link from "next/link";
import { getBlogById } from "@/lib/db";
import { notFound } from "next/navigation";
import { LinkedinIcon, LucideLink, Twitter } from "lucide-react";
import Image from "next/image";
export const dynamic = "force-dynamic";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = getBlogById(id);
    if (!blog)
        return {
            title: "Blog Not Found",
            description: "The requested blog could not be found.",
        };

    return {
        title: `${blog.title}`,
        description: blog.preview,
        openGraph: {
            title: blog.title,
            description: `Written by ${blog.author}`,
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: `Read this story on Blogy.io`,
        },
    };
}

export default async function SingleBlog({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = getBlogById(id);

    if (!blog) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        author: {
            "@type": "Person",
            name: blog.author,
        },
        datePublished: blog.date,
        description: blog.preview,
    };
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="max-w-6xl mx-auto px-6 py-14">
                <Link
                    href="/"
                    className="group mb-16 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-(--warm-gray) hover:text-(--accent) transition-colors">
                    <span className="text-xl group-hover:-translate-x-1 mb-1.5 transition-transform">
                        ←
                    </span>
                    Back
                </Link>

                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-8 text-[10px] font-bold text-(--accent) uppercase tracking-widest">
                        <span>{blog.category}</span>
                        <span className="h-1 w-1 rounded-full bg-(--warm-border)"></span>
                        <span className="text-(--warm-gray)">{blog.date}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter  mb-12">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-(--warm-border)/30 py-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src={blog.authorImage}
                                width={35}
                                height={35}
                                alt="authorImage"
                                className="rounded-full grayscale group-hover:grayscale-0"
                            />
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-tight">
                                    {blog.author}
                                </span>
                                <span className="text-[9px] text-(--warm-gray) uppercase font-bold tracking-widest">
                                    Editor
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold text-(--accent) uppercase tracking-[0.2em]">
                                5 Min Read
                            </span>
                        </div>
                    </div>
                </header>

                <section
                    className="prose prose-lg max-w-none 
                    prose-p:text-(--warm-black)/90
                    prose-p:leading-relaxed
                    prose-headings:text-(--warm-black)
                    prose-headings:tracking-tighter
                    prose-blockquote:border-l-(--accent)
                    prose-blockquote:italic
                    prose-code:text-(--accent)
                    prose-code:bg-(--accent)/5
                    prose-code:px-1.5
                    prose-code:py-0.5
                    prose-code:rounded
                    prose-img:rounded-sm">
                    <div
                        dangerouslySetInnerHTML={{ __html: blog.content || "" }}
                    />
                </section>
                <div className="mt-30 flex items-center justify-center">
                    <div className="h-px grow bg-(--warm-gray)"></div>
                    <span className="mx-8 text-[10px] font-black uppercase tracking-[1em] text-(--warm-gray) ">
                        End
                    </span>
                    <div className="h-px grow bg-(--warm-gray)"></div>
                </div>
                <div className="mt-10  flex flex-col gap-5 md:flex-row justify-between items-center">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-(--warm-gray)">
                        <span className="hover:text-(--accent) cursor-pointer transition-colors">
                            <Twitter />
                        </span>
                        <span className="hover:text-(--accent) cursor-pointer transition-colors">
                            <LinkedinIcon />
                        </span>
                        <span className="hover:text-(--accent) cursor-pointer transition-colors">
                            <LucideLink />
                        </span>
                    </div>

                    <button className="text-[10px] font-bold uppercase tracking-widest px-6 py-3 border border-(--warm-black) rounded-full hover:bg-(--accent) hover:text-(--primary) transition-all">
                        Write a response
                    </button>
                </div>
            </article>
        </div>
    );
}
