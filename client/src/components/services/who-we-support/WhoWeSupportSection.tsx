'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  Compass, 
  HandHeart, 
  Home, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Info 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { WhoWeSupportSectionProps } from './types';
import { DEFAULT_WHO_WE_SUPPORT_DATA } from './data';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconMap = {
  Users,
  HeartHandshake,
  Compass,
  HandHeart,
  Home,
  ShieldCheck,
};

/**
 * "Who We Support" Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - 4 distinct informational cards:
 *   1. Older Adults Seeking Community Connection
 *   2. Families and Caregivers Looking for Information
 *   3. Older Adults Exploring Available Support
 *   4. Community Members Interested in Helping
 * - Inclusive photography, deep teal icons (#145B52), soft cream background (#FAF8F2), gold accents (#D6B56D)
 * - Clear note stating that eligibility & available program info should be verified directly with the organization
 * - Central CTA button linking to /contact
 * - Non-presumptive boundaries: no unverified age thresholds, admission criteria, or disability rules
 * - Re-triggering scroll animations on every scroll (viewport once: false)
 * - Complete bilingual support (Inter / Hind Siliguri)
 */
export const WhoWeSupportSection: React.FC<WhoWeSupportSectionProps> = ({
  id = 'who-we-support',
  className = '',
  eyebrow,
  heading,
  description,
  groups = DEFAULT_WHO_WE_SUPPORT_DATA.groups,
  ctaText,
  ctaHref = DEFAULT_WHO_WE_SUPPORT_DATA.ctaHref,
  eligibilityNote,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_WHO_WE_SUPPORT_DATA.eyebrow[locale] || DEFAULT_WHO_WE_SUPPORT_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_WHO_WE_SUPPORT_DATA.heading[locale] || DEFAULT_WHO_WE_SUPPORT_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_WHO_WE_SUPPORT_DATA.description[locale] || DEFAULT_WHO_WE_SUPPORT_DATA.description.en;

  const ctaLabel = ctaText
    ? (ctaText[locale] || ctaText.en)
    : DEFAULT_WHO_WE_SUPPORT_DATA.ctaText[locale] || DEFAULT_WHO_WE_SUPPORT_DATA.ctaText.en;

  const noteText = eligibilityNote
    ? (eligibilityNote[locale] || eligibilityNote.en)
    : DEFAULT_WHO_WE_SUPPORT_DATA.eligibilityNote[locale] || DEFAULT_WHO_WE_SUPPORT_DATA.eligibilityNote.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-[#145B52]/10 scroll-mt-24 overflow-hidden ${className}`}
    >
      {/* Ambient background glow accents */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-80 bg-gradient-to-r from-[#276749]/5 via-[#D6B56D]/10 to-[#145B52]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/5 border border-[#D6B56D]/50 text-[#145B52] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            <span className={fontClass}>
              {sectionEyebrow}
            </span>
          </div>

          {/* Main Section Heading */}
          <h2
            id={`${id}-heading`}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </h2>

          {/* Section Description */}
          <p className={`text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal ${fontClass}`}>
            {sectionDescription}
          </p>
        </motion.div>

        {/* 4 Informational Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
        >
          {groups.map((group) => {
            const IconComponent = iconMap[group.iconName] || Users;
            const title = group.title[locale] || group.title.en;
            const desc = group.description[locale] || group.description.en;
            const audience = group.audienceFocus[locale] || group.audienceFocus.en;
            const altText = group.imageAlt[locale] || group.imageAlt.en;
            const badgeLabel = group.badge ? (group.badge[locale] || group.badge.en) : null;

            return (
              <motion.article
                key={group.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-[#145B52]/10 hover:border-[#D6B56D]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Card Media Header with Inclusive Photography */}
                  <div className="relative w-full aspect-16/10 overflow-hidden bg-[#0E423B]">
                    <Image
                      src={group.imageUrl}
                      alt={altText}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Audience Category Badge */}
                    {badgeLabel && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#145B52]/85 backdrop-blur-md border border-[#D6B56D]/45 text-[#FAF8F2] text-[11px] font-semibold shadow-xs">
                        <span className={fontClass}>{badgeLabel}</span>
                      </div>
                    )}

                    {/* Floating Deep Teal Icon Badge */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#D6B56D]/60 text-[#145B52] shadow-md flex items-center justify-center group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] transition-colors duration-200">
                      <IconComponent className="w-5 h-5 transition-colors duration-200" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Audience Focus Pill */}
                    <div className="w-fit">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md bg-[#FAF8F2] border border-[#145B52]/10 text-[#145B52] text-xs font-semibold leading-relaxed ${fontClass}`}>
                        {audience}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className={`text-lg font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug ${fontClass}`}>
                      {title}
                    </h3>

                    {/* Card Description */}
                    <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed ${fontClass}`}>
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Progress / Compassion Accent */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-[#145B52]/10 flex items-center justify-between text-xs text-[#242B29]/60">
                    <span className={`font-medium ${fontClass}`}>
                      {isBn ? 'সহমর্মিতাপূর্ণ পথনির্দেশ' : 'Respectful Guidance'}
                    </span>
                    <span className="text-[#D6B56D] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

        {/* Central CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-base font-extrabold shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] group ${fontClass}`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Official Eligibility Note Callout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-[#F2ECE0]/70 border border-[#145B52]/15 text-xs sm:text-sm text-[#242B29]/80 leading-relaxed max-w-4xl mx-auto flex items-start gap-3 shadow-xs"
        >
          <Info className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
          <p className={fontClass}>
            <strong className="text-[#145B52]">
              {isBn ? 'গুরুত্বপূর্ণ তথ্য: ' : 'Important Notice: '}
            </strong>
            {noteText}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
