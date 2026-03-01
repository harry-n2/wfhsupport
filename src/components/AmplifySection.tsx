const scenarios = [
    {
        year: "1年後",
        salary: "月収0円のまま",
        savings: "貯金 −120万円",
        career: "職歴ブランク1年。求人票で「即戦力」と弾かれ始める。",
        color: "text-orange-400",
        border: "border-orange-400",
    },
    {
        year: "3年後",
        salary: "月収0円のまま",
        savings: "貯金 −360万円",
        career: "職歴ブランク3年。パート・時給1,000円以下の選択肢しか残らない。",
        color: "text-red-400",
        border: "border-red-400",
    },
    {
        year: "5年後",
        salary: "月収0円のまま",
        savings: "貯金が底をつく",
        career: "40代・職歴空白・「誰でも替えが効く労働力」としての再出発。",
        color: "text-red-600",
        border: "border-red-600",
    },
]

export function AmplifySection() {
    return (
        <section className="bg-slate-50 py-24 md:py-32">
            <div className="container px-6 md:px-12 mx-auto max-w-5xl">

                <div className="text-center mb-16">
                    <p className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase mb-4">Warning</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-[1.3]">
                        「何もしない」を選んだ場合の<br />
                        <span className="text-red-500">5年後シミュレーション</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg font-light">
                        現状維持は「安全」ではない。現状維持は「後退」である。
                    </p>
                </div>

                <div className="space-y-6 mb-16">
                    {scenarios.map((s, i) => (
                        <div key={i} className={`bg-white border-l-4 ${s.border} p-8 shadow-sm flex flex-col md:flex-row md:items-center gap-6`}>
                            <div className={`text-5xl md:text-6xl font-serif font-bold ${s.color} w-32 flex-shrink-0 text-center`}>
                                {s.year}
                            </div>
                            <div className="flex-1 border-l border-slate-200 pl-6 space-y-2">
                                <p className="text-slate-800 font-bold text-lg">{s.salary}</p>
                                <p className={`font-bold text-lg ${s.color}`}>{s.savings}</p>
                                <p className="text-slate-600 font-light leading-relaxed">{s.career}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 text-white p-10 md:p-16 text-center">
                    <p className="text-2xl md:text-3xl font-serif font-bold leading-[1.7] mb-6">
                        5年後、子供が手を離れた時に残っているのは<br />
                        <span className="text-red-400">40代・職歴ブランクあり・</span><br />
                        <span className="text-red-400">「誰でも替えが効く労働力」</span>としての自分だけです。
                    </p>
                    <div className="w-12 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
                    <p className="text-slate-400 font-light text-lg leading-relaxed">
                        失業保険を生活費で溶かすか、一生モノの「稼ぐ仕組み」に変えるか。<br />
                        その選択を、今日、あなたはしています。
                    </p>
                </div>

            </div>
        </section>
    )
}
