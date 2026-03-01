"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function StickyCtaButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-slate-900/95 backdrop-blur-sm border-t border-[#d4af37]/40 shadow-2xl">
            <div className="container mx-auto max-w-xl">
                <Link
                    href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#d4af37] hover:bg-[#b5952f] text-slate-900 font-bold text-sm md:text-base py-4 px-6 transition-all duration-300"
                >
                    【無料】AI診断であなたの経験の価値を確認する →
                </Link>
            </div>
        </div>
    )
}
