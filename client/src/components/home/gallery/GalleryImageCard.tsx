'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryImageItem } from './types';

export interface GalleryImageCardProps {
  image: GalleryImageItem;
  isFeatured?: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * Accessible Gallery Image Card.
 * Features:
 * - Rounded corners with restrained hover zoom (scale-105)
 * - Accessible keyboard trigger (Enter/Space opens lightbox)
 * - Lazy loaded with optimized sizes query
 * - Short caption overlay with gradient protection
 * - Privacy-protecting illustrative disclosure badge
 */
export const GalleryImageCard: React.FC<GalleryImageCardProps> = ({
  image,
  isFeatured = false,
  onClick,
  className = ''
}) => {
  const { locale } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const title = image.title[locale] || image.title.en;
  const caption = image.caption?.[locale] || image.caption?.en;
  const altText = image.altText[locale] || image.altText.en;
  const categoryTag = image.categoryTag?.[locale] || image.categoryTag?.en;

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
      aria-label={`${title} - ${locale === 'bn' ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to view full photo'}`}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-300 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 ${
        isFeatured
          ? 'rounded-3xl shadow-[0_4px_24px_-4px_rgba(20,91,82,0.1)] hover:shadow-[0_16px_36px_-6px_rgba(20,91,82,0.18)]'
          : 'rounded-2xl shadow-[0_2px_16px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.14)]'
      } border border-amber-200/70 bg-[#F2ECE0] ${className}`}
    >
      {/* Background Image Container */}
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px]">
        {!hasError ? (
          <Image
            src={image.imageUrl}
            alt={altText}
            fill
            loading="lazy"
            sizes={
              isFeatured
                ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
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

        {/* Pulse Skeleton Placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EAE4D5] animate-pulse" />
        )}

        {/* Top Floating Pill: Tag & Illustrative Disclosure */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          {categoryTag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#145B52] border border-amber-200 shadow-2xs">
              <Tag className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
              <span>{categoryTag}</span>
            </span>
          )}

          {image.isIllustrative && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-semibold bg-[#145B52]/90 backdrop-blur-xs text-amber-200 border border-[#D6B56D]/40 shadow-2xs shrink-0">
              <span>{locale === 'bn' ? 'প্রতীকী দৃশ্য' : 'Illustrative'}</span>
            </span>
          )}
        </div>

        {/* Expand / Maximize Hover Button */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full bg-[#145B52]/90 text-white flex items-center justify-center shadow-md hover:bg-[#0E423B] transition">
            <Maximize2 className="w-4 h-4 text-amber-200" aria-hidden="true" />
          </div>
        </div>

        {/* Dark Gradient Overlay for Caption Readability */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-12 pb-4 px-4 sm:px-5 flex flex-col justify-end text-white">
          <h3
            className={`font-bold leading-snug drop-shadow-xs ${
              isFeatured ? 'text-base sm:text-xl lg:text-2xl mb-1' : 'text-sm sm:text-base mb-0.5 line-clamp-1'
            }`}
          >
            {title}
          </h3>

          {caption && (
            <p
              className={`text-white/85 leading-relaxed font-normal drop-shadow-xs ${
                isFeatured
                  ? 'text-xs sm:text-sm line-clamp-2'
                  : 'text-[11px] sm:text-xs line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity'
              }`}
            >
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
