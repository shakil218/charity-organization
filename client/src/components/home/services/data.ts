import { HeartHandshake, Activity, Users, Home } from 'lucide-react';
import { ServiceCategoryItem } from './types';

/**
 * Proposed service categories data.
 * Adheres strictly to non-clinical, non-fabricated language.
 * Subject to organizational verification upon facility operationalization.
 */
export const defaultServiceCategories: ServiceCategoryItem[] = [
  {
    id: 'elderly-support',
    slug: 'elderly-support',
    title: {
      en: 'Elderly Support',
      bn: 'প্রবীণ সহায়তা ও যত্ন'
    },
    shortDescription: {
      en: 'Offering compassionate personal accompaniment, respectful companionship, and emotional comfort to protect senior dignity.',
      bn: 'প্রবীণ সদস্যদের মানবিক সান্নিধ্য, মানসিক প্রশান্তি ও শ্রদ্ধাশীল সঙ্গ প্রদানের মাধ্যমে তাদের আত্মমর্যাদা রক্ষা করা।'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=700',
    imageAlt: {
      en: 'Caregiver providing attentive, compassionate companion support to an elderly resident',
      bn: 'প্রবীণ সদস্যকে আন্তরিক মমতায় পরিচর্যা ও সাহচর্য প্রদান'
    },
    icon: HeartHandshake,
    badgeLabel: {
      en: 'Compassionate Care',
      bn: 'আন্তরিক সাহচর্য'
    },
    href: '/services#elderly-support'
  },
  {
    id: 'rehabilitation-assistance',
    slug: 'rehabilitation-assistance',
    title: {
      en: 'Rehabilitation Assistance',
      bn: 'পুনর্বাসন ও গতিশীলতা সহায়তা'
    },
    shortDescription: {
      en: 'Encouraging resident mobility through light physical movement routines, walking accompaniment, and accessible spaces.',
      bn: 'নিয়মিত হালকা ব্যায়াম, নিরাপদ প্রাঙ্গণে হাঁটাচলা এবং প্রবীণবান্ধব অবকাঠামোর মাধ্যমে স্বাভাবিক সচলতা রক্ষা।'
    },
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=700',
    imageAlt: {
      en: 'Senior engaging in supportive mobility and gentle rehabilitation walking exercises',
      bn: 'প্রবীণদের শারীরিক সচলতা ও হাঁটাচলায় সহায়তামূলক পরিবেশ'
    },
    icon: Activity,
    badgeLabel: {
      en: 'Mobility & Wellness',
      bn: 'গতিশীলতা ও সচলতা'
    },
    href: '/services#rehabilitation-assistance'
  },
  {
    id: 'social-engagement',
    slug: 'social-engagement',
    title: {
      en: 'Social Engagement',
      bn: 'সামাজিক মেলবন্ধন ও সম্পৃক্ততা'
    },
    shortDescription: {
      en: 'Fostering vibrant social interaction through intergenerational conversations, community visits, and hobby sessions.',
      bn: 'গল্পের আসর, নতুন প্রজন্মের সাথে আন্তরিক মতবিনিময় ও পারস্পরিক সান্নিধ্যের মাধ্যমে নিঃসঙ্গতা দূরীকরণ।'
    },
    imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=700',
    imageAlt: {
      en: 'Older adults engaging in cheerful conversation and social community activities',
      bn: 'প্রবীণদের প্রাণবন্ত সামাজিক আলাপচারিতা ও আনন্দঘন সান্নিধ্য'
    },
    icon: Users,
    badgeLabel: {
      en: 'Community Life',
      bn: 'সামাজিক সান্নিধ্য'
    },
    href: '/services#social-engagement'
  },
  {
    id: 'daily-living-support',
    slug: 'daily-living-support',
    title: {
      en: 'Daily Living Support',
      bn: 'দৈনন্দিন জীবনযাপন সহায়তা'
    },
    shortDescription: {
      en: 'Assisting with wholesome daily nutrition, peaceful living quarters, and patient support for everyday routines.',
      bn: 'পুষ্টিকর ঘরোয়া খাবার, পরিচ্ছন্ন ও প্রশান্তিময় আবাসন এবং প্রাত্যহিক স্বাচ্ছন্দ্য বজায় রাখতে আন্তরিক সহায়তা।'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=700',
    imageAlt: {
      en: 'Supportive living environment with fresh nutritious dining for senior residents',
      bn: 'প্রবীণদের জন্য নিরাপদ আবাসন ও পুষ্টিকর খাদ্য পরিবেশন'
    },
    icon: Home,
    badgeLabel: {
      en: 'Daily Living',
      bn: 'দৈনন্দিন স্বাচ্ছন্দ্য'
    },
    href: '/services#daily-living-support'
  }
];
