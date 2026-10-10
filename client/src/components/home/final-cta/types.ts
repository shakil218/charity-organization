export interface FinalCTASectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  primaryCtaText?: {
    en: string;
    bn: string;
  };
  primaryCtaHref?: string;
  secondaryCtaText?: {
    en: string;
    bn: string;
  };
  secondaryCtaHref?: string;
  onOpenDonateModal?: () => void;
  className?: string;
}
