export interface ValueCardItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'HeartHandshake' | 'Users' | 'ShieldCheck';
}

export interface ServicesOverviewSectionProps {
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
  secondaryDescription?: {
    en: string;
    bn: string;
  };
  valueCards?: ValueCardItem[];
}
