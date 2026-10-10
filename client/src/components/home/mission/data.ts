import {
  Compass,
  Eye,
  ShieldCheck,
  Heart,
  Sparkles,
  Users,
  Scale,
  HandHeart
} from 'lucide-react';
import { StrategicPillar, CoreValueItem } from './types';

/**
 * Proposed mission statement pillar data (Subject to Board approval)
 */
export const missionPillar: StrategicPillar = {
  id: 'mission',
  categoryBadge: {
    en: 'OUR MISSION',
    bn: 'আমাদের লক্ষ্য'
  },
  title: {
    en: 'Our Mission',
    bn: 'আমাদের মিশন'
  },
  statement: {
    en: 'To support older adults with dignity, compassion, respect, and meaningful community connections.',
    bn: 'প্রবীণদের মর্যাদা, সহমর্মিতা, শ্রদ্ধা এবং অর্থপূর্ণ সামাজিক সম্পর্কের মাধ্যমে আন্তরিক সমর্থন ও পরিচর্যা প্রদান করা।'
  },
  highlights: [
    {
      en: 'Preserving personal autonomy and individual dignity in daily living.',
      bn: 'প্রতিদিনের জীবনযাত্রায় প্রবীণদের আত্মমর্যাদা ও ব্যক্তিগত স্বাধীনতা রক্ষা করা।'
    },
    {
      en: 'Providing attentive healthcare, emotional comfort, and physical safety.',
      bn: 'সার্বক্ষণিক আন্তরিক স্বাস্থ্যসেবা, মানসিক প্রশান্তি এবং শারীরিক নিরাপত্তা নিশ্চিতকরণ।'
    },
    {
      en: 'Fostering intergenerational connections that eliminate senior isolation.',
      bn: 'নতুন প্রজন্মের সাথে মেলবন্ধন সৃষ্টির মাধ্যমে প্রবীণদের একাকীত্ব দূরীকরণ।'
    }
  ],
  icon: Compass
};

/**
 * Proposed vision statement pillar data (Subject to Board approval)
 */
export const visionPillar: StrategicPillar = {
  id: 'vision',
  categoryBadge: {
    en: 'OUR VISION',
    bn: 'দূরদর্শী রূপকল্প'
  },
  title: {
    en: 'Our Vision',
    bn: 'আমাদের ভিশন'
  },
  statement: {
    en: 'To contribute to a society where every older adult is valued, respected, and included.',
    bn: 'এমন এক মানবিক সমাজ গঠনে অবদান রাখা যেখানে প্রতিটি প্রবীণ নাগরিক মূল্যায়িত, সম্মানিত এবং অন্তর্ভুক্ত থাকবেন।'
  },
  highlights: [
    {
      en: 'Promoting broad public recognition of elders’ life-long societal contributions.',
      bn: 'সমাজে প্রবীণদের আজীবনের অবদান ও ত্যাগের সর্বোচ্চ সামাজিক স্বীকৃতি প্রতিষ্ঠা।'
    },
    {
      en: 'Advocating for elder-inclusive communal infrastructure and social policy.',
      bn: 'প্রবীণবান্ধব সামাজিক পরিবেশ ও সংবেদনশীল নাগরিক সংস্কৃতি গড়ে তোলা।'
    },
    {
      en: 'Establishing a trusted model for non-profit senior rehabilitation.',
      bn: 'অলাভজনক প্রবীণ কল্যাণে একটি অনুকরণীয় ও স্বচ্ছ সেবামূলক মডেল সৃষ্টি।'
    }
  ],
  icon: Eye
};

/**
 * Six core organizational values data
 */
export const coreValuesList: CoreValueItem[] = [
  {
    id: 'dignity',
    name: {
      en: 'Dignity',
      bn: 'মর্যাদা'
    },
    description: {
      en: 'Self-respect & autonomy',
      bn: 'আত্মসম্মান ও স্বাধিকার'
    },
    icon: ShieldCheck
  },
  {
    id: 'compassion',
    name: {
      en: 'Compassion',
      bn: 'সহমর্মিতা'
    },
    description: {
      en: 'Empathy & gentle care',
      bn: 'আন্তরিক মমত্ব ও স্নেহ'
    },
    icon: Heart
  },
  {
    id: 'respect',
    name: {
      en: 'Respect',
      bn: 'শ্রদ্ধা'
    },
    description: {
      en: 'Honoring elder wisdom',
      bn: 'প্রবীণ অভিজ্ঞতার মূল্যায়ন'
    },
    icon: Sparkles
  },
  {
    id: 'inclusion',
    name: {
      en: 'Inclusion',
      bn: 'অন্তর্ভুক্তি'
    },
    description: {
      en: 'Belonging & connection',
      bn: 'সামাজিক মেলবন্ধন ও সান্নিধ্য'
    },
    icon: Users
  },
  {
    id: 'accountability',
    name: {
      en: 'Accountability',
      bn: 'দায়বদ্ধতা'
    },
    description: {
      en: 'Integrity & transparency',
      bn: 'স্বচ্ছতা ও সার্বিক জবাবদিহিতা'
    },
    icon: Scale
  },
  {
    id: 'community-service',
    name: {
      en: 'Community Service',
      bn: 'সমাজসেবা'
    },
    description: {
      en: 'Dedication to common good',
      bn: 'নিঃস্বার্থ সামাজিক কল্যাণ'
    },
    icon: HandHeart
  }
];
