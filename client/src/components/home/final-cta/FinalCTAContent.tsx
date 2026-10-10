'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FinalCTASectionProps } from './types';

export const FinalCTAContent: React.FC<FinalCTASectionProps> = ({
  heading,
  description,
  primaryCtaText,
  primaryCtaHref = '/get-involved',
  secondaryCtaText,
  secondaryCtaHref = '/contact'
}) => {
  const { locale } = useLanguage();

  const titleText =
    heading?.[locale] ||
    heading?.en ||
    (locale === 'bn' ? 'আসুন, গড়ে তুলি আরও যত্নশীল একটি সমাজ।' : "Let's Build a More Caring Community.");

  const descText =
    description?.[locale] ||
    description?.en ||
    (locale === 'bn'
      ? 'আপনার সময়, সহমর্মিতা ও সমর্থন প্রবীণদের জীবনে আত্মমর্যাদা ও সামাজিক একাত্মতা বাড়াতে অর্থপূর্ণ ভূমিকা রাখতে পারে।'
      : 'Your time, kindness, and support can help promote dignity and belonging for older adults.');

  const primaryBtnText =
    primaryCtaText?.[locale] ||
    primaryCtaText?.en ||
    (locale === 'bn' ? 'যুক্ত হোন' : 'Get Involved');

  const secondaryBtnText =
    secondaryCtaText?.[locale] ||
    secondaryCtaText?.en ||
    (locale === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us');

  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-8 text-left max-w-xl md:max-w-none lg:max-w-xl">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#FAF8F2] text-xs font-bold shadow-2xs backdrop-blur-xs">
        <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
        <span className="tracking-wide">
          {locale === 'bn' ? 'সম্মিলিত মানবিক উদ্যোগ' : 'A Shared Journey of Care'}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
        {titleText}
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-base lg:text-lg text-teal-50/90 leading-relaxed font-normal">
        {descText}
      </p>

      {/* CTA Buttons: Rounded with Generous Padding */}
      <div className="pt-2 flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center md:items-center gap-3.5 sm:gap-4 md:gap-3 lg:gap-4">
        {/* Primary CTA */}
        <Link
          href={primaryCtaHref}
          className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 md:px-5 lg:px-8 py-3.5 sm:py-4 md:py-3.5 lg:py-4 rounded-full text-sm sm:text-base md:text-sm lg:text-base font-bold bg-[#D6B56D] hover:bg-[#E5C985] text-[#0E423B] transition-all duration-200 shadow-[0_4px_20px_rgba(214,181,109,0.35)] hover:shadow-[0_8px_28px_rgba(214,181,109,0.45)] group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#145B52]"
          aria-label={primaryBtnText}
        >
          <span>{primaryBtnText}</span>
          <ArrowRight
            className="w-4 h-4 text-[#0E423B] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        {/* Secondary CTA */}
        <Link
          href={secondaryCtaHref}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-5 lg:px-8 py-3.5 sm:py-4 md:py-3.5 lg:py-4 rounded-full text-sm sm:text-base md:text-sm lg:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 shadow-xs focus:outline-hidden focus-visible:ring-3 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#145B52]"
          aria-label={secondaryBtnText}
        >
          <Mail className="w-4 h-4 text-teal-200" aria-hidden="true" />
          <span>{secondaryBtnText}</span>
        </Link>
      </div>

      {/* Reassurance Micro-notice (no unsupported claims) */}
      <div className="pt-3 flex items-center gap-2 text-xs text-teal-100/75">
        <HeartHandshake className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
        <span>
          {locale === 'bn'
            ? 'সহমর্মিতা ও ভালোবাসার মেলবন্ধনে প্রবীণদের পাশে থাকার আন্তরিক আহ্বান।'
            : 'Every gesture of empathy and time promotes elder belonging and peace.'}
        </span>
      </div>
    </div>
  );
};
