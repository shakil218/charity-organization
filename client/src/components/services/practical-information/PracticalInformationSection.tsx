'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  HeartPulse, 
  Clock, 
  Users, 
  MapPin, 
  ShieldCheck, 
  HandCoins, 
  FileText, 
  Phone, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  Table as TableIcon, 
  LayoutGrid, 
  AlertCircle 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PracticalInformationSectionProps, InfoCategory } from './types';
import { DEFAULT_PRACTICAL_INFO_DATA } from './data';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconMap = {
  HeartPulse,
  Clock,
  Users,
  MapPin,
  ShieldCheck,
  HandCoins,
  FileText,
  Phone,
  HelpCircle: Info,
};

/**
 * "Practical Information" Section for Sonavan Old Rehabilitation Center (SORC)
 * 
 * Features:
 * - Clear segregation between General Information and Official Requirements
 * - Display for verified items (Available Services, Operating Hours, Visiting Arrangements, Contact Details)
 * - Explicit "Please contact the organization for current information" for unconfirmed/official criteria (Eligibility, Fees, Application)
 * - Dual view modes: Responsive Grid Cards and Accessible Structured Summary Table
 * - Category filter tabs: All Details, General Information, Official Requirements
 * - Pure white cards on warm cream background (#FAF8F2) with deep teal (#145B52), forest-green (#276749), and gold (#D6B56D) accents
 * - Full keyboard navigation and accessible focus rings (focus-visible:ring-2 focus-visible:ring-[#D6B56D])
 * - Re-triggering scroll animations on every scroll (viewport once: false)
 * - Complete bilingual support (Inter / Hind Siliguri)
 */
