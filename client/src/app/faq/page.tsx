'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { defaultFAQs, FAQItemAccordion } from '@/components/home/faq';

export default function FAQPage() {
  const { locale } = useLanguage();
  const [openItemId, setOpenItemId] = useState<string | null>(defaultFAQs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#145B52] to-[#276749] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6B56D]/30">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D6B56D]/20 border border-[#D6B56D]/40 text-[#D6B56D] text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-[#D6B56D]" />
            <span>{locale === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Help Center'}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F2]">
            {locale === 'bn' ? 'প্রশ্ন আছে? আমরা সহযোগিতায় প্রস্তুত।' : "Questions? We're Here to Help."}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed max-w-2xl mx-auto">
            {locale === 'bn'
              ? 'আমাদের সেবামূলক কার্যক্রম, অনুদান, বাসস্থান ও পরিদর্শন সংক্রান্ত প্রায়শই জিজ্ঞাসিত প্রশ্নাবলীর উত্তর।'
              : 'Find detailed answers to common inquiries regarding our programs, elder care services, volunteering, and visits.'}
          </p>
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md p-4 sm:p-8">
          <div className="divide-y divide-amber-200/80">
            {defaultFAQs.map((faq, index) => (
              <FAQItemAccordion
                key={faq.id}
                item={faq}
                index={index}
                isOpen={openItemId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* Direct Contact Assist Box */}
        <div className="rounded-2xl bg-[#FAF8F2] border border-amber-200/80 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#145B52]/10 border border-[#145B52]/20 flex items-center justify-center text-[#145B52] shrink-0 mt-0.5">
              <MessageSquare className="w-5 h-5 text-[#145B52]" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#145B52]">
                {locale === 'bn'
                  ? 'অন্য কোনো তথ্যের প্রয়োজন?'
                  : 'Need further personalized assistance?'}
              </h4>
              <p className="text-xs text-[#242B29]/75 leading-relaxed mt-0.5">
                {locale === 'bn'
                  ? 'আমাদের টিম সরাসরি আপনার প্রশ্নের উত্তর ও সহায়তা দিতে সর্বদা প্রস্তুত।'
                  : 'Our administrative and volunteer coordination teams are available to assist you.'}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#145B52] hover:bg-[#0E423B] transition shadow-xs"
          >
            <span>{locale === 'bn' ? 'সরাসরি যোগাযোগ করুন' : 'Contact Us Directly'}</span>
            <ArrowRight className="w-4 h-4 text-amber-200" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
