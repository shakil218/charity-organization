'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  ScrollText, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TimelineMilestone } from './types';
import { TimelineCard } from './TimelineCard';
import { archivalMilestoneSchemaTemplate } from './data';

export interface TimelineProps {
  milestones?: TimelineMilestone[];
  isDocumenting?: boolean;
  className?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerTimeline: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
};

/**
 * Reusable Timeline Component for Sonavan Old Rehabilitation Center
 *
 * Rules:
 * - If historical milestones are not yet supplied/verified by the organization, renders the verified placeholder:
 *   "Our story is being documented. Please check back for updates."
 * - Supports an optional interactive preview mode so trustees and developers can inspect the chronological layout.
 * - Mobile: Continuous vertical timeline on left with right-extending cards.
 * - Desktop/MD: Centered vertical alternating timeline with deep teal nodes and gold accents.
 */
export const Timeline: React.FC<TimelineProps> = ({
  milestones = [],
  isDocumenting = true,
  className = ''
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  // Allow previewing the chronological template structure if milestones is empty
  const [showArchivalPreview, setShowArchivalPreview] = useState(false);

  // Active items to display
  const activeMilestones = milestones.length > 0 
    ? milestones 
    : showArchivalPreview 
    ? archivalMilestoneSchemaTemplate 
    : [];

  const shouldShowPlaceholder = !showArchivalPreview && (isDocumenting || milestones.length === 0);

  return (
    <div className={`w-full ${className}`}>
      {shouldShowPlaceholder ? (
        /* ========================================================================= */
        /* ELEGANT PLACEHOLDER: "Our story is being documented."                    */
        /* ========================================================================= */
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-white via-[#FAF8F2] to-[#F2ECE0] p-7 sm:p-10 md:p-12 border-2 border-[#D6B56D]/40 shadow-xl overflow-hidden text-center space-y-6"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#D6B56D]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#145B52]/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Central Archival Insignia Icon */}
          <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#145B52] border-2 border-[#D6B56D]/50 flex items-center justify-center text-[#D6B56D] shadow-lg">
            <ScrollText className="w-8 h-8 sm:w-10 sm:h-10 text-[#D6B56D]" aria-hidden="true" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 rounded-3xl border border-dashed border-[#D6B56D]/40 pointer-events-none"
            />
          </div>

          {/* Institutional Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/20 text-[#145B52] text-xs font-bold tracking-wider uppercase">
            <Clock className="w-3.5 h-3.5 text-[#145B52]" aria-hidden="true" />
            <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
              {isBn ? 'আর্কাইভ ও ইতিহাস সংকলন প্রক্রিয়াধীন' : 'Archival Documentation in Progress'}
            </span>
          </div>

          {/* Required Prominent Notice */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className={`text-2xl sm:text-3xl font-black text-[#145B52] tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn 
                ? 'আমাদের যাত্রার ইতিহাস নথিবদ্ধ করা হচ্ছে' 
                : 'Our story is being documented. Please check back for updates.'}
            </h3>
            
            <p className={`text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের প্রাতিষ্ঠানিক সূচনা, সেবা কার্যক্রমের ধারাবাহিক মাইলফলক ও ঐতিহাসিক বিবরণসমূহ প্রাতিষ্ঠানিক সত্যনিষ্ঠা বজায় রেখে নথিবদ্ধ করা হচ্ছে। দায়িত্বশীল ও নির্ভুল ইতিহাস নিশ্চিত করতে আমাদের আর্কাইভ পর্যালোচনা চলমান রয়েছে।'
                : 'Official chronological milestones and institutional history of Sonavan Old Rehabilitation Center are being carefully verified and documented in collaboration with administrative records. Official timeline entries will be presented here upon verified completion.'}
            </p>
          </div>

          {/* Prudence & Truthfulness Reassurance Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#145B52]/15 text-left max-w-2xl mx-auto flex items-start gap-3.5 text-xs text-[#242B29]/75 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#276749] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <span className={`block font-bold text-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                {isBn ? 'সত্যনিষ্ঠ ও দায়িত্বশীল উপস্থাপন' : 'Commitment to Historical Accuracy'}
              </span>
              <p className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                {isBn
                  ? 'আমরা অননুমোদিত বা আনুমানিক কোনো তথ্য উপস্থাপন করি না। কেন্দ্রটির নিবন্ধিত সেবা, সুবিধা এবং বর্তমান কার্যক্রম সম্পর্কে জানতে নিচের লিংকগুলো অনুসরণ করুন।'
                  : 'We strictly refrain from unverified claims or estimated dates. To explore our ongoing elderly care services, registered facilities, and current mission, please browse our verified pages.'}
              </p>
            </div>
          </div>

          {/* Action CTAs & Interactive Prototype Toggle */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
            >
              <span>{isBn ? 'প্রশাসনিক তথ্যের জন্য যোগাযোগ' : 'Contact for Inquiries'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F2ECE0] border border-[#145B52]/20 text-[#145B52] text-xs sm:text-sm font-bold shadow-2xs transition-all ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}
            >
              <span>{isBn ? 'বর্তমান সেবাসমূহ দেখুন' : 'Explore Current Services'}</span>
            </Link>

            {/* Discreet toggle allowing reviewers to preview the responsive timeline architecture */}
            <button
              type="button"
              onClick={() => setShowArchivalPreview(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAF8F2] hover:bg-[#D6B56D]/20 border border-[#D6B56D]/60 text-[#145B52] text-xs font-bold transition-colors cursor-pointer"
              title="Preview the interactive timeline component with sample verified milestones"
            >
              <Layers className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'টাইমলাইন কাঠামো প্রিভিউ' : 'Preview Timeline Layout'}</span>
            </button>
          </div>
        </motion.div>
      ) : (
        /* ========================================================================= */
        /* INTERACTIVE CHRONOLOGICAL TIMELINE                                       */
        /* ========================================================================= */
        <div className="space-y-8">
          
          {/* Header Bar if in preview mode */}
          {showArchivalPreview && (
            <div className="max-w-2xl mx-auto flex items-center justify-between p-3 px-4 rounded-xl bg-[#F2ECE0] border border-[#D6B56D]/50 text-xs">
              <span className="flex items-center gap-1.5 font-bold text-[#145B52]">
                <Info className="w-4 h-4 text-[#D6B56D]" />
                {isBn ? 'নমুনাস্বরূপ টাইমলাইন কাঠামো প্রদর্শিত হচ্ছে' : 'Displaying Timeline Architecture Preview'}
              </span>
              <button
                onClick={() => setShowArchivalPreview(false)}
                className="font-bold text-[#145B52] underline hover:text-[#0E423B] cursor-pointer"
              >
                {isBn ? 'ডকুমেন্টেশন বার্তায় ফিরুন' : 'Back to Documentation Notice'}
              </button>
            </div>
          )}

          {/* Timeline Root Container */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Center Timeline Spine for Desktop/Tablet (md and lg) */}
            <div 
              className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#145B52]/20 via-[#D6B56D]/60 to-[#145B52]/20 rounded-full pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Left Timeline Spine for Mobile (< md) */}
            <div 
              className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#145B52]/30 via-[#D6B56D]/50 to-[#145B52]/30 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Timeline Milestones List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={staggerTimeline}
              className="space-y-8 md:space-y-12"
            >
              {activeMilestones.map((milestone, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={milestone.id}
                    variants={fadeInUp}
                    className="relative"
                  >
                    {/* Desktop & Tablet Centered Row (md and lg) */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-start">
                      {isEven ? (
                        <>
                          <div>
                            <TimelineCard 
                              milestone={milestone} 
                              index={index} 
                              isLeftOnDesktop={true}
                            />
                          </div>
                          <div aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          <div aria-hidden="true" />
                          <div>
                            <TimelineCard 
                              milestone={milestone} 
                              index={index} 
                              isLeftOnDesktop={false}
                            />
                          </div>
                        </>
                      )}

                      {/* Desktop Center Marker Node on Spine */}
                      <div className="absolute left-1/2 top-7 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
                        <div className="w-11 h-11 rounded-full bg-[#FAF8F2] border-3 border-[#145B52] shadow-lg flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-[#145B52] flex items-center justify-center text-[#D6B56D]">
                            <span className="w-2 h-2 rounded-full bg-[#D6B56D] animate-ping" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Vertical Row (< md) */}
                    <div className="md:hidden relative pl-12 pr-2">
                      {/* Mobile node positioned on left-5 spine */}
                      <div className="absolute left-5 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#145B52] border-2 border-[#D6B56D] flex items-center justify-center text-white shadow-md z-10">
                        <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                      </div>
                      <TimelineCard milestone={milestone} index={index} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </div>
      )}
    </div>
  );
};
