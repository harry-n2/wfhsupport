import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { StickyCtaButton } from "@/components/StickyCtaButton"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
})

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "World Trade Next - 在宅ワーカー向け講座構築支援",
  description: "商材・スキル不要。「一人の専門家」としてのアイデンティティ再生診断から始める新しい働き方。あなたの経験を最高の価値に変える『プロフェッショナルな在宅講座オーナー』輩出プラットフォーム。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 w-full relative z-0">
          {children}
        </main>
        <Footer />
        <StickyCtaButton />
      </body>
    </html>
  )
}
