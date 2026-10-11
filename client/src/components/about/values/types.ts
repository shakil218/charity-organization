import { LucideIcon } from 'lucide-react';

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface CoreValueItem {
  id: string;
  number: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  detailedDescription?: LocalizedText;
  icon: LucideIcon;
  tag?: LocalizedText;
}

export interface AboutValuesSectionProps {
  id?: string;
  className?: string;
  heading?: LocalizedText;
  subtitle?: LocalizedText;
  values?: CoreValueItem[];
  isDraftPendingApproval?: boolean;
}
