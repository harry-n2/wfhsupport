import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Gift } from "lucide-react"

const targetList = [
    "商材がないけど講座を始めたい",
    "保育園に落ちて、収入源を探している",
    "育児の合間に稼ぐ仕組みを作りたい",
    "専業主婦にはなりたくない",
]

const toolOutputs = [
    "あなただけの講座テーマ・ポジション",
    "売れるターゲット設定とペルソナ",
    "高単価カリキュラム構成案",
    "価格設定の根拠と訴求コピー",
]

const portraits = [
    {
        src: "https://images.unsplash.com/photo-1606406054219-619c4c2e2100?auto=format&fit=crop&w=200&q=80",
        alt: "保育園落選後に講座開設した女性",
    },
    {
        src: "https://images.unsplash.com/photo-1536291734366-71f75ba1a9db?auto=format&fit=crop&w=200&q=80",
        alt: "育児中に在宅ビジネスを始めた女性",
    },
    {
        src: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?auto=format&fit=crop&w=200&q=80",
        alt: "専業主婦から講座オーナーになった女性",
    },
]

export function FreeToolSection() {
    return (
        <section className="bg-white py-20 md:py-28 border-t border-slate-100">
            <div className="container px-6 md:px-12 mx-auto max-w-5xl">

                {/* ラベル */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 bg-[#d4af37] text-white text-xs font-bold tracking-[0.3em] uppercase px-6 py-2 rounded-full shadow-md">
                        <Gift className="w-4 h-4" />
                        Free Gift
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mt-6 leading-[1.4]">
                        公式LINEに登録するだけで<br />
                        <span className="text-[#d4af37]">AIツールを無料プレゼント</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg font-light">
                        「高単価講座・構築エンジン極」を今すぐお届けします
                    </p>
                </div>

                {/* ターゲット共感 + 顔アイコン */}
                <div className="bg-slate-50 rounded-sm p-8 md:p-10 mb-10">
                    <p className="text-center text-slate-700 font-bold text-lg mb-8">こんな方に届けたい</p>

                    {/* 女性ポートレート3枚 */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        {portraits.map((p, i) => (
                            <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#d4af37]/60 shadow-md flex-shrink-0">
                                <Image src={p.src} alt={p.alt} width={80} height={80} className="object-cover w-full h-full" />
                            </div>
                        ))}
                        <p className="text-slate-500 text-sm font-light ml-2 leading-relaxed">
                            同じ悩みを抱えて<br />いたあなたへ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {targetList.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 border border-slate-200">
                                <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                                <span className="text-slate-700 font-light text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ツール紹介ボックス */}
                <div className="bg-slate-900 overflow-hidden mb-10">
                    <div className="flex flex-col md:flex-row">

                        {/* 女性画像サイドパネル */}
                        <div className="relative w-full md:w-52 h-56 md:h-auto flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1624091844772-554661d10173?auto=format&fit=crop&w=400&q=80"
                                alt="講座オーナーとして活躍する女性"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/20"></div>
                        </div>

                        {/* テキスト */}
                        <div className="p-8 md:p-10 flex-1">
                            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-bold mb-4">このツールでできること</p>
                            <h3 className="text-xl md:text-2xl font-bold font-serif text-white mb-6 leading-relaxed">
                                経歴・趣味・得意なことを入力するだけで<br />
                                <span className="text-[#d4af37]">高単価の無形講座をAIが自動開発</span>
                            </h3>
                            <div className="space-y-3">
                                {toolOutputs.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                                        <span className="text-slate-300 font-light text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center border-2 border-[#d4af37] p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="relative z-10">
                        <p className="text-slate-500 font-light mb-3 text-base">
                            商材なし・スキルなしでも大丈夫。まず0円で試してください。
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-8">
                            今すぐ無料で「構築エンジン極」を受け取る
                        </h3>
                        <Button asChild className="w-full sm:w-auto px-12 py-8 text-lg font-bold rounded-none bg-[#d4af37] hover:bg-[#b5952f] text-slate-900 tracking-widest shadow-xl transition-all duration-300">
                            <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                                LINE登録して無料でもらう
                            </Link>
                        </Button>
                        <p className="text-slate-400 text-sm mt-4">
                            完全無料・登録後すぐにお届け・いつでも解除可能
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
