'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  HandHelping, 
  Network, 
  Target, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutGoalsSectionProps, ObjectiveCardItem } from './types';

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

const DEFAULT_OBJECTIVES: ObjectiveCardItem[] = [
  {
    id: 'promote-dignity',
    number: '01',
    title: {
      en: 'Promote dignity and respect for older adults.',
      bn: 'প্রবীণদের মর্যাদা ও শ্রদ্ধাবোধ সমুন্নত রাখা।'
    },
    shortExplanation: {
      en: 'Cultivating a compassionate culture where seniors are honored for their lifetime contributions and supported with patient empathy.',
      bn: 'এমন এক শ্রদ্ধাশীল পরিবেশ নিশ্চিত করা যেখানে প্রবীণদের দীর্ঘ জীবনের অবদানকে আন্তরিক সম্মানের সাথে চিরস্মরণীয় রাখা হয়।'
    },
    icon: ShieldCheck,
    tag: {
      en: 'Core Respect',
      bn: 'মৌলিক মর্যাদা'
    },
    detailLink: {
      label: {
        en: 'Explore our mission',
        bn: 'আমাদের মিশন জানুন'
      },
      href: '#our-mission'
    }
  },
  {
    id: 'social-inclusion',
    number: '02',
    title: {
      en: 'Encourage social inclusion and community participation.',
      bn: 'সামাজিক অন্তর্ভুক্তি ও সার্বজনীন অংশগ্রহণ উৎসাহিত করা।'
    },
    shortExplanation: {
      en: 'Facilitating shared experiences and intergenerational bonds so no older adult experiences isolation, stigma, or loneliness.',
      bn: 'পারস্পরিক মিথস্ক্রিয়া ও প্রজন্মগত সেতুবন্ধন জোরদার করা, যাতে কোনো প্রবীণ মানুষ একাকীত্ব বা নিঃসঙ্গতায় না ভোগেন।'
    },
    icon: Users,
    tag: {
      en: 'Social Belonging',
      bn: 'সামাজিক একাত্মতা'
    },
    detailLink: {
      label: {
        en: 'Our guiding values',
        bn: 'আমাদের মূল্যবোধ দেখুন'
      },
      href: '#our-values'
    }
  },
  {
    id: 'assistance-resources',
    number: '03',
    title: {
      en: 'Support access to appropriate assistance and resources.',
      bn: 'প্রয়োজনীয় সহায়তা ও সার্বিক সম্পদে সুগম প্রবেশাধিকার।'
    },
    shortExplanation: {
      en: 'Connecting seniors and caregivers with respectful shelter, daily living support, and dependable community guidance.',
      bn: 'প্রবীণ সদস্য ও তাদের পরিবারকে নিরাপদ আশ্রয়, দৈনন্দিন সেবা সহায়তা এবং নির্ভরযোগ্য দিকনির্দেশনার সাথে সংযুক্ত করা।'
    },
    icon: HandHelping,
    tag: {
      en: 'Shelter & Care',
      bn: 'আশ্রয় ও সেবা'
    },
    detailLink: {
      label: {
        en: 'View facilities',
        bn: 'সুযোগ-সুবিধা দেখুন'
      },
      href: '#services-section'
    }
  },
  {
    id: 'responsible-engagement',
    number: '04',
    title: {
      en: 'Strengthen responsible community engagement.',
      bn: 'দায়িত্বশীল সামাজিক সম্পৃক্ততা ও নাগরিক সংহতি।'
    },
    shortExplanation: {
      en: 'Collaborating with volunteers, families, and civic stakeholders with complete operational honesty and ethical governance.',
      bn: 'স্বেচ্ছাসেবক, সমাজহিতৈষী ও পরিবারের সাথে সততা, নৈতিক দায়বদ্ধতা ও স্বচ্ছতার সাথে যৌথ সেবামূলক প্রয়াস পরিচালনা।'
    },
    icon: Network,
    tag: {
      en: 'Ethical Partnership',
      bn: 'নাগরিক অংশীদারিত্ব'
    },
    detailLink: {
      label: {
        en: 'Join as a volunteer',
        bn: 'যুক্ত হোন আমাদের সাথে'
      },
      href: '/get-involved'
    }
  }
];

/**
 * Goals & Objectives Section for Sonavan Old Rehabilitation Center About Us page.
 *
 * Requirements:
 * - Heading: "Our Goals and Objectives"
 * - Introduction: "Clear goals help an organization turn its purpose into practical, accountable action."
 * - 4 Objective Cards:
 *    1. Promote dignity and respect for older adults.
 *    2. Encourage social inclusion and community participation.
 *    3. Support access to appropriate assistance and resources.
 *    4. Strengthen responsible community engagement.
 * - Icon, title, short explanation, and optional detail link for each card.
 * - Clean grid layout: 4 columns on desktop, 2 on tablet, 1 on mobile.
 * - Subtle borders, cream surfaces, teal typography, and restrained gold accents.
 * - Compliance: Treat proposed objectives as draft content requiring organizational approval.
 *   Do not invent unverified deadlines, service targets, or measurable performance indicators.
 * - Full bilingual support (Bangla & English).
 */
