'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Tag, ShieldCheck, Sparkles } from 'lucide-react';
import { FacilityGalleryFeaturedCardProps } from './types';

export const FacilityGalleryFeaturedCard: React.FC<FacilityGalleryFeaturedCardProps> = ({
  image,
  locale,
  onClick
}) => {
  const isBn = locale === 'bn';
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const title = image.title[locale] || image.title.en;
  const caption = image.caption?.[locale] || image.caption?.en;
  const categoryLabel = image.categoryLabel[locale] || image.categoryLabel.en;
  const altText = image.altText[locale] || image.altText.en;
  const disclaimer = image.disclaimer?.[locale] || image.disclaimer?.en;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${title} - ${isBn ? 'বড় আকারে দেখতে ক্লিক করুন' : 'Click to view full photo'}`}
      className="group relative w-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-[#145B52]/15 hover:border-[#D6B56D] bg-[#F2ECE0] shadow-[0_4px_24px_-4px_rgba(20,91,82,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(20,91,82,0.22)] focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52] focus-visible:ring-offset-2"
    >
      {/* Aspect Ratio Container for Featured Photo */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[300px] sm:min-h-[380px] md:min-h-[440px] overflow-hidden">
        {!hasError ? (
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF8F2] to-[#EAE4D5] text-[#145B52]">
            <Sparkles className="w-10 h-10 text-[#D6B56D] mb-2" />
            <span className="text-base font-bold">{title}</span>
          </div>
        )}

        {/* Pulse Skeleton Placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EAE4D5] animate-pulse" />
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#145B52] border border-[#145B52]/20 shadow-sm shrink-0">
              <Tag className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{categoryLabel}</span>
            </span>

            {/* Featured Badge */}
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#145B52] text-[#D6B56D] border border-[#D6B56D]/40 shadow-sm shrink-0">
              <Sparkles className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'প্রধান আলোকচিত্র' : 'Featured Photograph'}</span>
            </span>
          </div>

          {/* Illustrative Disclaimer Tag */}
          {image.isIllustrative && (
            <span
              title={
                isBn
                  ? 'প্রবীণদের গোপনীয়তা নীতি অনুযায়ী পরিবেশের প্রতীকী চিত্র'
                  : 'Illustrative environment respecting privacy'
              }
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-100 border border-emerald-500/30 shadow-sm shrink-0"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span className="hidden sm:inline">
                {isBn ? 'প্রতীকী চিত্র' : 'Illustrative'}
              </span>
            </span>
          )}
        </div>

        {/* Bottom Dark Gradient Drawer */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 sm:p-7 md:p-8 pt-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
          <div className="space-y-1.5 max-w-3xl">
            <h3
              className={`text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#D6B56D] transition-colors ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {title}
            </h3>

            {caption && (
              <p
                className={`text-xs sm:text-sm text-teal-50/90 leading-relaxed font-normal max-w-2xl line-clamp-2 sm:line-clamp-none ${
                  isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
                }`}
              >
                {caption}
              </p>
            )}

            {disclaimer && (
              <p className="text-[11px] text-[#D6B56D]/90 pt-1 hidden sm:block">
                * {disclaimer}
              </p>
            )}
          </div>

          {/* Expand Button Indicator */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <span className="text-xs text-white/80 hidden md:inline group-hover:text-white transition-colors">
              {isBn ? 'বড় করে দেখুন' : 'View Full Image'}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D6B56D] group-hover:text-[#145B52] transition-colors shadow-md">
              <Maximize2 className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
