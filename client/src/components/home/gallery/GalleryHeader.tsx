'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryHeaderProps {
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
 * Centered / Balanced Section Header for Photo Gallery Preview.
 * Heading: "A Glimpse Into Our Community"
 */
export const GalleryHeader: React.FC<GalleryHeaderProps> = ({
  heading,
  subtitle
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn' ? 'আমাদের প্রাঙ্গণ ও জীবনের খণ্ডচিত্র' : 'A Glimpse Into Our Community');

  const subtitleText =
    subtitle?.[locale] ||
    subtitle?.en ||
    (locale === 'bn'
      ? 'প্রবীণদের প্রতিদিনের শান্ত সান্নিধ্য, আন্তরিক পরিচর্যা ও ভালোবাসাময় পরিবেশের দৃশ্যপট।'
      : 'Moments of peaceful companionship, quiet reflection, and respectful care shared in our daily routine.');

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
      <div className="space-y-3 max-w-2xl text-left">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-amber-200/90 text-xs font-bold text-[#145B52] shadow-2xs">
          <Camera className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'আলোকচিত্র রূপরেখা' : 'Photo Gallery Preview'}</span>
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

      {/* Desktop Quick Link to Full Gallery */}
      <div className="hidden md:flex shrink-0">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#145B52] bg-white border border-[#145B52]/25 hover:bg-[#FAF8F2] hover:border-[#145B52] hover:text-[#0E423B] transition-all shadow-2xs group"
          aria-label={locale === 'bn' ? 'সম্পূর্ণ গ্যালারি দেখুন' : 'View Full Gallery'}
        >
          <span>{locale === 'bn' ? 'সম্পূর্ণ গ্যালারি' : 'View Full Gallery'}</span>
          <ArrowRight
            className="w-4 h-4 text-[#D6B56D] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};
