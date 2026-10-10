'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FacilityImageItem } from './types';

export interface FacilitiesImageViewerModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: FacilityImageItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Accessible Keyboard-Driven Lightbox Modal for Facility Images
 * Supports:
 * - Escape key to close
 * - ArrowLeft / ArrowRight to navigate
 * - ARIA accessibility attributes and focus management
 */
export const FacilitiesImageViewerModal: React.FC<FacilitiesImageViewerModalProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNavigate
}) => {
  const { locale } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNavigate((currentIndex + 1) % images.length);
      }
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentItem = images[currentIndex];
  const title = currentItem.title[locale] || currentItem.title.en;
  const caption = currentItem.caption[locale] || currentItem.caption.en;
  const altText = currentItem.altText[locale] || currentItem.altText.en;
  const tag = currentItem.tag[locale] || currentItem.tag.en;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-teal-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#145B52] rounded-3xl overflow-hidden border border-amber-200/30 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-teal-950/70 border-b border-teal-900/40 text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-amber-200 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-300/30">
              {tag}
            </span>
            <span className="text-xs text-teal-200/80 font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label={locale === 'bn' ? 'ছবি বন্ধ করুন' : 'Close image viewer'}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-teal-950 flex items-center justify-center overflow-hidden">
          <Image
            src={currentItem.imageUrl}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label={locale === 'bn' ? 'পূর্ববর্তী ছবি' : 'Previous image'}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-teal-950/80 hover:bg-teal-900 border border-white/20 text-white flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label={locale === 'bn' ? 'পরবর্তী ছবি' : 'Next image'}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-teal-950/80 hover:bg-teal-900 border border-white/20 text-white flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Modal Bottom Caption Bar */}
        <div className="p-4 sm:p-5 bg-[#FAF8F2] text-[#242B29] space-y-1.5 border-t border-amber-200/40">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-black text-[#145B52]">
              {title}
            </h3>
            <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
              <Info className="w-3 h-3 text-amber-700" />
              <span>{locale === 'bn' ? 'প্রতীকী রূপরেখা' : 'Illustrative Visual'}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
