'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Maximize2, 
  Sparkles, 
  Calendar, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryImageItem } from './types';

export interface GalleryImageCardProps {
  image: GalleryImageItem;
  isFeatured?: boolean;
  onClick: () => void;
  className?: string;
}

export const GalleryImageCard: React.FC<GalleryImageCardProps> = ({
  image,
  isFeatured = false,
  onClick,
  className = ''
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const title = image.title[locale] || image.title.en;
  const caption = image.caption?.[locale] || image.caption?.en;
  const date = image.date?.[locale] || image.date?.en;
  const category = image.category?.[locale] || image.category?.en;
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
      aria-label={`${title} ${date ? `(${date})` : ''} - ${isBn ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to expand photo'}`}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-300 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 border border-[#145B52]/15 bg-[#F2ECE0] ${
        isFeatured
          ? 'rounded-3xl shadow-[0_4px_24px_-4px_rgba(20,91,82,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(20,91,82,0.2)] hover:border-[#D6B56D]/80'
          : 'rounded-2xl shadow-[0_2px_16px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.16)] hover:border-[#D6B56D]/70'
      } ${className}`}
    >
      {/* Aspect Ratio Container for consistent image ratios */}
      <div className={`relative w-full h-full overflow-hidden ${isFeatured ? 'min-h-[280px] sm:min-h-[340px] md:min-h-[380px]' : 'min-h-[220px] sm:min-h-[240px]'}`}>
        {!hasError ? (
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            loading="lazy"
            sizes={
              isFeatured
                ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
            }
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF8F2] to-[#EAE4D5] text-[#145B52]">
            <Sparkles className="w-8 h-8 text-[#D6B56D] mb-2 opacity-80" />
            <span className="text-sm font-bold">{title}</span>
          </div>
        )}

        {/* Pulse Skeleton Placeholder while loading */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EAE4D5] animate-pulse" />
        )}

        {/* Top Badges (Category, Date, Illustrative Disclosure) */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex flex-wrap items-center gap-1.5">
            {category && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#145B52] border border-[#145B52]/15 shadow-2xs shrink-0 whitespace-nowrap">
                <Tag className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                <span>{category}</span>
              </span>
            )}

            {date && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#145B52]/90 backdrop-blur-xs text-white shadow-2xs shrink-0 whitespace-nowrap">
                <Calendar className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                <span>{date}</span>
              </span>
            )}
          </div>

          {/* Illustrative Atmosphere Pill */}
          {image.isIllustrative && (
            <span
              title={
                isBn
                  ? 'প্রবীণদের গোপনীয়তা রক্ষার্থে প্রতীকী চিত্র ব্যবহৃত'
                  : 'Illustrative atmosphere respecting resident privacy'
              }
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-semibold bg-emerald-900/80 backdrop-blur-xs text-emerald-100 border border-emerald-500/30 shadow-2xs shrink-0 whitespace-nowrap"
            >
              <ShieldCheck className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
              <span className="hidden sm:inline">
                {isBn ? 'প্রতীকী চিত্র' : 'Illustrative'}
              </span>
            </span>
          )}
        </div>

        {/* Bottom Gradient Overlay & Caption Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 sm:p-5 pt-12 flex items-end justify-between gap-3 text-white">
          <div className="space-y-1 max-w-[85%]">
            <h3 className={`text-sm sm:text-base font-bold text-white leading-snug drop-shadow-xs group-hover:text-[#D6B56D] transition-colors ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {title}
            </h3>

            {caption && (
              <p className={`text-[11px] sm:text-xs text-white/85 line-clamp-2 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {caption}
              </p>
            )}
          </div>

          {/* Quick Zoom Trigger Icon */}
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#D6B56D] group-hover:text-[#145B52] transition-colors shrink-0 shadow-xs">
            <Maximize2 className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
