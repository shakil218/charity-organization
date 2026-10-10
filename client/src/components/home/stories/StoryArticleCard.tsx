'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { StoryArticleItem } from './types';

export interface StoryArticleCardProps {
  article: StoryArticleItem;
  className?: string;
}

/**
 * Reusable Article Card for Stories & News.
 * Features:
 * - Consistent 16:10 aspect ratio image container with graceful fallback & hover zoom
 * - Category pill & honest sample disclosure badge
 * - Accessible <time> element with formatted date
 * - Semantic <article> wrapper with accessible aria-label
 * - Smooth hover state and micro-interactions
 */
export const StoryArticleCard: React.FC<StoryArticleCardProps> = ({
  article,
  className = ''
}) => {
  const { locale } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const title = article.title[locale] || article.title.en;
  const summary = article.summary[locale] || article.summary.en;
  const category = article.category[locale] || article.category.en;
  const formattedDate = article.formattedDate[locale] || article.formattedDate.en;
  const readTime = article.readTime?.[locale] || article.readTime?.en;
  const imageAlt = article.imageAlt[locale] || article.imageAlt.en;
  const storyUrl = article.href || `/stories/${article.slug}`;

  return (
    <article
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-4 sm:p-5 md:p-4 lg:p-5 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.14)] hover:border-[#145B52]/40 transition-all duration-300 ${className}`}
      aria-labelledby={`article-title-${article.id}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      <div className="space-y-4">
        {/* Cover Image Container with Consistent Aspect Ratio (16:10) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#F2ECE0] border border-amber-200/60">
          {!imageError ? (
            <Image
              src={article.coverImage}
              alt={imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#FAF8F2] to-[#EAE4D5] text-[#145B52]">
              <Sparkles className="w-8 h-8 text-[#D6B56D] mb-1 opacity-80" />
              <span className="text-xs font-bold">{title}</span>
            </div>
          )}

          {/* Skeleton loader before image loads */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-[#EAE4D5] animate-pulse" />
          )}

          {/* Top Badges Bar: Unified flex container preventing overlaps on compact 3-col grids */}
          <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
            <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold tracking-wide uppercase bg-white/95 backdrop-blur-xs text-[#145B52] border border-amber-200/90 shadow-2xs truncate max-w-[70%]">
              {category}
            </span>

            {article.isDemo && (
              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-semibold bg-[#145B52]/90 backdrop-blur-xs text-amber-200 border border-[#D6B56D]/40 shadow-2xs shrink-0 whitespace-nowrap">
                <span>{locale === 'bn' ? 'নমুনা বার্তা' : 'Preview'}</span>
              </span>
            )}
          </div>
        </div>

        {/* Article Meta: Accessible Date & Read Time */}
        <header className="flex items-center justify-between text-xs text-[#242B29]/70 pt-0.5">
          <time
            dateTime={article.publishedAt}
            className="flex items-center gap-1.5 font-medium text-[#242B29]/80"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D6B56D] shrink-0" aria-hidden="true" />
            <span>{formattedDate}</span>
          </time>

          {readTime && (
            <span className="flex items-center gap-1 text-[11px] text-[#242B29]/60 font-normal">
              <Clock className="w-3 h-3 text-[#145B52]/50" aria-hidden="true" />
              <span>{readTime}</span>
            </span>
          )}
        </header>

        {/* Title & Short Summary */}
        <div className="space-y-2">
          <h3
            id={`article-title-${article.id}`}
            className="text-base sm:text-lg md:text-[15px] lg:text-lg font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug line-clamp-2"
          >
            <Link
              href={storyUrl}
              className="hover:underline focus:outline-hidden focus:ring-2 focus:ring-[#145B52]/40 rounded-xs"
            >
              {title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#242B29]/75 leading-relaxed line-clamp-3">
            {summary}
          </p>
        </div>
      </div>

      {/* Footer CTA: Read Story Link */}
      <footer className="pt-4 mt-4 border-t border-amber-100 flex items-center justify-between">
        <Link
          href={storyUrl}
          aria-label={`${locale === 'bn' ? 'গল্প পড়ুন' : 'Read Story'}: ${title}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#145B52]/40 rounded-sm"
        >
          <span className="group-hover:underline underline-offset-4">
            {locale === 'bn' ? 'গল্প পড়ুন' : 'Read Story'}
          </span>
          <ArrowRight
            className="w-3.5 h-3.5 text-[#D6B56D] transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        {/* Small subtle indicator */}
        <span className="text-[10px] text-[#242B29]/50 font-medium">
          {locale === 'bn' ? 'বিস্তারিত' : 'Full Article'}
        </span>
      </footer>
    </article>
  );
};
