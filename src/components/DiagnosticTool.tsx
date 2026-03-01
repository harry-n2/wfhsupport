"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function DiagnosticTool() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        dream: "",
        respect: "",
        consulted: ""
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else {
            setIsAnalyzing(true);
            setTimeout(() => {
                setIsAnalyzing(false);
                setShowResult(true);
            }, 2000);
        }
    };

    return (
        <section id="diagnostic-tool" className="py-24 relative overflow-hidden flex items-center justify-center min-h-[800px]">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-slate-100">
                <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"
                    alt="働く大人の女性"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                    priority={false}
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden p-8 md:p-14">

                    <div className="text-center mb-10">
                        <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-2">AI Diagnosis</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wider">アイデンティティ再生診断</h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
                            ママ・妻以外の「新しい名前」を見つけませんか？<br />
                            あなたのこれまでの経験が、いくらで売れるかAIが瞬時に鑑定します。
                        </p>
                    </div>

                    <div className="min-h-[350px] flex flex-col justify-center max-w-2xl mx-auto">
                        {!showResult && !isAnalyzing && (
                            <div className="space-y-10 animate-in fade-in duration-500">
                                <div className="flex justify-between mb-8 max-w-xs mx-auto">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-1.5 flex-1 mx-2 rounded-full transition-colors duration-300 ${step >= i ? 'bg-slate-800' : 'bg-slate-200'}`} />
                                    ))}
                                </div>

                                {step === 1 && (
                                    <div className="space-y-6">
                                        <label className="block text-xl font-medium text-slate-800">Q1. かつての「夢」や、諦めてしまった目標は何ですか？</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg p-5 border-b-2 border-slate-300 bg-white/50 focus:bg-white focus:border-slate-800 focus:ring-0 transition-all outline-none rounded-t-md"
                                            placeholder="例：デザイナー、海外移住、起業..."
                                            value={formData.dream}
                                            onChange={(e) => setFormData({ ...formData, dream: e.target.value })}
                                        />
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <label className="block text-xl font-medium text-slate-800">Q2. あなたが「尊敬する人」や、憧れる生き方をしている人は誰ですか？</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg p-5 border-b-2 border-slate-300 bg-white/50 focus:bg-white focus:border-slate-800 focus:ring-0 transition-all outline-none rounded-t-md"
                                            placeholder="例：特定の経営者、自由な働き方をしている友人..."
                                            value={formData.respect}
                                            onChange={(e) => setFormData({ ...formData, respect: e.target.value })}
                                        />
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <label className="block text-xl font-medium text-slate-800">Q3. 周りの人から「よく相談されること」や「褒められること」は何ですか？</label>
                                        <input
                                            type="text"
                                            className="w-full text-lg p-5 border-b-2 border-slate-300 bg-white/50 focus:bg-white focus:border-slate-800 focus:ring-0 transition-all outline-none rounded-t-md"
                                            placeholder="例：子育ての悩み、家事の工夫、話を聞くのが上手..."
                                            value={formData.consulted}
                                            onChange={(e) => setFormData({ ...formData, consulted: e.target.value })}
                                        />
                                    </div>
                                )}

                                <div className="pt-4 text-center">
                                    <Button
                                        onClick={handleNext}
                                        disabled={
                                            (step === 1 && !formData.dream) ||
                                            (step === 2 && !formData.respect) ||
                                            (step === 3 && !formData.consulted)
                                        }
                                        className="w-full sm:w-auto px-12 h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
                                    >
                                        {step === 3 ? 'AIによる鑑定結果を見る' : '次へ進む'}
                                    </Button>
                                    <div className="mt-8 flex justify-center opacity-90">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                                            alt="親身に寄り添う女性"
                                            width={80}
                                            height={80}
                                            className="rounded-full shadow-md border-2 border-white object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {isAnalyzing && (
                            <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500 py-12">
                                <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-800 rounded-full animate-spin"></div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-serif text-slate-800">AIがあなたの経験を統合中...</h3>
                                    <p className="text-slate-500">新しいアイデンティティを生成しています</p>
                                </div>
                            </div>
                        )}

                        {showResult && (
                            <div className="space-y-10 animate-in zoom-in-95 duration-700">
                                <div className="text-center space-y-6">
                                    <h3 className="text-xl text-slate-500 font-medium tracking-widest">再定義されたあなたの職業名</h3>
                                    <div className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 py-2 font-serif">
                                        【 自己肯定感・プロデューサー 】
                                    </div>
                                    <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                                        あなたの「{formData.consulted || '傾聴力'}」という強みは、<br className="hidden md:inline" />
                                        誰もが憧れる、唯一無二の価値を持つビジネスになります。
                                    </p>
                                </div>

                                {/* モザイクエリア */}
                                <div className="relative mt-12 p-8 border border-slate-200 rounded-2xl bg-white/80 shadow-inner overflow-hidden">
                                    <div className="filter blur-md opacity-30 select-none">
                                        <h4 className="font-bold text-xl mb-4 text-slate-800">事業化ロードマップ概要</h4>
                                        <p className="mb-2">ステップ1：ターゲットとなる顧客層のペルソナを精密に定義する。</p>
                                        <p className="mb-2">ステップ2：あなたの経験を体系化した高単価講座カリキュラムを構築。</p>
                                        <p className="mb-6">ステップ3：SNSとAIツールを活用した自動集客ファネルを実装。</p>
                                        <h4 className="font-bold text-xl mt-6 mb-4 text-slate-800">AI推奨：高単価講座タイトル案</h4>
                                        <p className="text-lg">『〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇』</p>
                                    </div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm p-4 text-center">
                                        <div className="bg-[#d4af37] text-white text-xs tracking-widest uppercase font-bold px-6 py-2 rounded-full mb-6 shadow-md">
                                            Locked (80%)
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-8 leading-snug drop-shadow-sm">
                                            詳細なレポートと<br />具体的タイトル案を受け取る
                                        </h3>
                                        <Button asChild className="w-full sm:w-auto px-10 h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-[#d4af37]">
                                            <Link href="https://line.me/R/ti/p/@755crlgt?oat_content=url&ts=05012102" target="_blank" rel="noopener noreferrer">
                                                LINEで全容を無料公開
                                            </Link>
                                        </Button>
                                        <p className="text-sm text-slate-600 mt-5">※友だち追加後、すぐに診断結果の続きがお読みいただけます。</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
