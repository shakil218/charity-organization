'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BenefitItem } from './types';

export interface BenefitCardProps {
  benefit: BenefitItem;
  className?: string;
}

/**
 * Reusable BenefitCard Component
 * Displays a single organizational benefit with an elegant teal icon, title, badge,
 * and descriptive copy adhering to verified institutional principles.
 */
export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, className = '' }) => {
  const { locale } = useLanguage();
  const IconComponent = benefit.icon;
  const title = benefit.title[locale] || benefit.title.en;
  const description = benefit.description[locale] || benefit.description.en;
  const badge = benefit.accentBadge?.[locale] || benefit.accentBadge?.en;

  return (
    <div
      className={`group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-amber-200/70 hover:border-[#145B52]/30 hover:bg-white shadow-[0_2px_12px_-2px_rgba(20,91,82,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(20,91,82,0.08)] transition-all duration-300 ${className}`}
    >
      {/* Teal Icon Container */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] group-hover:scale-105 shrink-0 mt-0.5 transition-all duration-300 shadow-2xs">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#145B52] group-hover:text-amber-200 transition-colors duration-300" />
      </div>

      {/* Content Area */}
      <div className="space-y-1.5 min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-[#145B52] leading-snug group-hover:text-[#0E423B] transition-colors">
            {title}
          </h3>
          {badge && (
            <span className="text-[10px] font-bold text-[#276749] bg-[#276749]/8 px-2 py-0.5 rounded-full border border-[#276749]/15 uppercase tracking-wider shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
