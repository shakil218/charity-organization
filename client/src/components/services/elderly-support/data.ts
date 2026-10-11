import { SupportAreaItem } from './types';

/**
 * Default copy and bilingual content for Elderly Support Section.
 * Strictly respects senior agency, autonomy, and non-presumptive service language.
 */
export const DEFAULT_ELDERLY_SUPPORT_DATA = {
  eyebrow: {
    en: 'RESPECTFUL CARE PRINCIPLES',
    bn: 'শ্রদ্ধাশীল মানবিক দৃষ্টিভঙ্গি'
  },
  heading: {
    en: 'Support That Respects Every Individual',
    bn: 'প্রতিটি ব্যক্তির মর্যাদাপূর্ণ সহায়তা'
  },
  description: {
    en: 'Older adults have different experiences, preferences, and support needs. Respectful support begins with listening, protecting dignity, and understanding each person\'s circumstances.',
    bn: 'প্রতিটি প্রবীণ মানুষের রয়েছে আলাদা অভিজ্ঞতা, ব্যক্তিগত পছন্দ এবং নিজস্ব সহায়তার চাহিদা। শ্রদ্ধাশীল সমর্থন শুরু হয় তাদের কথা মনোযোগ দিয়ে শোনা, আত্মমর্যাদা রক্ষা করা এবং প্রত্যেকের পরিস্থিতি আন্তরিকভাবে অনুধাবন করার মাধ্যমে।'
  },
  secondaryParagraph: {
    en: 'We emphasize an approach that upholds personal agency and honors unique life histories, avoiding any one-size-fits-all model in our humanitarian outreach.',
    bn: 'আমরা প্রতিটি প্রবীণের ব্যক্তিস্বাতন্ত্র্য ও জীবনস্মৃতিকে সর্বোচ্চ সম্মান জানাই এবং বাঁধাধরা নিয়মের পরিবর্তে আন্তরিক মানবিক শ্রদ্ধাবোধে বিশ্বাস করি।'
  },
  supportAreas: [
    {
      id: 'respectful-communication',
      title: {
        en: 'Respectful Communication',
        bn: 'শ্রদ্ধাপূর্ণ যোগাযোগ'
      },
      description: {
        en: 'Engaging in patient, open-hearted conversations that validate feelings, honor personal choices, and preserve emotional well-being.',
        bn: 'ধৈর্যশীল ও আন্তরিক কথোপকথন যা প্রবীণদের অনুভূতিকে মূল্যায়ন করে এবং তাদের নিজস্ব পছন্দ ও মানসিক স্বস্তি বজায় রাখে।'
      },
      iconName: 'MessageSquareHeart'
    },
    {
      id: 'social-inclusion',
      title: {
        en: 'Social Inclusion',
        bn: 'সামাজিক অন্তর্ভুক্তি'
      },
      description: {
        en: 'Nurturing meaningful connections with peers, family visitors, and intergenerational community activities to counter isolation.',
        bn: 'সহযোগীদের সান্নিধ্য, পারিবারিক সাক্ষাৎ এবং সামাজিক কর্মকাণ্ডে সক্রিয় অংশগ্রহণের মাধ্যমে একাকীত্ব দূরীকরণ।'
      },
      iconName: 'Users'
    },
    {
      id: 'community-resources',
      title: {
        en: 'Information About Available Community Resources',
        bn: 'কমিউনিটি তথ্যের দিকনির্দেশনা'
      },
      description: {
        en: 'Guiding seniors and families toward verified public relief programs, local medical services, and civic support networks.',
        bn: 'প্রবীণ ও তাদের পরিবারকে স্থানীয় স্বাস্থ্যসেবা, সরকারি সুযোগ-সুবিধা ও সমাজকল্যাণমূলক তথ্যের সঠিক দিকনির্দেশনা প্রদান।'
      },
      iconName: 'BookOpen'
    },
    {
      id: 'appropriate-assistance',
      title: {
        en: 'Appropriate Assistance, Where Offered by the Organization',
        bn: 'সংস্থা কর্তৃক অনুমোদিত সম্ভাব্য সহায়তা'
      },
      description: {
        en: 'Providing thoughtful aid strictly within verified organizational capabilities as officially planned and confirmed.',
        bn: 'সংস্থার প্রাতিষ্ঠানিক সক্ষমতা ও আনুষ্ঠানিক নীতিমালার ভিত্তিতে যাচাইকৃত পরিমিত ও অর্থপূর্ণ সহায়তা প্রদান।'
      },
      iconName: 'HeartHandshake'
    }
  ] as SupportAreaItem[],
  ctaText: {
    en: 'Ask About Available Support',
    bn: 'সহায়তা সম্পর্কে জিজ্ঞাসা করুন'
  },
  ctaHref: '/contact',
  imageSrc: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1000',
  imageAlt: {
    en: 'An older adult engaged in daily independent living with dignity and active spirit',
    bn: 'মর্যাদাপূর্ণ ও আত্মনির্ভরশীল প্রবীণ ব্যক্তির সচল ও সক্রিয় জীবনযাপনের দৃশ্য'
  },
  imageBadge: {
    en: 'Individual Dignity • Active Agency',
    bn: 'ব্যক্তি মর্যাদা • সক্রিয় অংশগ্রহণ'
  },
  disclaimerNotice: {
    en: 'Scope Note: General principles of support are outlined here. Specific residential or personal assistance programs are subject to official verification by center administration.',
    bn: 'দাপ্তরিক তথ্য: এখানে সহায়তার সাধারণ মূলনীতি বর্ণিত হয়েছে। নির্দিষ্ট আবাসিক বা ব্যক্তিগত সেবা কর্মসূচি সংস্থার আনুষ্ঠানিক অনুমোদনের ওপর নির্ভরশীল।'
  }
};
