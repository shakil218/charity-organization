'use client';

import React from 'react';
import Image from 'next/image';
import { Eye, CheckCircle2 } from 'lucide-react';
import { FacilityCardProps } from './types';

export const FacilityCard: React.FC<FacilityCardProps> = ({
  facility,
  locale,
  onViewPhoto
}) => {
  const title = facility.name[locale] || facility.name.en;
  const category = facility.category[locale] || facility.category.en;
  const description = facility.description[locale] || facility.description.en;
  const badgeText = facility.badge ? (facility.badge[locale] || facility.badge.en) : null;
  const altText = facility.imageAlt ? (facility.imageAlt[locale] || facility.imageAlt.en) : title;
  const Icon = facility.icon;

  const handlePhotoClick = () => {
    if (onViewPhoto && facility.imageUrl) {
      onViewPhoto(facility);
    }
  };

  return (
    <article
      className="group relative flex flex-col h-full bg-white rounded-3xl border border-teal-900/10 shadow-sm hover:shadow-md hover:border-teal-900/25 transition-all duration-300 overflow-hidden"
      aria-labelledby={`facility-title-${facility.id}`}
    >
      {/* Top Image or Icon Area */}
      <div className="relative aspect-[16/10] w-full bg-teal-950/5 overflow-hidden">
        {facility.imageUrl ? (
          <>
            <Image
              src={facility.imageUrl}
              alt={altText}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-teal-900/5 text-[#145B52]">
            <Icon className="w-16 h-16 opacity-30" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#145B52] text-xs font-semibold shadow-sm border border-teal-900/10">
            <Icon className="w-3.5 h-3.5 text-[#145B52]" />
            <span>{category}</span>
          </span>

          {badgeText && (
            <span className="px-2.5 py-1 rounded-full bg-teal-950/80 backdrop-blur-md text-[#D6B56D] text-xs font-medium border border-[#D6B56D]/30 shadow-sm">
              {badgeText}
            </span>
          )}
        </div>

        {/* View Photo Floating Overlay Button (Visible if Image Available) */}
        {facility.imageUrl && onViewPhoto && (
          <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePhotoClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-teal-950 text-xs font-medium shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#145B52]"
              aria-label={`${locale === 'bn' ? 'ছবি দেখুন:' : 'View photo of'} ${title}`}
            >
              <Eye className="w-3.5 h-3.5 text-[#145B52]" />
              <span>{locale === 'bn' ? 'ছবি দেখুন' : 'View Photo'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>{locale === 'bn' ? 'যাচাইকৃত সুবিধা' : 'Verified Amenity'}</span>
            </span>
          </div>

          <h3
            id={`facility-title-${facility.id}`}
            className="text-xl font-bold text-[#145B52] tracking-tight group-hover:text-[#0e3f39] transition-colors leading-snug"
          >
            {title}
          </h3>

          <p className="text-sm text-[#242B29]/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-teal-900/10 flex items-center justify-between text-xs text-[#242B29]/60">
          <span className="italic">
            {locale === 'bn' ? 'প্রবীণবান্ধব পরিবেশ' : 'Senior-friendly design'}
          </span>

          {facility.imageUrl && onViewPhoto && (
            <button
              onClick={handlePhotoClick}
              className="font-medium text-[#145B52] hover:text-[#0e3f39] hover:underline flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#145B52] rounded"
            >
              <span>{locale === 'bn' ? 'বিস্তারিত ছবি' : 'Enlarge'}</span>
              <Eye className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
