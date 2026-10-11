'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles, 
  Mail 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutCommunitySectionProps } from './types';
import { DEFAULT_COMMUNITY_CARDS, APPROVED_PARTNERS } from './data';
import { CommunityCard } from './CommunityCard';
import { PartnerLogoStrip } from './PartnerLogoStrip';

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

export const AboutCommunitySection: React.FC<AboutCommunitySectionProps> = ({
  id = 'community-partnerships',
  className = '',
  cards = DEFAULT_COMMUNITY_CARDS,
  approvedPartners = APPROVED_PARTNERS,
  showPartnerStrip = true
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

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
              <span>{isBn ? 'সামাজিক সম্পৃক্ততা ও অংশীদারিত্ব' : 'COMMUNITY & PARTNERSHIPS'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'ঐক্যবদ্ধ সামাজিক প্রয়াস' : 'Collaborative Compassion'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn ? 'একসাথে শক্তিশালী সমাজ ও সংহতি' : 'Stronger Communities, Together'}
          </h2>

          {/* Description Paragraph */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'সামাজিক অংশগ্রহণ ও পারস্পরিক সহযোগিতা প্রবীণদের জন্য আরো সহানুভূতিশীল ও মানবিক পরিবেশ গড়ে তুলতে সহায়ক ভূমিকা পালন করে।'
              : 'Community participation and collaboration can help create more supportive environments for older adults.'}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* 3 Responsive Cards Grid (3 on md and lg, 1 on mobile) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerCards}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8"
        >
          {cards.map((card) => (
            <CommunityCard key={card.id} card={card} />
          ))}
        </motion.div>

        {/* Optional Partner-Logo Strip / Open Partnership Invitation Banner */}
        {showPartnerStrip && (
          <PartnerLogoStrip partners={approvedPartners} />
        )}

        {/* Bottom Comprehensive Engagement Action Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp}
          className="p-7 md:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#145B52] to-[#0E423B] text-white shadow-lg space-y-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#D6B56D] text-xs font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{isBn ? 'আপনার ভূমিকা অনন্য' : 'Make an Impact Today'}</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-black text-white tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn ? 'প্রবীণদের সেবায় আমাদের সাথে যুক্ত হোন' : 'Join Our Mission of Dignity & Companionship'}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal">
              {isBn
                ? 'স্বেচ্ছাসেবক হিসেবে সময় দিন কিংবা প্রাতিষ্ঠানিক অংশীদারিত্বের মাধ্যমে প্রবীণদের জীবনে আন্তরিক ভালোবাসার ছোঁয়া এনে দিন।'
                : 'Whether volunteering conversational hours or developing corporate partnerships, your collaboration strengthens the safety and joy of elder residents.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto md:w-auto">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D6B56D] hover:bg-[#C4A35B] text-[#145B52] text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>{isBn ? 'যুক্ত হওয়ার উপায় দেখুন' : 'Get Involved'}</span>
              <ArrowRight className="w-4 h-4 text-[#145B52] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-bold transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
            </Link>
          </div>
        </motion.div>

        {/* Ethical Reporting & Prudence Footnote */}
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
              ? 'প্রাতিষ্ঠানিক সত্যনিষ্ঠা অঙ্গীকার: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো কাল্পনিক অংশীদারিত্ব, মনগড়া স্পন্সরশিপ বা অপ্রমাণিত সামাজিক উদ্যোগ প্রচার করে না। এখানে বর্ণিত ক্ষেত্রগুলো জনসাধারণের সম্পৃক্ততার উন্মুক্ত সুযোগ নির্দেশ করে।'
              : 'Institutional Integrity Assurance: Sonavan Old Rehabilitation Center never claims fabricated partnerships, sponsorships, or completed initiatives. All presented programs represent active opportunities and structured pathways for ethical community collaboration.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
