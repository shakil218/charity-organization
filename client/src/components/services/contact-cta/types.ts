import type { BilingualText } from '../faq/types';

export interface ServicesContactInfo {
  phone?: string;
  email?: string;
  address?: BilingualText;
  visitingHours?: BilingualText;
}

export interface ServicesContactCTASectionProps {
  id?: string;
  className?: string;
  heading?: BilingualText;
  subtitle?: BilingualText;
  description?: BilingualText;
  imageSrc?: string;
  imageAlt?: BilingualText;
  primaryButtonText?: BilingualText;
  primaryButtonHref?: string;
  secondaryButtonText?: BilingualText;
  secondaryButtonHref?: string;
  contactInfo?: ServicesContactInfo;
}
