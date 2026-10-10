'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CoreValueItem } from './types';

export interface ValueItemChipProps {
  value: CoreValueItem;
  className?: string;
}

/**
 * Reusable micro-component for displaying a single core value item
 * with its icon, localized title, and short descriptor.
 */
export const ValueItemChip: React.FC<ValueItemChipProps> = ({ value, className = '' }) => {
  const { locale } = useLanguage();
  const ValIcon = value.icon;

  return (
    <div
      className={`flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-amber-200/60 hover:border-[#145B52]/30 shadow-2xs transition-colors duration-200 ${className}`}
    >
      <div className="w-7 h-7 rounded-lg bg-[#276749]/10 text-[#276749] flex items-center justify-center shrink-0">
        <ValIcon className="w-3.5 h-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold text-[#145B52] leading-tight">
          {value.name[locale]}
        </div>
        <div className="text-[10px] text-[#242B29]/70 leading-tight line-clamp-1">
          {value.description[locale]}
        </div>
      </div>
    </div>
  );
};
