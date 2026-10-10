'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface ServicesFooterCTAProps {
  buttonText?: {
    en: string;
    bn: string;
  };
  buttonHref?: string;
  className?: string;
}

/**
 * Footer CTA & Governance Disclaimer for Services Section
 * Features primary "View All Services" button and essential transparency notice.
 */
export const ServicesFooterCTA: React.FC<ServicesFooterCTAProps> = ({
  buttonText = {
    en: 'View All Services',
    bn: 'সকল সেবা বিস্তারিত দেখুন'
  },
  buttonHref = '/services',
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`space-y-6 text-center max-w-3xl mx-auto pt-2 ${className}`}>
      {/* Primary Action Button */}
      <div>
        <Link
          href={buttonHref}
          className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-[#145B52] hover:bg-[#0E423B] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#145B52] focus:ring-offset-2"
        >
          <span>{buttonText[locale] || buttonText.en}</span>
          <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>

      {/* Governance & Verification Disclaimer */}
      <div className="pt-2">
        <p className="text-xs text-[#242B29]/65 leading-relaxed max-w-2xl mx-auto">
          {locale === 'bn'
            ? 'স্বচ্ছতা ও সত্যতা নিশ্চয়তা: উল্লেখিত সেবাসমূহ সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের প্রস্তাবিত প্রাথমিক কাঠামো। কেন্দ্রটি চিকিৎসা সনদপত্র ও দাপ্তরিক অনুমোদন ব্যতিরেকে কোনো বিশেষায়িত চিকিৎসা সেবা প্রদানের দাবি করে না। কেন্দ্রটি চালু হওয়ার সাথে সাথে সকল সেবার প্রাপ্যতা চূড়ান্তভাবে নিশ্চিত করা হবে।'
            : 'Operational Transparency: The categories presented above reflect a proposed community care framework. Sonavan Old Rehabilitation Center does not claim to deliver clinical medical treatments or specialized clinical therapy without certified licensing. Service scope will be officially validated upon formal operationalization.'}
        </p>
      </div>
    </div>
  );
};
