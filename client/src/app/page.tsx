'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MissionSection } from '@/components/home/MissionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { OurImpactSection } from '@/components/home/OurImpactSection';
import { FacilitiesPreviewSection } from '@/components/home/FacilitiesPreviewSection';
import { StoriesSection } from '@/components/home/StoriesSection';
import { PhotoGallerySection } from '@/components/home/PhotoGallerySection';
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';
import { TrustHighlightsSection } from '@/components/home/TrustHighlightsSection';
import { AboutIntroSection } from '@/components/home/AboutIntroSection';

interface HomePageProps {
  onOpenDonateModal?: (residentName?: string, residentId?: string) => void;
}

export default function HomePage({ onOpenDonateModal }: HomePageProps) {
  return (
    <div className="overflow-hidden">
      <HeroSection onOpenDonateModal={onOpenDonateModal} />
      <TrustHighlightsSection />
      <AboutIntroSection />

      <div className="space-y-20 pt-8 sm:pt-12 pb-20 sm:pb-24">
        <MissionSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FacilitiesPreviewSection />
        <OurImpactSection />
        <StoriesSection />
        <GetInvolvedSection onOpenDonateModal={onOpenDonateModal} />
        <TestimonialsSection />
        <PhotoGallerySection />
        <FAQSection />
      </div>

      <FinalCTASection onOpenDonateModal={onOpenDonateModal} />
    </div>
  );
}
