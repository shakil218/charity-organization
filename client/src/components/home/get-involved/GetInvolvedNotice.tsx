'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GetInvolvedNoticeProps {
  className?: string;
}

/**
 * Prudence & Transparency Notice for Get Involved section.
 * Explicitly complies with integrity guidelines:
 * - Does not claim tax deductibility
 * - Does not claim unverified immediate volunteering vacancies
 * - Reassures donors about ethical stewardship
 */
export const GetInvolvedNotice: React.FC<GetInvolvedNoticeProps> = ({
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div
      className={`rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 sm:mt-0">
          <ShieldAlert className="w-4 h-4 text-[#145B52]" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-bold text-[#145B52]">
            {locale === 'bn' ? 'স্বেচ্ছাসেবা ও অনুদান স্বচ্ছতা' : 'Participation & Contribution Guidelines'}
          </p>
          <p className="text-[11px] sm:text-xs text-[#242B29]/70 leading-relaxed">
            {locale === 'bn'
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের অনুদান সরাসরি অনুমোদিত প্রবীণ পুনর্বাসন ও পুষ্টি সেবায় ব্যয় হয়। স্বেচ্ছাসেবা কার্যক্রম ও প্রাতিষ্ঠানিক অংশীদারিত্ব আনুষ্ঠানিক যাচাইকরণ ও সময়সূচি অনুমোদন সাপেক্ষে পরিচালিত হয়।'
              : 'Contributions directly support certified elder welfare programs. Volunteering opportunities and organizational collaborations are coordinated in accordance with approved organizational schedules and safety guidelines.'}
          </p>
        </div>
      </div>

      <Link
        href="/transparency"
        className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#145B52] hover:text-[#0E423B] underline underline-offset-2 ml-11 sm:ml-0"
      >
        <span>{locale === 'bn' ? 'স্বচ্ছতা নীতিমালা' : 'Transparency Policy'}</span>
        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
};
