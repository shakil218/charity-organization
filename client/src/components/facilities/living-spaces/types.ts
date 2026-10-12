import { ElementType } from 'react';
import type { BilingualText } from '../hero/types';

export interface AccessibilityFeature {
  id: string;
  label: BilingualText;
  icon?: ElementType;
}

export interface LivingSpaceItem {
  id: string;
  title: BilingualText;
  categoryTag: BilingualText;
  description: BilingualText;
  accessibilityFeatures?: AccessibilityFeature[];
  imageSrc: string;
  imageAlt: BilingualText;
  photoDisclaimer?: BilingualText;
  isVerified?: boolean;
  statusBadge?: BilingualText;
  inquiryNote?: BilingualText;
}

export interface LivingSpacesSectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  subtitle?: BilingualText;
  spaces?: LivingSpaceItem[];
  showNotice?: boolean;
}

export interface LivingSpaceBlockProps {
  space: LivingSpaceItem;
  locale: 'en' | 'bn';
  isReversed: boolean;
  index: number;
}
