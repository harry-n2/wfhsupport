import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function VisionSection() {
    return (
        <section id="vision" className="relative min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80"
                    alt="Vision"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 15%"
                    className="object-center"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-12 mx-auto text-center mt-20">
                <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                    <p className="text-[#d4af37] font-serif tracking-[0.3em] text-sm md:text-base uppercase">Our Vision</p>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2] font-serif drop-shadow-lg">
                        AIは「人間」をもっと<br />
                        <span className="italic text-[#d4af37]">自由に</span>、楽しくする存在。
                    </h2>

                    {/* Editorial Image Insert */}
                    <div className="my-12 h-[1px] w-24 bg-[#d4af37] mx-auto opacity-70"></div>
                    <div className="relative w-full max-w-2xl mx-auto aspect-[21/9] overflow-hidden rounded-sm opacity-90 mb-12 border border-slate-700/50 shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
                            alt="洗練されたワークスタイル"
                            layout="fill"
                            objectFit="cover"
                            className="hover:scale-105 transition-transform duration-[2s] grayscale mix-blend-luminosity"
                        />
                    </div>

                    <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
                        <p>
                            私たちは「作業するため」に生きているのではありません。
                        </p>
                        <p>
                            AIに任せられることは任せ、<br className="hidden md:inline" />
                            人間はもっと「自分らしい時間」を<br className="hidden md:inline" />
                            豊かに過ごすべきだと信じています。
                        </p>
                    </div>

                    <div className="pt-12 flex justify-center">
                        <Link
                            href="/vision"
                            className="group inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-bold text-white bg-transparent border border-[#d4af37] text-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white transition-all duration-500 tracking-widest uppercase"
                        >
                            私たちのビジョンを詳しく見る
                            <ArrowRight className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
