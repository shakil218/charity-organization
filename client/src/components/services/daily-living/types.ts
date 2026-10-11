export interface DailyLivingHighlightItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'CheckCircle2' | 'UtensilsCrossed' | 'Home' | 'Users';
}

export interface DailyLivingSupportSectionProps {
  id?: string;
  className?: string;
  /** Positioning of image on desktop ('left' | 'right', defaults to 'left') */
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
  highlights?: DailyLivingHighlightItem[];
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
