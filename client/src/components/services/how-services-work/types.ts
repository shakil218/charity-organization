export interface ServiceStepItem {
  id: string;
  stepNumber: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'MessageSquare' | 'ClipboardList' | 'Compass' | 'ShieldCheck' | 'PhoneCall' | 'CheckCheck';
  badge?: {
    en: string;
    bn: string;
  };
}

export interface HowServicesWorkSectionProps {
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
  steps?: ServiceStepItem[];
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
