'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  FileLock2, 
  Download 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TransparencyDocument } from './types';

interface DocumentResourceCardProps {
  document: TransparencyDocument;
}

export const DocumentResourceCard: React.FC<DocumentResourceCardProps> = ({ document }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const IconComp = document.icon;
  const title = document.title[locale] || document.title.en;
  const category = document.category[locale] || document.category.en;
  const description = document.description[locale] || document.description.en;
  const statusText = document.statusText[locale] || document.statusText.en;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between space-y-5 ${
        document.isAvailable 
          ? 'border-[#145B52]/20 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.08)] hover:shadow-[0_16px_32px_-8px_rgba(20,91,82,0.14)] hover:border-[#D6B56D]'
          : 'border-[#145B52]/10 shadow-[0_4px_16px_-4px_rgba(20,91,82,0.04)] hover:shadow-[0_10px_24px_-6px_rgba(20,91,82,0.08)] hover:border-[#145B52]/20'
      }`}
    >
      <div className="space-y-4">
        {/* Top Header: Icon & Status Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
              document.isAvailable
                ? 'bg-[#145B52] text-[#D6B56D] border-[#145B52]'
                : 'bg-[#145B52]/10 text-[#145B52] border-[#145B52]/15'
            }`}>
              <IconComp className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-[#145B52] bg-[#FAF8F2] px-2.5 py-0.5 rounded-md border border-[#145B52]/10">
                {category}
              </span>
            </div>
          </div>

          {/* Availability / Verification Status Pill */}
          <div className="shrink-0">
            {document.isAvailable ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#276749] bg-green-50 px-2.5 py-1 rounded-full border border-green-200/80 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-[#276749]" aria-hidden="true" />
                <span>{isBn ? 'প্রকাশিত' : 'Available'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-50/90 px-2.5 py-1 rounded-full border border-amber-200/70">
                <Clock className="w-3 h-3 text-amber-700" aria-hidden="true" />
                <span>{isBn ? 'এখনও প্রকাশিত হয়নি' : 'Not Yet Published'}</span>
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-base sm:text-lg font-bold text-[#145B52] leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {description}
        </p>
      </div>

      {/* Card Action & Status Footer */}
      <div className="pt-4 border-t border-[#145B52]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Status description */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#242B29]/65">
          {document.isAvailable ? (
            <span className="text-[#276749] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#276749]" />
              <span>{statusText}</span>
            </span>
          ) : (
            <span className="text-amber-800/90 font-medium flex items-center gap-1">
              <FileLock2 className="w-3 h-3 text-amber-700" />
              <span>{statusText}</span>
            </span>
          )}
        </div>

        {/* Action Button: ONLY when an actual document is available! Never create fake download links! */}
        {document.isAvailable && document.documentUrl ? (
          <Link
            href={document.documentUrl}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs font-bold shadow-2xs hover:shadow-sm transition-all duration-200 group shrink-0"
          >
            <span>
              {document.actionType === 'download'
                ? (isBn ? 'ডাউনলোড করুন' : 'Download Document')
                : (isBn ? 'নথিটি দেখুন' : 'View Document')}
            </span>
            {document.actionType === 'download' ? (
              <Download className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            )}
          </Link>
        ) : (
          /* When unavailable, provide official administrative inquiry link without fake download links */
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#145B52]/80 hover:text-[#145B52] hover:underline transition-colors shrink-0"
          >
            <span>{isBn ? 'নথির অবস্থা জানুন' : 'Inquire Status'}</span>
            <ExternalLink className="w-3 h-3 text-[#D6B56D]" aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};
