'use client';

import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GetInvolvedHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
}

/**
 * Centered Section Header for Get Involved section.
 * - Restrained gold/teal eyebrow pill
 * - Heading: "Together, We Can Make a Difference."
 * - Description: "Explore meaningful ways to support older adults and contribute to a caring community."
 */
export const GetInvolvedHeader: React.FC<GetInvolvedHeaderProps> = ({
  heading,
  description
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn'
      ? 'সম্মিলিত প্রচেষ্টায় গড়ে তুলি ভালোবাসার আশ্রয়'
      : 'Together, We Can Make a Difference.');

  const descText =
    description?.[locale] ||
    description?.en ||
    (locale === 'bn'
      ? 'প্রবীণদের মর্যাদাপূর্ণ জীবন নিশ্চিত করতে এবং একটি সহানুভূতিশীল সমাজ বিনির্মাণে অর্থপূর্ণ উপায়ে পাশে দাঁড়ান।'
      : 'Explore meaningful ways to support older adults and contribute to a caring community.');

  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-amber-200/90 text-xs font-bold text-[#145B52] shadow-2xs">
        <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
        <span>{locale === 'bn' ? 'একসাথে এগিয়ে আসুন' : 'Get Involved'}</span>
      </div>

      {/* Primary Section Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#145B52] tracking-tight leading-tight">
        {titleText}
      </h2>

      {/* Section Subtitle */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto">
        {descText}
      </p>
    </div>
  );
};
