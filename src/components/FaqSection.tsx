"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const faqs = [
    {
        q: "本当に売るものがなくても大丈夫？",
        a: "はい。AIがあなたの過去の職歴や趣味を深掘りし、市場価値のある「商品」を特定します。「何もない」という思い込みこそが、最大のブロックです。",
    },
    {
        q: "ITが苦手ですが、アプリやLPは作れますか？",
        a: "本エンジンが構成案とコードを自動生成するため、指示通りに配置するだけで完成します。プログラミング知識は一切不要です。",
    },
    {
        q: "サービス料金は高くないですか？",
        a: "高単価講座を1つ成約させるだけで投資回収が可能です。会社員として月給を目指すより、圧倒的に低リスクです。失業保険を生活費で消耗させるより、一生モノの仕組みに変える選択です。",
    },
    {
        q: "保育園が決まっていなくてもできますか？",
        a: "在宅で完結するため、お子様が横にいても自分のペースで構築可能です。スマートフォンのみでも全工程が完結します。",
    },
    {
        q: "育児中でまとまった時間が取れませんが、構築可能ですか？",
        a: "可能です。本エンジンは「細切れ時間の資産化」に特化しています。AIが構成案や執筆の8割を代行するため、5〜10分の作業を積み重ねるだけで、最短2週間でLPから配信設定まで完結します。",
    },
    {
        q: "講座を売るための「集客」はどうすればいいですか？",
        a: "集客導線もセットで構築します。AIがあなたのスキルに最適な「SNS投稿案」や「広告コピー」を自動生成。集客から成約までを一つの「構築エンジン」として提供するため、営業活動に走り回る必要はありません。",
    },
    {
        q: "失業中での自己投資は正直怖いです。",
        a: "その「恐怖」を「回収計画」に変えてください。高単価講座を1件成約させるだけで、投資額の回収が可能です。後者を選んだ方のための、徹底した個別サポート体制を用意しています。",
    },
    {
        q: "すでに似たような講座が世の中に溢れていませんか？",
        a: "AIが「競合不在のポジション」を自動抽出します。あなたの「保活失敗」や「独自のキャリア」という個人的なストーリーをAIが分析し、世界に一つだけのコンセプトを言語化します。",
    },
    {
        q: "パソコンを持っていません。スマホだけでできますか？",
        a: "スマホのみで完結可能です。構築エンジンの操作、AIとの対話、LPやアプリの管理画面はすべてスマートフォンに最適化されています。授乳中や寝かしつけの間でもビジネスを構築できます。",
    },
    {
        q: "商品が完成した後に売れなかったらどうなりますか？",
        a: "AIによる「改善データ分析」を実施します。反応が悪い場合は、AIが即座に「ターゲット設定」や「コピー」の修正案を出し、売れるまでPDCAを回す仕組みを提供します。あなたは一人で悩む必要はありません。",
    },
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="bg-slate-50 py-24 md:py-32">
            <div className="container px-6 md:px-12 mx-auto max-w-4xl">

                {/* ヘッダー + 相談員イメージ */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#d4af37]/60 shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=400&q=80"
                            alt="サポート担当の女性"
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-4">FAQ</p>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900">
                            「やらない理由」を、<br />全て解消します
                        </h2>
                        <p className="text-slate-500 mt-4 font-light text-lg">
                            よくいただく10の不安に、事実で答えます。
                        </p>
                    </div>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-slate-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 text-base md:text-lg pr-4 leading-relaxed">
                                    <span className="text-[#d4af37] mr-2">Q{i + 1}.</span>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 border-t border-slate-100">
                                    <p className="text-slate-600 font-light leading-relaxed pt-4 text-base">
                                        <span className="text-red-500 font-bold mr-2">A.</span>
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
