export default function TokushoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24">
            <div className="container px-6 md:px-12 mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-2">Legal</p>
                    <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-4">
                        特定商取引法に基づく表記
                    </h1>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
                    <dl className="divide-y divide-slate-100">
                        {[
                            { label: "販売事業者", value: "World Trade Next" },
                            { label: "運営責任者", value: "西野 直哉" },
                            { label: "所在地", value: "〒284-0043 千葉県四街道市めいわ2-9-4" },
                            { label: "電話番号", value: "TEL: 080-3258-8314" },
                            { label: "メールアドレス", value: "sekaikun.office@gmail.com" },
                            { label: "商品代金以外の必要料金", value: "インターネット接続にかかる通信回線等の諸費用" },
                            { label: "引渡し時期", value: "代金決済完了後、直ちにご利用いただけます。" },
                            { label: "お支払い方法", value: "クレジットカード決済、銀行振込" },
                            { label: "キャンセル・返品について", value: "提供サービスの性質上、ご購入後のキャンセル・返金はお受けできません。" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row py-6 gap-2 sm:gap-6">
                                <dt className="w-full sm:w-1/3 font-bold text-slate-800 shrink-0">{item.label}</dt>
                                <dd className="w-full sm:w-2/3 text-slate-600">{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
