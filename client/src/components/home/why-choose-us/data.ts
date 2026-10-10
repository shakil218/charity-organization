import { ShieldCheck, HeartHandshake, Users, Scale } from 'lucide-react';
import { BenefitItem } from './types';

/**
 * Organizational principle benefits.
 * Describes core institutional values without unsupported competitive claims.
 */
export const defaultBenefits: BenefitItem[] = [
  {
    id: 'dignity-first',
    title: {
      en: 'Dignity First',
      bn: 'মর্যাদাই প্রথম অগ্রাধিকার'
    },
    description: {
      en: 'Treating older adults with profound respect, honoring their life histories, and upholding individual autonomy in everyday life.',
      bn: 'প্রতিটি প্রবীণ সদস্যকে পরম শ্রদ্ধার সাথে মূল্যায়ন, তাদের জীবনের অভিজ্ঞতার প্রতি সম্মান এবং ব্যক্তিস্বাধীনতা রক্ষা করা।'
    },
    icon: ShieldCheck,
    accentBadge: {
      en: 'Core Ethos',
      bn: 'মূলনীতি'
    }
  },
  {
    id: 'compassionate-approach',
    title: {
      en: 'Compassionate Approach',
      bn: 'সহমর্মিতাপূর্ণ দৃষ্টিভঙ্গি'
    },
    description: {
      en: 'Encouraging kindness, gentle patience, and deep empathetic understanding in all caregiver interactions and companion support.',
      bn: 'ধৈর্যশীল মনোভাব, আন্তরিক মমতা এবং গভীর সহমর্মিতার সাথে প্রবীণদের অনুভূতি উপলব্ধি করে সেবা প্রদান।'
    },
    icon: HeartHandshake,
    accentBadge: {
      en: 'Empathy',
      bn: 'সহমর্মিতা'
    }
  },
  {
    id: 'community-connection',
    title: {
      en: 'Community Connection',
      bn: 'সামাজিক মেলবন্ধন'
    },
    description: {
      en: 'Promoting meaningful social relationships, intergenerational conversations, and communal moments that dispel isolation.',
      bn: 'নিঃসঙ্গতা দূর করতে নতুন প্রজন্মের সাথে গল্প, সামাজিক সান্নিধ্য এবং পারস্পরিক আন্তরিক সম্পর্কের ক্ষেত্র তৈরি করা।'
    },
    icon: Users,
    accentBadge: {
      en: 'Social Life',
      bn: 'সামাজিক সংযোগ'
    }
  },
  {
    id: 'transparency',
    title: {
      en: 'Transparency',
      bn: 'উন্মুক্ত স্বচ্ছতা'
    },
    description: {
      en: 'Communicating clearly and truthfully about the organization’s proposed work, verified resources, and daily services.',
      bn: 'সংস্থার গৃহীত সেবামূলক কার্যক্রম, প্রাতিষ্ঠানিক রূপরেখা ও সম্পদ সংক্রান্ত তথ্যাবলী উন্মুক্ত ও সততার সাথে প্রকাশ করা।'
    },
    icon: Scale,
    accentBadge: {
      en: 'Integrity',
      bn: 'জবাবদিহিতা'
    }
  }
];
