/**
 * TypeScript definitions for Our Story & History Timeline components.
 */

export interface TimelineMilestone {
  /** Unique milestone identifier */
  id: string;
  /** Chronological date or period */
  date: {
    en: string;
    bn: string;
  };
  /** Milestone title */
  title: {
    en: string;
    bn: string;
  };
  /** Detailed description of the milestone development */
  description: {
    en: string;
    bn: string;
  };
  /** Category or theme of development (e.g., Facility, Healthcare, Community) */
  category?: {
    en: string;
    bn: string;
  };
  /** Optional photograph documenting the milestone */
  imageUrl?: string;
  /** Accessible image alternative description */
  imageAlt?: {
    en: string;
    bn: string;
  };
  /** Accent badge label */
  badge?: {
    en: string;
    bn: string;
  };
  /** Whether the milestone has been officially authenticated from institutional records */
  isVerified?: boolean;
}

export interface OurStoryHistorySectionProps {
  /** Custom HTML section ID for anchor navigation */
  id?: string;
  /** Additional custom Tailwind CSS classes */
  className?: string;
  /** Optional supplied organizational milestones */
  milestones?: TimelineMilestone[];
  /**
   * If true, displays the elegant placeholder state per organizational compliance.
   * Defaults to true unless explicit verified milestones are supplied.
   */
  isDocumenting?: boolean;
}
