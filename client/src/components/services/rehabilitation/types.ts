export interface RehabilitationFeatureItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'Compass' | 'Activity' | 'UserCheck' | 'ExternalLink';
}

export interface RehabilitationAssistanceSectionProps {
  id?: string;
  className?: string;
  /** Positioning of image on desktop ('left' | 'right', defaults to 'right' to alternate with Elderly Support) */
  imagePosition?: 'left' | 'right';
  imageSrc?: string;
  imageAlt?: {
    en: string;
    bn: string;
  };
  eyebrow?: {
    en: string;
    bn: string;
  };
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  secondaryParagraph?: {
    en: string;
    bn: string;
  };
  features?: RehabilitationFeatureItem[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  disclaimerNotice?: {
    en: string;
    bn: string;
  };
}
