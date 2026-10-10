import { StoryArticleItem } from './types';

/**
 * Default Stories & Community News.
 * Strictly adheres to truthfulness principles:
 * - Articles are marked with `isDemo: true` indicating preliminary sample announcements
 *   until verified published reports are certified by the editorial committee.
 * - Non-fabricated topics focusing on genuine community care initiatives.
 */
export const defaultStoriesArticles: StoryArticleItem[] = [
  {
    id: 'story-health-wellness',
    slug: 'community-health-wellness-initiative',
    title: {
      en: 'Community Health & Routine Wellness Initiative',
      bn: 'প্রবীণ সদস্যদের সার্বিক স্বাস্থ্য পরীক্ষা ও সুস্থতা উদ্যোগ'
    },
    summary: {
      en: 'Planning regular vital checks, respectful physician consultations, and gentle physical mobility exercises tailored for elderly comfort.',
      bn: 'সম্মানিত প্রবীণদের নিয়মিত রক্তচাপ পরীক্ষা, প্রাথমিক চিকিৎসকের পরামর্শ ও শারীরিক স্বাচ্ছন্দ্য বজায় রাখার সামগ্রিক রূপরেখা।'
    },
    category: {
      en: 'Health & Routine Care',
      bn: 'স্বাস্থ্য ও পরিচর্যা'
    },
    categoryTheme: 'teal',
    publishedAt: '2026-10-04',
    formattedDate: {
      en: 'October 4, 2026',
      bn: '৪ অক্টোবর, ২০২৬'
    },
    coverImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Supportive healthcare professional consulting with an older adult with dignity',
      bn: 'প্রবীণ সদস্যের সাথে মমতাময়ী চিকিৎসকের স্বাস্থ্য পরামর্শের প্রতীকী চিত্র'
    },
    readTime: {
      en: '3 min read',
      bn: '৩ মিনিট পাঠ'
    },
    isDemo: true,
    href: '/stories/community-health-wellness-initiative'
  },
  {
    id: 'story-winter-warmth',
    slug: 'winter-warmth-bedding-preparation',
    title: {
      en: 'Winter Warmth & Bedding Distribution Preparation',
      bn: 'আসন্ন শীত উপলক্ষে প্রবীণদের জন্য উষ্ণ বস্ত্র ও কম্বল সহায়তা প্রস্তুতি'
    },
    summary: {
      en: 'Organizing clean thermal blankets, warm woolen garments, and room heating arrangements for the approaching cold season.',
      bn: 'শীত মৌসুমে স্বজনহীন প্রবীণদের সুরক্ষায় উন্নতমানের কম্বল, উষ্ণ পোশাক ও নিরাপদ কক্ষের সুব্যবস্থা গ্রহণের প্রাথমিক প্রস্তুতি।'
    },
    category: {
      en: 'Seasonal Support',
      bn: 'মৌসুমি সুরক্ষা'
    },
    categoryTheme: 'amber',
    publishedAt: '2026-09-28',
    formattedDate: {
      en: 'September 28, 2026',
      bn: '২৮ সেপ্টেম্বর, ২০২৬'
    },
    coverImage: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Warm blankets and cozy seasonal living care arrangement for seniors',
      bn: 'শীত মৌসুমে প্রবীণদের জন্য উষ্ণ কম্বল ও আরামদায়ক আবাসন সামগ্রী'
    },
    readTime: {
      en: '2 min read',
      bn: '২ মিনিট পাঠ'
    },
    isDemo: true,
    href: '/stories/winter-warmth-bedding-preparation'
  },
  {
    id: 'story-volunteer-sessions',
    slug: 'intergenerational-companionship-volunteers',
    title: {
      en: 'Intergenerational Companionship & Volunteer Sessions',
      bn: 'প্রবীণদের নিঃসঙ্গতা দূরীকরণে তরুণ স্বেচ্ছাসেবকদের সান্নিধ্য পর্ব'
    },
    summary: {
      en: 'Inviting respectful local youth and community members for scheduled storytelling, empathetic listening, and shared tea times.',
      bn: 'সাপ্তাহিক ছুটির দিনে শ্রদ্ধাপূর্ণ গল্প বলা, পারিবারিক আলাপ ও আন্তরিক সান্নিধ্যের মাধ্যমে প্রবীণদের মুখে নির্মল হাসি ফোটানোর প্রয়াস।'
    },
    category: {
      en: 'Community & Companionship',
      bn: 'সামাজিক মেলবন্ধন'
    },
    categoryTheme: 'emerald',
    publishedAt: '2026-09-15',
    formattedDate: {
      en: 'September 15, 2026',
      bn: '১৫ সেপ্টেম্বর, ২০২৬'
    },
    coverImage: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Youth volunteer engaged in respectful and joyful conversation with an older adult',
      bn: 'প্রবীণ মানুষের সাথে সহমর্মিতাপূর্ণ গল্প ও আন্তরিক সান্নিধ্যের চিত্র'
    },
    readTime: {
      en: '4 min read',
      bn: '৪ মিনিট পাঠ'
    },
    isDemo: true,
    href: '/stories/intergenerational-companionship-volunteers'
  }
];
