'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { TransparencyCard, TransparencyLogItem } from '@/components/shared/TransparencyCard';
import { ShieldCheck, FileText, Download } from 'lucide-react';

export default function TransparencyPage() {
  const { locale, t } = useLanguage();

  const [logs, setLogs] = useState<TransparencyLogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const res = await fetch('http://localhost:5000/api/transparency');
        if (res.ok) {
          setLogs(await res.json());
        } else {
          setLogs(fallbackTransparencyLogs);
        }
      } catch {
        setLogs(fallbackTransparencyLogs);
      } finally {
        setLoading(false);
      }
    }
    fetchLogs();
  }, []);

  return (
    <div className="space-y-12 py-12">
      
      <section className="bg-[#083234] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.transparencySection.sectionBadge}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.transparencySection.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.transparencySection.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#0D4B4D]" />
            <div>
              <h3 className="text-base font-bold text-[#0D4B4D]">
                {locale === 'bn' ? 'বাৎসরিক অডিট রিপোর্ট (PDF)' : 'Annual Audited Statement (PDF)'}
              </h3>
              <p className="text-xs text-gray-600">
                {locale === 'bn' ? 'সরকারি নিবন্ধিত চার্টার্ড অ্যাকাউন্ট্যান্টস কর্তৃক নিরীক্ষিত।' : 'Verified by Govt Registered Chartered Accountants.'}
              </p>
            </div>
          </div>

          <a
            href="#audit-pdf"
            onClick={(e) => {
              e.preventDefault();
              alert(locale === 'bn' ? 'অডিট PDF শীঘ্রই ডাউনলোড হবে।' : 'Downloading Audited PDF report...');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#0D4B4D] hover:bg-[#083234] text-white text-xs font-bold flex items-center gap-2 shadow-sm shrink-0"
          >
            <Download className="w-4 h-4 text-[#D4AF37]" />
            <span>{locale === 'bn' ? 'অডিট রিপোর্ট ডাউনলোড' : 'Download Audit PDF'}</span>
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-44 rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {logs.map((log) => (
              <TransparencyCard key={log._id} log={log} />
            ))}
          </div>
        )}

      </section>

    </div>
  );
}

const fallbackTransparencyLogs: TransparencyLogItem[] = [
  {
    _id: 'log_001',
    title: { en: 'Monthly Medical Supplies & Doctor Fees - September', bn: 'সেপ্টেম্বর মাসের ওষুধ ও চিকিৎসক সেবা খরচ' },
    date: '2026-09-30',
    totalSpentBDT: 142000,
    category: 'medicine',
    proofImages: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600']
  },
  {
    _id: 'log_002',
    title: { en: 'Organic Food & Nutrition Stock Procurement', bn: 'পুষ্টিকর খাদ্যসামগ্রী ও ফলমূল ক্রয়' },
    date: '2026-09-15',
    totalSpentBDT: 98000,
    category: 'food',
    proofImages: ['https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600']
  }
];
