'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Activity, 
  Smile, 
  Utensils, 
  HeartPulse, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceCategoryItem } from './types';
import { DEFAULT_SERVICE_CATEGORIES_DATA } from './data';

const iconMap = {
  HeartHandshake,
  Activity,
  Smile,
  Utensils,
  HeartPulse,
  Users,
};

interface ServiceCategoryCardProps {
  category: ServiceCategoryItem;
  index: number;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category, index }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const IconComponent = iconMap[category.iconName] || HeartHandshake;
  const title = category.title[locale] || category.title.en;
  const description = category.description[locale] || category.description.en;
  const availability = category.availabilityLabel[locale] || category.availabilityLabel.en;
  const altText = category.imageAlt[locale] || category.imageAlt.en;
  const learnMoreLabel = DEFAULT_SERVICE_CATEGORIES_DATA.learnMoreText[locale] || DEFAULT_SERVICE_CATEGORIES_DATA.learnMoreText.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  return (
    <motion.article
      id={category.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative h-full flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-[#145B52]/10 hover:border-[#D6B56D]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden scroll-mt-28"
    >
      {/* Top Media & Availability Badge */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0E423B]">
        <Image
          src={category.imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay for Text Readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
          aria-hidden="true" 
        />

        {/* Floating Availability Label Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145B52]/90 backdrop-blur-md border border-[#D6B56D]/40 text-[#FAF8F2] text-[11px] font-bold tracking-wide shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56D] animate-pulse" aria-hidden="true" />
            <span className={fontClass}>{availability}</span>
          </span>
        </div>

        {/* Floating Category Icon Button */}
        <div className="absolute bottom-3.5 right-3.5 z-10 w-11 h-11 rounded-xl bg-[#FAF8F2] text-[#145B52] border border-[#145B52]/15 shadow-md flex items-center justify-center group-hover:bg-[#145B52] group-hover:text-[#FAF8F2] transition-colors duration-300">
          <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-3">
          {/* Category Number & Title */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B56D]">
              0{index + 1} • {isBn ? 'সেবা ক্ষেত্র' : 'Service Domain'}
            </span>
            <h3 className={`text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors duration-200 mt-1 ${fontClass}`}>
              {title}
            </h3>
          </div>

          {/* Two-Sentence Descriptive Copy */}
          <p className={`text-sm text-[#242B29]/80 leading-relaxed ${fontClass}`}>
            {description}
          </p>
        </div>

        {/* Action Link: Learn More */}
        <div className="pt-4 border-t border-[#145B52]/10 mt-auto">
          <Link
            href={category.href}
            className={`inline-flex items-center gap-2 text-sm font-extrabold text-[#145B52] group-hover:text-[#276749] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-md transition-colors ${fontClass}`}
          >
            <span>{learnMoreLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </motion.article>
  );
};
