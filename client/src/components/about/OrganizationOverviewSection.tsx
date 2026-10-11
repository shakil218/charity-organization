'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { 
  HeartHandshake, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Heart,
  Info
} from 'lucide-react';

export interface OrganizationOverviewSectionProps {
  id?: string;
  className?: string;
  mainImageSrc?: string;
  mainImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInLeftAccent: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

/**
 * Organization Overview Section for the About Us page of Sonavan Old Rehabilitation Center (SORC)
 *
 * Requirements:
 * - Two-column desktop layout, stacked on mobile.
 * - Left column: Large photograph with a small decorative overlapping image frame.
 * - Right column: "WHO WE ARE" eyebrow, heading, approved introductory copy, 4 core highlights, and CTAs.
 * - Generous whitespace, subtle shadows, rounded corners, warm cream background (#FAF8F2 / #F2ECE0).
 * - Full bilingual support (Inter for English, Hind Siliguri for Bangla).
 */
export const OrganizationOverviewSection: React.FC<OrganizationOverviewSectionProps> = ({
  id = 'organization-overview',
  className = '',
  mainImageSrc = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000',
  mainImageAlt = 'Dedicated caregiver providing attentive, dignified assistance to an older resident',
  secondaryImageSrc = 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=600',
  secondaryImageAlt = 'Peaceful shared morning tea conversation at the elder sanctuary',
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const highlights = [
    {
      icon: Heart,
      title: isBn ? 'প্রবীণদের প্রতি সর্বোচ্চ শ্রদ্ধা' : 'Respect for Older Adults',
      description: isBn 
        ? 'তাদের জীবনের দীর্ঘ অভিজ্ঞতার প্রতি গভীর শ্রদ্ধা ও ধৈর্যশীল মনোভাব।' 
        : 'Honoring their life journeys with attentive care, patience, and dignity.'
    },
    {
      icon: HeartHandshake,
      title: isBn ? 'সহমর্মিতাপূর্ণ সার্বক্ষণিক সেবা' : 'Compassionate Support',
      description: isBn 
        ? 'শারীরিক সুস্থতা ও মানসিক প্রশান্তি নিশ্চিতে আন্তরিক ব্যক্তিগত সহায়তা।' 
        : 'Attentive personal assistance that nurtures both physical and emotional comfort.'
    },
    {
      icon: Users,
      title: isBn ? 'সামাজিক একাত্মতা ও মেলবন্ধন' : 'Community Connection',
      description: isBn 
        ? 'স্বেচ্ছাসেবী সাক্ষাৎ ও পারিবারিক সম্পর্কের মধ্য দিয়ে একাকীত্বহীন পরিবেশ।' 
        : 'Welcoming volunteers and family visits to keep seniors connected and cherished.'
    },
    {
      icon: Sparkles,
      title: isBn ? 'মানবিক মর্যাদার সুরক্ষা' : 'Human Dignity',
      description: isBn 
        ? 'নিরাপদ, শান্তিপূর্ণ ও মমতাময় পরিবেশে বেঁচে থাকার স্থায়ী নিশ্চয়তা।' 
        : 'Ensuring every individual lives in a secure, comforting space free from neglect.'
    }
  ];

  return (
    <section
      id={id}
      aria-label="Organization Overview"
      className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-20 bg-[#FAF8F2] overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Background Subtle Accent Glows */}
      <div 
        className="absolute top-1/3 -left-32 w-96 h-96 bg-[#D6B56D]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#145B52]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 lg:gap-16 items-center">

          {/* Left Column: Large Photograph with Small Decorative Overlapping Image Frame (2 columns on md and lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeInLeft}
            className="md:col-span-5 relative"
          >
            {/* Ambient Shadow / Border Decor */}
            <div 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#145B52]/10 via-[#D6B56D]/20 to-transparent blur-md pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Main Primary Image Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#145B52]/15 shadow-xl bg-white">
              <div className="relative w-full aspect-4/5 sm:aspect-1/1 md:aspect-4/5 lg:aspect-4/5 overflow-hidden">
                <Image
                  src={mainImageSrc}
                  alt={mainImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Vignette */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Illustrative Notice */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#145B52]/90 backdrop-blur-md border border-[#FAF8F2]/20 text-[#FAF8F2] text-[10px] sm:text-[11px] font-medium">
                    <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                    <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                      {isBn ? 'প্রতীকী চিত্র • মমতা ও সহমর্মিতার প্রতিচ্ছবি' : 'Illustrative photography • Depicting warmth & empathy'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Overlapping Image Frame (Bottom-Right Offset, Animates fade in from left) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInLeftAccent}
              className="hidden sm:block absolute -bottom-6 -right-6 md:-bottom-7 md:-right-7 lg:-bottom-8 lg:-right-8 w-44 sm:w-52 md:w-44 lg:w-48 aspect-4/3 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-[#0E423B] z-20"
            >
              <Image
                src={secondaryImageSrc}
                alt={secondaryImageAlt}
                fill
                sizes="(max-width: 1024px) 200px, 220px"
                className="object-cover object-center"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#145B52]/60 to-transparent pointer-events-none" 
                aria-hidden="true" 
              />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className={`inline-block px-2 py-0.5 rounded-md bg-[#145B52]/85 text-white text-[10px] font-bold ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                  {isBn ? 'শান্তিময় পরিবেশ' : 'Peaceful Sanctuary'}
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Eyebrow, Heading, Descriptive Paragraphs, Highlights & CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-7"
          >
            
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="w-fit">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-black tracking-wider uppercase ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                <span className="w-2 h-2 rounded-full bg-[#276749]" aria-hidden="true" />
                {isBn ? 'আমরা কারা • WHO WE ARE' : 'WHO WE ARE'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h2 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn 
                  ? 'যত্ন, মর্যাদা ও আত্মিক শ্রদ্ধার প্রতি আমাদের অঙ্গীকার' 
                  : 'A Commitment to Care, Dignity and Belonging'}
              </h2>
            </motion.div>

            {/* Approved Introductory Copy */}
            <motion.div variants={fadeInUp} className="space-y-4 text-[#242B29]/85 text-sm sm:text-base leading-relaxed">
              <p className={`font-semibold text-[#145B52] bg-[#F2ECE0]/70 p-4 rounded-2xl border-l-4 border-[#D6B56D] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn
                  ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র একটি সামাজিক উদ্যোগ যার সার্বিক পরিচয় গড়ে উঠেছে প্রবীণদের সুরক্ষা, পুনর্বাসন ও মানবিক সেবাকে কেন্দ্র করে। এই পৃষ্ঠাটিতে আমাদের মূল উদ্দেশ্য, মানবিক মূল্যবোধ এবং সমাজে আমাদের ভূমিকা উপস্থাপন করা হয়েছে।'
                  : 'Sonavan Old Rehabilitation Center is an organization whose public identity reflects a focus on older adults and rehabilitation. This page introduces the center\'s purpose, values, and role in the community.'}
              </p>

              <p className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn
                  ? 'আমাদের কাজের মূল লক্ষ্য হলো সমাজের অসহায় ও প্রবীণ মানুষদের পাশে দাঁড়ানো, যাদের বিশেষ পরিচর্যা, পারিবারিক সান্নিধ্য ও মানবিক সংবেদনশীলতা প্রয়োজন। আমরা নিশ্চিত করি যেন প্রতিটি প্রবীণ জীবনের এই মূল্যবান সময়ে অবহেলা নয়, বরং পরম যত্নে একটি আন্তরিক আশ্রয় খুঁজে পান।'
                  : 'Our daily focus centers on supporting older adults who need dedicated day-to-day assistance, emotional reassurance, and a peaceful environment. We believe that every individual deserves to be treated with compassion and respect in an environment that feels like home.'}
              </p>

              <p className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn
                  ? 'একটি সচেতন ও মানবিক সমাজ গঠনে আমরা সবার অংশগ্রহণকে উৎসাহিত করি। প্রবীণদের সাথে নিয়মিত সময় কাটানো, স্বেচ্ছাসেবামূলক কাজে যুক্ত হওয়া এবং তাদের প্রতি মমতার হাত বাড়িয়ে দেওয়ার মাধ্যমে যে কেউ আমাদের এই প্রচেষ্টার অংশীদার হতে পারেন।'
                  : 'Community engagement is essential to our ethos. We welcome visitors, volunteers, and compassionate community members to connect with our elders, fostering intergenerational bonds that enrich life for everyone involved.'}
              </p>
            </motion.div>

            {/* 4 Core Highlights Cards */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3.5 sm:gap-4 md:gap-3 lg:gap-4 pt-2"
            >
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 md:p-3 lg:p-4 rounded-2xl bg-white border border-[#145B52]/10 shadow-xs hover:shadow-md hover:border-[#D6B56D]/50 transition-all duration-200 flex items-start gap-3.5 md:gap-2.5 lg:gap-3.5"
                  >
                    <div className="w-10 h-10 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl bg-[#145B52]/10 text-[#145B52] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-[#145B52]" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={`text-xs sm:text-sm md:text-xs lg:text-sm font-bold text-[#145B52] leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[11px] sm:text-xs md:text-[11px] lg:text-xs text-[#242B29]/70 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs: Learn More & Contact */}
            <motion.div variants={fadeInUp} className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-3 md:px-4 md:py-2.5 lg:px-5 lg:py-3 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
              >
                <Mail className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
                <span>{isBn ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-5 py-3 md:px-4 md:py-2.5 lg:px-5 lg:py-3 rounded-xl bg-white hover:bg-[#F2ECE0] border border-[#145B52]/20 text-[#145B52] text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
              >
                <span>{isBn ? 'সেবাসমূহ বিস্তারিত জানুন' : 'Learn More About Our Services'}</span>
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
