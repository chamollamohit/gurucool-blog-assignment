import Navbar from "@/components/blog-components/Navbar";
import Footer from "@/components/blog-components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
