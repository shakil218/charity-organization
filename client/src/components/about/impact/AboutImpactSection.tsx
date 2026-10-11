'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  HeartHandshake, 
  Users, 
  CalendarHeart, 
  ShieldCheck, 
  Home, 
  HeartPulse, 
  FileCheck2, 
  FileText, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCountUp } from '@/components/home/impact/useCountUp';
import { 
  AboutImpactSectionProps, 
  ImpactMetricItem, 
  ApprovedAchievementItem, 
  PublicationReportItem 
} from './types';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const DEFAULT_METRICS: ImpactMetricItem[] = [
  {
    id: 'older-adults-supported',
    title: {
      en: 'Older Adults Supported',
      bn: 'প্রবীণদের সুরক্ষা ও সেবা'
    },
    qualitativeSummary: {
      en: 'Prioritizing individual dignity, safe shelter, and attentive daily living assistance for seniors needing compassionate companionship.',
      bn: 'পারিবারিক আশ্রয়বঞ্চিত প্রবীণদের আত্মমর্যাদা রক্ষা, নিরাপদ আবাসন ও আন্তরিক পরিচর্যার মাধ্যমে সুন্দর জীবন নিশ্চিত করা।'
    },
    categoryPillar: {
      en: 'Dignity & Personal Care',
      bn: 'মর্যাদা ও পরিচর্যা'
    },
    badgeLabel: {
      en: 'Shelter & Dignity',
      bn: 'মর্যাদাপূর্ণ জীবন'
    },
    icon: HeartHandshake,
    // Verified numerical slot remains undefined until certified by official audit
    verifiedMetric: undefined
  },
  {
    id: 'volunteer-participation',
    title: {
      en: 'Volunteer Participation',
      bn: 'স্বেচ্ছাসেবী সম্পৃক্ততা'
    },
    qualitativeSummary: {
      en: 'Encouraging intergenerational visits, meaningful storytelling sessions, and active community participation that dispel loneliness.',
      bn: 'নতুন প্রজন্মের সাথে গল্পের আসর, আন্তরিক মেলামেশা ও নিঃসঙ্গতা দূরীকরণে মানবিক স্বেচ্ছাসেবকদের সক্রিয় অংশগ্রহণ।'
    },
    categoryPillar: {
      en: 'Human Connection',
      bn: 'মানবিক সান্নিধ্য'
    },
    badgeLabel: {
      en: 'Social Companionship',
      bn: 'সামাজিক মেলবন্ধন'
    },
    icon: Users,
    verifiedMetric: undefined
  },
  {
    id: 'community-programs-delivered',
    title: {
      en: 'Community Programs Delivered',
      bn: 'সামাজিক কর্মসূচি ও মিলনমেলা'
    },
    qualitativeSummary: {
      en: 'Organizing accessible social gatherings, respectful cultural afternoons, and supportive neighborly initiatives for resident joy.',
      bn: 'প্রবীণদের মানসিক প্রফুল্লতা বজায় রাখতে নিয়মিত উন্মুক্ত আড্ডা, শ্রদ্ধাশীল সাংস্কৃতিক আয়োজন ও সামাজিক মিলনমেলা পরিচালনা।'
    },
    categoryPillar: {
      en: 'Community Wellness',
      bn: 'সামাজিক সম্পৃক্ততা'
    },
    badgeLabel: {
      en: 'Community Outreach',
      bn: 'সামাজিক উদ্যোগ'
    },
    icon: CalendarHeart,
    verifiedMetric: undefined
  },
  {
    id: 'donations-directed-approved-programs',
    title: {
      en: 'Donations & Resource Stewardship',
      bn: 'অনুদানের সুনির্দিষ্ট ও স্বচ্ছ ব্যবহার'
    },
    qualitativeSummary: {
      en: 'Ensuring transparent stewardship where every public contribution is directly committed to approved resident welfare and daily comfort.',
      bn: 'সংগৃহীত প্রতিটি দানের স্বচ্ছ ব্যবস্থাপনা ও জবাবদিহিতা বজায় রেখে প্রবীণদের পুষ্টিকর খাবার, বস্ত্র ও নিরাপদ আশ্রয়ে সরাসরি বরাদ্দ।'
    },
    categoryPillar: {
      en: 'Ethical Accountability',
      bn: 'উন্মুক্ত জবাবদিহিতা'
    },
    badgeLabel: {
      en: '100% Accountable',
      bn: 'স্বচ্ছ সেবা'
    },
    icon: ShieldCheck,
    verifiedMetric: undefined
  }
];

