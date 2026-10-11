export interface SupportAreaItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'MessageSquareHeart' | 'Users' | 'BookOpen' | 'HeartHandshake';
}

export interface ElderlySupportSectionProps {
  id?: string;
  className?: string;
  /** Positioning of image on desktop ('left' | 'right', defaults to 'left' to alternate with hero) */
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
  supportAreas?: SupportAreaItem[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
}
