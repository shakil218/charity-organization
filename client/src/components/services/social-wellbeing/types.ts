export interface SocialWellbeingCardItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'MessageCircleHeart' | 'Users' | 'Sparkles' | 'HeartHandshake';
  badge?: {
    en: string;
    bn: string;
  };
  programLink?: {
    href: string;
    label: {
      en: string;
      bn: string;
    };
    isConfirmed?: boolean;
  };
}

export interface SocialWellbeingSectionProps {
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
  secondaryParagraph?: {
    en: string;
    bn: string;
  };
  cards?: SocialWellbeingCardItem[];
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
