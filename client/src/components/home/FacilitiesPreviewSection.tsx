'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  FacilitiesHeader,
  FacilitiesGrid,
  FacilitiesImageViewerModal,
  FacilitiesCTA,
  defaultFacilityImages,
  type FacilitiesSectionProps,
  type FacilityImageItem
} from './facilities';

// Motion animation variants adhering to the project standard
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export interface ExtendedFacilitiesSectionProps extends FacilitiesSectionProps {
  images?: FacilityImageItem[];
}

/**
 * Facilities Preview Section (Explore Our Environment)
 * An editorial photography presentation of the organization's planned environment:
 * - Centered header with heading and description
 * - 1 large featured image and 3 smaller images with captions
 * - Keyboard-accessible modal image lightbox
 * - "View All Photos" CTA button linking to /facilities with ethical transparency disclaimer
 */
export const FacilitiesPreviewSection: React.FC<ExtendedFacilitiesSectionProps> = ({
  heading,
  description,
  ctaText,
  ctaHref = '/facilities',
  images = defaultFacilityImages,
  className = ''
}) => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  // Lightbox modal state
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenViewer = (index: number) => {
    setActiveImageIndex(index);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const handleNavigateViewer = (newIndex: number) => {
    setActiveImageIndex(newIndex);
  };

  return (
    <motion.section
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label={locale === 'bn' ? 'আমাদের সেবামূলক পরিবেশ' : 'Explore Our Environment'}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Centered Section Header */}
      <FacilitiesHeader heading={heading} description={description} />

      {/* Responsive Editorial Image Grid */}
      <FacilitiesGrid images={images} onImageClick={handleOpenViewer} />

      {/* "View All Photos" CTA & Transparency Note */}
      <FacilitiesCTA ctaText={ctaText} ctaHref={ctaHref} />

      {/* Keyboard-Accessible Lightbox Modal */}
      <FacilitiesImageViewerModal
        isOpen={isViewerOpen}
        currentIndex={activeImageIndex}
        images={images}
        onClose={handleCloseViewer}
        onNavigate={handleNavigateViewer}
      />
    </motion.section>
  );
};

// Re-export subcomponents and types for modular consumption
export * from './facilities';
