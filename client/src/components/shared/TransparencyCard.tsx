'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Calendar, FileText, Eye, X } from 'lucide-react';

export interface TransparencyLogItem {
  _id: string;
  title: { en: string; bn: string };
  date: string;
  totalSpentBDT: number;
  category: string;
  proofImages: string[];
}

interface TransparencyCardProps {
  log: TransparencyLogItem;
}

export const TransparencyCard: React.FC<TransparencyCardProps> = ({ log }) => {
  const { locale, t } = useLanguage();
  const [showProofModal, setShowProofModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-teal-900/10 p-6 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.transparencySection.auditBadge}</span>
            </span>
            <span className="text-gray-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{log.date}</span>
            </span>
          </div>

          <h3 className="text-base font-bold text-[#0D4B4D]">
            {log.title[locale]}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="block text-xs text-gray-500">{locale === 'bn' ? 'মোট ব্যয়িত টাকা' : 'Total Expense'}</span>
            <span className="text-lg font-extrabold text-[#1E4D2B]">
              ৳{log.totalSpentBDT.toLocaleString()} BDT
            </span>
          </div>

          <button
            onClick={() => setShowProofModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4EFE6] hover:bg-amber-100 text-[#0D4B4D] text-xs font-bold transition border border-amber-200/70"
          >
            <Eye className="w-4 h-4 text-[#0D4B4D]" />
            <span>{t.transparencySection.viewProofs}</span>
          </button>
        </div>
      </div>

      {/* Proof Modal */}
      {showProofModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 space-y-4 border border-teal-900/20 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#0D4B4D]">{log.title[locale]}</h3>
                <p className="text-xs text-emerald-700 font-semibold">{t.transparencySection.auditBadge} • {log.date}</p>
              </div>
              <button
                onClick={() => setShowProofModal(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                <FileText className="w-4 h-4 text-[#0D4B4D]" />
                <span>{locale === 'bn' ? 'যাচাইকৃত ক্রয়ের ছবি ও অডিট ভাউচার' : 'Verified Receipt & Expense Vouchers'}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {log.proofImages.map((imgUrl, idx) => (
                  <div key={idx} className="relative h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <Image
                      src={imgUrl}
                      alt={`Expense Proof ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t text-right">
              <button
                onClick={() => setShowProofModal(false)}
                className="px-5 py-2 rounded-xl bg-[#0D4B4D] text-white text-xs font-bold"
              >
                {locale === 'bn' ? 'বন্ধ করুন' : 'Close Proof View'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
