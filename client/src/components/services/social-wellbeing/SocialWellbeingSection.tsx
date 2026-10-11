'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  MessageCircleHeart, 
  Users, 
  Sparkles, 
  HeartHandshake, 
  ArrowRight, 
  Info, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SocialWellbeingSectionProps } from './types';
import { DEFAULT_SOCIAL_WELLBEING_DATA } from './data';

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

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
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
  MessageCircleHeart,
  Users,
  Sparkles,
  HeartHandshake,
};

/**
 * Social and Emotional Wellbeing Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Welcoming layout with warm cream background (#FAF8F2), deep teal headings (#145B52), and forest-green accents (#276749)
 * - 4 visual feature cards: Friendly Conversation, Community Participation, Recreational Activities, Family Connections
 * - Subtle hover micro-interactions (elevation shadow, subtle translate-y, border glow)
 * - Accessible keyboard focus management
 * - Ethical disclaimer ensuring non-clinical transparency (no unconfirmed counseling/therapy claimed)
 * - Re-animates smoothly on every scroll down (viewport once: false)
 * - Complete English and Bangla bilingual localization
 */
export const SocialWellbeingSection: React.FC<SocialWellbeingSectionProps> = ({
  id = 'social-emotional-wellbeing',
  className = '',
  eyebrow,
  heading,
  description,
  secondaryParagraph,
  cards = DEFAULT_SOCIAL_WELLBEING_DATA.cards,
  ctaText,
  ctaHref = DEFAULT_SOCIAL_WELLBEING_DATA.ctaHref,
  disclaimerNotice,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.eyebrow[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.heading[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.description[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.description.en;

  const sectionSecondary = secondaryParagraph
    ? (secondaryParagraph[locale] || secondaryParagraph.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.secondaryParagraph[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.secondaryParagraph.en;

  const ctaLabel = ctaText
    ? (ctaText[locale] || ctaText.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.ctaText[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.ctaText.en;

  const scopeNote = disclaimerNotice
    ? (disclaimerNotice[locale] || disclaimerNotice.en)
    : DEFAULT_SOCIAL_WELLBEING_DATA.disclaimerNotice[locale] || DEFAULT_SOCIAL_WELLBEING_DATA.disclaimerNotice.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-[#145B52]/10 scroll-mt-24 overflow-hidden ${className}`}
    >
      {/* Ambient background decoration */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#276749]/5 via-[#D6B56D]/10 to-[#145B52]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
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

          {/* Section Main Heading */}
          <motion.h2
            id={`${id}-heading`}
            variants={fadeInUp}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </motion.h2>

          {/* Primary Description */}
          <motion.p
            variants={fadeInUp}
            className={`text-base sm:text-lg text-[#242B29]/85 leading-relaxed font-normal ${fontClass}`}
          >
            {sectionDescription}
          </motion.p>

          {/* Secondary Context Paragraph */}
          <motion.p
            variants={fadeInUp}
            className={`text-sm sm:text-base text-[#242B29]/70 leading-relaxed font-normal max-w-2xl mx-auto ${fontClass}`}
          >
            {sectionSecondary}
          </motion.p>
        </motion.div>

        {/* Four Visual Feature Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
        >
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.iconName] || HeartHandshake;
            const title = card.title[locale] || card.title.en;
            const desc = card.description[locale] || card.description.en;
            const badgeText = card.badge ? (card.badge[locale] || card.badge.en) : null;
            const programLink = card.programLink;
            const linkLabel = programLink ? (programLink.label[locale] || programLink.label.en) : null;

            return (
              <motion.article
                key={card.id}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 border border-[#145B52]/10 hover:border-[#D6B56D]/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Subtle top decorative accent bar on hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#145B52] via-[#276749] to-[#D6B56D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/10 group-hover:bg-[#145B52] text-[#145B52] group-hover:text-[#FAF8F2] flex items-center justify-center transition-all duration-200 shadow-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                    </div>

                    {badgeText && (
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#276749]/10 text-[#276749] border border-[#276749]/15 ${fontClass}`}>
                        {badgeText}
                      </span>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-lg sm:text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug pt-1 ${fontClass}`}>
                    {title}
                  </h3>

                  {/* Card Short Explanation */}
                  <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed ${fontClass}`}>
                    {desc}
                  </p>
                </div>

                {/* Optional Program Link / Inquire Action */}
                <div className="pt-5 mt-5 border-t border-[#145B52]/10">
                  {programLink ? (
                    <Link
                      href={programLink.href}
                      className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#145B52] group-hover:text-[#276749] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-md transition-colors ${fontClass}`}
                    >
                      <span>{linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className={`text-xs text-[#242B29]/50 font-medium ${fontClass}`}>
                      {isBn ? 'স্বাভাবিক সামাজিক উদ্যোগ' : 'Informal Social Initiative'}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Ethical Verification Disclaimer & Contact Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-14 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F2ECE0]/70 border border-[#145B52]/10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#242B29]/85 leading-relaxed max-w-3xl">
            <Info className="w-5 h-5 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
            <p className={fontClass}>
              <strong>{isBn ? 'দাপ্তরিক ও মানসিক সুস্থতা বিজ্ঞপ্তি:' : 'Scope & Wellbeing Notice:'}</strong>{' '}
              {scopeNote}
            </p>
          </div>

          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg shrink-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] ${fontClass}`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
