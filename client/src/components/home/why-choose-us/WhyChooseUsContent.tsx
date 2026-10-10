'use client';

import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BenefitItem } from './types';
import { BenefitCard } from './BenefitCard';

export interface WhyChooseUsContentProps {
  heading?: {
    en: string;
    bn: string;
  };
  introduction?: {
    en: string;
    bn: string;
  };
  benefits: BenefitItem[];
  className?: string;
}

/**
 * Left-column Content for Why Choose Us Section
 * Displays category eyebrow, main heading "Care That Begins With Respect.",
 * principled introduction, and the four benefit cards.
 */
export const WhyChooseUsContent: React.FC<WhyChooseUsContentProps> = ({
  heading = {
    en: 'Care That Begins With Respect.',
    bn: 'শ্রদ্ধা থেকেই শুরু আমাদের আন্তরিক যত্ন।'
  },
  introduction = {
    en: 'Sonavan Old Rehabilitation Center is guided by principles of human warmth and personal dignity. Rather than making unsubstantiated claims, our focus is on creating a peaceful, open environment where every older adult is treated with genuine kindness, attentive listening, and heartfelt community support.',
    bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র প্রবীণদের আত্মমর্যাদা ও আন্তরিক ভালোবাসাকে ভিত্তি ধরে পরিচালিত। কোনো কৃত্রিম বা যাচাইহীন দাবি নয়, বরং প্রতিটি প্রবীণ যেন স্নেহপূর্ণ সাহচর্য, শ্রদ্ধা এবং পারিবারিক আশ্রয়ে দিন কাটাতে পারেন—সেটিই আমাদের প্রাতিষ্ঠানিক লক্ষ্য।'
  },
  benefits,
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`space-y-6 sm:space-y-7 ${className}`}>
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
        <span>{locale === 'bn' ? 'কেন আমরা দায়বদ্ধ' : 'OUR GUIDING ETHOS'}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight">
        {heading[locale] || heading.en}
      </h2>

      {/* Descriptive Introduction */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal">
        {introduction[locale] || introduction.en}
      </p>

      {/* Four Benefits List */}
      <div className="space-y-3.5 sm:space-y-4 pt-2">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>

      {/* Principled Standards Reassurance Tag */}
      <div className="pt-2 flex items-center gap-2 text-xs text-[#242B29]/65">
        <ShieldCheck className="w-4 h-4 text-[#276749] shrink-0" />
        <span>
          {locale === 'bn'
            ? 'আমাদের সকল প্রতিশ্রুতি প্রাতিষ্ঠানিক সততা ও প্রবীণ কল্যাণের ভিত্তিতে পরিচালিত।'
            : 'Guided by core ethical standards, honest transparency, and respect for our elders.'}
        </span>
      </div>
    </div>
  );
};
