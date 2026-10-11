export interface HealthCoordinationItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'FileText' | 'Stethoscope' | 'Users' | 'PhoneCall' | 'ShieldAlert' | 'Compass';
  badge?: {
    en: string;
    bn: string;
  };
}

export interface HealthCoordinationSectionProps {
  id?: string;
  className?: string;
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
  informationAreas?: HealthCoordinationItem[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  disclaimerNotice?: {
    en: string;
    bn: string;
  };
  imageBadge?: {
    en: string;
    bn: string;
  };
}
