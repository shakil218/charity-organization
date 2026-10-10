'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Lock, EyeOff, FileText, ArrowLeft, Heart } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#145B52] hover:text-[#0E423B] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#145B52] rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
        </Link>

        {/* Header Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B52]/10 border border-[#145B52]/25 text-[#145B52] text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-[#145B52]" />
            <span>{locale === 'bn' ? 'নৈতিক প্রতিশ্রুতি ও নিরাপত্তা' : 'Ethical Governance & Privacy'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#145B52] tracking-tight">
            {locale === 'bn' ? 'গোপনীয়তা নীতিমালা ও মর্যাদা সুরক্ষা' : 'Privacy & Dignity Safeguard Policy'}
          </h1>

          <p className="text-sm sm:text-base text-[#242B29]/80 leading-relaxed font-normal">
            {locale === 'bn'
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) প্রবীণ বাসিন্দাদের আত্মমর্যাদা, ব্যক্তিগত গোপনীয়তা এবং দাতাদের তথ্যের সর্বোচ্চ নিরাপত্তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ।'
              : 'Sonavan Old Rehabilitation Center (SORC) is dedicated to safeguarding elder resident dignity, personal privacy, and donor data integrity with full accountability.'}
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">

          {/* Section 1: Resident Photographic & Personal Privacy */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-teal-900/10 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#145B52]">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE0] flex items-center justify-center shrink-0">
                <EyeOff className="w-5 h-5 text-[#145B52]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">
                {locale === 'bn' ? '১. প্রবীণদের ব্যক্তিগত গোপনীয়তা ও আলোকচিত্র নীতি' : '1. Resident Privacy & Photography Consent'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#242B29]/85 leading-relaxed pl-0 sm:pl-13">
              {locale === 'bn'
                ? 'প্রবীণদের মানবিক মর্যাদা রক্ষায় কোনো প্রকার অনুমতি ছাড়া চিহ্নিতযোগ্য ছবি বা ব্যক্তিগত স্পর্শকাতর চিকিৎসা তথ্য সর্বসাধারণের জন্য প্রকাশ করা হয় না। ওয়েবসাইটে ব্যবহৃত অধিকাংশ দৃশ্যপট প্রতীকী ও অনুকরণীয় পরিবেশের রূপরেখা মাত্র।'
                : 'To protect personal dignity and autonomy, identifiable photographs or sensitive medical records of elder residents are never published without documented consent. Community visuals represent illustrative atmospheres.'}
            </p>
          </div>

          {/* Section 2: Donor Data Confidentiality */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-teal-900/10 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#145B52]">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE0] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#145B52]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">
                {locale === 'bn' ? '২. অনুদানকারী ও আর্থিক লেনদেনের গোপনীয়তা' : '2. Donor Confidentiality & Transaction Security'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#242B29]/85 leading-relaxed pl-0 sm:pl-13">
              {locale === 'bn'
                ? 'অনলাইন অনুদান প্রদানকারীদের নাম, ফোন নম্বর বা ইমেইল কোনো তৃতীয় পক্ষের সাথে বাণিজ্যিক উদ্দেশ্যে শেয়ার করা হয় না। দাতা চাইলে নাম প্রকাশ না করে সম্পূর্ণ বেনামে (Anonymous) অনুদান প্রদান করতে পারেন।'
                : 'Donor contact information, transaction receipts, and payment credentials are kept strictly confidential. Donors can also choose to contribute anonymously without public name attribution.'}
            </p>
          </div>

          {/* Section 3: Data Protection & Inquiries */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-teal-900/10 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#145B52]">
              <div className="w-10 h-10 rounded-xl bg-[#F2ECE0] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#145B52]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">
                {locale === 'bn' ? '৩. যোগাযোগ ও তথ্যের অধিকার' : '3. Inquiries & Data Rights'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#242B29]/85 leading-relaxed pl-0 sm:pl-13">
              {locale === 'bn'
                ? 'স্বেচ্ছাসেবক আবেদনপত্র ও সাধারণ অনুসন্ধান বার্তা কেবল দাপ্তরিক যোগাযোগেই ব্যবহৃত হয়। গোপনীয়তা বিষয়ক যেকোনো প্রশ্নে info@sorc-bd.org ঠিকানায় যোগাযোগ করুন।'
                : 'Volunteer applications and general messages are processed solely for organizational coordination. For any privacy-related questions, please reach out directly to info@sorc-bd.org.'}
            </p>
          </div>

        </div>

        {/* Footer Contact Note */}
        <div className="p-6 rounded-2xl bg-[#F2ECE0] border border-amber-200/80 text-xs text-[#242B29]/80 flex items-center gap-3">
          <Heart className="w-5 h-5 text-[#D6B56D] shrink-0" />
          <p>
            {locale === 'bn'
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র — প্রবীণদের সুরক্ষা, মর্যাদা ও ভালোবাসার বিশ্বস্ত ঠিকানা।'
              : 'Sonavan Old Rehabilitation Center — Dedicated to dignified shelter, compassionate care, and transparent governance.'}
          </p>
        </div>

      </div>
    </div>
  );
}
