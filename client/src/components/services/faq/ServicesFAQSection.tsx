'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  HelpCircle, 
  Sparkles, 
  PhoneCall, 
  ArrowRight,
  MessageSquareQuote
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ServicesFAQSectionProps } from './types';
import { DEFAULT_SERVICES_FAQS } from './data';
import { ServicesFAQAccordionItem } from './ServicesFAQAccordionItem';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * Frequently Asked Questions Section for the Services Page
 *
 * Heading: "Questions About Our Services?"
 * Features:
 * - Accessible accordion containing 7 verified service & intake questions.
 * - Full keyboard navigation (Enter/Space), proper ARIA disclosure states.
 * - Directs unconfirmed policies or custom cases to official Contact Us desk.
 * - Includes a prominent "Contact Us for More Information" button linking to /contact.
 * - Reusable and completely bilingual (English and Bengali).
 */
export const ServicesFAQSection: React.FC<ServicesFAQSectionProps> = ({
  id = 'services-faq',
  className = '',
  heading,
  subtitle,
  description,
  faqs = DEFAULT_SERVICES_FAQS,
  contactHref = '/contact',
  contactBtnText
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';
  const scrollDirection = useScrollDirection();
  const isScrollingUp = scrollDirection === 'up';

  // Open first item by default for intuitive discoverability; allows single toggle
  const [openItemId, setOpenItemId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (itemId: string) => {
    setOpenItemId((prev) => (prev === itemId ? null : itemId));
  };

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : (isBn ? 'আমাদের সেবাসমূহ সম্পর্কে সাধারণ প্রশ্নাবলী' : 'Questions About Our Services?');

  const sectionSubtitle = subtitle
    ? (subtitle[locale] || subtitle.en)
    : (isBn ? 'সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর' : 'FREQUENTLY ASKED QUESTIONS');

  const sectionDescription = description
    ? (description[locale] || description.en)
    : (isBn
        ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের সেবার পরিধি, ভর্তি প্রক্রিয়া, পুনর্বাসন ও পরিদর্শন সংক্রান্ত নিশ্চিত তথ্যাবলী।'
        : 'Find clear, verified answers to common questions regarding care coordination, rehabilitation, eligibility, and visits.');

  const ctaButtonLabel = contactBtnText
    ? (contactBtnText[locale] || contactBtnText.en)
    : (isBn ? 'আরও তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন' : 'Contact Us for More Information');

  return (
    <motion.section
      id={id}
      initial="hidden"
      animate={isScrollingUp ? 'visible' : undefined}
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
      variants={fadeInUp}
      aria-labelledby="services-faq-heading"
      className={`py-16 sm:py-24 bg-[#FAF8F2] border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#145B52]/8 border border-[#145B52]/15 text-[#145B52] text-xs font-bold tracking-wide">
              <HelpCircle className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'স্পষ্ট তথ্য' : 'Verified Information'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2
            id="services-faq-heading"
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

          {/* Gold Decorative Divider */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </div>

        {/* Accessible Accordion Container */}
        <div className="bg-white rounded-3xl border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] p-3 sm:p-6 md:p-8">
          <div className="divide-y divide-[#145B52]/12">
            {faqs.map((faq, index) => (
              <ServicesFAQAccordionItem
                key={faq.id}
                item={faq}
                isOpen={openItemId === faq.id}
                onToggle={() => handleToggle(faq.id)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Prominent Bottom Call-to-Action Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#FAF8F2] border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Institutional Accuracy Prompt */}
          <div className="flex items-start gap-3.5 max-w-xl text-left">
            <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5 shadow-2xs">
              <MessageSquareQuote className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider">
                  {isBn ? 'অন্য কোনো প্রশ্ন বা বিশেষ জিজ্ঞাসা?' : 'Still Have Questions About Our Care?'}
                </span>
                <span className="inline-flex items-center shrink-0 whitespace-nowrap text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-[#145B52] border border-teal-200 shadow-2xs">
                  {isBn ? 'সহায়তা ডেস্ক' : 'Direct Helpline'}
                </span>
              </div>
              <p
                className={`text-xs text-[#242B29]/75 leading-relaxed ${
                  isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
                }`}
              >
                {isBn
                  ? 'যেকোনো ব্যক্তিগত স্বাস্থ্যগত তথ্য, পারিবারিক পরামর্শ বা বিশেষ ব্যবস্থার জন্য আমাদের যোগাযোগ ডেস্কে কথা বলুন।'
                  : 'For personalized care discussions, admission criteria, or visiting arrangements, our care desk is here to help.'}
              </p>
            </div>
          </div>

          {/* Action Button Linking to /contact */}
          <div className="w-full md:w-auto shrink-0 flex items-center justify-center">
            <Link
              href={contactHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#145B52] text-white font-bold text-sm shadow-md hover:bg-[#0E3E37] hover:shadow-lg transition-all duration-200 group focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#D6B56D]"
            >
              <PhoneCall className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{ctaButtonLabel}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
