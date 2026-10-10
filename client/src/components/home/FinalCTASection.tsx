'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { FinalCTAContent, FinalCTAMedia, FinalCTASectionProps } from './final-cta';

export * from './final-cta';

const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeInRightSlow: Variants = {
  hidden: { opacity: 0, x: 90 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } }
};

/**
 * Final Call to Action Section for Sonavan Old Rehabilitation Center.
 *
 * Design Specifications:
 * - Full-width deep teal background (#145B52).
 * - White heading ("Let's Build a More Caring Community." / "আসুন, গড়ে তুলি আরও যত্নশীল একটি সমাজ।")
 * - Supporting text ("Your time, kindness, and support can help promote dignity and belonging for older adults.")
 * - Soft gold accents (#D6B56D) for high-contrast accessibility & brand alignment.
 * - Primary CTA: "Get Involved" -> /get-involved
 * - Secondary CTA: "Contact Us" -> /contact
 * - Rounded buttons with generous padding and focus rings.
 * - Authentic community photograph preview with subtle ambient decorative lighting.
 * - Fully responsive, accessible, and free of unsupported outcome claims.
 */
export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  heading,
  description,
  primaryCtaText,
  primaryCtaHref = '/get-involved',
  secondaryCtaText,
  secondaryCtaHref = '/contact',
  onOpenDonateModal,
  className = ''
}) => {
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <section
      aria-label="Final Call to Action"
      className={`w-full relative overflow-hidden bg-[#145B52] text-white py-16 sm:py-20 lg:py-24 border-t border-[#D6B56D]/20 shadow-[0_-4px_24px_rgba(20,91,82,0.15)] ${className}`}
    >
      {/* Background Decorative Ambient Shapes */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D6B56D]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#276749]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#FAF8F2]/5 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#D6B56D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-16 items-center">
          {/* Left Column: Heading, Description, CTA Buttons (Animates from below very slowly) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUpSlow}
            className="md:col-span-7 lg:col-span-7"
          >
            <FinalCTAContent
              heading={heading}
              description={description}
              primaryCtaText={primaryCtaText}
              primaryCtaHref={primaryCtaHref}
              secondaryCtaText={secondaryCtaText}
              secondaryCtaHref={secondaryCtaHref}
              onOpenDonateModal={onOpenDonateModal}
            />
          </motion.div>

          {/* Right Column: Authentic Community Visual & Accents (Animates from right side very slowly) */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInRightSlow}
            className="md:col-span-5 lg:col-span-5"
          >
            <FinalCTAMedia />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
