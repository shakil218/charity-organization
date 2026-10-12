import { ElementType } from 'react';
import type { BilingualText } from '../hero/types';

export interface FacilitiesHighlightItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon: ElementType;
}

export interface FacilitiesOverviewSectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  description?: BilingualText;
  secondaryDescription?: BilingualText;
  highlights?: FacilitiesHighlightItem[];
  imageSrc?: string;
  imageAlt?: BilingualText;
  isIllustrativeImage?: boolean;
}
