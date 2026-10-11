'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  HelpCircle, 
  ArrowRight, 
  MessageSquareQuote, 
  Sparkles, 
  PhoneCall 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutFAQSectionProps } from './types';
import { DEFAULT_ABOUT_FAQS } from './data';
import { AboutFAQAccordionItem } from './AboutFAQAccordionItem';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const AboutFAQSection: React.FC<AboutFAQSectionProps> = ({
  id = 'about-faq',
  className = '',
  heading,
  subtitle,
  description,
  faqs = DEFAULT_ABOUT_FAQS,
  allFaqsHref = '/faq',
  contactHref = '/contact'
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  // Manage open accordion item state (first item open by default for discoverability)
  const [openItemId, setOpenItemId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (itemId: string) => {
    setOpenItemId((prev) => (prev === itemId ? null : itemId));
  };

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : (isBn ? 'আমাদের সম্পর্কে আরও জানুন' : 'Learn More About Us');

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : (isBn ? 'সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর' : 'FREQUENTLY ASKED QUESTIONS');

  const sectionDescription = description
    ? (description[locale] || description.en)
    : (isBn
        ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের উদ্দেশ্য, সেবার ধরণ, মিশন ও অংশগ্রহণের উপায় সম্পর্কে গুরুত্বপূর্ণ তথ্যাবলী জানুন।'
        : 'Find verified answers to common questions about Sonavan Old Rehabilitation Center, our care approach, mission, and ways to get involved.');

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
              <HelpCircle className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'প্রাতিষ্ঠানিক স্পষ্টতা' : 'Clarity & Trust'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionHeading}
          </h2>

          {/* Descriptive Intro */}
          <p
            className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${
              isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
            }`}
          >
            {sectionDescription}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* Accordion Container with Generous Spacing and Subtle Dividers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="bg-white rounded-3xl border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] p-3 sm:p-6 md:p-8 space-y-1"
        >
          {faqs.map((faq, index) => (
            <AboutFAQAccordionItem
              key={faq.id}
              item={faq}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA Bar & Verification Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#FAF8F2] border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Institutional Accuracy Prompt */}
          <div className="flex items-start gap-3.5 max-w-xl">
            <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 shadow-2xs">
              <MessageSquareQuote className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider">
                  {isBn ? 'অন্য কোনো প্রশ্ন আছে?' : 'Have More Questions?'}
                </span>
                <span className="inline-flex items-center shrink-0 whitespace-nowrap text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-[#145B52] border border-teal-200 shadow-2xs">
                  {isBn ? 'সরাসরি সহায়তা' : 'Direct Support'}
                </span>
              </div>
              <p
                className={`text-xs text-[#242B29]/75 leading-relaxed ${
                  isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
                }`}
              >
                {isBn
                  ? 'অনিবন্ধিত তথ্য বা ব্যক্তিগত প্রয়োজনে অনুমান না করে সরাসরি আমাদের প্রশাসনিক ডেস্কে যোগাযোগ করার জন্য অনুরোধ করা হচ্ছে।'
                  : 'For custom inquiries, medical queries, or unverified details, please reach out to our team directly on the Contact page.'}
              </p>
            </div>
          </div>

          {/* Action Buttons: "View All FAQs" and "Contact Us" */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href={allFaqsHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#145B52] text-white font-bold text-sm shadow-md hover:bg-[#0E3E37] hover:shadow-lg transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D]"
            >
              <span>{isBn ? 'সকল সাধারণ জিজ্ঞাসা দেখুন' : 'View All FAQs'}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={contactHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4.5 py-3 rounded-xl bg-transparent hover:bg-white text-[#145B52] text-xs font-semibold border border-[#145B52]/15 transition-colors text-center"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
