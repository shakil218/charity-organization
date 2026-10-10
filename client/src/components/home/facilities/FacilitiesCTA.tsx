'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface FacilitiesCTAProps {
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  className?: string;
}

/**
 * Facilities CTA Component
 * Provides a primary button linking to the full facilities page (/facilities)
 * along with a strict disclaimer against unverified claims.
 */
export const FacilitiesCTA: React.FC<FacilitiesCTAProps> = ({
  ctaText = {
    en: 'View All Photos',
    bn: 'সব ছবি দেখুন'
  },
  ctaHref = '/facilities',
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 pt-4 ${className}`}>
      {/* Primary Action Button */}
      <div>
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-[#145B52] hover:bg-[#0E423B] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#145B52] focus:ring-offset-2"
        >
          <ImageIcon className="w-4 h-4 text-amber-200" />
          <span>{ctaText[locale] || ctaText.en}</span>
          <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>

      {/* Verification Transparency Disclaimer */}
      <p className="text-xs text-[#242B29]/65 leading-relaxed max-w-2xl mx-auto">
        {locale === 'bn'
          ? 'তথ্য প্রকাশ সংক্রান্ত স্বচ্ছতা: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো কাল্পনিক আবাসন, চিকিৎসা সরঞ্জাম বা বিশেষায়িত সুবিধা প্রদর্শন করে না। কেন্দ্রটির ভৌত অবকাঠামো সম্পন্ন হলে প্রকৃত আলোকচিত্র ও স্থাপত্য বিবরণী ওয়েবসাইটে সংযোজন করা হবে।'
          : 'Transparency Notice: Sonavan Old Rehabilitation Center strictly abstains from presenting fabricated medical equipment, dining rooms, or clinical accommodations. Verified photographs of the real facility will be updated upon physical completion.'}
      </p>
    </div>
  );
};
