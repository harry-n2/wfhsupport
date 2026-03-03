import Image from "next/image"

export default function VisionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-slate-900">
                    <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=2000&q=80"
                        alt="Our Vision"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center 15%"
                        priority
                        className="opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="container relative z-10 px-6 md:px-12 mx-auto text-center mt-20">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <p className="text-[#d4af37] font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-4">Our Vision</p>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-widest text-white leading-tight">
                            私たちが目指す世界
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container px-6 md:px-12 mx-auto max-w-4xl space-y-16">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-[1.3] drop-shadow-sm font-bold">
                            AIは、人間をもっと<br className="md:hidden" />
                            <span className="text-[#d4af37] italic">自由に</span><br className="md:hidden" />
                            楽しくする存在。
                        </h2>
                        <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-8"></div>
                    </div>

                    <div className="space-y-8 text-lg text-slate-600 leading-loose font-light tracking-wide text-justify md:text-left">
                        <p>
                            World Trade Nextは、「人間らしい豊かさ」を取り戻すためのプラットフォームです。
                        </p>
                        <p>
                            現代の社会では、多くの人が「作業」に時間を奪われ、本当に大切なこと、自分らしい生き方に時間を使えていません。労働集約型の働き方から抜け出せず、本来の力を発揮できていない人が数多く存在します。
                        </p>
                        <p>
                            私たちは、AIや最新のシステムを活用することで、この状況を根本から変革したいと考えています。システムに任せられることは全てシステムに任せ、人間は人間にしかできない「創造性」や「ホスピタリティ」「感情の共有」に注力するべきです。
                        </p>
                        <p>
                            「一人の専門家」としてのアイデンティティを確立し、世界に一つだけの価値のある講座を提供する。この自立した働き方を全ての人が選択できるようになること、それこそが私たちの使命です。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-slate-100">
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="チーム" layout="fill" objectFit="cover" className="grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-slate-800">共に歩むパートナーとして</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                あなたの経験は、価値がないのではありません。ただ、見せ方と繋げ方を知らないだけです。私たちがこれまでの30年の営業知見と、最新のAIマーケティングで、あなたの価値が最も高く評価されるステージへと導きます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
