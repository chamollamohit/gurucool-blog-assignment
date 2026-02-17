export type Blog = {
    id: string;
    title: string;
    author: string;
    authorImage: string;
    content: string;
    preview: string;
    isPublished: boolean;
    date: string;
    category: string;
};


const globalForBlogs = global as unknown as { blogs: Blog[] };

export let blogs = globalForBlogs.blogs || [
    {
        id: "6",
        title: "AI-Powered Development: Coding in the Age of Intelligence",
        author: "Aarav Mehta",
        authorImage: "https://i.pravatar.cc/150?u=aarav",
        category: "TECHNOLOGY",
        date: "Feb 15, 2026",
        isPublished: true,
        preview: "AI copilots are reshaping how developers write, debug, and ship code faster than ever before.",
        content: `
            <h2>The Rise of AI Copilots</h2>
            <p>Artificial Intelligence is no longer a futuristic assistant — it’s embedded directly into modern IDEs. AI-powered development tools can autocomplete functions, generate entire components, and even refactor legacy codebases.</p>

            <blockquote>"The best developers of the future won't code alone — they'll collaborate with machines."</blockquote>

            <h3>Where AI Adds Real Value</h3>
            <ul>
                <li>Boilerplate generation</li>
                <li>Automated debugging suggestions</li>
                <li>Code explanation for onboarding teams</li>
                <li>Test case generation</li>
            </ul>

            <p>Rather than replacing engineers, AI augments their decision-making. The developer becomes an architect — guiding logic while automation handles repetition.</p>
        `
    },
    {
        id: "7",
        title: "Edge Computing: Why the Cloud Is Moving Closer",
        author: "Nina Kapoor",
        authorImage: "https://i.pravatar.cc/150?u=nina",
        category: "TECHNOLOGY",
        date: "Feb 14, 2026",
        isPublished: true,
        preview: "Latency-sensitive applications are pushing computation away from centralized data centers.",
        content: `
            <h2>From Centralized to Distributed</h2>
            <p>Traditional cloud computing relies on centralized data centers. But as applications like AR, IoT, and autonomous systems grow, milliseconds matter.</p>

            <h3>What Is Edge Computing?</h3>
            <p>Edge computing processes data closer to where it's generated — reducing latency and improving reliability.</p>

            <ul>
                <li>Lower latency for real-time apps</li>
                <li>Reduced bandwidth costs</li>
                <li>Improved privacy and data control</li>
            </ul>

            <blockquote>"The future of computing isn't just bigger servers — it's smarter distribution."</blockquote>

            <p>By decentralizing infrastructure, companies are building systems that are faster, more resilient, and more responsive.</p>
        `
    },
    {
        id: "8",
        title: "Web Performance in 2026: Speed as a Competitive Advantage",
        author: "Daniel Cruz",
        authorImage: "https://i.pravatar.cc/150?u=daniel",
        category: "WEB DEVELOPMENT",
        date: "Feb 13, 2026",
        isPublished: true,
        preview: "Milliseconds impact revenue. Optimizing web performance is no longer optional.",
        content: `
            <h2>Why Performance Matters</h2>
            <p>A one-second delay in load time can significantly reduce conversions. Modern users expect instant interaction across devices.</p>

            <h3>Core Performance Strategies</h3>
            <ul>
                <li>Code splitting and lazy loading</li>
                <li>Optimized image delivery (WebP/AVIF)</li>
                <li>Server-side rendering & streaming</li>
                <li>Edge caching</li>
            </ul>

            <p>Performance is UX. It affects SEO, accessibility, and user retention.</p>

            <blockquote>"Speed is the most invisible feature — until it's missing."</blockquote>

            <p>Engineering teams now treat performance budgets as strictly as financial budgets.</p>
        `
    },
    {
        id: "9",
        title: "Cybersecurity in the Zero-Trust Era",
        author: "Priya Nair",
        authorImage: "https://i.pravatar.cc/150?u=priya",
        category: "SECURITY",
        date: "Feb 11, 2026",
        isPublished: true,
        preview: "Trust nothing, verify everything — the guiding principle of modern security architecture.",
        content: `
            <h2>The End of Perimeter Security</h2>
            <p>With distributed teams and cloud-native systems, traditional firewalls are no longer enough. Zero-trust assumes that every request — internal or external — must be verified.</p>

            <h3>Core Principles</h3>
            <ul>
                <li>Least privilege access</li>
                <li>Continuous authentication</li>
                <li>Device posture verification</li>
                <li>Encrypted internal traffic</li>
            </ul>

            <blockquote>"In cybersecurity, convenience is often the enemy of protection."</blockquote>

            <p>Organizations adopting zero-trust frameworks are reducing breach impact while increasing system resilience.</p>
        `
    },
    {
        id: "10",
        title: "The Future of Open Source: Collaboration at Scale",
        author: "Luca Bernard",
        authorImage: "https://i.pravatar.cc/150?u=luca",
        category: "OPEN SOURCE",
        date: "Feb 09, 2026",
        isPublished: true,
        preview: "Open source has evolved from side projects to infrastructure powering the digital world.",
        content: `
            <h2>Beyond Hobby Projects</h2>
            <p>Open source software now powers everything from operating systems to enterprise cloud platforms. Corporations and independent developers collaborate in shared ecosystems.</p>

            <h3>Why Open Source Thrives</h3>
            <ul>
                <li>Transparent development processes</li>
                <li>Community-driven innovation</li>
                <li>Faster bug discovery</li>
                <li>Global contributor base</li>
            </ul>

            <blockquote>"Open source isn't just code — it's a governance model."</blockquote>

            <p>The next evolution includes sustainable funding models, decentralized collaboration, and AI-assisted contribution workflows.</p>
        `
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
