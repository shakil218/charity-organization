'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutFAQItem } from './types';

export interface AboutFAQAccordionItemProps {
  item: AboutFAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const AboutFAQAccordionItem: React.FC<AboutFAQAccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
  index
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';
  const shouldReduceMotion = useReducedMotion();

  const question = item.question[locale] || item.question.en;
  const answer = item.answer[locale] || item.answer.en;
  const category = item.category?.[locale] || item.category?.en;
  const link = item.link;

  return (
    <div className="border-b border-[#145B52]/12 last:border-b-0 transition-colors">
      {/* Accordion Trigger Header */}
      <h3>
        <button
          type="button"
          id={`faq-question-${item.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          onClick={onToggle}
          className="w-full py-5 sm:py-6 px-3 sm:px-4 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] focus-visible:ring-offset-2 rounded-2xl transition-colors hover:bg-white/60"
        >
          {/* Question Title & Index */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
            <span className="text-xs font-bold text-[#D6B56D] bg-white border border-[#145B52]/15 px-2.5 py-1 rounded-lg shrink-0 shadow-2xs">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span
              className={`text-base sm:text-lg font-bold text-[#145B52] group-hover:text-[#0E3E37] transition-colors leading-snug ${
                isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
              }`}
            >
              {question}
            </span>
          </div>

          {/* Expand/Collapse Chevron Icon */}
          <div
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs ${
              isOpen
                ? 'bg-[#145B52] border-[#145B52] text-[#D6B56D]'
                : 'bg-white border-[#145B52]/15 text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#D6B56D] group-hover:border-[#145B52]'
            }`}
          >
            <ChevronDown
              className={`w-4.5 h-4.5 transition-transform duration-300 stroke-[2.2] ${
                isOpen ? 'rotate-180 text-[#D6B56D]' : 'text-[#145B52] group-hover:text-[#D6B56D]'
              }`}
              aria-hidden="true"
            />
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
            transition={{ duration: shouldReduceMotion ? 0.08 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-1 px-3 sm:px-4 pl-11 sm:pl-14 space-y-4">
              {/* Answer Text */}
              <p
                className={`text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal ${
                  isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'
                }`}
              >
                {answer}
              </p>

              {/* Bottom Metadata & Verified Resource Link */}
              <div className="pt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-[#145B52]/8">
                {category && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#276749] bg-green-50 px-2.5 py-1 rounded-full border border-green-200/70 shadow-2xs">
                    <Tag className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                    <span>{category}</span>
                  </span>
                )}

                {link && (
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E3E37] hover:underline group/link transition-colors"
                  >
                    <span>{link.label[locale] || link.label.en}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
