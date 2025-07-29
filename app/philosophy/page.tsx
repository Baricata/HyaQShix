import type { Metadata } from "next";
import PhilosophyPageContent from "./PhilosophyPageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "私たちの理念 | HyaQShiki-百式-",
  description: "HyaQShiki-百式-の理念。テクノロジーの民主化を目指し、AIを活用して人間の創造性を最大限に引き出す教育を提供。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/philosophy",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "私たちの理念 | HyaQShiki-百式-",
    description: "HyaQShiki-百式-の理念。テクノロジーの民主化を目指し、AIを活用して人間の創造性を最大限に引き出す教育を提供。",
    url: "https://hyaqshiki.com/philosophy",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki 理念",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "私たちの理念 | HyaQShiki-百式-",
    description: "テクノロジーの民主化を目指し、AIを活用して人間の創造性を最大限に引き出す教育を提供。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function PhilosophyPage() {
  return <PhilosophyPageContent />;
}