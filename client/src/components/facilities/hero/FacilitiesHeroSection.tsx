'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Home, 
  ChevronRight, 
  ArrowDown, 
  MessageSquare, 
  Info,
  Building,
  ShieldCheck 
} from 'lucide-react';
import { FacilitiesHeroSectionProps } from './types';
import { DEFAULT_FACILITIES_HERO_DATA } from './data';

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const photoEntrance: Variants = {
  hidden: { opacity: 0, x: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Premium Facilities Hero Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Design & Layout:
 * - Elegant full-width hero with brand colors (Deep Teal #145B52, Forest Green #276749, Warm Cream #FAF8F2, Soft Gold #D6B56D).
 * - Two-column desktop grid & clean stacked mobile hierarchy.
 * - Bilingual support: Inter for English, Hind Siliguri for Bangla.
 * - Restrained entrance animations and ambient background decoration.
 * - Ethical illustrative photo disclaimer badge.
 * - Accessible breadcrumbs and CTA buttons linking to #facilities-overview and /contact.
 */
export const FacilitiesHeroSection: React.FC<FacilitiesHeroSectionProps> = ({
  id = 'facilities-hero',
  className = '',
  imageSrc = DEFAULT_FACILITIES_HERO_DATA.imageSrc,
  imageAlt,
  isIllustrativeImage = true,
  showBreadcrumbs = true,
  eyebrow,
  heading,
  subheading,
  description,
  primaryButtonText,
  primaryButtonHref = DEFAULT_FACILITIES_HERO_DATA.primaryButton.href,
  secondaryButtonText,
  secondaryButtonHref = DEFAULT_FACILITIES_HERO_DATA.secondaryButton.href,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_FACILITIES_HERO_DATA.eyebrow[locale] || DEFAULT_FACILITIES_HERO_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_FACILITIES_HERO_DATA.heading[locale] || DEFAULT_FACILITIES_HERO_DATA.heading.en;

  const sectionSubheading = subheading
    ? (subheading[locale] || subheading.en)
    : DEFAULT_FACILITIES_HERO_DATA.subheading[locale] || DEFAULT_FACILITIES_HERO_DATA.subheading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_FACILITIES_HERO_DATA.description[locale] || DEFAULT_FACILITIES_HERO_DATA.description.en;

  const primaryBtnText = primaryButtonText
    ? (primaryButtonText[locale] || primaryButtonText.en)
    : DEFAULT_FACILITIES_HERO_DATA.primaryButton.text[locale] || DEFAULT_FACILITIES_HERO_DATA.primaryButton.text.en;

  const secondaryBtnText = secondaryButtonText
    ? (secondaryButtonText[locale] || secondaryButtonText.en)
    : DEFAULT_FACILITIES_HERO_DATA.secondaryButton.text[locale] || DEFAULT_FACILITIES_HERO_DATA.secondaryButton.text.en;

  const altText = imageAlt
    ? (imageAlt[locale] || imageAlt.en)
    : DEFAULT_FACILITIES_HERO_DATA.imageAlt[locale] || DEFAULT_FACILITIES_HERO_DATA.imageAlt.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <header
      id={id}
      className={`relative w-full overflow-hidden bg-[#145B52] text-[#FAF8F2] border-b border-[#D6B56D]/20 ${className}`}
    >
      {/* 1. Ambient Background Gradients & Subtle Orbs */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#145B52] via-[#0E423B] to-[#0A332E] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Breathing Soft Gold Ambient Orb */}
      <motion.div 
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6B56D]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Calming Forest Green Ambient Orb */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-28 -left-28 w-80 h-80 bg-[#276749]/35 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Subtle Geometric Dot Lattice Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#FAF8F2_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Decorative Subtle Corner Accent Line */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#D6B56D]/15 rounded-tl-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 md:pt-8 pb-4 sm:pb-5 relative z-10">
        
        {/* 2. Integrated Breadcrumbs Navigation */}
        {showBreadcrumbs && (
          <motion.nav 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            aria-label="Breadcrumb" 
            className="mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF8F2]/75"
          >
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li className="flex items-center">
                <Link 
                  href="/" 
                  className="flex items-center gap-1.5 text-[#FAF8F2]/80 hover:text-[#D6B56D] transition-colors duration-150 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#D6B56D] rounded-sm"
                >
                  <Home className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={fontClass}>
                    {DEFAULT_FACILITIES_HERO_DATA.breadcrumb.home[locale] || DEFAULT_FACILITIES_HERO_DATA.breadcrumb.home.en}
                  </span>
                </Link>
              </li>

              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-[#FAF8F2]/40" />
              </li>

              <li className="flex items-center">
                <span 
                  className={`text-[#D6B56D] font-bold tracking-tight ${fontClass}`}
                  aria-current="page"
                >
                  {DEFAULT_FACILITIES_HERO_DATA.breadcrumb.facilities[locale] || DEFAULT_FACILITIES_HERO_DATA.breadcrumb.facilities.en}
                </span>
              </li>
            </ol>
          </motion.nav>
        )}

        {/* 3. Two-Column Layout (Desktop & Tablet) / Stacked Layout (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Heading, Subhead, Description & CTAs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-4 sm:space-y-4.5"
          >
            
            {/* Eyebrow Chip */}
            <motion.div variants={fadeInUp} className="w-fit">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F2]/10 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Building className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span className={fontClass}>
                  {sectionEyebrow}
                </span>
              </div>
            </motion.div>

            {/* Main Page Heading */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#FAF8F2] tracking-tight leading-[1.18] ${fontClass}`}>
                {sectionHeading}
              </h1>
              
              {/* Secondary Subheading / Organization Title */}
              <p className={`text-base sm:text-lg font-bold text-[#D6B56D] tracking-wide ${fontClass}`}>
                {sectionSubheading}
              </p>
            </motion.div>

            {/* Primary Description */}
            <motion.p 
              variants={fadeInUp}
              className={`text-base sm:text-lg text-[#FAF8F2]/90 leading-relaxed font-normal max-w-2xl ${fontClass}`}
            >
              {sectionDescription}
            </motion.p>

            {/* Supporting Highlight Note */}
            <motion.div 
              variants={fadeInUp}
              className="border-l-3 border-[#D6B56D] pl-4 py-1.5 bg-[#FAF8F2]/5 rounded-r-xl max-w-2xl"
            >
              <p className={`text-xs sm:text-sm text-[#FAF8F2]/85 leading-relaxed ${fontClass}`}>
                {DEFAULT_FACILITIES_HERO_DATA.supportingNote[locale] || DEFAULT_FACILITIES_HERO_DATA.supportingNote.en}
              </p>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div 
              variants={fadeInUp} 
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA: Explore Facilities */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={primaryButtonHref}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FAF8F2] text-[#145B52] hover:bg-[#D6B56D] hover:text-[#0E3E37] text-sm sm:text-base font-extrabold transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D] ${fontClass}`}
              >
                <span>{primaryBtnText}</span>
                <ArrowDown className="w-4 h-4 text-[#145B52] group-hover:text-[#0E3E37]" aria-hidden="true" />
              </motion.a>

              {/* Secondary CTA: Contact Us */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={secondaryButtonHref}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#FAF8F2]/30 text-[#FAF8F2] hover:bg-[#FAF8F2]/10 hover:border-[#D6B56D] hover:text-[#FAF8F2] text-sm sm:text-base font-bold transition-all duration-200 backdrop-blur-xs focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D] ${fontClass}`}
                >
                  <MessageSquare className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
                  <span>{secondaryBtnText}</span>
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Warm, Welcoming Large Photograph */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={photoEntrance}
            className="md:col-span-5 relative mt-6 md:mt-0"
          >
            {/* Soft Gold Frame with Slow Breathing Glow */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#D6B56D]/30 via-[#276749]/20 to-transparent blur-sm pointer-events-none"
              aria-hidden="true" 
            />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D6B56D]/40 bg-[#0E423B] shadow-2xl group">
              
              {/* Aspect Ratio Container with Ultra-Slow Ken Burns Subtle Zoom */}
              <div className="relative w-full aspect-4/3 sm:aspect-16/11 md:aspect-16/11 lg:aspect-4/3 max-h-[360px] lg:max-h-[380px] overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ scale: [1, 1.05] }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={altText}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                </motion.div>

                {/* Subtle Vignette Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A332E]/80 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true" 
                />

                {/* Floating Trust Badge */}
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/90 backdrop-blur-md border border-[#D6B56D]/50 text-[#FAF8F2] text-xs font-bold shadow-lg"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={fontClass}>
                    {DEFAULT_FACILITIES_HERO_DATA.trustPill[locale] || DEFAULT_FACILITIES_HERO_DATA.trustPill.en}
                  </span>
                </motion.div>

                {/* Ethical Photography Disclaimer / Illustrative Notice */}
                {isIllustrativeImage && (
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E423B]/85 backdrop-blur-md border border-[#FAF8F2]/15 text-[#FAF8F2]/80 text-[10px] sm:text-[11px] font-medium leading-tight">
                      <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                      <span className={fontClass}>
                        {DEFAULT_FACILITIES_HERO_DATA.disclaimer[locale] || DEFAULT_FACILITIES_HERO_DATA.disclaimer.en}
                      </span>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </motion.div>

        </div>

        {/* 4. Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 sm:mt-5 flex justify-center"
        >
          <a
            href="#facilities-overview"
            aria-label={isBn ? 'সুযোগ-সুবিধা দেখতে নিচে স্ক্রোল করুন' : 'Scroll down to explore facilities'}
            className="group inline-flex flex-col items-center gap-1.5 text-xs font-semibold text-[#FAF8F2]/80 hover:text-[#D6B56D] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-full p-2 hover:scale-105"
          >
            <span className={`tracking-wider uppercase text-[11px] font-bold text-[#D6B56D] group-hover:text-[#FAF8F2] transition-colors flex items-center gap-1.5 ${fontClass}`}>
              <span>{isBn ? 'নিচে স্ক্রোল করুন' : 'Scroll Down'}</span>
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-[#D6B56D]/70 group-hover:border-[#D6B56D] flex items-start justify-center p-1.5 transition-colors shadow-sm bg-[#0E423B]/30">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 rounded-full bg-[#D6B56D]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </header>
  );
};
