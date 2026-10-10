'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryImageItem } from './types';

export interface GalleryLightboxModalProps {
  isOpen: boolean;
  images: GalleryImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

/**
 * Keyboard-Accessible Lightbox Modal for Gallery Preview.
 * Handles:
 * - Escape key to close
 * - ArrowLeft and ArrowRight keys to browse
 * - Screen reader announcements
 * - Focus management & click outside
 */
export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const { locale } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];
  const title = currentImage.title[locale] || currentImage.title.en;
  const caption = currentImage.caption?.[locale] || currentImage.caption?.en;
  const altText = currentImage.altText[locale] || currentImage.altText.en;
  const categoryTag = currentImage.categoryTag?.[locale] || currentImage.categoryTag?.en;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full bg-[#145B52]/20 border border-teal-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Counter & Close */}
        <div className="flex items-center justify-between p-4 bg-black/40 text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-300">
              {currentIndex + 1} / {images.length}
            </span>
            {categoryTag && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-200">
                <Tag className="w-3 h-3 text-amber-300" />
                {categoryTag}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label={locale === 'bn' ? 'ছবি ভিউয়ার বন্ধ করুন' : 'Close Image Viewer'}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Stage with Prev / Next Controls */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/60 flex items-center justify-center">
          <Image
            src={currentImage.imageUrl}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label={locale === 'bn' ? 'পূর্ববর্তী ছবি' : 'Previous Image'}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer border border-white/10"
          >
            <ChevronLeft className="w-6 h-6 text-amber-200" />
          </button>

          <button
            onClick={handleNext}
            aria-label={locale === 'bn' ? 'পরবর্তী ছবি' : 'Next Image'}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer border border-white/10"
          >
            <ChevronRight className="w-6 h-6 text-amber-200" />
          </button>
        </div>

        {/* Bottom Caption & Disclosure */}
        <div className="p-4 sm:p-5 bg-black/75 text-white border-t border-white/10 space-y-1 text-left">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-base sm:text-lg font-bold text-teal-100">{title}</h4>
            {currentImage.isIllustrative && (
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-300/30 px-2 py-0.5 rounded-full shrink-0">
                {locale === 'bn' ? 'প্রতীকী রূপরেখা' : 'Illustrative Visual'}
              </span>
            )}
          </div>
          {caption && <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{caption}</p>}
        </div>
      </div>
    </div>
  );
};
