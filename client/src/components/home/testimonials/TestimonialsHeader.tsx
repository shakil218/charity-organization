'use client';

import React from 'react';
import { HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface TestimonialsHeaderProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  isCommitmentMode?: boolean;
}

/**
 * Centered Section Header for Testimonials & Community Values.
 * Heading: "What Our Community Values"
 * Features subtle eyebrow pill, responsive typography, and bilingual support.
 */
export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  heading,
  subtitle,
  isCommitmentMode = true
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn' ? 'আমাদের সমাজ ও শুভানুধ্যায়ীদের মূল্যবোধ' : 'What Our Community Values');

  const defaultSubtitle = isCommitmentMode
    ? locale === 'bn'
      ? 'প্রতিদিনের সেবামূলক কার্যক্রমে প্রবীণদের মর্যাদা, শ্রদ্ধা, সহমর্মিতা ও অন্তর্ভুক্তি রক্ষার দৃঢ় অঙ্গীকার।'
      : 'Reflecting the foundational care principles and community commitments that guide our daily mission.'
    : locale === 'bn'
      ? 'আমাদের সেবামূলক কার্যক্রম ও প্রবীণ নিবাসের সাথে যুক্ত শুভানুধ্যায়ী ও স্বেচ্ছাসেবকদের অভিজ্ঞতা।'
      : 'Perspectives and reflections from family members, volunteers, and community partners.';

  const subtitleText = subtitle?.[locale] || subtitle?.en || defaultSubtitle;

  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-amber-200/90 text-xs font-bold text-[#145B52] shadow-2xs">
        <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
        <span>
          {isCommitmentMode
            ? locale === 'bn'
              ? 'প্রবীণদের প্রতি আমাদের অঙ্গীকার'
              : 'Our Commitment to Every Elder'
            : locale === 'bn'
              ? 'শুভানুধ্যায়ীদের অভিজ্ঞতা'
              : 'Community Perspectives'}
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#145B52] tracking-tight leading-tight">
        {titleText}
      </h2>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto">
        {subtitleText}
      </p>

      {/* Sub-badge indicating commitment mode */}
      {isCommitmentMode && (
        <div className="pt-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#276749]">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span>
            {locale === 'bn'
              ? 'মর্যাদা • শ্রদ্ধা • সহমর্মিতা • অন্তর্ভুক্তি'
              : 'Dignity • Respect • Compassion • Inclusion'}
          </span>
        </div>
      )}
    </div>
  );
};
