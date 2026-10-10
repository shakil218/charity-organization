'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { Locale, translations, TranslationContent } from '../i18n/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('sorc_locale_change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('sorc_locale_change', callback);
  };
}

function getSnapshot(): Locale {
  const savedLocale = localStorage.getItem('sorc_locale');
  return savedLocale === 'en' || savedLocale === 'bn' ? savedLocale : 'bn';
}

function getServerSnapshot(): Locale {
  return 'bn';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.body.setAttribute('data-lang', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('sorc_locale', newLocale);
    window.dispatchEvent(new Event('sorc_locale_change'));
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
