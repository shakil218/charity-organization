import { 
  CheckCircle2, 
  DoorOpen, 
  Sun, 
  Bell, 
  ShieldCheck, 
  Users, 
  UtensilsCrossed, 
  Trees 
} from 'lucide-react';
import { LivingSpaceItem } from './types';
import type { BilingualText } from '../hero/types';

/**
 * 4 Confirmed Living Spaces & Common Areas for Sonavan Old Rehabilitation Center.
 * Strict principle: Accurately presents core daily spaces without inventing unverified
 * room capacities or medical equipment. Clear illustrative photo disclosures protect accuracy.
 */
export const DEFAULT_LIVING_SPACES: LivingSpaceItem[] = [
  {
    id: 'living-residential',
    title: {
      en: 'Restful Living & Residential Resting Areas',
      bn: 'শান্তিময় আবাসিক ও বিশ্রাম পরিসর'
    },
    categoryTag: {
      en: 'Comfort & Dignity',
      bn: 'স্বাচ্ছন্দ্য ও আত্মমর্যাদা'
    },
    description: {
      en: 'Designed to provide quiet repose, personal security, and unhurried daily rest. Room arrangements emphasize level barrier-free flooring, natural cross-ventilation, and elder privacy to honor individual autonomy.',
      bn: 'নিবাসীদের নিরিবিলি বিশ্রাম, ব্যক্তিগত নিরাপত্তা ও শান্তির উদ্দেশ্যে সুপরিকল্পিত। মেঝের সমতল বাধাহীন নকশা, পর্যাপ্ত আলো-বাতাস এবং প্রতিটি প্রবীণের ব্যক্তিগত মর্যাদা রক্ষাকে এখানে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়।'
    },
    statusBadge: {
      en: 'Admission Inquiry Required',
      bn: 'ভর্তি অনুসন্ধান সাপেক্ষে'
    },
    inquiryNote: {
      en: 'Accommodation arrangements are subject to verified intake evaluation and available bed allocation at our Gazipur campus.',
      bn: 'আবাসিক ব্যবস্থা গ্রহণ আমাদের গাজীপুর ক্যাম্পাসে ভর্তি মূল্যায়ন এবং শয্যার প্রাপ্যতার ওপর নির্ভর করে।'
    },
    imageSrc: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1000',
    imageAlt: {
      en: 'Calm and airy bedroom environment supporting senior rest and comfort',
      bn: 'প্রবীণদের নিরিবিলি বিশ্রাম ও শান্তির অনুকূল শান্ত আলো-বাতাসময় কক্ষ'
    },
    photoDisclaimer: {
      en: 'Illustrative visual representing senior-friendly residential room layout standards.',
      bn: 'প্রবীণবান্ধব আবাসিক কক্ষ ও আরামদায়ক শয়ন পরিবেশের প্রতীকী দৃশ্যপট।'
    },
    accessibilityFeatures: [
      {
        id: 'acc-floor',
        label: {
          en: 'Non-slip level flooring',
          bn: 'পিচ্ছিলতাহীন সমতল মেঝে'
        },
        icon: CheckCircle2
      },
      {
        id: 'acc-door',
        label: {
          en: 'Wide doorways for mobility ease',
          bn: 'সহজ চলাচলের জন্য প্রশস্ত প্রবেশদ্বার'
        },
        icon: DoorOpen
      },
      {
        id: 'acc-alarm',
        label: {
          en: 'Accessible bedside alert bells',
          bn: 'সহজে হাত পৌঁছানো সতর্কতা ঘণ্টা'
        },
        icon: Bell
      },
      {
        id: 'acc-air',
        label: {
          en: 'Natural daylight & fresh cross-ventilation',
          bn: 'প্রাকৃতিক আলো ও নির্মল বাতাস'
        },
        icon: Sun
      }
    ],
    isVerified: true
  },
  {
    id: 'common-lounges',
    title: {
      en: 'Common Sitting & Social Gathering Lounges',
      bn: 'উন্মুক্ত বসার ও আড্ডার স্থান'
    },
    categoryTag: {
      en: 'Community & Companionship',
      bn: 'সামাজিক মেলবন্ধন'
    },
    description: {
      en: 'Communal sitting spaces offer an inviting atmosphere where residents can converse, read daily Bengali and English newspapers, enjoy morning tea, and share cherished life stories with fellow seniors.',
      bn: 'উন্মুক্ত বসার চত্বর প্রবীণদের পারস্পরিক কুশল বিনিময়, প্রতিদিনের খবরের কাগজ পাঠ, সকালের স্নিগ্ধ চা এবং জীবনের প্রিয় স্মৃতিগুলো ভাগ করে নেওয়ার এক আন্তরিক পরিবেশ উপহার দেয়।'
    },
    statusBadge: {
      en: 'Central Gathering Space',
      bn: 'প্রধান মিলনস্থল'
    },
    inquiryNote: {
      en: 'Open throughout the daytime to encourage social interaction and prevent isolation among older adults.',
      bn: 'একাকীত্ব দূর করতে ও সামাজিক মেলামেশা বাড়াতে দিনের বেলায় সবার জন্য উন্মুক্ত।'
    },
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    imageAlt: {
      en: 'Warm common sitting room with comfortable armchairs and soft daylight',
      bn: 'আরামদায়ক সোফা ও আলো-বাতাসময় উন্মুক্ত সামাজিক বসার স্থান'
    },
    photoDisclaimer: {
      en: 'Illustrative representation of common lounge spaces designed to combat social isolation.',
      bn: 'সামাজিক বিচ্ছিন্নতা দূর করতে পরিকল্পিত উন্মুক্ত লাউঞ্জের প্রতীকী চিত্র।'
    },
    accessibilityFeatures: [
      {
        id: 'acc-armchairs',
        label: {
          en: 'Supportive armchairs with sturdy handrails',
          bn: 'হাতলযুক্ত মজবুত ও আরামদায়ক বসার আসন'
        },
        icon: Users
      },
      {
        id: 'acc-walkway',
        label: {
          en: 'Clutter-free, wide interior walking corridors',
          bn: 'বাধাহীন প্রশস্ত করিডোর ও হাঁটার পথ'
        },
        icon: CheckCircle2
      },
      {
        id: 'acc-lighting',
        label: {
          en: 'Gentle, glare-free ambient reading lighting',
          bn: 'চোখে আরামদায়ক স্নিগ্ধ রিডিং লাইট'
        },
        icon: Sun
      },
      {
        id: 'acc-safe',
        label: {
          en: 'Caregiver supervision within proximity',
          bn: 'নিকটবর্তী সেবাকর্মীদের সার্বক্ষণিক নজরদারি'
        },
        icon: ShieldCheck
      }
    ],
    isVerified: true
  },
  {
    id: 'dining-nourishment',
    title: {
      en: 'Shared Dining & Nutritious Meal Areas',
      bn: 'যৌথ ডাইনিং ও স্বাস্থ্যকর খাবার পরিবেশ'
    },
    categoryTag: {
      en: 'Nourishment & Care',
      bn: 'পুষ্টি ও সম্মিলিত আহার'
    },
    description: {
      en: 'Clean and organized dining areas where residents can sit together for unhurried, companionable meals. Food preparation emphasizes balanced nutrition, digestible recipes, and hygienic dietary care suitable for seniors.',
      bn: 'পরিচ্ছন্ন ও সুশৃঙ্খল ডাইনিং পরিসর যেখানে নিবাসীরা আন্তরিক সান্নিধ্যে তৃপ্তি সহকারে খাবার গ্রহণ করেন। প্রবীণদের হজমক্ষমতা ও পুষ্টি চাহিদা বিবেচনা করে স্বাস্থ্যসম্মত ও সহজপাচ্য খাদ্যাভ্যাস বজায় রাখা হয়।'
    },
    statusBadge: {
      en: 'Daily Communal Service',
      bn: 'দৈনন্দিন যৌথ পরিবেশনা'
    },
    inquiryNote: {
      en: 'Custom dietary considerations can be discussed with administrative and medical coordinators during admission.',
      bn: 'ভর্তির সময় চিকিৎসকদের পরামর্শ অনুযায়ী বিশেষ খাদ্যের চাহিদা সমন্বয় করা সম্ভব।'
    },
    imageSrc: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000',
    imageAlt: {
      en: 'Hygienic and organized communal dining tables for seniors',
      bn: 'স্বাস্থ্যসম্মত ও পরিচ্ছন্ন যৌথ আহারের পরিবেশ'
    },
    photoDisclaimer: {
      en: 'Illustrative depiction of senior dining environment supporting dignified mealtimes.',
      bn: 'সম্মানজনক ও স্বাস্থ্যকর খাবার পরিবেশের প্রতীকী চিত্র।'
    },
    accessibilityFeatures: [
      {
        id: 'acc-dining-table',
        label: {
          en: 'Stable tables with wheelchair clearance',
          bn: 'হুইলচেয়ারবান্ধব মজবুত ও সুষম টেবিল'
        },
        icon: UtensilsCrossed
      },
      {
        id: 'acc-clean',
        label: {
          en: 'Regular sanitized, easy-to-clean dining surfaces',
          bn: 'জীবাণুমুক্ত ও সহজে পরিচ্ছন্নযোগ্য টেবিল'
        },
        icon: ShieldCheck
      },
      {
        id: 'acc-assistance',
        label: {
          en: 'Dedicated mealtime care staff assistance',
          bn: 'খাবারের সময় যত্নশীল কর্মীদের সরাসরি সহায়তা'
        },
        icon: Users
      },
      {
        id: 'acc-water',
        label: {
          en: 'Pure filtered drinking water stations',
          bn: 'বিশুদ্ধ নিরাপদ ফিল্টারযুক্ত খাবার পানি'
        },
        icon: CheckCircle2
      }
    ],
    isVerified: true
  },
  {
    id: 'outdoor-gardens',
    title: {
      en: 'Outdoor Gathering & Green Garden Grounds',
      bn: 'উন্মুক্ত চত্বর ও সবুজ আঙিনা'
    },
    categoryTag: {
      en: 'Fresh Air & Nature',
      bn: 'নির্মল বাতাস ও প্রশান্তি'
    },
    description: {
      en: 'Lush green open campus grounds in Gazipur Sadar providing a peaceful natural escape. Older adults can step outside into mild morning sunshine, rest under shaded trees, and safely enjoy guided strolls along smooth pathways.',
      bn: 'গাজীপুর সদরে অবস্থিত সবুজ প্রাঙ্গণ প্রবীণদের কোলাহলমুক্ত শান্ত প্রকৃতির স্পর্শ এনে দেয়। সকালের মৃদু রোদে উন্মুক্ত বাতাস গ্রহণ, গাছগাছালির ছায়ায় বিশ্রাম এবং নিরাপদ হাঁটার পথ ধরে সান্ধ্যকালীন পদচারণার চমৎকার পরিবেশ।'
    },
    statusBadge: {
      en: 'Tranquil Campus Grounds',
      bn: 'প্রশান্ত প্রাকৃতিক প্রাঙ্গণ'
    },
    inquiryNote: {
      en: 'Open grounds are maintained with barrier-free ramp access directly connected to core facility entrances.',
      bn: 'মূল ভবনের সাথে সংযুক্ত মসৃণ র​্যাম্প ও বাধারহিত সমতল হাঁটার পথ।'
    },
    imageSrc: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000',
    imageAlt: {
      en: 'Peaceful green park and walking path with trees and fresh daylight',
      bn: 'গাছপালা ও উন্মুক্ত আলো-বাতাসময় সবুজ উদ্যান ও হাঁটার পথ'
    },
    photoDisclaimer: {
      en: 'Illustrative visual of green nature pathways planned for senior well-being.',
      bn: 'প্রবীণদের শারীরিক ও মানসিক সুস্থতায় সবুজ উদ্যানের প্রতীকী দৃশ্য।'
    },
    accessibilityFeatures: [
      {
        id: 'acc-ramp',
        label: {
          en: 'Barrier-free ramp connectivity to buildings',
          bn: 'ভবনে যাতায়াতে বাধারহিত র​্যাম্প সংযোগ'
        },
        icon: CheckCircle2
      },
      {
        id: 'acc-bench',
        label: {
          en: 'Shaded resting benches with back support',
          bn: 'ছায়াঘেরা আরামদায়ক পিঠ-ঠেস যুক্ত বেঞ্চ'
        },
        icon: Trees
      },
      {
        id: 'acc-sun',
        label: {
          en: 'Dedicated spaces for therapeutic morning sunlight',
          bn: 'সকালের স্নিগ্ধ রোদ উপভোগের খোলা চত্বর'
        },
        icon: Sun
      },
      {
        id: 'acc-boundary',
        label: {
          en: 'Safe, gated campus boundary perimeter',
          bn: 'নিরাপদ প্রাচীর ও সুরক্ষিত সীমানা'
        },
        icon: ShieldCheck
      }
    ],
    isVerified: true
  }
];

