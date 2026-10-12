import { HeartHandshake, Heart, Building2 } from 'lucide-react';
import { ServicesGetInvolvedCardItem } from './types';

/**
 * Verified Get Involved options for the Sonavan Old Rehabilitation Center Services page.
 * Keeps expectations realistic without assuming unconfirmed specific volunteer roles,
 * donation methods, or formal partnership quotas.
 */
export const DEFAULT_SERVICES_GET_INVOLVED_CARDS: ServicesGetInvolvedCardItem[] = [
  {
    id: 'volunteer',
    title: {
      en: 'Volunteer',
      bn: 'স্বেচ্ছাসেবক'
    },
    description: {
      en: 'Contribute your time, empathy, or professional skills to support elderly residents and assist our daily community programs.',
      bn: 'আপনার মূল্যবান সময়, সহমর্মিতা বা পেশাগত দক্ষতাকে কাজে লাগিয়ে প্রবীণ বাসিন্দাদের পাশে দাঁড়ান এবং আমাদের দৈনন্দিন কার্যক্রমে সহায়তা করুন।'
    },
    buttonText: {
      en: 'Volunteer',
      bn: 'স্বেচ্ছাসেবক হিসেবে যুক্ত হোন'
    },
    buttonHref: '/get-involved',
    badge: {
      en: 'Community Service',
      bn: 'সামাজিক সেবা'
    },
    icon: HeartHandshake,
    isPrimary: false
  },
  {
    id: 'support-mission',
    title: {
      en: 'Support Our Mission',
      bn: 'আমাদের মিশনকে সমর্থন করুন'
    },
    description: {
      en: 'Help sustain dignified shelter, nutritious meals, and 24/7 healthcare for vulnerable seniors through approved, verified contributions.',
      bn: 'অনুমোদিত ও স্বচ্ছ প্রক্রিয়ার মাধ্যমে অসহায় প্রবীণদের জন্য নিরাপদ আবাসন, পুষ্টিকর খাবার এবং সার্বক্ষণিক স্বাস্থ্যসেবা নিশ্চিত করতে সহায়তা করুন।'
    },
    buttonText: {
      en: 'Donate',
      bn: 'অনুদান দিন'
    },
    buttonHref: '/donate',
    badge: {
      en: 'Direct Impact',
      bn: 'প্রত্যক্ষ প্রভাব'
    },
    icon: Heart,
    isPrimary: true
  },
  {
    id: 'partner-with-us',
    title: {
      en: 'Partner With Us',
      bn: 'আমাদের সাথে অংশীদার হোন'
    },
    description: {
      en: 'Collaborate through institutional partnerships, medical drives, or community welfare initiatives to expand dignified care.',
      bn: 'প্রাতিষ্ঠানিক সহযোগিতা, চিকিৎসাসেবা ক্যাম্প বা সামাজিক কল্যাণমূলক উদ্যোগের মাধ্যমে প্রবীণদের সেবা কার্যক্রম আরও প্রসারিত করতে অংশীদার হোন।'
    },
    buttonText: {
      en: 'Contact Us',
      bn: 'যোগাযোগ করুন'
    },
    buttonHref: '/contact',
    badge: {
      en: 'Collaboration',
      bn: 'যৌথ উদ্যোগ'
    },
    icon: Building2,
    isPrimary: false
  }
];
