import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="mb-36 mt-36 bg-(--primary) flex flex-col items-center justify-center px-6 text-cente">
            <div className="relative mb-8">
                <h1 className="text-[12rem] font-black leading-none tracking-tighter opacity-5 select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xl font-black uppercase tracking-[0.4em] text-(--warm-black)">
                        Lost in Thought
                    </p>
                </div>
            </div>

            <div className="max-w-md space-y-6">
                <h2 className="text-2xl text-center font-extrabold tracking-tight uppercase">
                    The page you&apos;re looking for doesn&apos;t exist.
                </h2>
                <p className="text-sm text-center font-bold text-(--warm-gray) uppercase tracking-[0.2em] leading-relaxed">
                    It might have been moved or deleted.
                </p>
            </div>

            {/* Action */}
            <Link
                href="/"
                className="mt-12 group flex items-center gap-3 px-10 py-4 bg-(--warm-black) text-(--primary) text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-(--accent) transition-all shadow-xl shadow-(--accent)/10">
                <MoveLeft
                    size={14}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                Return to Home
            </Link>
        </main>
    );
}
