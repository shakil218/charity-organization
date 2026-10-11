import { LucideIcon } from 'lucide-react';

export interface CommunityEngagementCard {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  badge: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  opportunities: {
    en: string[];
    bn: string[];
  };
  icon: LucideIcon;
  primaryCta: {
    text: {
      en: string;
      bn: string;
    };
    href: string;
  };
  secondaryCta?: {
    text: {
      en: string;
      bn: string;
    };
    href: string;
  };
}

export interface PartnerLogo {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  logoUrl: string;
  websiteUrl?: string;
  partnerType: {
    en: string;
    bn: string;
  };
}

export interface AboutCommunitySectionProps {
  id?: string;
  className?: string;
  cards?: CommunityEngagementCard[];
  approvedPartners?: PartnerLogo[];
  showPartnerStrip?: boolean;
}
