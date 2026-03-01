export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24">
            <div className="container px-6 md:px-12 mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm uppercase mb-2">Privacy Policy</p>
                    <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-4">
                        プライバシーポリシー
                    </h1>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm space-y-8 text-slate-600 leading-relaxed font-light">
                    <p>
                        World Trade Next（以下、「当社」）は、ユーザーの個人情報保護の重要性を強く認識し、以下の通りプライバシーポリシーを定めます。
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800 font-serif border-l-4 border-[#d4af37] pl-3">第1条（個人情報の取得）</h2>
                        <p>
                            当社は、ユーザーが当サイトにおいてサービスを利用する際、氏名、メールアドレス、電話番号などの個人情報を適切な手段により取得します。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800 font-serif border-l-4 border-[#d4af37] pl-3">第2条（個人情報の利用目的）</h2>
                        <p>
                            当社が個人情報を収集・利用する目的は、以下のとおりです。
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>当社サービスの提供・運営のため</li>
                            <li>ユーザーからのお問い合わせに回答するため</li>
                            <li>新機能、更新情報、キャンペーン等をご案内するため</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800 font-serif border-l-4 border-[#d4af37] pl-3">第3条（個人情報の第三者提供）</h2>
                        <p>
                            当社は、法令に定められた場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800 font-serif border-l-4 border-[#d4af37] pl-3">第4条（プライバシーポリシーの変更）</h2>
                        <p>
                            本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
