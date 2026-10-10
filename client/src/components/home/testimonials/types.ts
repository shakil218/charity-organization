import { LucideIcon } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  quote: {
    en: string;
    bn: string;
  };
  authorName: {
    en: string;
    bn: string;
  };
  relationship: {
    en: string;
    bn: string;
  };
  isAnonymous?: boolean;
  portraitUrl?: string; // Optional portrait, with documented permission
  location?: {
    en: string;
    bn: string;
  };
  verifiedDate?: string;
}

export type ElderCommitmentPillar = 'dignity' | 'respect' | 'compassion' | 'inclusion';

export interface ElderCommitmentItem {
  id: string;
  pillar: ElderCommitmentPillar;
  title: {
    en: string;
    bn: string;
  };
  badge: {
    en: string;
    bn: string;
  };
  promise: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
}

export interface TestimonialsSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  testimonials?: TestimonialItem[];
  commitments?: ElderCommitmentItem[];
  className?: string;
}
