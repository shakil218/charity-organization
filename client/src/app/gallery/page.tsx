'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Camera, ShieldCheck } from 'lucide-react';
import {
  defaultGalleryImages,
  GalleryImageCard,
  GalleryLightboxModal
} from '@/components/home/gallery';

export default function GalleryPage() {
  const { locale } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = defaultGalleryImages;

  const handleOpenViewer = (index: number) => {
    setActiveImageIndex(index);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const handleNavigateViewer = (newIndex: number) => {
    setActiveImageIndex(newIndex);
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#145B52] to-[#276749] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6B56D]/30">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold">
            <Camera className="w-4 h-4 text-[#D6B56D]" />
            <span>{locale === 'bn' ? 'আলোকচিত্র সংগ্রহশালা' : 'Community Gallery'}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F2]">
            {locale === 'bn' ? 'আমাদের প্রাঙ্গণ ও জীবনের খণ্ডচিত্র' : 'A Glimpse Into Our Community'}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed max-w-2xl mx-auto">
            {locale === 'bn'
              ? 'প্রবীণদের প্রতিদিনের শান্ত সান্নিধ্য, আন্তরিক পরিচর্যা ও ভালোবাসাময় পরিবেশের আলোকচিত্র সংগ্রহ।'
              : 'Moments of peaceful companionship, quiet reflection, and respectful care shared in our daily routine.'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <GalleryImageCard
              key={img.id}
              image={img}
              isFeatured={idx === 0}
              onClick={() => handleOpenViewer(idx)}
              className="h-full min-h-[260px]"
            />
          ))}
        </div>

        {/* Privacy & Photography Disclaimer */}
        <div className="mt-12 rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-5 flex items-start gap-3.5 text-left">
          <div className="w-9 h-9 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#145B52]">
              {locale === 'bn' ? 'ব্যক্তিগত গোপনীয়তা ও সততা নীতি' : 'Privacy & Dignity Safeguard Policy'}
            </h4>
            <p className="text-xs text-[#242B29]/75 leading-relaxed mt-1">
              {locale === 'bn'
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র প্রবীণ সদস্যদের মানবিক মর্যাদা ও গোপনীয়তা কঠোরভাবে রক্ষা করে। আনুষ্ঠানিক সম্মতি ছাড়া কোনো শনাক্তযোগ্য ছবি প্রচার করা হয় না।'
                : 'To protect the privacy and dignity of elderly residents, Sonavan Old Rehabilitation Center never publishes identifiable photographs without documented consent. Visuals represent our peaceful community atmosphere.'}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightboxModal
        isOpen={isViewerOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={handleCloseViewer}
        onNavigate={handleNavigateViewer}
      />
    </div>
  );
}
