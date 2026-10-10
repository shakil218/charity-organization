'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface FAQCTAProps {
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  className?: string;
}

/**
 * Bottom CTA and Contact Prompt for FAQ section.
 * - Links to /faq ("View All FAQs")
 * - Directs visitors with specific unlisted questions to the official Contact page
 */
export const FAQCTA: React.FC<FAQCTAProps> = ({
  ctaText,
  ctaHref = '/faq',
  className = ''
}) => {
  const { locale } = useLanguage();

  const buttonText =
    ctaText?.[locale] ||
    ctaText?.en ||
    (locale === 'bn' ? 'সকল সাধারণ জিজ্ঞাসা দেখুন' : 'View All FAQs');

  return (
    <div className={`space-y-6 pt-4 ${className}`}>
      {/* Mobile/Centered "View All FAQs" Link */}
      <div className="flex md:hidden justify-center">
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#145B52] hover:bg-[#0E423B] transition-all shadow-[0_4px_16px_-2px_rgba(20,91,82,0.25)] group"
          aria-label={buttonText}
        >
          <span>{buttonText}</span>
          <ArrowRight
            className="w-4 h-4 text-amber-200 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Helpful Contact Prompt Card */}
      <div className="rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5">
            <MessageSquare className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#145B52]">
              {locale === 'bn'
                ? 'আপনার নির্দিষ্ট কোনো প্রশ্ন আছে?'
                : 'Have a specific question not listed here?'}
            </h4>
            <p className="text-xs text-[#242B29]/75 leading-relaxed mt-0.5">
              {locale === 'bn'
                ? 'পরিদর্শন, স্বেচ্ছাসেবা বা অন্য যেকোনো তথ্যের জন্য আমাদের প্রশাসনিক টিমের সাথে সরাসরি যোগাযোগ করুন।'
                : 'Our coordination team is happy to assist you with visit arrangements, sponsorships, or general inquiries.'}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-[#145B52] bg-white border border-[#145B52]/25 hover:bg-[#FAF8F2] hover:border-[#145B52] transition shadow-2xs ml-12 sm:ml-0"
        >
          <span>{locale === 'bn' ? 'যোগাযোগ পাতায় যান' : 'Contact Us Directly'}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
