'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  MissionHeader,
  PillarCard,
  CoreValuesCard,
  MissionGovernanceNote,
  missionPillar,
  visionPillar,
  coreValuesList,
  type MissionSectionProps
} from './mission';

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
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

/**
 * Mission, Vision & Core Values Section
 * Modular section composed of:
 * - MissionHeader (Centered eyebrow, heading, intro, and draft framework badge)
 * - PillarCard (Mission statement & key focus areas)
 * - PillarCard (Vision statement & strategic horizons)
 * - CoreValuesCard (6 Core Values grid with ValueItemChip)
 * - MissionGovernanceNote (Board ratification & ethical transparency note)
 */
export const MissionSection: React.FC<MissionSectionProps> = ({ className = '' }) => {
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
      aria-label={locale === 'bn' ? 'মিশন, ভিশন ও মূল্যবোধ' : 'Mission, Vision and Core Values'}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Centered Section Header & Introduction */}
      <MissionHeader />

      {/* Three Visually Balanced Cards */}
      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        {/* Card 1: Mission */}
        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="h-full">
          <PillarCard pillar={missionPillar} />
        </motion.div>

        {/* Card 2: Vision */}
        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="h-full">
          <PillarCard pillar={visionPillar} />
        </motion.div>

        {/* Card 3: Core Values */}
        <motion.div variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="h-full">
          <CoreValuesCard values={coreValuesList} />
        </motion.div>
      </motion.div>

      {/* Bottom Governance Note */}
      <MissionGovernanceNote />
    </motion.section>
  );
};

// Re-export subcomponents and types for clean modular consumption
export * from './mission';
