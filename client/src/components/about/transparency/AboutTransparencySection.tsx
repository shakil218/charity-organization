'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  Info, 
  Lock 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AboutTransparencySectionProps } from './types';
import { DEFAULT_TRANSPARENCY_DOCUMENTS } from './data';
import { DocumentResourceCard } from './DocumentResourceCard';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const AboutTransparencySection: React.FC<AboutTransparencySectionProps> = ({
  id = 'transparency-accountability',
  className = '',
  documents = DEFAULT_TRANSPARENCY_DOCUMENTS
}) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 bg-[#F9F6EE]/60 border-t border-[#145B52]/10 scroll-mt-24 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">

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
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{isBn ? 'স্বচ্ছতা ও জবাবদিহিতা' : 'TRANSPARENCY & ACCOUNTABILITY'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#145B52]/15 text-[#276749] text-xs font-semibold shadow-2xs">
              <FileCheck2 className="w-3.5 h-3.5 text-[#276749]" aria-hidden="true" />
              <span>{isBn ? 'উন্মুক্ত প্রাতিষ্ঠানিক তথ্য' : 'Open Public Records'}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[#145B52] tracking-tight leading-tight ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn ? 'স্বচ্ছতার মাধ্যমে আস্থা ও বিশ্বাস' : 'Trust Through Transparency'}
          </h2>

          {/* Introduction Paragraph */}
          <p className={`text-sm sm:text-base md:text-lg text-[#242B29]/80 leading-relaxed font-normal max-w-2xl mx-auto ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'সুস্পষ্ট তথ্য এবং দায়িত্বশীল যোগাযোগ একটি সংস্থার উদ্দেশ্য ও মানবিক কার্যক্রম অনুধাবনে সমাজ ও শুভানুধ্যায়ীদের সহায়তা করে।'
              : 'Clear information and responsible communication help communities understand an organization’s purpose and activities.'}
          </p>

          {/* Gold Decorative Center Accent */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D6B56D]" />
            <span className="w-2 h-2 rounded-full bg-[#D6B56D]" />
            <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D6B56D]" />
          </div>
        </motion.div>

        {/* Informative Disclosure & Integrity Banner */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#145B52]/15 shadow-xs flex items-start gap-3.5 text-xs text-[#242B29]/80">
          <Info className="w-4 h-4 text-[#145B52] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <strong className="block text-xs font-bold text-[#145B52]">
              {isBn ? 'নথি প্রকাশনা ও সত্যনিষ্ঠা নীতি' : 'Publication Policy & Record Authenticity'}
            </strong>
            <p className={`leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isBn
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কোনো মনগড়া নিবন্ধন নম্বর, অসত্যায়িত হিসাবরক্ষণ বা কাল্পনিক আইনি সনদ প্রচার করে না। যেসকল নথিপত্র আনুষ্ঠানিকভাবে অনুমোদিত ও নিরীক্ষিত, কেবল সেগুলোরই বৈধ সংস্করণ এখানে প্রকাশিত হয়। অপ্রকাশিত নথিসমূহের অবস্থা স্বচ্ছভাবে নিচে প্রদর্শিত রয়েছে।'
                : 'In strict compliance with our ethical disclosure standard, Sonavan Old Rehabilitation Center never invents registration numbers, legal status claims, or uncertified financial accounts. Documents are made available solely upon formal board certification and external audit completion.'}
            </p>
          </div>
        </div>

        {/* Responsive Document Resources Grid (3 on lg, 2 on md, 1 on mobile) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerCards}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {documents.map((doc) => (
            <DocumentResourceCard key={doc.id} document={doc} />
          ))}
        </motion.div>

        {/* Bottom Integrity Assurance Footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#FAF8F2] border border-[#D6B56D]/40 shadow-xs flex items-start gap-3.5 text-xs text-[#242B29]/75"
        >
          <Lock className="w-4 h-4 text-[#276749] shrink-0 mt-0.5" aria-hidden="true" />
          <p className={`leading-relaxed ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {isBn
              ? 'আইনি নিশ্চয়তা: সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের যেকোনো প্রাতিষ্ঠানিক তথ্যের সত্যতা যাচাইয়ের জন্য সাধারণ নাগরিক ও শুভানুধ্যায়ীদের সরাসরি প্রশাসনিক দপ্তরে যোগাযোগের জন্য স্বাগত জানানো হয়। কোনো প্রকার অসত্যায়িত বা কাল্পনিক লিংক এই ওয়েবসাইটে অন্তর্ভুক্ত নয়।'
              : 'Institutional Integrity Guarantee: Stakeholders, donors, and community members are welcomed to verify all organizational matters directly with our administrative registry. We never create artificial download links or unverified representations.'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
