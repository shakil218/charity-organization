'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Ear, 
  ShieldCheck, 
  Users, 
  Compass, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutApproachSectionProps, ApproachPrincipleItem } from './types';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInRightPhoto: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const DEFAULT_PRINCIPLES: ApproachPrincipleItem[] = [
  {
    id: 'listen-first',
    number: '01',
    title: {
      en: 'Listen First',
      bn: 'প্রথমে শোনা'
    },
    subtitle: {
      en: 'Respect individual experiences, needs, and preferences.',
      bn: 'ব্যক্তিগত অভিজ্ঞতা, প্রয়োজন ও পছন্দকে মর্যাদা দেওয়া।'
    },
    description: {
      en: 'Taking unhurried time to listen attentively, honor personal routines, and understand emotional comfort without making assumptions.',
      bn: 'প্রবীণদের প্রতিটি কথা ও অনুভূতির প্রতি সশ্রদ্ধ মনোযোগ দেওয়া এবং কোনো পূর্বানুমান ছাড়াই তাদের প্রত্যাশা উপলব্ধি করা।'
    },
    icon: Ear,
    tag: {
      en: 'Active Listening',
      bn: 'মনোযোগী শ্রবণ'
    }
  },
  {
    id: 'protect-dignity',
    number: '02',
    title: {
      en: 'Protect Dignity',
      bn: 'মর্যাদা সুরক্ষা'
    },
    subtitle: {
      en: 'Communicate respectfully and preserve personal privacy.',
      bn: 'শ্রদ্ধাপূর্ণ যোগাযোগ বজায় রাখা ও ব্যক্তিগত গোপনীয়তা রক্ষা করা।'
    },
    description: {
      en: 'Ensuring courteous dialogue, safeguarding confidential matters, and honoring privacy in all aspects of daily living.',
      bn: 'সর্বদা বিনম্র ও শ্রদ্ধাশীল আচরণ বজায় রাখা এবং দৈনন্দিন প্রতিটি ক্ষেত্রে ব্যক্তিগত গোপনীয়তার সর্বোচ্চ সুরক্ষা নিশ্চিত করা।'
    },
    icon: ShieldCheck,
    tag: {
      en: 'Privacy & Honor',
      bn: 'গোপনীয়তা ও সম্মান'
    }
  },
  {
    id: 'encourage-connection',
    number: '03',
    title: {
      en: 'Encourage Connection',
      bn: 'মেলবন্ধন উৎসাহিত করা'
    },
    subtitle: {
      en: 'Recognize the importance of companionship and inclusion.',
      bn: 'সঙ্গ ও আন্তরিক অন্তর্ভুক্তির গুরুত্ব উপলব্ধি করা।'
    },
    description: {
      en: 'Fostering heartfelt community presence and intergenerational companionship to prevent isolation and emotional vulnerability.',
      bn: 'একাকীত্ব দূরীকরণে পারস্পরিক সাহচর্য ও বন্ধুসুলভ পরিবেশ তৈরি করা, যাতে প্রতিটি প্রবীণ মানুষ নিজেকে আপন বলয়ে অন্তর্ভুক্ত অনুভব করেন।'
    },
    icon: Users,
    tag: {
      en: 'Companionship',
      bn: 'আন্তরিক সাহচর্য'
    }
  },
  {
    id: 'respect-independence',
    number: '04',
    title: {
      en: 'Respect Independence',
      bn: 'স্বাধীনতার প্রতি সম্মান'
    },
    subtitle: {
      en: 'Support appropriate choice and participation.',
      bn: 'সামর্থ্য অনুযায়ী নিজস্ব সিদ্ধান্ত ও সক্রিয় অংশগ্রহণকে সমর্থন করা।'
    },
    description: {
      en: 'Supporting personal choices, daily mobility, and voluntary engagement in community life according to individual capability.',
      bn: 'সামর্থ্য অনুযায়ী নিজস্ব পছন্দ ও সিদ্ধান্ত নেওয়ার স্বাধীনতা বজায় রাখা এবং প্রবীণদের স্বতঃস্ফূর্ত অংশগ্রহণকে উৎসাহিত করা।'
    },
    icon: Compass,
    tag: {
      en: 'Autonomy',
      bn: 'স্বকীয় স্বাধীনতা'
    }
  }
];

