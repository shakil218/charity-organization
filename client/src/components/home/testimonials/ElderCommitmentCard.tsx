'use client';

import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ElderCommitmentItem } from './types';

export interface ElderCommitmentCardProps {
  commitment: ElderCommitmentItem;
  className?: string;
}

/**
 * Reusable Elder Commitment Card.
 * Highlights Dignity, Respect, Compassion, or Inclusion.
 * Features:
 * - Soft cream surface with amber/teal border
 * - Top subtle gold decorative edge on hover
 * - Restrained teal icon and quotation mark accent
 * - Bold promise statement and descriptive copy
 */
export const ElderCommitmentCard: React.FC<ElderCommitmentCardProps> = ({
  commitment,
  className = ''
}) => {
  const { locale } = useLanguage();
  const IconComponent = commitment.icon;

  const title = commitment.title[locale] || commitment.title.en;
  const badge = commitment.badge[locale] || commitment.badge.en;
  const promise = commitment.promise[locale] || commitment.promise.en;
  const description = commitment.description[locale] || commitment.description.en;

  return (
    <article
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-6 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/40 transition-all duration-300 ${className}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        aria-hidden="true"
      />

      <div className="space-y-4">
        {/* Card Header: Icon & Pillar Badge */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] transition-all duration-300 shadow-2xs shrink-0">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#145B52] group-hover:text-amber-200 transition-colors duration-300" />
          </div>

          <span className="text-[10px] sm:text-[10.5px] font-bold text-[#145B52] bg-[#FAF8F2] px-2.5 py-1 rounded-full border border-amber-200/90 uppercase tracking-wider whitespace-nowrap shadow-2xs shrink-0">
            {badge}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Commitment Promise Quote */}
        <div className="relative pl-3.5 border-l-2 border-[#D6B56D] py-0.5 space-y-1">
          <Quote className="w-3.5 h-3.5 text-[#145B52]/40 rotate-180 mb-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-[13px] font-semibold text-[#145B52] leading-snug">
            “{promise}”
          </p>
        </div>

        {/* Descriptive Narrative */}
        <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal pt-1">
          {description}
        </p>
      </div>

      {/* Card Footer: Gentle Quality Assurance Pill */}
      <div className="pt-4 mt-4 border-t border-amber-100/90 flex items-center justify-between text-[11px] text-[#276749] font-medium">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'অঙ্গীকারবদ্ধ সেবা' : 'Core Care Promise'}</span>
        </span>
        <span className="text-[10px] text-[#242B29]/50 font-bold uppercase">SORC</span>
      </div>
    </article>
  );
};
