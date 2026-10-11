'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TimelineMilestone } from './types';

export interface TimelineCardProps {
  milestone: TimelineMilestone;
  index: number;
  isLeftOnDesktop?: boolean;
  className?: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  milestone,
  isLeftOnDesktop = false,
  className = ''
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const dateStr = milestone.date[locale] || milestone.date.en;
  const titleStr = milestone.title[locale] || milestone.title.en;
  const descStr = milestone.description[locale] || milestone.description.en;
  const categoryStr = milestone.category?.[locale] || milestone.category?.en;
  const badgeStr = milestone.badge?.[locale] || milestone.badge?.en;
  const imageAltStr = milestone.imageAlt?.[locale] || milestone.imageAlt?.en || titleStr;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative p-5 sm:p-6 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/60 transition-all duration-300 ${className}`}
    >
      {/* Top Header: Date Badge & Category Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145B52] text-[#D6B56D] text-xs font-black shadow-2xs tracking-wide">
          <Calendar className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
            {dateStr}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {categoryStr && (
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold text-[#276749] bg-[#276749]/10 px-2.5 py-0.5 rounded-full border border-[#276749]/20 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              <Tag className="w-3 h-3 text-[#276749]" aria-hidden="true" />
              <span>{categoryStr}</span>
            </span>
          )}
          {badgeStr && (
            <span className={`text-[10px] font-bold text-[#145B52] bg-[#FAF8F2] px-2 py-0.5 rounded-full border border-[#D6B56D]/40 uppercase tracking-wider ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {badgeStr}
            </span>
          )}
        </div>
      </div>

      {/* Milestone Title */}
      <h3 className={`text-base sm:text-lg md:text-xl font-bold text-[#145B52] tracking-tight leading-snug mb-2 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
        {titleStr}
      </h3>

      {/* Milestone Narrative Description */}
      <p className={`text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal mb-4 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
        {descStr}
      </p>

      {/* Optional Milestone Photograph */}
      {milestone.imageUrl && (
        <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-[#145B52]/10 bg-[#FAF8F2] shadow-xs group">
          <Image
            src={milestone.imageUrl}
            alt={imageAltStr}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Subtle Directional Pointer Indicator on Desktop */}
      <div 
        className={`hidden md:block absolute top-7 w-3 h-3 bg-white border-t border-r border-[#145B52]/20 transform rotate-45 ${
          isLeftOnDesktop 
            ? '-right-1.5 border-l-0 border-b-0' 
            : '-left-1.5 border-t-0 border-r-0 border-b border-l'
        }`}
        aria-hidden="true" 
      />
    </motion.div>
  );
};
