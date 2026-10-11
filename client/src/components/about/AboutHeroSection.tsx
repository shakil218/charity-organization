'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ChevronRight, Sparkles, HeartHandshake, Compass, Info } from 'lucide-react';

export interface AboutHeroSectionProps {
  /** Optional custom hero image source */
  imageSrc?: string;
  /** Optional custom image alt text */
  imageAlt?: string;
  /** Whether to show the illustrative photography disclaimer badge (default: true) */
  isIllustrativeImage?: boolean;
  /** Whether to display the integrated breadcrumbs bar (default: true) */
  showBreadcrumbs?: boolean;
}

// Animation Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInRightPhoto: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Premium Hero Section for the About Us page of Sonavan Old Rehabilitation Center (SORC)
 * - Deep teal (#145B52) backdrop with subtle warm gold (#D6B56D) & cream (#FAF8F2) accents
 * - Fully animated with Framer Motion (staggered copy entrance, slow Ken Burns zoom, floating badges)
 * - Responsive across mobile, tablet, and desktop
 * - Strict adherence to bilingual support (Inter for English, Hind Siliguri for Bangla)
 * - Accessible semantic HTML structure (header, nav, h1, h2, aria-labels)
 */
export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  imageSrc = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200',
  imageAlt = 'Warm and compassionate elder care assistance',
  isIllustrativeImage = true,
  showBreadcrumbs = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <header className="relative w-full overflow-hidden bg-[#145B52] text-[#FAF8F2] border-b border-[#D6B56D]/20">
      {/* Decorative ambient background accents with smooth breathing animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#145B52] via-[#0E423B] to-[#0A332E] pointer-events-none"
        aria-hidden="true" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6B56D]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <motion.div 
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#276749]/35 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />
      
      {/* Subtle fine geometric overlay pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FAF8F2_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 relative z-10">
        
        {/* Breadcrumb Navigation */}
        {showBreadcrumbs && (
          <motion.nav 
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            aria-label="Breadcrumb" 
            className="mb-6 sm:mb-8 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF8F2]/75"
          >
            <ol className="flex items-center gap-2 list-none p-0 m-0">
              <li className="flex items-center">
                <Link 
                  href="/" 
                  className="flex items-center gap-1.5 text-[#FAF8F2]/80 hover:text-[#D6B56D] transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#D6B56D] rounded-sm"
                >
                  <Home className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'হোম' : 'Home'}
                  </span>
                </Link>
              </li>

              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-[#FAF8F2]/40" />
              </li>

              <li className="flex items-center">
                <span 
                  className={`text-[#D6B56D] font-bold tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
                  aria-current="page"
                >
                  {isBn ? 'আমাদের সম্পর্কে' : 'About Us'}
                </span>
              </li>
            </ol>
          </motion.nav>
        )}

        {/* 2-Column Responsive Layout (md and lg both 2-column) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Eyebrow, and Descriptions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-5 sm:space-y-6"
          >
            
            {/* Eyebrow Pill */}
            <motion.div variants={fadeInUp} className="w-fit">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F2]/10 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'আমাদের সম্পর্কে জানুন' : 'GET TO KNOW US'}
                </span>
              </div>
            </motion.div>

            {/* Main Page Heading */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-[#FAF8F2] tracking-tight leading-[1.15] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}` }>
                {isBn 
                  ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র সম্পর্কে' 
                  : 'About Sonavan Old Rehabilitation Center'}
              </h1>
              
              {/* Secondary Language Title Subheading */}
              <p className={`text-lg sm:text-xl font-bold text-[#D6B56D] ${isBn ? 'font-[family-name:var(--font-inter)]' : 'font-[family-name:var(--font-hind-siliguri)]'}`}>
                {isBn ? 'Sonavan Old Rehabilitation Center (SORC)' : 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র'}
              </p>
            </motion.div>

            {/* Required Primary Description */}
            <motion.p 
              variants={fadeInUp}
              className={`text-base sm:text-lg text-[#FAF8F2]/90 leading-relaxed font-normal max-w-2xl ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
            >
              {isBn
                ? 'প্রবীণদের মর্যাদা, সহমর্মিতা ও শ্রদ্ধার সাথে সেবা প্রদানে আমাদের উদ্দেশ্য, মূল্যবোধ ও আন্তরিক অঙ্গীকার সম্পর্কে জানুন।'
                : 'Learn about our purpose, values, and commitment to supporting older adults with dignity, compassion, and respect.'}
            </motion.p>

            {/* Secondary Encouraging Line */}
            <motion.div 
              variants={fadeInUp}
              className="border-l-3 border-[#D6B56D] pl-4 py-1 bg-[#FAF8F2]/5 rounded-r-xl max-w-2xl"
            >
              <p className={`text-sm sm:text-base text-[#FAF8F2]/80 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn
                  ? 'আমাদের সেবা কার্যক্রম, প্রবীণ নিবাসের সার্বক্ষণিক পরিবেশ এবং মানবিক মিশনের বিস্তার কীভাবে বয়োজ্যেষ্ঠদের জীবনে স্বস্তি ফিরিয়ে আনছে তা বিস্তারিত অন্বেষণ করুন।'
                  : "Explore our organization's mission, structured care framework, and daily compassionate work devoted to uplifting vulnerable seniors."}
              </p>
            </motion.div>

            {/* Quick Exploration CTA Anchors */}
            <motion.div variants={fadeInUp} className="pt-2 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#organization-overview"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F2] text-[#145B52] hover:bg-[#D6B56D] hover:text-[#0E423B] text-xs sm:text-sm font-extrabold transition-colors duration-200 shadow-md ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
              >
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>{isBn ? 'আমাদের মূল আদর্শ' : 'Our Purpose & Values'}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services-section"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#FAF8F2]/30 text-[#FAF8F2] hover:bg-[#FAF8F2]/10 hover:border-[#D6B56D] text-xs sm:text-sm font-bold transition-colors duration-200 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
              >
                <HeartHandshake className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'সেবাসমূহ ও সুযোগ-সুবিধা' : 'Services & Sanctuary'}</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Warm Welcoming Elderly-Care Photograph */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInRightPhoto}
            className="md:col-span-5 relative mt-4 md:mt-0"
          >
            
            {/* Soft Gold Backdrop Accent Frame with gentle pulse */}
            <motion.div 
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#D6B56D]/30 via-[#276749]/20 to-transparent blur-sm pointer-events-none"
              aria-hidden="true" 
            />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D6B56D]/40 bg-[#0E423B] shadow-2xl group">
              
              {/* Aspect Ratio Container for Responsive Image with Ken Burns Zoom */}
              <div className="relative w-full aspect-4/3 sm:aspect-16/11 md:aspect-4/3 overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ scale: [1, 1.08] }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                </motion.div>

                {/* Subtle vignette gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A332E]/80 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true" 
                />

                {/* Floating Trust Chip inside photo with soft floating animation */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#145B52]/90 backdrop-blur-md border border-[#D6B56D]/50 text-white text-[11px] sm:text-xs font-bold shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'স্নেহময় প্রবীণ সেবা' : 'Compassionate Elder Care'}
                  </span>
                </motion.div>

                {/* Ethical Photography Disclaimer / Illustrative Notice */}
                {isIllustrativeImage && (
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E423B]/85 backdrop-blur-md border border-[#FAF8F2]/15 text-[#FAF8F2]/80 text-[10px] sm:text-[11px] font-medium leading-tight">
                      <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                      <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                        {isBn 
                          ? 'প্রতীকী চিত্র • প্রবীণদের মর্যাদাপূর্ণ যত্ন ও সহমর্মিতার চিত্রায়ণ' 
                          : 'Illustrative photography • Depicting dignified senior care & warmth'}
                      </span>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </header>
  );
};
