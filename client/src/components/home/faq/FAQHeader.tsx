'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface FAQHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
}

/**
 * Centered / Balanced Section Header for FAQ section.
 * Heading: "Questions? We're Here to Help."
 */
export const FAQHeader: React.FC<FAQHeaderProps> = ({
  heading,
  subtitle
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn' ? 'প্রশ্ন আছে? আমরা সহযোগিতায় প্রস্তুত।' : "Questions? We're Here to Help.");

  const subtitleText =
    subtitle?.[locale] ||
    subtitle?.en ||
    (locale === 'bn'
      ? 'আমাদের সেবামূলক কার্যক্রম, অনুদান, স্বেচ্ছাসেবা ও পরিদর্শন সংক্রান্ত প্রয়োজনীয় সাধারণ তথ্যাবলী।'
      : 'Find clear answers to common questions about our organization, programs, volunteering, and visiting policies.');

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
      <div className="space-y-3 max-w-2xl text-left">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-amber-200/90 text-xs font-bold text-[#145B52] shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Frequently Asked Questions'}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#145B52] tracking-tight leading-tight">
          {titleText}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal">
          {subtitleText}
        </p>
      </div>

      {/* Desktop Quick Link to All FAQs */}
      <div className="hidden md:flex shrink-0">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#145B52] bg-white border border-[#145B52]/25 hover:bg-[#FAF8F2] hover:border-[#145B52] hover:text-[#0E423B] transition-all shadow-2xs group"
          aria-label={locale === 'bn' ? 'সকল সাধারণ জিজ্ঞাসা দেখুন' : 'View All FAQs'}
        >
          <span>{locale === 'bn' ? 'সকল প্রশ্নোত্তর' : 'View All FAQs'}</span>
          <ArrowRight
            className="w-4 h-4 text-[#D6B56D] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};
