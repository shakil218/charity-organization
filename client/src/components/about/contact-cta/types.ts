export interface AboutContactCTASectionProps {
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
  imageSrc?: string;
  imageAlt?: {
    en: string;
    bn: string;
  };
  contactPhone?: string;
  contactEmail?: string;
  visitingHours?: {
    en: string;
    bn: string;
  };
  primaryButtonText?: {
    en: string;
    bn: string;
  };
  primaryButtonHref?: string;
  secondaryButtonText?: {
    en: string;
    bn: string;
  };
  secondaryButtonHref?: string;
}
