'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  FacilitiesHeroSection,
  FacilitiesOverviewSection,
  FacilitiesAmenitiesSection,
  LivingSpacesSection,
  AccessibilitySection
} from '@/components/facilities';

export default function FacilitiesPage() {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* 1. Full-width Premium Facilities Hero Section */}
      <FacilitiesHeroSection primaryButtonHref="#facilities-overview" />

      {/* 2. Facilities Overview Section: Philosophy & 3 Supporting Highlights */}
      <FacilitiesOverviewSection id="facilities-overview" />

      {/* 3. Main Facilities & Amenities Section: 6 Verified Categories Grid & Photo Lightbox */}
      <FacilitiesAmenitiesSection id="facilities-list" />

      {/* 4. Living Spaces & Common Areas Section: Alternating Two-Column Everyday Spaces */}
      <LivingSpacesSection id="everyday-spaces" />

      {/* 5. Accessibility, Safety & Comfort Section: 4 Clean Cards & Inquiries Prompt */}
      <AccessibilitySection id="accessibility-safety" />


      {/* Facility Visual Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-2 border-[#D6B56D]/30 bg-teal-950">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
            alt="SORC Rehabilitation Center Campus"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <h3 className="text-lg font-bold text-[#D6B56D]">
              {locale === 'bn' ? 'সবুজ মনোরম ক্যাম্পাসের দৃশ্য' : 'Serene Natural Campus Environment'}
            </h3>
            <p className="text-xs text-teal-100/90">
              {locale === 'bn' ? 'গাজীপুর সদরে অবস্থিত সোনাভান পুনর্বাসন কেন্দ্র ক্যাম্পাস।' : 'Sonavan Rehabilitation Center Campus located in Gazipur Sadar.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
