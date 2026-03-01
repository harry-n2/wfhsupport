import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DiagnosticTool } from "@/components/DiagnosticTool"
import { BusinessOverview } from "@/components/BusinessOverview"
import { ProfileSection } from "@/components/ProfileSection"
import { AchievementsSection } from "@/components/AchievementsSection"
import { VisionSection } from "@/components/VisionSection"
import { CtaSection } from "@/components/CtaSection"
import { PainSection } from "@/components/PainSection"
import { AmplifySection } from "@/components/AmplifySection"
import { TestimonySection } from "@/components/TestimonySection"
import { FaqSection } from "@/components/FaqSection"
import { OfferSection } from "@/components/OfferSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Circulation Style) */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Images Group */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=2000&q=80"
            alt="在宅ワークで輝く女性"
            layout="fill"
            objectFit="cover"
            objectPosition="65% center"
            priority
            className="opacity-85 transform scale-105"
          />
          {/* Accent Image 2 - Overlay */}
          <div className="absolute bottom-10 left-10 w-72 h-48 rounded-sm overflow-hidden hidden lg:block opacity-30 mix-blend-luminosity transform -rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
              alt="洗練された執務"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Subtle Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/55 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 px-6 md:px-12 lg:px-24 mx-auto w-full">
          <div className="flex flex-col items-start justify-center max-w-3xl text-left space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-2">
                World Trade Next
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif tracking-tight text-white leading-[1.15] drop-shadow-lg">
                「一人の専門家」としての<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white">新しい名前</span> を手に入れる。
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mt-6 leading-relaxed max-w-xl font-light">
                商材・スキル不要。<br />
                アイデンティティ再生診断から始める新しい働き方。<br />
                あなたの隠れた価値を開花させる、プロフェッショナルな講座オーナーへの道。
              </p>
            </div>

            <div className="w-full pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              <Button asChild className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-none bg-white text-slate-900 hover:bg-[#d4af37] hover:text-white shadow-2xl transition-all duration-300 border-l-4 border-[#d4af37] hover:border-white">
                <Link href="#diagnostic-tool">
                  【無料】あなたの経験が「圧倒的な価値」に変わるか診断する
                </Link>
              </Button>
              <p className="text-sm text-slate-300 mt-3 font-light tracking-wide">※3分のAI診断 / LINEで結果の全容をお届け</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Section (共感・痛みの言語化) */}
      <PainSection />

      {/* 3. Diagnostic Tool Section (アイデンティティ再生診断) */}
      <DiagnosticTool />

      {/* 4. Amplify Section (放置リスク・5年後シミュレーション) */}
      <AmplifySection />

      {/* 5. Business Overview (事業概要) */}
      <BusinessOverview />

      {/* 6. Profile Section (代表・アドバイザー) */}
      <ProfileSection />

      {/* 7. Achievements Section (実績・SNS) */}
      <AchievementsSection />

      {/* 8. Testimony Section (数値実績・ビフォーアフター) */}
      <TestimonySection />

      {/* 9. FAQ Section (不安解消) */}
      <FaqSection />

      {/* 10. Vision Section (ビジョンへの誘導) */}
      <VisionSection />

      {/* 11. Offer Section (価格・比較表) */}
      <OfferSection />

      {/* 12. CTA Section (最終LINE誘導) */}
      <CtaSection />

    </div>
  )
}