export const DEFAULT_LIVING_SPACES_HEADER = {
  eyebrow: {
    en: 'LIVING & COMMON ENVIRONMENTS',
    bn: 'আবাসন ও সামাজিক মিলনস্থল'
  } as BilingualText,
  heading: {
    en: 'Everyday Spaces, Thoughtfully Presented',
    bn: 'প্রাত্যহিক পরিসর, যত্নশীল রূপরেখা'
  } as BilingualText,
  subtitle: {
    en: 'A closer look at how daily spaces are arranged to support dignity, social connection, and senior accessibility at our Gazipur campus.',
    bn: 'গাজীপুর ক্যাম্পাসে প্রবীণদের আত্মমর্যাদা, পারস্পরিক মেলবন্ধন ও নির্বিঘ্ন চলাফেরা নিশ্চিত করতে আমাদের দৈনন্দিন পরিবেশ কীভাবে সাজানো হয়েছে তা জানুন।'
  } as BilingualText,
  transparencyNote: {
    en: 'Space Availability Note: All described spaces represent verified operational categories and design standards at Sonavan Old Rehabilitation Center. We do not make exaggerated claims about medical capacities or individual luxury. Specific room availability can be confirmed directly through our campus administration.',
    bn: 'পরিসর প্রাপ্যতা বিজ্ঞপ্তি: উল্লিখিত স্থানসমূহ আমাদের সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের অনুমোদিত পরিবেশগত রূপরেখা তুলে ধরে। আমরা কোনো অবাস্তব বা অতিরঞ্জিত সেবার দাবি করি না। নির্দিষ্ট কক্ষের প্রাপ্যতা নিশ্চিত হতে অনুগ্রহ করে সরাসরি প্রশাসনিক কার্যালয়ে যোগাযোগ করুন।'
  } as BilingualText
};
