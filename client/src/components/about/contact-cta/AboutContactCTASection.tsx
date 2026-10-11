'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  MessageSquare, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutContactCTASectionProps } from './types';
import { DEFAULT_CONTACT_CTA_DATA } from './data';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
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
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  }
};

export const AboutContactCTASection: React.FC<AboutContactCTASectionProps> = ({
  id = 'final-contact-cta',
  className = '',
  heading,
  subtitle,
  description,
  imageSrc = DEFAULT_CONTACT_CTA_DATA.imageSrc,
  imageAlt,
  contactPhone = DEFAULT_CONTACT_CTA_DATA.phone,
  contactEmail = DEFAULT_CONTACT_CTA_DATA.email,
  visitingHours,
  primaryButtonText,
  primaryButtonHref = DEFAULT_CONTACT_CTA_DATA.primaryButton.href,
  secondaryButtonText,
  secondaryButtonHref = DEFAULT_CONTACT_CTA_DATA.secondaryButton.href
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_CONTACT_CTA_DATA.heading[locale] || DEFAULT_CONTACT_CTA_DATA.heading.en;

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : DEFAULT_CONTACT_CTA_DATA.subtitle[locale] || DEFAULT_CONTACT_CTA_DATA.subtitle.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_CONTACT_CTA_DATA.description[locale] || DEFAULT_CONTACT_CTA_DATA.description.en;

  const primaryBtnLabel = primaryButtonText
    ? (primaryButtonText[locale] || primaryButtonText.en)
    : DEFAULT_CONTACT_CTA_DATA.primaryButton.text[locale] || DEFAULT_CONTACT_CTA_DATA.primaryButton.text.en;

  const secondaryBtnLabel = secondaryButtonText
    ? (secondaryButtonText[locale] || secondaryButtonText.en)
    : DEFAULT_CONTACT_CTA_DATA.secondaryButton.text[locale] || DEFAULT_CONTACT_CTA_DATA.secondaryButton.text.en;

  const visitingHoursLabel = visitingHours
    ? (visitingHours[locale] || visitingHours.en)
    : DEFAULT_CONTACT_CTA_DATA.visitingHours[locale] || DEFAULT_CONTACT_CTA_DATA.visitingHours.en;

  const altText = imageAlt
    ? (imageAlt[locale] || imageAlt.en)
    : DEFAULT_CONTACT_CTA_DATA.imageAlt[locale] || DEFAULT_CONTACT_CTA_DATA.imageAlt.en;

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Split Layout: 12-column grid on tablet and desktop (md & lg), stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Content, Confirmed Contact Details & Action Buttons (7 cols on md & lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Top Pill Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
                <MessageSquare className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{sectionSubtitle}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'আন্তরিক সহায়তা' : 'Always Welcoming'}</span>
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              variants={fadeInUp}
              className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {sectionHeading}
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeInUp}
              className={`text-sm sm:text-base md:text-base lg:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {sectionDescription}
            </motion.p>

            {/* Action Buttons: Primary (Contact Us) & Secondary (Explore Our Services) */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center md:items-center gap-3 sm:gap-3.5 pt-1"
            >
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#145B52] text-white font-bold text-sm shadow-md hover:bg-[#0E3E37] hover:shadow-lg transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D]"
              >
                <span>{primaryBtnLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FAF8F2] text-[#145B52] font-bold text-sm border border-[#145B52]/20 hover:border-[#145B52]/40 shadow-2xs hover:shadow-xs transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52]"
              >
                <span>{secondaryBtnLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#145B52]/70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Officially Confirmed Contact Details Strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 border-t border-[#145B52]/12 space-y-3"
            >
              <span className="block text-xs font-bold text-[#145B52]/70 uppercase tracking-wider">
                {isBn ? 'প্রাতিষ্ঠানিক যোগাযোগ ও অফিস সময়' : 'Official Contact & Office Hours'}
              </span>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-3 lg:gap-4">
                {/* Confirmed Phone Link */}
                {contactPhone && (
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#145B52]/15 text-[#145B52] text-xs sm:text-sm font-semibold hover:border-[#D6B56D] hover:shadow-2xs transition-all group shrink-0"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#145B52]/10 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#145B52] group-hover:text-[#D6B56D]" aria-hidden="true" />
                    </div>
                    <span>{contactPhone}</span>
                  </a>
                )}

                {/* Confirmed Email Link */}
                {contactEmail && (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#145B52]/15 text-[#145B52] text-xs sm:text-sm font-semibold hover:border-[#D6B56D] hover:shadow-2xs transition-all group shrink-0"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#145B52]/10 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 text-[#145B52] group-hover:text-[#D6B56D]" aria-hidden="true" />
                    </div>
                    <span>{contactEmail}</span>
                  </a>
                )}

                {/* Visiting Hours Chip */}
                {visitingHoursLabel && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 text-[#242B29]/75 text-xs font-medium shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                    <span>{visitingHoursLabel}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Welcoming Split Photograph (5 cols on md & lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={imageFadeIn}
            className="md:col-span-5 relative"
          >
            {/* Visual Container with Rounded Corners & Soft Shadows */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] w-full rounded-3xl overflow-hidden border-2 border-[#145B52]/15 bg-white shadow-[0_12px_36px_-8px_rgba(20,91,82,0.14)] group">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#145B52]/70 via-transparent to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-xs text-[#145B52] border border-[#145B52]/15 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span>{isBn ? 'উন্মুক্ত ও আন্তরিক সংলাপ' : 'Open Dialogue'}</span>
                </span>
              </div>

              {/* Bottom Overlay Card with Dignity Guarantee */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#145B52] flex items-center justify-center text-[#D6B56D] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#D6B56D]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-[#145B52] truncate">
                    {isBn ? 'দায়িত্বশীল ও আন্তরিক যোগাযোগ' : 'Respectful & Prompt Assistance'}
                  </span>
                  <span className="block text-[11px] text-[#242B29]/70 truncate">
                    {isBn ? 'পরিবার ও স্বেচ্ছাসেবকদের জন্য সার্বক্ষণিক উন্মুক্ত' : 'Guiding families, visitors & prospective partners'}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Badge Behind Corner */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#D6B56D]/15 rounded-3xl -z-10 pointer-events-none blur-xs"
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
