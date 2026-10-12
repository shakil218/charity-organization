'use client';

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Eye,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  FacilitiesGallerySectionProps,
  FacilityGalleryCategory,
  FacilityGalleryItem
} from './types';
import {
  DEFAULT_FACILITY_GALLERY_IMAGES,
  FACILITY_GALLERY_CATEGORIES
} from './data';
import { FacilityGalleryFeaturedCard } from './FacilityGalleryFeaturedCard';
import { FacilityGalleryThumbCard } from './FacilityGalleryThumbCard';
import { FacilityGalleryLightbox } from './FacilityGalleryLightbox';

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
      delayChildren: 0.1
    }
  }
};

export const FacilitiesGallerySection: React.FC<FacilitiesGallerySectionProps> = ({
  id = 'facility-gallery',
  className = '',
  eyebrow,
  heading,
  subtitle,
  images = DEFAULT_FACILITY_GALLERY_IMAGES,
  showPrivacyNotice = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<FacilityGalleryCategory>('all');

  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  // Filtered image list based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return images;
    }
    return images.filter((img) => img.category === selectedCategory);
  }, [images, selectedCategory]);

  // Featured and secondary images determination
  const { featuredImage, supportingImages } = useMemo(() => {
    if (filteredImages.length === 0) {
      return { featuredImage: null, supportingImages: [] };
    }

    // Try finding the marked featured image in current filter, or pick the first one
    const featured = filteredImages.find((img) => img.isFeatured) || filteredImages[0];
    const supporting = filteredImages.filter((img) => img.id !== featured.id);

    return {
      featuredImage: featured,
      supportingImages: supporting
    };
  }, [filteredImages]);

  // Handle open lightbox
  const handleOpenLightbox = (image: FacilityGalleryItem) => {
    const indexInFiltered = filteredImages.findIndex((item) => item.id === image.id);
    setActiveLightboxIndex(indexInFiltered >= 0 ? indexInFiltered : 0);
    setIsLightboxOpen(true);
  };

  const handleOpenAllPhotos = () => {
    setActiveLightboxIndex(0);
    setIsLightboxOpen(true);
  };

  // Text values with fallbacks
  const sectionEyebrow = eyebrow
    ? eyebrow[locale] || eyebrow.en
    : isBn
    ? 'আমাদের ক্যাম্পাস পরিবেশ'
    : 'OUR ENVIRONMENT';

  const sectionHeading = heading
    ? heading[locale] || heading.en
    : isBn
    ? 'আমাদের ক্যাম্পাস পরিবেশ ঘুরে দেখুন'
    : 'Take a Closer Look';

  const sectionSubtitle = subtitle
    ? subtitle[locale] || subtitle.en
    : isBn
    ? 'সোনাভান পুনর্বাসন কেন্দ্রের বাস্তব পরিবেশ ও বিদ্যমান সুযোগ-সুবিধাসমূহের আলোকচিত্র।'
    : "Explore photographs of the center's actual environment and available facilities.";

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-20 transition-colors duration-300 ${className}`}
      aria-label={sectionHeading}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3.5"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            <span>{sectionEyebrow}</span>
          </div>

          {/* Heading */}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#145B52] tracking-tight ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionHeading}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-base md:text-lg text-[#276749]/90 max-w-2xl mx-auto leading-relaxed font-normal ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Filter Pills and View All Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#145B52]/10">
          {/* Category Filter Buttons */}
          <div
            role="tablist"
            aria-label={isBn ? 'ফটো ক্যাটাগরি ফিল্টার' : 'Photo Category Filters'}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin no-scrollbar"
          >
            {FACILITY_GALLERY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const label = cat.label[locale] || cat.label.en;
              const count =
                cat.id === 'all'
                  ? images.length
                  : images.filter((img) => img.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] ${
                    isSelected
                      ? 'bg-[#145B52] text-white shadow-sm ring-1 ring-[#D6B56D]/50'
                      : 'bg-white/80 hover:bg-white text-[#145B52] border border-[#145B52]/15 hover:border-[#145B52]/30'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? 'bg-[#D6B56D] text-[#145B52]'
                        : 'bg-[#145B52]/10 text-[#145B52]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* "View All Photos" Lightbox Trigger */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={handleOpenAllPhotos}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#145B52] hover:bg-[#0F423C] text-white shadow-xs hover:shadow-md border border-[#D6B56D]/40 transition-all duration-200 active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
            >
              <Eye className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'সবগুলো ছবি বড় করে দেখুন' : 'View All Photos in Lightbox'}</span>
            </button>
          </div>
        </div>

        {/* Gallery Content Area */}
        <div className="space-y-6 sm:space-y-8">
          {/* 1. Large Featured Photograph */}
          {featuredImage && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
            >
              <FacilityGalleryFeaturedCard
                image={featuredImage}
                locale={locale}
                onClick={() => handleOpenLightbox(featuredImage)}
              />
            </motion.div>
          )}

          {/* 2. Responsive Grid of Smaller Photographs (4 to 6 photographs) */}
          {supportingImages.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.08 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {supportingImages.map((image, idx) => (
                <motion.div key={image.id} variants={fadeInUp}>
                  <FacilityGalleryThumbCard
                    image={image}
                    locale={locale}
                    index={idx}
                    onClick={() => handleOpenLightbox(image)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* 3. Senior Dignity & Privacy Policy / Illustrative Notice Banner */}
        {showPrivacyNotice && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInUp}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#145B52]/15 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="p-2.5 rounded-xl bg-[#145B52]/10 text-[#145B52] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#276749]" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#145B52]">
                  {isBn
                    ? 'প্রবীণদের মর্যাদা, গোপনীয়তা ও সত্যনিষ্ঠ তথ্যরীতি'
                    : 'Senior Dignity, Resident Privacy & Factual Representation'}
                </h4>
                <p className="text-xs text-[#276749]/85 leading-relaxed">
                  {isBn
                    ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র প্রবীণদের সম্মান ও ব্যক্তিগত অধিকার রক্ষা করে। অনুমোদন ব্যতিরেকে কোনো প্রবীণ বাসিন্দার শনাক্তযোগ্য ছবি প্রকাশ করা হয় না। পরিবেশের ধারণাগত স্পষ্টতার স্বার্থে কিছু আলোকচিত্র প্রতীকী রূপরেখা হিসেবে চিহ্নিত করা হয়েছে।'
                    : 'Sonavan Old Rehabilitation Center strictly respects the privacy, autonomy, and dignity of older adults. Identifiable resident photographs are published only with informed consent. Illustrative environmental concepts are clearly labeled to maintain total transparency.'}
                </p>
              </div>
            </div>

            <button
              onClick={handleOpenAllPhotos}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0F423C] shrink-0 hover:underline"
            >
              <span>{isBn ? 'গ্যালারি ভিউয়ার খুলুন' : 'Open Full Gallery Lightbox'}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <FacilityGalleryLightbox
        isOpen={isLightboxOpen}
        images={filteredImages}
        currentIndex={activeLightboxIndex}
        locale={locale}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
};
