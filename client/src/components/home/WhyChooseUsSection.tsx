'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { ShieldCheck, Heart, Building } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const WhyChooseUsSection: React.FC = () => {
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
      className="bg-[#F2ECE0]/60 py-16 border-y border-teal-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#145B52]">
            {locale === 'bn' ? 'কেন সোনাভান কেন্দ্র নির্ভরযোগ্য?' : 'Why Choose Sonavan Rehabilitation Center'}
          </h2>
          <p className="text-sm text-[#242B29]/70">
            {locale === 'bn' ? 'আমরা কেবল প্রতিশ্রুতি দিই না, প্রতিটি খরচের অডিট ও ছবি অনলাইনে প্রকাশ করি।' : 'Building lasting trust through complete public transparency, verified medical care, and continuous audits.'}
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 hover:shadow-md transition">
            <ShieldCheck className="w-8 h-8 text-[#145B52]" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? '১০০% অডিটকৃত পাবলিক লেজার' : '100% Audited Public Ledger'}
            </h3>
            <p className="text-xs text-[#242B29]/75 leading-relaxed">
              {locale === 'bn' ? 'প্রতিটি কেনাকাটার ভাউচার ও রসিদ ওয়েবসাইটে সকলের জন্য উন্মুক্ত।' : 'Every purchase receipt and medical expenditure voucher is publicly accessible.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 hover:shadow-md transition">
            <Heart className="w-8 h-8 text-[#145B52]" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? 'নিবেদিত প্রবীণ সেবিকা' : 'Dedicated Geriatric Nursing'}
            </h3>
            <p className="text-xs text-[#242B29]/75 leading-relaxed">
              {locale === 'bn' ? 'অভিজ্ঞ সেবিকা ও চিকিৎসকের সার্বক্ষণিক নিবিড় পরিচর্যা।' : 'Trained nurses and physical therapists ensuring continuous health care.'}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-3 hover:shadow-md transition">
            <Building className="w-8 h-8 text-[#145B52]" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? 'সবুজ স্বাস্থ্যকর ক্যাম্পাস' : 'Tranquil Green Campus'}
            </h3>
            <p className="text-xs text-[#242B29]/75 leading-relaxed">
              {locale === 'bn' ? 'কোলাহলমুক্ত প্রকৃতি ও উন্মুক্ত বাগানে নিয়মিত হাঁটার সুব্যবস্থা।' : 'Peaceful natural environment supporting fresh air and healthy morning walks.'}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};
