import { HeartHandshake, Users, CalendarHeart, ShieldCheck } from 'lucide-react';
import { ImpactCardItem } from './types';

/**
 * Default impact cards configuration.
 * Adheres strictly to qualitative commitments without invented figures.
 * Includes configurable slots for verified numerical metrics when officially certified.
 */
export const defaultImpactCards: ImpactCardItem[] = [
  {
    id: 'older-adults-supported',
    title: {
      en: 'Older Adults Supported',
      bn: 'প্রবীণদের সুরক্ষা ও সেবা'
    },
    description: {
      en: 'Prioritizing individual dignity, safe shelter, and attentive daily living assistance for seniors needing compassionate companionship.',
      bn: 'পারিবারিক আশ্রয়বঞ্চিত প্রবীণদের আত্মমর্যাদা রক্ষা, নিরাপদ আবাসন ও আন্তরিক পরিচর্যার মাধ্যমে সুন্দর জীবন নিশ্চিত করা।'
    },
    categoryPillar: {
      en: 'Dignity & Personal Care',
      bn: 'মর্যাদা ও পরিচর্যা'
    },
    badgeLabel: {
      en: 'Dignity Focused',
      bn: 'মর্যাদাপূর্ণ জীবন'
    },
    icon: HeartHandshake,
    // Verified numerical slot: remains undefined until certified by official audit
    verifiedMetric: undefined
  },
  {
    id: 'volunteer-participation',
    title: {
      en: 'Volunteer Participation',
      bn: 'স্বেচ্ছাসেবী সম্পৃক্ততা'
    },
    description: {
      en: 'Encouraging intergenerational visits, meaningful storytelling sessions, and active community participation that dispel loneliness.',
      bn: 'নতুন প্রজন্মের সাথে গল্পের আসর, আন্তরিক মেলামেশা ও নিঃসঙ্গতা দূরীকরণে মানবিক স্বেচ্ছাসেবকদের অংশগ্রহণ বৃদ্ধি।'
    },
    categoryPillar: {
      en: 'Human Connection',
      bn: 'মানবিক সান্নিধ্য'
    },
    badgeLabel: {
      en: 'Social Connection',
      bn: 'সামাজিক মেলবন্ধন'
    },
    icon: Users,
    verifiedMetric: undefined
  },
  {
    id: 'community-programs-delivered',
    title: {
      en: 'Community Programs Delivered',
      bn: 'সামাজিক কর্মসূচি ও মিলনমেলা'
    },
    description: {
      en: 'Organizing accessible social gatherings, respectful cultural afternoons, and supportive neighborly initiatives for resident joy.',
      bn: 'প্রবীণদের মানসিক প্রফুল্লতা বজায় রাখতে নিয়মিত উন্মুক্ত আড্ডা, শ্রদ্ধাশীল সাংস্কৃতিক আয়োজন ও সামাজিক মিলনমেলা পরিচালনা।'
    },
    categoryPillar: {
      en: 'Community Support',
      bn: 'সামাজিক সম্পৃক্ততা'
    },
    badgeLabel: {
      en: 'Community Outreach',
      bn: 'সামাজিক উদ্যোগ'
    },
    icon: CalendarHeart,
    verifiedMetric: undefined
  },
  {
    id: 'donations-directed-approved-programs',
    title: {
      en: 'Donations Directed Toward Programs',
      bn: 'অনুদানের সুনির্দিষ্ট ব্যবহার'
    },
    description: {
      en: 'Ensuring transparent stewardship where every public contribution is directly committed to approved resident welfare and living needs.',
      bn: 'সংগৃহীত প্রতিটি দানের স্বচ্ছ ব্যবস্থাপনা ও জবাবদিহিতা বজায় রেখে প্রবীণদের পুষ্টিকর খাবার, বস্ত্র ও নিরাপদ আশ্রয়ে বরাদ্দ।'
    },
    categoryPillar: {
      en: 'Ethical Accountability',
      bn: 'উন্মুক্ত জবাবদিহিতা'
    },
    badgeLabel: {
      en: '100% Accountable',
      bn: 'স্বচ্ছ সেবা'
    },
    icon: ShieldCheck,
    verifiedMetric: undefined
  }
];
