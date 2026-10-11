'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CampaignCard, CampaignItem } from '@/components/shared/CampaignCard';
import { Activity } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

interface PageProps {
  onOpenDonateModal?: (residentName?: string, residentId?: string) => void;
}

export default function CampaignsPage({ onOpenDonateModal }: PageProps) {
  const { t } = useLanguage();

  const [campaigns, setCampaigns] = useState<CampaignItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/campaigns`);
        if (res.ok) {
          setCampaigns(await res.json());
        } else {
          setCampaigns(fallbackCampaigns);
        }
      } catch {
        setCampaigns(fallbackCampaigns);
      } finally {
        setLoading(false);
      }
    }
    fetchCampaigns();
  }, []);

  return (
    <div className="space-y-12 py-12">
      
      <section className="bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
            <Activity className="w-4 h-4" />
            <span>{t.campaignsSection.sectionBadge}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.campaignsSection.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.campaignsSection.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                campaign={campaign}
                onDonate={() => onOpenDonateModal?.()}
              />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

const fallbackCampaigns: CampaignItem[] = [
  {
    _id: 'camp_001',
    title: { en: 'Winter Warmth & Shelter Blanket Fund', bn: 'শীতকালীন উষ্ণতা ও কম্বল তহবিল' },
    targetBDT: 250000,
    raisedBDT: 185000,
    description: {
      en: 'Providing heavy winter blankets, room heaters, and warm clothing for 120 elderly residents.',
      bn: '১২০ জন প্রবীণ বাসিন্দার জন্য উষ্ণ কম্বল, হিটার ও শীতবস্ত্র প্রদান।'
    },
    endDate: '2026-12-31'
  },
  {
    _id: 'camp_002',
    title: { en: 'Surgical Emergency & Eye Care Camp', bn: 'জরুরি অস্ত্রোপচার ও চক্ষু চিকিৎসা ক্যাম্প' },
    targetBDT: 500000,
    raisedBDT: 340000,
    description: {
      en: 'Cataract surgeries and free eye checkups for 50 impoverished seniors.',
      bn: '৫০ জন সুবিধাবঞ্চিত প্রবীণের বিনামূল্যে ছানি অপারেশন ও চোখের যত্ন।'
    },
    endDate: '2026-11-30'
  }
];
