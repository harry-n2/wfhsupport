import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DiagnosticTool } from "@/components/DiagnosticTool"
import { FreeToolSection } from "@/components/FreeToolSection"
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
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Images Group */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/images/hero_japanese_mom.png"
            alt="在宅ワークで輝く女性"
            layout="fill"
            objectFit="cover"
            objectPosition="center right"
            priority
            className="opacity-80"
          />

          {/* Subtle Dark Gradient Overlay for text readability (darker on left) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent md:w-2/3"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80"></div>
        </div>

        <div className="container relative z-10 px-6 md:px-12 lg:px-24 mx-auto w-full">
          <div className="flex flex-col items-start justify-center max-w-3xl text-left space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <p className="text-[#d4af37] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-2">
                World Trade Next
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-white leading-snug drop-shadow-lg">
                「一人の専門家」としての<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white">新しい名前</span>を手に入れる。
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-200 mt-6 leading-relaxed max-w-xl font-light">
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

      {/* 3.5. Free Tool Section (無料AIツール配布) */}
      <FreeToolSection />

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
