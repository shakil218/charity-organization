'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PartnerLogo } from './types';

interface PartnerLogoStripProps {
  partners?: PartnerLogo[];
}

export const PartnerLogoStrip: React.FC<PartnerLogoStripProps> = ({ partners = [] }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const hasPartners = partners && partners.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-7 sm:p-9 rounded-3xl bg-white border border-[#145B52]/12 shadow-[0_4px_24px_-4px_rgba(20,91,82,0.06)] space-y-6"
    >
      {hasPartners ? (
        /* Rendered only when approved partners are supplied */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#145B52]/10 pb-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-[#145B52] uppercase tracking-wider">
                {isBn ? 'অনুমোদিত প্রাতিষ্ঠানিক সহযোগী' : 'Approved Partner Organizations'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#145B52]">
                {isBn ? 'প্রবীণ সেবায় যুক্ত সহযোগী সংস্থাসমূহ' : 'Collaborating for Elder Well-being'}
              </h4>
            </div>
            <span className="self-start sm:self-center shrink-0 text-xs font-semibold text-[#276749] bg-green-50 px-3 py-1 rounded-full border border-green-200">
              {isBn ? 'দ্বিপাক্ষিক চুক্তিবদ্ধ' : 'Verified MoUs'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner) => {
              const partnerName = partner.name[locale] || partner.name.en;
              return (
                <div 
                  key={partner.id}
                  className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#145B52]/10 flex flex-col items-center justify-center space-y-2 group hover:border-[#D6B56D] transition-colors"
                >
                  <div className="relative w-24 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={partner.logoUrl}
                      alt={partnerName}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#145B52]/80 text-center truncate w-full">
                    {partnerName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Transparent Invitation Framework displayed when no partner logos are ratified yet */
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#145B52]/15 text-[#145B52] text-xs font-bold">
              <Handshake className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'অংশীদারিত্বের উন্মুক্ত আহ্বান' : 'Open Partnership Invitation'}</span>
            </div>

            <h4 className={`text-lg sm:text-xl font-bold text-[#145B52] tracking-tight leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn 
                ? 'প্রবীণদের সেবায় দায়িত্বশীল সহযোগিতায় আমরা আগ্রহী' 
                : 'Inviting Ethical Healthcare, Civic & Academic Collaborations'}
            </h4>

            <p className={`text-xs sm:text-sm text-[#242B29]/75 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র অলাভজনক আদর্শে পরিচালিত। প্রবীণদের স্বাস্থ্যসেবা ও মানসিক স্বস্তি বৃদ্ধি করতে আমরা হাসপাতাল, শিক্ষাপ্রতিষ্ঠান ও সামাজিক সংস্থার সাথে যৌথভাবে কাজ করতে প্রস্তুত। প্রাতিষ্ঠানিক সত্যনিষ্ঠা বজায় রাখতে কেবলমাত্র দ্বিপাক্ষিক সমঝোতা স্মারক (MoU) স্বাক্ষরের পরই সহযোগীদের লোগো প্রকাশ করা হয়।'
                : 'Sonavan Old Rehabilitation Center warmly invites hospitals, educational bodies, and civic non-profits to co-create supportive environments for older adults. In strict adherence to our truthfulness policy, partner logos are displayed exclusively following formal bilateral agreements.'}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs sm:text-sm font-bold shadow-2xs hover:shadow-sm transition-all duration-200 group"
            >
              <span>{isBn ? 'অংশীদারিত্বের প্রস্তাব দিন' : 'Initiate Partnership Dialogue'}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B56D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#276749]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#276749]" aria-hidden="true" />
              <span>{isBn ? 'কোনো অপ্রমাণিত লোগো বা দাবি নয়' : 'Zero Invented Endorsements'}</span>
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};
