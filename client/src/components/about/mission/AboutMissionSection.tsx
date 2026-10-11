'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Target, Sparkles, Quote, ShieldAlert, HeartHandshake, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutMissionSectionProps } from './types';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const fadeInRightPhoto: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  }
};

/**
 * Visually prominent Our Mission section for Sonavan Old Rehabilitation Center About Us page.
 *
 * Requirements:
 * - Full-width deep teal/forest-green background (#0E423B / #145B52 / #1E4D2B)
 * - White typography with restrained soft-gold accents (#D6B56D)
 * - Meaningful elder care photograph with elegant frame
 * - Large mission statement in quotation styling
 * - Short supporting paragraph and thematic icon
 * - Responsive layout with accessible contrast (WCAG AAA compliant text)
 * - Explicit draft pending approval indicator per institutional truthfulness
 */
export const AboutMissionSection: React.FC<AboutMissionSectionProps> = ({
  id = 'our-mission',
  className = '',
  missionStatement = {
    en: 'To support older adults with dignity, compassion, respect, and meaningful opportunities for connection and inclusion.',
    bn: 'প্রবীণদের মর্যাদা, সহমর্মিতা, শ্রদ্ধা এবং সামাজিক মেলবন্ধন ও অন্তর্ভুক্তির অর্থপূর্ণ সুযোগ নিশ্চিত করতে তাদের পাশে দাঁড়ানো।'
  },
  supportingParagraph = {
    en: 'Our mission should reflect the organization\'s approved purpose, the needs of the people it serves, and its commitment to respectful community support.',
    bn: 'আমাদের এই মিশনটি সংস্থার অনুমোদিত উদ্দেশ্য, সেবাপ্রাপ্ত মানুষদের প্রকৃত প্রয়োজন এবং দায়িত্বশীল সামাজিক সহায়তার প্রতি আন্তরিক অঙ্গীকারকে প্রতিফলিত করে।'
  },
  imageSrc = 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1000',
  imageAlt = {
    en: 'A caregiver holding hands with an older adult, demonstrating gentle companionship and dignity',
    bn: 'প্রবীণ ব্যক্তির হাত ধরে সহমর্মিতা ও শ্রদ্ধার সাথে সঙ্গ দিচ্ছেন একজন সেবাকর্মী'
  },
  isDraftPendingApproval = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const missionText = missionStatement[locale] || missionStatement.en;
  const supportText = supportingParagraph[locale] || supportingParagraph.en;
  const imageAltText = imageAlt[locale] || imageAlt.en;

  return (
    <section
      id={id}
      aria-label="Our Mission"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-[#0A332E] via-[#0E423B] to-[#145B52] text-white border-y border-[#D6B56D]/30 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Decorative ambient background glows */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6B56D]/12 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 -left-20 w-80 h-80 bg-[#276749]/35 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#FAF8F2_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 lg:gap-16 items-center">

          {/* Left Column: Heading, Mission Statement, and Supporting Paragraph (7 Columns on md/lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Eyebrow & Draft Status Badge */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D6B56D]/50 text-[#D6B56D] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Target className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'আমাদের লক্ষ্য ও উদ্দেশ্য' : 'OUR MISSION'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              </div>

              {isDraftPendingApproval && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'খসড়া • সাংগঠনিক অনুমোদন সাপেক্ষে' : 'Draft Pending Approval'}
                  </span>
                </span>
              )}
            </motion.div>

            {/* Section Main Title */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'আমাদের মিশন' : 'Our Mission'}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#D6B56D] tracking-wide uppercase">
                {isBn ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র' : 'Sonavan Old Rehabilitation Center'}
              </p>
            </motion.div>

            {/* Large Prominent Mission Statement in Quotation Box */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-6 sm:p-7 md:p-8 rounded-3xl bg-white/5 border border-[#D6B56D]/40 backdrop-blur-md shadow-2xl space-y-4"
            >
              {/* Decorative Soft-Gold Quotation Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#D6B56D]/15 border border-[#D6B56D]/30 flex items-center justify-center text-[#D6B56D] shrink-0">
                <Quote className="w-6 h-6 text-[#D6B56D]" aria-hidden="true" />
              </div>

              {/* Large Mission Statement Text */}
              <blockquote className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#FAF8F2] leading-snug tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                &ldquo;{missionText}&rdquo;
              </blockquote>

              {/* Accent Divider */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-[#D6B56D] to-transparent rounded-full" aria-hidden="true" />

              {/* Supporting Paragraph */}
              <p className={`text-sm sm:text-base text-emerald-50/90 leading-relaxed font-medium ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {supportText}
              </p>
            </motion.div>

            {/* Governance & Verification Prudence Note */}
            <motion.div 
              variants={fadeInUp}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-white/75"
            >
              <ShieldAlert className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
              <p className={`leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn
                  ? 'এই মিশন বিবৃতিটি একটি প্রস্তাবিত খসড়া যা পরিচালনা পর্ষদের চূড়ান্ত অনুমোদনের অপেক্ষায় রয়েছে। এটি আনুষ্ঠানিক যাচাই ব্যতীত কোনো নির্দিষ্ট বা বিশেষায়িত চিকিৎসা সেবার প্রতিশ্রুতি নির্দেশ করে না।'
                  : 'This statement represents an organizational draft currently undergoing administrative review. It does not imply or guarantee unverified specific clinical or specialized care services.'}
              </p>
            </motion.div>

          </motion.div>

          {/* Right Column: Meaningful Photograph with Gold-Framed Border (5 Columns on md/lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInRightPhoto}
            className="md:col-span-5 relative mt-4 md:mt-0"
          >
            {/* Ambient Gold Halo */}
            <div 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D6B56D]/30 via-[#1E4D2B]/30 to-transparent blur-md pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/50 bg-[#0E423B] shadow-2xl group">
              <div className="relative w-full aspect-4/5 sm:aspect-1/1 md:aspect-4/5 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAltText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Gradient Vignette for Legibility */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A332E]/85 via-transparent to-black/20 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Floating Thematic Chip */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E423B]/90 backdrop-blur-md border border-[#D6B56D]/50 text-white text-xs font-bold shadow-lg">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'শ্রদ্ধা ও সহমর্মিতা' : 'Compassion & Respect'}
                  </span>
                </div>

                {/* Illustrative Photography Notice */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E423B]/90 backdrop-blur-md border border-white/15 text-white/80 text-[10px] sm:text-[11px] font-medium leading-tight">
                    <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                    <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                      {isBn 
                        ? 'প্রতীকী চিত্র • প্রবীণদের মানবিক সহায়তা ও অন্তর্ভুক্তির রূপায়ণ' 
                        : 'Illustrative photography • Depicting elder connection & inclusion'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
