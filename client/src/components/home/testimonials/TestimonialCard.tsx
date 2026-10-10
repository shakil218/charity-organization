'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, User, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TestimonialItem } from './types';

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

/**
 * Accessible Testimonial Card for verified public feedback.
 * Features:
 * - Semantic <blockquote> for quote
 * - Teal quotation icon
 * - Author name / approved anonymous label
 * - Relationship to the organization
 * - Optional portrait image with graceful fallback to monogram avatar
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = ''
}) => {
  const { locale } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const quote = testimonial.quote[locale] || testimonial.quote.en;
  const authorName = testimonial.authorName[locale] || testimonial.authorName.en;
  const relationship = testimonial.relationship[locale] || testimonial.relationship.en;
  const location = testimonial.location?.[locale] || testimonial.location?.en;

  // Extract initials for fallback avatar
  const initials = authorName
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <article
      className={`group relative flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_14px_30px_-6px_rgba(20,91,82,0.12)] hover:border-[#145B52]/40 transition-all duration-300 ${className}`}
    >
      {/* Top subtle gold decorative accent edge on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        aria-hidden="true"
      />

      <div className="space-y-4">
        {/* Teal Quotation Icon */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] group-hover:bg-[#145B52] group-hover:text-amber-200 transition-colors duration-300">
            <Quote className="w-5 h-5" aria-hidden="true" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-[#145B52] bg-[#FAF8F2] px-3 py-1 rounded-full border border-amber-200/80">
            {relationship}
          </span>
        </div>

        {/* Approved Quote */}
        <blockquote className="text-xs sm:text-sm text-[#242B29]/85 leading-relaxed font-normal italic">
          “{quote}”
        </blockquote>
      </div>

      {/* Author Details with Optional Portrait */}
      <footer className="pt-4 mt-4 border-t border-amber-100/90 flex items-center gap-3">
        {testimonial.portraitUrl && !imageError ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-200 shrink-0">
            <Image
              src={testimonial.portraitUrl}
              alt={authorName}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#145B52]/25 flex items-center justify-center text-[#145B52] font-bold text-xs shrink-0 shadow-2xs">
            {initials ? initials : <User className="w-4 h-4 text-[#145B52]" aria-hidden="true" />}
          </div>
        )}

        <div className="min-w-0">
          <cite className="not-italic text-sm font-bold text-[#145B52] block truncate">
            {authorName}
          </cite>
          <div className="flex items-center gap-2 text-[11px] text-[#242B29]/65">
            <span>{relationship}</span>
            {location && (
              <>
                <span>•</span>
                <span className="flex items-center gap-0.5 truncate">
                  <MapPin className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                  {location}
                </span>
              </>
            )}
          </div>
        </div>
      </footer>
    </article>
  );
};
