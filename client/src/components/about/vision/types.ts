/**
 * TypeScript definitions for the About Us page Our Vision section.
 */

export interface VisionPillarItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName?: 'heart' | 'users' | 'sparkles' | 'shield' | 'compass';
}

export interface AboutVisionSectionProps {
  /** Optional HTML anchor ID */
  id?: string;
  /** Custom additional styling classes */
  className?: string;
  /** Custom vision statement text in English & Bengali */
  visionStatement?: {
    en: string;
    bn: string;
  };
  /** Custom concise explanatory paragraph */
  explanatoryParagraph?: {
    en: string;
    bn: string;
  };
  /** Optional custom photograph source */
  imageSrc?: string;
  /** Optional custom photograph alternative text */
  imageAlt?: {
    en: string;
    bn: string;
  };
  /** Whether to show the proposed copy draft approval compliance badge (default: true) */
  isDraftPendingApproval?: boolean;
}
