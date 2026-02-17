import BlogForm from "@/components/editor-components/BlogForm";
import { getBlogById } from "@/lib/db";

export default async function EditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = getBlogById(id);

    return (
        <BlogForm
            mode="update"
            initialData={blog}
        />
    );
}
