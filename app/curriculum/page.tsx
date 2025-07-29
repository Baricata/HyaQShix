import type { Metadata } from "next";
import CurriculumPageContent from "./CurriculumPageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "カリキュラム | HyaQShiki-百式-",
  description: "手を動かしながら自然にスキルが身につく3ヶ月のAIアプリ開発カリキュラム。実践的な学習で確実にスキルアップ。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/curriculum",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "カリキュラム | HyaQShiki-百式-",
    description: "手を動かしながら自然にスキルが身につく3ヶ月のAIアプリ開発カリキュラム。実践的な学習で確実にスキルアップ。",
    url: "https://hyaqshiki.com/curriculum",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki カリキュラム",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "カリキュラム | HyaQShiki-百式-",
    description: "手を動かしながら自然にスキルが身につく3ヶ月のAIアプリ開発カリキュラム。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function CurriculumPage() {
  return <CurriculumPageContent />;
}
