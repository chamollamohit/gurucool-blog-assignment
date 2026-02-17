import React from "react";

const Footer = () => {
    return (
        <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-(--warm-border)/20  flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black uppercase tracking-widest text-(--accent)">
                Blogy.io
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest italic">
                Built for GuruCool
            </span>
        </footer>
    );
};

export default Footer;
