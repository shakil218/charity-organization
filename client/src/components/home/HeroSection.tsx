'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Heart, Sparkles, ArrowRight, ShieldCheck, Activity, Utensils, Stethoscope, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenDonateModal?: () => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDonateModal }) => {
  const { locale } = useLanguage();
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-amber-200/60">
      {/* Decorative Warm Cream & Gold Ambient Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,181,109,0.22),transparent_50%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#276749]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-1/3 w-80 h-80 bg-[#145B52]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Copy Column */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="md:col-span-5 lg:col-span-6 space-y-5 md:space-y-4 lg:space-y-6 text-center md:text-left"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#276749]/10 border border-[#276749]/25 text-[#276749] text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#276749]" />
              <span>
                {locale === 'bn'
                  ? 'সহমর্মিতা • মর্যাদা • সামাজিক মেলবন্ধন'
                  : 'COMPASSION • DIGNITY • COMMUNITY'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-black tracking-tight leading-tight text-[#145B52]">
                {locale === 'bn' ? (
                  <>
                    প্রতিটি প্রবীণের প্রাপ্য যত্ন, মর্যাদা ও আশা।
                  </>
                ) : (
                  <>
                    Every Elder Deserves Care, Dignity &amp; Hope.
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg md:text-base lg:text-xl font-bold text-[#276749]">
                {locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC)' : 'Sonavan Old Rehabilitation Center'}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-sm lg:text-lg text-[#242B29]/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
              {locale === 'bn'
                ? 'একটি অত্যন্ত যত্নশীল সমাজ বিনির্মাণ, যেখানে প্রবীণরা পাবেন সর্বোচ্চ সম্মান, সহমর্মিতা ও স্বকীয় মর্যাদা।'
                : 'Building a more caring community where older adults are treated with respect, compassion, and dignity.'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center md:items-stretch lg:items-center justify-center md:justify-start gap-3 pt-2 sm:pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenDonateModal?.()}
                className="px-6 sm:px-8 md:px-5 lg:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#145B52] hover:bg-[#0E423B] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#145B52] focus:ring-offset-2"
              >
                <Heart className="w-5 h-5 fill-amber-300 text-amber-300" />
                <span>{locale === 'bn' ? 'আমাদের কার্যক্রমে পাশে থাকুন' : 'Support Our Mission'}</span>
              </motion.button>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto md:w-full lg:w-auto">
                <Link
                  href="/about"
                  className="w-full sm:w-auto md:w-full lg:w-auto px-6 sm:px-7 md:px-5 lg:px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-[#F2ECE0] border border-teal-900/15 text-[#145B52] font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition flex items-center justify-center gap-2 text-center"
                >
                  <span>{locale === 'bn' ? 'আমাদের কাজ সম্পর্কে জানুন' : 'Discover Our Work'}</span>
                  <ArrowRight className="w-4 h-4 text-[#276749]" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Subtle Verification & Trust Note */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs text-[#242B29]/60 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#276749]" />
              <span>
                {locale === 'bn'
                  ? 'নিবন্ধিত অলাভজনক সেবামূলক প্রতিষ্ঠান • সার্বক্ষণিক চিকিৎসাসেবা'
                  : 'Registered Senior Care Rehabilitation Center • Dedicated Healthcare Support'}
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: Custom Live Healthcare & Monitoring Interactive Dashboard Visual */}
          <motion.div
            initial="hidden"
            animate={isScrollingUp ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInRight}
            className="md:col-span-7 lg:col-span-6 relative py-4"
          >
            <div className="relative mx-auto w-full max-w-none md:max-w-none lg:max-w-none pr-0 md:pr-4 lg:pr-8 pt-4">

              {/* Decorative Subtle Ambient Glow Background Card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#276749]/20 via-[#D6B56D]/30 to-[#145B52]/20 opacity-80 blur-2xl pointer-events-none" />

              {/* Top-Right Overlapping White Badge Card (For LG desktop screens) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden lg:block absolute top-10 lg:-right-4 z-30 px-4 py-2.5 rounded-2xl bg-white shadow-2xl border border-amber-200/90 text-[#145B52] space-y-0.5"
              >
                <span className="block text-[9px] font-black uppercase tracking-wider text-[#276749]/70">
                  {locale === 'bn' ? 'পুনর্বাসন পর্যবেক্ষণ' : 'REHABILITATION STATUS'}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-black text-[#145B52]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{locale === 'bn' ? 'লাইভ মনিটরিং' : 'LIVE MONITORING'}</span>
                </div>
              </motion.div>

              {/* Main Image Frame & Dashboard Container */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl overflow-hidden border-2 border-[#D6B56D]/40 shadow-2xl bg-teal-950 aspect-[4/3] sm:aspect-[4/3] z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="Welcoming Senior Community and Live Rehabilitation Monitoring at SORC"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-950/40 to-black/30" />

                {/* Top-Left Translucent Pill Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{locale === 'bn' ? 'লাইভ কেয়ার ট্র্যাকিং' : 'LIVE CARE MONITORING'}</span>
                </div>

                {/* Top-Right Rehabilitation Status Badge Card (Inside image for sm & md screens < lg) */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="lg:hidden absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-amber-200/90 text-[#145B52] space-y-0.5"
                >
                  <span className="block text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#276749]/70">
                    {locale === 'bn' ? 'পুনর্বাসন পর্যবেক্ষণ' : 'REHABILITATION STATUS'}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black text-[#145B52]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{locale === 'bn' ? 'লাইভ মনিটরিং' : 'LIVE MONITORING'}</span>
                  </div>
                </motion.div>

                {/* Center Glassmorphic Resident Health Report Panel */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="absolute top-14 left-4 sm:left-6 z-20 p-3 sm:p-3.5 rounded-2xl bg-white/88 backdrop-blur-md border border-white/60 shadow-2xl text-[#145B52] space-y-2 max-w-[210px] sm:max-w-[230px] hidden sm:block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-black text-xs text-[#145B52]">
                      <Activity className="w-3.5 h-3.5 text-[#276749]" />
                      <span>{locale === 'bn' ? 'SORC হেলথ হাব' : 'SORC Health Hub'}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {locale === 'bn' ? '৯৬% নিখুঁত' : '96% Optimal'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-[#242B29]/70">
                      <span>{locale === 'bn' ? 'শারীরিক স্থায়িত্ব' : 'Vital Stability'}</span>
                      <span className="text-[#145B52] font-black">{locale === 'bn' ? 'স্বাভাবিক' : 'Normal Range'}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
                    </div>
                  </div>

                  <div className="space-y-0.5 pt-1 text-[10px] font-semibold text-[#242B29]/80 border-t border-gray-200/60">
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'রক্তচাপ:' : 'Blood Pressure:'}</span>
                      <span className="font-bold text-[#145B52]">120/80 mmHg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'ফিজিওথেরাপি:' : 'Physiotherapy:'}</span>
                      <span className="font-bold text-[#276749]">{locale === 'bn' ? 'দৈনিক সেশন' : 'Daily Session'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === 'bn' ? 'পুষ্টি:' : 'Nutrition:'}</span>
                      <span className="font-bold text-[#145B52]">{locale === 'bn' ? '১০০% অর্গানিক' : '100% Organic'}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Dark Teal Interactive Care Dashboard Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-[#0E423B]/92 backdrop-blur-md border border-[#D6B56D]/40 text-white shadow-2xl space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">

                    {/* Location & Title */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#145B52] border border-[#D6B56D]/30 flex items-center justify-center text-[#D6B56D] shrink-0">
                        <Stethoscope className="w-4.5 h-4.5 text-[#D6B56D]" />
                      </div>
                      <div>
                        <span className="block text-[11px] text-teal-200/90 font-semibold leading-tight">
                          {locale === 'bn' ? '📍 গাজীপুর ক্যাম্পাস সেবা' : '📍 Gazipur Campus Care'}
                        </span>
                        <span className="block text-sm sm:text-base font-black text-[#FAF8F2] leading-tight">
                          {locale === 'bn' ? '২৪/৭ সার্বক্ষণিক চিকিৎসাসেবা' : '24/7 Active Healthcare'}
                        </span>
                      </div>
                    </div>

                    {/* 3 Mini Stat Boxes */}
                    <div className="grid grid-cols-3 gap-1.5 text-center pt-1 sm:pt-0">
                      <div className="p-1.5 rounded-lg bg-[#145B52]/80 border border-teal-700/50">
                        <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-teal-200">
                          <Users className="w-3 h-3 text-[#D6B56D]" />
                          <span>{locale === 'bn' ? 'স্টাফ' : 'Staff'}</span>
                        </div>
                        <span className="block text-xs font-black text-white">{locale === 'bn' ? '১:২ অনুপাত' : '1:2 Ratio'}</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-[#145B52]/80 border border-teal-700/50">
                        <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-teal-200">
                          <Stethoscope className="w-3 h-3 text-[#D6B56D]" />
                          <span>{locale === 'bn' ? 'ডাক্তার' : 'Doctor'}</span>
                        </div>
                        <span className="block text-xs font-black text-white">{locale === 'bn' ? 'দৈনিক ২ বার' : '2x Daily'}</span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-[#145B52]/80 border border-teal-700/50">
                        <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-teal-200">
                          <Utensils className="w-3 h-3 text-[#D6B56D]" />
                          <span>{locale === 'bn' ? 'খাবার' : 'Meals'}</span>
                        </div>
                        <span className="block text-xs font-black text-white">{locale === 'bn' ? 'অর্গানিক' : 'Organic'}</span>
                      </div>
                    </div>

                  </div>

                  {/* Footer Row */}
                  <div className="pt-1.5 border-t border-teal-800/60 flex items-center justify-between text-[10px] text-teal-200/70 font-medium">
                    <span>{locale === 'bn' ? 'বর্তমান সেবা স্থিতি • রিয়েল-টাইম যাচাইকৃত' : 'Current care status • Real-time verified'}</span>
                    <span>{locale === 'bn' ? 'এইমাত্র হালনাগাদকৃত' : 'Updated just now'}</span>
                  </div>

                </div>

              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
