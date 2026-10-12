'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Info, CheckCircle2 } from 'lucide-react';
import { FacilityPhotoModalProps } from './types';

export const FacilityPhotoModal: React.FC<FacilityPhotoModalProps> = ({
  facility,
  isOpen,
  locale,
  onClose
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Auto-focus close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !facility) return null;

  const title = facility.name[locale] || facility.name.en;
  const category = facility.category[locale] || facility.category.en;
  const description = facility.description[locale] || facility.description.en;
  const disclaimer = facility.photoDisclaimer
    ? facility.photoDisclaimer[locale] || facility.photoDisclaimer.en
    : locale === 'bn'
    ? 'প্রবীণদের সেবায় আমাদের পরিবেশগত মানদণ্ডের প্রতীকী চিত্র।'
    : 'Illustrative visual representation of our senior living standards.';
  const altText = facility.imageAlt
    ? facility.imageAlt[locale] || facility.imageAlt.en
    : title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-teal-950/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="facility-modal-title"
      aria-describedby="facility-modal-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl bg-[#FAF8F2] rounded-3xl overflow-hidden shadow-2xl border border-teal-900/20 max-h-[90vh] flex flex-col animate-scale-up">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-teal-900/10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#145B52]/10 text-[#145B52] text-xs font-semibold">
              {category}
            </span>
            <span className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{locale === 'bn' ? 'যাচাইকৃত সুবিধা' : 'Verified Amenity'}</span>
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full text-teal-900/60 hover:text-teal-950 hover:bg-teal-900/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#145B52]"
            aria-label={locale === 'bn' ? 'ছবি বন্ধ করুন' : 'Close photo preview'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative w-full aspect-[16/10] bg-teal-950 overflow-hidden">
          {facility.imageUrl ? (
            <Image
              src={facility.imageUrl}
              alt={altText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-teal-900/10 text-[#145B52]">
              <facility.icon className="w-16 h-16 opacity-40" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Title on image overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h2 id="facility-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Body / Information */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <p id="facility-modal-desc" className="text-base text-[#242B29]/90 leading-relaxed">
            {description}
          </p>

          {/* Accuracy & Illustrative Note */}
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold">{locale === 'bn' ? 'প্রতীকী চিত্র বিজ্ঞপ্তি: ' : 'Illustrative Photo Note: '}</strong>
              {disclaimer}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-teal-900/10 flex items-center justify-between text-xs text-[#242B29]/70">
          <span>{locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র • গাজীপুর সদর' : 'Sonavan Old Rehabilitation Center • Gazipur Sadar'}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#145B52] hover:bg-[#0f443d] text-white font-medium transition-colors"
          >
            {locale === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
