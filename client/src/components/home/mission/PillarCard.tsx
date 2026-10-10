'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { StrategicPillar } from './types';

export interface PillarCardProps {
  pillar: StrategicPillar;
  className?: string;
}

/**
 * Reusable PillarCard Component
 * Renders strategic statements (Mission / Vision) with elegant soft cream surfaces,
 * deep teal typography, gold decorative accents, and bulleted focus areas.
 */
export const PillarCard: React.FC<PillarCardProps> = ({ pillar, className = '' }) => {
  const { locale } = useLanguage();
  const IconComponent = pillar.icon;
  const isMission = pillar.id === 'mission';

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
            <IconComponent className="w-6 h-6 text-[#145B52] group-hover:text-amber-200 transition-colors duration-300" />
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold text-[#145B52] bg-white px-3 py-1 rounded-full border border-amber-200/90 uppercase tracking-wider shadow-2xs">
            {pillar.categoryBadge[locale]}
          </span>
        </div>

        {/* Title and Draft Statement */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#145B52] tracking-tight">
              {pillar.title[locale]}
            </h3>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100/80 border border-amber-300 px-2 py-0.5 rounded-full">
              {locale === 'bn' ? 'খসড়া' : 'Draft'}
            </span>
          </div>

          <div className="border-l-3 border-[#D6B56D] pl-3.5 py-1 bg-white/70 rounded-r-xl border border-y-0 border-r-0 border-teal-900/5">
            <p className="text-sm sm:text-base text-[#242B29]/90 leading-relaxed font-medium italic">
              &ldquo;{pillar.statement[locale]}&rdquo;
            </p>
          </div>
        </div>

        {/* Supporting Pillars / Key Areas */}
        <div className="pt-1 space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#145B52]/80">
            {isMission
              ? (locale === 'bn' ? 'বাস্তবায়নের মূল ক্ষেত্রসমূহ' : 'Key Focus Areas')
              : (locale === 'bn' ? 'ভবিষ্যত রূপরেখার লক্ষ্য' : 'Strategic Horizons')}
          </h4>
          <ul className="space-y-2">
            {pillar.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#242B29]/80">
                <CheckCircle2 className="w-4 h-4 text-[#276749] shrink-0 mt-0.5" />
                <span>{item[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Discrete bottom meta note */}
      <div className="mt-6 pt-4 border-t border-teal-900/10 flex items-center justify-between text-[11px] text-[#242B29]/60">
        <span>{locale === 'bn' ? 'প্রাতিষ্ঠানিক লক্ষ্যমাত্রা' : 'Institutional Direction'}</span>
        <span className="font-semibold text-[#145B52]">
          {isMission ? 'SORC Mission' : 'SORC Vision'}
        </span>
      </div>
    </div>
  );
};
