'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  ImpactHeader,
  ImpactCard,
  ImpactGovernanceNote,
  defaultImpactCards,
  type OurImpactSectionProps
} from './impact';

// Motion animation variants adhering to the project standard
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

/**
 * Our Impact Section
 * Presents qualitative impact commitments (and verified configurable metrics when available):
 * - Centered header with "Every Act of Care Matters." heading
 * - 4 responsive impact cards (dignity, connection, community support, accountability)
 * - Restrained icons, cream surfaces, deep teal highlights, and full bilingual support
 * - Governance transparency note
 */
export const OurImpactSection: React.FC<OurImpactSectionProps> = ({
  heading,
  description,
  cards = defaultImpactCards,
  className = ''
}) => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <motion.section
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label={locale === 'bn' ? 'আমাদের সেবার প্রভাব' : 'Every Act of Care Matters'}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Centered Section Header */}
      <ImpactHeader heading={heading} description={description} />

      {/* Responsive Grid: 4 Desktop, 2 Tablet, 1 Mobile */}
      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-4 xl:gap-7 items-stretch"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            <ImpactCard card={card} isInView={true} />
          </motion.div>
        ))}
      </motion.div>

      {/* Governance & Audit Transparency Note */}
      <ImpactGovernanceNote />
    </motion.section>
  );
};

// Re-export subcomponents and types for clean modular consumption
export * from './impact';
