import { ElementType } from 'react';
import type { BilingualText } from '../faq/types';

export interface ServicesGetInvolvedCardItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  buttonText: BilingualText;
  buttonHref: string;
  badge?: BilingualText;
  icon: ElementType;
  isPrimary?: boolean;
}

export interface ServicesGetInvolvedCTASectionProps {
  id?: string;
  className?: string;
  heading?: BilingualText;
  subtitle?: BilingualText;
  description?: BilingualText;
  cards?: ServicesGetInvolvedCardItem[];
}
