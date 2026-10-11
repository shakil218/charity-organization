'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { OurStoryHistorySectionProps } from './types';
import { StoryHeader } from './StoryHeader';
import { Timeline } from './Timeline';
import { StoryClosing } from './StoryClosing';
import { verifiedOrganizationalMilestones } from './data';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

/**
 * Our Story & History Section for the About Us page of Sonavan Old Rehabilitation Center.
 *
 * Adheres strictly to institutional requirements:
 * 1. Introduction to the organization's journey (StoryHeader).
 * 2. Timeline with date, milestone title, description, and optional photograph (Timeline).
 * 3. Important developments and organizational milestones.
 * 4. Closing paragraph about the organization's continuing purpose (StoryClosing).
 *
 * Truthfulness adherence:
 * - If historical information is not supplied/verified, displays the elegant placeholder:
 *   "Our story is being documented. Please check back for updates."
 * - Never invents founding years, founders, historical events, awards, or beneficiary numbers.
 * - Fully bilingual (Bangla & English).
 * - Responsive: Vertical timeline on mobile, centered alternating timeline on desktop/tablet.
 */
export const OurStoryHistorySection: React.FC<OurStoryHistorySectionProps> = ({
  id = 'our-story-history',
  className = '',
  milestones = verifiedOrganizationalMilestones,
  isDocumenting = true,
}) => {
  return (
    <section
      id={id}
      aria-label="Our Story and Organizational History"
      className={`relative w-full py-14 sm:py-16 md:py-20 lg:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Decorative Ambient Background Soft Glows */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#D6B56D]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#145B52]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20"
      >
        {/* Section 1: Introduction to Organization's Journey */}
        <StoryHeader />

        {/* Section 2 & 3: Timeline or Verified Archival Placeholder */}
        <Timeline 
          milestones={milestones} 
          isDocumenting={isDocumenting} 
        />

        {/* Section 4: Closing Paragraph on Continuing Purpose */}
        <StoryClosing />
      </motion.div>
    </section>
  );
};
