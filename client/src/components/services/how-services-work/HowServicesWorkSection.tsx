'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  MessageSquare, 
  ClipboardList, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Info,
  PhoneCall,
  CheckCheck
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { HowServicesWorkSectionProps } from './types';
import { DEFAULT_HOW_SERVICES_WORK_DATA } from './data';

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
  hidden: { opacity: 0, y: 24 },
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
  MessageSquare,
  ClipboardList,
  Compass,
  ShieldCheck,
  PhoneCall,
  CheckCheck,
};

/**
 * "How Our Services Work" Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Clear four-step general inquiry pathway:
 *   1. Get in Touch
 *   2. Share Your Needs
 *   3. Discuss Available Options
 *   4. Follow the Confirmed Process
 * - Responsive horizontal timeline on desktop (lg+), vertical progress timeline on mobile/tablet
 * - Deep teal step markers (#145B52), subtle gold accents (#D6B56D), cream background (#FAF8F2)
 * - Clear CTA linking to Contact Our Team (/contact)
 * - Transparent non-clinical disclaimer stating this is an inquiry pathway, not an admission or medical assessment
 * - Scroll re-animation on every scroll event (viewport once: false)
 * - Full bilingual support (English & Bengali)
 */
export const HowServicesWorkSection: React.FC<HowServicesWorkSectionProps> = ({
  id = 'how-services-work',
  className = '',
  eyebrow,
  heading,
  description,
  steps = DEFAULT_HOW_SERVICES_WORK_DATA.steps,
  ctaText,
  ctaHref = DEFAULT_HOW_SERVICES_WORK_DATA.ctaHref,
  disclaimerNotice,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_HOW_SERVICES_WORK_DATA.eyebrow[locale] || DEFAULT_HOW_SERVICES_WORK_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_HOW_SERVICES_WORK_DATA.heading[locale] || DEFAULT_HOW_SERVICES_WORK_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_HOW_SERVICES_WORK_DATA.description[locale] || DEFAULT_HOW_SERVICES_WORK_DATA.description.en;

  const ctaLabel = ctaText
    ? (ctaText[locale] || ctaText.en)
    : DEFAULT_HOW_SERVICES_WORK_DATA.ctaText[locale] || DEFAULT_HOW_SERVICES_WORK_DATA.ctaText.en;

  const noticeText = disclaimerNotice
    ? (disclaimerNotice[locale] || disclaimerNotice.en)
    : DEFAULT_HOW_SERVICES_WORK_DATA.disclaimerNotice[locale] || DEFAULT_HOW_SERVICES_WORK_DATA.disclaimerNotice.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] pt-10 sm:pt-14 pb-10 sm:pb-14 border-b border-[#145B52]/10 scroll-mt-24 overflow-hidden ${className}`}
    >
      {/* Ambient background glow accents */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-gradient-to-r from-[#D6B56D]/10 via-[#145B52]/5 to-[#276749]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Centered with Eyebrow, Heading, and Description */}
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

          {/* Section Main Heading */}
          <h2
            id={`${id}-heading`}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </h2>

          {/* Description */}
          <p className={`text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal ${fontClass}`}>
            {sectionDescription}
          </p>
        </motion.div>

        {/* 4-Step Process: Horizontal Timeline on Desktop / Vertical Timeline on Mobile */}
        <div className="relative mt-10 sm:mt-12">
          
          {/* Desktop Horizontal Connecting Line behind Step Markers */}
          <div 
            className="hidden lg:block absolute top-7 left-14 right-14 h-0.5 bg-gradient-to-r from-[#145B52]/20 via-[#D6B56D]/50 to-[#145B52]/20 pointer-events-none z-0" 
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          >
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || MessageSquare;
              const title = step.title[locale] || step.title.en;
              const desc = step.description[locale] || step.description.en;

              return (
                <motion.div
                  key={step.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#145B52]/10 hover:border-[#D6B56D]/60 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Step Marker & Icon Row */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      {/* Deep Teal Step Marker Badge */}
                      <div className="relative flex items-center justify-center w-13 h-13 rounded-2xl bg-[#145B52] border-2 border-[#D6B56D]/60 text-[#FAF8F2] font-black text-base sm:text-lg shadow-md group-hover:bg-[#0E423B] group-hover:scale-105 transition-all duration-200">
                        <span className={fontClass}>{step.stepNumber}</span>
                        {/* Gold corner accent pip */}
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D6B56D] border-2 border-white" aria-hidden="true" />
                      </div>

                      {/* Icon Container */}
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 group-hover:bg-[#145B52] flex items-center justify-center transition-colors duration-200">
                        <IconComponent className="w-5 h-5 text-[#145B52] group-hover:text-[#FAF8F2] transition-colors duration-200" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-lg sm:text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug mb-2.5 ${fontClass}`}>
                      {title}
                    </h3>

                    {/* Step Explanation */}
                    <p className={`text-sm text-[#242B29]/75 leading-relaxed ${fontClass}`}>
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Progress Accent Pip */}
                  <div className="mt-5 pt-3.5 border-t border-[#145B52]/10 flex items-center justify-between text-xs text-[#242B29]/55">
                    <span className={`font-semibold ${fontClass}`}>
                      {isBn ? `ধাপ ${step.stepNumber}` : `Step ${step.stepNumber}`}
                    </span>
                    <span className="text-[#D6B56D] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Central CTA: "Contact Our Team" */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-base font-extrabold shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] group ${fontClass}`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* General Inquiry Notice Box (Non-clinical & Non-admission Disclaimer) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-[#F2ECE0]/70 border border-[#145B52]/15 text-xs text-[#242B29]/80 leading-relaxed max-w-4xl mx-auto flex items-start gap-3 shadow-xs"
        >
          <Info className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
          <p className={fontClass}>
            <strong className="text-[#145B52]">
              {isBn ? 'তথ্য অনুসন্ধান বিষয়ক বিজ্ঞপ্তি: ' : 'General Inquiry Notice: '}
            </strong>
            {noticeText}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
