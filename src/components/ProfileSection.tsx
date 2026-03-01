import Image from "next/image"

export function ProfileSection() {
    return (
        <section id="profile" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 slant-edge opacity-50 transform translate-x-1/4 z-10"></div>
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=2000&q=80"
                    alt="チーム・プロフェッショナル"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-10 grayscale mix-blend-overlay"
                />
            </div>

            <div className="container relative z-10 px-4 md:px-12 mx-auto">
                <div className="text-center mb-20">
                    <p className="text-[#d4af37] font-serif tracking-[0.2em] text-sm uppercase mb-4">Board Members</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-white">
                        プロフィール
                    </h2>
                </div>

                <div className="flex flex-col gap-24 max-w-5xl mx-auto">

                    {/* 1. 代表プロフィール */}
                    <div className="flex flex-col md:flex-row items-stretch gap-0 bg-[#0f172a] rounded-sm overflow-hidden border border-slate-800 shadow-2xl relative z-20">
                        {/* Image Left */}
                        <div className="w-full md:w-2/5 relative h-[400px] md:h-auto bg-slate-800">
                            <Image
                                src="/WTN 代表 西野.png"
                                alt="代表：西野 直哉"
                                layout="fill"
                                objectFit="cover"
                                className="transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Text Right */}
                        <div className="w-full md:w-3/5 p-10 md:p-14 flex flex-col justify-center relative">
                            <div className="absolute top-8 right-8 text-[#d4af37] opacity-20 hidden md:block">
                                <span className="font-serif text-6xl">”</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider font-serif">西野 直哉</h3>
                            <p className="text-[#d4af37] text-sm tracking-widest uppercase mb-8 font-semibold">World Trade Next / CEO</p>

                            <div className="space-y-6 text-slate-300 text-base leading-relaxed mb-10 font-light">
                                <p>
                                    海外/国内営業、実務歴通算30年の実績。<br />
                                    営業の現場で「予定調和の営業」を経験してきました。だからこそ、システム（AIやツール）を使えば「誰に時間を向けるか」が誰にでも分かりやすくお伝えできます。
                                </p>
                                <p>
                                    あなたの経験を最高の価値に変換し、自立への道をサポートします。
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 text-sm">
                                <div className="border-l-2 border-[#d4af37] pl-4">
                                    <p className="font-bold text-white mb-1">豊富な支援実績</p>
                                    <p className="text-slate-400 font-light text-xs">ランサーズ等で高評価を獲得</p>
                                </div>
                                <div className="border-l-2 border-[#d4af37] pl-4">
                                    <p className="font-bold text-white mb-1">AI x マーケティング</p>
                                    <p className="text-slate-400 font-light text-xs">最新ツールの実践的な活用法</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. アドバイザープロフィール */}
                    <div className="flex flex-col md:flex-row-reverse items-stretch gap-0 bg-[#0f172a] rounded-sm overflow-hidden border border-slate-800 shadow-2xl w-full md:w-11/12 ml-auto">
                        {/* Image Right */}
                        <div className="w-full md:w-1/3 relative h-[300px] md:h-auto">
                            <Image
                                src="/アドバイザー 山田 千穂.png"
                                alt="アドバイザー：山田 千穂"
                                layout="fill"
                                objectFit="cover"
                                className="transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Text Left */}
                        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <p className="text-slate-500 text-xs tracking-widest font-bold uppercase mb-2">Advisor</p>
                            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-wider font-serif">山田 千穂</h3>

                            <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
                                <p>
                                    在宅ワーク支援および女性のキャリア形成に関する豊富な知見を持ち、
                                    受講生一人ひとりの「強み」や「アイデンティティ」の発掘を多角的にサポートします。
                                </p>
                                <p>
                                    女性ならではの視点と、きめ細やかなサポートで、あなたのビジネス構築を併走いたします。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
