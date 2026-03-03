"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CtaSection() {
    return (
        <section className="py-24 md:py-32 bg-slate-900 border-t border-slate-800 relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
                <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
                    alt="Luxury Interior"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="container px-4 md:px-12 mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center max-w-4xl mx-auto">

                    <div className="text-center space-y-6 mb-16">
                        <p className="text-[#d4af37] font-serif tracking-[0.3em] text-sm uppercase">Special Offer</p>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-white leading-tight">
                            あなたの経験が、<br className="md:hidden" />
                            <span className="text-[#d4af37]">圧倒的な価値</span>を持つか<br className="md:hidden" />
                            診断しませんか？
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto pt-4 font-light leading-relaxed">
                            「一人の専門家」としての新しい生き方を手に入れる第一歩。<br />
                            今すぐ、あなたの隠れた価値を数値化しましょう。
                        </p>
                    </div>

                    {/* Manga Banner */}
                    <div className="w-full max-w-2xl mx-auto mb-16 relative rounded-sm overflow-hidden shadow-2xl border border-[#d4af37]/40 group cursor-pointer" onClick={() => window.open("https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102", "_blank")}>
                        <div className="relative h-64 md:h-80 w-full">
                            <Image
                                src="/images/manga_banner_background.png"
                                alt="マンガ公開間近！"
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Text */}
                            <div className="absolute inset-0 bg-slate-900/50 flex flex-col justify-center items-center text-center p-6">
                                <span className="bg-[#d4af37] text-slate-900 font-bold text-xs md:text-sm px-4 py-1 rounded-sm mb-4 tracking-widest animate-pulse">
                                    限定公開予定
                                </span>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white mb-4 tracking-wide drop-shadow-lg leading-tight">
                                    共感必至の<br className="md:hidden" />オリジナルマンガ<br />現在制作中！
                                </h3>
                                <p className="text-white text-sm md:text-base font-medium tracking-wider drop-shadow-md bg-slate-900/40 px-4 py-2 rounded-sm border border-white/20">
                                    LINE登録した方にのみ<span className="text-[#d4af37] font-bold mx-1">無料配布</span>します
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="w-full glass-dark p-10 md:p-16 rounded-sm border border-[#d4af37]/30 shadow-2xl relative overflow-hidden text-center">
                        {/* Decorative Corner */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#d4af37]/20 blur-2xl rounded-full"></div>
                        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#d4af37]/20 blur-2xl rounded-full"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-8 leading-snug tracking-wider">
                                AI無料鑑定の詳細レポートと<br />
                                あなただけの高付加価値講座の具体的タイトル案を<span className="text-[#d4af37]">無料</span>で受け取る
                            </h3>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                                {/* スマホを見る女性のイメージ */}
                                <div className="hidden md:block w-40 h-40 rounded-full overflow-hidden border-4 border-[#d4af37]/80 shadow-xl opacity-100">
                                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="スマホを見て喜ぶ女性" width={160} height={160} className="object-cover w-full h-full" />
                                </div>

                                {/* 実際のQRコード */}
                                <div className="bg-white p-4 inline-block shadow-lg border-2 border-[#d4af37]/50 rounded-sm transform transition-transform hover:scale-105 duration-500">
                                    <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                                        <Image src="/LineQR_WTN.png" alt="LINE公式アカウントQRコード" width={160} height={160} className="object-contain" />
                                    </Link>
                                </div>
                            </div>

                            <Button asChild className="w-full sm:w-auto px-12 py-8 text-lg sm:text-xl font-bold rounded-none bg-[#d4af37] hover:bg-[#b5952f] text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 tracking-widest border border-transparent hover:border-white/50">
                                <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                                    LINEで今すぐ結果を見る
                                </Link>
                            </Button>

                            <div className="mt-8 space-y-2">
                                <p className="text-sm font-light text-slate-400 tracking-wide">
                                    ※スマホの方はボタンをタップ、PCの方はQRコードを読み取ってください。
                                </p>
                                <p className="text-sm font-light text-[#d4af37] tracking-wide">
                                    ※登録後すぐに診断結果の全容をお届けします。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
