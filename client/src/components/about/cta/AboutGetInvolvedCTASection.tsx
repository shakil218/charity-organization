'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutGetInvolvedCTASectionProps } from './types';
import { DEFAULT_GET_INVOLVED_OPTIONS } from './data';
import { GetInvolvedOptionCard } from './GetInvolvedOptionCard';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const AboutGetInvolvedCTASection: React.FC<AboutGetInvolvedCTASectionProps> = ({
  id = 'get-involved-cta',
  className = '',
  heading,
  subtitle,
  description,
  options = DEFAULT_GET_INVOLVED_OPTIONS
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : (isBn
        ? 'আরও যত্নশীল একটি সমাজ গড়তে আপনিও হোন অংশীদার।'
        : 'Be Part of a More Caring Community');

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : (isBn ? 'মানবিক সংহতি ও অংশগ্রহণ' : 'GET INVOLVED & CONNECT');

  const sectionDescription = description
    ? (description[locale] || description.en)
    : (isBn
        ? 'স্বেচ্ছাসেবা, দায়িত্বশীল অনুদান এবং পারস্পরিক সহযোগিতার মাধ্যমে সংস্থার মানবিক মিশনকে এগিয়ে নিতে বিভিন্ন সুযোগ অন্বেষণ করুন।'
        : "Discover ways to support the organization's mission through volunteering, responsible contributions, and community collaboration.");

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 bg-gradient-to-b from-[#0E423B] via-[#145B52] to-[#0A2E2A] text-white overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Decorative Subtle Background Glow Elements */}
      <div
        className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D6B56D]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Top Pill Badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold tracking-wide backdrop-blur-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B56D]/15 border border-[#D6B56D]/30 text-[#D6B56D] text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'একত্রিত মমত্ববোধ' : 'Unified Compassion'}</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeInUp}
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionHeading}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className={`text-sm sm:text-base md:text-lg text-teal-100/90 leading-relaxed font-normal max-w-2xl mx-auto ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionDescription}
          </motion.p>

          {/* Gold Decorative Center Accent */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </motion.div>
        </motion.div>

        {/* 3 Compact Options Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {options.map((option) => (
            <GetInvolvedOptionCard key={option.id} option={option} />
          ))}
        </motion.div>

        {/* Institutional Truthfulness Footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="p-4 sm:p-5 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xs flex items-center justify-center gap-3 text-center text-xs text-teal-200/80 max-w-3xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
          <span>
            {isBn
              ? 'অংশগ্রহণের আনুষ্ঠানিক নিয়মাবলী ও নিশ্চিত সুযোগসমূহ প্রাতিষ্ঠানিক প্রক্রিয়ার মাধ্যমে বাস্তবায়িত হয়। বিশদ তথ্যের জন্য আমাদের প্রশাসনিক ডেস্কে যোগাযোগ করুন।'
              : 'Engagement avenues and donation channels are coordinated through verified administrative processes. Please contact our administrative office for current participation guidelines.'}
          </span>
        </motion.div>

      </div>
    </section>
  );
};
