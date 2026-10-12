'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FacilitiesHighlightItem } from './types';

export interface FacilitiesOverviewHighlightItemProps {
  item: FacilitiesHighlightItem;
}

export const FacilitiesOverviewHighlightItem: React.FC<FacilitiesOverviewHighlightItemProps> = ({ item }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const IconComp = item.icon;
  const title = item.title[locale] || item.title.en;
  const description = item.description[locale] || item.description.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <div className="flex items-start gap-4 p-4.5 sm:p-5 rounded-2xl bg-white border border-[#145B52]/10 shadow-[0_2px_12px_-2px_rgba(20,91,82,0.04)] hover:border-[#D6B56D]/60 hover:shadow-md transition-all duration-200 group">
      {/* Icon Badge */}
      <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] border border-[#145B52]/15 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] group-hover:border-[#145B52] transition-colors shrink-0 shadow-2xs mt-0.5">
        <IconComp className="w-5 h-5 text-current" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="space-y-1 min-w-0">
        <h4 className={`text-base sm:text-lg font-bold text-[#145B52] group-hover:text-[#0E3E37] transition-colors leading-snug ${fontClass}`}>
          {title}
        </h4>
        <p className={`text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal ${fontClass}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
