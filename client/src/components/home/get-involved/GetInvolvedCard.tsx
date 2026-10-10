'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GetInvolvedCardItem } from './types';

export interface GetInvolvedCardProps {
  card: GetInvolvedCardItem;
  onOpenDonateModal?: () => void;
  className?: string;
}

/**
 * Reusable, visually distinct card for Get Involved section.
 * - Gentle hover elevations and border transitions
 * - Accessible focus states with visible outlines
 * - Differentiated iconography, accents, and CTA styles
 * - Reassuring transparency footnotes without fabricated claims
 */
export const GetInvolvedCard: React.FC<GetInvolvedCardProps> = ({
  card,
  onOpenDonateModal,
  className = ''
}) => {
  const { locale } = useLanguage();
  const IconComponent = card.icon;

  const title = card.title[locale] || card.title.en;
  const badge = card.badge[locale] || card.badge.en;
  const description = card.description[locale] || card.description.en;
  const ctaText = card.ctaText[locale] || card.ctaText.en;
  const footnote = card.footnote?.[locale] || card.footnote?.en;

  const isDonateCard = card.variant === 'donate';

  const handleCtaClick = (e: React.MouseEvent) => {
    if (isDonateCard && onOpenDonateModal) {
      e.preventDefault();
      onOpenDonateModal();
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-7 border ${card.theme.cardBorder} ${card.theme.hoverBorder} shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(20,91,82,0.12)] transition-all duration-300 ${className}`}
    >
      {/* Top subtle decorative accent edge on hover */}
      <div
        className={`absolute top-0 left-8 right-8 h-1 ${card.theme.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
        aria-hidden="true"
      />

      <div className="space-y-5">
        {/* Header: Icon & Category Badge */}
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-12 h-12 rounded-2xl ${card.theme.iconBg} border ${card.theme.iconBorder} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs shrink-0`}
          >
            <IconComponent className={`w-6 h-6 ${card.theme.iconColor}`} aria-hidden="true" />
          </div>

          <span
            className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${card.theme.badgeBg} ${card.theme.badgeText} border ${card.theme.badgeBorder} shadow-2xs whitespace-nowrap shrink-0`}
          >
            {badge}
          </span>
        </div>

        {/* Title & Short Description */}
        <div className="space-y-2.5">
          <h3 className="text-xl sm:text-2xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Footnote assurance */}
        {footnote && (
          <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#242B29]/65">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#276749] shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">{footnote}</span>
          </div>
        )}
      </div>

      {/* Card Footer: Accessible CTA Button */}
      <div className="pt-6 mt-6 border-t border-amber-100/90">
        <Link
          href={card.ctaHref}
          onClick={handleCtaClick}
          aria-label={`${ctaText}: ${title}`}
          className={`w-full py-3 px-5 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 ${card.theme.buttonBg} ${card.theme.buttonHoverBg} ${card.theme.buttonText} ${card.theme.buttonBorder || ''}`}
        >
          <span>{ctaText}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};
