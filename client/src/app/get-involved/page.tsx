'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HeartHandshake, Users, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  onOpenDonateModal?: () => void;
}

export default function GetInvolvedPage({ onOpenDonateModal }: PageProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#145B52] to-[#276749] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6B56D]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold">
            <HeartHandshake className="w-4 h-4 text-[#D6B56D]" />
            <span>{t.nav.getInvolved}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F2]">
            {t.getInvolvedPage.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.getInvolvedPage.subtitle}
          </p>
        </div>
      </section>

      {/* Engagement Options Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Volunteer Box */}
          <div className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F2ECE0] flex items-center justify-center">
                <Users className="w-7 h-7 text-[#145B52]" />
              </div>
              <h3 className="text-2xl font-bold text-[#145B52]">
                {t.getInvolvedPage.volunteerTitle}
              </h3>
              <p className="text-sm text-[#242B29]/80 leading-relaxed">
                {locale === 'bn' 
                  ? 'প্রবীণ সদস্যদের সাথে সময় কাটান, চিকিৎসা সেবা দিন অথবা আমাদের প্রচারণামূলক কর্মকাণ্ডে ভূমিকা রাখুন।'
                  : 'Offer companionship, medical skills, social media assistance, or event management support.'}
              </p>
            </div>
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-sm font-bold shadow-md transition"
            >
              <span>{t.volunteerPage.submitBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Corporate / CSR Box */}
          <div className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F2ECE0] flex items-center justify-center">
                <Building className="w-7 h-7 text-[#145B52]" />
              </div>
              <h3 className="text-2xl font-bold text-[#145B52]">
                {t.getInvolvedPage.partnerTitle}
              </h3>
              <p className="text-sm text-[#242B29]/80 leading-relaxed">
                {locale === 'bn'
                  ? 'আপনার প্রতিষ্ঠানের CSR তহবিলের মাধ্যমে প্রবীণদের বাসস্থান উন্নয়ন বা স্বাস্থ্যের দায়িত্ব নিন।'
                  : 'Sponsor care wings, medical infrastructure, or seasonal relief packages through corporate CSR funds.'}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#276749] hover:bg-[#1E4D2B] text-white text-sm font-bold shadow-md transition"
            >
              <span>{locale === 'bn' ? 'অংশীদারিত্বের জন্য যোগাযোগ করুন' : 'Inquire for Partnerships'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
