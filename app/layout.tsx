import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  metadataBase: new URL('https://hyaqshiki.com'),
  title: "HyaQShiki-百式- - 生成AIと100日100アプリで未来を創る教育プログラム",
  description: "100日、100の型、100倍の生産力。HyaQShiki-百式-は、AIで効率的にアプリ開発する手法を学び、毎日ひとつアプリを創る教育プログラムです。",
  
  // Canonical URL - set to https://hyaqshiki.com (without www)
  alternates: {
    canonical: "https://hyaqshiki.com",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "HyaQShiki-百式- - 生成AIと100日100アプリで未来を創る教育プログラム",
    description: "100日、100の型、100倍の生産力。そして無限の未来へ。AIを使いこなす武器に変えるための学び。",
    url: "https://hyaqshiki.com",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki-百式- 教育プログラム",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "HyaQShiki-百式- - 生成AIと100日100アプリで未来を創る教育プログラム",
    description: "100日、100の型、100倍の生産力。AIを使いこなす武器に変えるための学び。",
    images: ["/images/HyaQShiki.jpg"],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/images/top-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
