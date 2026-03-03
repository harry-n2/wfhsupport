import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="font-serif font-bold text-2xl tracking-widest text-slate-900 group-hover:text-[#d4af37] transition-colors">
                        WT<span className="text-[#d4af37]">N</span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-widest uppercase">
                    <Link href="#overview" className="transition-colors hover:text-[#d4af37] text-slate-600">Overview</Link>
                    <Link href="#profile" className="transition-colors hover:text-[#d4af37] text-slate-600">Profile</Link>
                    <Link href="#achievements" className="transition-colors hover:text-[#d4af37] text-slate-600">Achievements</Link>
                    <Link href="#vision" className="transition-colors hover:text-[#d4af37] text-slate-600">Vision</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:inline-flex rounded-none bg-slate-900 text-white hover:bg-[#d4af37] transition-colors shadow-none h-11 px-6 font-bold tracking-wider text-xs uppercase border-l-2 border-[#d4af37]">
                        <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                            AI無料鑑定
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
