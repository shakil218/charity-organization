'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GetInvolvedOptionItem } from './types';

export interface GetInvolvedOptionCardProps {
  option: GetInvolvedOptionItem;
}

export const GetInvolvedOptionCard: React.FC<GetInvolvedOptionCardProps> = ({ option }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const IconComp = option.icon;
  const title = option.title[locale] || option.title.en;
  const description = option.description[locale] || option.description.en;
  const buttonText = option.buttonText[locale] || option.buttonText.en;
  const badge = option.badge?.[locale] || option.badge?.en;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`p-6 sm:p-7 md:p-8 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-6 ${
        option.isPrimary
          ? 'bg-white/15 border-2 border-[#D6B56D]/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:border-[#D6B56D]'
          : 'bg-white/8 hover:bg-white/12 border border-white/15 hover:border-[#D6B56D]/50 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.2)]'
      }`}
    >
      <div className="space-y-4">
        {/* Top Icon & Category Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#D6B56D]/20 border border-[#D6B56D]/30 flex items-center justify-center text-[#D6B56D] shadow-inner shrink-0">
            <IconComp className="w-6 h-6 text-[#D6B56D]" aria-hidden="true" />
          </div>

          {badge && (
            <span className="inline-flex items-center text-[10px] sm:text-[11px] font-semibold text-[#D6B56D] bg-[#D6B56D]/15 px-3 py-1 rounded-full border border-[#D6B56D]/25 shrink-0 whitespace-nowrap shadow-2xs">
              {badge}
            </span>
          )}
        </div>

        {/* Option Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug ${
            isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
          }`}
        >
          {title}
        </h3>

        {/* Narrative Description */}
        <p
          className={`text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal ${
            isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Rounded Button */}
      <div className="pt-2">
        <Link
          href={option.buttonHref}
          className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D] ${
            option.isPrimary
              ? 'bg-[#D6B56D] text-[#0A332E] hover:bg-[#E2C787] shadow-md hover:shadow-lg'
              : 'bg-white/12 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 shadow-xs'
          }`}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
