'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  GalleryHeader,
  GalleryImageCard,
  GalleryLightboxModal,
  GalleryCTA,
  defaultGalleryImages,
  type PhotoGallerySectionProps
} from './gallery';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

/**
 * Photo Gallery Preview Section for Sonavan Old Rehabilitation Center.
 * Heading: "A Glimpse Into Our Community"
 * Features:
 * - 6 images in a polished responsive grid:
 *   - 1 featured large image (spans 2 cols, 2 rows on md/lg)
 *   - 5 supporting images with consistent aspect ratios and spacing
 * - Rounded corners and restrained hover zoom effects
 * - Short captions and category tags
 * - Interactive keyboard-accessible lightbox modal
 * - "View Full Gallery" CTA button linking to /gallery
 * - Ethical privacy notice safeguarding resident identity
 * - Full Bangla and English support
 */
export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  heading,
  subtitle,
  ctaText,
  ctaHref = '/gallery',
  images = defaultGalleryImages,
  className = ''
}) => {
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

  const featuredImage = images[0];
  const supportingImages = images.slice(1, 6);

  return (
    <motion.section
      id="photo-gallery-section"
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label="A Glimpse Into Our Community"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Section Header */}
      <GalleryHeader heading={heading} subtitle={subtitle} />

      {/* 6 Images Responsive Grid (1 Featured Large + 5 Supporting) */}
      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4.5 sm:gap-5 lg:gap-6 auto-rows-fr"
      >
        {/* 1. Featured Large Image: Spans 2 cols & 2 rows on tablet/desktop */}
        {featuredImage && (
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="sm:col-span-2 md:col-span-2 md:row-span-2 h-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px]"
          >
            <GalleryImageCard
              image={featuredImage}
              isFeatured={true}
              onClick={() => handleOpenViewer(0)}
              className="h-full"
            />
          </motion.div>
        )}

        {/* 2. Supporting Images (5 photos completing the 3x3 magazine layout) */}
        {supportingImages.map((img, idx) => {
          const actualIndex = idx + 1;
          return (
            <motion.div
              key={img.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="col-span-1 h-full min-h-[220px] sm:min-h-[240px]"
            >
              <GalleryImageCard
                image={img}
                isFeatured={false}
                onClick={() => handleOpenViewer(actualIndex)}
                className="h-full"
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA & Privacy Policy Disclaimer */}
      <GalleryCTA ctaText={ctaText} ctaHref={ctaHref} />

      {/* Keyboard-Accessible Modal Lightbox */}
      <GalleryLightboxModal
        isOpen={isViewerOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={handleCloseViewer}
        onNavigate={handleNavigateViewer}
      />
    </motion.section>
  );
};

// Re-export subcomponents, data, and types
export * from './gallery';
