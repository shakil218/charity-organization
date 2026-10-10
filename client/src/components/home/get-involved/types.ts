import { LucideIcon } from 'lucide-react';

export type GetInvolvedCardVariant = 'donate' | 'volunteer' | 'partner';

export interface GetInvolvedCardItem {
  id: string;
  variant: GetInvolvedCardVariant;
  title: {
    en: string;
    bn: string;
  };
  badge: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
  ctaText: {
    en: string;
    bn: string;
  };
  ctaHref: string;
  footnote?: {
    en: string;
    bn: string;
  };
  theme: {
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    cardBorder: string;
    hoverBorder: string;
    topAccent: string;
    buttonBg: string;
    buttonHoverBg: string;
    buttonText: string;
    buttonBorder?: string;
  };
}

export interface GetInvolvedSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  cards?: GetInvolvedCardItem[];
  onOpenDonateModal?: () => void;
  className?: string;
}
