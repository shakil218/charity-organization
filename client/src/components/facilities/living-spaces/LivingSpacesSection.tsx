'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { LivingSpacesSectionProps } from './types';
import { DEFAULT_LIVING_SPACES, DEFAULT_LIVING_SPACES_HEADER } from './data';
import { LivingSpaceBlock } from './LivingSpaceBlock';

export const LivingSpacesSection: React.FC<LivingSpacesSectionProps> = ({
  id = 'living-spaces',
  className = '',
  eyebrow = DEFAULT_LIVING_SPACES_HEADER.eyebrow,
  heading = DEFAULT_LIVING_SPACES_HEADER.heading,
  subtitle = DEFAULT_LIVING_SPACES_HEADER.subtitle,
  spaces = DEFAULT_LIVING_SPACES,
  showNotice = true
}) => {
  const { locale } = useLanguage();

  // Strict verification filter: omit any space where required fields or verification is missing
  const verifiedSpaces = spaces.filter(
    (space) =>
      space &&
      space.isVerified !== false &&
      Boolean(space.title?.en && space.title?.bn) &&
      Boolean(space.description?.en && space.description?.bn)
  );

  const eyebrowText = eyebrow[locale] || eyebrow.en;
  const headingText = heading[locale] || heading.en;
  const subtitleText = subtitle[locale] || subtitle.en;

  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 bg-[#FAF8F2] scroll-mt-20 border-b border-teal-900/10 ${className}`}
      aria-labelledby="living-spaces-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/15 text-[#145B52] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" />
            <span>{eyebrowText}</span>
          </div>

          <h2
            id="living-spaces-heading"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-[#145B52] tracking-tight leading-tight"
          >
            {headingText}
          </h2>

          <p className="text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal">
            {subtitleText}
          </p>
        </div>

        {/* Alternating Two-Column Blocks (Two-column on md & lg) */}
        {verifiedSpaces.length > 0 ? (
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {verifiedSpaces.map((space, idx) => (
              <LivingSpaceBlock
                key={space.id}
                space={space}
                locale={locale}
                isReversed={idx % 2 === 1}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-teal-900/10 text-center max-w-lg mx-auto space-y-3">
            <HelpCircle className="w-10 h-10 text-[#145B52] mx-auto opacity-40" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? 'পরিসর তথ্যাদি যাচাইকরণাধীন' : 'Living Space Details Pending Verification'}
            </h3>
            <p className="text-sm text-[#242B29]/70">
              {locale === 'bn'
                ? 'বর্তমানে আমাদের ক্যাম্পাসের তথ্যাদি যাচাইকরণ সাপেক্ষে আপডেট করা হচ্ছে।'
                : 'Space arrangements are currently being confirmed with our Gazipur administration.'}
            </p>
          </div>
        )}

        {/* Accuracy and Availability Notice Banner */}
        {showNotice && (
          <div className="mt-20 sm:mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-teal-900/10 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="p-3 rounded-2xl bg-[#145B52]/10 text-[#145B52] flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#145B52]" />
            </div>

            <div className="flex-1 space-y-1.5 text-xs sm:text-sm text-[#242B29]/80 leading-relaxed">
              <strong className="font-bold text-[#145B52] text-sm sm:text-base block">
                {locale === 'bn'
                  ? 'দায়িত্বশীল তথ্য ও সেবার স্বচ্ছতা'
                  : 'Responsible Presentation & Ethical Accuracy'}
              </strong>
              <p>
                {DEFAULT_LIVING_SPACES_HEADER.transparencyNote[locale] ||
                  DEFAULT_LIVING_SPACES_HEADER.transparencyNote.en}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#145B52] hover:bg-[#0f443d] text-white text-xs sm:text-sm font-semibold transition-colors flex-shrink-0"
            >
              <span>{locale === 'bn' ? 'যোগাযোগ করুন' : 'Inquire Directly'}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B56D]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
