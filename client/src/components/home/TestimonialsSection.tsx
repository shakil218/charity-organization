'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  TestimonialsHeader,
  ElderCommitmentCard,
  TestimonialCard,
  TestimonialsNotice,
  defaultElderCommitments,
  defaultApprovedTestimonials,
  type TestimonialsSectionProps
} from './testimonials';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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
 * Testimonials & Community Values Section for Sonavan Old Rehabilitation Center.
 * Features:
 * - Heading: "What Our Community Values"
 * - Dynamic Mode Handling:
 *   1. "Our Commitment to Every Elder" (Default): Renders 4 pillars (Dignity, Respect, Compassion, Inclusion)
 *      when verified public testimonials are not yet officially approved.
 *   2. "Approved Testimonials Mode": Automatically displays verified feedback from family members,
 *      volunteers, or community partners when testimonials array is provided.
 * - Soft cream surfaces, teal quotation marks, subtle gold accents, gentle hover animations.
 * - Avoids auto-rotating carousels; provides accessible, clean responsive layout.
 * - Full English and Bangla language support.
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  heading,
  subtitle,
  testimonials = defaultApprovedTestimonials,
  commitments = defaultElderCommitments,
  className = ''
}) => {
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <motion.section
      id="testimonials-section"
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label="What Our Community Values"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 ${className}`}
    >
      {/* Section Header */}
      <TestimonialsHeader
        heading={heading}
        subtitle={subtitle}
        isCommitmentMode={!hasTestimonials}
      />

      {/* Main Grid: Either Approved Testimonials or 4 Commitment Pillars */}
      {hasTestimonials ? (
        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-4.5 xl:gap-6 items-stretch"
        >
          {commitments.map((commitment) => (
            <motion.div
              key={commitment.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ElderCommitmentCard commitment={commitment} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Ethical Integrity & Privacy Policy Reassurance */}
      <TestimonialsNotice />
    </motion.section>
  );
};

// Re-export subcomponents, data, and types for modular consumption
export * from './testimonials';
