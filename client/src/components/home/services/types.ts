import { type LucideIcon } from 'lucide-react';

/**
 * TypeScript data model for proposed service category items.
 */
export interface ServiceCategoryItem {
  id: string;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  shortDescription: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  imageAlt: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
  badgeLabel?: {
    en: string;
    bn: string;
  };
  href: string;
}

/**
 * Props for the main ServicesSection component.
 */
export interface ServicesSectionProps {
  className?: string;
}
