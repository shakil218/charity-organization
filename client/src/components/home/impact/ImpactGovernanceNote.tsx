'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface ImpactGovernanceNoteProps {
  className?: string;
}

/**
 * Bottom Governance Disclaimer for Our Impact Section
 * Reassures users of strict institutional adherence to truth and verified data.
 */
export const ImpactGovernanceNote: React.FC<ImpactGovernanceNoteProps> = ({ className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div className={`max-w-2xl mx-auto text-center pt-2 ${className}`}>
      <p className="text-xs text-[#242B29]/65 leading-relaxed">
        {locale === 'bn'
          ? 'সত্যতা ও নিরীক্ষণ নিশ্চয়তা: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো কাল্পনিক সেবা পরিসংখ্যান বা মনগড়া সংখ্যা প্রকাশ করে না। সকল প্রাতিষ্ঠানিক পরিসংখ্যান অনুমোদিত নিরীক্ষা ও সরকারি প্রত্যয়ন প্রাপ্তির পর পর্যায়ক্রমে হালনাগাদ করা হবে।'
          : 'Audit & Integrity Assurance: Sonavan Old Rehabilitation Center strictly abstains from inventing statistical figures. Numerical service metrics will be updated progressively following verified institutional audits and operational certification.'}
      </p>
    </div>
  );
};
