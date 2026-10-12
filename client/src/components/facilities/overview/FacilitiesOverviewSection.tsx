'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Building, Sparkles, HeartHandshake, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { FacilitiesOverviewSectionProps } from './types';
import { 
  DEFAULT_FACILITIES_OVERVIEW_DATA, 
  DEFAULT_FACILITIES_OVERVIEW_HIGHLIGHTS 
} from './data';
import { FacilitiesOverviewHighlightItem } from './FacilitiesOverviewHighlightItem';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const imageFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * Facilities Overview Section for Sonavan Old Rehabilitation Center (SORC)
 *
 * Purpose:
 * - Introduces the center's physical environment and explains why a welcoming,
 *   respectful, and comfortable setting matters for older adults.
 *
 * Design:
 * - Two-column desktop layout (Left: large photograph; Right: copy & 3 highlights).
 * - Stacked layout on mobile with generous whitespace.
 * - Warm cream background (#FAF8F2), deep teal headings (#145B52), soft gold accents (#D6B56D).
 * - Treats highlights as general design principles, not verified architectural claims.
 * - Fully accessible and bilingual (English and Bangla).
 */
export const FacilitiesOverviewSection: React.FC<FacilitiesOverviewSectionProps> = ({
  id = 'facilities-overview',
  className = '',
  eyebrow,
  heading,
  description,
  secondaryDescription,
  highlights = DEFAULT_FACILITIES_OVERVIEW_HIGHLIGHTS,
  imageSrc = DEFAULT_FACILITIES_OVERVIEW_DATA.imageSrc,
  imageAlt,
  isIllustrativeImage = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_FACILITIES_OVERVIEW_DATA.eyebrow[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_FACILITIES_OVERVIEW_DATA.heading[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_FACILITIES_OVERVIEW_DATA.description[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.description.en;

  const sectionSecondaryDesc = secondaryDescription
    ? (secondaryDescription[locale] || secondaryDescription.en)
    : DEFAULT_FACILITIES_OVERVIEW_DATA.secondaryDescription[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.secondaryDescription.en;

  const altText = imageAlt
    ? (imageAlt[locale] || imageAlt.en)
    : DEFAULT_FACILITIES_OVERVIEW_DATA.imageAlt[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.imageAlt.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-b border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Two-Column Grid: Left (Large Photograph), Right (Content & Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Large Environmental Photograph (5 cols on md, 6 cols on lg) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={imageFadeIn}
            className="md:col-span-5 lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-[#145B52]/15 bg-white shadow-[0_12px_36px_-8px_rgba(20,91,82,0.12)] group">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim for Contrast */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0A332E]/80 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-xs text-[#145B52] border border-[#145B52]/15 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span>{isBn ? 'শান্তিময় সামাজিক পরিবেশ' : 'Serene Living Space'}</span>
                </span>
              </div>

              {/* Bottom Overlay Illustrative Disclaimer Badge */}
              {isIllustrativeImage && (
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0E423B]/90 backdrop-blur-md border border-white/20 text-white shadow-md flex items-center gap-2.5">
                    <Info className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
                    <p className={`text-[10px] sm:text-[11px] text-teal-100/90 leading-tight ${fontClass}`}>
                      {DEFAULT_FACILITIES_OVERVIEW_DATA.disclaimer[locale] || DEFAULT_FACILITIES_OVERVIEW_DATA.disclaimer.en}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Gold Accent Behind Corner */}
            <div
              className="absolute -bottom-3 -left-3 w-24 h-24 bg-[#D6B56D]/15 rounded-3xl -z-10 pointer-events-none blur-xs"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right Column: Eyebrow, Heading, Two Paragraphs & 3 Supporting Highlights (7 cols) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={staggerContainer}
            className="md:col-span-7 lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Top Pill Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide uppercase">
                <Building className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span className={fontClass}>{sectionEyebrow}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'যত্ন ও মমত্ববোধ' : 'Dignity & Care'}</span>
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              id={`${id}-heading`}
              variants={fadeInUp}
              className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
            >
              {sectionHeading}
            </motion.h2>

            {/* Two Short Explanatory Paragraphs */}
            <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
              {/* Paragraph 1 */}
              <p className={`text-sm sm:text-base md:text-base lg:text-lg text-[#242B29]/90 leading-relaxed font-normal ${fontClass}`}>
                {sectionDescription}
              </p>

              {/* Paragraph 2 */}
              <p className={`text-xs sm:text-sm md:text-sm lg:text-base text-[#242B29]/75 leading-relaxed font-normal ${fontClass}`}>
                {sectionSecondaryDesc}
              </p>
            </motion.div>

            {/* Three Supporting Highlights */}
            <motion.div variants={fadeInUp} className="space-y-3 pt-1">
              {highlights.map((item) => (
                <FacilitiesOverviewHighlightItem key={item.id} item={item} />
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
