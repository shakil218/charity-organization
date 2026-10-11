'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  HeartHandshake, 
  Heart, 
  UserCheck, 
  Users, 
  Scale, 
  Globe, 
  Sparkles, 
  ShieldAlert, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutValuesSectionProps, CoreValueItem } from './types';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12
    }
  }
};

const DEFAULT_VALUES: CoreValueItem[] = [
  {
    id: 'dignity',
    number: '01',
    title: {
      en: 'Dignity',
      bn: 'মর্যাদা ও আত্মসম্মান'
    },
    shortDescription: {
      en: "Respect every person's worth.",
      bn: 'প্রতিটি মানুষের আত্মমর্যাদা ও জীবনমূল্যকে সম্মান জানানো।'
    },
    detailedDescription: {
      en: 'Recognizing that every older adult holds unconditional human value, wisdom, and life experience that deserves mindful reverence in daily life.',
      bn: 'প্রতিটি প্রবীণ মানুষের সহজাত সম্মান, সমৃদ্ধ অভিজ্ঞতা ও মর্যাদাকে নিঃশর্ত শ্রদ্ধার সাথে গ্রহণ ও মূল্যায়ন করা।'
    },
    icon: HeartHandshake,
    tag: {
      en: 'Inherent Worth',
      bn: 'সহজাত মর্যাদা'
    }
  },
  {
    id: 'compassion',
    number: '02',
    title: {
      en: 'Compassion',
      bn: 'সহমর্মিতা'
    },
    shortDescription: {
      en: 'Approach people with kindness and empathy.',
      bn: 'সহৃদয়তা ও আন্তরিক অনুভূতির সাথে মানুষের পাশে দাঁড়ানো।'
    },
    detailedDescription: {
      en: 'Offering genuine emotional warmth, patient listening in moments of vulnerability, and attentiveness to physical and psychological comfort.',
      bn: 'ধৈর্য ও সহানুভূতির সাথে কথা শোনা, একাকীত্বে পরম স্নেহের সাথে পাশে থাকা এবং মানসিক প্রশান্তি নিশ্চিত করা।'
    },
    icon: Heart,
    tag: {
      en: 'Active Kindness',
      bn: 'সক্রিয় সহমর্মিতা'
    }
  },
  {
    id: 'respect',
    number: '03',
    title: {
      en: 'Respect',
      bn: 'শ্রদ্ধাবোধ'
    },
    shortDescription: {
      en: 'Listen to individual preferences and experiences.',
      bn: 'প্রত্যেকের ব্যক্তিগত পছন্দ ও অতীত অভিজ্ঞতাকে গুরুত্ব দেওয়া।'
    },
    detailedDescription: {
      en: 'Upholding personal autonomy, honoring lifelong traditions and cultural habits, and respecting each individual voice without patronizing.',
      bn: 'ব্যক্তিগত স্বাধীনতা অক্ষুণ্ণ রাখা, নিজস্ব জীবনচর্চাকে সম্মান জানানো এবং প্রবীণদের প্রতিটি মতামতকে সশ্রদ্ধ মূল্যায়ন করা।'
    },
    icon: UserCheck,
    tag: {
      en: 'Honored Autonomy',
      bn: 'স্বকীয়তার সম্মান'
    }
  },
  {
    id: 'inclusion',
    number: '04',
    title: {
      en: 'Inclusion',
      bn: 'অন্তর্ভুক্তি'
    },
    shortDescription: {
      en: 'Encourage participation and belonging.',
      bn: 'স্বতঃস্ফূর্ত অংশগ্রহণ ও আপনত্বের অনুভূতি জাগ্রত করা।'
    },
    detailedDescription: {
      en: 'Cultivating an inviting, open environment where no older adult feels isolated or overlooked, and all share an authentic sense of belonging.',
      bn: 'এমন এক উন্মুক্ত পরিবেশ তৈরি করা যেখানে কেউ নিজেকে বিচ্ছিন্ন বা উপেক্ষিত ভাববেন না এবং প্রত্যেকে পরিবারের মতো আপন বোধ করবেন।'
    },
    icon: Users,
    tag: {
      en: 'True Belonging',
      bn: 'সামাজিক মেলবন্ধন'
    }
  },
  {
    id: 'accountability',
    number: '05',
    title: {
      en: 'Accountability',
      bn: 'দায়বদ্ধতা'
    },
    shortDescription: {
      en: 'Communicate honestly and responsibly.',
      bn: 'সততা ও দায়িত্বশীলতার সাথে প্রতিটি পদক্ষেপ পরিচালনা করা।'
    },
    detailedDescription: {
      en: 'Maintaining transparent communication with families, practicing responsible stewardship, and fulfilling community commitments with uncompromised integrity.',
      bn: 'পরিবার ও সমাজের সাথে স্বচ্ছ যোগাযোগ রক্ষা, নৈতিক অঙ্গীকার বাস্তবায়ন এবং নির্ভরযোগ্য দায়িত্বশীলতার সাথে প্রতিটি সিদ্ধান্ত গ্রহণ।'
    },
    icon: Scale,
    tag: {
      en: 'Ethical Stewardship',
      bn: 'নৈতিক স্বচ্ছতা'
    }
  },
  {
    id: 'community',
    number: '06',
    title: {
      en: 'Community',
      bn: 'সামাজিক বন্ধন'
    },
    shortDescription: {
      en: 'Promote meaningful social connections.',
      bn: 'আন্তরিক পারস্পরিক সম্পর্ক ও সৌহার্দ্যপূর্ণ সমাজ গড়ে তোলা।'
    },
    detailedDescription: {
      en: 'Strengthening intergenerational ties, encouraging companionship through shared stories and communal joy, and nurturing an enduring circle of care.',
      bn: 'নতুন প্রজন্মের সাথে সেতুবন্ধন তৈরি, গল্প ও স্মৃতি ভাগাভাগির মাধ্যমে নিঃসঙ্গতা দূরীকরণ এবং পারস্পরিক ভালোবাসার পরিমণ্ডল গড়ে তোলা।'
    },
    icon: Globe,
    tag: {
      en: 'Shared Togetherness',
      bn: 'আন্তরিক একাত্মতা'
    }
  }
];

