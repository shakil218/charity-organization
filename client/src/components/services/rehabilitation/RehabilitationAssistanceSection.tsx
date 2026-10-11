'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Compass, 
  Activity, 
  UserCheck, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { RehabilitationAssistanceSectionProps } from './types';
import { DEFAULT_REHABILITATION_DATA } from './data';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
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

const photoEntrance: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconMap = {
  Compass,
  Activity,
  UserCheck,
  ExternalLink,
};

/**
 * Rehabilitation Assistance Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Alternating two-column responsive layout (defaults to image on the right)
 * - Deep teal headings (#145B52), calm cream background (#FAF8F2)
 * - 4 concise feature cards with Lucide icons highlighting independence, daily living, coordination & resources
 * - High-authenticity illustrative photograph with subtle Ken Burns animation & gold badge
 * - Small contact CTA: "Ask About Available Support"
 * - Clear, transparent scope verification disclaimer respecting regulatory standards
 * - Smooth scroll animation (viewport once: false) on every scroll down
 * - Bilingual typography support (Inter / Hind Siliguri)
 */
export const RehabilitationAssistanceSection: React.FC<RehabilitationAssistanceSectionProps> = ({
  id = 'rehabilitation-assistance',
  className = '',
  imagePosition = 'right',
  imageSrc = DEFAULT_REHABILITATION_DATA.imageSrc,
  imageAlt,
  eyebrow,
  heading,
  description,
  secondaryParagraph,
  features = DEFAULT_REHABILITATION_DATA.features,
  ctaText,
  ctaHref = DEFAULT_REHABILITATION_DATA.ctaHref,
  disclaimerNotice,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_REHABILITATION_DATA.eyebrow[locale] || DEFAULT_REHABILITATION_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_REHABILITATION_DATA.heading[locale] || DEFAULT_REHABILITATION_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_REHABILITATION_DATA.description[locale] || DEFAULT_REHABILITATION_DATA.description.en;

  const sectionSecondary = secondaryParagraph
    ? (secondaryParagraph[locale] || secondaryParagraph.en)
    : DEFAULT_REHABILITATION_DATA.secondaryParagraph[locale] || DEFAULT_REHABILITATION_DATA.secondaryParagraph.en;

  const ctaLabel = ctaText
    ? (ctaText[locale] || ctaText.en)
    : DEFAULT_REHABILITATION_DATA.ctaText[locale] || DEFAULT_REHABILITATION_DATA.ctaText.en;

  const altText = imageAlt
    ? (imageAlt[locale] || imageAlt.en)
    : DEFAULT_REHABILITATION_DATA.imageAlt[locale] || DEFAULT_REHABILITATION_DATA.imageAlt.en;

  const scopeNote = disclaimerNotice
    ? (disclaimerNotice[locale] || disclaimerNotice.en)
    : DEFAULT_REHABILITATION_DATA.disclaimerNotice[locale] || DEFAULT_REHABILITATION_DATA.disclaimerNotice.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  const isImageRight = imagePosition === 'right';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] pt-10 sm:pt-14 pb-10 sm:pb-14 border-b border-[#145B52]/10 scroll-mt-24 overflow-hidden ${className}`}
    >
      {/* Ambient background decoration */}
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-[#145B52]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Responsive Grid (Desktop & Tablet) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Copy & 4 Feature Points Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className={`lg:col-span-7 space-y-6 sm:space-y-7 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* Eyebrow Pill */}
            <motion.div variants={fadeInUp} className="w-fit">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/5 border border-[#D6B56D]/50 text-[#145B52] text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span className={fontClass}>
                  {sectionEyebrow}
                </span>
              </div>
            </motion.div>

            {/* Section Heading & Descriptions */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2
                id={`${id}-heading`}
                className={`text-2xl sm:text-3xl md:text-4xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
              >
                {sectionHeading}
              </h2>
              
              {/* Primary Description */}
              <p className={`text-base sm:text-lg text-[#242B29]/85 leading-relaxed font-normal ${fontClass}`}>
                {sectionDescription}
              </p>

              {/* Secondary Context Paragraph */}
              <p className={`text-sm sm:text-base text-[#242B29]/70 leading-relaxed font-normal pt-0.5 ${fontClass}`}>
                {sectionSecondary}
              </p>
            </motion.div>

            {/* 4 Feature Points Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {features.map((feature) => {
                const IconComponent = iconMap[feature.iconName] || Activity;
                const title = feature.title[locale] || feature.title.en;
                const desc = feature.description[locale] || feature.description.en;

                return (
                  <div
                    key={feature.id}
                    className="group/item p-4 sm:p-5 rounded-2xl bg-white border border-[#145B52]/10 hover:border-[#D6B56D]/60 hover:shadow-md transition-all duration-300 space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 group-hover/item:bg-[#145B52] flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-5 h-5 text-[#145B52] group-hover/item:text-[#FAF8F2] transition-colors duration-200" aria-hidden="true" />
                    </div>

                    <h3 className={`text-base font-bold text-[#145B52] group-hover/item:text-[#0E423B] transition-colors ${fontClass}`}>
                      {title}
                    </h3>

                    <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed ${fontClass}`}>
                      {desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Small Contact CTA & Ethical Verification Disclaimer */}
            <motion.div variants={fadeInUp} className="pt-2 space-y-4">
              <div>
                <Link
                  href={ctaHref}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-sm sm:text-base font-extrabold shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] ${fontClass}`}
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              {/* Ethical Scope Note Callout */}
              <div className="flex items-start gap-2.5 text-xs text-[#242B29]/70 pt-2 border-t border-[#145B52]/10">
                <Info className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                <p className={fontClass}>
                  {scopeNote}
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Illustrative Photograph Column (Desktop Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={photoEntrance}
            className={`lg:col-span-5 relative ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Soft Gold Frame with Gentle Glow */}
            <motion.div 
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2.5 sm:-inset-3.5 rounded-3xl bg-gradient-to-tr from-[#145B52]/20 via-[#D6B56D]/30 to-transparent blur-md pointer-events-none"
              aria-hidden="true" 
            />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D6B56D]/35 bg-[#0E423B] shadow-xl group">
              
              {/* Aspect Ratio Container with Ultra-Slow Subtle Ken Burns Zoom */}
              <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-4/5 overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ scale: [1, 1.045] }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={altText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                  />
                  {/* Subtle Gradient Overlays for Depth and Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#145B52]/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating Dignity Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#145B52]/85 backdrop-blur-md border border-[#D6B56D]/50 text-[#FAF8F2] text-xs font-semibold shadow-md"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={fontClass}>
                    {DEFAULT_REHABILITATION_DATA.imageBadge[locale] || DEFAULT_REHABILITATION_DATA.imageBadge.en}
                  </span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
