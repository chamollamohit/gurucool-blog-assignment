import { blogs } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    try {
        const blog = blogs.find((blog) => blog.id === id)
        if (blog) return NextResponse.json({ success: true, data: blog }, { status: 200 })
        return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to get blog" }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    try {
        const blogData = await request.json()
        const blogIndex = blogs.findIndex((blog) => blog.id === id)
        if (blogIndex !== -1) {
            blogs[blogIndex] = { ...blogs[blogIndex], ...blogData }
            return NextResponse.json({ success: true, data: blogs[blogIndex] }, { status: 200 })
        }
        return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to update blog" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    try {
        const blogIndex = blogs.findIndex((blog) => blog.id === id)

        if (blogIndex !== -1) {
            blogs.splice(blogIndex, 1)
            return NextResponse.json({ success: true, message: "Blog deleted successfully" }, { status: 204 })
        }

        return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 })
    } catch (error) {
        console.log(error);

        return NextResponse.json({ success: false, error: "Failed to delete blog" }, { status: 500 })
    }
}