'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  HeartHandshake,
  Sparkles,
  Users,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';

/**
 * Configurable metric structure for verified organizational data.
 * Used only when verified figures become available in the future.
 */
export interface HighlightMetric {
  value: string;
  label: {
    en: string;
    bn: string;
  };
}

/**
 * TypeScript data model for individual Trust & Impact highlight items.
 */
export interface TrustHighlightItem {
  id: string;
  icon: LucideIcon;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  /**
   * Optional verified statistic (e.g., "100%", "24/7").
   * Strict constraint: Remains undefined by default to prevent displaying invented figures.
   */
  verifiedMetric?: HighlightMetric;
  accentBadge?: {
    en: string;
    bn: string;
  };
}

/**
 * Default verified-ready data configuration.
 * Strictly adheres to qualitative principles without fabricated numbers.
 */
export const defaultTrustHighlights: TrustHighlightItem[] = [
  {
    id: 'compassionate-support',
    icon: HeartHandshake,
    title: {
      en: 'Compassionate Support',
      bn: 'সহমর্মিতাপূর্ণ সহায়তা'
    },
    description: {
      en: 'Providing attentive personal assistance, continuous emotional comfort, and day-to-day healthcare for every resident.',
      bn: 'প্রতিটি প্রবীণ বাসিন্দার জন্য নিবেদিত যত্ন, মানসিক সাহচর্য ও সার্বক্ষণিক স্বাস্থ্যসেবা নিশ্চিতকরণ।'
    },
    accentBadge: {
      en: 'Dedicated Care',
      bn: 'নিবেদিত যত্ন'
    }
  },
  {
    id: 'respect-for-elders',
    icon: Sparkles,
    title: {
      en: 'Respect for Older Adults',
      bn: 'প্রবীণদের প্রতি শ্রদ্ধা'
    },
    description: {
      en: 'Honoring our elders’ life journeys through dignified living spaces, attentive listening, and heartfelt individual care.',
      bn: 'মর্যাদাপূর্ণ আবাসন, আন্তরিক মনোযোগ ও শ্রদ্ধাশীল ব্যবহারের মাধ্যমে প্রবীণদের দীর্ঘ জীবনের অবদানকে সম্মান প্রদর্শন।'
    },
    accentBadge: {
      en: 'Dignity First',
      bn: 'মর্যাদাপূর্ণ জীবন'
    }
  },
  {
    id: 'community-participation',
    icon: Users,
    title: {
      en: 'Community Participation',
      bn: 'সামাজিক সম্পৃক্ততা'
    },
    description: {
      en: 'Welcoming volunteers, intergenerational family visits, and shared cultural activities that keep seniors socially engaged.',
      bn: 'স্বেচ্ছাসেবক, পারিবারিক সাক্ষাৎ ও সামাজিক আয়োজনের মাধ্যমে প্রবীণদের সমাজের সাথে মেলবন্ধন বজায় রাখা।'
    },
    accentBadge: {
      en: 'Social Bonding',
      bn: 'সামাজিক মেলবন্ধন'
    }
  },
  {
    id: 'transparent-service',
    icon: ShieldCheck,
    title: {
      en: 'Transparent Service',
      bn: 'স্বচ্ছ ও দায়বদ্ধ সেবা'
    },
    description: {
      en: 'Practicing open accountability with public expense reporting, clear care guidelines, and verified community oversight.',
      bn: 'উন্মুক্ত ব্যয় বিবরণী, সুনির্দিষ্ট সেবামূলক রূপরেখা ও সর্বসাধারণের আস্থায় পরিচালিত দায়বদ্ধ কার্যক্রম।'
    },
    accentBadge: {
      en: 'Accountability',
      bn: 'উন্মুক্ত দায়বদ্ধতা'
    }
  }
];

// Motion animation variants adhering to the project's design system
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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
 * Reusable Card Component for Trust & Impact Highlight.
 */
export interface TrustHighlightCardProps {
  item: TrustHighlightItem;
  locale: 'en' | 'bn';
}

export const TrustHighlightCard: React.FC<TrustHighlightCardProps> = ({ item, locale }) => {
  const IconComponent = item.icon;
  const title = item.title[locale] || item.title.en;
  const description = item.description[locale] || item.description.en;
  const badge = item.accentBadge?.[locale] || item.accentBadge?.en;
  const metric = item.verifiedMetric;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between h-full bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-teal-900/10 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/35 transition-all duration-300"
    >
      {/* Top Subtle Amber-Gold Accent Edge on Hover */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D6B56D]/0 to-transparent group-hover:via-[#D6B56D]/80 transition-all duration-300 rounded-full" />

      <div className="space-y-4 sm:space-y-5">
        {/* Header: Icon & Category Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] group-hover:scale-105 transition-all duration-300 shadow-2xs">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {badge && (
            <span className="text-[10px] sm:text-[11px] font-bold text-[#276749] bg-[#276749]/8 px-2.5 py-1 rounded-full border border-[#276749]/15 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        {/* Content: Title & One-Sentence Explanation */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Optional Verified Organizational Metric (Configurable Display) */}
      {metric && (
        <div className="mt-5 pt-3.5 border-t border-teal-900/10 flex items-baseline justify-between">
          <span className="text-xs text-[#242B29]/70 font-medium">
            {metric.label[locale] || metric.label.en}
          </span>
          <span className="text-base font-black text-[#145B52]">
            {metric.value}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export interface TrustHighlightsSectionProps {
  highlights?: TrustHighlightItem[];
  className?: string;
}

/**
 * Trust & Impact Highlights Section
 * Compact section displayed immediately below the Hero.
 */
export const TrustHighlightsSection: React.FC<TrustHighlightsSectionProps> = ({
  highlights = defaultTrustHighlights,
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
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      aria-label={locale === 'bn' ? 'আস্থা ও সেবামূলক অঙ্গীকার' : 'Trust and Care Highlights'}
      className={`relative py-6 sm:py-8 lg:py-10 bg-[#FAF8F2] border-b border-amber-200/50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Eyebrow Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 sm:pb-7">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#145B52]" />
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#145B52]">
              {locale === 'bn'
                ? 'আস্থা ও সেবার মূল অঙ্গীকার'
                : 'Trust & Impact Highlights'}
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs text-[#242B29]/60 font-medium">
            {locale === 'bn'
              ? 'মর্যাদাপূর্ণ প্রবীণ কল্যাণে আমাদের চার মূল স্তম্ভ'
              : 'Our core pillars for dignified senior rehabilitation'}
          </span>
        </div>

        {/* Responsive Grid of 4 Highlights */}
        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {highlights.map((item) => (
            <TrustHighlightCard
              key={item.id}
              item={item}
              locale={locale}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
