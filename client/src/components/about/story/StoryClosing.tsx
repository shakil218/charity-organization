'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { HeartHandshake, ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface StoryClosingProps {
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
 * Section 4: Closing paragraph about the organization's continuing purpose.
 * Expresses continuous caregiver devotion, community partnership, and enduring dignity.
 */
export const StoryClosing: React.FC<StoryClosingProps> = ({ className = '' }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      className={`relative max-w-4xl mx-auto rounded-3xl bg-white p-7 sm:p-9 md:p-10 border border-[#145B52]/15 shadow-[0_6px_24px_-4px_rgba(20,91,82,0.08)] overflow-hidden ${className}`}
    >
      {/* Top Subtle Gold Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#145B52] via-[#D6B56D] to-[#276749]" 
        aria-hidden="true" 
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        
        {/* Emblem */}
        <div className="w-14 h-14 rounded-2xl bg-[#145B52] border border-[#D6B56D]/40 text-[#D6B56D] flex items-center justify-center shrink-0 shadow-md">
          <HeartHandshake className="w-7 h-7" aria-hidden="true" />
        </div>

        {/* Content Area */}
        <div className="space-y-2 flex-1">
          <span className={`text-xs font-bold text-[#276749] tracking-wider uppercase ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn ? 'ভবিষ্যতের পথচলা • OUR CONTINUING PURPOSE' : 'CONTINUING OUR PURPOSE'}
          </span>
          <h3 className={`text-xl sm:text-2xl font-black text-[#145B52] tracking-tight leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn 
              ? 'মর্যাদাপূর্ণ প্রবীণ জীবন নিশ্চিতে আমাদের অবিচল অঙ্গীকার' 
              : 'Dedicated to Preserving Dignity in Every Season of Life'}
          </h3>
          <p className={`text-xs sm:text-sm md:text-base text-[#242B29]/80 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'অতীত ও বর্তমানের প্রতিটি অভিজ্ঞতাকে ধারণ করে সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র প্রতিদিন নতুন ভালোবাসায় এগিয়ে যাচ্ছে। আমাদের লক্ষ্য কেবল নিরাপদ আশ্রয় প্রদান নয়, বরং প্রতিটি প্রবীণ নাগরিকের জীবনে শারীরিক স্বস্তি, মানসিক প্রশান্তি এবং সামাজিক মেলবন্ধনের স্থায়ী নিশ্চয়তা দেওয়া। আগামী দিনগুলোতেও আমরা এই মানবিক ব্রতে দৃঢ় সংকল্পবদ্ধ।'
              : 'Drawing from every compassionate experience, Sonavan Old Rehabilitation Center moves forward each day with renewed devotion. Our enduring purpose reaches beyond providing physical shelter—we strive to foster genuine joy, compassionate healthcare, and sincere human dignity for all seniors who call this sanctuary home.'}
          </p>
        </div>
      </div>

      {/* Bottom Engagement Strip */}
      <div className="mt-6 pt-5 border-t border-[#145B52]/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-medium text-[#242B29]/70">
          <Heart className="w-4 h-4 text-[#D6B56D] fill-[#D6B56D]" aria-hidden="true" />
          <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
            {isBn ? 'একত্রে আমরা প্রবীণদের মুখে হাসি ফোটাতে পারি' : 'Together, we uphold a community of care and dignity'}
          </span>
        </div>

        <Link
          href="/get-involved"
          className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E423B] group ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
        >
          <span>{isBn ? 'আমাদের কার্যক্রমে যুক্ত হোন' : 'Join Our Efforts'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};
