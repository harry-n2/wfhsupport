import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function BusinessOverview() {
    return (
        <section id="overview" className="bg-white">

            {/* Upper Content: Empathy & Solution */}
            <div className="py-24 md:py-32">
                <div className="container px-4 md:px-12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Image Left */}
                        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/solution_japanese_mom.png"
                                alt="自立して働く女性"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-[2s]"
                            />
                        </div>

                        {/* Text Right */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div>
                                <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-3">Our Solution</p>
                                <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 leading-[1.2]">
                                    商材ゼロから月100万円への<br />
                                    <span className="text-slate-500 font-light">最短ルート</span>
                                </h2>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                保育園に落ちてしまい外で働くことができない。<br />
                                在宅ワークを探しているが、単価が安すぎてもう消耗したくない。<br />
                                自分でビジネスを始めたいが、売る「商材」がない。<br /><br />
                                そんな悩みを抱えるあなたへ、World Trade Nextが提供する「高単価講座・構築エンジン極」は、あなたの経験を価値に変え、自立した働き方を実現するための強力なソリューションです。
                            </p>

                            <div className="pt-4 border-t border-slate-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 font-serif tracking-wide">「労働集約」からの脱却</h3>
                                <div className="space-y-4">
                                    <p className="text-slate-600 leading-relaxed font-light">
                                        クライアントにペコペコする働き方はもう終わりにしましょう。<br />
                                        「構築エンジン極」を使えば、あなた専用の高単価講座が一瞬で完成。<br />
                                        販売者（講座オーナー）側に回ることで、利益率と時間的自由が圧倒的に高まります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Content: Roadmap */}
            <div className="bg-slate-50 py-24 md:py-32 relative">
                <div className="container px-4 md:px-12 mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

                        {/* Image Right */}
                        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80"
                                alt="ロードマップを描く女性たち"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-[2s]"
                            />
                        </div>

                        {/* Text Left */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-3">Roadmap</p>
                            <h3 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-12">
                                最短3ヶ月のロードマップ
                            </h3>

                            <div className="space-y-10 pl-2">
                                {[
                                    { month: "1ヶ月目", title: "講座のセットアップ", desc: "『極』を使って、あなたの経験を世界に一つだけの講座パッケージに変換します。", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80" },
                                    { month: "2ヶ月目", title: "集客システムの始動", desc: "AIを活用した最先端の集客システムで、あなたを必要とする潜在顧客にのみアプローチ。", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80" },
                                    { month: "3ヶ月目", title: "プロとしての飛躍", desc: "自身の経験を高い価値の講座として提供し、少数の成約でも十分な利益と自由を生み出します。", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
                                ].map((step, i) => (
                                    <div key={i} className="flex relative items-start">
                                        {i !== 2 && <div className="absolute left-[11px] top-8 bottom-[-40px] w-[1px] bg-slate-200"></div>}
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 border-4 border-white shadow-sm z-10 mt-1"></div>
                                        <div className="ml-8 text-left flex-1 flex flex-col sm:flex-row gap-4 items-start">
                                            <div className="flex-1">
                                                <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-1">{step.month}</p>
                                                <h4 className="text-xl font-bold text-slate-800 mb-2 font-serif">{step.title}</h4>
                                                <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
                                            </div>
                                            <div className="w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden hidden sm:block mt-2">
                                                <Image src={step.img} alt={step.title} width={96} height={96} className="object-cover w-full h-full opacity-80" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-14 pt-8 border-t border-slate-200">
                                <Button asChild className="rounded-none bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 border-l-4 border-[#d4af37]">
                                    <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        詳しい仕組みをLINEで見る
                                        <ArrowRight className="ml-4 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
