'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GrandparentCard, ResidentProfile } from '@/components/shared/GrandparentCard';
import { Heart, Search } from 'lucide-react';

interface PageProps {
  onOpenDonateModal?: (residentName?: string, residentId?: string) => void;
}

export default function ElderlyCarePage({ onOpenDonateModal }: PageProps) {
  const { locale, t } = useLanguage();

  const [residents, setResidents] = useState<ResidentProfile[]>([]);
  const [filter, setFilter] = useState<'all' | 'needs' | 'sponsored'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResidents() {
      try {
        const res = await fetch('http://localhost:5000/api/residents');
        if (res.ok) {
          setResidents(await res.json());
        } else {
          setResidents(fallbackResidents);
        }
      } catch {
        setResidents(fallbackResidents);
      } finally {
        setLoading(false);
      }
    }
    fetchResidents();
  }, []);

  const filteredResidents = residents.filter((r) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'needs'
        ? !r.isFullySponsored
        : r.isFullySponsored;

    const nameStr = (r.name[locale] || '').toLowerCase();
    const storyStr = (r.story[locale] || '').toLowerCase();
    const query = searchTerm.toLowerCase();

    return matchesFilter && (nameStr.includes(query) || storyStr.includes(query));
  });

  const handleSponsorClick = (resident: ResidentProfile) => {
    if (onOpenDonateModal) {
      onOpenDonateModal(resident.name[locale], resident._id);
    }
  };

  return (
    <div className="space-y-12 py-12">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>{t.elderlySection.sectionBadge}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.elderlySection.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.elderlySection.subtitle}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-teal-900/10 shadow-sm">
          
          {/* Status Filter Tabs */}
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'all'
                  ? 'bg-[#0D4B4D] text-white shadow-xs'
                  : 'bg-[#F4EFE6] text-gray-700 hover:bg-amber-100'
              }`}
            >
              {locale === 'bn' ? 'সকল প্রবীণ' : 'All Residents'}
            </button>
            <button
              onClick={() => setFilter('needs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'needs'
                  ? 'bg-[#D4AF37] text-teal-950 shadow-xs'
                  : 'bg-[#F4EFE6] text-gray-700 hover:bg-amber-100'
              }`}
            >
              {locale === 'bn' ? 'স্পন্সর প্রয়োজন' : 'Needs Sponsor'}
            </button>
            <button
              onClick={() => setFilter('sponsored')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === 'sponsored'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-[#F4EFE6] text-gray-700 hover:bg-amber-100'
              }`}
            >
              {locale === 'bn' ? 'সম্পূর্ণ স্পন্সরপ্রাপ্ত' : 'Fully Sponsored'}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={locale === 'bn' ? 'নাম বা পরিচয় দিয়ে খুঁজুন...' : 'Search by name or story...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#0D4B4D] bg-[#FDFBF7]"
            />
          </div>

        </div>

        {/* Residents Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : filteredResidents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 space-y-3">
            <p className="text-gray-500 text-sm font-semibold">
              {locale === 'bn' ? 'কোনো প্রবীণ সদস্য পাওয়া যায়নি।' : 'No resident profiles match your filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredResidents.map((resident) => (
              <GrandparentCard
                key={resident._id}
                resident={resident}
                onSponsor={handleSponsorClick}
              />
            ))}
          </div>
        )}

      </section>

    </div>
  );
}

const fallbackResidents: ResidentProfile[] = [
  {
    _id: 'res_001',
    slug: 'rahima-begum',
    name: { en: 'Rahima Begum', bn: 'রহিমা বেগম' },
    age: 78,
    story: {
      en: 'Lost family during severe river erosion. Needs continuous hypertension care and daily physiotherapy.',
      bn: 'নদী ভাঙনে সব হারিয়ে নিঃস্ব। নিয়মিত রক্তচাপ পরীক্ষা ও ফিজিওথেরাপির প্রয়োজন।'
    },
    medicalNeeds: ['Hypertension', 'Physiotherapy', 'Cataract Care'],
    monthlyCostBDT: 15000,
    sponsoredAmountBDT: 10000,
    isFullySponsored: false,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    joinedDate: '2023-05-12'
  },
  {
    _id: 'res_002',
    slug: 'abdul-jalil',
    name: { en: 'Abdul Jalil', bn: 'আব্দুল জলিল' },
    age: 82,
    story: {
      en: 'Former freedom fighter living without family support. Enjoys gardening and telling historical stories.',
      bn: 'একাকী জীবনযাপন করা প্রবীণ মুক্তিযোদ্ধা। বাগান করা ও গল্প বলতে ভালোবাসেন।'
    },
    medicalNeeds: ['Diabetes Care', 'Arthritis Relief'],
    monthlyCostBDT: 18000,
    sponsoredAmountBDT: 18000,
    isFullySponsored: true,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    joinedDate: '2022-11-01'
  },
  {
    _id: 'res_003',
    slug: 'sufia-khatun',
    name: { en: 'Sufia Khatun', bn: 'সুফিয়া খাতুন' },
    age: 74,
    story: {
      en: 'Requires specialized Alzheimer care and nutritious meals with 24/7 attendant support.',
      bn: 'ডিমেনশিয়া ও স্মৃতিভ্রম সংক্রান্ত সমস্যা রয়েছে। সার্বক্ষণিক সেবিকা ও বিশেষ যত্ন প্রয়োজন।'
    },
    medicalNeeds: ['Memory Care', 'Nutritional Support'],
    monthlyCostBDT: 20000,
    sponsoredAmountBDT: 7500,
    isFullySponsored: false,
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    joinedDate: '2024-01-15'
  }
];
