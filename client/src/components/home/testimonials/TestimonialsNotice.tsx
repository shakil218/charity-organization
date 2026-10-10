'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface TestimonialsNoticeProps {
  className?: string;
}

/**
 * Editorial Integrity & Privacy Notice for Testimonials section.
 * Reassures users that the organization does not fabricate testimonials, ratings, or satisfaction claims.
 */
export const TestimonialsNotice: React.FC<TestimonialsNoticeProps> = ({
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div
      className={`rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 sm:mt-0">
          <ShieldCheck className="w-4 h-4 text-[#145B52]" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-bold text-[#145B52]">
            {locale === 'bn' ? 'ব্যক্তিগত গোপনীয়তা ও সততা নীতি' : 'Privacy & Feedback Policy'}
          </p>
          <p className="text-[11px] sm:text-xs text-[#242B29]/70 leading-relaxed">
            {locale === 'bn'
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো কাল্পনিক প্রশংসাপত্র বা মনগড়া রিভিউ প্রচার করে না। শুভানুধ্যায়ী ও পরিবারের অনুমোদিত বক্তব্য আনুষ্ঠানিক সম্মতি সাপেক্ষে প্রদর্শিত হয়।'
              : 'Sonavan Old Rehabilitation Center does not invent testimonials, ratings, or satisfaction claims. Verified statements from supporters and families are published strictly upon voluntary, documented consent.'}
          </p>
        </div>
      </div>

      <Link
        href="/transparency"
        className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#145B52] hover:text-[#0E423B] underline underline-offset-2 ml-11 sm:ml-0"
      >
        <span>{locale === 'bn' ? 'স্বচ্ছতা নীতিমালা' : 'Editorial Policy'}</span>
        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
};
