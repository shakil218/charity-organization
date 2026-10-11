'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Quote, 
  ShieldAlert, 
  Heart, 
  Users, 
  Sun,
  Info 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutVisionSectionProps } from './types';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInLeftPhoto: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.97 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  }
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
 * Our Vision Section for Sonavan Old Rehabilitation Center About Us page.
 *
 * Requirements:
 * - Cream background (#FAF8F2 / #F2ECE0), deep teal typography (#145B52), and soft-gold accents (#D6B56D)
 * - Two-column responsive layout (photo on left, vision statement & explanation on right)
 * - Large, readable heading "Our Vision"
 * - Proposed vision statement: "A society where every older adult is valued, respected, included, and able to experience dignity and belonging."
 * - Concise explanatory paragraph in accessible language
 * - Proposed copy compliance note (never presenting aspirational goals as proven outcomes)
 * - Full bilingual support (Bangla & English)
 */
export const AboutVisionSection: React.FC<AboutVisionSectionProps> = ({
  id = 'our-vision',
  className = '',
  visionStatement = {
    en: 'A society where every older adult is valued, respected, included, and able to experience dignity and belonging.',
    bn: 'এমন একটি সমাজ বিনির্মাণ, যেখানে প্রতিটি প্রবীণ মানুষ হবেন মূল্যায়িত, শ্রদ্ধেয়, অন্তর্ভুক্ত এবং মর্যাদা ও আপনত্বের অনুভূতিতে সুরক্ষিত।'
  },
  explanatoryParagraph = {
    en: 'We envision an inclusive community where aging is embraced as a natural, honored chapter of life—where older individuals thrive free from isolation, surrounded by active compassion, generational bridge-building, and enduring social respect.',
    bn: 'আমাদের স্বপ্ন এমন একটি সহানুভূতিশীল সমাজ, যেখানে বার্ধক্যকে জীবনের স্বাভাবিক ও সম্মানিত অধ্যায় হিসেবে গ্রহণ করা হয়। প্রবীণরা থাকবেন একাকীত্বহীন, সক্রিয় সহমর্মিতা ও নতুন প্রজন্মের শ্রদ্ধাশীল ভালোবাসায় পরিবেষ্টিত।'
  },
  imageSrc = 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000',
  imageAlt = {
    en: 'Seniors engaging in peaceful, dignified conversation and social belonging',
    bn: 'শান্তিময় ও আনন্দঘন পরিবেশে প্রবীণদের পারস্পরিক মেলবন্ধন ও সামাজিক অন্তর্ভুক্তির মুহূর্ত'
  },
  isDraftPendingApproval = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const visionText = visionStatement[locale] || visionStatement.en;
  const explainText = explanatoryParagraph[locale] || explanatoryParagraph.en;
  const imageAltText = imageAlt[locale] || imageAlt.en;

  const aspirationalPillars = [
    {
      icon: Heart,
      title: isBn ? 'মর্যাদা ও আত্মসম্মান' : 'Dignity & Inherent Worth',
      desc: isBn ? 'প্রতিটি মানুষের জীবনের মূল্যবান অবদানকে চিরস্মরণীয় রাখা।' : 'Recognizing the lifetime of wisdom and worth in every elder.'
    },
    {
      icon: Users,
      title: isBn ? 'সামাজিক অন্তর্ভুক্তি' : 'Social Inclusion',
      desc: isBn ? 'একাকীত্ব দূর করে পারিবারিক ও সামাজিক ভালোবাসায় একাত্ম করা।' : 'Fostering intergenerational companionship free from isolation.'
    },
    {
      icon: Sun,
      title: isBn ? 'আশাবাদী ভবিষ্যৎ' : 'Hopeful Community',
      desc: isBn ? 'প্রবীণদের জন্য নিরাপদ, উষ্ণ ও শ্রদ্ধাশীল পৃথিবীর স্বপ্ন।' : 'Aspiring toward a compassionate, safe society for all generations.'
    }
  ];

  return (
    <section
      id={id}
      aria-label="Our Vision"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Subtle Abstract Decorative Background Glows */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D6B56D]/12 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#145B52]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 lg:gap-16 items-center">

          {/* Left Column: Warm Photograph with Abstract Accent Halo (5 Columns on md/lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInLeftPhoto}
            className="md:col-span-5 relative order-2 md:order-1"
          >
            {/* Ambient Soft-Gold Halo */}
            <div 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D6B56D]/25 via-[#145B52]/15 to-transparent blur-md pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#145B52]/20 bg-white shadow-2xl group">
              <div className="relative w-full aspect-4/5 sm:aspect-1/1 md:aspect-4/5 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAltText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle Vignette */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0E423B]/75 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Floating Aspirational Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/90 backdrop-blur-md border border-[#D6B56D]/50 text-white text-xs font-bold shadow-lg">
                  <Compass className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'দীর্ঘমেয়াদী স্বপ্ন' : 'Long-term Aspiration'}
                  </span>
                </div>

                {/* Ethical Photo Disclaimer Notice */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E423B]/90 backdrop-blur-md border border-white/15 text-white/80 text-[10px] sm:text-[11px] font-medium leading-tight">
                    <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                    <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                      {isBn 
                        ? 'প্রতীকী চিত্র • প্রবীণদের শান্তিময় ভবিষ্যৎ ও অন্তর্ভুক্তির স্বপ্ন' 
                        : 'Illustrative photography • Depicting a hopeful, inclusive future'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative Subtle Geometry Accent in corner */}
            <div 
              className="hidden lg:block absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl border-2 border-dashed border-[#D6B56D]/40 pointer-events-none -z-10" 
              aria-hidden="true" 
            />
          </motion.div>

          {/* Right Column: Heading, Vision Statement & Explanatory Paragraph (7 Columns on md/lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-7 order-1 md:order-2"
          >
            {/* Eyebrow & Proposed Draft Badge */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'আমাদের ভিশন ও দূরদৃষ্টি' : 'OUR VISION'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              </div>

              {isDraftPendingApproval && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'প্রস্তাবিত খসড়া • সাংগঠনিক অনুমোদন সাপেক্ষে' : 'Proposed Draft Pending Approval'}
                  </span>
                </span>
              )}
            </motion.div>

            {/* Section Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'আমাদের ভিশন' : 'Our Vision'}
              </h2>
              <p className={`text-xs sm:text-sm font-bold text-[#276749] tracking-wide uppercase ${isBn ? 'font-[family-name:var(--font-inter)]' : 'font-[family-name:var(--font-hind-siliguri)]'}`}>
                {isBn ? 'Sonavan Old Rehabilitation Center (SORC)' : 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র'}
              </p>
            </motion.div>

            {/* Prominent Vision Statement in Cream Elevation Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-6 sm:p-7 md:p-8 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.08)] space-y-4"
            >
              {/* Soft Gold Quotation Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0">
                <Quote className="w-6 h-6 text-[#145B52]" aria-hidden="true" />
              </div>

              {/* Large Vision Statement */}
              <blockquote className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#145B52] leading-snug tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                &ldquo;{visionText}&rdquo;
              </blockquote>

              {/* Gold Divider Line */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-[#D6B56D] to-transparent rounded-full" aria-hidden="true" />

              {/* Concise Explanatory Paragraph in Accessible Language */}
              <p className={`text-sm sm:text-base text-[#242B29]/85 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {explainText}
              </p>
            </motion.div>

            {/* 3 Aspirational Pillars */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1"
            >
              {aspirationalPillars.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl bg-[#F2ECE0]/70 border border-[#145B52]/10 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-[#145B52] shrink-0" aria-hidden="true" />
                      <h3 className={`text-xs font-bold text-[#145B52] truncate ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-[11px] text-[#242B29]/75 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Compliance & Prudence Footnote */}
            <motion.div 
              variants={fadeInUp}
              className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#D6B56D]/40 flex items-start gap-3 text-xs text-[#242B29]/75"
            >
              <ShieldAlert className="w-4 h-4 text-[#276749] shrink-0 mt-0.5" aria-hidden="true" />
              <p className={`leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn
                  ? 'এই বিবৃতিটি একটি প্রস্তাবিত ভিশন খসড়া যা পরিচালনা পর্ষদের অনুমোদনের অপেক্ষায় রয়েছে। এটি আমাদের দীর্ঘমেয়াদী আদর্শিক লক্ষ্য প্রকাশ করে, কোনো সম্পন্ন ফলাফল বা নিশ্চিত পরিসংখ্যান হিসেবে নির্দেশিত নয়।'
                  : 'This statement represents proposed aspirational copy currently undergoing institutional review. It articulates our community vision and is not presented as completed statistical outcomes.'}
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
