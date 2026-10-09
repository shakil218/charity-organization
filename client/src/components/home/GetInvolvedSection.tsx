'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Heart, Users, Building } from 'lucide-react';

interface GetInvolvedSectionProps {
  onOpenDonateModal?: () => void;
}

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

export const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({ onOpenDonateModal }) => {
  const { locale, t } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <motion.section
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
    >
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#145B52]">
          {t.getInvolvedPage.title}
        </h2>
        <p className="text-sm text-[#242B29]/70">
          {t.getInvolvedPage.subtitle}
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-4 hover:shadow-xl transition-all">
          <Heart className="w-8 h-8 text-[#145B52]" />
          <h3 className="text-xl font-bold text-[#145B52]">
            {locale === 'bn' ? 'অনুদানে সাহায্য' : 'Make a Donation'}
          </h3>
          <p className="text-xs text-[#242B29]/75 leading-relaxed">
            {locale === 'bn' ? 'একজন প্রবীণের মাসিক চিকিৎসা ও পুষ্টিকর খাবারের স্পন্সর হোন।' : 'Sponsor monthly doctor fees, medicines, and specialized organic meals.'}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenDonateModal?.()}
            className="w-full py-2.5 rounded-xl bg-[#145B52] text-white text-xs font-bold shadow-md hover:bg-[#0E423B] transition cursor-pointer"
          >
            {t.nav.donate}
          </motion.button>
        </motion.div>

        <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-4 hover:shadow-xl transition-all">
          <Users className="w-8 h-8 text-[#145B52]" />
          <h3 className="text-xl font-bold text-[#145B52]">
            {locale === 'bn' ? 'স্বেচ্ছাসেবক হোন' : 'Become a Volunteer'}
          </h3>
          <p className="text-xs text-[#242B29]/75 leading-relaxed">
            {locale === 'bn' ? 'আপনার সময় ও দক্ষতা প্রবীণদের আনন্দময় দিন উপহার দিতে ব্যয় করুন।' : 'Offer companionship, medical care assistance, or social outreach support.'}
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/volunteer"
              className="block text-center py-2.5 rounded-xl bg-[#276749] text-white text-xs font-bold shadow-md hover:bg-[#1E4D2B] transition"
            >
              {t.volunteerPage.submitBtn}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="bg-[#FAF8F2] p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-4 hover:shadow-xl transition-all">
          <Building className="w-8 h-8 text-[#145B52]" />
          <h3 className="text-xl font-bold text-[#145B52]">
            {locale === 'bn' ? 'প্রাতিষ্ঠানিক অংশীদারিত্ব' : 'CSR Partnerships'}
          </h3>
          <p className="text-xs text-[#242B29]/75 leading-relaxed">
            {locale === 'bn' ? 'করপোরেট সিএসআর অনুদানের মাধ্যমে ক্লিনিক ও বাসস্থান সম্প্রসারণ করুন।' : 'Partner via corporate CSR programs to sponsor medical infrastructure.'}
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="block text-center py-2.5 rounded-xl bg-white border border-gray-300 text-[#145B52] text-xs font-bold hover:bg-[#F2ECE0] transition"
            >
              {locale === 'bn' ? 'যোগাযোগ করুন' : 'Contact Partnerships'}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
