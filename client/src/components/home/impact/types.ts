import { type LucideIcon } from 'lucide-react';

/**
 * Verified organizational metric data.
 * Used only when verified numerical figures become available.
 */
export interface VerifiedMetricData {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: {
    en: string;
    bn: string;
  };
}

/**
 * TypeScript data model for individual Impact cards.
 * Supports both qualitative-first and verified-metric modes.
 */
export interface ImpactCardItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  categoryPillar: {
    en: string;
    bn: string;
  };
  badgeLabel?: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
  /**
   * Optional verified numerical figure.
   * Strict constraint: Remains undefined until official organizational verification.
   */
  verifiedMetric?: VerifiedMetricData;
}

/**
 * Props for OurImpactSection component.
 */
export interface OurImpactSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  cards?: ImpactCardItem[];
  className?: string;
}
