'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Heart, Users, Award, CheckCircle2, Sparkles, Building } from 'lucide-react';

export default function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="bg-[#0D4B4D] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>{locale === 'bn' ? 'আমাদের ইতিহাস ও রূপকল্প' : 'History & Vision of SORC'}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র' : 'Sonavan Old Rehabilitation Center'}
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
            {t.orgTagline}
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0D4B4D] uppercase tracking-wider bg-[#F4EFE6] px-3 py-1 rounded-md border border-amber-200">
                {locale === 'bn' ? 'আমাদের মূল আদর্শ' : 'Our Founding Mission'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D4B4D]">
                {locale === 'bn' ? 'অবহেলা থেকে প্রবীণদের সম্মানজনক পুনর্বাসন' : 'Restoring Dignity to Abandoned Seniors'}
              </h2>
            </div>
            
            <p className="text-sm text-gray-700 leading-relaxed">
              {locale === 'bn'
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) গঠিত হয়েছে সেইসব প্রবীণ পিতামাতাদের আশ্রয়ের উদ্দেশ্যে, যারা নদী ভাঙনে নিঃস্ব, পরিবার কর্তৃক পরিত্যক্ত অথবা জীবনপ্রদ্বীপে কোনো স্বজন পাননি। গাজীপুরের সবুজ মনোরম পরিবেশে আমরা তাদের জন্য গড়ে তুলেছি এক নতুন পরিবার।'
                : 'Sonavan Old Rehabilitation Center (SORC) was established to shelter elderly individuals left without family support due to poverty, river erosion, or social abandonment. Nestled in Gazipur, we provide a serene, green campus that feels like family.'}
            </p>

            <ul className="space-y-3 text-sm font-semibold text-gray-800">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{locale === 'bn' ? '২৪ ঘণ্টা নিবেদিত নার্সিং ও চিকিৎসক দল' : '24/7 Dedicated Nursing & Physician Staff'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{locale === 'bn' ? '১০০% অডিটেড ও প্রকাশ্যে নিরীক্ষিত কল্যাণ তহবিল' : '100% Audited & Publicly Verified Relief Funds'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{locale === 'bn' ? 'পুষ্টিকর অর্গানিক খাদ্য ও নিয়মিত শারীরিক ফিজিওথেরাপি' : 'Nutritious Organic Dining & Daily Physiotherapy'}</span>
              </li>
            </ul>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/30">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
              alt="SORC Elderly Care Rehabilitation Facility"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Key Core Pillars */}
      <section className="bg-[#F4EFE6]/70 py-16 border-y border-teal-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D4B4D]">
              {locale === 'bn' ? 'আমাদের সেবা ও অবকাঠামো' : 'Core Care Pillars & Facilities'}
            </h2>
            <p className="text-sm text-gray-600">
              {locale === 'bn' ? 'SORC কেয়ার কটেজে প্রতিটি প্রবীণ সদস্যের স্বাচ্ছন্দ্য নিশ্চিত করতে আমাদের সুসংগঠিত সেবা।' : 'Structured services ensuring complete physical and emotional well-being for all resident seniors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-900 text-[#D4AF37] flex items-center justify-center">
                <Heart className="w-6 h-6 fill-[#D4AF37]/30" />
              </div>
              <h3 className="text-lg font-bold text-[#0D4B4D]">
                {locale === 'bn' ? 'চিকিৎসা ও নার্সিং সেবা' : '24/7 Medical Care'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {locale === 'bn' 
                  ? 'দৈনন্দিন প্রেশার, ডায়াবেটিস পরীক্ষা, নিয়মিত ওষুধ বিতরণ ও ফিজিওথেরাপি সেশন।'
                  : 'Daily vitals monitoring, diabetes checks, scheduled medicine delivery, and physiotherapy.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-900 text-[#D4AF37] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D4B4D]">
                {locale === 'bn' ? 'নিরাপদ আবাসন' : 'Comfortable Sanctuary'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {locale === 'bn'
                  ? 'বাতাসঘেরা পরিচ্ছন্ন কক্ষ, আরামদায়ক বিছানা এবং সবুজ বাগান সংলগ্ন বিনোদন কেন্দ্র।'
                  : 'Airy clean bedrooms, comfortable bedding, and green outdoor recreational garden spaces.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-900 text-[#D4AF37] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D4B4D]">
                {locale === 'bn' ? 'স্বচ্ছ তহবিল পরিচালনা' : '100% Transparent Trust'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {locale === 'bn'
                  ? 'প্রতিটি খরচের ক্রয়ের রশিদ ও অডিট ভাউচার সরকারি নিয়মানুযায়ী ওয়েবসাইটে উন্মুক্ত।'
                  : 'Every expense voucher and purchase photo is publicly verified on our open web ledger.'}
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
