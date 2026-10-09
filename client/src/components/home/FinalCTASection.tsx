'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';

interface FinalCTASectionProps {
  onOpenDonateModal?: () => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenDonateModal }) => {
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#145B52] to-[#276749] text-white p-8 sm:p-14 shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F2]">
            {locale === 'bn' ? 'আজই প্রবীণদের পাশে দাঁড়ান' : 'Stand Beside Our Senior Parents Today'}
          </h2>
          <p className="text-sm text-teal-100/90 leading-relaxed">
            {locale === 'bn'
              ? 'আপনার সামান্য সহায়তায় একজন প্রবীণ পেতে পারেন একটি সুন্দর সম্মানজনক ঠিকানা ও সুচিকিৎসা।'
              : 'Your kindness ensures continuous medical treatment, dignified shelter, and lifelong care.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenDonateModal?.()}
            className="px-8 py-3.5 rounded-xl bg-[#D6B56D] hover:bg-[#C5A154] text-teal-950 font-bold text-sm shadow-md transition cursor-pointer"
          >
            {locale === 'bn' ? 'এখনই অনুদান দিন' : 'Make a Donation Now'}
          </motion.button>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm backdrop-blur-md transition"
            >
              {t.nav.contact}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
