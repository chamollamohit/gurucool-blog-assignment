import BlogForm from "@/components/editor/BlogForm";
import { getBlogById } from "@/lib/db";

export default async function EditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = await getBlogById(id);

    return (
        <BlogForm
            mode="update"
            initialData={blog}
        />
    );
}