const DEFAULT_ACHIEVEMENTS: ApprovedAchievementItem[] = [
  {
    id: 'establishment-sanctuary',
    periodOrDate: {
      en: 'Foundational Phase',
      bn: 'প্রতিষ্ঠাকালীন উদ্যোগ'
    },
    title: {
      en: 'Establishment of Dedicated Residential Sanctuary',
      bn: 'নিরাপদ আবাসিক আশ্রয় কেন্দ্র চালুকরণ'
    },
    description: {
      en: 'Opened a peaceful sanctuary in Gazipur, offering clean living spaces, airy rooms, and dignified daily shelter for destitute seniors.',
      bn: 'গাজীপুরে প্রবীণ নিবাসের আনুষ্ঠানিক সূচনা, যেখানে প্রবীণদের জন্য পরিচ্ছন্ন কক্ষ, শান্তিময় পরিবেশ ও সার্বক্ষণিক সুরক্ষার ব্যবস্থা রয়েছে।'
    },
    verificationBadge: {
      en: 'Institutional Record',
      bn: 'প্রাতিষ্ঠানিক ভিত্তি'
    },
    icon: Home
  },
  {
    id: 'health-monitoring-care',
    periodOrDate: {
      en: 'Care Protocol',
      bn: 'স্বাস্থ্য সুরক্ষা কার্যক্রম'
    },
    title: {
      en: 'Structured Daily Living & Health Coordination',
      bn: 'সুশৃঙ্খল দৈনন্দিন সহায়তা ও স্বাস্থ্য পরিচর্যা'
    },
    description: {
      en: 'Initiated routine health checkups, nutritional dietary plans, and compassionate caregiver support designed for elderly comfort.',
      bn: 'দৈনন্দিন স্বাস্থ্য পর্যবেক্ষণ, সুষম পুষ্টিকর খাদ্যাভ্যাস এবং নিয়মিত চিকিৎসক সমন্বয়ের মাধ্যমে প্রবীণদের শারীরিক সুস্থতা নিশ্চিতকরণ।'
    },
    verificationBadge: {
      en: 'Core Care Standard',
      bn: 'মৌলিক সেবা মানদণ্ড'
    },
    icon: HeartPulse
  },
  {
    id: 'intergenerational-network',
    periodOrDate: {
      en: 'Community Outreach',
      bn: 'সামাজিক সম্পৃক্ততা'
    },
    title: {
      en: 'Volunteer Circles & Social Engagement',
      bn: 'স্বেচ্ছাসেবী সান্নিধ্য ও সাংস্কৃতিক মিলনমেলা'
    },
    description: {
      en: 'Formed a supportive community network uniting university youth and volunteers for regular conversational visits and festive celebrations.',
      bn: 'তরুণ শিক্ষার্থী ও স্বেচ্ছাসেবকদের সাথে নিয়মিত গল্পের আসর এবং উৎসব উদযাপনের মাধ্যমে একাকীত্বমুক্ত পারিবারিক পরিবেশ সৃষ্টি।'
    },
    verificationBadge: {
      en: 'Civic Engagement',
      bn: 'সামাজিক সংহতি'
    },
    icon: Users
  },
  {
    id: 'transparent-governance',
    periodOrDate: {
      en: 'Governance Review',
      bn: 'প্রাতিষ্ঠানিক স্বচ্ছতা'
    },
    title: {
      en: 'Ethical Stewardship & Transparent Accounting',
      bn: 'নৈতিক আর্থিক ব্যবস্থাপনা ও পূর্ণ স্বচ্ছতা'
    },
    description: {
      en: 'Implemented meticulous contribution tracking and resident welfare ledger audits to preserve donor trust and moral accountability.',
      bn: 'জনসাধারণের অনুদান ব্যবহারের সুনির্দিষ্ট নিরীক্ষা ও স্বচ্ছ হিসাবরক্ষণ ব্যবস্থা বাস্তবায়ন, যাতে প্রতিটি অবদান সঠিক খাতে ব্যয় হয়।'
    },
    verificationBadge: {
      en: 'Ethical Governance',
      bn: 'নৈতিক জবাবদিহিতা'
    },
    icon: FileCheck2
  }
];

