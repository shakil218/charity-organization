import type { BilingualText } from '../hero/types';

export interface FacilitiesContactInfo {
  phone?: string;
  email?: string;
  address?: BilingualText;
  visitingNote?: BilingualText;
}

export interface FacilitiesVisitCTASectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  description?: BilingualText;
  primaryButtonText?: BilingualText;
  primaryButtonHref?: string;
  secondaryButtonText?: BilingualText;
  secondaryButtonHref?: string;
  imageSrc?: string;
  imageAlt?: BilingualText;
  isImageIllustrative?: boolean;
  contactInfo?: FacilitiesContactInfo;
  showEntranceImage?: boolean;
  showContactCards?: boolean;
}
