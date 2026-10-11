'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryImageItem } from './types';

export interface GalleryLightboxProps {
  isOpen: boolean;
  images: GalleryImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];
  const title = currentImage.title[locale] || currentImage.title.en;
  const caption = currentImage.caption?.[locale] || currentImage.caption?.en;
  const date = currentImage.date?.[locale] || currentImage.date?.en;
  const category = currentImage.category?.[locale] || currentImage.category?.en;
  const altText = currentImage.altText[locale] || currentImage.altText.en;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} - Lightbox`}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
        onClick={onClose}
      >
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl w-full bg-[#145B52]/90 border border-teal-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10 text-white select-none">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-[#D6B56D] bg-[#D6B56D]/15 px-2.5 py-1 rounded-full border border-[#D6B56D]/30">
                {currentIndex + 1} / {images.length}
              </span>

              {category && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-200 bg-teal-900/50 px-2.5 py-1 rounded-full border border-teal-700/50">
                  <Tag className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                  <span>{category}</span>
                </span>
              )}

              {date && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-200 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-700/40">
                  <Calendar className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                  <span>{date}</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label={isBn ? 'গ্যালারি উইন্ডো বন্ধ করুন' : 'Close gallery window'}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Display */}
          <div className="relative w-full h-[48vh] sm:h-[58vh] md:h-[62vh] bg-black/60 flex items-center justify-center overflow-hidden">
            <Image
              key={currentImage.id}
              src={currentImage.imageUrl}
              alt={altText}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-contain"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              type="button"
              aria-label={isBn ? 'পূর্ববর্তী ছবি' : 'Previous photograph'}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-[#145B52] transition-colors backdrop-blur-xs border border-white/15 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              aria-label={isBn ? 'পরবর্তী ছবি' : 'Next photograph'}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-[#145B52] transition-colors backdrop-blur-xs border border-white/15 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Information Drawer */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0F423C] to-[#0A2E2A] text-white border-t border-white/10 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className={`text-base sm:text-lg font-bold text-white tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {title}
              </h3>
              {date && (
                <span className="text-xs text-[#D6B56D] font-medium shrink-0">
                  {date}
                </span>
              )}
            </div>

            {caption && (
              <p className={`text-xs sm:text-sm text-teal-100/85 leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {caption}
              </p>
            )}

            {/* Privacy & Illustrative Disclaimer Footnote */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-teal-200/70 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                <span>
                  {isBn
                    ? 'প্রবীণদের মর্যাদা ও গোপনীয়তা নীতিমালার আওতায় প্রতীকী রূপরেখা প্রদর্শিত।'
                    : 'Curated under Senior Dignity & Privacy Policy as an illustrative atmosphere.'}
                </span>
              </div>
              <span className="text-white/40 text-[10px] hidden sm:inline">
                {isBn ? 'কী-বোর্ডের তীর বোতাম (← / →) দিয়ে ছবি পরিবর্তন করুন' : 'Use arrow keys (← / →) to browse'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
