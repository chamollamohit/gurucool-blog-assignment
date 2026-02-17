"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
    Bold,
    Italic,
    Link2Icon,
    List,
    ListOrdered,
    Quote,
    Type,
} from "lucide-react";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) return null;

    const btn = (active: boolean) =>
        `p-2 rounded-md transition-all ${active ? "bg-(--accent) text-white" : "text-(--warm-gray) hover:bg-(--warm-border)"}`;

    const toggleLink = () => {
        const url = window.prompt("Enter URL");
        if (url) editor.chain().focus().setLink({ href: url }).run();
    };
    return (
        <div className="flex flex-wrap gap-1 p-3 border-b border-(--warm-border)/30 bg-(--primary) sticky top-0 z-20">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={btn(editor.isActive("bold"))}>
                <Bold size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={btn(editor.isActive("italic"))}>
                <Italic size={16} />
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={btn(editor.isActive("heading"))}>
                <Type size={16} />
            </button>
            <div className="w-px h-6 bg-(--warm-border)/30 mx-2" />
            <button
                type="button"
                onClick={toggleLink}
                className={btn(editor.isActive("link"))}>
                <Link2Icon size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={btn(editor.isActive("bulletList"))}>
                <List size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={btn(editor.isActive("orderedList"))}>
                <ListOrdered size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={btn(editor.isActive("blockquote"))}>
                <Quote size={16} />
            </button>
        </div>
    );
};

export default function TiptapEditor({
    content,
    onChange,
}: {
    content: string;
    onChange: (e: string) => void;
}) {
    const editor = useEditor({
        extensions: [StarterKit, Link],
        content,
        immediatelyRender: false,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "prose prose-lg max-w-none focus:outline-none p-8",
            },
        },
    });

    return (
        <div
            className="border border-(--warm-border) rounded-sm flex flex-col min-h-150 bg-white/10 shadow-inner overflow-visible"
            onClick={() => editor?.commands.focus()}>
            <Toolbar editor={editor} />
            <div className="grow">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
