import type { Metadata } from "next";
import PricingPageContent from "./PricingPageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "料金プラン | HyaQShiki-百式-",
  description: "HyaQShiki-百式-の料金プランと14日間の満足保証制度。ベーシックプラン、月額プラン、スポンサー枠プランをご用意。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/pricing",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "料金プラン | HyaQShiki-百式-",
    description: "HyaQShiki-百式-の料金プランと14日間の満足保証制度。ベーシックプラン、月額プラン、スポンサー枠プランをご用意。",
    url: "https://hyaqshiki.com/pricing",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki 料金プラン",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "料金プラン | HyaQShiki-百式-",
    description: "HyaQShiki-百式-の料金プランと14日間の満足保証制度。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
