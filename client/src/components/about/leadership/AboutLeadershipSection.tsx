'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, ShieldAlert, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutLeadershipSectionProps } from './types';
import { APPROVED_LEADERSHIP_PROFILES } from './data';
import { LeadershipProfileCard } from './LeadershipProfileCard';
import { LeadershipNotice } from './LeadershipNotice';
import { GovernanceSubsection } from './GovernanceSubsection';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const AboutLeadershipSection: React.FC<AboutLeadershipSectionProps> = ({
  id = 'leadership-governance',
  className = '',
  profiles = APPROVED_LEADERSHIP_PROFILES,
  showGovernance = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const hasProfiles = profiles && profiles.length > 0;

  return (
    <section 
      id={id}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
              <Users className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'নেতৃত্ব ও প্রাতিষ্ঠানিক সুশাসন' : 'LEADERSHIP & GOVERNANCE'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'দায়িত্বশীল ব্যবস্থাপনা' : 'Ethical Management'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn ? 'আমাদের লক্ষ্য ও সেবায় নিবেদিত মানুষ' : 'The People Behind Our Mission'}
          </h2>

          {/* Subtitle */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'প্রবীণদের মর্যাদা, শারীরিক স্বস্তি ও আন্তরিক সংহতি নিশ্চিত করতে সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের পরিচালনা পর্ষদ ও দায়িত্বশীল তত্ত্বাবধায়ন ব্যবস্থা।'
              : 'Dedicated leadership, compassionate caregivers, and accredited governance committed to uplifting older adults with respect, dignity, and transparent oversight.'}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* Leadership Profiles Grid OR Pending Verification Notice */}
        <div className="space-y-6">
          {hasProfiles ? (
            /* Responsive 3-Column on lg, 2-Column on md, 1-Column on sm/mobile */
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={staggerCards}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {profiles.map((profile) => (
                <LeadershipProfileCard key={profile.id} profile={profile} />
              ))}
            </motion.div>
          ) : (
            /* Dignified Verification Notice displayed when individual profiles are awaiting formal confirmation */
            <LeadershipNotice />
          )}
        </div>

        {/* Optional Governance Subsection */}
        {showGovernance && (
          <GovernanceSubsection />
        )}

        {/* Ethical Governance & Truthfulness Footnote */}
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
              ? 'প্রাতিষ্ঠানিক সত্যতা ও সুশাসন নিশ্চয়তা: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কেবল পরিচালনা পর্ষদ কর্তৃক অনুমোদিত প্রাতিষ্ঠানিক তথ্য ও নথিভুক্ত বিবরণ প্রকাশ করে। কোনো অসত্যায়িত ব্যক্তিত্ব বা মনগড়া পদবি ব্যবহার করা কঠোরভাবে নিষিদ্ধ।'
              : 'Governance & Verification Assurance: Sonavan Old Rehabilitation Center strictly publishes verified institutional leadership data approved by the Board of Trustees. Fabricating committee members, credentials, or honorary titles without formal ratification is strictly prohibited.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
