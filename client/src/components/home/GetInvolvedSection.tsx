'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  GetInvolvedHeader,
  GetInvolvedCard,
  GetInvolvedNotice,
  defaultGetInvolvedCards,
  type GetInvolvedSectionProps
} from './get-involved';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

/**
 * Get Involved Section for Sonavan Old Rehabilitation Center.
 * Features:
 * - Heading: "Together, We Can Make a Difference."
 * - Description: "Explore meaningful ways to support older adults and contribute to a caring community."
 * - 3 visually distinct cards:
 *   1. Donate — Support the organization's approved programs (/donate).
 *   2. Volunteer — Offer time, skills, or companionship through approved opportunities (/get-involved).
 *   3. Partner With Us — Explore community or organizational collaboration (/contact).
 * - Warm cream background, teal headings, forest-green accents, subtle gold details.
 * - Gentle hover animations and accessible focus states.
 * - Truthfulness assurance: does not claim tax deductibility or immediate specific vacancies.
 * - Full responsive layout (1 col mobile, 3 cols md/lg) and bilingual Bangla & English support.
 */
export const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({
  heading,
  description,
  cards = defaultGetInvolvedCards,
  onOpenDonateModal,
  className = ''
}) => {
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <motion.section
      id="get-involved-section"
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label="Together, We Can Make a Difference"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Centered Section Header */}
      <GetInvolvedHeader heading={heading} description={description} />

      {/* 3 Visually Distinct Cards Grid (1 col on mobile, 3 cols on md/lg) */}
      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            <GetInvolvedCard card={card} onOpenDonateModal={onOpenDonateModal} />
          </motion.div>
        ))}
      </motion.div>

      {/* Prudence & Transparency Compliance Notice */}
      <GetInvolvedNotice />
    </motion.section>
  );
};

// Re-export subcomponents, data, and types for clean external modular consumption
export * from './get-involved';
