export type Blog = {
    id: string;
    title: string;
    author: string;
    authorImage: string;
    content: string;
    preview: string;
    date: string;
    category: string;
};


const globalForBlogs = global as unknown as { blogs: Blog[] };

export let blogs = globalForBlogs.blogs || [
    {
        id: "1",
        title: "The Art of Minimal Living: Finding Space in a Crowded World",
        author: "Mohit",
        authorImage: "https://i.pravatar.cc/150?u=moh",
        category: "LIFESTYLE",
        date: "Feb 12, 2026",
        preview: "Discover how simplifying your physical space can lead to a more intentional, fulfilling life...",
        content: "<h2>The Essence of Minimalism</h2><p>Minimalism is not about having less; it's about making room for more of what matters. In an age of constant digital noise, the call to simplify has never been louder.</p><blockquote>'Simplify your life. You don't need a lot of things to be happy. Just the right things.'</blockquote>"
    },
    {
        id: "2",
        title: "Modernism: Why Geometry Still Rules Our Cities",
        author: "Elena Rossi",
        authorImage: "https://i.pravatar.cc/150?u=elena",
        category: "ARCHITECTURE",
        date: "Feb 10, 2026",
        preview: "From skyscrapers to local cafes, the clean lines of modern geometry continue to define our urban landscape.",
        content: "<p>Geometry is the silent language of our cities. When we look at the evolution of urban spaces, the shift toward functionalism and clean lines is undeniable.</p><ul><li>Function over form</li><li>Industrial materials</li><li>Open floor plans</li></ul>"
    },
    {
        id: "3",
        title: "Remote Productivity in the New Creative Era",
        author: "Marcus Thorne",
        authorImage: "https://i.pravatar.cc/150?u=marcus",
        category: "WORKPLACE",
        date: "Feb 08, 2026",
        preview: "Building a distraction-free workspace is the first step toward deep work and professional growth.",
        content: "<h3>Creating a Deep Work Sanctuary</h3><p>Your environment dictates your output. By removing digital friction and physical clutter, you unlock a higher tier of creativity.</p>"
    },
    {
        id: "4",
        title: "The Sound of Silence: Premium Audio for Focus",
        author: "Leo Vance",
        authorImage: "https://i.pravatar.cc/150?u=leo",
        category: "TECHNOLOGY",
        date: "Feb 05, 2026",
        preview: "Exploring how high-fidelity audio and noise-cancellation technologies are changing how we focus.",
        content: "<p>In a world that never stops talking, silence is the ultimate luxury. High-fidelity audio isn't just for music; it's a tool for deep concentration.</p>"
    },
    {
        id: "5",
        title: "Urban Third Spaces: Why Local Cafes Matter",
        author: "Sarah Jenkins",
        authorImage: "https://i.pravatar.cc/150?u=sarah",
        category: "COMMUNITY",
        date: "Feb 01, 2026",
        preview: "Beyond home and work, 'third spaces' provide the community fabric necessary for mental well-being.",
        content: "<p>The local cafe is more than a place for caffeine; it's a social anchor. These spaces allow for 'weak tie' interactions that strengthen our sense of belonging.</p>"
    }
];

if (process.env.NODE_ENV !== 'production') globalForBlogs.blogs = blogs;

export function getAllBlogs(): Blog[] {
    return blogs;
}

export function getBlogById(id: string): Blog | undefined {
    return blogs.find((blog) => blog.id === id);
}


export function addBlog(blog: Blog) {
    blogs.push(blog);
}

export function updateBlog(id: string, updatedBlog: Blog) {
    blogs = blogs.map((blog) =>
        blog.id === id ? updatedBlog : blog
    );
}

export function deleteBlog(id: string) {
    blogs = blogs.filter((blog) => blog.id !== id);
}
