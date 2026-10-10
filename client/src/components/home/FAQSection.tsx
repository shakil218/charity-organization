'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  FAQHeader,
  FAQItemAccordion,
  FAQCTA,
  defaultFAQs,
  type FAQSectionProps
} from './faq';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

/**
 * Frequently Asked Questions Section for Sonavan Old Rehabilitation Center.
 * Heading: "Questions? We're Here to Help."
 * Features:
 * - Accessible accordion containing 6 verified questions
 * - Clear expand/collapse chevron indicators
 * - Smooth height animations with reduced motion support
 * - Directs unknown visiting/inquiry details to the official Contact page
 * - Warm cream background, deep teal headings, subtle dividers
 * - Link to /faq ("View All FAQs")
 * - Full bilingual support (Bangla & English)
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  heading,
  subtitle,
  faqs = defaultFAQs,
  ctaText,
  ctaHref = '/faq',
  className = ''
}) => {
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  // Open first item by default for welcoming engagement, allows single toggle
  const [openItemId, setOpenItemId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      id="faq-section"
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label="Frequently Asked Questions"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Section Header */}
      <FAQHeader heading={heading} subtitle={subtitle} />

      {/* Accordion Container on Clean White/Cream Surface */}
      <div className="bg-white rounded-3xl border border-amber-200/80 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] p-3 sm:p-6 lg:p-8">
        <div className="divide-y divide-amber-200/80">
          {faqs.map((faq, index) => (
            <FAQItemAccordion
              key={faq.id}
              item={faq}
              index={index}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA & Direct Contact Prompt */}
      <FAQCTA ctaText={ctaText} ctaHref={ctaHref} />
    </motion.section>
  );
};

// Re-export subcomponents, data, and types
export * from './faq';
