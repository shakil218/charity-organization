'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileCheck2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const LeadershipNotice: React.FC = () => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-7 sm:p-10 rounded-3xl bg-white border border-[#145B52]/15 shadow-[0_8px_30px_-6px_rgba(20,91,82,0.06)] relative overflow-hidden"
    >
      {/* Decorative background watermark badge */}
      <div 
        className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#FAF8F2] border border-[#145B52]/5 pointer-events-none -z-0 opacity-60 flex items-center justify-center"
        aria-hidden="true"
      >
        <ShieldCheck className="w-24 h-24 text-[#145B52]/10" />
      </div>

      <div className="relative z-10 space-y-6 max-w-3xl">
        {/* Verification Status Badge */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] text-[#145B52] border border-[#145B52]/15 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            <span>
              {isBn ? 'তথ্য যাচাইকরণ প্রক্রিয়াধীন' : 'Verification Underway'}
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#276749] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200/60">
            <FileCheck2 className="w-3 h-3 text-[#276749]" aria-hidden="true" />
            <span>
              {isBn ? 'নীতিগত অঙ্গীকার: ১০০% সত্যায়িত তথ্য' : 'Ethical Policy: Zero Invented Profiles'}
            </span>
          </span>
        </div>

        {/* Notice Title */}
        <div className="space-y-2">
          <h3 className={`text-xl sm:text-2xl font-black text-[#145B52] tracking-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn 
              ? 'নেতৃত্ব প্যানেলের তথ্যাদি আনুষ্ঠানিক অনুমোদন সাপেক্ষে পর্যালোচনাধীন' 
              : 'Leadership Information Pending Formal Board Ratification'}
          </h3>
          <p className={`text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কেবল প্রাতিষ্ঠানিক নথিপত্র দ্বারা অনুমোদিত নেতৃত্ব ও পরিচালন তথ্য প্রকাশে অঙ্গীকারবদ্ধ। পরিচালনা পর্ষদের আনুষ্ঠানিক প্রত্যয়ন ও নথিপত্র চূড়ান্ত হওয়া মাত্রই অনুমোদিত ব্যক্তিবর্গের বিস্তারিত পরিচিতি, দায়িত্ব ও শিক্ষাগত যোগ্যতা এই বিভাগে প্রকাশিত হবে।'
              : 'In strict adherence to our organizational integrity policy, Sonavan Old Rehabilitation Center never publishes unverified personnel names or executive credentials without formal board accreditation. Individual leadership profiles will be published here upon official verification.'}
          </p>
        </div>

        {/* Core Institutional Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/10 space-y-1">
            <div className="text-xs font-bold text-[#145B52] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'কোনো কাল্পনিক ব্যক্তিত্ব নয়' : 'Authentic Representation'}</span>
            </div>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {isBn
                ? 'অনুমোদিত নিয়োগ ব্যতীত কোনো প্রতিষ্ঠাতা বা পরিচালক পদবি কাল্পনিকভাবে উপস্থাপন করা হয় না।'
                : 'No unverified directors, founders, committee members, or honorary credentials are ever fabricated.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/10 space-y-1">
            <div className="text-xs font-bold text-[#145B52] flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'প্রাতিষ্ঠানিক অনুমোদন সাপেক্ষ' : 'Formal Board Ratification'}</span>
            </div>
            <p className="text-xs text-[#242B29]/70 leading-relaxed">
              {isBn
                ? 'প্রত্যেক দায়িত্বশীল ব্যক্তির বায়ো ও কর্মক্ষেত্র পরিচালনা পর্ষদ কর্তৃক অনুমোদিত হতে হবে।'
                : 'Every published bio, qualification, and scope of oversight is verified by the Board of Trustees.'}
            </p>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2 flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#145B52] bg-[#FAF8F2] hover:bg-[#145B52] hover:text-[#FAF8F2] px-4 py-2 rounded-xl border border-[#145B52]/20 shadow-2xs transition-colors duration-200 group"
          >
            <span>{isBn ? 'প্রশাসনিক তথ্যের জন্য যোগাযোগ করুন' : 'Contact Administrative Office'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] group-hover:text-[#FAF8F2] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
