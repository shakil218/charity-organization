'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FinalCTAMedia: React.FC = () => {
  const { locale } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto md:max-w-none lg:max-w-none flex items-center justify-center">
      {/* Decorative Background Shapes */}
      <div
        className="absolute -top-10 -right-10 w-64 h-64 bg-[#D6B56D]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 -left-8 w-60 h-60 bg-[#276749]/30 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Gold Border Frame */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D6B56D]/40 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.35)] bg-[#0E423B] group">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.12] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.18,
            transition: { duration: 3, ease: 'easeOut' },
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=900"
            alt={
              locale === 'bn'
                ? 'প্রবীণদের সাথে সম্মান ও ভালোবাসাপূর্ণ সান্নিধ্যের প্রতীকী দৃশ্যপট'
                : 'Authentic community moment of care and respectful companionship with older adults'
            }
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 480px"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>

        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#0E423B] animate-pulse" />
        )}

        {/* Gradient Overlay for Edge Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Floating Dignity & Belonging Pill */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#145B52] border border-amber-200 shadow-md">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" aria-hidden="true" />
            <span className="text-xs font-bold">
              {locale === 'bn' ? 'মর্যাদা ও একাত্মতা' : 'Dignity & Belonging'}
            </span>
          </div>
        </div>

        {/* Subtle Disclosure Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#145B52]/90 backdrop-blur-md text-amber-200 border border-[#D6B56D]/40 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
            <span>{locale === 'bn' ? 'প্রতীকী চিত্র' : 'Illustrative'}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