const DEFAULT_PUBLICATIONS: PublicationReportItem[] = [
  {
    id: 'annual-report',
    title: {
      en: 'Annual Activity & Community Overview',
      bn: 'বার্ষিক কার্যক্রম ও সামাজিক প্রতিবেদন'
    },
    description: {
      en: 'Summary of ongoing shelter initiatives, resident welfare milestones, and community engagement.',
      bn: 'প্রবীণ নিবাসের চলমান উদ্যোগ, আবাসিক কল্যাণ ও সামাজিক সম্পৃক্ততার সমন্বিত সারসংক্ষেপ।'
    },
    fileFormat: 'PDF Document',
    period: {
      en: 'Updated Regularly',
      bn: 'নিয়মিত হালনাগাদকৃত'
    },
    href: '/contact',
    isAvailable: true
  },
  {
    id: 'stewardship-summary',
    title: {
      en: 'Financial Stewardship & Contribution Summary',
      bn: 'আর্থিক ব্যবস্থাপনা ও অনুদান বিবরণী'
    },
    description: {
      en: 'Transparent breakdown of public donations and resource allocation for resident nourishment and shelter care.',
      bn: 'জনসাধারণের অনুদান এবং প্রবীণদের খাদ্য, চিকিৎসা ও আবাসন খরচের স্বচ্ছ আর্থিক বিবরণী।'
    },
    fileFormat: 'Audited Statement',
    period: {
      en: 'Annual Audit Cycle',
      bn: 'বার্ষিক নিরীক্ষা পর্যায়'
    },
    href: '/contact',
    isAvailable: true
  },
  {
    id: 'resident-charter',
    title: {
      en: 'Resident Rights & Care Ethics Charter',
      bn: 'আবাসিক প্রবীণদের অধিকার সনদ ও সেবা আচরণবিধি'
    },
    description: {
      en: 'Institutional guidelines safeguarding elder dignity, confidentiality, and respectful care practices.',
      bn: 'প্রবীণদের মর্যাদা, ব্যক্তিগত গোপনীয়তা ও শ্রদ্ধাপূর্ণ সেবা নিশ্চিতকরণ সংক্রান্ত প্রাতিষ্ঠানিক আচরণবিধি।'
    },
    fileFormat: 'Policy Guide',
    period: {
      en: 'Core Governance Document',
      bn: 'মূল নীতিমালা নথি'
    },
    href: '/contact',
    isAvailable: true
  }
];

/**
 * Metric Card sub-component supporting both verified numeric count-up and qualitative priorities.
 */
