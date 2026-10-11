'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Images, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Lock 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutGalleryPreviewSectionProps } from './types';
import { DEFAULT_ABOUT_GALLERY_IMAGES } from './data';
import { GalleryImageCard } from './GalleryImageCard';
import { GalleryLightbox } from './GalleryLightbox';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

export const AboutGalleryPreviewSection: React.FC<AboutGalleryPreviewSectionProps> = ({
  id = 'gallery-preview',
  className = '',
  heading,
  subtitle,
  description,
  images = DEFAULT_ABOUT_GALLERY_IMAGES,
  galleryHref = '/gallery',
  showPrivacyNotice = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setActiveImageIndex(newIndex);
  };

  const featuredImage = images[0];
  const supportingImages = images.slice(1, 6);

  // Bilingual text fallbacks
  const sectionHeading = heading 
    ? (heading[locale] || heading.en) 
    : (isBn ? 'আমাদের প্রবীণ আবাসের খণ্ডচিত্র' : 'A Glimpse Into Our Community');

  const sectionSubtitle = subtitle 
    ? (subtitle[locale] || subtitle.en) 
    : (isBn ? 'শান্তিময় পরিবেশ ও প্রাত্যহিক মুহূর্ত' : 'SANCTUARY & DAILY ATMOSPHERE');

  const sectionDescription = description 
    ? (description[locale] || description.en) 
    : (isBn
        ? 'সবুজ প্রাঙ্গণ, আন্তরিক গল্পগুজব এবং শান্ত পরিবেশের এক ঝলক—যা প্রবীণদের মর্যাদা ও প্রশান্তিময় জীবনের প্রতিচ্ছবি।'
        : 'Explore peaceful spaces, gentle routines, and warm shared moments that reflect the dignity, companionship, and comfort of our community.');

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-14">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
              <Images className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'প্রশান্তির প্রাঙ্গণ' : 'Dignified Living'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {sectionHeading}
          </h2>

          {/* Descriptive Intro */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {sectionDescription}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* Polished Responsive Grid: 1 prominent featured image + smaller supporting images */}
        {/* Consistent md & lg design (3-column Bento grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerGrid}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4.5 sm:gap-5 md:gap-6 auto-rows-fr"
        >
          {/* Prominent Featured Image: Spans 2 cols & 2 rows on md/lg */}
          {featuredImage && (
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="sm:col-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 h-full"
            >
              <GalleryImageCard
                image={featuredImage}
                isFeatured={true}
                onClick={() => handleOpenLightbox(0)}
                className="h-full"
              />
            </motion.div>
          )}

          {/* Supporting Images: 1 col each */}
          {supportingImages.map((img, idx) => {
            const actualIndex = idx + 1;
            return (
              <motion.div
                key={img.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="col-span-1 h-full"
              >
                <GalleryImageCard
                  image={img}
                  isFeatured={false}
                  onClick={() => handleOpenLightbox(actualIndex)}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Bar: CTA & Privacy Dignity Charter Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)]"
        >
          {/* Dignity & Privacy Charter Notice */}
          {showPrivacyNotice && (
            <div className="flex items-start gap-3.5 max-w-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider">
                    {isBn ? 'প্রবীণদের মর্যাদা ও গোপনীয়তা রক্ষা' : 'Elder Dignity & Privacy Charter'}
                  </span>
                  <span className="inline-flex items-center shrink-0 whitespace-nowrap text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs">
                    {isBn ? 'সম্মতিমূলক' : 'Consent-Based'}
                  </span>
                </div>
                <p className={`text-xs text-[#242B29]/75 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                  {isBn
                    ? 'আবাসিক প্রবীণদের ব্যক্তিগত গোপনীয়তা ও আত্মমর্যাদার প্রতি পূর্ণ শ্রদ্ধা বজায় রেখে কেবল লিখিত অনুমতি সাপেক্ষে ছবি প্রকাশিত হয়। এখানে প্রদর্শিত চিত্রাবলী শান্ত পরিবেশের প্রতীকী রূপরেখা।'
                    : 'We honor resident dignity and personal privacy by publishing identifiable photography only with verified consent. Curated visuals represent tranquil illustrative atmospheres of our care philosophy.'}
                </p>
              </div>
            </div>
          )}

          {/* "View Full Gallery" Button & Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href={galleryHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#145B52] text-white font-bold text-sm shadow-md hover:bg-[#0E3E37] hover:shadow-lg transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D]"
            >
              <span>{isBn ? 'সম্পূর্ণ চিত্রশালা দেখুন' : 'View Full Gallery'}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/privacy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-transparent hover:bg-[#FAF8F2] text-[#145B52] text-xs font-semibold border border-[#145B52]/15 transition-colors text-center"
            >
              <Lock className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'গোপনীয়তা নীতিমালা' : 'Privacy Policy'}</span>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Keyboard Accessible Lightbox Modal */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
};