/**
 * Core Values Section for Sonavan Old Rehabilitation Center About Us page.
 *
 * Requirements:
 * - Heading: "The Values That Guide Us"
 * - Subtitle: "Principles that can guide a respectful, compassionate, and accountable approach to supporting older adults."
 * - Six responsive cards: Dignity, Compassion, Respect, Inclusion, Accountability, Community
 * - Lucide icon, title, concise description, subtle hover effect
 * - Layout: 3 columns on desktop, 2 columns on tablet, 1 column on mobile
 * - Palette: Warm cream background (#FAF8F2), white cards, deep teal typography (#145B52), soft gold accents (#D6B56D)
 * - Complete Bangla & English translations
 * - Proposed values compliance badge & footnote
 */
export const AboutValuesSection: React.FC<AboutValuesSectionProps> = ({
  id = 'our-values',
  className = '',
  heading = {
    en: 'The Values That Guide Us',
    bn: 'যে মূল্যবোধগুলো আমাদের পথ দেখায়'
  },
  subtitle = {
    en: 'Principles that can guide a respectful, compassionate, and accountable approach to supporting older adults.',
    bn: 'প্রবীণদের সেবায় শ্রদ্ধাশীল, সহানুভূতিশীল ও দায়বদ্ধ পদক্ষেপ নিশ্চিত করতে সহায়ক মূলনীতিসমূহ।'
  },
  values = DEFAULT_VALUES,
  isDraftPendingApproval = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const headingText = heading[locale] || heading.en;
  const subtitleText = subtitle[locale] || subtitle.en;

  return (
    <section
      id={id}
      aria-label="Core Values"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Background Decorative Halos */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 bg-[#D6B56D]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#145B52]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow & Proposed Draft Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
              <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn ? 'আমাদের দিকনির্দেশক মূলনীতি' : 'OUR GUIDING PRINCIPLES'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            </div>

            {isDraftPendingApproval && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'প্রস্তাবিত খসড়া • সাংগঠনিক অনুমোদন সাপেক্ষে' : 'Proposed Values Pending Approval'}
                </span>
              </span>
            )}
          </div>

          {/* Heading */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {headingText}
          </h2>

          {/* Subtitle */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {subtitleText}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* 6 Responsive Values Cards: 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerCards}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8"
        >
          {values.map((item) => {
            const IconComponent = item.icon;
            const titleStr = item.title[locale] || item.title.en;
            const shortDescStr = item.shortDescription[locale] || item.shortDescription.en;
            const detailedDescStr = item.detailedDescription ? (item.detailedDescription[locale] || item.detailedDescription.en) : null;
            const tagStr = item.tag ? (item.tag[locale] || item.tag.en) : null;

            return (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between h-full p-6 sm:p-7 md:p-8 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/80 transition-all duration-300"
              >
                {/* Subtle top gold accent bar on card */}
                <div 
                  className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/0 to-transparent group-hover:via-[#D6B56D] transition-all duration-500 rounded-t-full" 
                  aria-hidden="true" 
                />

                {/* Card Top: Number badge, Icon & Tag */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    {/* Icon Container with subtle hover transition */}
                    <div className="w-13 h-13 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>

                    {/* Numeric Order Indicator */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#145B52]/10 text-xs font-bold text-[#145B52]/70 font-mono">
                      <span>{item.number}</span>
                    </div>
                  </div>

                  {/* Card Title & Short Statement */}
                  <div className="space-y-2">
                    <h3 className={`text-xl sm:text-2xl font-black text-[#145B52] group-hover:text-[#0E423B] tracking-tight leading-tight transition-colors ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {titleStr}
                    </h3>
                    
                    {/* Concise Core Statement */}
                    <p className={`text-sm sm:text-base font-bold text-[#145B52]/90 leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {shortDescStr}
                    </p>
                  </div>

                  {/* Soft-Gold Hairline Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-[#D6B56D]/40 via-[#145B52]/10 to-transparent" aria-hidden="true" />

                  {/* Detailed Accessible Explanation */}
                  {detailedDescStr && (
                    <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {detailedDescStr}
                    </p>
                  )}
                </div>

                {/* Card Footer: Tag & Micro Indicator */}
                <div className="pt-6 mt-6 border-t border-[#145B52]/5 flex items-center justify-between">
                  {tagStr && (
                    <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#FAF8F2] text-[#145B52] border border-[#145B52]/10 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {tagStr}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#145B52]/60 group-hover:text-[#145B52] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                    <span className={`text-[11px] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                      {isBn ? 'মূল লক্ষ্য' : 'Core Value'}
                    </span>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

        {/* Ethical Governance & Proposed Draft Footnote */}
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
              ? 'উল্লেখিত ছয়টি মূলনীতি সোনভান বৃদ্ধ পুনর্বাসন কেন্দ্রের জন্য প্রস্তাবিত নৈতিক দিকনির্দেশনা হিসেবে উপস্থাপন করা হয়েছে, যা পরিচালনা পর্ষদের আনুষ্ঠানিক অনুমোদনের অপেক্ষায় রয়েছে। এগুলো সেবা প্রদান ও প্রাতিষ্ঠানিক আচরণের কাঙ্ক্ষিত আদর্শ নির্দেশ করে।'
              : 'These six core values represent proposed institutional guidelines undergoing organizational review by the Sonavan Old Rehabilitation Center leadership. They articulate our desired ethical code of conduct and service orientation.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
