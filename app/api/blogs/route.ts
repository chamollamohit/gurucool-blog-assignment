import { Blog, blogs } from "@/lib/db";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({ success: true, data: blogs })
}

export async function POST(request: NextRequest) {
    try {
        const { title, author, content, category } = await request.json()

        const newBlog: Blog = {
            id: randomUUID(),
            title,
            author,
            content,
            category: category || 'UNCATEGORIZED',
            date: new Date().toLocaleDateString('en-us', {
                month: 'short',
                day: "numeric",
                year: "numeric"
            }),
            authorImage: "https://ui-avatars.com/api/?name=" + author,
            preview: content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        }
        blogs.unshift(newBlog);
        return NextResponse.json({ success: true, data: newBlog }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }

}