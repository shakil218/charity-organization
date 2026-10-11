'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  HeartHandshake, 
  Shield, 
  Compass, 
  Sparkles, 
  MessageSquareHeart, 
  UserCheck, 
  Accessibility,
  Info,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CarePrinciplesSectionProps } from './types';
import { DEFAULT_CARE_PRINCIPLES_DATA } from './data';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
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

const iconMap = {
  HeartHandshake,
  Shield,
  Compass,
  Sparkles,
  MessageSquareHeart,
  UserCheck,
  Accessibility,
};

/**
 * "Our Care Principles" Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - 5 recommended principles:
 *   1. Dignity and Respect
 *   2. Privacy and Confidentiality
 *   3. Individual Choice
 *   4. Inclusion and Accessibility
 *   5. Responsible Communication
 * - Symmetrical 3 + 2 card grid on desktop (lg:grid-cols-6 with 2-col and 3-col spans)
 * - White cards on warm cream background (#FAF8F2)
 * - Deep teal typography (#145B52, #0E423B)
 * - Subtle forest-green (#276749) and gold (#D6B56D) accents
 * - Full keyboard navigation with visible focus rings (focus-visible:ring-2 focus-visible:ring-[#D6B56D])
 * - Clear disclaimer stating these are recommended guidance principles, not certified policies
 * - Full bilingual support (Inter / Hind Siliguri)
 * - Framer Motion scroll animations re-triggering on each scroll (viewport once: false)
 */
export const CarePrinciplesSection: React.FC<CarePrinciplesSectionProps> = ({
  id = 'care-principles',
  className = '',
  eyebrow,
  heading,
  description,
  principles = DEFAULT_CARE_PRINCIPLES_DATA.principles,
  noticeTitle,
  noticeText,
  policyNote,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.eyebrow[locale] || DEFAULT_CARE_PRINCIPLES_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.heading[locale] || DEFAULT_CARE_PRINCIPLES_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.description[locale] || DEFAULT_CARE_PRINCIPLES_DATA.description.en;

  const alertTitle = noticeTitle
    ? (noticeTitle[locale] || noticeTitle.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.noticeTitle[locale] || DEFAULT_CARE_PRINCIPLES_DATA.noticeTitle.en;

  const alertBody = noticeText
    ? (noticeText[locale] || noticeText.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.noticeText[locale] || DEFAULT_CARE_PRINCIPLES_DATA.noticeText.en;

  const policyStatus = policyNote
    ? (policyNote[locale] || policyNote.en)
    : DEFAULT_CARE_PRINCIPLES_DATA.policyNote[locale] || DEFAULT_CARE_PRINCIPLES_DATA.policyNote.en;

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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-80 bg-gradient-to-r from-[#276749]/5 via-[#D6B56D]/10 to-[#145B52]/5 rounded-full blur-3xl pointer-events-none"
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

        {/* 5 Principles Card Grid: 3 cards on top row (lg:col-span-2), 2 cards on bottom row (lg:col-span-3) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 items-stretch"
        >
          {principles.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || HeartHandshake;
            const title = item.title[locale] || item.title.en;
            const desc = item.description[locale] || item.description.en;
            const tagLabel = item.tag ? (item.tag[locale] || item.tag.en) : null;

            // Responsive span assignment:
            // Top 3 items: lg:col-span-2 (3 equal cards across 6 columns)
            // Bottom 2 items: lg:col-span-3 (2 equal cards across 6 columns)
            // On tablet (md): items 0-3 take 1 col each, item 4 takes md:col-span-2 md:max-w-xl md:mx-auto w-full
            const spanClass = index < 3
              ? 'lg:col-span-2 md:col-span-1'
              : 'lg:col-span-3 md:col-span-1 ' + (index === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : '');

            return (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                tabIndex={0}
                role="article"
                aria-label={title}
                className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-[#145B52]/10 hover:border-[#D6B56D]/60 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F2] ${spanClass}`}
              >
                <div>
                  {/* Card Header: Icon + Number + Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/15 text-[#145B52] shadow-xs flex items-center justify-center group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] transition-colors duration-200">
                      <IconComponent className="w-6 h-6 transition-colors duration-200" aria-hidden="true" />
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Highlight Tag */}
                      {tagLabel && (
                        <span className={`px-2.5 py-0.5 rounded-full bg-[#276749]/10 text-[#276749] text-xs font-semibold ${fontClass}`}>
                          {tagLabel}
                        </span>
                      )}

                      {/* Number Pill */}
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#FAF8F2] border border-[#D6B56D]/50 text-[#145B52] font-mono text-xs font-bold">
                        {item.principleNumber}
                      </span>
                    </div>
                  </div>

                  {/* Principle Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug mb-3 ${fontClass}`}>
                    {title}
                  </h3>

                  {/* Principle Description */}
                  <p className={`text-sm sm:text-base text-[#242B29]/75 leading-relaxed font-normal ${fontClass}`}>
                    {desc}
                  </p>
                </div>

                {/* Card Subtle Bottom Accent */}
                <div className="mt-6 pt-4 border-t border-[#145B52]/10 flex items-center justify-between text-xs text-[#242B29]/60">
                  <span className={`inline-flex items-center gap-1.5 font-medium ${fontClass}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#276749]" aria-hidden="true" />
                    {isBn ? 'সুপারিশকৃত আচরণবিধি' : 'Recommended Guidance'}
                  </span>
                  <span className="text-[#D6B56D] font-mono font-medium text-xs">
                    sorc.care
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Recommended Principles Notice Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F2ECE0]/70 border border-[#145B52]/15 text-xs sm:text-sm text-[#242B29]/85 leading-relaxed max-w-4xl mx-auto shadow-xs"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#FAF8F2] border border-[#D6B56D]/60 flex items-center justify-center shrink-0 mt-0.5 text-[#145B52]">
              <Info className="w-5 h-5 text-[#D6B56D]" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h4 className={`text-sm sm:text-base font-bold text-[#145B52] ${fontClass}`}>
                {alertTitle}
              </h4>
              <p className={fontClass}>
                {alertBody}
              </p>
              
              {/* Policy Publication Status Note */}
              <div className="pt-2 border-t border-[#145B52]/10 flex items-center gap-2 text-xs text-[#242B29]/70">
                <FileText className="w-3.5 h-3.5 text-[#276749] shrink-0" aria-hidden="true" />
                <span className={`italic ${fontClass}`}>
                  {policyStatus}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