export const PracticalInformationSection: React.FC<PracticalInformationSectionProps> = ({
  id = 'practical-information',
  className = '',
  eyebrow,
  heading,
  description,
  items = DEFAULT_PRACTICAL_INFO_DATA.items,
  filterAllLabel,
  filterGeneralLabel,
  filterOfficialLabel,
  viewCardsLabel,
  viewTableLabel,
  ctaText,
  ctaHref = DEFAULT_PRACTICAL_INFO_DATA.ctaHref,
  disclaimerNotice,
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const [activeCategory, setActiveCategory] = useState<'all' | InfoCategory>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const sectionEyebrow = eyebrow
    ? (eyebrow[locale] || eyebrow.en)
    : DEFAULT_PRACTICAL_INFO_DATA.eyebrow[locale] || DEFAULT_PRACTICAL_INFO_DATA.eyebrow.en;

  const sectionHeading = heading
    ? (heading[locale] || heading.en)
    : DEFAULT_PRACTICAL_INFO_DATA.heading[locale] || DEFAULT_PRACTICAL_INFO_DATA.heading.en;

  const sectionDescription = description
    ? (description[locale] || description.en)
    : DEFAULT_PRACTICAL_INFO_DATA.description[locale] || DEFAULT_PRACTICAL_INFO_DATA.description.en;

  const allLabel = filterAllLabel
    ? (filterAllLabel[locale] || filterAllLabel.en)
    : DEFAULT_PRACTICAL_INFO_DATA.filterAllLabel[locale] || DEFAULT_PRACTICAL_INFO_DATA.filterAllLabel.en;

  const generalLabel = filterGeneralLabel
    ? (filterGeneralLabel[locale] || filterGeneralLabel.en)
    : DEFAULT_PRACTICAL_INFO_DATA.filterGeneralLabel[locale] || DEFAULT_PRACTICAL_INFO_DATA.filterGeneralLabel.en;

  const officialLabel = filterOfficialLabel
    ? (filterOfficialLabel[locale] || filterOfficialLabel.en)
    : DEFAULT_PRACTICAL_INFO_DATA.filterOfficialLabel[locale] || DEFAULT_PRACTICAL_INFO_DATA.filterOfficialLabel.en;

  const cardsLabel = viewCardsLabel
    ? (viewCardsLabel[locale] || viewCardsLabel.en)
    : DEFAULT_PRACTICAL_INFO_DATA.viewCardsLabel[locale] || DEFAULT_PRACTICAL_INFO_DATA.viewCardsLabel.en;

  const tableLabel = viewTableLabel
    ? (viewTableLabel[locale] || viewTableLabel.en)
    : DEFAULT_PRACTICAL_INFO_DATA.viewTableLabel[locale] || DEFAULT_PRACTICAL_INFO_DATA.viewTableLabel.en;

  const ctaBtnText = ctaText
    ? (ctaText[locale] || ctaText.en)
    : DEFAULT_PRACTICAL_INFO_DATA.ctaText[locale] || DEFAULT_PRACTICAL_INFO_DATA.ctaText.en;

  const noticeText = disclaimerNotice
    ? (disclaimerNotice[locale] || disclaimerNotice.en)
    : DEFAULT_PRACTICAL_INFO_DATA.disclaimerNotice[locale] || DEFAULT_PRACTICAL_INFO_DATA.disclaimerNotice.en;

  const fontClass = isBn
    ? 'font-[family-name:var(--font-hind-siliguri)]'
    : 'font-[family-name:var(--font-inter)]';

  // Filter items based on active category
  const filteredItems = items.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-[#FAF8F2] pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-[#145B52]/10 scroll-mt-24 overflow-hidden ${className}`}
    >
      {/* Ambient background glow accents */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-80 bg-gradient-to-r from-[#145B52]/5 via-[#D6B56D]/10 to-[#276749]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/5 border border-[#D6B56D]/50 text-[#145B52] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            <span className={fontClass}>
              {sectionEyebrow}
            </span>
          </div>

          {/* Main Section Heading */}
          <h2
            id={`${id}-heading`}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${fontClass}`}
          >
            {sectionHeading}
          </h2>

          {/* Section Description */}
          <p className={`text-base sm:text-lg text-[#242B29]/80 leading-relaxed font-normal ${fontClass}`}>
            {sectionDescription}
          </p>
        </motion.div>

        {/* Filter and View Controls Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          className="mt-8 sm:mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#145B52]/10"
        >
          {/* Category Filter Pills */}
          <div 
            role="tablist" 
            aria-label="Filter Information Categories"
            className="flex flex-wrap items-center justify-center sm:justify-start gap-2 bg-[#F2ECE0]/70 p-1.5 rounded-2xl border border-[#145B52]/10"
          >
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${
                activeCategory === 'all'
                  ? 'bg-[#145B52] text-[#FAF8F2] shadow-xs'
                  : 'text-[#145B52] hover:bg-[#FAF8F2] hover:text-[#0E423B]'
              } ${fontClass}`}
            >
              {allLabel}
            </button>

            <button
              role="tab"
              aria-selected={activeCategory === 'general'}
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${
                activeCategory === 'general'
                  ? 'bg-[#145B52] text-[#FAF8F2] shadow-xs'
                  : 'text-[#145B52] hover:bg-[#FAF8F2] hover:text-[#0E423B]'
              } ${fontClass}`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#276749] mr-2" aria-hidden="true" />
              {generalLabel}
            </button>

            <button
              role="tab"
              aria-selected={activeCategory === 'official'}
              onClick={() => setActiveCategory('official')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${
                activeCategory === 'official'
                  ? 'bg-[#145B52] text-[#FAF8F2] shadow-xs'
                  : 'text-[#145B52] hover:bg-[#FAF8F2] hover:text-[#0E423B]'
              } ${fontClass}`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#D6B56D] mr-2" aria-hidden="true" />
              {officialLabel}
            </button>
          </div>

          {/* View Mode Switcher (Cards vs Table) */}
          <div className="flex items-center gap-1.5 bg-[#F2ECE0]/70 p-1.5 rounded-2xl border border-[#145B52]/10 shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              aria-label={cardsLabel}
              title={cardsLabel}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${
                viewMode === 'cards'
                  ? 'bg-[#145B52] text-[#FAF8F2] shadow-xs'
                  : 'text-[#145B52] hover:bg-[#FAF8F2]'
              } ${fontClass}`}
            >
              <LayoutGrid className="w-4 h-4" aria-hidden="true" />
              <span>{cardsLabel}</span>
            </button>

            <button
              onClick={() => setViewMode('table')}
              aria-label={tableLabel}
              title={tableLabel}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${
                viewMode === 'table'
                  ? 'bg-[#145B52] text-[#FAF8F2] shadow-xs'
                  : 'text-[#145B52] hover:bg-[#FAF8F2]'
              } ${fontClass}`}
            >
              <TableIcon className="w-4 h-4" aria-hidden="true" />
              <span>{tableLabel}</span>
            </button>
          </div>
        </motion.div>

        {/* Content Area: Cards View or Accessible Table View */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {viewMode === 'cards' ? (
              /* CARD VIEW */
              <motion.div
                key="cards-view"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
              >
                {filteredItems.map((item) => {
                  const IconComponent = iconMap[item.iconName] || Info;
                  const title = item.title[locale] || item.title.en;
                  const summary = item.summary[locale] || item.summary.en;
                  const statusVal = item.statusValue[locale] || item.statusValue.en;
                  const categoryTitle = item.categoryLabel[locale] || item.categoryLabel.en;
                  const contactMsg = item.contactPrompt
                    ? (item.contactPrompt[locale] || item.contactPrompt.en)
                    : null;

                  const isOfficial = item.category === 'official';

                  return (
                    <motion.article
                      key={item.id}
                      variants={fadeInUp}
                      whileHover={{ y: -5, transition: { duration: 0.22 } }}
                      tabIndex={0}
                      role="article"
                      aria-label={title}
                      className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border ${
                        isOfficial 
                          ? 'border-[#D6B56D]/50 hover:border-[#145B52]/60' 
                          : 'border-[#145B52]/10 hover:border-[#D6B56D]/60'
                      } shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F2]`}
                    >
                      <div>
                        {/* Card Top: Icon & Category Label */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          {/* Icon Container */}
                          <div className={`w-12 h-12 rounded-2xl border shadow-xs flex items-center justify-center transition-colors duration-200 ${
                            isOfficial
                              ? 'bg-[#FAF8F2] border-[#D6B56D]/60 text-[#8C6D1F] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2]'
                              : 'bg-[#FAF8F2] border-[#145B52]/15 text-[#145B52] group-hover:bg-[#145B52] group-hover:text-[#FAF8F2]'
                          }`}>
                            <IconComponent className="w-6 h-6 transition-colors duration-200" aria-hidden="true" />
                          </div>

                          {/* Category Badge Pill */}
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                            isOfficial
                              ? 'bg-[#D6B56D]/15 text-[#8C6D1F] border-[#D6B56D]/50'
                              : 'bg-[#276749]/10 text-[#276749] border-[#276749]/20'
                          } ${fontClass}`}>
                            {categoryTitle}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl font-bold text-[#145B52] group-hover:text-[#0E423B] transition-colors leading-snug mb-3 ${fontClass}`}>
                          {title}
                        </h3>

                        {/* Summary */}
                        <p className={`text-sm text-[#242B29]/75 leading-relaxed font-normal mb-5 ${fontClass}`}>
                          {summary}
                        </p>

                        {/* Sub-details (if available) */}
                        {item.details && item.details.length > 0 && (
                          <div className="mb-5 p-3.5 rounded-xl bg-[#FAF8F2] border border-[#145B52]/10 space-y-2">
                            {item.details.map((d, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                                <span className={`font-semibold text-[#145B52] ${fontClass}`}>
                                  {d.label[locale] || d.label.en}:
                                </span>
                                <span className={`text-[#242B29]/80 sm:text-right ${fontClass}`}>
                                  {d.value[locale] || d.value.en}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer: Verified Status or Contact Prompt */}
                      <div className="pt-4 border-t border-[#145B52]/10">
                        {item.isUnknownOrPending ? (
                          /* Non-Presumptive Callout: Prominently asking user to contact organization */
                          <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#D6B56D]/60 space-y-2">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" aria-hidden="true" />
                              <p className={`text-xs font-semibold text-[#8C6D1F] leading-tight ${fontClass}`}>
                                {statusVal}
                              </p>
                            </div>
                            
                            {contactMsg && (
                              <p className={`text-[11px] text-[#242B29]/75 leading-relaxed italic ${fontClass}`}>
                                {contactMsg}
                              </p>
                            )}

                            <Link
                              href="/contact"
                              className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E423B] hover:underline pt-1 ${fontClass}`}
                            >
                              <span>{isBn ? 'সরাসরি তথ্য জানতে ক্লিক করুন' : 'Inquire Directly'}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                            </Link>
                          </div>
                        ) : (
                          /* Confirmed / Verified Status Badge */
                          <div className="flex items-center justify-between text-xs text-[#242B29]/75">
                            <span className={`inline-flex items-center gap-1.5 font-semibold text-[#276749] ${fontClass}`}>
                              <CheckCircle2 className="w-4 h-4 text-[#276749]" aria-hidden="true" />
                              {statusVal}
                            </span>
                            <span className="text-[#D6B56D] font-mono font-medium text-xs">
                              sorc.org
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              /* ACCESSIBLE SUMMARY TABLE VIEW */
              <motion.div
                key="table-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full overflow-x-auto rounded-2xl sm:rounded-3xl bg-white border border-[#145B52]/15 shadow-sm"
              >
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#FAF8F2] border-b border-[#145B52]/15 text-[#145B52] text-xs sm:text-sm font-bold uppercase tracking-wider">
                      <th scope="col" className={`py-4 px-6 ${fontClass}`}>
                        {isBn ? 'সেবার ক্ষেত্র / বিষয়' : 'Subject / Area'}
                      </th>
                      <th scope="col" className={`py-4 px-6 ${fontClass}`}>
                        {isBn ? 'তথ্যের শ্রেণি' : 'Category'}
                      </th>
                      <th scope="col" className={`py-4 px-6 ${fontClass}`}>
                        {isBn ? 'যাচাইকৃত তথ্য ও বিবরণ' : 'Verified Details / Status'}
                      </th>
                      <th scope="col" className={`py-4 px-6 text-right ${fontClass}`}>
                        {isBn ? 'যোগাযোগ ও পদক্ষেপ' : 'Action / Inquiry'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#145B52]/10 text-xs sm:text-sm text-[#242B29]/80">
                    {filteredItems.map((item) => {
                      const IconComponent = iconMap[item.iconName] || Info;
                      const title = item.title[locale] || item.title.en;
                      const summary = item.summary[locale] || item.summary.en;
                      const statusVal = item.statusValue[locale] || item.statusValue.en;
                      const categoryTitle = item.categoryLabel[locale] || item.categoryLabel.en;
                      const isOfficial = item.category === 'official';

                      return (
                        <tr 
                          key={item.id}
                          className="hover:bg-[#FAF8F2]/60 transition-colors duration-150 focus-within:bg-[#FAF8F2]"
                        >
                          {/* Subject / Area */}
                          <th scope="row" className="py-4 px-6 font-semibold text-[#145B52] align-top">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#145B52]/15 flex items-center justify-center shrink-0 text-[#145B52]">
                                <IconComponent className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <span className={`text-sm sm:text-base font-bold ${fontClass}`}>
                                {title}
                              </span>
                            </div>
                          </th>

                          {/* Category Badge */}
                          <td className="py-4 px-6 align-top">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${
                              isOfficial
                                ? 'bg-[#D6B56D]/15 text-[#8C6D1F] border-[#D6B56D]/50'
                                : 'bg-[#276749]/10 text-[#276749] border-[#276749]/20'
                            } ${fontClass}`}>
                              {categoryTitle}
                            </span>
                          </td>

                          {/* Details / Status */}
                          <td className="py-4 px-6 align-top max-w-sm">
                            <p className={`text-xs sm:text-sm leading-relaxed mb-2 ${fontClass}`}>
                              {summary}
                            </p>
                            <div className="flex items-center gap-1.5 font-semibold text-xs">
                              {item.isUnknownOrPending ? (
                                <span className={`inline-flex items-center gap-1.5 text-[#8C6D1F] ${fontClass}`}>
                                  <AlertCircle className="w-3.5 h-3.5 text-[#8C6D1F] shrink-0" aria-hidden="true" />
                                  {statusVal}
                                </span>
                              ) : (
                                <span className={`inline-flex items-center gap-1.5 text-[#276749] ${fontClass}`}>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#276749] shrink-0" aria-hidden="true" />
                                  {statusVal}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Action Button */}
                          <td className="py-4 px-6 text-right align-top">
                            <Link
                              href="/contact"
                              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56D] ${fontClass}`}
                            >
                              <span>{isBn ? 'যোগাযোগ' : 'Inquire'}</span>
                              <ArrowRight className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Central Direct Contact CTA & Clarification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-[#FAF8F2] text-base font-extrabold shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D6B56D] group ${fontClass}`}
          >
            <span>{ctaBtnText}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Bottom Clarification Notice Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-[#F2ECE0]/70 border border-[#145B52]/15 text-xs sm:text-sm text-[#242B29]/80 leading-relaxed max-w-4xl mx-auto flex items-start gap-3 shadow-xs"
        >
          <Info className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
          <p className={fontClass}>
            <strong className="text-[#145B52]">
              {isBn ? 'জরুরি জ্ঞাতব্য: ' : 'Important Notice: '}
            </strong>
            {noticeText}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
