import { Heart, Users, Handshake } from 'lucide-react';
import { GetInvolvedCardItem } from './types';

/**
 * Three visually distinct Get Involved cards.
 * Adheres strictly to communication integrity:
 * - Does NOT claim tax deductibility for donations
 * - Does NOT claim immediate specific volunteering vacancies exist; notes approved scheduling
 * - Dignified bilingual presentation with teal, forest-green, and gold styling
 */
export const defaultGetInvolvedCards: GetInvolvedCardItem[] = [
  {
    id: 'donate-card',
    variant: 'donate',
    title: {
      en: 'Support Approved Programs',
      bn: 'অনুমোদিত সেবায় অনুদান'
    },
    badge: {
      en: 'Direct Support',
      bn: 'সরাসরি সেবা'
    },
    description: {
      en: 'Support the organization’s approved programs, providing nutritious meals, safe shelter, and attentive daily living care with open stewardship.',
      bn: 'স্বচ্ছ জবাবদিহিতার সাথে প্রবীণদের অনুমোদিত পুনর্বাসন কর্মসূচি, পুষ্টিকর খাদ্য ও নিরাপদ আবাসন সামগ্রী নিশ্চিতে অংশ নিন।'
    },
    icon: Heart,
    ctaText: {
      en: 'Donate Now',
      bn: 'অনুদান দিন'
    },
    ctaHref: '/donate',
    footnote: {
      en: 'Allocated to certified resident care programs',
      bn: 'প্রবীণদের অনুমোদিত সেবামূলক কাজে বরাদ্দ'
    },
    theme: {
      iconBg: 'bg-rose-500/10',
      iconBorder: 'border-rose-500/25',
      iconColor: 'text-[#145B52]',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-[#145B52]',
      badgeBorder: 'border-amber-200',
      cardBorder: 'border-amber-200/90',
      hoverBorder: 'hover:border-[#145B52]/50',
      topAccent: 'bg-gradient-to-r from-transparent via-[#D6B56D] to-transparent',
      buttonBg: 'bg-[#145B52]',
      buttonHoverBg: 'hover:bg-[#0E423B]',
      buttonText: 'text-white'
    }
  },
  {
    id: 'volunteer-card',
    variant: 'volunteer',
    title: {
      en: 'Offer Time & Companionship',
      bn: 'সময় ও আন্তরিক সান্নিধ্য'
    },
    badge: {
      en: 'Community Service',
      bn: 'সামাজিক সম্পৃক্ততা'
    },
    description: {
      en: 'Offer time, thoughtful skills, or friendly companionship through approved opportunities to help dispel loneliness and bring smiles to older adults.',
      bn: 'অনুমোদিত সাংগঠনিক কর্মসূচির আওতায় সময়, গঠনমূলক দক্ষতা বা সহমর্মিতাপূর্ণ সান্নিধ্য দিয়ে প্রবীণদের নিঃসঙ্গতা দূরীকরণে পাশে দাঁড়ান।'
    },
    icon: Users,
    ctaText: {
      en: 'Explore Opportunities',
      bn: 'স্বেচ্ছাসেবা জানুন'
    },
    ctaHref: '/get-involved',
    footnote: {
      en: 'Coordinated via approved community scheduling',
      bn: 'সাংগঠনিক নিরাপত্তা ও অনুমোদন সাপেক্ষে পরিচালিত'
    },
    theme: {
      iconBg: 'bg-emerald-500/10',
      iconBorder: 'border-emerald-500/25',
      iconColor: 'text-[#276749]',
      badgeBg: 'bg-emerald-50/70',
      badgeText: 'text-[#276749]',
      badgeBorder: 'border-emerald-200',
      cardBorder: 'border-emerald-200/80',
      hoverBorder: 'hover:border-[#276749]/50',
      topAccent: 'bg-gradient-to-r from-transparent via-[#276749]/80 to-transparent',
      buttonBg: 'bg-[#276749]',
      buttonHoverBg: 'hover:bg-[#1E4D2B]',
      buttonText: 'text-white'
    }
  },
  {
    id: 'partner-card',
    variant: 'partner',
    title: {
      en: 'Organizational Collaboration',
      bn: 'প্রাতিষ্ঠানিক ও সামাজিক অংশীদারিত্ব'
    },
    badge: {
      en: 'Mutual Partnerships',
      bn: 'যৌথ মেলবন্ধন'
    },
    description: {
      en: 'Explore community outreach, institutional goodwill, or corporate collaboration to advance compassionate senior living and care sustainability.',
      bn: 'প্রবীণদের দীর্ঘমেয়াদি সুরক্ষা ও মানবিক উন্নয়নে সামাজিক সংগঠন, করপোরেট প্রতিষ্ঠান বা সুধীজনদের সাথে যৌথ উদ্যোগের পথ উন্মুক্ত।'
    },
    icon: Handshake,
    ctaText: {
      en: 'Partner With Us',
      bn: 'যোগাযোগ করুন'
    },
    ctaHref: '/contact',
    footnote: {
      en: 'Subject to formal alignment and ethical review',
      bn: 'আনুষ্ঠানিক নীতিমালা ও সমঝোতা সাপেক্ষে'
    },
    theme: {
      iconBg: 'bg-teal-500/10',
      iconBorder: 'border-teal-500/25',
      iconColor: 'text-[#145B52]',
      badgeBg: 'bg-[#FAF8F2]',
      badgeText: 'text-[#145B52]',
      badgeBorder: 'border-teal-200/90',
      cardBorder: 'border-teal-200/80',
      hoverBorder: 'hover:border-[#145B52]/50',
      topAccent: 'bg-gradient-to-r from-transparent via-[#145B52]/70 to-transparent',
      buttonBg: 'bg-white',
      buttonHoverBg: 'hover:bg-[#FAF8F2]',
      buttonText: 'text-[#145B52]',
      buttonBorder: 'border border-[#145B52]/30 hover:border-[#145B52]'
    }
  }
];
