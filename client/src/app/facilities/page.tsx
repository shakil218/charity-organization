'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import { FacilitiesHeroSection } from '@/components/facilities';

export default function FacilitiesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* 1. Full-width Premium Facilities Hero Section */}
      <FacilitiesHeroSection primaryButtonHref="#facilities-overview" />

      {/* 2. Facilities Cards Grid */}
      <section id="facilities-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.facilitiesPage.items.map((facility, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-teal-900/10 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{facility.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#145B52]">
                  {facility.title}
                </h3>
                <p className="text-sm text-[#242B29]/80 leading-relaxed">
                  {facility.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs text-[#242B29]/60">
                <span>{locale === 'bn' ? 'প্রবীণবান্ধব এক্সেসিবিলিটি ডিজাইন' : 'Elder-friendly accessible architecture'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Visual Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-2 border-[#D6B56D]/30 bg-teal-950">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
            alt="SORC Rehabilitation Center Campus"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <h3 className="text-lg font-bold text-[#D6B56D]">
              {locale === 'bn' ? 'সবুজ মনোরম ক্যাম্পাসের দৃশ্য' : 'Serene Natural Campus Environment'}
            </h3>
            <p className="text-xs text-teal-100/90">
              {locale === 'bn' ? 'গাজীপুর সদরে অবস্থিত সোনাভান পুনর্বাসন কেন্দ্র ক্যাম্পাস।' : 'Sonavan Rehabilitation Center Campus located in Gazipur Sadar.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
