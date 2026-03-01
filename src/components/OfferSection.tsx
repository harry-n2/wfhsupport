import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const reemploymentItems = [
    { label: "月収", value: "会社が一方的に決める上限額" },
    { label: "労働時間", value: "週40時間以上の拘束" },
    { label: "収入の上限", value: "会社の給与テーブルが上限" },
    { label: "育児との両立", value: "保育園必須・時短制限あり" },
    { label: "職歴ブランクの影響", value: "採用難・マミートラック確定" },
    { label: "将来性", value: "AIによる代替リスクあり" },
]

const ownerItems = [
    { label: "月収", value: "高単価講座1件で投資回収可能" },
    { label: "労働時間", value: "AIが代行・細切れ時間で運営" },
    { label: "収入の上限", value: "販売数×単価で無制限" },
    { label: "育児との両立", value: "在宅完結・保育園不要" },
    { label: "職歴ブランクの影響", value: "ゼロ。経験がコンテンツになる" },
    { label: "将来性", value: "AIを使う側として市場参入" },
]

const features = [
    "講座開発（コンセプト設計・カリキュラム構築）",
    "LP制作（コピーライティング・デザイン指示）",
    "アプリ構築（ノーコード・AIコード自動生成）",
    "ステップ配信設計（成約までの自動フォロー）",
    "集客SNS投稿案・広告コピー自動生成",
    "売れるまでのPDCA改善サポート",
]

export function OfferSection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container px-6 md:px-12 mx-auto max-w-5xl">

                {/* 上部：対比ビジュアル（左＝苦悩、右＝活躍） */}
                <div className="grid md:grid-cols-2 gap-0 mb-16 overflow-hidden rounded-sm shadow-lg">
                    <div className="relative h-48 md:h-64">
                        <Image
                            src="https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=600&q=80"
                            alt="再就職に悩む女性"
                            layout="fill"
                            objectFit="cover"
                            className="grayscale"
                        />
                        <div className="absolute inset-0 bg-slate-800/60 flex items-end p-6">
                            <p className="text-white text-sm font-light">時間を切り売りする毎日</p>
                        </div>
                    </div>
                    <div className="relative h-48 md:h-64">
                        <Image
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                            alt="自立して活躍する女性"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/50 flex items-end p-6">
                            <p className="text-[#d4af37] text-sm font-bold">自分の資産で自由に生きる</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-4">Offer</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-[1.3]">
                        時給1,000円で時間を切り売りするか、<br />
                        <span className="text-[#d4af37]">高単価の資産</span>をAIと築くか。
                    </h2>
                    <p className="text-slate-500 mt-6 font-light text-lg">賢い選択はどちらですか？</p>
                </div>

                <div className="grid md:grid-cols-2 gap-0 mb-20 border border-slate-200">
                    <div className="p-8 md:p-10">
                        <h3 className="text-lg font-bold text-slate-500 mb-8 text-center tracking-widest uppercase">再就職（労働収入）</h3>
                        <div className="space-y-5">
                            {reemploymentItems.map((item, i) => (
                                <div key={i} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                                    <span className="text-slate-500 text-sm font-light flex-shrink-0">{item.label}</span>
                                    <span className="text-red-500 text-sm font-medium text-right flex items-start gap-2">
                                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 md:p-10">
                        <h3 className="text-lg font-bold text-[#d4af37] mb-8 text-center tracking-widest uppercase">AI講座オーナー（資産収入）</h3>
                        <div className="space-y-5">
                            {ownerItems.map((item, i) => (
                                <div key={i} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                                    <span className="text-slate-300 text-sm font-light flex-shrink-0">{item.label}</span>
                                    <span className="text-[#d4af37] text-sm font-medium text-right flex items-start gap-2">
                                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* オファーボックス */}
                <div className="border-2 border-[#d4af37] relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row">
                        {/* 女性画像サイドパネル */}
                        <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                                alt="自信を持って活躍する女性"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/30"></div>
                        </div>

                        {/* テキスト */}
                        <div className="p-10 md:p-12 text-center flex-1 relative z-10">
                            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-bold mb-4">Special Offer</p>
                            <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-8">
                                高単価講座・構築エンジン極
                            </h3>

                            <div className="space-y-3 mb-10 text-left max-w-md mx-auto">
                                {features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                                        <span className="text-slate-700 font-light text-base">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="w-full sm:w-auto px-12 py-8 text-lg font-bold rounded-none bg-[#d4af37] hover:bg-[#b5952f] text-slate-900 tracking-widest shadow-xl transition-all duration-300">
                                <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                                    まずは無料相談から始める
                                </Link>
                            </Button>
                            <p className="text-slate-400 text-sm mt-4">失業保険が切れる前に。相談は無料です。</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
