'use client';

import React from 'react';
import { 
  AboutHeroSection, 
  OrganizationOverviewSection, 
  AboutMissionSection, 
  AboutVisionSection,
  AboutValuesSection,
  AboutGoalsSection,
  AboutApproachSection,
  AboutImpactSection,
  AboutLeadershipSection,
  AboutTransparencySection,
  AboutCommunitySection,
  AboutGalleryPreviewSection,
  AboutFAQSection,
  AboutGetInvolvedCTASection,
  AboutContactCTASection,
  OurStoryHistorySection 
} from '@/components/about';

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* Full-width Premium Hero Section (Animates on load and re-animates on scroll) */}
      <AboutHeroSection />

      {/* Organization Overview Section (Two-Column Layout with Framer Motion scroll animation) */}
      <OrganizationOverviewSection id="organization-overview" />

      {/* Our Story & History Section (Journey, Timeline Milestones & Continuing Purpose) */}
      <OurStoryHistorySection id="our-story-history" />

      {/* Visually Prominent Our Mission Section (Full-width Deep Teal & Forest-Green) */}
      <AboutMissionSection id="our-mission" />

      {/* Our Vision Section (Warm Cream Background, Deep Teal Typography & Soft-Gold Accents) */}
      <AboutVisionSection id="our-vision" />

      {/* Core Values Section (Responsive Cards, Warm Cream, Deep Teal & Soft-Gold Accents) */}
      <AboutValuesSection id="our-values" />

      {/* Goals & Objectives Section (4 Responsive Cards, Cream Surfaces & Teal/Gold Accents) */}
      <AboutGoalsSection id="our-goals" />

      {/* Our Approach to Elderly Care Section (Person-Centered, 4 Principles, Photo & Services CTA) */}
      <AboutApproachSection id="our-approach" />

      {/* Our Impact & Achievements Section (Verified Metrics / Qualitative Priorities, Milestones & Reports) */}
      <AboutImpactSection id="our-impact" />

      {/* Leadership & Governance Section (The People Behind Our Mission & Verified Governance Structure) */}
      <AboutLeadershipSection id="leadership-governance" />

      {/* Transparency & Accountability Section (Trust Through Transparency & Resource Documents) */}
      <AboutTransparencySection id="transparency-accountability" />

      {/* Community & Partnerships Section (Stronger Communities, Together) */}
      <AboutCommunitySection id="community-partnerships" />

      {/* Photo Gallery Preview Section (A Glimpse Into Our Community) */}
      <AboutGalleryPreviewSection id="gallery-preview" />

      {/* About Us FAQ Section (Learn More About Us) */}
      <AboutFAQSection id="about-faq" />

      {/* Get Involved Call-to-Action Section (Be Part of a More Caring Community) */}
      <AboutGetInvolvedCTASection id="get-involved-cta" />

      {/* Final Contact Call-to-Action Section (Want to Know More About Our Work?) */}
      <AboutContactCTASection id="final-contact-cta" />

    </div>
  );
}
