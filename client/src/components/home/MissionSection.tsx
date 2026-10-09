'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Heart, Award, ShieldCheck, Users } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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

export const MissionSection: React.FC = () => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <motion.section
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white rounded-3xl border border-teal-900/10 p-8 sm:p-12 shadow-sm space-y-8">

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider bg-[#F2ECE0] px-3 py-1 rounded-md border border-amber-200">
            {locale === 'bn' ? 'আমাদের মূল রূপকল্প' : 'Our Verified Mission & Values'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#145B52]">
            {locale === 'bn' ? 'কেন প্রবীণদের বিশেষ পরিচর্যা প্রয়োজন?' : 'The Importance of Dignified Senior Care'}
          </h2>
          <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed">
            {locale === 'bn'
              ? 'জীবনপ্রদ্বীপে এসে নিঃসঙ্গতা, শারীরিক জটিলতা ও আশ্রয়ের অভাবে অনেক প্রবীণ পিতামাতা অসহায় হয়ে পড়েন। সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) তাদের সম্মানজনক জীবন, উন্নত চিকিৎসাসেবা ও মানবিক সাহচর্য উপহার দিতে বদ্ধপরিকর।'
              : 'Aging presents physical, emotional, and social vulnerabilities. SORC stands committed to protecting senior dignity, restoring health through physical therapy, and providing a loving community shelter.'}
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 space-y-2 transition-shadow hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center font-bold">
              <Heart className="w-5 h-5 fill-[#D6B56D]/30" />
            </div>
            <h3 className="text-base font-bold text-[#145B52]">
              {locale === 'bn' ? 'সহমর্মিতা' : 'Compassion'}
            </h3>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn' ? 'প্রতিটি প্রবীণ সদস্যকে নিজের পরিবারের অভিভাবক হিসেবে সেবা প্রদান।' : 'Treating every resident senior with deep familial love and warmth.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 space-y-2 transition-shadow hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#145B52]">
              {locale === 'bn' ? 'মর্যাদা' : 'Dignity'}
            </h3>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn' ? 'বার্ধক্যজনিত স্বাধীন চলাফেরা ও সামাজিক সম্মান সমুন্নত রাখা।' : 'Upholding independence, choice, and social respect for aging seniors.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 space-y-2 transition-shadow hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#145B52]">
              {locale === 'bn' ? 'নিরাপত্তা' : 'Safety'}
            </h3>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn' ? '২৪ ঘণ্টা ডাক্তার পর্যবেক্ষণ ও প্রবীণবান্ধব নিরাপদ অবকাঠামো।' : '24/7 medical oversight and elder-accessible indoor spaces.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 space-y-2 transition-shadow hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#145B52]">
              {locale === 'bn' ? 'সামাজিক অন্তর্ভুক্ত' : 'Community'}
            </h3>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {locale === 'bn' ? 'স্বেচ্ছাসেবক ও নতুন প্রজন্মের সাথে সামাজিক গল্পের আসর।' : 'Intergenerational storytelling and community volunteer support.'}
            </p>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
};
