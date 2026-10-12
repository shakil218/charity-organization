'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, ArrowRight, PhoneCall, HelpCircle, ShieldCheck } from 'lucide-react';
import { AccessibilitySectionProps } from './types';
import { DEFAULT_ACCESSIBILITY_CARDS, DEFAULT_ACCESSIBILITY_HEADER } from './data';
import { AccessibilityCard } from './AccessibilityCard';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  id = 'accessibility-safety',
  className = '',
  eyebrow = DEFAULT_ACCESSIBILITY_HEADER.eyebrow,
  heading = DEFAULT_ACCESSIBILITY_HEADER.heading,
  subtitle = DEFAULT_ACCESSIBILITY_HEADER.subtitle,
  cards = DEFAULT_ACCESSIBILITY_CARDS,
  showContactPrompt = true
}) => {
  const { locale } = useLanguage();

  const eyebrowText = eyebrow[locale] || eyebrow.en;
  const headingText = heading[locale] || heading.en;
  const subtitleText = subtitle[locale] || subtitle.en;
  const promptData = DEFAULT_ACCESSIBILITY_HEADER.contactPrompt;

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 bg-[#FAF8F2] border-b border-teal-900/10 scroll-mt-20 ${className}`}
      aria-labelledby="accessibility-safety-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/15 text-[#145B52] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" />
            <span>{eyebrowText}</span>
          </div>

          <h2
            id="accessibility-safety-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#145B52] tracking-tight leading-tight"
          >
            {headingText}
          </h2>

          <p className="text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal">
            {subtitleText}
          </p>
        </motion.div>

        {/* Four Clean Cards in a Balanced Grid */}
        {cards && cards.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          >
            {cards.map((card, idx) => (
              <motion.div key={card.id} variants={fadeInUp} className="h-full">
                <AccessibilityCard
                  card={card}
                  locale={locale}
                  index={idx}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-teal-900/10 text-center max-w-lg mx-auto space-y-3">
            <HelpCircle className="w-10 h-10 text-[#145B52] mx-auto opacity-40" />
            <h3 className="text-lg font-bold text-[#145B52]">
              {locale === 'bn' ? 'এক্সেসিবিলিটি তথ্য যাচাই প্রক্রিয়াধীন' : 'Accessibility Details Pending Verification'}
            </h3>
            <p className="text-sm text-[#242B29]/70">
              {locale === 'bn'
                ? 'আপনার নির্দিষ্ট প্রয়োজনীয়তা সম্পর্কে জানতে অনুগ্রহ করে আমাদের কার্যালয়ে সরাসরি যোগাযোগ করুন।'
                : 'Please contact our campus desk directly to inquire about your specific physical requirements.'}
            </p>
          </div>
        )}

        {/* Specific Needs & Ethical Contact Prompt Banner */}
        {showContactPrompt && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInUp}
            className="mt-14 sm:mt-16 rounded-3xl bg-white border border-teal-900/10 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#276749] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#276749]" />
                  <span>{locale === 'bn' ? 'ব্যক্তিগত মূল্যায়ন ও স্বচ্ছতা' : 'Individual Assessment & Transparency'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#145B52] tracking-tight">
                  {promptData.title[locale] || promptData.title.en}
                </h3>

                <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal">
                  {promptData.description[locale] || promptData.description.en}
                </p>
              </div>

              {/* Action Buttons: Responsive layout preventing any overflow on sm/mobile devices */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full lg:w-auto shrink-0 pt-3 lg:pt-0 max-w-full">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#145B52] hover:bg-[#0f443d] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] text-center"
                >
                  <span>{promptData.buttonText[locale] || promptData.buttonText.en}</span>
                  <ArrowRight className="w-4 h-4 text-[#D6B56D] shrink-0" />
                </Link>

                <a
                  href="tel:+8801700000000"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#FAF8F2] hover:bg-gray-100 text-[#145B52] font-semibold text-xs sm:text-sm border border-teal-900/15 transition-colors text-center whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 text-[#145B52] shrink-0" />
                  <span>+880 1700-000000</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
