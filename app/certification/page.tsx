import type { Metadata } from "next";
import CertificationPageContent from "./CertificationPageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "資格認定 | HyaQShiki-百式-",
  description: "HyaQShiki認定資格制度。Silver、Gold、Platinum、Blackの4段階の認定レベルで、生成AI時代のスキルを証明。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/certification",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "資格認定 | HyaQShiki-百式-",
    description: "HyaQShiki認定資格制度。Silver、Gold、Platinum、Blackの4段階の認定レベルで、生成AI時代のスキルを証明。",
    url: "https://hyaqshiki.com/certification",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki 資格認定",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "資格認定 | HyaQShiki-百式-",
    description: "HyaQShiki認定資格制度。4段階の認定レベルで、生成AI時代のスキルを証明。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function CertificationPage() {
  return <CertificationPageContent />;
}