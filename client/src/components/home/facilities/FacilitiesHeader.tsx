'use client';

import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface FacilitiesHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  className?: string;
}

/**
 * Centered Section Header for Facilities Preview Section
 * Displays category badge, main heading, descriptive subtitle, and honest illustrative disclaimer.
 */
export const FacilitiesHeader: React.FC<FacilitiesHeaderProps> = ({
  heading = {
    en: 'Explore Our Environment',
    bn: 'আমাদের সেবামূলক পরিবেশ'
  },
  description = {
    en: 'Discover the spaces and surroundings that support the organization’s work.',
    bn: 'আমাদের সেবামূলক কার্যক্রমকে প্রাণবন্ত করে তোলা শান্ত ও উন্মুক্ত পরিবেশের দৃশ্যপট জানুন।'
  },
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
        <span>{locale === 'bn' ? 'আঙিনা ও পরিবেশ পরিচিতি' : 'CAMPUS & SURROUNDINGS'}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight">
        {heading[locale] || heading.en}
      </h2>

      {/* Descriptive Text */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed max-w-2xl mx-auto">
        {description[locale] || description.en}
      </p>

      {/* Illustrative Concept Disclaimer Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold">
        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
        <span>
          {locale === 'bn'
            ? 'প্রতীকী চিত্র — ক্যাম্পাসের বাস্তবিক অবকাঠামোগত ছবি আনুষ্ঠানিক উদ্বোধনের পর প্রকাশ করা হবে'
            : 'Illustrative concepts — Verified photographs of the real facility will be published upon operational opening'}
        </span>
      </div>
    </div>
  );
};
