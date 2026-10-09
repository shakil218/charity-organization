'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ResidentProfile } from '@/components/shared/GrandparentCard';
import { HeroSection } from '@/components/home/HeroSection';
import { MissionSection } from '@/components/home/MissionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { PhotoGallerySection } from '@/components/home/PhotoGallerySection';
import { StoriesSection } from '@/components/home/StoriesSection';
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

interface HomePageProps {
  onOpenDonateModal?: (residentName?: string, residentId?: string) => void;
}

export default function HomePage({ onOpenDonateModal }: HomePageProps) {
  const { locale } = useLanguage();
  const [residents, setResidents] = useState<ResidentProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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

    fetchData();
  }, []);

  const handleSponsorClick = (resident: ResidentProfile) => {
    if (onOpenDonateModal) {
      const name = resident.name[locale] || resident.name.en;
      onOpenDonateModal(name, resident._id);
    }
  };

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      <HeroSection onOpenDonateModal={onOpenDonateModal} />
      <MissionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ImpactSection
        residents={residents}
        loading={loading}
        onSponsorClick={handleSponsorClick}
      />
      <PhotoGallerySection />
      <StoriesSection />
      <GetInvolvedSection onOpenDonateModal={onOpenDonateModal} />
      <FinalCTASection onOpenDonateModal={onOpenDonateModal} />
    </div>
  );
}

// Fallback Data
const fallbackResidents: ResidentProfile[] = [
  {
    _id: 'res_001',
    slug: 'rahima-begum',
    name: { en: 'Rahima Begum', bn: 'রহিমা বেগম' },
    age: 78,
    story: {
      en: 'Lost family during river erosion. Needs continuous hypertension care and daily physiotherapy.',
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
      en: 'Former freedom fighter living without family support. Enjoys gardening and historical stories.',
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
      en: 'Requires specialized Alzheimer care and nutritious organic meals with 24/7 attendant support.',
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
