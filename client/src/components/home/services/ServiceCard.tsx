'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceCategoryItem } from './types';

export interface ServiceCardProps {
  item: ServiceCategoryItem;
  className?: string;
}

/**
 * Reusable ServiceCard Component
 * Features consistent aspect-ratio image, floating teal icon badge, clear typography,
 * non-clinical descriptions, and accessible Learn More link.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ item, className = '' }) => {
  const { locale } = useLanguage();
  const IconComponent = item.icon;

  const title = item.title[locale] || item.title.en;
  const description = item.shortDescription[locale] || item.shortDescription.en;
  const imageAlt = item.imageAlt[locale] || item.imageAlt.en;
  const badge = item.badgeLabel?.[locale] || item.badgeLabel?.en;

  return (
    <div
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-5 sm:p-6 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/35 transition-all duration-300 ${className}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="space-y-4 sm:space-y-5">
        {/* Consistent Aspect-Ratio Image Container */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-teal-950/10 border border-teal-900/10">
          <Image
            src={item.imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Floating Badges Container: Horizontal on sm/md, Stacked vertically on lg */}
          <div className="absolute top-3 inset-x-3 z-10 flex items-start justify-between gap-1.5 lg:flex-col lg:items-start lg:gap-1.5 pointer-events-none">
            {/* Floating Category Pill */}
            {badge && (
              <div className="px-2.5 py-1 rounded-full bg-white/92 backdrop-blur-md border border-amber-200/80 shadow-2xs shrink-0">
                <span className="text-[10px] font-bold text-[#145B52] uppercase tracking-wider">
                  {badge}
                </span>
              </div>
            )}

            {/* Floating Proposed Status Indicator */}
            <div className="px-2 py-0.5 rounded-md bg-amber-900/75 backdrop-blur-md border border-amber-300/40 text-[9px] font-extrabold text-amber-100 uppercase tracking-wide shrink-0">
              {locale === 'bn' ? 'প্রস্তাবিত' : 'Proposed'}
            </div>
          </div>

          {/* Floating Deep Teal Icon Badge */}
          <div className="absolute -bottom-2 right-3 z-10 w-11 h-11 rounded-xl bg-[#145B52] text-[#FAF8F2] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0E423B] transition-all duration-300">
            <IconComponent className="w-5 h-5 text-amber-200" />
          </div>
        </div>

        {/* Card Content: Title & Description */}
        <div className="space-y-2 pt-1">
          <h3 className="text-lg sm:text-xl font-black text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer: "Learn More" Link */}
      <div className="mt-5 pt-3.5 border-t border-teal-900/10 flex items-center justify-between">
        <Link
          href={item.href}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#145B52] hover:text-[#276749] group/link transition-colors focus:outline-none focus:ring-2 focus:ring-[#145B52] focus:ring-offset-2 rounded-md"
        >
          <span>{locale === 'bn' ? 'বিস্তারিত দেখুন' : 'Learn More'}</span>
          <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>

        <span className="text-[11px] text-[#242B29]/50 font-medium">
          {locale === 'bn' ? 'কর্মসূচি রূপরেখা' : 'Service Outline'}
        </span>
      </div>
    </div>
  );
};
