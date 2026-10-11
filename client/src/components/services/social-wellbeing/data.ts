import { SocialWellbeingCardItem } from './types';

/**
 * Default copy and bilingual content for Social and Emotional Wellbeing Section.
 * Strictly adheres to non-presumptive language:
 * - Does not claim clinical therapy, psychiatric treatment, or unverified structured counseling
 * - Emphasizes genuine human companionship, respectful listening, and peer belonging
 */
export const DEFAULT_SOCIAL_WELLBEING_DATA = {
  eyebrow: {
    en: 'SOCIAL & EMOTIONAL WELLBEING',
    bn: 'সামাজিক ও মানসিক সুস্থতা'
  },
  heading: {
    en: 'Connection, Companionship and Belonging',
    bn: 'আন্তরিক যোগাযোগ, সাহচর্য এবং আপন অনুভূতি'
  },
  description: {
    en: 'Positive social connections can help older adults feel included, valued, and connected with the people around them.',
    bn: 'ইতিবাচক সামাজিক সম্পর্ক প্রবীণদের একাকীত্ব দূর করে, তাদের সম্মানিত ও আপনজনদের সাথে গভীরভাবে সংযুক্ত অনুভব করতে সাহায্য করে।'
  },
  secondaryParagraph: {
    en: 'We strive to cultivate a welcoming environment where listening comes first, smiles are shared freely, and every individual feels respected within a compassionate community.',
    bn: 'আমরা এমন এক মমতাময় পরিবেশ গড়ে তোলার চেষ্টা করি যেখানে আন্তরিক মনোযোগ থাকে সবার আগে, হাসি ও আনন্দ ভাগাভাগি হয় এবং প্রত্যেকে নিজেকে পরম শ্রদ্ধায় নিরাপদ ভাবেন।'
  },
  cards: [
    {
      id: 'friendly-conversation',
      title: {
        en: 'Friendly Conversation',
        bn: 'আন্তরিক আলাপচারিতা'
      },
      description: {
        en: 'Thoughtful, unhurried conversations that honor lived experiences and create emotional warmth through patient, attentive listening.',
        bn: 'ধৈর্যশীল ও সহানুভূতিশীল আলাপচারিতা, যা প্রবীণদের জীবনের গল্প শোনা ও আন্তরিক সান্নিধ্যের মাধ্যমে মানসিক স্বস্তি এনে দেয়।'
      },
      iconName: 'MessageCircleHeart',
      badge: {
        en: 'Informal Peer Support',
        bn: 'অনানুষ্ঠানিক সাহচর্য'
      },
      programLink: {
        href: '/contact',
        label: {
          en: 'Inquire About Daily Companionship',
          bn: 'আলাপচারিতা সম্পর্কে জানুন'
        },
        isConfirmed: false
      }
    },
    {
      id: 'community-participation',
      title: {
        en: 'Community Participation',
        bn: 'সামাজিক মেলবন্ধন ও অংশগ্রহণ'
      },
      description: {
        en: 'Welcoming opportunities to join group discussions, share memories, and interact with visiting community members and volunteers.',
        bn: 'উন্মুক্ত আড্ডা, স্মৃতিচারণ এবং সহৃদয় দর্শনার্থী ও স্বেচ্ছাসেবীদের সাথে মেলামেশার মাধ্যমে সামাজিক সম্প্রীতি বৃদ্ধির সুযোগ।'
      },
      iconName: 'Users',
      badge: {
        en: 'Community Gatherings',
        bn: 'সামাজিক সমাবেশ'
      },
      programLink: {
        href: '/contact',
        label: {
          en: 'Ask About Community Gatherings',
          bn: 'সামাজিক উদ্যোগ সম্পর্কে জানুন'
        },
        isConfirmed: false
      }
    },
    {
      id: 'recreational-activities',
      title: {
        en: 'Recreational Activities',
        bn: 'আনন্দদায়ক অবসর বিনোদন'
      },
      description: {
        en: 'Light, enjoyable daily pastimes such as listening to music, reading Bengali literature, gardening, and peaceful outdoor walks.',
        bn: 'গান শোনা, বই পড়া, বাগান পরিচর্যা ও শান্ত প্রাঙ্গণে হাঁটার মতো সহজ ও প্রশান্তিদায়ক অবসরে অংশ নেওয়ার সুযোগ।'
      },
      iconName: 'Sparkles',
      badge: {
        en: 'Gentle Leisure Hobbies',
        bn: 'শান্তিদায়ক অবসর'
      },
      programLink: {
        href: '/facilities',
        label: {
          en: 'Explore Recreational Spaces',
          bn: 'অবসর প্রাঙ্গণ দেখুন'
        },
        isConfirmed: true
      }
    },
    {
      id: 'family-connections',
      title: {
        en: 'Family and Community Connections',
        bn: 'পারিবারিক ও সামাজিক যোগাযোগ'
      },
      description: {
        en: 'Encouraging regular visits from loved ones and maintaining neighborhood ties to keep lifelong bonds of kinship strong and active.',
        bn: 'পরিবারের স্বজনদের নিয়মিত সাক্ষাৎ ও যোগাযোগ রক্ষায় উৎসাহ দেওয়া, যাতে আত্মীয়তার নিবিড় বন্ধন অটুট থাকে।'
      },
      iconName: 'HeartHandshake',
      badge: {
        en: 'Family Visits & Kinship',
        bn: 'পারিবারিক সান্নিধ্য'
      },
      programLink: {
        href: '/contact',
        label: {
          en: 'Learn About Visiting Guidelines',
          bn: 'সাক্ষাতের নিয়মাবলী জানুন'
        },
        isConfirmed: false
      }
    }
  ] as SocialWellbeingCardItem[],
  ctaText: {
    en: 'Ask About Social Wellbeing Support',
    bn: 'সামাজিক সহায়তা সম্পর্কে জানুন'
  },
  ctaHref: '/contact',
  disclaimerNotice: {
    en: 'Scope & Wellbeing Notice: Sonavan Old Rehabilitation Center does not provide clinical psychological therapy, mental health treatment, or specialized counseling without qualified licensed mental health professionals. Social connections described here represent informal companionship and community care principles, subject to official confirmation.',
    bn: 'দাপ্তরিক তথ্য ও সতর্কতা: সনদপ্রাপ্ত মানসিক স্বাস্থ্য বিশেষজ্ঞ ব্যতীত সোনাভান ওল্ড রিহ্যাবিলিটেশন সেন্টার কোনো ক্লিনিক্যাল সাইকোলজিক্যাল কাউন্সেলিং বা চিকিৎসা প্রদান করে না। এখানে বর্ণিত বিষয়াদি পারস্পরিক মানবিক সংযোগ ও অনানুষ্ঠানিক সাহচর্যের সাধারণ ধারণা।'
  }
};
