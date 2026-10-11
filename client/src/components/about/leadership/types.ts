import { LucideIcon } from 'lucide-react';

export interface LeadershipProfile {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  role: {
    en: string;
    bn: string;
  };
  bio: {
    en: string;
    bn: string;
  };
  qualificationsOrExperience?: {
    en: string[];
    bn: string[];
  };
  imageUrl?: string;
  imageAlt?: {
    en: string;
    bn: string;
  };
  verificationBadge?: {
    en: string;
    bn: string;
  };
  isVerified?: boolean;
}

export interface GovernanceStructureItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  category: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  keyProtocols: {
    en: string[];
    bn: string[];
  };
  icon: LucideIcon;
  badge: {
    en: string;
    bn: string;
  };
}

export interface AboutLeadershipSectionProps {
  id?: string;
  className?: string;
  profiles?: LeadershipProfile[];
  showGovernance?: boolean;
}