/**
 * Our Approach to Elderly Care section for Sonavan Old Rehabilitation Center.
 *
 * Requirements:
 * - Heading: "Every Person Deserves to Be Heard and Respected"
 * - Person-centered approach explanation in accessible language
 * - Four content blocks:
 *    1. Listen First — Respect individual experiences, needs, and preferences.
 *    2. Protect Dignity — Communicate respectfully and preserve personal privacy.
 *    3. Encourage Connection — Recognize the importance of companionship and inclusion.
 *    4. Respect Independence — Support appropriate choice and participation.
 * - Two-column responsive layout with warm photography
 * - Compact icon-led items
 * - Warm cream (#FAF8F2), deep teal (#145B52), forest green (#0E423B), and soft gold (#D6B56D)
 * - Small CTA linking to the Services page
 * - General care principles compliance disclaimer (never claiming unverified clinical frameworks)
 * - Full bilingual support (Bangla & English)
 */
export const AboutApproachSection: React.FC<AboutApproachSectionProps> = ({
  id = 'our-approach',
  className = '',
  heading = {
    en: 'Every Person Deserves to Be Heard and Respected',
    bn: 'প্রত্যেক মানুষের সম্মান ও কথা শোনার অধিকার রয়েছে'
  },
  introHeading = {
    en: 'A Person-Centered Approach to Supporting Older Adults',
    bn: 'প্রবীণদের সেবায় ব্যক্তিকেন্দ্রিক মানবিক দৃষ্টিভঙ্গি'
  },
  introParagraph = {
    en: 'A person-centered approach means recognizing that older adults are not defined by age or vulnerability, but by a lifetime of experiences, personal values, and distinct preferences. We believe compassionate care begins by honoring each individual’s voice, preserving their personal choices, and cultivating an environment where they feel truly seen, heard, and cherished.',
    bn: 'ব্যক্তিকেন্দ্রিক সেবা দর্শনের অর্থ হলো প্রবীণদের কেবল বয়স বা সীমাবদ্ধতা দিয়ে বিচার না করে, তাদের জীবনের সঞ্চিত অভিজ্ঞতা, স্বতন্ত্র পছন্দ ও আত্মমর্যাদাকে অগ্রাধিকার দেওয়া। আমরা বিশ্বাস করি প্রকৃত যত্ন শুরু হয় প্রতিটি মানুষের কথা গভীর মনোযোগ দিয়ে শোনার মাধ্যমে—তাদের নিজস্ব সিদ্ধান্তকে সম্মান জানিয়ে এবং এমন এক পরিবেশ সৃষ্টির মাধ্যমে যেখানে তারা নিজেকে সম্পূর্ণ আপন ও নিরাপদ মনে করেন।'
  },
  principles = DEFAULT_PRINCIPLES,
  imageSrc = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000',
  imageAlt = {
    en: 'A compassionate caregiver sharing a warm, respectful conversation with an older adult',
    bn: 'প্রবীণ ব্যক্তির সাথে সেবাকারীর আন্তরিক ও শ্রদ্ধাপূর্ণ কথোপকথনের মুহূর্ত'
  },
  isDraftPendingApproval = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const headingText = heading[locale] || heading.en;
  const introHeadingText = introHeading[locale] || introHeading.en;
  const introParaText = introParagraph[locale] || introParagraph.en;
  const imageAltText = imageAlt[locale] || imageAlt.en;

  return (
    <section
      id={id}
      aria-label="Our Approach to Elderly Care"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Ambient Lighting Background Accents */}
      <div 
        className="absolute top-1/4 -right-24 w-96 h-96 bg-[#D6B56D]/12 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#145B52]/6 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">

        {/* Section Two-Column Layout (Two Columns on md & lg Devices) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Heading, Person-Centered Explanation, 4 Compact Principles & CTA (7 cols on md/lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
            className="md:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Eyebrow & General Care Principles Status Pill */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
                <HeartHandshake className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'আমাদের সেবা দর্শন' : 'OUR CARE PHILOSOPHY'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              </div>

              {isDraftPendingApproval && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'সাধারণ যত্ন নীতিমালা • খসড়া' : 'General Care Principles • Draft'}
                  </span>
                </span>
              )}
            </motion.div>

            {/* Main Section Heading */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {headingText}
              </h2>
              <p className={`text-sm sm:text-base font-bold text-[#276749] tracking-wide ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {introHeadingText}
              </p>
            </motion.div>

            {/* Accessible Person-Centered Explanation */}
            <motion.p 
              variants={fadeInUp}
              className={`text-sm sm:text-base text-[#242B29]/85 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
            >
              {introParaText}
            </motion.p>

            {/* Four Compact Content Blocks (2x2 Grid on sm/md/lg) */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 pt-2"
            >
              {principles.map((item) => {
                const IconComponent = item.icon;
                const titleStr = item.title[locale] || item.title.en;
                const subStr = item.subtitle[locale] || item.subtitle.en;
                const descStr = item.description[locale] || item.description.en;

                return (
                  <div
                    key={item.id}
                    className="group relative p-4.5 sm:p-5 rounded-2xl bg-white border border-[#145B52]/12 shadow-[0_2px_12px_-2px_rgba(20,91,82,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(20,91,82,0.1)] hover:border-[#D6B56D]/70 transition-all duration-300 space-y-2.5 flex flex-col justify-between"
                  >
                    {/* Top Header: Icon & Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] transition-colors duration-300">
                        <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#145B52]/60 bg-[#FAF8F2] px-2 py-0.5 rounded-full border border-[#145B52]/10">
                        {item.number}
                      </span>
                    </div>

                    {/* Title & Core Subtitle */}
                    <div className="space-y-1">
                      <h3 className={`text-base font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {titleStr}
                      </h3>
                      <p className={`text-xs font-semibold text-[#145B52]/80 leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {subStr}
                      </p>
                    </div>

                    {/* Detailed Concise Explanation */}
                    <p className={`text-[11px] sm:text-xs text-[#242B29]/75 leading-relaxed font-normal pt-0.5 border-t border-[#145B52]/5 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {descStr}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Small Action Area: CTA Button linking to Services Page */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#145B52] text-[#FAF8F2] text-sm font-bold shadow-md hover:bg-[#0E423B] hover:shadow-lg transition-all group"
              >
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'আমাদের সেবাসমূহ দেখুন' : 'Explore Our Care Services'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#145B52]/20 text-[#145B52] text-sm font-semibold hover:bg-[#F2ECE0]/50 transition-colors"
              >
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'যোগাযোগ করুন' : 'Speak with Our Team'}
                </span>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Warm Photography & Floating Badges (5 cols on md & lg) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInRightPhoto}
            className="md:col-span-5 relative"
          >
            {/* Ambient Gold Glow Halo */}
            <div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D6B56D]/25 via-[#145B52]/15 to-transparent blur-lg pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#145B52]/20 bg-white shadow-2xl group">
              <div className="relative w-full aspect-4/5 sm:aspect-1/1 md:aspect-4/5 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAltText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle Vignette Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0E423B]/80 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/90 backdrop-blur-md border border-[#D6B56D]/50 text-white text-xs font-bold shadow-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                  <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                    {isBn ? 'ব্যক্তিকেন্দ্রিক মানবিক সেবা' : 'Person-Centered Care'}
                  </span>
                </div>

                {/* Photo Caption / Ethical Disclaimer */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E423B]/90 backdrop-blur-md border border-white/15 text-white/85 text-[10px] sm:text-[11px] font-medium leading-tight">
                    <Info className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
                    <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                      {isBn 
                        ? 'প্রতীকী চিত্র • পরম সহমর্মিতা ও শ্রদ্ধাপূর্ণ সেবা সম্পর্কের মুহূর্ত' 
                        : 'Illustrative photography • Depicting compassionate, respectful caregiver support'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Decorative Corner Dashed Border */}
            <div 
              className="hidden md:block absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl border-2 border-dashed border-[#D6B56D]/40 pointer-events-none -z-10" 
              aria-hidden="true" 
            />
          </motion.div>

        </div>

        {/* Ethical Governance & Practice Confirmation Footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#D6B56D]/40 shadow-xs flex items-start gap-3.5 text-xs text-[#242B29]/75"
        >
          <ShieldAlert className="w-4 h-4 text-[#276749] shrink-0 mt-0.5" aria-hidden="true" />
          <p className={`leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'উল্লেখিত নীতিমালাগুলো প্রবীণদের সেবায় আমাদের সার্বজনীন মানবিক দৃষ্টিভঙ্গি প্রকাশ করে। এটি কোনো বিশেষ ক্লিনিক্যাল বা বিশেষায়িত হাসপাতাল ফ্রেমওয়ার্ক অনুসরণের আনুষ্ঠানিক দাবি নির্দেশ করে না। পরিচালনা পর্ষদ ও সংশ্লিষ্ট বিশেষজ্ঞদের সাথে আনুষ্ঠানিক যাচাইয়ের পর প্রতিষ্ঠানের সুনির্দিষ্ট ও নিয়মিত সেবা পদ্ধতিসমূহ আনুষ্ঠানিকভাবে নথিভুক্ত করা হবে।'
              : 'These care principles represent general human-centered values guiding empathetic daily support for older adults. They do not constitute assertions that the organization adheres to a specific certified clinical or professional medical framework. Verified operational practices will be documented following organizational and advisory confirmation.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
