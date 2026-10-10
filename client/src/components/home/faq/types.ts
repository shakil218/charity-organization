export interface FAQItem {
  id: string;
  question: {
    en: string;
    bn: string;
  };
  answer: {
    en: string;
    bn: string;
  };
  category?: {
    en: string;
    bn: string;
  };
  link?: {
    href: string;
    label: {
      en: string;
      bn: string;
    };
  };
}

export interface FAQSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  faqs?: FAQItem[];
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  className?: string;
}
