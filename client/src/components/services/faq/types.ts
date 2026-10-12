export interface BilingualText {
  en: string;
  bn: string;
}

export interface ServicesFAQItem {
  id: string;
  question: BilingualText;
  answer: BilingualText;
  category?: BilingualText;
  link?: {
    href: string;
    label: BilingualText;
  };
}

export interface ServicesFAQSectionProps {
  id?: string;
  className?: string;
  heading?: BilingualText;
  subtitle?: BilingualText;
  description?: BilingualText;
  faqs?: ServicesFAQItem[];
  contactHref?: string;
  contactBtnText?: BilingualText;
}
