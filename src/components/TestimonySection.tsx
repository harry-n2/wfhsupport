import Image from "next/image"

const stats = [
    {
        value: "94%",
        label: "講座開発成功率",
        desc: "専門知識ゼロの主婦が1ヶ月以内に商品構成を完了した実績",
        img: "https://images.unsplash.com/photo-1624091844772-554661d10173?auto=format&fit=crop&w=200&q=80",
    },
    {
        value: "80%",
        label: "労働時間削減",
        desc: "手動100時間かかるLP・配信設定をAIが20時間以内に短縮",
        img: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=200&q=80",
    },
    {
        value: "高単価",
        label: "成約モデル",
        desc: "単発相談を高単価の継続講座へアップセルする成約構造",
        img: "https://images.unsplash.com/photo-1536291734366-71f75ba1a9db?auto=format&fit=crop&w=200&q=80",
    },
    {
        value: "7日",
        label: "最短構築期間",
        desc: "LP・アプリ・配信設定まで最短7日で完結した実績",
        img: "https://images.unsplash.com/photo-1610604049055-cd3d9bb4660f?auto=format&fit=crop&w=200&q=80",
    },
]

const headlines = [
    {
        type: "恐怖訴求",
        copy: "一生、夫の顔色を伺って生きますか？失業保険が尽きる前に、AIで「個人のATM」を作る方法",
    },
    {
        type: "プライド訴求",
        copy: "「〇〇ちゃんのママ」で終わるつもりはない。あなたのキャリアを高単価講座に変える資産構築術",
    },
    {
        type: "即効性訴求",
        copy: "最短7日でLP・アプリが完成。無職から10日で「講座オーナー」になる全手順",
    },
    {
        type: "比較訴求",
        copy: "再就職して時間を切り売りするか、在宅で高単価講座を販売するか。賢い選択はどちらですか？",
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
    "月商が大幅に向上した講座オーナー",
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

                {/* 数値グリッド + 各人物ポートレート */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stats.map((s, i) => (
                        <div key={i} className="border border-slate-200 p-6 text-center hover:border-[#d4af37] transition-colors group">
                            <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-4 border-2 border-slate-200 group-hover:border-[#d4af37] transition-colors">
                                <Image src={s.img} alt={s.label} width={56} height={56} className="object-cover w-full h-full" />
                            </div>
                            <div className="text-3xl md:text-4xl font-serif font-bold text-slate-900 group-hover:text-[#d4af37] transition-colors mb-2">
                                {s.value}
                            </div>
                            <div className="text-xs font-bold tracking-widest text-slate-700 mb-2 uppercase">{s.label}</div>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ビフォー・アフター（写真付き） */}
                <div className="bg-slate-50 mb-16 overflow-hidden">
                    <h3 className="text-2xl font-bold font-serif text-slate-900 text-center py-10">ビフォー・アフター</h3>
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative">
                            <div className="absolute inset-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1526746161-2ed96de67b9f?auto=format&fit=crop&w=600&q=80"
                                    alt="保活失敗直後の女性"
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-30"
                                />
                                <div className="absolute inset-0 bg-slate-200/80"></div>
                            </div>
                            <div className="relative z-10 p-8">
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
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1475823678248-624fc6f85785?auto=format&fit=crop&w=600&q=80"
                                    alt="活躍する女性講座オーナー"
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-30"
                                />
                                <div className="absolute inset-0 bg-slate-900/85"></div>
                            </div>
                            <div className="relative z-10 p-8">
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
                </div>

                {/* A/Bヘッドライン */}
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
