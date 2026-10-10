'use client';

import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface ImpactHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  className?: string;
}

/**
 * Centered Section Header for Our Impact Section
 * Displays category eyebrow, primary heading "Every Act of Care Matters.",
 * descriptive paragraph, and qualitative commitment framework badge.
 */
export const ImpactHeader: React.FC<ImpactHeaderProps> = ({
  heading = {
    en: 'Every Act of Care Matters.',
    bn: 'প্রতিটি সেবাই অত্যন্ত মূল্যবান ও অর্থপূর্ণ।'
  },
  description = {
    en: 'Community support can help create a more respectful, connected, and caring environment for older adults.',
    bn: 'সামাজিক সহানুভূতি ও সম্মিলিত প্রচেষ্টা প্রবীণদের জন্য একটি মর্যাদাপূর্ণ, নিরাপদ ও ভালোবাসাভরা পরিবেশ গড়ে তুলতে সহায়তা করে।'
  },
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
        <span>{locale === 'bn' ? 'আমাদের সেবার প্রভাব' : 'OUR COMMUNITY IMPACT'}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight">
        {heading[locale] || heading.en}
      </h2>

      {/* Descriptive Paragraph */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed max-w-2xl mx-auto">
        {description[locale] || description.en}
      </p>

      {/* Qualitative Principle Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#276749] text-xs font-semibold">
        <ShieldCheck className="w-3.5 h-3.5 text-[#276749] shrink-0" />
        <span>
          {locale === 'bn'
            ? 'গুণগত সেবামূলক রূপরেখা — মর্যাদা, সামাজিক সান্নিধ্য ও স্বচ্ছতার মূলমন্ত্রে পরিচালিত'
            : 'Qualitative Impact Framework — Dedicated to dignity, human connection, and open accountability'}
        </span>
      </div>
    </div>
  );
};
