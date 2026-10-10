'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CoreValueItem } from './types';
import { ValueItemChip } from './ValueItemChip';

export interface CoreValuesCardProps {
  values: CoreValueItem[];
  className?: string;
}

/**
 * Reusable CoreValuesCard Component
 * Renders the 6 core institutional values within a soft cream surface card,
 * with gold hover accent, localized draft badge, and responsive sub-grid.
 */
export const CoreValuesCard: React.FC<CoreValuesCardProps> = ({ values, className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div
      className={`group relative flex flex-col justify-between h-full bg-[#FAF8F2] rounded-3xl p-6 sm:p-7 lg:p-8 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/35 transition-all duration-300 ${className}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="space-y-5">
        {/* Header: Icon container and draft category tag */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] group-hover:scale-105 transition-all duration-300 shadow-2xs">
            <ShieldCheck className="w-6 h-6 text-[#145B52] group-hover:text-amber-200 transition-colors duration-300" />
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold text-[#145B52] bg-white px-3 py-1 rounded-full border border-amber-200/90 uppercase tracking-wider shadow-2xs">
            {locale === 'bn' ? 'মূলনীতি' : 'Ethical Code'}
          </span>
        </div>

        {/* Title and Short Explanation */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#145B52] tracking-tight">
              {locale === 'bn' ? 'আমাদের মূল মূল্যবোধ' : 'Core Values'}
            </h3>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100/80 border border-amber-300 px-2 py-0.5 rounded-full">
              {locale === 'bn' ? 'খসড়া' : 'Draft'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed">
            {locale === 'bn'
              ? 'প্রতিটি সিদ্ধান্ত ও সেবামূলক কার্যক্রমে আমাদের ছয়টি অবিচল নৈতিক স্তম্ভ।'
              : 'Six foundational pillars that guide our daily operations, caregiver ethics, and resident interactions.'}
          </p>
        </div>

        {/* 6 Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
          {values.map((val) => (
            <ValueItemChip key={val.id} value={val} />
          ))}
        </div>
      </div>

      {/* Discrete bottom meta note */}
      <div className="mt-6 pt-4 border-t border-teal-900/10 flex items-center justify-between text-[11px] text-[#242B29]/60">
        <span>{locale === 'bn' ? 'নৈতিক দিকনির্দেশনা' : 'Guiding Values'}</span>
        <span className="font-semibold text-[#145B52]">
          {locale === 'bn' ? '৬টি মূল স্তম্ভ' : '6 Core Pillars'}
        </span>
      </div>
    </div>
  );
};
