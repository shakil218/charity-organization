'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, ShieldCheck, ArrowRight, PhoneCall, HelpCircle } from 'lucide-react';
import { FacilitiesAmenitiesSectionProps, FacilityAmenityItem } from './types';
import { DEFAULT_FACILITIES_AMENITIES, DEFAULT_FACILITIES_AMENITIES_HEADER } from './data';
import { FacilityCard } from './FacilityCard';
import { FacilityPhotoModal } from './FacilityPhotoModal';

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
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};

export const FacilitiesAmenitiesSection: React.FC<FacilitiesAmenitiesSectionProps> = ({
  id = 'facilities-list',
  className = '',
  eyebrow = DEFAULT_FACILITIES_AMENITIES_HEADER.eyebrow,
  heading = DEFAULT_FACILITIES_AMENITIES_HEADER.heading,
  subtitle = DEFAULT_FACILITIES_AMENITIES_HEADER.subtitle,
  facilities = DEFAULT_FACILITIES_AMENITIES,
  showVerificationNotice = true
}) => {
  const { locale } = useLanguage();
  const [selectedFacility, setSelectedFacility] = useState<FacilityAmenityItem | null>(null);

  // Strict verification filter: omit any card where information is missing or isVerified === false
  const verifiedFacilities = facilities.filter(
    (facility) =>
      facility &&
      facility.isVerified !== false &&
      Boolean(facility.name?.en && facility.name?.bn) &&
      Boolean(facility.description?.en && facility.description?.bn)
  );

  const eyebrowText = eyebrow[locale] || eyebrow.en;
  const headingText = heading[locale] || heading.en;
  const subtitleText = subtitle[locale] || subtitle.en;

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 bg-[#FAF8F2] border-t border-b border-teal-900/10 scroll-mt-20 ${className}`}
      aria-labelledby="facilities-amenities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/15 text-[#145B52] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" />
            <span>{eyebrowText}</span>
          </div>

          <h2
            id="facilities-amenities-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#145B52] tracking-tight"
          >
            {headingText}
          </h2>

          <p className="text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal">
            {subtitleText}
          </p>
        </motion.div>

        {/* 6 Facilities Cards Responsive Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        {verifiedFacilities.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {verifiedFacilities.map((facility) => (
              <motion.div key={facility.id} variants={fadeInUp}>
                <FacilityCard
                  facility={facility}
                  locale={locale}
                  onViewPhoto={(item) => setSelectedFacility(item)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-teal-900/10 text-center max-w-lg mx-auto space-y-3">
            <HelpCircle className="w-10 h-10 text-[#145B52] mx-auto opacity-40" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? 'সুবিধাসমূহ যাচাইকরণ প্রক্রিয়াধীন' : 'Facility Verification in Progress'}
            </h3>
            <p className="text-sm text-[#242B29]/70">
              {locale === 'bn'
                ? 'বর্তমানে আমাদের ক্যাম্পাসের তথ্যাদি যাচাইকরণ সাপেক্ষে আপডেট করা হচ্ছে। তথ্যের জন্য সরাসরি যোগাযোগ করুন।'
                : 'Facility details are currently being updated in alignment with verified on-site arrangements.'}
            </p>
          </div>
        )}

        {/* Accuracy and Transparency Notice */}
        {showVerificationNotice && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInUp}
            className="mt-12 p-5 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-teal-900/10 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="p-2.5 rounded-2xl bg-[#145B52]/10 text-[#145B52] flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#145B52]" />
            </div>
            <div className="flex-1 space-y-1 text-xs sm:text-sm text-[#242B29]/80 leading-relaxed">
              <strong className="font-semibold text-[#145B52] block">
                {locale === 'bn'
                  ? 'তথ্যের স্বচ্ছতা ও দায়িত্বশীল পরিবেশনা'
                  : 'Transparency & Verified Care Principle'}
              </strong>
              <p>
                {DEFAULT_FACILITIES_AMENITIES_HEADER.disclaimerNote[locale] ||
                  DEFAULT_FACILITIES_AMENITIES_HEADER.disclaimerNote.en}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#145B52] hover:bg-[#0f443d] text-white text-xs font-semibold transition-colors flex-shrink-0"
            >
              <span>{locale === 'bn' ? 'যোগাযোগ করুন' : 'Contact Office'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        )}

        {/* Bottom Campus Inquiry Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#145B52] to-[#0c3933] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 rounded-full bg-[#D6B56D]/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 flex-1 min-w-0 max-w-2xl lg:pr-6">
              <span className="text-xs uppercase tracking-wider text-[#D6B56D] font-bold">
                {locale === 'bn' ? 'ক্যাম্পাস পরিদর্শন ও অনুসন্ধান' : 'Campus Visits & Inquiries'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {locale === 'bn'
                  ? 'সুবিধাসমূহ সশরীরে দেখতে চান অথবা বিস্তারিত জানতে চান?'
                  : 'Wish to Visit Our Campus or Inquire About Accommodations?'}
              </h3>
              <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal">
                {locale === 'bn'
                  ? 'গাজীপুর সদর ক্যাম্পাসে আমাদের কর্মকর্তাদের সাথে কথা বলুন এবং প্রবীণদের সেবার পরিবেশ ও সার্বিক বন্দোবস্ত সম্পর্কে জেনে নিন।'
                  : 'Speak with our administration team at Gazipur Sadar campus to learn about current arrangements, visiting hours, and inquiry steps.'}
              </p>
            </div>

            <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 shrink-0 flex-nowrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#D6B56D] hover:bg-[#c4a45a] text-teal-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] shrink-0 whitespace-nowrap"
              >
                <span>{locale === 'bn' ? 'অনুরোধ পাঠান' : 'Submit an Inquiry'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-colors shrink-0 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#D6B56D] shrink-0" />
                <span>+880 1700-000000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Photo Lightbox Modal */}
      <FacilityPhotoModal
        facility={selectedFacility}
        isOpen={Boolean(selectedFacility)}
        locale={locale}
        onClose={() => setSelectedFacility(null)}
      />
    </section>
  );
};
