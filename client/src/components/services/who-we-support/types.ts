export interface SupportedGroupItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  audienceFocus: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  imageAlt: {
    en: string;
    bn: string;
  };
  iconName: 'Users' | 'HeartHandshake' | 'Compass' | 'HandHeart' | 'Home' | 'ShieldCheck';
  badge?: {
    en: string;
    bn: string;
  };
}

export interface WhoWeSupportSectionProps {
  id?: string;
  className?: string;
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
  groups?: SupportedGroupItem[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  eligibilityNote?: {
    en: string;
    bn: string;
  };
}
