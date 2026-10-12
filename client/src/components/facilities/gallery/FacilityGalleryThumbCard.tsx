'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Tag, ShieldCheck, Sparkles } from 'lucide-react';
import { FacilityGalleryThumbCardProps } from './types';

export const FacilityGalleryThumbCard: React.FC<FacilityGalleryThumbCardProps> = ({
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
      aria-label={`${title} (${categoryLabel}) - ${isBn ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to enlarge photo'}`}
      className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-[#145B52]/15 hover:border-[#D6B56D] bg-[#F2ECE0] shadow-[0_2px_16px_-4px_rgba(20,91,82,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.18)] focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 flex flex-col"
    >
      {/* Aspect Ratio Container for Grid Photos */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden min-h-[220px]">
        {!hasError ? (
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-cover transition-transform duration-600 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF8F2] to-[#EAE4D5] text-[#145B52]">
            <Sparkles className="w-8 h-8 text-[#D6B56D] mb-1 opacity-80" />
            <span className="text-xs font-bold">{title}</span>
          </div>
        )}

        {/* Pulse Skeleton Placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EAE4D5] animate-pulse" />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#145B52] border border-[#145B52]/15 shadow-2xs shrink-0 whitespace-nowrap">
            <Tag className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
            <span>{categoryLabel}</span>
          </span>

          {image.isIllustrative && (
            <span
              title={
                isBn
                  ? 'প্রবীণদের গোপনীয়তা নীতি অনুযায়ী পরিবেশের প্রতীকী চিত্র'
                  : 'Illustrative environment respecting privacy'
              }
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-semibold bg-emerald-950/80 backdrop-blur-xs text-emerald-100 border border-emerald-500/30 shadow-2xs shrink-0 whitespace-nowrap"
            >
              <ShieldCheck className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
              <span className="hidden sm:inline">
                {isBn ? 'প্রতীকী চিত্র' : 'Illustrative'}
              </span>
            </span>
          )}
        </div>

        {/* Hover/Tap Quick Expand Overlay */}
        <div className="absolute inset-0 bg-teal-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-[#145B52]/90 backdrop-blur-xs flex items-center justify-center text-white border border-[#D6B56D]/50 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
            <Maximize2 className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Gradient Overlay for Visual Grounding */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 sm:p-4 pt-10 flex items-end justify-between gap-2 text-white">
          <div className="space-y-0.5 max-w-[85%]">
            <h4
              className={`text-sm sm:text-base font-bold text-white leading-tight drop-shadow-2xs group-hover:text-[#D6B56D] transition-colors line-clamp-1 ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {title}
            </h4>

            {caption && (
              <p
                className={`text-[11px] sm:text-xs text-white/85 line-clamp-1 sm:line-clamp-2 leading-relaxed font-normal ${
                  isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
                }`}
              >
                {caption}
              </p>
            )}
          </div>

          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 group-hover:bg-[#D6B56D] group-hover:text-[#145B52] transition-colors shadow-2xs">
            <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
