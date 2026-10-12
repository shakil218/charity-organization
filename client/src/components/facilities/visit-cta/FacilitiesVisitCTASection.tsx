'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Building2,
  CalendarCheck,
  Compass
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FacilitiesVisitCTASectionProps } from './types';
import { DEFAULT_FACILITIES_VISIT_CTA_DATA, DEFAULT_FACILITIES_CONTACT_INFO } from './data';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
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
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const imageEntrance: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const FacilitiesVisitCTASection: React.FC<FacilitiesVisitCTASectionProps> = ({
  id = 'visit-our-center-cta',
  className = '',
  eyebrow,
  heading,
  description,
  primaryButtonText,
  primaryButtonHref = DEFAULT_FACILITIES_VISIT_CTA_DATA.primaryButton.href,
  secondaryButtonText,
  secondaryButtonHref = DEFAULT_FACILITIES_VISIT_CTA_DATA.secondaryButton.href,
  imageSrc = DEFAULT_FACILITIES_VISIT_CTA_DATA.imageSrc,
  imageAlt,
  isImageIllustrative = true,
  contactInfo = DEFAULT_FACILITIES_CONTACT_INFO,
  showEntranceImage = true,
  showContactCards = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const sectionEyebrow = eyebrow
    ? eyebrow[locale] || eyebrow.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.eyebrow[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.eyebrow.en;

  const sectionHeading = heading
    ? heading[locale] || heading.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.heading[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.heading.en;

  const sectionDescription = description
    ? description[locale] || description.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.description[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.description.en;

  const primaryBtnLabel = primaryButtonText
    ? primaryButtonText[locale] || primaryButtonText.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.primaryButton.text[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.primaryButton.text.en;

  const secondaryBtnLabel = secondaryButtonText
    ? secondaryButtonText[locale] || secondaryButtonText.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.secondaryButton.text[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.secondaryButton.text.en;

  const altText = imageAlt
    ? imageAlt[locale] || imageAlt.en
    : DEFAULT_FACILITIES_VISIT_CTA_DATA.imageAlt[locale] || DEFAULT_FACILITIES_VISIT_CTA_DATA.imageAlt.en;

  const addressText = contactInfo?.address
    ? contactInfo.address[locale] || contactInfo.address.en
    : undefined;

  const visitingNoteText = contactInfo?.visitingNote
    ? contactInfo.visitingNote[locale] || contactInfo.visitingNote.en
    : undefined;

  return (
    <section
      id={id}
      aria-label={sectionHeading}
      className={`relative w-full overflow-hidden bg-[#145B52] py-20 sm:py-28 text-white scroll-mt-20 ${className}`}
    >
      {/* Ambient Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Gold Ambient Glow - Top Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D6B56D]/12 blur-3xl" />
        {/* Deep Teal Highlight - Bottom Left */}
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#0A3832]/60 blur-3xl" />
        {/* Subtle Diagonal Lines Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D6B56D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className={`grid grid-cols-1 ${showEntranceImage ? 'lg:grid-cols-12' : ''} gap-10 lg:gap-14 xl:gap-16 items-center`}>
          {/* Left Column: Heading, Description, Dual CTAs & Verified Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className={`${showEntranceImage ? 'lg:col-span-7' : 'max-w-4xl mx-auto text-center'} space-y-7 sm:space-y-8`}
          >
            {/* Top Eyebrow Badge */}
            <motion.div variants={fadeInUp} className={`flex flex-wrap items-center gap-2.5 ${!showEntranceImage ? 'justify-center' : ''}`}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/15 border border-[#D6B56D]/35 text-[#D6B56D] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{sectionEyebrow}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-100 text-xs font-medium">
                <Building2 className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'সোনাভান ক্যাম্পাস' : 'Sonavan Campus'}</span>
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              variants={fadeInUp}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {sectionHeading}
            </motion.h2>

            {/* Description Copy */}
            <motion.p
              variants={fadeInUp}
              className={`text-sm sm:text-base md:text-lg text-teal-100/90 leading-relaxed font-normal max-w-2xl ${
                !showEntranceImage ? 'mx-auto' : ''
              } ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
            >
              {sectionDescription}
            </motion.p>

            {/* Dual Accessible Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 ${
                !showEntranceImage ? 'justify-center' : ''
              }`}
            >
              {/* Primary CTA: "Contact Us" */}
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#D6B56D] hover:bg-[#c4a45a] text-[#145B52] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-[#D6B56D]/20 transition-all duration-200 active:scale-98 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#145B52] group"
              >
                <span>{primaryBtnLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#145B52] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {/* Secondary CTA: "Explore Our Services" */}
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border-2 border-white/30 hover:border-white transition-all duration-200 active:scale-98 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#145B52] backdrop-blur-xs group"
              >
                <Compass className="w-4 h-4 text-[#D6B56D] group-hover:rotate-45 transition-transform" aria-hidden="true" />
                <span>{secondaryBtnLabel}</span>
              </Link>
            </motion.div>

            {/* Verified Contact Details Grid */}
            {showContactCards && (
              <motion.div
                variants={fadeInUp}
                className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
              >
                {/* Verified Phone */}
                {contactInfo?.phone && (
                  <a
                    href={`tel:${contactInfo.phone.replace(/[\s-]/g, '')}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/8 hover:bg-white/12 border border-white/15 transition-colors group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D6B56D]/20 flex items-center justify-center text-[#D6B56D] shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-teal-200/80 block uppercase tracking-wider">
                        {isBn ? 'সরাসরি হেল্পলাইন' : 'Direct Helpline'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate block">
                        {contactInfo.phone}
                      </span>
                    </div>
                  </a>
                )}

                {/* Verified Email */}
                {contactInfo?.email && (
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/8 hover:bg-white/12 border border-white/15 transition-colors group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#D6B56D]/20 flex items-center justify-center text-[#D6B56D] shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-teal-200/80 block uppercase tracking-wider">
                        {isBn ? 'অফিসিয়াল ইমেইল' : 'Official Email'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate block">
                        {contactInfo.email}
                      </span>
                    </div>
                  </a>
                )}

                {/* Verified Campus Address */}
                {addressText && (
                  <div className="sm:col-span-2 flex items-start gap-3 p-3.5 rounded-xl bg-white/8 border border-white/15">
                    <div className="w-9 h-9 rounded-lg bg-[#D6B56D]/20 flex items-center justify-center text-[#D6B56D] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-teal-200/80 block uppercase tracking-wider">
                        {isBn ? 'ক্যাম্পাস ঠিকানা' : 'Campus Location'}
                      </span>
                      <span className="text-xs sm:text-sm text-teal-100/90 leading-relaxed block">
                        {addressText}
                      </span>
                    </div>
                  </div>
                )}

                {/* Visiting Note (Factual Transparency) */}
                {visitingNoteText && (
                  <div className="sm:col-span-2 flex items-start gap-3 p-3 rounded-xl bg-black/20 border border-white/10 text-[11px] text-teal-200/80">
                    <CalendarCheck className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="leading-relaxed">
                      {visitingNoteText}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Photograph of Center Entrance & Welcoming Exterior */}
          {showEntranceImage && imageSrc && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={imageEntrance}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/35 bg-[#0F4740] shadow-2xl shadow-teal-950/50 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
                <Image
                  src={imageSrc}
                  alt={altText}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />

                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#D6B56D] border border-[#D6B56D]/40 shadow-xs">
                    <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{isBn ? 'ক্যাম্পাস প্রবেশদ্বার' : 'Center Entrance'}</span>
                  </span>

                  {isImageIllustrative && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-100 border border-emerald-500/30 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                      <span>{isBn ? 'প্রতীকী চিত্র' : 'Illustrative'}</span>
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 space-y-1 text-white">
                  <h3 className={`text-base sm:text-lg font-bold text-white ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                    {isBn ? 'শান্তিময় ও নিরাপদ পরিবেশ' : 'A Peaceful & Dignified Environment'}
                  </h3>
                  <p className="text-xs text-teal-100/85 leading-relaxed">
                    {isBn
                      ? 'গাজীপুর সদরে অবস্থিত সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র ক্যাম্পাস।'
                      : 'Sonavan Old Rehabilitation Center campus located in Gazipur Sadar.'}
                  </p>
                </div>
              </div>

              {/* Decorative Soft Gold Frame Offset Accent */}
              <div
                className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-3xl border border-[#D6B56D]/20 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
