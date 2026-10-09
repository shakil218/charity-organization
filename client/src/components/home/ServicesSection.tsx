'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Activity, Heart, Utensils, Smile, ArrowRight } from 'lucide-react';

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

export const ServicesSection: React.FC = () => {
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider bg-[#F2ECE0] px-3 py-1 rounded-md border border-amber-200">
            {locale === 'bn' ? 'আমাদের সেবাসমূহ' : 'Our Comprehensive Services'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#145B52]">
            {t.servicesPage.title}
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#145B52] hover:text-[#0E423B] transition underline underline-offset-4"
        >
          <span>{locale === 'bn' ? 'সকল সেবা বিস্তারিত দেখুন' : 'Explore All Services'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <motion.div
        initial="hidden"
        animate={isScrollingUp ? 'visible' : undefined}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {t.servicesPage.items.map((service, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-3xl border border-teal-900/10 shadow-sm space-y-3 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F2ECE0] flex items-center justify-center">
              {idx === 0 && <Activity className="w-6 h-6 text-[#145B52]" />}
              {idx === 1 && <Heart className="w-6 h-6 text-[#145B52]" />}
              {idx === 2 && <Utensils className="w-6 h-6 text-[#145B52]" />}
              {idx === 3 && <Smile className="w-6 h-6 text-[#145B52]" />}
            </div>
            <h3 className="text-lg font-bold text-[#145B52]">{service.title}</h3>
            <p className="text-xs text-[#242B29]/75 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
