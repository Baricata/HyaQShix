import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

// Server-side metadata with canonical URL
export const metadata: Metadata = {
  title: "お問い合わせ | HyaQShiki-百式-",
  description: "HyaQShiki-百式-へのお問い合わせ。無料体験申し込み、企業連携、その他ご質問はこちらから。",
  
  // Canonical URL
  alternates: {
    canonical: "https://hyaqshiki.com/contact",
  },
  
  // Open Graph metadata
  openGraph: {
    title: "お問い合わせ | HyaQShiki-百式-",
    description: "HyaQShiki-百式-へのお問い合わせ。無料体験申し込み、企業連携、その他ご質問はこちらから。",
    url: "https://hyaqshiki.com/contact",
    siteName: "HyaQShiki",
    type: "website",
    images: [
      {
        url: "/images/HyaQShiki.jpg",
        width: 1200,
        height: 630,
        alt: "HyaQShiki お問い合わせ",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ | HyaQShiki-百式-",
    description: "HyaQShiki-百式-へのお問い合わせ。無料体験申し込み、企業連携、その他ご質問はこちらから。",
    images: ["/images/HyaQShiki.jpg"],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
