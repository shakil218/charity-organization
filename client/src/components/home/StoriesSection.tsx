'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';

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

export const StoriesSection: React.FC = () => {
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
      className="bg-[#FAF8F2] py-12 border-y border-teal-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider bg-[#F2ECE0] px-3 py-1 rounded-md border border-amber-200">
              {locale === 'bn' ? 'সাম্প্রতিক খবর' : 'Recent Announcements'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#145B52] mt-2">
              {t.storiesPage.title}
            </h2>
          </div>
          <Link href="/stories" className="text-xs font-bold text-[#145B52] underline">
            {locale === 'bn' ? 'সব গল্প দেখুন' : 'View All Stories'}
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate={isScrollingUp ? 'visible' : undefined}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.storiesPage.articles.map((art, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border border-teal-900/10 shadow-sm space-y-2 hover:shadow-md transition">
              <span className="text-xs font-bold text-[#276749]">{art.category} • {art.date}</span>
              <h3 className="text-lg font-bold text-[#145B52]">{art.title}</h3>
              <p className="text-xs text-[#242B29]/75">{art.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
