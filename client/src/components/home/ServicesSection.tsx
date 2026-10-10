'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  ServicesHeader,
  ServiceCard,
  ServicesFooterCTA,
  defaultServiceCategories,
  type ServicesSectionProps,
  type ServiceCategoryItem
} from './services';

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

export interface ExtendedServicesSectionProps extends ServicesSectionProps {
  categories?: ServiceCategoryItem[];
}

/**
 * Our Services Section
 * An elegant presentation of how the organization supports older adults:
 * - Centered header with subtitle and draft proposal alert
 * - 4 responsive service cards (4 desktop, 2 tablet, 1 mobile)
 * - View All Services action CTA with governance transparency disclaimer
 */
export const ServicesSection: React.FC<ExtendedServicesSectionProps> = ({
  categories = defaultServiceCategories,
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
      aria-label={locale === 'bn' ? 'আমাদের সেবাসমূহ' : 'How We Support Older Adults'}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Centered Section Header */}
      <ServicesHeader />

      {/* Responsive Grid: 4 Desktop, 2 Tablet, 1 Mobile */}
      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch"
      >
        {categories.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            <ServiceCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Services Button & Governance Notice */}
      <ServicesFooterCTA />
    </motion.section>
  );
};

// Re-export subcomponents and types for clean modular usage
export * from './services';
