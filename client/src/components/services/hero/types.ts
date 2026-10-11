export interface ServicesHeroSectionProps {
  id?: string;
  className?: string;
  /** Optional custom hero image source */
  imageSrc?: string;
  /** Optional custom image alt text (bilingual) */
  imageAlt?: {
    en: string;
    bn: string;
  };
  /** Whether to show the illustrative photography disclaimer badge (default: true) */
  isIllustrativeImage?: boolean;
  /** Whether to display the integrated breadcrumbs bar (default: true) */
  showBreadcrumbs?: boolean;
  /** Custom heading overrides */
  heading?: {
    en: string;
    bn: string;
  };
  /** Custom description overrides */
  description?: {
    en: string;
    bn: string;
  };
  /** Target link for primary CTA (default: '#services-list') */
  primaryButtonHref?: string;
  /** Target link for secondary CTA (default: '/contact') */
  secondaryButtonHref?: string;
}
