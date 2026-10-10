'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  StoriesHeader,
  StoryArticleCard,
  StoriesEmptyState,
  StoriesCTA,
  defaultStoriesArticles,
  type StoriesSectionProps
} from './stories';

// Framer motion variants matching the site-wide standard
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
 * Stories & News Preview Section for Sonavan Old Rehabilitation Center Homepage.
 * Features:
 * - Heading: "Stories From Our Community"
 * - Subtitle: "Stay connected with organizational news, activities, announcements, and community initiatives."
 * - Displays 3 article cards with cover image, category label, publication date, title, summary, and "Read Story" link
 * - View All Stories button linking to `/stories`
 * - Clean empty state when articles are absent
 * - Clear demo/sample disclosure to prevent fabricated claims
 * - Semantic HTML, accessible links, responsive layout, full Bangla & English support
 */
export const StoriesSection: React.FC<StoriesSectionProps> = ({
  heading,
  subtitle,
  articles = defaultStoriesArticles,
  showEmptyStateIfNoArticles = true,
  className = ''
}) => {
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  const displayArticles = articles.slice(0, 3);
  const hasArticles = displayArticles.length > 0;

  return (
    <motion.section
      id="stories-section"
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={fadeInUp}
      aria-label="Stories & Community News"
      className={`bg-[#FAF8F2] py-14 sm:py-18 border-y border-amber-200/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <StoriesHeader heading={heading} subtitle={subtitle} />

        {/* Content: Either 3 Article Cards Grid or Clean Empty State */}
        {!hasArticles && showEmptyStateIfNoArticles ? (
          <StoriesEmptyState />
        ) : (
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-5 lg:gap-7 items-stretch"
          >
            {displayArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <StoryArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom CTA & Editorial Accuracy Notice */}
        <StoriesCTA />
      </div>
    </motion.section>
  );
};

// Re-export subcomponents, data, and types for external modular consumption
export * from './stories';
