'use client';

import React from 'react';
import Image from 'next/image';
import { HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface WhyChooseUsImageProps {
  imageSrc?: string;
  className?: string;
}

/**
 * Right-column Image Composition for Why Choose Us Section
 * Displays a warm, authentic photograph of elder companionship with rounded corners,
 * ambient background glows, gold decorative borders, and a floating respect & care badge.
 */
export const WhyChooseUsImage: React.FC<WhyChooseUsImageProps> = ({
  imageSrc = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  className = ''
}) => {
  const { locale } = useLanguage();

  return (
    <div className={`relative mx-auto w-full max-w-lg lg:max-w-none ${className}`}>
      {/* Decorative Ambient Teal & Gold Glow Frame */}
      <div className="absolute -inset-2.5 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#145B52]/15 via-[#D6B56D]/25 to-[#276749]/15 blur-2xl pointer-events-none" />

      {/* Main Image Frame */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/40 shadow-xl bg-teal-950 aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/3.8]">
        <Image
          src={imageSrc}
          alt={
            locale === 'bn'
              ? 'সোনাভান কেন্দ্রে প্রবীণ সদস্যদের আন্তরিক যত্ন, শ্রদ্ধা ও মানবিক সাহচর্য'
              : 'Compassionate senior companion care and respectful assistance at Sonavan Old Rehabilitation Center'
          }
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
          priority={false}
        />

        {/* Soft Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/20 to-transparent pointer-events-none" />

        {/* Top-Right Decorative Gold & Teal Accent Tag */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-teal-900/80 backdrop-blur-md border border-[#D6B56D]/50 shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" />
          <span className="text-[11px] font-bold text-amber-100 tracking-wide">
            {locale === 'bn' ? 'মানবিক মূল্যবোধ' : 'Ethical Values'}
          </span>
        </div>

        {/* Floating Bottom-Left Respect & Companionship Badge */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/90 shadow-xl flex items-center gap-3 max-w-[calc(100%-2rem)]">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#145B52] text-amber-200 flex items-center justify-center shrink-0 shadow-xs">
            <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-black text-[#145B52] leading-tight truncate">
              {locale === 'bn' ? 'শ্রদ্ধা ও মানবিক সান্নিধ্য' : 'Respect & Human Connection'}
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#242B29]/70 leading-tight truncate">
              {locale === 'bn' ? 'প্রবীণদের সেবায় আমাদের অঙ্গীকার' : 'Guiding our daily elder support'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
