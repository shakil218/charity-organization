import { type LucideIcon } from 'lucide-react';

/**
 * TypeScript interface for individual core value items.
 */
export interface CoreValueItem {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
}

/**
 * TypeScript interface for strategic statement pillars (Mission / Vision).
 */
export interface StrategicPillar {
  id: 'mission' | 'vision';
  categoryBadge: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  statement: {
    en: string;
    bn: string;
  };
  highlights: Array<{
    en: string;
    bn: string;
  }>;
  icon: LucideIcon;
}

/**
 * Props for the main MissionSection component.
 */
export interface MissionSectionProps {
  className?: string;
}
