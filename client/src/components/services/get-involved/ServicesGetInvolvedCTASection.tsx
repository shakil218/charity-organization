'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ServicesGetInvolvedCTASectionProps } from './types';
import { DEFAULT_SERVICES_GET_INVOLVED_CARDS } from './data';
import { ServicesGetInvolvedCard } from './ServicesGetInvolvedCard';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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

/**
 * Get Involved CTA Section for the Sonavan Old Rehabilitation Center Services Page
 *
 * Heading: "Help Build a More Caring Community"
 * Description: "Whether through volunteering, community collaboration, or an approved contribution, there may be different ways to support older adults."
 *
 * Cards:
 * 1. Volunteer (Volunteer → /get-involved)
 * 2. Support Our Mission (Donate → /donate)
 * 3. Partner With Us (Contact Us → /contact)
 *
 * Features:
 * - Deep teal background, crisp white text, and refined gold (#D6B56D) accents
 * - Responsive 3-card grid with generous spacing
 * - High-contrast accessible rounded buttons with subtle hover effects
 * - Institutional disclaimer ensuring unconfirmed opportunities are not implied
 * - Fully bilingual (English and Bangla)
 */
export const ServicesGetInvolvedCTASection: React.FC<ServicesGetInvolvedCTASectionProps> = ({
  id = 'get-involved-cta',
  className = '',
  heading,
  subtitle,
  description,
  cards = DEFAULT_SERVICES_GET_INVOLVED_CARDS
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : (isBn
        ? 'আরও যত্নশীল একটি সমাজ বিনির্মাণে পাশে থাকুন'
        : 'Help Build a More Caring Community');

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : (isBn ? 'অংশগ্রহণ ও মানবিক সংহতি' : 'COMMUNITY SUPPORT & PARTICIPATION');

  const sectionDescription = description
    ? (description[locale] || description.en)
    : (isBn
        ? 'স্বেচ্ছাসেবা, সামাজিক মেলবন্ধন বা অনুমোদিত অনুদানের মাধ্যমে বয়স্ক ও প্রবীণদের পাশে দাঁড়ানোর বিভিন্ন উপায় থাকতে পারে।'
        : 'Whether through volunteering, community collaboration, or an approved contribution, there may be different ways to support older adults.');

  return (
    <section
      id={id}
      aria-labelledby="services-get-involved-heading"
      className={`relative py-16 sm:py-24 bg-gradient-to-b from-[#0E423B] via-[#145B52] to-[#0A2E2A] text-white overflow-hidden scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      {/* Decorative Subtle Ambient Background Glows */}
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
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow Pill Badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold tracking-wide backdrop-blur-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B56D]/15 border border-[#D6B56D]/30 text-[#D6B56D] text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'সম্মিলিত সহযোগিতা' : 'Collective Care'}</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            id="services-get-involved-heading"
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

        {/* 3 Compact Cards Grid */}
        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={fadeInUp}>
              <ServicesGetInvolvedCard card={card} />
            </motion.div>
          ))}
        </motion.div>

        {/* Institutional Integrity & Verification Notice */}
        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          variants={fadeInUp}
          className="p-4 sm:p-5 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xs flex items-center justify-center gap-3 text-center text-xs text-teal-200/80 max-w-3xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
          <span>
            {isBn
              ? 'সকল প্রাতিষ্ঠানিক অংশীদারিত্ব, অনুদান ও সামাজিক কার্যক্রম নিবন্ধিত নীতিমালা ও যাচাইকৃত প্রক্রিয়ার মাধ্যমে সমন্বয় করা হয়। যেকোনো নিশ্চিত তথ্যের জন্য সরাসরি যোগাযোগ করুন।'
              : 'All volunteer engagement, institutional partnerships, and approved contributions are coordinated through verified administrative channels. Please contact our administrative desk for current guidelines.'}
          </span>
        </motion.div>

      </div>
    </section>
  );
};
