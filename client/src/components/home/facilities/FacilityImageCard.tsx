'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2, Sparkles, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FacilityImageItem } from './types';

export interface FacilityImageCardProps {
  image: FacilityImageItem;
  onClick: () => void;
  isFeatured?: boolean;
  className?: string;
}

/**
 * Reusable FacilityImageCard Component
 * Displays an environment photograph in a premium editorial aesthetic with rounded corners,
 * subtle borders, illustrative badge, descriptive caption, and keyboard-accessible expand button.
 */
export const FacilityImageCard: React.FC<FacilityImageCardProps> = ({
  image,
  onClick,
  isFeatured = false,
  className = ''
}) => {
  const { locale } = useLanguage();
  const title = image.title[locale] || image.title.en;
  const caption = image.caption[locale] || image.caption.en;
  const altText = image.altText[locale] || image.altText.en;
  const tag = image.tag[locale] || image.tag.en;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  if (isFeatured) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-label={`${title} (${locale === 'bn' ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to enlarge'})`}
        className={`group relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/45 shadow-xl bg-teal-950 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#145B52]/30 transition-all duration-300 ${className}`}
      >
        {/* Featured Image Container */}
        <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] w-full">
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/30 to-transparent pointer-events-none" />

          {/* Top-Left Featured Concept Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/92 backdrop-blur-md border border-amber-200/80 shadow-md flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#145B52]" />
            <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider">
              {tag}
            </span>
          </div>

          {/* Top-Right Expand Action Button */}
          <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-2xl bg-teal-950/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#145B52] transition-all">
            <Maximize2 className="w-4 h-4 text-amber-200" />
          </div>

          {/* Bottom Captions & Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-amber-200 bg-amber-500/25 px-2.5 py-0.5 rounded-full border border-amber-300/40 uppercase tracking-wide">
                {locale === 'bn' ? 'প্রতীকী রূপরেখা' : 'Illustrative Visual'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#FAF8F2] tracking-tight leading-snug drop-shadow-sm">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal max-w-xl line-clamp-2">
              {caption}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Smaller Image Card
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${title} (${locale === 'bn' ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to enlarge'})`}
      className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-amber-200/80 shadow-[0_4px_16px_-4px_rgba(20,91,82,0.05)] hover:shadow-[0_12px_24px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/35 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#145B52]/30 transition-all duration-300 ${className}`}
    >
      <div className="space-y-3">
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-teal-950/10 border border-teal-900/10">
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 767px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent pointer-events-none" />

          {/* Top-Left Tag */}
          <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-200/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#145B52] uppercase tracking-wider">
              {tag}
            </span>
          </div>

          {/* Top-Right Expand Icon */}
          <div className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-xl bg-teal-950/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xs group-hover:bg-[#145B52] transition-colors">
            <Maximize2 className="w-3.5 h-3.5 text-amber-200" />
          </div>
        </div>

        {/* Card Copy */}
        <div className="space-y-1 px-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-sm sm:text-base font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug truncate">
              {title}
            </h4>
            <span className="text-[9px] font-semibold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200 shrink-0 flex items-center gap-0.5">
              <Info className="w-2.5 h-2.5 text-amber-700" />
              <span>{locale === 'bn' ? 'প্রতীকী' : 'Concept'}</span>
            </span>
          </div>
          <p className="text-xs text-[#242B29]/75 leading-relaxed line-clamp-2">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
