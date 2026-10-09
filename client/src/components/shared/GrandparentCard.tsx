'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, Activity, CheckCircle2, ShieldAlert } from 'lucide-react';

export interface ResidentProfile {
  _id: string;
  slug: string;
  name: { en: string; bn: string };
  age: number;
  story: { en: string; bn: string };
  medicalNeeds: string[];
  monthlyCostBDT: number;
  sponsoredAmountBDT: number;
  isFullySponsored: boolean;
  imageUrl: string;
  joinedDate: string;
}

interface GrandparentCardProps {
  resident: ResidentProfile;
  onSponsor: (resident: ResidentProfile) => void;
}

export const GrandparentCard: React.FC<GrandparentCardProps> = ({ resident, onSponsor }) => {
  const { locale, t } = useLanguage();

  const percentRaised = Math.min(
    100,
    Math.round((resident.sponsoredAmountBDT / resident.monthlyCostBDT) * 100)
  );

  return (
    <div className="bg-white rounded-2xl border border-teal-900/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Resident Image Header */}
      <div className="relative h-64 w-full overflow-hidden bg-teal-950">
        <Image
          src={resident.imageUrl}
          alt={resident.name[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {resident.isFullySponsored ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.elderlySection.fullySponsored}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37] text-teal-950 text-xs font-bold shadow-md">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{locale === 'bn' ? 'স্পন্সর প্রয়োজন' : 'Needs Monthly Sponsor'}</span>
            </span>
          )}
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold tracking-tight text-amber-100">
              {resident.name[locale]}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
              {locale === 'bn' ? `${resident.age} বছর` : `${resident.age} Yrs`}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        
        {/* Story */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {resident.story[locale]}
        </p>

        {/* Medical Tags */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-[#0D4B4D]" />
            <span>{locale === 'bn' ? 'চিকিৎসা পরিচর্যা' : 'Medical Needs'}</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {resident.medicalNeeds.map((need, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#F4EFE6] text-teal-900 text-xs font-semibold border border-amber-200/60"
              >
                {need}
              </span>
            ))}
          </div>
        </div>

        {/* Progress & Target */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="flex justify-between text-xs font-semibold text-gray-700">
            <span>{t.elderlySection.monthlyNeeds}: ৳{resident.monthlyCostBDT.toLocaleString()} BDT</span>
            <span className="text-[#0D4B4D]">{percentRaised}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#0D4B4D] to-[#D4AF37] h-full transition-all duration-500 rounded-full"
              style={{ width: `${percentRaised}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>{t.elderlySection.raisedSoFar}: ৳{resident.sponsoredAmountBDT.toLocaleString()} BDT</span>
          </div>
        </div>

        {/* Sponsor CTA Button */}
        <button
          onClick={() => onSponsor(resident)}
          disabled={resident.isFullySponsored}
          className={`w-full py-3 px-4 rounded-xl text-sm font-bold shadow-sm flex items-center justify-center gap-2 transition cursor-pointer ${
            resident.isFullySponsored
              ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] hover:from-[#083234] hover:to-[#143820] text-white shadow-md hover:shadow-lg'
          }`}
        >
          <Heart className={`w-4 h-4 ${resident.isFullySponsored ? '' : 'text-[#D4AF37] fill-[#D4AF37]'}`} />
          <span>{resident.isFullySponsored ? t.elderlySection.fullySponsored : t.elderlySection.sponsorBtn}</span>
        </button>

      </div>

    </div>
  );
};
