'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface StoriesHeaderProps {
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
 * Centered / Balanced Header for Stories & News Preview Section.
 * Includes:
 * - Eyebrow pill with restrained newspaper icon
 * - Primary heading: "Stories From Our Community"
 * - Subtitle: "Stay connected with organizational news, activities, announcements, and community initiatives."
 * - Desktop quick-link to all stories
 */
export const StoriesHeader: React.FC<StoriesHeaderProps> = ({
  heading,
  subtitle
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn' ? 'আমাদের প্রাঙ্গণ ও সেবামূলক খবরাখবর' : 'Stories From Our Community');

  const subtitleText =
    subtitle?.[locale] ||
    subtitle?.en ||
    (locale === 'bn'
      ? 'সংস্থার সাম্প্রতিক সংবাদ, সেবামূলক কার্যক্রম, জরুরি বিজ্ঞপ্তি ও সামাজিক উদ্যোগের সাথে যুক্ত থাকুন।'
      : 'Stay connected with organizational news, activities, announcements, and community initiatives.');

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
      <div className="space-y-3 max-w-2xl text-left">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-amber-200/90 text-xs font-bold text-[#145B52] shadow-2xs">
          <Newspaper className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'সংবাদ ও সামাজিক বার্তা' : 'Stories & Updates'}</span>
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

      {/* Desktop Header "View All Stories" Button */}
      <div className="hidden md:flex shrink-0">
        <Link
          href="/stories"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#145B52] bg-white border border-[#145B52]/25 hover:bg-[#FAF8F2] hover:border-[#145B52] hover:text-[#0E423B] transition-all shadow-2xs group"
          aria-label={locale === 'bn' ? 'সকল গল্প ও সংবাদ দেখুন' : 'View All Stories'}
        >
          <span>{locale === 'bn' ? 'সব গল্প দেখুন' : 'View All Stories'}</span>
          <ArrowRight className="w-4 h-4 text-[#D6B56D] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
