'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, Bell, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface StoriesEmptyStateProps {
  className?: string;
}

/**
 * Dignified, accessible Empty State for Stories section.
 * Rendered when no published articles are verified or available.
 * Transparently informs users without inventing stories or testimonials.
 */
export const StoriesEmptyState: React.FC<StoriesEmptyStateProps> = ({
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div
      className={`rounded-3xl border border-dashed border-amber-300/80 bg-white/70 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-5 shadow-2xs ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="w-14 h-14 mx-auto rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52]">
        <Newspaper className="w-7 h-7 text-[#145B52]" aria-hidden="true" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-[#145B52]">
          {locale === 'bn'
            ? 'এখনও কোনো প্রতিবেদন প্রকাশিত হয়নি'
            : 'No Articles Published Yet'}
        </h3>
        <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed max-w-lg mx-auto">
          {locale === 'bn'
            ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের দাপ্তরিক ও সত্যতা যাচাই সাপেক্ষে নিয়মিত সংবাদ ও সেবামূলক প্রতিবেদন প্রকাশ করা হবে। শীঘ্রই আবার পরিদর্শন করুন।'
            : 'Verified articles, community announcements, and organizational updates are published following official editorial review. Please check back soon.'}
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#145B52] hover:bg-[#0E423B] transition shadow-xs"
        >
          <span>{locale === 'bn' ? 'আমাদের সেবাসমূহ দেখুন' : 'Explore Our Services'}</span>
          <ArrowRight className="w-4 h-4 text-amber-200" aria-hidden="true" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#145B52] bg-white border border-[#145B52]/20 hover:bg-[#FAF8F2] transition shadow-2xs"
        >
          <Bell className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'যোগাযোগ রাখুন' : 'Stay in Touch'}</span>
        </Link>
      </div>
    </div>
  );
};
