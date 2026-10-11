/**
 * TypeScript definitions for the About Us page Our Mission section.
 */

export interface AboutMissionSectionProps {
  /** Optional HTML section ID for anchor navigation */
  id?: string;
  /** Custom additional styling classes */
  className?: string;
  /** Custom mission statement text in English & Bengali */
  missionStatement?: {
    en: string;
    bn: string;
  };
  /** Custom supporting paragraph text in English & Bengali */
  supportingParagraph?: {
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
  /** Whether to show the draft approval compliance badge (default: true) */
  isDraftPendingApproval?: boolean;
}