export const AboutGoalsSection: React.FC<AboutGoalsSectionProps> = ({
  id = 'our-goals',
  className = '',
  heading = {
    en: 'Our Goals and Objectives',
    bn: 'আমাদের লক্ষ্য ও উদ্দেশ্যসমূহ'
  },
  introduction = {
    en: 'Clear goals help an organization turn its purpose into practical, accountable action.',
    bn: 'সুনির্দিষ্ট লক্ষ্য একটি সংস্থাকে তার উদ্দেশ্যকে বাস্তবসম্মত ও দায়বদ্ধ পদক্ষেপে রূপান্তর করতে সহায়তা করে।'
  },
  objectives = DEFAULT_OBJECTIVES,
  isDraftPendingApproval = true,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const headingText = heading[locale] || heading.en;
  const introText = introduction[locale] || introduction.en;

  return (
    <section
      id={id}
      aria-label="Goals and Objectives"
      className={`relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF8F2] border-t border-[#145B52]/10 overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Ambient Decorative Lighting */}
      <div 
        className="absolute top-1/3 -left-24 w-88 h-88 bg-[#D6B56D]/12 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#145B52]/6 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow & Draft Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
              <Target className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
              <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn ? 'কর্মপরিকল্পনা ও লক্ষ্যমাত্রা' : 'STRATEGIC OBJECTIVES'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            </div>

            {isDraftPendingApproval && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {isBn ? 'প্রস্তাবিত খসড়া • প্রাতিষ্ঠানিক অনুমোদন সাপেক্ষে' : 'Proposed Draft Pending Approval'}
                </span>
              </span>
            )}
          </div>

          {/* Heading */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {headingText}
          </h2>

          {/* Introduction Statement */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {introText}
          </p>

          {/* Gold Decorative Accent Line */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* Four Objective Cards Grid: 4 columns on lg/xl, 2 on md, 1 on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerCards}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6.5 xl:gap-7"
        >
          {objectives.map((item) => {
            const IconComponent = item.icon;
            const titleStr = item.title[locale] || item.title.en;
            const shortExplainStr = item.shortExplanation[locale] || item.shortExplanation.en;
            const tagStr = item.tag ? (item.tag[locale] || item.tag.en) : null;
            const linkObj = item.detailLink;

            return (
              <motion.article
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/80 transition-all duration-300"
              >
                {/* Gold Accent Bar on Card Top */}
                <div 
                  className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/0 to-transparent group-hover:via-[#D6B56D] transition-all duration-500 rounded-t-full" 
                  aria-hidden="true" 
                />

                <div className="space-y-4 sm:space-y-5">
                  {/* Card Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#145B52]/10 text-xs font-bold text-[#145B52]/70 font-mono">
                      <span>{item.number}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] tracking-tight leading-snug transition-colors ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                    {titleStr}
                  </h3>

                  {/* Subtle Hairline Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-[#D6B56D]/40 via-[#145B52]/10 to-transparent" aria-hidden="true" />

                  {/* Short Explanation */}
                  <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                    {shortExplainStr}
                  </p>
                </div>

                {/* Card Footer: Tag & Optional Detail Link */}
                <div className="pt-5 mt-5 border-t border-[#145B52]/5 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    {tagStr && (
                      <span className={`text-[10px] sm:text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-[#FAF8F2] text-[#145B52] border border-[#145B52]/10 ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                        {tagStr}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#145B52]/60 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                      <span>{isBn ? 'উদ্দেশ্য' : 'Objective'}</span>
                    </span>
                  </div>

                  {/* Optional Interactive Detail Link */}
                  {linkObj && (
                    <Link
                      href={linkObj.href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E423B] transition-colors pt-1"
                    >
                      <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                        {linkObj.label[locale] || linkObj.label.en}
                      </span>
                      {linkObj.isExternal ? (
                        <ExternalLink className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                      )}
                    </Link>
                  )}
                </div>

              </motion.article>
            );
          })}
        </motion.div>

        {/* Ethical Governance & Official Metrics Compliance Banner */}
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
              ? 'উপরোক্ত উদ্দেশ্যগুলো সোনভান বৃদ্ধ পুনর্বাসন কেন্দ্রের জন্য প্রস্তাবিত প্রাতিষ্ঠানিক লক্ষ্য হিসেবে খসড়া করা হয়েছে। আনুষ্ঠানিক অনুমোদন ব্যতীত কোনো মনগড়া সময়সীমা বা কাল্পনিক কর্মক্ষমতা সূচক প্রকাশ করা হয়নি। পরিচালনা পর্ষদ কর্তৃক অনুমোদিত হওয়ার পর সুনির্দিষ্ট পরিমাপযোগ্য সূচক ও নিরীক্ষিত বার্ষিক লক্ষ্যমাত্রা এখানে অন্তর্ভুক্ত করা হবে।'
              : 'These objectives represent proposed institutional goals undergoing executive review by Sonavan Old Rehabilitation Center. In adherence to strict transparency standards, no unverified deadlines, service quotas, or arbitrary performance indicators have been asserted. Verified key performance indicators will be published upon formal board ratification.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
