import { ShieldCheck, Users, HeartHandshake } from 'lucide-react';
import { FacilitiesHighlightItem } from './types';
import type { BilingualText } from '../hero/types';

export const DEFAULT_FACILITIES_OVERVIEW_HIGHLIGHTS: FacilitiesHighlightItem[] = [
  {
    id: 'comfort-dignity',
    title: {
      en: 'Comfort and Dignity',
      bn: 'স্বাচ্ছন্দ্য ও মানবিক মর্যাদা'
    },
    description: {
      en: 'Prioritizing calm resting areas, ease of mobility, and living arrangements that honor personal autonomy and self-respect.',
      bn: 'চলাফেরার সহজ সুযোগ, শান্তিপূর্ণ বিশ্রাম এবং প্রতিটি প্রবীণের স্বকীয়তা ও আত্মমর্যাদাকে সম্মান জানানোর প্রতিশ্রুতি।'
    },
    icon: ShieldCheck
  },
  {
    id: 'shared-spaces',
    title: {
      en: 'Welcoming Shared Spaces',
      bn: 'আন্তরিক উন্মুক্ত ও সামাজিক পরিসর'
    },
    description: {
      en: 'Encouraging healthy companionship, everyday conversations, and communal moments that prevent social isolation.',
      bn: 'একাকীত্ব দূর করতে পারস্পরিক কুশল বিনিময়, আড্ডা ও গঠনমূলক সামাজিক মেলামেশার জন্য উন্মুক্ত মিলনস্থল।'
    },
    icon: Users
  },
  {
    id: 'visitor-experiences',
    title: {
      en: 'Respectful Visitor Experiences',
      bn: 'শ্রদ্ধাশীল দর্শনার্থী অভিজ্ঞতা'
    },
    description: {
      en: 'Creating welcoming settings where family members, sponsors, and community friends can connect warmly with residents.',
      bn: 'স্বজন, শুভাকাঙ্ক্ষী ও পৃষ্ঠপোষকদের সাথে প্রবীণদের সাক্ষাতের জন্য সুশৃঙ্খল ও আন্তরিক পরিবেশ।'
    },
    icon: HeartHandshake
  }
];

export const DEFAULT_FACILITIES_OVERVIEW_DATA = {
  eyebrow: {
    en: 'OUR ENVIRONMENT',
    bn: 'আমাদের পরিবেশ'
  } as BilingualText,
  heading: {
    en: 'Spaces That Support Dignity and Belonging',
    bn: 'মর্যাদা ও সামাজিক মেলবন্ধন সহায়ক পরিবেশ'
  } as BilingualText,
  description: {
    en: 'A welcoming environment can help older adults feel respected, comfortable, and connected with the people around them.',
    bn: 'একটি আন্তরিক ও সুষম পরিবেশ প্রবীণদের সম্মানিত, স্বাচ্ছন্দ্যময় এবং চারপাশের মানুষের সাথে আন্তরিকভাবে যুক্ত থাকতে সাহায্য করে।'
  } as BilingualText,
  secondaryDescription: {
    en: 'Thoughtful surroundings foster emotional reassurance, safe mobility, and daily engagement, allowing seniors to experience their days with quiet independence and communal warmth.',
    bn: 'সুপরিকল্পিত ও সুশৃঙ্খল পরিবেশ মানসিক প্রশান্তি ও স্বাচ্ছন্দ্যময় চলাফেরা নিশ্চিত করে, যা প্রবীণ নাগরিকদের প্রাত্যহিক নির্ভরতা ও একাকীত্বহীন জীবনযাপন উপহার দেয়।'
  } as BilingualText,
  disclaimer: {
    en: 'These highlights reflect general environmental care principles rather than verified structural specifications of the center.',
    bn: 'এসব বক্তব্য প্রবীণদের সেবায় আমাদের আদর্শিক নীতিমালা তুলে ধরে; এটি ভবনের সুনির্দিষ্ট অবকাঠামোগত নকশার দাবি নয়।'
  } as BilingualText,
  imageSrc: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=800',
  imageAlt: {
    en: 'Peaceful, light-filled environment designed for comfort and elder dignity',
    bn: 'প্রবীণদের মর্যাদা ও স্বাচ্ছন্দ্য নিশ্চিত করতে শান্তিময় ও আলোকিত পরিবেশ'
  } as BilingualText
};
