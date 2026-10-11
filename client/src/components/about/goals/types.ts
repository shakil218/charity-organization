import { LucideIcon } from 'lucide-react';

export interface GoalLocalizedText {
  en: string;
  bn: string;
}

export interface ObjectiveDetailLink {
  label: GoalLocalizedText;
  href: string;
  isExternal?: boolean;
}

export interface ObjectiveCardItem {
  id: string;
  number: string;
  title: GoalLocalizedText;
  shortExplanation: GoalLocalizedText;
  icon: LucideIcon;
  detailLink?: ObjectiveDetailLink;
  tag?: GoalLocalizedText;
  officialMetricsNote?: GoalLocalizedText;
}

export interface AboutGoalsSectionProps {
  id?: string;
  className?: string;
  heading?: GoalLocalizedText;
  introduction?: GoalLocalizedText;
  objectives?: ObjectiveCardItem[];
  isDraftPendingApproval?: boolean;
}
