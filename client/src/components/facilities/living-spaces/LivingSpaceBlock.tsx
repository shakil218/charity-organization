'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { LivingSpaceBlockProps } from './types';

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const LivingSpaceBlock: React.FC<LivingSpaceBlockProps> = ({
  space,
  locale,
  isReversed,
  index
}) => {
  const title = space.title[locale] || space.title.en;
  const tag = space.categoryTag[locale] || space.categoryTag.en;
  const description = space.description[locale] || space.description.en;
  const statusBadge = space.statusBadge ? (space.statusBadge[locale] || space.statusBadge.en) : null;
  const inquiryNote = space.inquiryNote ? (space.inquiryNote[locale] || space.inquiryNote.en) : null;
  const disclaimer = space.photoDisclaimer ? (space.photoDisclaimer[locale] || space.photoDisclaimer.en) : null;
  const altText = space.imageAlt[locale] || space.imageAlt.en;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20`}
    >
      {/* 1. Photograph Column (5 or 6 cols on md & lg) */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="w-full md:w-1/2 relative group"
      >
        <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-teal-950/5 border-2 border-teal-900/10 shadow-lg hover:shadow-xl transition-all duration-300">
          <Image
            src={space.imageSrc}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />

          {/* Soft Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Tag & Number Pill */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#145B52] text-xs font-bold shadow-sm border border-teal-900/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" />
              <span>{tag}</span>
            </span>

            <span className="w-7 h-7 rounded-full bg-teal-950/80 backdrop-blur-md text-[#D6B56D] font-mono text-xs font-bold flex items-center justify-center border border-[#D6B56D]/30 shadow-sm">
              0{index + 1}
            </span>
          </div>

          {/* Bottom Illustrative Photo Disclaimer Pill */}
          {disclaimer && (
            <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 backdrop-blur-md text-teal-100 text-[11px] font-medium border border-teal-800/40 shadow-sm truncate max-w-full">
                <Info className="w-3 h-3 text-[#D6B56D] flex-shrink-0" />
                <span className="truncate">{disclaimer}</span>
              </span>
            </div>
          )}
        </div>

        {/* Decorative Gold Accent Badge Behind Corner */}
        <div
          className={`absolute -bottom-3 ${
            isReversed ? '-left-3' : '-right-3'
          } w-24 h-24 bg-[#D6B56D]/15 rounded-3xl -z-10 pointer-events-none blur-xs`}
          aria-hidden="true"
        />
      </motion.div>

      {/* 2. Text & Description Column (6 cols on md & lg) */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="w-full md:w-1/2 space-y-4 md:space-y-5"
      >
        {/* Status / Category Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {statusBadge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145B52]/10 text-[#145B52] text-xs font-bold border border-[#145B52]/15">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#145B52]" />
              <span>{statusBadge}</span>
            </span>
          )}
          <span className="text-xs text-teal-900/60 font-medium">
            {locale === 'bn' ? 'সোনাভান ক্যাম্পাস • গাজীপুর' : 'Sonavan Campus • Gazipur'}
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#145B52] tracking-tight leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal">
          {description}
        </p>

        {/* Accessibility Details Chips */}
        {space.accessibilityFeatures && space.accessibilityFeatures.length > 0 && (
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-bold text-[#145B52] uppercase tracking-wider flex items-center gap-1.5">
              <span>{locale === 'bn' ? 'সুবিধাসমূহ ও এক্সেসিবিলিটি রূপরেখা' : 'Accessibility & Living Highlights'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2.5">
              {space.accessibilityFeatures.map((feat) => {
                const FeatIcon = feat.icon || CheckCircle2;
                return (
                  <div
                    key={feat.id}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-teal-900/10 shadow-xs text-xs text-[#242B29]/85"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#145B52]/10 text-[#145B52] flex items-center justify-center flex-shrink-0">
                      <FeatIcon className="w-3.5 h-3.5 text-[#145B52]" />
                    </div>
                    <span className="font-medium leading-snug">{feat.label[locale] || feat.label.en}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Inquiry / Intake Note */}
        {inquiryNote && (
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-amber-900">
                {locale === 'bn' ? 'প্রশাসনিক তথ্য: ' : 'Administrative Note: '}
              </strong>
              {inquiryNote}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
