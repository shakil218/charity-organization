import { DailyLivingHighlightItem } from './types';

/**
 * Default copy and bilingual content for Daily Living Support Section.
 * Strictly adheres to non-presumptive language:
 * - Does not claim unverified meal catering, hygiene assistance, accommodation, or daily caregiving
 * - Emphasizes respectful assistance, educational guidance, and accessible living principles
 */
export const DEFAULT_DAILY_LIVING_DATA = {
  eyebrow: {
    en: 'DAILY LIVING SUPPORT',
    bn: 'দৈনন্দিন জীবনযাপন সহায়তা'
  },
  heading: {
    en: 'Everyday Support With Dignity',
    bn: 'মর্যাদাপূর্ণ প্রাত্যহিক সহায়তা'
  },
  description: {
    en: 'Depending on individual needs and available resources, practical support can help older adults maintain comfort, personal choice, and participation in daily routines.',
    bn: 'ব্যক্তিগত চাহিদা ও উপলব্ধ সম্পদের ওপর ভিত্তি করে, বাস্তবসম্মত সহায়তা প্রবীণদের শারীরিক স্বস্তি, নিজস্ব সিদ্ধান্ত ও প্রাত্যহিক রুটিনে সক্রিয় অংশগ্রহণ বজায় রাখতে সাহায্য করে।'
  },
  secondaryParagraph: {
    en: 'We uphold the dignity of every individual, emphasizing assistance that empowers older adults rather than creating dependency, while honoring lifelong personal habits.',
    bn: 'আমরা প্রতিটি প্রবীণের আত্মমর্যাদাকে প্রাধান্য দিই—এমন সহায়তাকে উৎসাহিত করি যা পরনির্ভরশীলতা না বাড়িয়ে নিজস্ব অভ্যাস বজায় রেখে স্বাচ্ছন্দ্যময় জীবনযাপনে সাহায্য করে।'
  },
  highlights: [
    {
      id: 'everyday-activities',
      title: {
        en: 'Assistance with Everyday Activities, Where Offered',
        bn: 'দৈনন্দিন কাজকর্মে সহায়তা (উপলব্ধতা সাপেক্ষে)'
      },
      description: {
        en: 'Gentle encouragement and practical aid with simple daily tasks, promoting personal comfort and steady independence.',
        bn: 'সহজ প্রাত্যহিক কাজকর্মে সহমর্মিতাপূর্ণ সহায়তা ও উৎসাহ প্রদান, যা প্রবীণদের স্বাবলম্বিতা ও শারীরিক স্বস্তি বজায় রাখতে সাহায্য করে।'
      },
      iconName: 'CheckCircle2'
    },
    {
      id: 'nutrition-support',
      title: {
        en: 'Information About Nutrition and Mealtime Support',
        bn: 'পুষ্টি ও আহার সহায়তার তথ্য ও পরামর্শ'
      },
      description: {
        en: 'Educational guidance on balanced nutritional choices, healthy hydration habits, and comfortable mealtime practices.',
        bn: 'বয়সোচিত সুষম খাবার, নিয়মিত পর্যাপ্ত পানি পান এবং স্বাস্থ্যসম্মত খাদ্যভ্যাস বজায় রাখা সম্পর্কিত প্রয়োজনীয় তথ্য ও দিকনির্দেশনা।'
      },
      iconName: 'UtensilsCrossed'
    },
    {
      id: 'accessible-surroundings',
      title: {
        en: 'Accessible Surroundings & Safe Spaces',
        bn: 'প্রবীণবান্ধব ও নিরাপদ অবকাঠামো'
      },
      description: {
        en: 'Awareness of well-lit spaces, non-slip surfaces, uncluttered walkways, and simple home adaptations that reduce fall risks.',
        bn: 'আলো-বাতাসপূর্ণ পরিবেশ, ঝুঁকিমুক্ত চলাচলের পথ এবং সাধারণ অবকাঠামোগত সুবিধা যা প্রবীণদের চলাচলে নিরাপত্তা ও স্বস্তি নিশ্চিত করে।'
      },
      iconName: 'Home'
    },
    {
      id: 'family-caregiver-guidance',
      title: {
        en: 'Guidance for Families and Caregivers',
        bn: 'পরিবার ও পরিচর্যাকারীদের দিকনির্দেশনা'
      },
      description: {
        en: 'Empathetic advice and practical resources for family members supporting aging loved ones in home environments.',
        bn: 'পরিবারের সদস্যদের জন্য প্রবীণদের ঘরোয়া যত্ন, সহমর্মিতাপূর্ণ সাহচর্য ও সার্বিক পরিচর্যার বাস্তবমুখী তথ্য ও প্রয়োজনীয় পরামর্শ।'
      },
      iconName: 'Users'
    }
  ] as DailyLivingHighlightItem[],
  ctaText: {
    en: 'Ask About Daily Living Support',
    bn: 'দৈনন্দিন সহায়তা সম্পর্কে জানুন'
  },
  ctaHref: '/contact',
  imageSrc: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=1000',
  imageAlt: {
    en: 'An older adult resting comfortably in an accessible, bright, and dignified living setting',
    bn: 'একটি নিরাপদ, আলোকিত এবং মর্যাদাপূর্ণ প্রাত্যহিক পরিবেশে প্রবীণ ব্যক্তির প্রশান্তিময় মুহূর্ত'
  },
  imageBadge: {
    en: 'Comfort • Everyday Autonomy',
    bn: 'শারীরিক স্বস্তি • নিজস্ব সিদ্ধান্ত'
  },
  disclaimerNotice: {
    en: 'Scope & Program Notice: Sonavan Old Rehabilitation Center does not provide residential accommodation, daily meal catering, personal hygiene assistance, or hands-on clinical caregiving unless officially verified and confirmed under approved institutional programs. Information presented here reflects educational and advisory principles.',
    bn: 'দাপ্তরিক তথ্য ও সীমাবদ্ধতা: প্রাতিষ্ঠানিক অনুমোদন ও চূড়ান্ত যাচাইকরণ ব্যতীত সোনাভান ওল্ড রিহ্যাবিলিটেশন সেন্টার কোনো আবাসিক ব্যবস্থা, নিয়মিত খাদ্য পরিবেশন, ব্যক্তিগত পরিচ্ছন্নতা সেবা বা সার্বক্ষণিক নার্সিং সেবার নিশ্চয়তা দেয় না। এখানে বর্ণিত বিষয়াদি শিক্ষামূলক দিকনির্দেশনা ও সাধারণ সেবাদর্শন মাত্র।'
  }
};
