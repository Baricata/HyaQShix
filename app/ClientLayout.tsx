'use client';

import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { useEffect } from 'react';

const ClientLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { language, metadata } = useLanguage();
  
  useEffect(() => {
    // Update document title and meta description dynamically
    document.title = metadata.title[language];
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description[language]);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.openGraph.title[language]);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.openGraph.description[language]);
    }

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, metadata]);
  
  return <>{children}</>;
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </LanguageProvider>
  );
} 