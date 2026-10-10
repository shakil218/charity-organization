'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountUp } from './useCountUp';
import { ImpactCardItem } from './types';
import { Sparkles, ShieldCheck } from 'lucide-react';

export interface ImpactCardProps {
  card: ImpactCardItem;
  isInView?: boolean;
  className?: string;
}

/**
 * Reusable ImpactCard Component
 * Intelligently switches between:
 * 1. Qualitative-First Card (Default mode, displaying dignity/connection/community/accountability principles)
 * 2. Verified Metric Card (Activated when verifiedMetric data is present, rendering accessible count-up animation)
 */
export const ImpactCard: React.FC<ImpactCardProps> = ({
  card,
  isInView = true,
  className = ''
}) => {
  const { locale } = useLanguage();
  const IconComponent = card.icon;

  const title = card.title[locale] || card.title.en;
  const description = card.description[locale] || card.description.en;
  const pillar = card.categoryPillar[locale] || card.categoryPillar.en;
  const badge = card.badgeLabel?.[locale] || card.badgeLabel?.en;

  // Count-up animation only triggers when verifiedMetric is legitimately provided
  const animatedMetricValue = useCountUp(
    card.verifiedMetric ? card.verifiedMetric.value : 0,
    1600,
    isInView
  );

  return (
    <div
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-5 sm:p-6 lg:px-4 lg:py-5 xl:p-6 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/35 transition-all duration-300 ${className}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="space-y-5">
        {/* Header: Restrained Teal Icon & Qualitative Pill */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 xl:gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] group-hover:scale-105 transition-all duration-300 shadow-2xs shrink-0">
            <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-[#145B52] group-hover:text-amber-200 transition-colors duration-300" />
          </div>

          {badge && (
            <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold text-[#145B52] bg-[#FAF8F2] px-2 sm:px-2.5 lg:px-2 xl:px-3 py-0.5 sm:py-1 rounded-full border border-amber-200/90 uppercase tracking-tight sm:tracking-normal xl:tracking-wider whitespace-nowrap shadow-2xs shrink-0">
              {badge}
            </span>
          )}
        </div>

        {/* Content Area */}
        <div className="space-y-2.5">
          {/* Configurable Verified Metric Display (When official data exists) */}
          {card.verifiedMetric ? (
            <div className="space-y-1">
              <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-black text-[#145B52] tracking-tight">
                {card.verifiedMetric.prefix && (
                  <span className="text-xl sm:text-2xl font-bold text-[#D6B56D]">
                    {card.verifiedMetric.prefix}
                  </span>
                )}
                <span>{animatedMetricValue}</span>
                {card.verifiedMetric.suffix && (
                  <span className="text-xl sm:text-2xl font-bold text-[#276749]">
                    {card.verifiedMetric.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#145B52] leading-snug">
                {title}
              </h3>
            </div>
          ) : (
            /* Qualitative Mode (Default: No invented numbers) */
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
                  {title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF8F2] border border-amber-200/70 text-[10px] font-bold text-[#276749]">
                <Sparkles className="w-3 h-3 text-[#D6B56D]" />
                <span>{locale === 'bn' ? 'গুণগত সেবামূলক প্রতিশ্রুতি' : 'Qualitative Commitment'}</span>
              </div>
            </div>
          )}

          {/* Descriptive Copy */}
          <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal pt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer: Institutional Pillar & Ethics Status */}
      <div className="mt-5 pt-3.5 border-t border-teal-900/10 flex items-center justify-between text-[11px] text-[#242B29]/60">
        <span className="truncate max-w-[140px] font-medium">{pillar}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#145B52]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#276749]" />
          <span>{locale === 'bn' ? 'নৈতিক ভিত্তি' : 'Core Pillar'}</span>
        </span>
      </div>
    </div>
  );
};
