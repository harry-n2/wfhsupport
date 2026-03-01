import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full bg-[#0a0f18] text-white py-12 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">

                    {/* Logo & Info */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center transform rotate-45">
                                <span className="text-[#d4af37] font-serif text-sm -rotate-45 tracking-widest font-bold">WTN</span>
                            </div>
                            <span className="text-xl tracking-[0.2em] font-serif uppercase">World Trade Next</span>
                        </div>
                    </div>

                    {/* Links & Copyright */}
                    <div className="flex flex-col md:items-end space-y-6 text-sm text-gray-400">
                        <div className="tracking-widest opacity-80 uppercase text-xs">
                            &copy; 2025 WORLD TRADE NEXT. ALL RIGHTS RESERVED.
                        </div>

                        <div className="flex space-x-6 tracking-widest">
                            <Link href="/tokusho" className="hover:text-white transition-colors duration-300">特定商取引法に基づく表記</Link>
                            <Link href="/privacy" className="hover:text-white transition-colors duration-300">プライバシーポリシー</Link>
                        </div>

                        <div className="text-right tracking-wider leading-relaxed opacity-80">
                            <p>〒284-0043 千葉県四街道市めいわ2-9-4 ワールドトレードネクスト</p>
                            <div className="flex gap-4 justify-end mt-1">
                                <p>TEL: 080-3258-8314</p>
                                <p>E-mail: sekaikun.office@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Powered by */}
                <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500 tracking-widest">
                    Powered by <a href="https://wtnext.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 underline underline-offset-4">World Trade Next</a>
                </div>
            </div>
        </footer>
    )
}
