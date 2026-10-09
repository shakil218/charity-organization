'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StoriesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#145B52] to-[#276749] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6B56D]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold">
            <Newspaper className="w-4 h-4 text-[#D6B56D]" />
            <span>{t.nav.stories}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F2]">
            {t.storiesPage.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.storiesPage.subtitle}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.storiesPage.articles.map((article, idx) => (
            <article key={idx} className="bg-white p-8 rounded-3xl border border-teal-900/10 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F2ECE0] text-[#145B52] font-bold border border-amber-200">
                    {article.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#145B52] leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#242B29]/80 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/elderly-care"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B52] hover:text-[#0E423B] transition"
                >
                  <span>{locale === 'bn' ? 'বিস্তারিত গল্প দেখুন' : 'Read Full Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
