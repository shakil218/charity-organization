import { LucideIcon } from 'lucide-react';

export interface ImpactLocalizedText {
  en: string;
  bn: string;
}

export interface VerifiedMetricData {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: ImpactLocalizedText;
}

export interface ImpactMetricItem {
  id: string;
  title: ImpactLocalizedText;
  qualitativeSummary: ImpactLocalizedText;
  categoryPillar: ImpactLocalizedText;
  badgeLabel?: ImpactLocalizedText;
  icon: LucideIcon;
  verifiedMetric?: VerifiedMetricData;
}

export interface ApprovedAchievementItem {
  id: string;
  periodOrDate: ImpactLocalizedText;
  title: ImpactLocalizedText;
  description: ImpactLocalizedText;
  verificationBadge: ImpactLocalizedText;
  icon: LucideIcon;
}

export interface PublicationReportItem {
  id: string;
  title: ImpactLocalizedText;
  description: ImpactLocalizedText;
  fileFormat: string;
  period: ImpactLocalizedText;
  href: string;
  isAvailable: boolean;
}

export interface AboutImpactSectionProps {
  id?: string;
  className?: string;
  heading?: ImpactLocalizedText;
  introduction?: ImpactLocalizedText;
  metrics?: ImpactMetricItem[];
  achievements?: ApprovedAchievementItem[];
  publications?: PublicationReportItem[];
}
