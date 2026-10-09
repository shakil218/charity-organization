'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Image as ImageIcon } from 'lucide-react';

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

export const PhotoGallerySection: React.FC = () => {
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#145B52]">
            {locale === 'bn' ? 'ক্যাম্পাস ও প্রবীণ পরিচর্যার গ্যালারি' : 'Campus & Care Photo Gallery'}
          </h2>
          <p className="text-xs text-[#242B29]/70">
            {locale === 'bn' ? 'সোনাভান কেন্দ্রের প্রাত্যহিক জীবনযাত্রার দৃশ্য।' : 'Snapshots of daily rehabilitation and resident wellness.'}
          </p>
        </div>
        <Link href="/facilities" className="text-xs font-bold text-[#145B52] hover:underline flex items-center gap-1">
          <ImageIcon className="w-4 h-4 text-[#D6B56D]" />
          <span>{locale === 'bn' ? 'সব ছবি দেখুন' : 'View All Photos'}</span>
        </Link>
      </div>

      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
            alt="Elderly Resident Care"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
            alt="Physiotherapy Activity"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} className="relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600"
            alt="Therapeutic Garden"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
