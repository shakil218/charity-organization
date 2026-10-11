export interface AboutFAQItem {
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

export interface AboutFAQSectionProps {
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
  faqs?: AboutFAQItem[];
  allFaqsHref?: string;
  contactHref?: string;
}
