'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ServicesHeroSection } from '@/components/services';
import { Activity, Heart, Utensils, Smile } from 'lucide-react';

interface PageProps {
  onOpenDonateModal?: () => void;
}

export default function ServicesPage({ onOpenDonateModal }: PageProps) {
  const { locale, t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity className="w-8 h-8 text-[#145B52]" />,
    Heart: <Heart className="w-8 h-8 text-[#145B52]" />,
    Utensils: <Utensils className="w-8 h-8 text-[#145B52]" />,
    Smile: <Smile className="w-8 h-8 text-[#145B52]" />
  };

  return (
    <div className="flex flex-col">
      {/* Full-width Premium Services Hero Section */}
      <ServicesHeroSection />

      <div className="space-y-16 py-12 sm:py-16">
        {/* Services Grid */}
        <section id="services-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.servicesPage.items.map((item, idx) => {
            const anchorIds = ['elderly-support', 'rehabilitation-assistance', 'daily-living-support', 'social-engagement'];
            return (
              <div
                key={idx}
                id={anchorIds[idx]}
                className="scroll-mt-24 bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm hover:shadow-md transition space-y-4"
              >
              <div className="w-14 h-14 rounded-2xl bg-[#F2ECE0] flex items-center justify-center">
                {iconMap[item.icon] || <Heart className="w-8 h-8 text-[#145B52]" />}
              </div>
              <h3 className="text-xl font-bold text-[#145B52]">
                {item.title}
              </h3>
              <p className="text-sm text-[#242B29]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
        </div>
      </section>

      {/* Accuracy Verification Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#F2ECE0] border border-amber-200 text-xs text-[#242B29]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            <strong>{locale === 'bn' ? 'দাপ্তরিক নির্দেশিকা:' : 'Official Notice:'}</strong> {locale === 'bn' ? 'নির্দিষ্ট সেবা কর্মসূচি ও চিকিৎসা টিম সংক্রান্ত তথ্যাবলী কেন্দ্র হতে চূড়ান্ত যাচাই সাপেক্ষে হালনাগাদ করা হবে।' : 'Specific medical procedures and specialist schedules are subject to final confirmation by SORC authority.'}
          </p>
          <button
            onClick={onOpenDonateModal}
            className="px-5 py-2.5 rounded-xl bg-[#145B52] text-white text-xs font-bold shrink-0 hover:bg-[#0E423B] transition"
          >
            {t.nav.donate}
          </button>
        </div>
      </section>
      </div>

    </div>
  );
}
