'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface StoriesCTAProps {
  className?: string;
}

/**
 * Bottom action and editorial transparency note for Stories section.
 * - Prominent "View All Stories" button linking to `/stories`
 * - Editorial integrity note reinforcing the organization's commitment against fabricated stories
 */
export const StoriesCTA: React.FC<StoriesCTAProps> = ({ className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div className={`space-y-6 pt-4 ${className}`}>
      {/* Mobile/Tablet Centered View All Stories Button */}
      <div className="flex md:hidden justify-center">
        <Link
          href="/stories"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#145B52] hover:bg-[#0E423B] transition-all shadow-[0_4px_16px_-2px_rgba(20,91,82,0.25)] hover:shadow-[0_8px_24px_-4px_rgba(20,91,82,0.35)] group"
          aria-label={locale === 'bn' ? 'সকল গল্প ও সংবাদ দেখুন' : 'View All Stories'}
        >
          <span>{locale === 'bn' ? 'সকল গল্প ও সংবাদ দেখুন' : 'View All Stories'}</span>
          <ArrowRight className="w-4 h-4 text-amber-200 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      {/* Editorial Transparency & Accuracy Note */}
      <div className="rounded-2xl bg-[#FAF8F2] border border-amber-200/70 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 sm:mt-0">
            <ShieldCheck className="w-4 h-4 text-[#145B52]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#145B52]">
              {locale === 'bn' ? 'প্রতিবেদন ও সংবাদ সততা' : 'Editorial Integrity & Accuracy'}
            </p>
            <p className="text-[11px] sm:text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn'
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো মনগড়া ঘটনা, সাজানো সুবিধা বা অবাস্তব প্রশংসাপত্র প্রকাশ করে না। সকল তথ্য অনুমোদিত সেবামূলক কার্যক্রম অনুযায়ী পরিচালিত হয়।'
                : 'Sonavan Old Rehabilitation Center does not fabricate beneficiary achievements, false events, or unverified claims. All announcements reflect genuine organizational activities.'}
            </p>
          </div>
        </div>

        <Link
          href="/transparency"
          className="shrink-0 text-[11px] font-bold text-[#145B52] hover:text-[#0E423B] underline underline-offset-2 ml-11 sm:ml-0"
        >
          {locale === 'bn' ? 'স্বচ্ছতা নীতিমালা' : 'Editorial Policy'}
        </Link>
      </div>
    </div>
  );
};
