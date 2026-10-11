'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CommunityEngagementCard } from './types';

interface CommunityCardProps {
  card: CommunityEngagementCard;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ card }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const IconComp = card.icon;
  const title = card.title[locale] || card.title.en;
  const badge = card.badge[locale] || card.badge.en;
  const description = card.description[locale] || card.description.en;
  const opportunities = card.opportunities[locale] || card.opportunities.en;
  const primaryCtaText = card.primaryCta.text[locale] || card.primaryCta.text.en;
  const secondaryCtaText = card.secondaryCta 
    ? (card.secondaryCta.text[locale] || card.secondaryCta.text.en) 
    : null;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="p-6 md:p-6 lg:p-8 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/70 transition-all duration-300 flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        {/* Top Header: Icon & Category Badge */}
        <div className="flex items-center justify-between gap-2.5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shadow-2xs shrink-0">
            <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#145B52]" aria-hidden="true" />
          </div>

          <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-[#276749] bg-green-50 px-2.5 py-1 rounded-full border border-green-200/70 shadow-2xs shrink-0 whitespace-nowrap">
            {badge}
          </span>
        </div>

        {/* Card Title */}
        <h3 className={`text-xl font-bold text-[#145B52] leading-snug tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {title}
        </h3>

        {/* Narrative Description */}
        <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {description}
        </p>

        {/* Collaboration Opportunities Checklist */}
        <div className="pt-3 border-t border-[#145B52]/8 space-y-2">
          <span className="block text-[10px] font-extrabold text-[#145B52]/70 uppercase tracking-wider">
            {isBn ? 'অংশগ্রহণের ক্ষেত্রসমূহ' : 'Collaboration Areas'}
          </span>
          <ul className="space-y-2">
            {opportunities.map((opp, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#242B29]/80 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {opp}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer: Primary & Secondary CTAs (justify-between on a single unbroken line) */}
      <div className="pt-4 border-t border-[#145B52]/8 flex items-center justify-between gap-2.5">
        <Link
          href={card.primaryCta.href}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs font-bold shadow-2xs hover:shadow-sm transition-all duration-200 group shrink-0 whitespace-nowrap"
        >
          <span>{primaryCtaText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
        </Link>

        {card.secondaryCta && secondaryCtaText && (
          <Link
            href={card.secondaryCta.href}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#145B52]/80 hover:text-[#145B52] hover:underline transition-colors shrink-0 whitespace-nowrap"
          >
            <span>{secondaryCtaText}</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
};
