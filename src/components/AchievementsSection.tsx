import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Users, Award, TrendingUp } from "lucide-react"

export function AchievementsSection() {
    const snsLinks = [
        {
            name: "Lancers",
            url: "https://www.lancers.jp/profile/harry-n2",
            description: "認定ランサーとしての実績",
            icon: <Award className="w-5 h-5 text-white" />,
            bgColor: "bg-gradient-to-br from-blue-600 to-blue-800"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/harry-n-jp/",
            description: "ビジネスプロフェッショナル",
            icon: <Users className="w-5 h-5 text-white" />,
            bgColor: "bg-gradient-to-br from-blue-700 to-blue-900"
        },
        {
            name: "X (旧Twitter)",
            url: "https://x.com/Sekaikun_office",
            description: "最新のマーケティング知見",
            icon: <span className="text-xl font-bold font-serif leading-none text-white">𝕏</span>,
            bgColor: "bg-gradient-to-br from-slate-800 to-black"
        },
        {
            name: "note",
            url: "https://note.com/harry_n2",
            description: "講座構築のインサイト",
            icon: <TrendingUp className="w-5 h-5 text-white" />,
            bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-700"
        }
    ]

    return (
        <section id="achievements" className="py-24 md:py-32 relative overflow-hidden flex items-center min-h-[800px]">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
                    alt="実績と信頼"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90 grayscale"
                />
                <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-12 mx-auto">
                <div className="text-center mb-20">
                    <p className="text-[#d4af37] font-serif tracking-[0.2em] text-sm uppercase mb-4">Achievements</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-widest text-white mb-6">
                        実績と信頼の証
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        長年のビジネス経験に裏打ちされた確かな実績。<br className="hidden md:inline" />各プラットフォームでの精力的な活動をご覧ください。
                    </p>
                </div>

                {/* Accent Image for Achievements */}
                <div className="absolute top-1/4 right-[-10%] w-[400px] h-[600px] opacity-10 rotate-12 pointer-events-none hidden lg:block z-0 mix-blend-luminosity">
                    <Image src="https://images.unsplash.com/photo-1573497491208-6f16f92ff4cb?auto=format&fit=crop&w=600&q=80" layout="fill" objectFit="cover" alt="アクセント" className="rounded-full blur-[2px] grayscale" />
                </div>

                {/* 1. ハイライト実績 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto relative z-10">
                    {[
                        { label: "海外/国内営業歴", value: "30", suffix: "年" },
                        { label: "ランサーズ評価", value: "4.9", suffix: "高評価" },
                        { label: "リモート案件", value: "多数", suffix: "完遂" },
                        { label: "AI導入支援", value: "豊富な", suffix: "実績" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-dark p-8 rounded-sm text-center transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 group border-t-2 border-transparent hover:border-[#d4af37]">
                            <div className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tighter group-hover:text-[#d4af37] transition-colors">
                                {stat.value}<span className="text-lg font-sans font-light text-slate-400 ml-1">{stat.suffix}</span>
                            </div>
                            <div className="text-sm font-bold tracking-widest text-slate-300">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 2. SNS & プラットフォーム リンク */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {snsLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-6 glass-dark rounded-sm hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-[#d4af37]/50"
                        >
                            <div className={`w-12 h-12 rounded-full ${link.bgColor} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-2 font-serif tracking-wide group-hover:text-[#d4af37] transition-colors flex justify-between items-center">
                                    {link.name}
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">
                                    {link.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
