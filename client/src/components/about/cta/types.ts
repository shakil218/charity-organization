import { LucideIcon } from 'lucide-react';

export interface GetInvolvedOptionItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  buttonText: {
    en: string;
    bn: string;
  };
  buttonHref: string;
  icon: LucideIcon;
  badge?: {
    en: string;
    bn: string;
  };
  isPrimary?: boolean;
}

export interface AboutGetInvolvedCTASectionProps {
  id?: string;
  className?: string;
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  options?: GetInvolvedOptionItem[];
}
