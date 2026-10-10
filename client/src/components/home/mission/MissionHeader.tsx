'use client';

import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface MissionHeaderProps {
  className?: string;
}

/**
 * Centered Section Header for Mission, Vision & Core Values
 * Displays category eyebrow, high-contrast heading, descriptive intro, and draft status indicator.
 */
export const MissionHeader: React.FC<MissionHeaderProps> = ({ className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
        <span>
          {locale === 'bn' ? 'আমাদের মূল দর্শন ও অঙ্গীকার' : 'PURPOSE & GUIDING ETHOS'}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight">
        {locale === 'bn'
          ? 'মিশন, ভিশন ও প্রাতিষ্ঠানিক মূল্যবোধ'
          : 'Our Mission, Vision & Core Values'}
      </h2>

      {/* Brief Introduction */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed max-w-2xl mx-auto">
        {locale === 'bn'
          ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) প্রবীণদের মর্যাদা, সুরক্ষা ও মানবিক সান্নিধ্য নিশ্চিত করতে অঙ্গীকারবদ্ধ। আমাদের প্রাতিষ্ঠানিক উদ্দেশ্য, ভবিষ্যত দূরদৃষ্টি এবং মৌলিক মূল্যবোধসমূহ নিম্নে তুলে ধরা হলো।'
          : 'Sonavan Old Rehabilitation Center is guided by a profound duty of care toward our elders. These draft guiding statements reflect our institutional mission, future aspirations, and core ethical standards.'}
      </p>

      {/* Draft Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold">
        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
        <span>
          {locale === 'bn'
            ? 'প্রাতিষ্ঠানিক খসড়া রূপরেখা — ট্রাস্টি বোর্ডের আনুষ্ঠানিক অনুমোদন অপেক্ষমাণ'
            : 'Proposed organizational statements — Draft framework pending trustee approval'}
        </span>
      </div>
    </div>
  );
};
