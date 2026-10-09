'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Users, ShieldAlert, Award } from 'lucide-react';

export default function TeamPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#145B52] to-[#276749] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6B56D]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold">
            <Users className="w-4 h-4 text-[#D6B56D]" />
            <span>{t.nav.team}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F2]">
            {t.teamPage.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.teamPage.subtitle}
          </p>
        </div>
      </section>

      {/* Accuracy Disclaimer Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 text-xs">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-sm font-bold text-amber-900 mb-1">
              {locale === 'bn' ? 'সতর্কবার্তা ও অনুমোদন বিজ্ঞপ্তি' : 'Accuracy Verification Notice'}
            </strong>
            <p className="leading-relaxed">
              {t.teamPage.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Team Roster Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.teamPage.members.map((member, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#F2ECE0] text-[#145B52] text-xs font-bold border border-amber-200">
                  {member.status}
                </span>
                <Award className="w-6 h-6 text-[#D6B56D]" />
              </div>

              <h3 className="text-xl font-bold text-[#145B52]">
                {member.name}
              </h3>
              <p className="text-xs font-extrabold text-[#276749] uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-sm text-[#242B29]/80 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
