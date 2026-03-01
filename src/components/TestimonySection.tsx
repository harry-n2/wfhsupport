const stats = [
    {
        value: "94%",
        label: "講座開発成功率",
        desc: "専門知識ゼロの主婦が1ヶ月以内に商品構成を完了した実績",
    },
    {
        value: "80%",
        label: "労働時間削減",
        desc: "手動100時間かかるLP・配信設定をAIが20時間以内に短縮",
    },
    {
        value: "30万円",
        label: "高単価成約モデル",
        desc: "5,000円の単発相談を30万円の継続講座へアップセルする成約構造",
    },
    {
        value: "7日",
        label: "最短構築期間",
        desc: "LP・アプリ・配信設定まで最短7日で完結した実績",
    },
]

const headlines = [
    {
        type: "恐怖訴求",
        copy: "一生、夫の顔色を伺って生きますか？失業保険が尽きる前に、AIで「個人のATM」を作る方法",
    },
    {
        type: "プライド訴求",
        copy: "「〇〇ちゃんのママ」で終わるつもりはない。あなたのキャリアを30万円の講座に変える資産構築術",
    },
    {
        type: "即効性訴求",
        copy: "最短7日でLP・アプリが完成。無職から10日で「講座オーナー」になる全手順",
    },
    {
        type: "比較訴求",
        copy: "再就職して月収20万を目指すか、在宅で30万の講座を1つ売るか。賢い選択はどちらですか？",
    },
    {
        type: "自動化訴求",
        copy: "知識はある。でも時間がない。育児の合間にAIが働く、24時間自動収益エンジンの正体",
    },
]

const beforeItems = [
    "保育園全落ち・月収0円",
    "売るものが思い浮かばない",
    "時間はあるが収入ゼロ",
    "職歴の空白が増えていく",
]

const afterItems = [
    "月商50万円の講座オーナー",
    "AIが24時間自動で販売",
    "育児の合間に構築・運営",
    "「〇〇の専門家」として名乗れる",
]

export function TestimonySection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container px-6 md:px-12 mx-auto max-w-6xl">

                <div className="text-center mb-16">
                    <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-4">Proof</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900">
                        数値が証明する、<br />再現性のある実績
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stats.map((s, i) => (
                        <div key={i} className="border border-slate-200 p-8 text-center hover:border-[#d4af37] transition-colors group">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 group-hover:text-[#d4af37] transition-colors mb-3">
                                {s.value}
                            </div>
                            <div className="text-xs font-bold tracking-widest text-slate-700 mb-3 uppercase">{s.label}</div>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-50 p-8 md:p-16 mb-16">
                    <h3 className="text-2xl font-bold font-serif text-slate-900 text-center mb-12">ビフォー・アフター</h3>
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="bg-slate-200 p-8">
                            <p className="text-slate-500 text-xs tracking-widest uppercase font-bold mb-6">Before（保活失敗直後）</p>
                            <ul className="space-y-4">
                                {beforeItems.map((item, i) => (
                                    <li key={i} className="text-slate-700 font-light flex items-center gap-3 text-base">
                                        <span className="text-red-400 font-bold flex-shrink-0">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-900 p-8">
                            <p className="text-[#d4af37] text-xs tracking-widest uppercase font-bold mb-6">After（構築エンジン導入3ヶ月後）</p>
                            <ul className="space-y-4">
                                {afterItems.map((item, i) => (
                                    <li key={i} className="text-white font-light flex items-center gap-3 text-base">
                                        <span className="text-[#d4af37] font-bold flex-shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 text-center mb-8">
                        あなたに刺さる言葉は、どれですか？
                    </h3>
                    <div className="space-y-4">
                        {headlines.map((h, i) => (
                            <div key={i} className="border-l-4 border-[#d4af37] pl-6 py-4 bg-slate-50">
                                <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">{h.type}</span>
                                <p className="text-slate-800 font-medium text-base md:text-lg mt-1 leading-relaxed">{h.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
