export type InfoCategory = 'general' | 'official';

export interface PracticalInfoDetail {
  label: {
    en: string;
    bn: string;
  };
  value: {
    en: string;
    bn: string;
  };
}

export interface PracticalInfoItem {
  id: string;
  category: InfoCategory;
  categoryLabel: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  summary: {
    en: string;
    bn: string;
  };
  statusValue: {
    en: string;
    bn: string;
  };
  isUnknownOrPending?: boolean;
  contactPrompt?: {
    en: string;
    bn: string;
  };
  iconName: 'HeartPulse' | 'Clock' | 'Users' | 'MapPin' | 'ShieldCheck' | 'HandCoins' | 'FileText' | 'Phone' | 'HelpCircle';
  badgeColor?: 'teal' | 'gold' | 'green';
  details?: PracticalInfoDetail[];
}

export interface PracticalInformationSectionProps {
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
  items?: PracticalInfoItem[];
  filterAllLabel?: {
    en: string;
    bn: string;
  };
  filterGeneralLabel?: {
    en: string;
    bn: string;
  };
  filterOfficialLabel?: {
    en: string;
    bn: string;
  };
  viewCardsLabel?: {
    en: string;
    bn: string;
  };
  viewTableLabel?: {
    en: string;
    bn: string;
  };
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
