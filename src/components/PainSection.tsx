import Image from "next/image"

const pains = [
    "保育園に落ちたのは「社会に不要」と言われたのと同じだ。",
    "貯金が減るたびに、自分の寿命が削られている気がする。",
    "大学まで出て、今の役職が「無職」であることのギャップ。",
    "スキルはある。でも、それをどう「金」に変えるか誰も教えてくれない。",
    "5年後、10年後、私はまだこのリビングで絶望しているのか。",
    "インフルエンサーの「好きを仕事に」が、空虚な綺麗事にしか聞こえない。",
    "でも、ここで何もしなければ、一生「何もない私」のまま。",
]

const portraits = [
    {
        src: "https://images.unsplash.com/photo-1606406054219-619c4c2e2100?auto=format&fit=crop&w=200&q=80",
        alt: "同じ悩みを持つ女性",
    },
    {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        alt: "共感する女性",
    },
    {
        src: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?auto=format&fit=crop&w=200&q=80",
        alt: "再起を誓う女性",
    },
]

export function PainSection() {
    return (
        <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
            {/* 背景テクスチャ */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1437623889155-075d40e2e59f?auto=format&fit=crop&w=1600&q=80"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="opacity-10"
                />
                <div className="absolute inset-0 bg-slate-900/80"></div>
            </div>

            <div className="container relative z-10 px-6 md:px-12 mx-auto max-w-4xl">

                <div className="text-center mb-16">
                    <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-4">Your Reality</p>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-[1.4]">
                        こんな本音、<br />心当たりはありませんか？
                    </h2>
                    {/* 3名のポートレート */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        {portraits.map((p, i) => (
                            <div key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#d4af37]/60 shadow-lg">
                                <Image src={p.src} alt={p.alt} width={64} height={64} className="object-cover w-full h-full" />
                            </div>
                        ))}
                        <p className="text-slate-400 text-sm font-light ml-2">同じ悩みを抱える女性たちへ</p>
                    </div>
                </div>

                <div className="space-y-6 mb-20">
                    {pains.map((pain, i) => (
                        <div key={i} className="flex items-start gap-4 border-b border-white/10 pb-6">
                            <span className="text-[#d4af37] font-serif text-xl leading-none mt-1 flex-shrink-0">✓</span>
                            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">{pain}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-12 max-w-3xl mx-auto">

                    <div className="text-center space-y-4">
                        <p className="text-slate-400 text-sm tracking-[0.3em] uppercase">— あなたは悪くない —</p>
                        <p className="text-xl md:text-2xl text-white font-light leading-[1.9]">
                            昨日まで、あなたは組織を支える立派なプロフェッショナルでした。<br />
                            それなのに、たった1枚の「保留通知」が、<br />
                            あなたのキャリアも、自信も、居場所も奪い去った。
                        </p>
                    </div>

                    <div className="w-12 h-[1px] bg-[#d4af37] mx-auto"></div>

                    {/* 感情喚起 + 女性画像 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-48 h-56 flex-shrink-0 rounded-sm overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1650075990015-af095f1659e3?auto=format&fit=crop&w=400&q=80"
                                alt="悩む女性"
                                width={200}
                                height={224}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="space-y-4 flex-1">
                            <p className="text-xl md:text-2xl text-white font-light leading-[1.9]">
                                鏡に映るのは、疲れ果てた「誰かのママ」。<br />
                                ランチ代を惜しみ、夫の顔色を伺い、<br />
                                減り続ける通帳の数字に怯える毎日。
                            </p>
                            <p className="text-xl md:text-2xl text-[#d4af37] font-bold font-serif py-4">
                                「働きたい」。<br />その当たり前の願いさえ、この国では贅沢なのですか？
                            </p>
                        </div>
                    </div>

                    <div className="w-12 h-[1px] bg-[#d4af37] mx-auto"></div>

                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 space-y-6">
                        <p className="text-white text-xl font-bold font-serif">いいえ、悪いのはあなたではありません。</p>
                        <p className="text-slate-300 text-lg font-light leading-relaxed">
                            古い労働体系に、あなたを当てはめようとした社会のバグです。<br />
                            組織に依存するから、誰かに運命を握られる。<br /><br />
                            ならば、その優れた経験（営業・家事・語学・Excel）を、<br />
                            AIという<span className="text-[#d4af37] font-bold">「不眠不休の右腕」</span>に預けてみませんか？
                        </p>
                        <p className="text-white text-xl font-bold font-serif">
                            今こそ、誰にも邪魔されない「自分の城」を、デジタル上に築く時です。
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
