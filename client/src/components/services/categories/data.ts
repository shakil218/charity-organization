import { ServiceCategoryItem } from './types';

/**
 * Default copy and data for the main Service Categories section.
 * Adheres strictly to non-clinical language and ethical non-profit standards.
 * Categories are clearly presented as proposed areas of support awaiting formal organizational confirmation.
 */
export const DEFAULT_SERVICE_CATEGORIES_DATA = {
  eyebrow: {
    en: 'AREAS OF CARE',
    bn: 'আমাদের সেবামূলক ক্ষেত্র'
  },
  heading: {
    en: 'Explore Our Areas of Support',
    bn: 'আমাদের সহায়তা ও সেবা ক্ষেত্রসমূহ'
  },
  description: {
    en: 'Discover the six proposed support domains designed to bring comfort, security, and dignity to older adults. All programs reflect our foundational care philosophy and are subject to official verification upon operational launch.',
    bn: 'প্রবীণদের জীবনে স্বাচ্ছন্দ্য, নিরাপত্তা ও আত্মমর্যাদা নিশ্চিত করতে আমাদের প্রস্তাবিত ছয়টি সেবামূলক ক্ষেত্র অন্বেষণ করুন। প্রতিটি কর্মসূচি আমাদের সেবা দর্শনের প্রতিফলন এবং কেন্দ্র চালুর সময় প্রাতিষ্ঠানিক অনুমোদনের ওপর নির্ভরশীল।'
  },
  categories: [
    {
      id: 'elderly-support',
      slug: 'elderly-support',
      title: {
        en: 'Elderly Support',
        bn: 'প্রবীণ সহায়তা ও যত্ন'
      },
      description: {
        en: 'Providing compassionate personal accompaniment, respectful companionship, and emotional comfort to protect senior dignity. Dedicated caregivers focus on fulfilling each resident\'s daily emotional and physical needs with patience.',
        bn: 'প্রবীণ সদস্যদের মানবিক সান্নিধ্য, মানসিক প্রশান্তি ও শ্রদ্ধাশীল সঙ্গ প্রদানের মাধ্যমে তাদের আত্মমর্যাদা রক্ষা করা। দায়িত্বশীল পরিচর্যাকারীরা প্রতিটি প্রবীণের প্রাত্যহিক আবেগীয় ও মানবিক চাহিদার প্রতি বিশেষ যত্ন নেন।'
      },
      availabilityLabel: {
        en: 'Proposed Core Area',
        bn: 'প্রস্তাবিত মূল ক্ষেত্র'
      },
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Attentive caregiver offering gentle hand assistance to an elderly resident',
        bn: 'প্রবীণ সদস্যকে আন্তরিক মমতায় পরিচর্যা ও সাহচর্য প্রদান'
      },
      iconName: 'HeartHandshake',
      href: '#elderly-support'
    },
    {
      id: 'rehabilitation-assistance',
      slug: 'rehabilitation-assistance',
      title: {
        en: 'Rehabilitation Assistance',
        bn: 'পুনর্বাসন ও গতিশীলতা সহায়তা'
      },
      description: {
        en: 'Encouraging resident mobility through light physical movement routines, walking accompaniment, and accessible spaces. These non-clinical exercises aim to support natural independence and daily physical comfort.',
        bn: 'নিয়মিত হালকা ব্যায়াম, নিরাপদ প্রাঙ্গণে হাঁটাচলা এবং প্রবীণবান্ধব অবকাঠামোর মাধ্যমে স্বাভাবিক সচলতা বৃদ্ধি। এই সাধারণ শরীরচর্চা প্রবীণদের স্বাবলম্বিতা ও দৈনন্দিন শারীরিক স্বস্তি বজায় রাখতে সাহায্য করে।'
      },
      availabilityLabel: {
        en: 'Under Planning',
        bn: 'পরিকল্পনাধীন ক্ষেত্র'
      },
      imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Supportive mobility and gentle rehabilitation daily activities in a bright room',
        bn: 'প্রবীণদের শারীরিক সচলতা ও স্বাভাবিক জীবনযাপনে সহায়তামূলক নিরাপদ পরিবেশ'
      },
      iconName: 'Activity',
      href: '#rehabilitation-assistance'
    },
    {
      id: 'social-emotional-wellbeing',
      slug: 'social-emotional-wellbeing',
      title: {
        en: 'Social and Emotional Wellbeing',
        bn: 'সামাজিক ও মানসিক সুস্থতা'
      },
      description: {
        en: 'Fostering cheerful social interaction through storytelling circles, shared leisure hobbies, and compassionate listening. Creating an active community environment helps alleviate feelings of loneliness and nurtures lasting friendships.',
        bn: 'গল্পের আসর, বিনোদনমূলক শখ এবং সহানুভূতিশীল কথোপকথনের মাধ্যমে মানসিক প্রশান্তির বিকাশ। একটি প্রাণবন্ত সামাজিক পরিবেশ একাকীত্ব দূর করে এবং প্রবীণদের মাঝে নতুন বন্ধুত্বের সৃষ্টি করে।'
      },
      availabilityLabel: {
        en: 'Community Initiative',
        bn: 'সামাজিক উদ্যোগ'
      },
      imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Older adults engaging in cheerful social community activities and friendly conversation',
        bn: 'প্রবীণদের প্রাণবন্ত সামাজিক আলাপচারিতা ও আনন্দঘন সান্নিধ্য'
      },
      iconName: 'Smile',
      href: '#social-emotional-wellbeing'
    },
    {
      id: 'daily-living-support',
      slug: 'daily-living-support',
      title: {
        en: 'Daily Living Support',
        bn: 'দৈনন্দিন জীবনযাপন সহায়তা'
      },
      description: {
        en: 'Assisting with wholesome daily nutrition, tidy living quarters, and patient support for everyday personal routines. Our goal is to ensure a secure, hygienic, and stress-free living space for all community members.',
        bn: 'পুষ্টিকর ঘরোয়া খাবার, পরিচ্ছন্ন আবাসন এবং প্রাত্যহিক ব্যক্তিগত প্রয়োজনে আন্তরিক সহায়তা প্রদান। আমাদের লক্ষ্য প্রতিটি প্রবীণ সদস্যের জন্য একটি পরিপাটি, স্বাস্থ্যকর ও নিরাপদ গৃহপরিবেশ নিশ্চিত করা।'
      },
      availabilityLabel: {
        en: 'Proposed Care Plan',
        bn: 'প্রস্তাবিত পরিচর্যা'
      },
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Fresh wholesome dining and clean living quarters for elderly residents',
        bn: 'প্রবীণদের জন্য নিরাপদ আবাসন ও পুষ্টিকর খাদ্য পরিবেশন'
      },
      iconName: 'Utensils',
      href: '#daily-living-support'
    },
    {
      id: 'health-wellbeing-coordination',
      slug: 'health-wellbeing-coordination',
      title: {
        en: 'Health and Wellbeing Coordination',
        bn: 'স্বাস্থ্য ও কল্যাণ সমন্বয়'
      },
      description: {
        en: 'Facilitating medication reminders, basic wellness checkups, and timely coordination with external clinical professionals. We coordinate foundational healthcare access while ensuring transparency and resident safety.',
        bn: 'নিয়মিত ওষুধ সেবনের রুটিন তদারকি, প্রাথমিক স্বাস্থ্য পরীক্ষা এবং প্রয়োজনে বাহ্যিক চিকিৎসকদের সাথে সমন্বয় রক্ষা। বিশেষায়িত চিকিৎসার পরিপূরক হিসেবে আমরা প্রবীণদের মৌলিক স্বাস্থ্য সুরক্ষাকে সমন্বিত করি।'
      },
      availabilityLabel: {
        en: 'Coordinated Program',
        bn: 'সমন্বিত কর্মসূচি'
      },
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Health coordination and essential wellness monitoring equipment',
        bn: 'স্বাস্থ্য সমন্বয় ও প্রাথমিক স্বাস্থ্য সুরক্ষা সামগ্রী'
      },
      iconName: 'HeartPulse',
      href: '/transparency'
    },
    {
      id: 'community-family-engagement',
      slug: 'community-family-engagement',
      title: {
        en: 'Community and Family Engagement',
        bn: 'সম্প্রদায় ও পরিবার সম্পৃক্ততা'
      },
      description: {
        en: 'Encouraging regular visits from family members, volunteers, and civic partners to maintain strong societal connections. We bridge communication between residents and their loved ones with mutual respect and care.',
        bn: 'পারিবারিক যোগাযোগ বজায় রাখতে স্বজনদের নিয়মিত সাক্ষাৎ, স্বেচ্ছাসেবী দলের সান্নিধ্য ও সামাজিক সংহতিকে উৎসাহিত করা। আত্মীয়স্বজন ও সমাজের সাথে প্রবীণদের আত্মিক বন্ধন অটুট রাখতে আমরা নিবেদিত।'
      },
      availabilityLabel: {
        en: 'Outreach Focus',
        bn: 'সংযোগ উদ্যোগ'
      },
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Warm community gathering with family and compassionate volunteer visitors',
        bn: 'পরিবার ও স্বেচ্ছাসেবকদের সাথে সৌহার্দ্যপূর্ণ সামাজিক সম্মেলন'
      },
      iconName: 'Users',
      href: '/get-involved'
    }
  ] as ServiceCategoryItem[],
  learnMoreText: {
    en: 'Learn More',
    bn: 'বিস্তারিত জানুন'
  },
  notice: {
    en: 'Notice on Service Verification: The categories above represent proposed domains of support under SORC’s humanitarian framework. Final operational schedules, medical procedures, and specialist services will be published upon official facility confirmation.',
    bn: 'দাপ্তরিক নির্দেশিকা: উল্লেখিত সেবাসমূহ সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের প্রস্তাবিত সহায়তা কাঠামো প্রকাশ করে। নির্দিষ্ট কার্যক্রম, চিকিৎসা টিম ও সেবা সময়সূচি কেন্দ্র হতে চূড়ান্ত যাচাই সাপেক্ষে হালনাগাদ করা হবে।'
  }
};
