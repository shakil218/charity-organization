export interface BilingualText {
  en: string;
  bn: string;
}

export interface FacilitiesHeroSectionProps {
  id?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: BilingualText;
  isIllustrativeImage?: boolean;
  showBreadcrumbs?: boolean;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  subheading?: BilingualText;
  description?: BilingualText;
  primaryButtonText?: BilingualText;
  primaryButtonHref?: string;
  secondaryButtonText?: BilingualText;
  secondaryButtonHref?: string;
}
