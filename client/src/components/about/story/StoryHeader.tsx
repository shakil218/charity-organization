'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, History } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface StoryHeaderProps {
  className?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

/**
 * Section 1: Introduction to the organization's journey
 * Introduces Sonavan Old Rehabilitation Center's humanitarian dedication to seniors.
 */
export const StoryHeader: React.FC<StoryHeaderProps> = ({ className = '' }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      {/* Eyebrow Pill */}
      <motion.div variants={fadeInUp} className="inline-flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
          <History className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
          <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
            {isBn ? 'আমাদের পথচলা ও ইতিহাস' : 'OUR JOURNEY & HISTORY'}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
        </div>
      </motion.div>

      {/* Main Section Heading */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-[1.2] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {isBn 
            ? 'সহমর্মিতার পথ ধরে: সোনাভান সেন্টারের ইতিহাস' 
            : 'Our Story & Historical Journey'}
        </h2>
        <p className={`text-base sm:text-lg font-bold text-[#276749] ${isBn ? 'font-[family-name:var(--font-inter)]' : 'font-[family-name:var(--font-hind-siliguri)]'}`}>
          {isBn ? 'Sonavan Old Rehabilitation Center (SORC)' : 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র'}
        </p>
      </motion.div>

      {/* Narrative Introduction */}
      <motion.p 
        variants={fadeInUp}
        className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
      >
        {isBn
          ? 'প্রবীণদের জন্য নিরাপদ, মর্যাদাপূর্ণ ও মমতাময় আবাসন গড়ে তোলার আন্তরিক তাগিদ থেকেই আমাদের পথচলার সূচনা। প্রতিটি পদক্ষেপে আমাদের সর্বোচ্চ অগ্রাধিকার হলো অভিভাবকহীন ও শারীরিক-মানসিকভাবে দুর্বল প্রবীণদের সুরক্ষা, স্বাস্থ্যসেবা ও পারিবারিক স্নেহ নিশ্চিত করা।'
          : 'Sonavan Old Rehabilitation Center was envisioned with a single humanitarian focus: to create a safe, dignified sanctuary where older adults are treated with profound respect, attentive medical oversight, and family-like warmth throughout their later years.'}
      </motion.p>
    </div>
  );
};
