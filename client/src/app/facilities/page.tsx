'use client';

import React from 'react';
import {
  FacilitiesHeroSection,
  FacilitiesOverviewSection,
  FacilitiesAmenitiesSection,
  LivingSpacesSection,
  AccessibilitySection,
  FacilitiesGallerySection
} from '@/components/facilities';

export default function FacilitiesPage() {
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

      {/* 6. Premium Facilities Photo Gallery Section: Take a Closer Look */}
      <FacilitiesGallerySection id="facilities-gallery" />
    </div>
  );
}
