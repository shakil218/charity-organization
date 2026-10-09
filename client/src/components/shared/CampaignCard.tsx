'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Target, TrendingUp, Calendar, Heart } from 'lucide-react';

export interface CampaignItem {
  _id: string;
  title: { en: string; bn: string };
  targetBDT: number;
  raisedBDT: number;
  description: { en: string; bn: string };
  endDate: string;
}

interface CampaignCardProps {
  campaign: CampaignItem;
  onDonate: (campaignTitle: string) => void;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onDonate }) => {
  const { locale, t } = useLanguage();

  const percentRaised = Math.min(
    100,
    Math.round((campaign.raisedBDT / campaign.targetBDT) * 100)
  );

  return (
    <div className="bg-[#FDFBF7] rounded-2xl border border-teal-900/15 p-6 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900/10 text-[#0D4B4D] text-xs font-bold border border-teal-900/20">
            <Target className="w-3.5 h-3.5 text-[#0D4B4D]" />
            <span>{t.campaignsSection.daysLeft}</span>
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{campaign.endDate}</span>
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0D4B4D] leading-snug">
          {campaign.title[locale]}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {campaign.description[locale]}
        </p>
      </div>

      <div className="space-y-4 pt-3 border-t border-teal-900/10">
        
        {/* Progress Metrics */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-gray-600">{t.campaignsSection.raised}: <strong className="text-[#0D4B4D]">৳{campaign.raisedBDT.toLocaleString()} BDT</strong></span>
            <span className="text-gray-500">{t.campaignsSection.target}: ৳{campaign.targetBDT.toLocaleString()} BDT</span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#1E4D2B] via-[#0D4B4D] to-[#D4AF37] h-full transition-all duration-500 rounded-full"
              style={{ width: `${percentRaised}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{percentRaised}% {locale === 'bn' ? 'সংগৃহীত' : 'Achieved'}</span>
            </span>
          </div>
        </div>

        <button
          onClick={() => onDonate(campaign.title[locale])}
          className="w-full py-2.5 px-4 rounded-xl bg-[#0D4B4D] hover:bg-[#083234] text-white text-sm font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
          <span>{t.campaignsSection.donateBtn}</span>
        </button>

      </div>

    </div>
  );
};
