'use client';

import React from 'react';
import { 
  ServicesHeroSection, 
  ServicesOverviewSection, 
  ServiceCategoriesSection,
  ElderlySupportSection,
  RehabilitationAssistanceSection 
} from '@/components/services';

interface PageProps {
  onOpenDonateModal?: () => void;
}

export default function ServicesPage({ onOpenDonateModal }: PageProps) {
  return (
    <div className="flex flex-col">
      {/* 1. Full-width Premium Services Hero Section */}
      <ServicesHeroSection primaryButtonHref="#services-overview" />

      {/* 2. Services Overview Section: Care Philosophy & 3 Value Cards */}
      <ServicesOverviewSection id="services-overview" />

      {/* 3. Main Service Categories Section: 6 Categories in 3-Column Grid */}
      <ServiceCategoriesSection 
        id="services-list" 
        onOpenDonateModal={onOpenDonateModal} 
      />

      {/* 4. Detailed Elderly Support Section: Two-Column Respectful Care & 4 Areas */}
      <ElderlySupportSection id="elderly-support" imagePosition="left" />

      {/* 5. Rehabilitation Assistance Section: Supporting Independence & Everyday Participation */}
      <RehabilitationAssistanceSection id="rehabilitation-assistance" imagePosition="right" />
    </div>
  );
}

