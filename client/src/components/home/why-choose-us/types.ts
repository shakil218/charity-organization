import { type LucideIcon } from 'lucide-react';

/**
 * TypeScript data model for individual organizational benefit items.
 */
export interface BenefitItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
  accentBadge?: {
    en: string;
    bn: string;
  };
}

/**
 * Props for the WhyChooseUsSection component.
 */
export interface WhyChooseUsSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  introduction?: {
    en: string;
    bn: string;
  };
  imageSrc?: string;
  className?: string;
}
