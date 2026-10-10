/**
 * TypeScript data model for individual facility environment images.
 */
export interface FacilityImageItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  caption: {
    en: string;
    bn: string;
  };
  altText: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  tag: {
    en: string;
    bn: string;
  };
  isFeatured?: boolean;
}

/**
 * Props for the FacilitiesPreviewSection / PhotoGallerySection component.
 */
export interface FacilitiesSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  className?: string;
}
