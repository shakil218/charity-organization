'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HeartHandshake, Users, ShieldCheck, Sparkles, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ServicesOverviewSectionProps } from './types';
import { DEFAULT_SERVICES_OVERVIEW_DATA } from './data';

// Animation Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconMap = {
  HeartHandshake: HeartHandshake,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

/**
 * Services Overview Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Introduces service philosophy before displaying individual service categories
 * - Centered section heading, subtitle, and two introductory paragraphs
 * - Three distinct value cards with Lucide icons and hover micro-interactions
 * - Warm cream background (#FAF8F2), deep teal headings (#145B52), soft gold accents (#D6B56D)
 * - Strict bilingual support (Inter for English, Hind Siliguri for Bangla)
 * - Ethical disclaimer note reinforcing general principles
 */
export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  id = 'services-overview',
  className = '',
  eyebrow,
  heading,
  description,
  secondaryDescription,
  valueCards = DEFAULT_SERVICES_OVERVIEW_DATA.valueCards,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_SERVICES_OVERVIEW_DATA.eyebrow[locale] || DEFAULT_SERVICES_OVERVIEW_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_SERVICES_OVERVIEW_DATA.heading[locale] || DEFAULT_SERVICES_OVERVIEW_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_SERVICES_OVERVIEW_DATA.description[locale] || DEFAULT_SERVICES_OVERVIEW_DATA.description.en;

  const sectionSecondaryDesc = secondaryDescription
    ? (secondaryDescription[locale] || secondaryDescription.en)
    : DEFAULT_SERVICES_OVERVIEW_DATA.secondaryDescription[locale] || DEFAULT_SERVICES_OVERVIEW_DATA.secondaryDescription.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] py-16 sm:py-24 border-b border-[#145B52]/10 scroll-mt-20 overflow-hidden ${className}`}
    >
      {/* Decorative ambient background accents */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FAF8F2] via-[#F2ECE0]/40 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Philosophy Introduction (Centered) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/5 border border-[#D6B56D]/50 text-[#145B52] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span className={fontClass}>
                {sectionEyebrow}
              </span>
            </div>
          </motion.div>

          {/* Centered Heading */}
          <motion.h2
            id={`${id}-heading`}
            variants={fadeInUp}
            className={`text-2xl sm:text-3xl md:text-4xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </motion.h2>

          {/* Centered Introductory Paragraph 1 */}
          <motion.p
            variants={fadeInUp}
            className={`text-base sm:text-lg text-[#242B29]/85 leading-relaxed font-normal ${fontClass}`}
          >
            {sectionDescription}
          </motion.p>

          {/* Centered Introductory Paragraph 2 */}
          <motion.p
            variants={fadeInUp}
            className={`text-sm sm:text-base text-[#242B29]/70 leading-relaxed font-normal pt-1 ${fontClass}`}
          >
            {sectionSecondaryDesc}
          </motion.p>
        </motion.div>

        {/* Three Value Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {valueCards.map((card, idx) => {
            const IconComponent = iconMap[card.iconName] || HeartHandshake;
            const title = card.title[locale] || card.title.en;
            const desc = card.description[locale] || card.description.en;

            return (
              <motion.div
                key={card.id}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#145B52]/10 hover:border-[#D6B56D]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top gold accent bar on card hover */}
                <div 
                  className="absolute top-0 left-6 right-6 h-1 rounded-t-full bg-gradient-to-r from-transparent via-[#D6B56D]/0 to-transparent group-hover:via-[#D6B56D]/60 transition-all duration-300"
                  aria-hidden="true" 
                />

                <div className="space-y-4">
                  {/* Card Icon Container */}
                  <div className="w-13 h-13 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/10 group-hover:border-[#D6B56D]/40 group-hover:bg-[#145B52] flex items-center justify-center transition-all duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6 text-[#145B52] group-hover:text-[#FAF8F2] transition-colors duration-300" aria-hidden="true" />
                  </div>

                  {/* Card Number & Title */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B56D]">
                      0{idx + 1} • {isBn ? 'মূলনীতি' : 'Principle'}
                    </span>
                    <h3 className={`text-lg sm:text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors duration-200 ${fontClass}`}>
                      {title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className={`text-sm text-[#242B29]/75 leading-relaxed ${fontClass}`}>
                    {desc}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="mt-6 pt-4 border-t border-[#145B52]/5 flex items-center justify-between text-xs font-semibold text-[#145B52]/70 group-hover:text-[#145B52]">
                  <span className={fontClass}>
                    {isBn ? 'সেবা দর্শন' : 'Care Philosophy'}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56D] group-hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guiding Principles Note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-14 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2ECE0]/60 border border-[#145B52]/10 text-xs text-[#242B29]/75 leading-relaxed">
            <Info className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
            <span className={fontClass}>
              {DEFAULT_SERVICES_OVERVIEW_DATA.governanceNote[locale] || DEFAULT_SERVICES_OVERVIEW_DATA.governanceNote.en}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
