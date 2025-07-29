import type { Metadata } from "next";
import CorporatePageContent from "./CorporatePageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "企業連携 | HyaQShiki-百式-",
  description: "HyaQShiki-百式-の企業連携プログラム。次世代IT人材育成、スポンサー制度、認定パートナー制度をご用意。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/corporate",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "企業連携 | HyaQShiki-百式-",
    description: "HyaQShiki-百式-の企業連携プログラム。次世代IT人材育成、スポンサー制度、認定パートナー制度をご用意。",
    url: "https://hyaqshiki.com/corporate",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki 企業連携",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "企業連携 | HyaQShiki-百式-",
    description: "HyaQShiki-百式-の企業連携プログラム。次世代IT人材育成、スポンサー制度、認定パートナー制度をご用意。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function CorporatePage() {
  return <CorporatePageContent />;
}
