'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface MissionGovernanceNoteProps {
  className?: string;
}

/**
 * Bottom Governance and Transparency Note for MissionSection
 * Emphasizes ethical transparency and formal board ratification.
 */
export const MissionGovernanceNote: React.FC<MissionGovernanceNoteProps> = ({ className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div className={`max-w-2xl mx-auto text-center pt-2 ${className}`}>
      <p className="text-xs text-[#242B29]/60 leading-relaxed">
        {locale === 'bn'
          ? 'নিশ্চয়তা ও স্বচ্ছতা: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র তার সেবামূলক কার্যক্রমে কোনো উদ্ভাবিত বা মনগড়া পরিসংখ্যান প্রকাশ করে না। সকল প্রাতিষ্ঠানিক সনদ ও নীতিমালা যথাযথ কর্তৃপক্ষের অনুমোদনের পর চূড়ান্তভাবে কার্যকর হবে।'
          : 'Governance Transparency: Sonavan Old Rehabilitation Center strictly adheres to verified organizational standards without invented statistics. Formal organizational statements remain subject to ratification by the Board of Trustees.'}
      </p>
    </div>
  );
};
