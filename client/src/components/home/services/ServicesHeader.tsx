'use client';

import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface ServicesHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  className?: string;
}

/**
 * Centered Section Header for Our Services Section
 * Features category pill, prominent heading, descriptive subtitle, and non-misleading proposal status.
 */
export const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  heading = {
    en: 'How We Support Older Adults',
    bn: 'আমরা যেভাবে প্রবীণদের পাশে দাঁড়াই'
  },
  subtitle = {
    en: 'Discover the different ways an organization can help promote dignity, wellbeing, and community connection.',
    bn: 'প্রবীণদের আত্মমর্যাদা, সুস্থতা এবং সামাজিক মেলবন্ধন নিশ্চিত করতে আমাদের বহুমুখী সেবামূলক উদ্যোগসমূহ জানুন।'
  },
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
        <span>{locale === 'bn' ? 'আমাদের সেবাসমূহ' : 'OUR SERVICES'}</span>
      </div>

      {/* Main Section Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight">
        {heading[locale] || heading.en}
      </h2>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed max-w-2xl mx-auto">
        {subtitle[locale] || subtitle.en}
      </p>

      {/* Proposed Status Indicator */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold">
        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
        <span>
          {locale === 'bn'
            ? 'প্রস্তাবিত সেবা রূপরেখা — সেবার সুনির্দিষ্ট পরিধি প্রতিষ্ঠান কর্তৃক চূড়ান্ত যাচাই সাপেক্ষে প্রযোজ্য'
            : 'Proposed service framework — Scope & availability subject to institutional confirmation'}
        </span>
      </div>
    </div>
  );
};
