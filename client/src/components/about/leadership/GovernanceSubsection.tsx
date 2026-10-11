'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { VERIFIED_GOVERNANCE_STRUCTURE } from './data';

const staggerGovernance: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const governanceCardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const GovernanceSubsection: React.FC = () => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <div className="space-y-8 pt-6">
      {/* Subsection Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#145B52]/10 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-md border border-[#145B52]/15">
              {isBn ? 'প্রাতিষ্ঠানিক সুশাসন' : 'Governance & Oversight'}
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-black text-[#145B52] ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn 
              ? 'প্রাতিষ্ঠানিক পরিচালনা, তদারকি ও সিদ্ধান্ত গ্রহণ প্রক্রিয়া' 
              : 'Verified Management Structure, Oversight & Decision-Making'}
          </h3>
          <p className={`text-xs sm:text-sm text-[#242B29]/70 max-w-2xl ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'প্রবীণদের মর্যাদা সুরক্ষা ও সামাজিক দায়বদ্ধতা নিশ্চিতকরণে সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের সুসংগঠিত পরিচালনা কাঠামো।'
              : 'Describing our multi-tier framework guaranteeing accountable administration, caregiver ethics, and resident-centered decision-making.'}
          </p>
        </div>

        <div className="self-start sm:self-center shrink-0 whitespace-nowrap flex items-center gap-1.5 text-xs font-semibold text-[#145B52] bg-white px-3.5 py-1.5 rounded-full border border-[#145B52]/15 shadow-2xs">
          <Landmark className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
          <span>{isBn ? 'অনুমোদিত পরিচালনা কাঠামো' : 'Verified Framework'}</span>
        </div>
      </div>

      {/* 2-Column Responsive Grid on md & lg Devices */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerGovernance}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {VERIFIED_GOVERNANCE_STRUCTURE.map((item) => {
          const IconComp = item.icon;
          const title = item.title[locale] || item.title.en;
          const category = item.category[locale] || item.category.en;
          const description = item.description[locale] || item.description.en;
          const badge = item.badge[locale] || item.badge.en;
          const protocols = item.keyProtocols[locale] || item.keyProtocols.en;

          return (
            <motion.div
              key={item.id}
              variants={governanceCardVariant}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_4px_16px_-4px_rgba(20,91,82,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(20,91,82,0.1)] hover:border-[#D6B56D]/70 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52]">
                      <IconComp className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-[#145B52] bg-[#FAF8F2] px-2.5 py-1 rounded-lg border border-[#145B52]/10">
                      {category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#276749]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
                    <span>{badge}</span>
                  </span>
                </div>

                {/* Title */}
                <h4 className={`text-base sm:text-lg font-bold text-[#145B52] leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                  {title}
                </h4>

                {/* Narrative Description */}
                <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
                  {description}
                </p>
              </div>

              {/* Verified Protocols Bullet List */}
              <div className="pt-4 border-t border-[#145B52]/8 space-y-2">
                <span className="block text-[10px] font-extrabold text-[#145B52]/70 uppercase tracking-wider">
                  {isBn ? 'প্রধান তদারকি নীতিমালা' : 'Operational Protocols'}
                </span>
                <ul className="space-y-1.5">
                  {protocols.map((protocol, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#242B29]/80 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                        {protocol}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
