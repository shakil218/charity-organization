'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  WhyChooseUsContent,
  WhyChooseUsImage,
  defaultBenefits,
  type WhyChooseUsSectionProps
} from './why-choose-us';

// Motion animation variants adhering to the project standard
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

/**
 * Why Choose Us Section
 * An elegant two-column layout presenting organizational principles:
 * - Left: "Care That Begins With Respect." heading, principled intro, and four benefits
 * - Right: authentic photograph of elder companionship with decorative teal & gold accents
 * - Fully responsive (1 col on mobile, 2 cols on tablet & desktop)
 */
export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  heading,
  introduction,
  imageSrc,
  className = ''
}) => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <section
      aria-label={locale === 'bn' ? 'কেন আমরা দায়বদ্ধ' : 'Care That Begins With Respect'}
      className={`relative py-12 sm:py-16 lg:py-20 bg-[#FAF8F2] overflow-hidden ${className}`}
    >
      {/* Ambient background accents matching design system */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-96 h-96 bg-[#276749]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#D6B56D]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Heading, Introduction & Four Benefits */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInLeft}
            className="md:col-span-7 lg:col-span-7"
          >
            <WhyChooseUsContent
              heading={heading}
              introduction={introduction}
              benefits={defaultBenefits}
            />
          </motion.div>

          {/* Right Column: Warm Authentic Photograph with Teal & Gold Accents */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInRight}
            className="md:col-span-5 lg:col-span-5"
          >
            <WhyChooseUsImage imageSrc={imageSrc} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Re-export subcomponents and types for clean modular consumption
export * from './why-choose-us';
