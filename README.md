# Blogy.io – Minimalist Technical Blog Platform

A high-performance, SEO-optimized blog application built with **Next.js 16 (App Router)**, featuring a custom **Tiptap Rich Text Editor** and a dedicated **Management Dashboard**.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Editor:** Tiptap (Headless Rich Text Framework)
- **Icons:** Lucide React

---

## 🛠 Architectural Decisions

### 1. SSR & Data Fetching Strategy

To meet the requirement for **disabled caching** and real-time data accuracy, I implemented the following:

- **`force-dynamic`:** Used `export const dynamic = 'force-dynamic'` on the listing and detail pages to ensure every request bypasses the Next.js Data Cache and fetches fresh content from the server.
- **Server Components:** Data fetching is handled directly in Server Components to minimize client-side JavaScript and improve Initial Page Load (FCP).

### 2. Direct Server-Side Data Access

To optimize performance and follow industry best practices, I avoided making internal API calls (via `fetch`) from Server Components:

- **Direct Function Calls:** I created utility functions in `lib/db.ts` to access the in-memory store directly.
- **Efficiency:** This reduces network overhead and avoids unnecessary HTTP request/response cycles on the server, ensuring faster rendering.

### 3. In-Memory Data & Production Constraints

Since external databases were restricted, the application uses a **Global Singleton Pattern** for data storage:

- **Persistence Note:** Data is stored in a centralized `lib/db.ts` file.
- **Production Constraint:** Because this is an in-memory solution, data mutations (Create/Delete) will not persist across different serverless instances in production (e.g., Vercel). Each instance maintains its own memory. This is an intentional architectural trade-off due to the **"No External Database"** requirement.

### 4. Rich Text Editor Integration

I chose **Tiptap** for its headless nature, allowing for:

- **Custom UI:** A minimalist toolbar styled with Tailwind CSS to match the app's aesthetic.
- **Features:** Full support for Bold, Italic, Headings (H2/H3), Lists, and Hyperlinks.

---

## 📈 SEO Strategy

Implementation follows production-ready standards:

- **Dynamic Metadata:** Utilized the `generateMetadata` API to inject unique titles and descriptions for every blog post.
- **JSON-LD:** Integrated **Structured Data** (Schema.org) to help search engines understand article context and authorship.
- **Robots & Sitemaps:** Configured `robots.ts` to block dashboard indexing and `sitemap.ts` to programmatically generate all blog URLs.

---

## 🖥 Dashboard Features

- **Full CRUD:** Interface to Create, Update, and Delete blog entries.
- **Management UI:** A structured, minimalist list view for quick scanning of existing content.
- **Responsive Design:** Fully accessible on mobile and desktop via Tailwind CSS.

---

## 🏃 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/chamollamohit/gurucool-blog-assignment
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

---
