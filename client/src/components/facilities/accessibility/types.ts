import { ElementType } from 'react';
import type { BilingualText } from '../hero/types';

export interface AccessibilityFeatureDetail {
  id: string;
  text: BilingualText;
}

export interface AccessibilityCardItem {
  id: string;
  title: BilingualText;
  badge: BilingualText;
  description: BilingualText;
  icon: ElementType;
  details?: AccessibilityFeatureDetail[];
  inquiryPrompt?: BilingualText;
}

export interface AccessibilitySectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  subtitle?: BilingualText;
  cards?: AccessibilityCardItem[];
  showContactPrompt?: boolean;
}

export interface AccessibilityCardProps {
  card: AccessibilityCardItem;
  locale: 'en' | 'bn';
  index: number;
}
