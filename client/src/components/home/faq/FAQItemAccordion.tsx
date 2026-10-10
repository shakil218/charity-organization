'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FAQItem } from './types';

export interface FAQItemAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

/**
 * Accessible FAQ Accordion Item.
 * Features:
 * - Proper ARIA attributes (aria-expanded, aria-controls, role="region")
 * - Teal question heading
 * - High-contrast, clearly visible ChevronUp closing arrow when expanded
 * - Quick collapse button inside the answer region for seamless reading experience
 * - Smooth animated disclosure that respects reduced motion settings
 * - Subtle bottom divider
 */
export const FAQItemAccordion: React.FC<FAQItemAccordionProps> = ({
  item,
  isOpen,
  onToggle,
  index
}) => {
  const { locale } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const question = item.question[locale] || item.question.en;
  const answer = item.answer[locale] || item.answer.en;
  const category = item.category?.[locale] || item.category?.en;
  const link = item.link;

  return (
    <div className="border-b border-amber-200/80 last:border-b-0 transition-colors">
      {/* Accordion Trigger Header */}
      <h3>
        <button
          type="button"
          id={`faq-question-${item.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          onClick={onToggle}
          className="w-full py-5 sm:py-6 px-2 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 rounded-xl"
        >
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="text-xs font-bold text-[#D6B56D] bg-[#FAF8F2] border border-amber-200/80 px-2 py-0.5 rounded-md shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="text-base sm:text-lg font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug">
              {question}
            </span>
          </div>

          {/* High-Contrast Expand/Collapse Arrow Icon */}
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs ${
              isOpen
                ? 'bg-[#145B52] border-[#145B52] text-amber-200'
                : 'bg-[#FAF8F2] border-amber-200/90 text-[#145B52] group-hover:bg-[#145B52] group-hover:text-amber-200 group-hover:border-[#145B52]'
            }`}
          >
            {isOpen ? (
              <ChevronUp className="w-4.5 h-4.5 text-amber-200 stroke-[2.5]" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4.5 h-4.5 text-[#145B52] group-hover:text-amber-200 stroke-[2.5] transition-colors" aria-hidden="true" />
            )}
          </div>
        </button>
      </h3>

      {/* Accordion Disclosure Region with Reduced Motion Support */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-2 pl-9 sm:pl-12 space-y-4">
              <p className="text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal">
                {answer}
              </p>

              {/* Bottom Actions Row: Category, Related Link, and Closing Up-Arrow Action */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-amber-100/80">
                <div className="flex flex-wrap items-center gap-3">
                  {category && (
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#276749] bg-[#FAF8F2] border border-amber-200/70 px-2.5 py-0.5 rounded-full">
                      {category}
                    </span>
                  )}

                  {link && (
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E423B] underline underline-offset-4 transition"
                    >
                      <span>{link.label[locale] || link.label.en}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                    </Link>
                  )}
                </div>

                {/* Closing Up-Arrow Button while reading answer */}
                <button
                  type="button"
                  onClick={onToggle}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#145B52] hover:text-[#0E423B] bg-[#FAF8F2] hover:bg-[#F2ECE0] border border-amber-200 px-3 py-1 rounded-full transition cursor-pointer shadow-2xs group/close focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52]"
                  aria-label={locale === 'bn' ? 'উত্তরটি সংক্ষেপ করুন' : 'Collapse answer'}
                >
                  <span>{locale === 'bn' ? 'সংক্ষেপ করুন' : 'Close'}</span>
                  <ChevronUp className="w-3.5 h-3.5 text-[#145B52] transition-transform duration-200 group-hover/close:-translate-y-0.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
