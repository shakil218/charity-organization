import { ElementType } from 'react';
import type { BilingualText } from '../hero/types';

export interface FacilityAmenityItem {
  id: string;
  name: BilingualText;
  category: BilingualText;
  description: BilingualText;
  icon: ElementType;
  imageUrl?: string;
  imageAlt?: BilingualText;
  badge?: BilingualText;
  isVerified?: boolean;
  photoDisclaimer?: BilingualText;
}

export interface FacilitiesAmenitiesSectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  subtitle?: BilingualText;
  facilities?: FacilityAmenityItem[];
  showVerificationNotice?: boolean;
}

export interface FacilityCardProps {
  facility: FacilityAmenityItem;
  locale: 'en' | 'bn';
  onViewPhoto?: (facility: FacilityAmenityItem) => void;
}

export interface FacilityPhotoModalProps {
  facility: FacilityAmenityItem | null;
  isOpen: boolean;
  locale: 'en' | 'bn';
  onClose: () => void;
}
