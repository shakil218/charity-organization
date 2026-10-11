'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Info, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceCategoriesSectionProps } from './types';
import { DEFAULT_SERVICE_CATEGORIES_DATA } from './data';
import { ServiceCategoryCard } from './ServiceCategoryCard';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

/**
 * Main Service Categories Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Heading: "Explore Our Areas of Support"
 * - Responsive grid: 3 columns on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), 1 on mobile
 * - 6 structured service categories with illustrative photos, icons, 2-sentence descriptions, and "Learn More" links
 * - Availability labels based strictly on verified data (never claiming unverified programs)
 * - Accessible markup, focus states, and bilingual typography (Inter / Hind Siliguri)
 */
export const ServiceCategoriesSection: React.FC<ServiceCategoriesSectionProps> = ({
  id = 'services-list',
  className = '',
  heading,
  eyebrow,
  description,
  categories = DEFAULT_SERVICE_CATEGORIES_DATA.categories,
  onOpenDonateModal,
}) => {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_SERVICE_CATEGORIES_DATA.eyebrow[locale] || DEFAULT_SERVICE_CATEGORIES_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_SERVICE_CATEGORIES_DATA.heading[locale] || DEFAULT_SERVICE_CATEGORIES_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_SERVICE_CATEGORIES_DATA.description[locale] || DEFAULT_SERVICE_CATEGORIES_DATA.description.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] py-16 sm:py-24 scroll-mt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow, Heading, and Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
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

          {/* Main Section Heading */}
          <motion.h2
            id={`${id}-heading`}
            variants={fadeInUp}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </motion.h2>

          {/* Section Subtitle */}
          <motion.p
            variants={fadeInUp}
            className={`text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal ${fontClass}`}
          >
            {sectionDescription}
          </motion.p>
        </motion.div>

        {/* 6 Service Categories Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {categories.map((category, index) => (
            <ServiceCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Official Transparency and Verification Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F2ECE0]/70 border border-[#145B52]/10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#242B29]/85 leading-relaxed">
            <Info className="w-5 h-5 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
            <p className={fontClass}>
              <strong>{isBn ? 'দাপ্তরিক নির্দেশিকা:' : 'Official Notice:'}</strong>{' '}
              {DEFAULT_SERVICE_CATEGORIES_DATA.notice[locale] || DEFAULT_SERVICE_CATEGORIES_DATA.notice.en}
            </p>
          </div>

          {onOpenDonateModal && (
            <button
              type="button"
              onClick={onOpenDonateModal}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-xs sm:text-sm font-bold shadow-md shrink-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] ${fontClass}`}
            >
              <Heart className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{t.nav.donate}</span>
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
};
