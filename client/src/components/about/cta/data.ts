import { Users, Heart, Handshake } from 'lucide-react';
import { GetInvolvedOptionItem } from './types';

/**
 * 3 Compact Get Involved options for Sonavan Old Rehabilitation Center.
 * Respects truthfulness guidelines without implying unverified opportunities.
 */
export const DEFAULT_GET_INVOLVED_OPTIONS: GetInvolvedOptionItem[] = [
  {
    id: 'option-volunteer',
    title: {
      en: 'Volunteer',
      bn: 'স্বেচ্ছাসেবী'
    },
    description: {
      en: 'Offer your time and companionship to brighten our residents’ days through conversations, reading, or quiet walks.',
      bn: 'প্রবীণদের সাথে আন্তরিক সময় কাটানো, বই পড়ে শোনানো বা শান্ত সান্ধ্য হাঁটায় সঙ্গী হয়ে তাদের একাকীত্ব দূর করতে পাশে থাকুন।'
    },
    buttonText: {
      en: 'Volunteer',
      bn: 'স্বেচ্ছাসেবক হোন'
    },
    buttonHref: '/get-involved',
    icon: Users,
    badge: {
      en: 'Time & Companionship',
      bn: 'সময় ও সান্নিধ্য'
    },
    isPrimary: false
  },
  {
    id: 'option-support-mission',
    title: {
      en: 'Support Our Mission',
      bn: 'আমাদের মিশনে পাশে থাকুন'
    },
    description: {
      en: 'Contribute toward nutritious daily meals, essential medical care, comfortable bedding, and dignified living facilities.',
      bn: 'আবাসিক প্রবীণদের নিয়মিত পুষ্টিকর আহার, প্রয়োজনীয় স্বাস্থ্যসেবা, আরামদায়ক বিছানা এবং মর্যাদাপূর্ণ আবাসন নিশ্চিতে সহায়তা করুন।'
    },
    buttonText: {
      en: 'Donate',
      bn: 'সহায়তা করুন'
    },
    buttonHref: '/donate',
    icon: Heart,
    badge: {
      en: 'Care Sponsorship',
      bn: 'সেবা সহায়তা'
    },
    isPrimary: true
  },
  {
    id: 'option-partner-with-us',
    title: {
      en: 'Partner With Us',
      bn: 'আমাদের সাথে যুক্ত হোন'
    },
    description: {
      en: 'Collaborate through healthcare partnerships, institutional CSR initiatives, or community awareness programs.',
      bn: 'স্বাস্থ্যসেবা কর্মসূচি, প্রাতিষ্ঠানিক সিএসআর উদ্যোগ বা সচেতনতামূলক সামাজিক কার্যক্রমের মাধ্যমে যৌথভাবে কাজ করুন।'
    },
    buttonText: {
      en: 'Contact Us',
      bn: 'যোগাযোগ করুন'
    },
    buttonHref: '/contact',
    icon: Handshake,
    badge: {
      en: 'Institutional Unity',
      bn: 'প্রাতিষ্ঠানিক সংহতি'
    },
    isPrimary: false
  }
];
