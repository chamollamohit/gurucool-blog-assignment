import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
    variable: "--font-manRope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Blogy.io | Engineering Blog",
        template: "%s | Blogy.io",
    },
    description: "Minimalist technical writing platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${manRope.variable}  antialiased`}>
                <div className="bg-(--primary) text-(--warm-black) min-h-screen selection:bg-(--accent) selection:text-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
