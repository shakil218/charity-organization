import { LucideIcon } from 'lucide-react';

export interface ApproachLocalizedText {
  en: string;
  bn: string;
}

export interface ApproachPrincipleItem {
  id: string;
  number: string;
  title: ApproachLocalizedText;
  subtitle: ApproachLocalizedText;
  description: ApproachLocalizedText;
  icon: LucideIcon;
  tag?: ApproachLocalizedText;
}

export interface AboutApproachSectionProps {
  id?: string;
  className?: string;
  heading?: ApproachLocalizedText;
  introHeading?: ApproachLocalizedText;
  introParagraph?: ApproachLocalizedText;
  principles?: ApproachPrincipleItem[];
  imageSrc?: string;
  imageAlt?: ApproachLocalizedText;
  isDraftPendingApproval?: boolean;
}