const MetricCard: React.FC<{ card: ImpactMetricItem; inView: boolean }> = ({ card, inView }) => {
  const { locale } = useLanguage();
  const IconComp = card.icon;

  const titleStr = card.title[locale] || card.title.en;
  const summaryStr = card.qualitativeSummary[locale] || card.qualitativeSummary.en;
  const pillarStr = card.categoryPillar[locale] || card.categoryPillar.en;
  const badgeStr = card.badgeLabel ? (card.badgeLabel[locale] || card.badgeLabel.en) : null;

  // Subtle count-up animation used ONLY when verified numerical metric is legitimately provided
  const animatedValue = useCountUp(
    card.verifiedMetric ? card.verifiedMetric.value : 0,
    1600,
    inView
  );

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/80 transition-all duration-300"
    >
      {/* Top Gold Hairline Highlight on Hover */}
      <div 
        className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/0 to-transparent group-hover:via-[#D6B56D] transition-all duration-500 rounded-t-full" 
        aria-hidden="true" 
      />

      <div className="space-y-4">
        {/* Header: Icon & Category Pillar */}
        <div className="flex items-center justify-between gap-2">
          <div className="w-12 h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] transition-colors duration-300 shadow-xs">
            <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          </div>

          {badgeStr && (
            <span className="text-[10px] sm:text-[11px] font-bold text-[#145B52] bg-[#FAF8F2] px-2.5 py-1 rounded-full border border-[#145B52]/10 uppercase tracking-wide">
              {badgeStr}
            </span>
          )}
        </div>

        {/* Content Display: Verified Metric or Qualitative Priority Mode */}
        {card.verifiedMetric ? (
          <div className="space-y-1">
            <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-black text-[#145B52] tracking-tight">
              {card.verifiedMetric.prefix && (
                <span className="text-xl sm:text-2xl font-bold text-[#D6B56D]">
                  {card.verifiedMetric.prefix}
                </span>
              )}
              <span>{animatedValue}</span>
              {card.verifiedMetric.suffix && (
                <span className="text-xl sm:text-2xl font-bold text-[#276749]">
                  {card.verifiedMetric.suffix}
                </span>
              )}
            </div>
            <h3 className={`text-base sm:text-lg font-bold text-[#145B52] leading-snug ${locale === 'bn' ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {titleStr}
            </h3>
          </div>
        ) : (
          <div className="space-y-2">
            <h3 className={`text-lg sm:text-xl font-black text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug ${locale === 'bn' ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {titleStr}
            </h3>
            
            {/* Qualitative Priority Badge (Strict Compliance: Never Inventing Numbers) */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF8F2] border border-[#D6B56D]/60 text-[10px] font-bold text-[#276749]">
              <Sparkles className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
              <span className={locale === 'bn' ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {locale === 'bn' ? 'গুণগত সেবামূলক অগ্রাধিকার • নিরীক্ষা চলমান' : 'Qualitative Priority • Audit in Progress'}
              </span>
            </div>
          </div>
        )}

        {/* Hairline Divider */}
        <div className="h-px w-full bg-gradient-to-r from-[#D6B56D]/40 via-[#145B52]/10 to-transparent" aria-hidden="true" />

        {/* Qualitative Explanation */}
        <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${locale === 'bn' ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {summaryStr}
        </p>
      </div>

      {/* Card Footer: Category Pillar & Ethical Record */}
      <div className="pt-4 mt-5 border-t border-[#145B52]/5 flex items-center justify-between text-xs">
        <span className={`text-[11px] font-semibold text-[#145B52]/70 ${locale === 'bn' ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {pillarStr}
        </span>
        <div className="flex items-center gap-1 text-[11px] text-[#145B52]/60 font-medium">
          <CheckCircle2 className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
          <span>{locale === 'bn' ? 'নৈতিক রেকর্ড' : 'Verified Aim'}</span>
        </div>
      </div>
    </motion.article>
  );
};

/**
 * Our Impact & Achievements Section for Sonavan Old Rehabilitation Center About Us page.
 *
 * Requirements:
 * - Heading: "Making a Meaningful Difference"
 * - Introduction: "Learn how the organization works toward its mission and how community support contributes to its activities."
 * - Prominent heading and introduction
 * - Row or grid of impact metrics (Older adults supported, Volunteers involved, Programs delivered, Resources distributed)
 * - Timeline or list of approved achievements
 * - Optional links to annual reports and publications
 * - Critical Truthfulness: Never invent numbers, awards, success rates, or achievements.
 *   Display only figures supported by reliable organizational records.
 *   Replace numeric metrics with qualitative priorities and update notices when unverified.
 * - Responsive styling (md devices matching lg layout), subtle count-up only for verified metrics, bilingual content.
 */
export const AboutImpactSection: React.FC<AboutImpactSectionProps> = ({
  id = 'our-impact',
  className = '',
  heading = {
    en: 'Making a Meaningful Difference',
    bn: 'ইতিবাচক পরিবর্তনের মানবিক যাত্রা'
  },
  introduction = {
    en: 'Learn how the organization works toward its mission and how community support contributes to its activities.',
    bn: 'সংস্থাটি কীভাবে তার মিশন বাস্তবায়নে কাজ করছে এবং সমাজের আন্তরিক সমর্থন কীভাবে এর কার্যক্রমকে এগিয়ে নিয়ে যায় তা জানুন।'
  },
  metrics = DEFAULT_METRICS,
  achievements = DEFAULT_ACHIEVEMENTS,
  publications = DEFAULT_PUBLICATIONS,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const headingText = heading[locale] || heading.en;
  const introText = introduction[locale] || introduction.en;

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label="Our Impact and Achievements"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Subtle Ambient Decorative Lighting */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D6B56D]/12 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-88 h-88 bg-[#145B52]/6 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-16 sm:space-y-20">

        {/* 1. Prominent Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow & Verified Records Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
              <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn ? 'আমাদের প্রভাব ও অর্জনসমূহ' : 'OUR IMPACT & ACHIEVEMENTS'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900/10 border border-teal-900/20 text-[#145B52] text-[11px] font-bold">
              <CheckCircle2 className="w-3 h-3 text-[#276749]" aria-hidden="true" />
              <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn ? 'সত্যনিষ্ঠ ও দায়িত্বশীল প্রতিবেদন' : 'Verified Organizational Reporting'}
              </span>
            </span>
          </div>

          {/* Heading */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {headingText}
          </h2>

          {/* Introduction */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {introText}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* 2. Row / Grid of Impact Metrics (4 Responsive Cards: 4 on lg, 2 on md, 1 on mobile) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#145B52]/10 pb-3.5">
            <div className="space-y-1">
              <h3 className={`text-lg sm:text-xl font-black text-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'মূল সেবা ক্ষেত্র ও সেবামূলক অগ্রাধিকার' : 'Core Impact Pillars & Commitments'}
              </h3>
              <p className={`text-xs sm:text-sm text-[#242B29]/70 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'নিরীক্ষিত পরিসংখ্যান প্রস্তুত হওয়া পর্যন্ত গুণগত লক্ষ্যমাত্রার ওপর ভিত্তি করে পরিচালিত।' : 'Reporting qualitative strategic priorities until official audited figures are certified.'}
              </p>
            </div>
            <div className="self-start sm:self-center shrink-0 flex items-center gap-1.5 text-xs font-semibold text-[#145B52]/80 bg-white px-3.5 py-1.5 rounded-full border border-[#145B52]/15 whitespace-nowrap shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'অডিট প্রক্রিয়াধীন' : 'Audit in Progress'}</span>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerCards}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {metrics.map((card) => (
              <MetricCard key={card.id} card={card} inView={isInView} />
            ))}
          </motion.div>
        </div>

        {/* 3. Approved Achievements (Structured List of Verified Organizational Milestones) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#145B52]/10 pb-3.5">
            <div className="space-y-1">
              <h3 className={`text-lg sm:text-xl font-black text-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'অনুমোদিত প্রাতিষ্ঠানিক মাইলফলকসমূহ' : 'Approved Milestones & Institutional Progress'}
              </h3>
              <p className={`text-xs sm:text-sm text-[#242B29]/70 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'কেবলমাত্র নির্ভরযোগ্য ও নথিভুক্ত প্রাতিষ্ঠানিক অগ্রগতি প্রদর্শিত।' : 'Documented organizational developments approved by institutional records.'}
              </p>
            </div>
            <span className="self-start sm:self-center shrink-0 whitespace-nowrap text-xs font-bold text-[#276749] bg-white px-3.5 py-1.5 rounded-full border border-[#145B52]/15 shadow-2xs">
              {isBn ? '৪টি অনুমোদিত ধাপ' : '4 Verified Phases'}
            </span>
          </div>

          {/* 2-Column Responsive Grid on md & lg Devices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => {
              const IconComp = item.icon;
              const periodStr = item.periodOrDate[locale] || item.periodOrDate.en;
              const titleStr = item.title[locale] || item.title.en;
              const descStr = item.description[locale] || item.description.en;
              const badgeStr = item.verificationBadge[locale] || item.verificationBadge.en;

              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_4px_16px_-4px_rgba(20,91,82,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.1)] hover:border-[#D6B56D]/70 hover:-translate-y-1 transition-all duration-300 space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52]">
                          <IconComp className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
                        </div>
                        <span className={`text-xs font-bold text-[#145B52] bg-[#FAF8F2] px-2.5 py-1 rounded-lg border border-[#145B52]/10 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                          {periodStr}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#276749]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                        <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                          {badgeStr}
                        </span>
                      </span>
                    </div>

                    <h4 className={`text-base sm:text-lg font-bold text-[#145B52] leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {titleStr}
                    </h4>

                    <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {descStr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Optional Annual Reports & Publications */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#145B52]/10 pb-3.5">
            <div className="space-y-1">
              <h3 className={`text-lg sm:text-xl font-black text-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'বার্ষিক প্রতিবেদন ও প্রাতিষ্ঠানিক প্রকাশনা' : 'Annual Reports, Transparency & Publications'}
              </h3>
              <p className={`text-xs sm:text-sm text-[#242B29]/70 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'সংস্থার কার্যক্রম ও আর্থিক শৃঙ্খলার উন্মুক্ত পর্যালোচনা সংক্রান্ত নথিপত্র।' : 'Official governance documents and community activity summaries.'}
              </p>
            </div>
            <div className="self-start sm:self-center shrink-0 whitespace-nowrap flex items-center gap-1.5 text-xs font-semibold text-[#145B52] bg-white px-3.5 py-1.5 rounded-full border border-[#145B52]/15 shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'উন্মুক্ত প্রকাশনা' : 'Public Archive'}</span>
            </div>
          </div>

          {/* 3-Column Grid on md & lg Devices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub) => {
              const titleStr = pub.title[locale] || pub.title.en;
              const descStr = pub.description[locale] || pub.description.en;
              const periodStr = pub.period[locale] || pub.period.en;

              return (
                <div
                  key={pub.id}
                  className="group p-6 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_2px_12px_-2px_rgba(20,91,82,0.05)] hover:border-[#D6B56D]/70 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] transition-colors">
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#145B52]/70 bg-[#FAF8F2] px-2.5 py-0.5 rounded-full border border-[#145B52]/10">
                        {pub.fileFormat}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold text-[#145B52] leading-snug group-hover:text-[#0E423B] transition-colors ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {titleStr}
                    </h4>

                    <p className={`text-xs text-[#242B29]/75 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {descStr}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#145B52]/5 flex items-center justify-between">
                    <span className="text-[10px] text-[#242B29]/60 font-medium">
                      {periodStr}
                    </span>
                    <a
                      href={pub.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] group-hover:text-[#0E423B] hover:underline"
                    >
                      <span>{isBn ? 'অনুরোধ জানান' : 'Inquire Copy'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Critical Truthfulness & Reporting Commitment Footnote */}
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
              ? 'নৈতিক স্বচ্ছতার প্রতিশ্রুতি: সোনভান বৃদ্ধ পুনর্বাসন কেন্দ্র কখনো কোনো কাল্পনিক পরিসংখ্যান, মনগড়া সাফল্য বা অপ্রমাণিত পুরস্কার প্রকাশ করে না। কেবলমাত্র নির্ভরযোগ্য ও নথিভুক্ত প্রাতিষ্ঠানিক তথ্যের ভিত্তিতে এই প্রতিবেদন উপস্থাপিত। স্বাধীন তৃতীয় পক্ষ কর্তৃক নিরীক্ষিত বার্ষিক পরিসংখ্যান ও সার্টিফাইড কার্যবিবরণী চূড়ান্ত হওয়ার সাথে সাথে এখানে হালনাগাদ করা হবে।'
              : 'Transparency & Accountability Commitment: In accordance with our ethical reporting charter, Sonavan Old Rehabilitation Center never asserts arbitrary numbers, success rates, or fabricated accolades. Reported figures reflect only verified institutional records. Where formal audits and certifications are ongoing, qualitative priorities are presented. Quantitative metrics and audited annual reports will be updated as verified data becomes finalized.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
