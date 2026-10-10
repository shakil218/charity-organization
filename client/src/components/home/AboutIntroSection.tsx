'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  ArrowRight,
  Heart,
  Sparkles,
  type LucideIcon
} from 'lucide-react';

/**
 * Supporting point data structure.
 */
export interface SupportingPoint {
  id: string;
  icon: LucideIcon;
  title: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
}

/**
 * Props for the reusable AboutIntroSection component.
 */
export interface AboutIntroSectionProps {
  eyebrow?: {
    en: string;
    bn: string;
  };
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  supportingPoints?: SupportingPoint[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  mainImageSrc?: string;
  secondaryImageSrc?: string;
  className?: string;
}

// Default verified supporting points
const defaultSupportingPoints: SupportingPoint[] = [
  {
    id: 'respect-dignity',
    icon: ShieldCheck,
    title: {
      en: 'Respect and dignity',
      bn: 'শ্রদ্ধা ও মানবিক মর্যাদা'
    },
    description: {
      en: 'Honoring each resident’s life history, autonomy, and individuality through patient, courteous attention.',
      bn: 'প্রতিটি প্রবীণ সদস্যের স্বাতন্ত্র্য, জীবনের অভিজ্ঞতা ও অনুভূতির প্রতি সর্বোচ্চ সম্মান ও মনোযোগ প্রদর্শন।'
    }
  },
  {
    id: 'compassionate-support',
    icon: HeartHandshake,
    title: {
      en: 'Compassionate community support',
      bn: 'সহমর্মিতাপূর্ণ সামাজিক সহায়তা'
    },
    description: {
      en: 'Cultivating a warm environment supported by dedicated caregivers, volunteers, and collective kindness.',
      bn: 'নিবেদিতপ্রাণ সেবাকর্মী, সচেতন শুভানুধ্যায়ী ও সমাজের আন্তরিক ভালোবাসায় গড়ে তোলা নির্ভরতার জায়গা।'
    }
  },
  {
    id: 'inclusion-connection',
    icon: Users,
    title: {
      en: 'Inclusion and human connection',
      bn: 'সামাজিক অন্তর্ভুক্তি ও মানবিক সান্নিধ্য'
    },
    description: {
      en: 'Creating open communal spaces and daily intergenerational interactions that dispel loneliness.',
      bn: 'নিঃসঙ্গতা দূর করে প্রতিদিনের আন্তরিক আলাপচারিতা ও সান্নিধ্যের মাধ্যমে প্রাণের মেলবন্ধন গড়ে তোলা।'
    }
  }
];

// Motion animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
 * About Introduction Section
 * A responsive two-column layout introducing the organization's ethos, image composition,
 * value highlights, and primary discover CTA.
 */
export const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({
  eyebrow = {
    en: 'ABOUT OUR ORGANIZATION',
    bn: 'আমাদের সংস্থা সম্পর্কে'
  },
  heading = {
    en: 'A Place Where Every Elder Matters.',
    bn: 'যেখানে প্রতিটি প্রবীণের রয়েছে নিজস্ব মর্যাদা ও মূল্যায়ন।'
  },
  description = {
    en: 'Sonavan Old Rehabilitation Center aims to promote care, dignity, and community support for older adults. Learn more about the organization’s mission, values, and work.',
    bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) প্রবীণদের সুরক্ষা, মর্যাদা ও সামাজিক সহায়তা নিশ্চিত করতে অঙ্গীকারবদ্ধ। আমাদের প্রাতিষ্ঠানিক লক্ষ্য, মূল্যবোধ ও কার্যক্রম সম্পর্কে বিস্তারিত জানুন।'
  },
  supportingPoints = defaultSupportingPoints,
  ctaText = {
    en: 'Learn More About Us',
    bn: 'আমাদের সম্পর্কে বিস্তারিত জানুন'
  },
  ctaHref = '/about',
  mainImageSrc = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  secondaryImageSrc = 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=600',
  className = ''
}) => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <section
      aria-label={eyebrow[locale] || eyebrow.en}
      className={`relative py-12 sm:py-16 lg:py-20 bg-[#FAF8F2] overflow-hidden ${className}`}
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#276749]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-0 w-80 h-80 bg-[#D6B56D]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12 md:gap-8 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Image Composition */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInLeft}
            className="md:col-span-6 lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg md:max-w-none lg:max-w-none pr-3 sm:pr-6 pb-6 sm:pb-8">

              {/* Decorative Subtle Background Frame Glow */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#145B52]/10 via-[#D6B56D]/20 to-[#276749]/10 blur-xl pointer-events-none" />

              {/* Main Primary Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/35 shadow-xl bg-teal-950 aspect-[4/3] sm:aspect-[4/3]">
                <Image
                  src={mainImageSrc}
                  alt={locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের আন্তরিক সেবামূলক কার্যক্রম' : 'Compassionate senior care at Sonavan Old Rehabilitation Center'}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Secondary Overlapping Image */}
              {secondaryImageSrc && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-4 w-40 sm:w-56 md:w-48 lg:w-64 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-teal-900 z-10"
                >
                  <Image
                    src={secondaryImageSrc}
                    alt={locale === 'bn' ? 'প্রবীণ সদস্যদের মানবিক সাহচর্য ও পারস্পরিক আনন্দ' : 'Dignified companionship among senior residents'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, 256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              )}

              {/* Floating Dignity & Care Micro Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3.5 py-1.5 rounded-full bg-white/92 backdrop-blur-md border border-amber-200/80 shadow-md flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#145B52] fill-[#145B52]" />
                <span className="text-[11px] font-bold text-[#145B52] tracking-wide">
                  {locale === 'bn' ? 'মর্যাদাপূর্ণ প্রবীণ সেবা' : 'Dignified Senior Care'}
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative Copy & Values */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="md:col-span-6 lg:col-span-6 space-y-6 sm:space-y-7"
          >
            {/* Eyebrow Label */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
              <span>{eyebrow[locale] || eyebrow.en}</span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-4.5xl font-black text-[#145B52] tracking-tight leading-tight"
            >
              {heading[locale] || heading.en}
            </motion.h2>

            {/* Descriptive Paragraph */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal"
            >
              {description[locale] || description.en}
            </motion.p>

            {/* Supporting Points / Value Highlights */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-1 sm:pt-2">
              {supportingPoints.map((point) => {
                const IconComponent = point.icon;
                const pointTitle = point.title[locale] || point.title.en;
                const pointDesc = point.description?.[locale] || point.description?.en;

                return (
                  <div
                    key={point.id}
                    className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-teal-900/10 shadow-2xs hover:bg-white hover:border-[#145B52]/25 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#276749]/10 border border-[#276749]/20 flex items-center justify-center text-[#276749] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 text-[#276749]" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#145B52] leading-snug">
                        {pointTitle}
                      </h3>
                      {pointDesc && (
                        <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal">
                          {pointDesc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Primary Action CTA */}
            <motion.div variants={fadeInUp} className="pt-2 sm:pt-4">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#145B52] hover:bg-[#0E423B] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#145B52] focus:ring-offset-2"
              >
                <span>{ctaText[locale] || ctaText.en}</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
