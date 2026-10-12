'use client';

import React from 'react';
import { 
  ServicesHeroSection, 
  ServicesOverviewSection, 
  ServiceCategoriesSection,
  ElderlySupportSection,
  RehabilitationAssistanceSection,
  SocialWellbeingSection,
  DailyLivingSupportSection,
  HealthCoordinationSection,
  HowServicesWorkSection,
  WhoWeSupportSection,
  CarePrinciplesSection,
  PracticalInformationSection,
  ServicesFAQSection,
  ServicesGetInvolvedCTASection,
  ServicesContactCTASection
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

      {/* 6. Social and Emotional Wellbeing Section: Connection, Companionship and Belonging */}
      <SocialWellbeingSection id="social-emotional-wellbeing" />

      {/* 7. Daily Living Support Section: Everyday Support With Dignity */}
      <DailyLivingSupportSection id="daily-living-support" imagePosition="left" />

      {/* 8. Health and Wellbeing Coordination Section: Helping People Find Appropriate Support */}
      <HealthCoordinationSection id="health-wellbeing-coordination" imagePosition="right" />

      {/* 9. How Our Services Work Section: Getting the Information You Need */}
      <HowServicesWorkSection id="how-services-work" />

      {/* 10. Who We Support Section: Understanding Different Support Needs */}
      <WhoWeSupportSection id="who-we-support" />

      {/* 11. Our Care Principles Section: Principles Behind Respectful Support */}
      <CarePrinciplesSection id="care-principles" />

      {/* 12. Service Availability & Information: Practical Information */}
      <PracticalInformationSection id="practical-information" />

      {/* 13. Frequently Asked Questions Section */}
      <ServicesFAQSection id="services-faq" />

      {/* 14. Get Involved Call-to-Action Section */}
      <ServicesGetInvolvedCTASection id="get-involved-cta" />

      {/* 15. Final Contact Call-to-Action Section */}
      <ServicesContactCTASection id="services-contact-cta" />
    </div>
  );
}

