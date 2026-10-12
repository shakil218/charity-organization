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
  MapPin, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ServicesContactCTASectionProps } from './types';
import { DEFAULT_SERVICES_CONTACT_CTA_DATA, DEFAULT_SERVICES_CONTACT_INFO } from './data';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
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
 * Final Contact CTA Section for the Sonavan Old Rehabilitation Center Services Page
 *
 * Heading: "Looking for More Information?"
 * Description: "Contact the organization to learn about confirmed services, eligibility, availability, and the next steps for making an inquiry."
 *
 * Design:
 * - Two-column desktop layout (Left: heading, copy, buttons, verified contact info; Right: illustrative image).
 * - Warm cream background, deep teal typography, and subtle gold details.
 * - Buttons: "Contact Us" → /contact, "About Our Organization" → /about.
 * - Displays verified phone, email, and address.
 * - Completely responsive, accessible, and bilingual (English and Bangla).
 */
export const ServicesContactCTASection: React.FC<ServicesContactCTASectionProps> = ({
  id = 'services-contact-cta',
  className = '',
  heading,
  subtitle,
  description,
  imageSrc = DEFAULT_SERVICES_CONTACT_CTA_DATA.imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonHref = DEFAULT_SERVICES_CONTACT_CTA_DATA.primaryButton.href,
  secondaryButtonText,
  secondaryButtonHref = DEFAULT_SERVICES_CONTACT_CTA_DATA.secondaryButton.href,
  contactInfo = DEFAULT_SERVICES_CONTACT_INFO
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.heading[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.heading.en;

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.subtitle[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.subtitle.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.description[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.description.en;

  const primaryBtnLabel = primaryButtonText
    ? (primaryButtonText[locale] || primaryButtonText.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.primaryButton.text[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.primaryButton.text.en;

  const secondaryBtnLabel = secondaryButtonText
    ? (secondaryButtonText[locale] || secondaryButtonText.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.secondaryButton.text[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.secondaryButton.text.en;

  const altText = imageAlt
    ? (imageAlt[locale] || imageAlt.en)
    : DEFAULT_SERVICES_CONTACT_CTA_DATA.imageAlt[locale] || DEFAULT_SERVICES_CONTACT_CTA_DATA.imageAlt.en;

  const addressText = contactInfo.address ? (contactInfo.address[locale] || contactInfo.address.en) : undefined;
  const visitingHoursText = contactInfo.visitingHours ? (contactInfo.visitingHours[locale] || contactInfo.visitingHours.en) : undefined;

  return (
    <section
      id={id}
      aria-labelledby="services-contact-cta-heading"
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Heading, Description, Buttons & Confirmed Contact Details (7 cols) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Top Eyebrow Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
                <MessageSquare className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{sectionSubtitle}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'সরাসরি তথ্য' : 'Verified Guidance'}</span>
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              id="services-contact-cta-heading"
              variants={fadeInUp}
              className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {sectionHeading}
            </motion.h2>

            {/* Section Description */}
            <motion.p
              variants={fadeInUp}
              className={`text-sm sm:text-base md:text-base lg:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {sectionDescription}
            </motion.p>

            {/* Action Buttons: Contact Us & About Our Organization */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center md:items-center gap-3 sm:gap-3.5 pt-1"
            >
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#145B52] text-white font-bold text-sm shadow-md hover:bg-[#0E3E37] hover:shadow-lg transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D]"
              >
                <span>{primaryBtnLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FAF8F2] text-[#145B52] font-bold text-sm border border-[#145B52]/20 hover:border-[#145B52]/40 shadow-2xs hover:shadow-xs transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52]"
              >
                <span>{secondaryBtnLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#145B52]/70 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Confirmed Contact Details Section */}
            {(contactInfo.phone || contactInfo.email || addressText || visitingHoursText) && (
              <motion.div
                variants={fadeInUp}
                className="pt-4 border-t border-[#145B52]/12 space-y-3"
              >
                <span className="block text-xs font-bold text-[#145B52]/70 uppercase tracking-wider">
                  {isBn ? 'নিশ্চিত যোগাযোগের তথ্য ও কেন্দ্র অবস্থান' : 'Verified Contact Details & Campus'}
                </span>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* Verified Phone */}
                  {contactInfo.phone && (
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#145B52]/15 text-[#145B52] text-xs sm:text-sm font-semibold hover:border-[#D6B56D] hover:shadow-2xs transition-all group shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52]"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#145B52]/10 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5 text-[#145B52] group-hover:text-[#D6B56D]" aria-hidden="true" />
                      </div>
                      <span>{contactInfo.phone}</span>
                    </a>
                  )}

                  {/* Verified Email */}
                  {contactInfo.email && (
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#145B52]/15 text-[#145B52] text-xs sm:text-sm font-semibold hover:border-[#D6B56D] hover:shadow-2xs transition-all group shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52]"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#145B52]/10 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5 text-[#145B52] group-hover:text-[#D6B56D]" aria-hidden="true" />
                      </div>
                      <span>{contactInfo.email}</span>
                    </a>
                  )}

                  {/* Verified Visiting Hours */}
                  {visitingHoursText && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 text-[#242B29]/75 text-xs font-medium shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                      <span>{visitingHoursText}</span>
                    </div>
                  )}

                  {/* Verified Campus Location */}
                  {addressText && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 text-[#242B29]/75 text-xs font-medium shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                      <span className="max-w-xs truncate">{addressText}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Illustrative Image (5 cols) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={imageFadeIn}
            className="md:col-span-5 relative"
          >
            {/* Visual Container */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#145B52]/75 via-transparent to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-xs text-[#145B52] border border-[#145B52]/15 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span>{isBn ? 'উন্মুক্ত ও আন্তরিক সংলাপ' : 'Supportive Inquiries'}</span>
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
                    {isBn ? 'পরিবার ও আগ্রহী শুভাকাঙ্ক্ষীদের জন্য উন্মুক্ত' : 'Guiding families, visitors & prospective sponsors'}
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
