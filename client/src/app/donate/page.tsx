'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, CreditCard, Lock, Award } from 'lucide-react';

interface PageProps {
  onOpenDonateModal?: (residentName?: string, residentId?: string) => void;
}

export default function DonatePage({ onOpenDonateModal }: PageProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="space-y-12 py-12">
      
      <section className="bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>{t.donationModal.title}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {locale === 'bn' ? 'প্রবীণদের সেবায় দান করুন' : 'Empower Dignified Elderly Care'}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.orgTagline}
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenDonateModal?.()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E8C865] to-[#C5A028] text-teal-950 font-extrabold text-base shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-teal-950" />
              <span>{t.donationModal.submitBtn}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-teal-900/10 shadow-sm space-y-3">
            <CreditCard className="w-8 h-8 text-[#0D4B4D]" />
            <h3 className="text-base font-bold text-[#0D4B4D]">
              {locale === 'bn' ? 'বিকাশ / নগদ / রকেট' : 'bKash / Nagad / Rocket'}
            </h3>
            <p className="text-xs text-gray-600">
              {locale === 'bn' ? 'বাংলাদেশের যেকোনো মোবাইল ব্যাংকিং অ্যাপ দিয়ে অনুদান দিন।' : 'Instant contribution from any Bangladesh MFS account.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-900/10 shadow-sm space-y-3">
            <Lock className="w-8 h-8 text-[#0D4B4D]" />
            <h3 className="text-base font-bold text-[#0D4B4D]">
              {locale === 'bn' ? 'আন্তর্জাতিক কার্ড (USD)' : 'International Stripe (USD)'}
            </h3>
            <p className="text-xs text-gray-600">
              {locale === 'bn' ? 'প্রবাসীদের জন্য Visa, Mastercard এবং Stripe সুবিধা।' : 'Global USD payments for expatriates and international supporters.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-900/10 shadow-sm space-y-3">
            <Award className="w-8 h-8 text-emerald-600" />
            <h3 className="text-base font-bold text-[#0D4B4D]">
              {locale === 'bn' ? 'করমুক্ত ট্যাক্স রসিদ' : '100% Tax-Exempt Receipt'}
            </h3>
            <p className="text-xs text-gray-600">
              {locale === 'bn' ? 'প্রতিটি অনুদানের জন্য ডাউনলোডযোগ্য অফিশিয়াল ডিজিটাল ট্যাক্স রসিদ।' : 'Automated digital receipt generated for tax-exemption claims.'}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
