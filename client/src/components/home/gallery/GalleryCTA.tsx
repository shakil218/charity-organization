'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryCTAProps {
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  className?: string;
}

/**
 * Bottom CTA and Privacy Policy Notice for Photo Gallery section.
 * - Accessible "View Full Gallery" button linking to /gallery
 * - Ethical privacy & photography notice safeguarding resident dignity
 */
export const GalleryCTA: React.FC<GalleryCTAProps> = ({
  ctaText,
  ctaHref = '/gallery',
  className = ''
}) => {
  const { locale } = useLanguage();

  const buttonText =
    ctaText?.[locale] ||
    ctaText?.en ||
    (locale === 'bn' ? 'সম্পূর্ণ গ্যালারি দেখুন' : 'View Full Gallery');

  return (
    <div className={`space-y-6 pt-4 ${className}`}>
      {/* Centered CTA Button */}
      <div className="flex justify-center">
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#145B52] hover:bg-[#0E423B] transition-all shadow-[0_4px_16px_-2px_rgba(20,91,82,0.25)] hover:shadow-[0_8px_24px_-4px_rgba(20,91,82,0.35)] group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] focus-visible:ring-offset-2"
          aria-label={buttonText}
        >
          <span>{buttonText}</span>
          <ArrowRight
            className="w-4 h-4 text-amber-200 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Privacy & Photography Integrity Policy Note */}
      <div className="rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 sm:mt-0">
            <ShieldCheck className="w-4 h-4 text-[#145B52]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#145B52]">
              {locale === 'bn' ? 'ব্যক্তিগত গোপনীয়তা ও আলোকচিত্র সততা' : 'Privacy & Photography Policy'}
            </p>
            <p className="text-[11px] sm:text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn'
                ? 'প্রবীণ সদস্যদের মানবিক মর্যাদা ও গোপনীয়তা রক্ষায় সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র আনুষ্ঠানিক সম্মতি ছাড়া শনাক্তযোগ্য ছবি প্রচার করে না। প্রতিনিধিত্বমূলক ছবিগুলো পরিকল্পিত পারিবারিক পরিবেশ ও সান্নিধ্যের প্রতীক।'
                : 'To protect the personal dignity and privacy of older adults, Sonavan Old Rehabilitation Center does not publish identifiable resident photographs without documented consent. Illustrative visuals reflect our caring atmosphere.'}
            </p>
          </div>
        </div>

        <Link
          href="/transparency"
          className="shrink-0 text-[11px] font-bold text-[#145B52] hover:text-[#0E423B] underline underline-offset-2 ml-11 sm:ml-0"
        >
          {locale === 'bn' ? 'স্বচ্ছতা নীতিমালা' : 'Privacy Policy'}
        </Link>
      </div>
    </div>
  );
};
