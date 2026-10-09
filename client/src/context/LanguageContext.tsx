'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, translations, TranslationContent } from '../i18n/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('bn'); // Default to Bangla for Bengali nonprofit identity

  useEffect(() => {
    // Check saved language preference in localStorage
    const savedLocale = localStorage.getItem('sorc_locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'bn')) {
      setLocaleState(savedLocale);
      document.body.setAttribute('data-lang', savedLocale);
      document.documentElement.lang = savedLocale;
    } else {
      document.body.setAttribute('data-lang', 'bn');
      document.documentElement.lang = 'bn';
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('sorc_locale', newLocale);
    document.body.setAttribute('data-lang', newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    const nextLocale = locale === 'bn' ? 'en' : 'bn';
    setLocale(nextLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
