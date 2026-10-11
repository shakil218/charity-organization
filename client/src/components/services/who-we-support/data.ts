import { SupportedGroupItem } from './types';

/**
 * Default copy and bilingual content for "Who We Support" section.
 * Strictly adheres to non-presumptive boundaries:
 * - Does not publish unverified age thresholds, admission criteria, disability eligibility,
 *   residency rules, or financial eligibility limits
 * - Explains general audiences with inclusive, compassionate language
 * - Directs specific eligibility inquiries to direct contact
 */
export const DEFAULT_WHO_WE_SUPPORT_DATA = {
  eyebrow: {
    en: 'WHO WE SUPPORT',
    bn: 'যাদের পাশে আমরা আছি'
  },
  heading: {
    en: 'Understanding Different Support Needs',
    bn: 'বিভিন্ন সহায়তার প্রয়োজনীয়তা উপলব্ধি'
  },
  description: {
    en: 'Every person’s journey and circumstances are unique. We approach each inquiry with empathy and open hearts, addressing the diverse needs of older adults, their families, and caring community members.',
    bn: 'প্রত্যেক মানুষের জীবনের পথচলা ও পারিপার্শ্বিক পরিস্থিতি অনন্য। আমরা সহমর্মিতার সাথে প্রবীণদের কথা শুনি এবং বিভিন্ন পর্যায়ে প্রবীণ ব্যক্তি, পরিবার ও সমাজের দায়িত্বশীল মানুষদের সহায়তায় সচেষ্ট থাকি।'
  },
  groups: [
    {
      id: 'group-community-connection',
      title: {
        en: 'Older Adults Seeking Community Connection',
        bn: 'সামাজিক সাহচর্য ও সান্নিধ্যপ্রত্যাশী প্রবীণ'
      },
      audienceFocus: {
        en: 'Seniors seeking friendly social presence and companionship',
        bn: 'একাকীত্ব দূর করে সামাজিক বন্ধন ও সান্নিধ্যপ্রত্যাশী প্রবীণ'
      },
      description: {
        en: 'Individuals who value patient conversation, intergenerational presence, and a sense of shared belonging to reduce isolation and nurture everyday emotional warmth.',
        bn: 'যেসব প্রবীণ মানুষ একাকীত্ব দূর করে নতুন আন্তরিক কথোপকথন, মানসিক সান্নিধ্য এবং সমাজের সাথে গভীর ও উষ্ণ সম্পর্ক বজায় রাখতে চান।'
      },
      imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'Smiling older adults sharing a warm, cheerful conversation together in a welcoming setting',
        bn: 'একটি আনন্দঘন পরিবেশে প্রবীণদের আন্তরিক আলাপচারিতা ও সান্নিধ্যের মুহূর্ত'
      },
      iconName: 'Users',
      badge: {
        en: 'Social Connection',
        bn: 'সামাজিক সান্নিধ্য'
      }
    },
    {
      id: 'group-families-caregivers',
      title: {
        en: 'Families and Caregivers Looking for Information',
        bn: 'তথ্য ও পরামর্শপ্রত্যাশী পরিবার ও পরিচর্যাকারী'
      },
      audienceFocus: {
        en: 'Family members and relatives supporting aging loved ones',
        bn: 'প্রবীণ প্রিয়জনদের ঘরোয়া যত্নে নিয়োজিত পরিবারবর্গ'
      },
      description: {
        en: 'Sons, daughters, and dedicated family caregivers seeking dependable eldercare resources, advice on home accessibility, and guidance on navigating support networks.',
        bn: 'সন্তান, আত্মীয়স্বজন ও পারিবারিক পরিচর্যাকারী যারা তাদের বয়োবৃদ্ধ প্রিয়জনদের জন্য নির্ভরযোগ্য তথ্য, বাসাবাড়ির নিরাপত্তা ও সেবা সহায়তা খুঁজছেন।'
      },
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'A caring family discussion demonstrating thoughtful listening and shared care planning with an older adult',
        bn: 'প্রবীণ সদস্যের সাথে পারিবারিক দায়িত্বশীল আলোচনা ও সহমর্মিতাপূর্ণ মুহূর্ত'
      },
      iconName: 'HeartHandshake',
      badge: {
        en: 'Family Guidance',
        bn: 'পারিবারিক পরামর্শ'
      }
    },
    {
      id: 'group-exploring-support',
      title: {
        en: 'Older Adults Exploring Available Support',
        bn: 'উপলব্ধ সহায়তা অন্বেষণকারী প্রবীণ'
      },
      audienceFocus: {
        en: 'Seniors seeking practical daily aid and independence',
        bn: 'দৈনন্দিন স্বস্তি ও আত্মমর্যাদা বজায় রাখতে ইচ্ছুক প্রবীণ'
      },
      description: {
        en: 'Older adults who wish to learn about practical daily living assistance, external health resources, and options that uphold individual choice and personal dignity.',
        bn: 'যেসব প্রবীণ ব্যক্তি তাদের নিজস্ব স্বাধীনতা ও স্বস্তি বজায় রাখতে সংস্থার অনুমোদিত সহায়তা, স্বাস্থ্য সমন্বয় বা সামাজিক সুযোগ-সুবিধা সম্পর্কে জানতে চান।'
      },
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'An older adult resting peacefully in comfortable surroundings, reflecting dignity and everyday ease',
        bn: 'একটি নিরাপদ ও আরামদায়ক পরিবেশে প্রবীণ ব্যক্তির নিজস্ব প্রশান্তি ও মর্যাদাপূর্ণ দৃশ্য'
      },
      iconName: 'Compass',
      badge: {
        en: 'Personal Autonomy',
        bn: 'ব্যক্তি স্বাধীনতা'
      }
    },
    {
      id: 'group-community-helpers',
      title: {
        en: 'Community Members Interested in Helping',
        bn: 'সহযোগিতা ও পাশে দাঁড়াতে আগ্রহী নাগরিকবৃন্দ'
      },
      audienceFocus: {
        en: 'Volunteers, civic partners, and compassionate supporters',
        bn: 'স্বেচ্ছাসেবক, শুভাকাঙ্ক্ষী ও মানবিক কার্যক্রমে আগ্রহী ব্যক্তি'
      },
      description: {
        en: 'Volunteers and civic partners looking to dedicate time, offer skills, participate in community initiatives, or support elderly welfare with genuine compassion.',
        bn: 'স্বেচ্ছাসেবক ও সমাজের সচেতন নাগরিক যারা প্রবীণদের সাথে সময় কাটাতে, দক্ষতা শেয়ার করতে কিংবা মানবিক সেবা কার্যক্রমে অংশ নিতে চান।'
      },
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=700',
      imageAlt: {
        en: 'A compassionate volunteer warmly engaging with community seniors in solidarity and mutual respect',
        bn: 'প্রবীণদের সাথে আন্তরিকভাবে সংযুক্ত স্বেচ্ছাসেবকের সৌহার্দ্যপূর্ণ মুহূর্ত'
      },
      iconName: 'HandHeart',
      badge: {
        en: 'Civic Engagement',
        bn: 'নাগরিক সম্পৃক্ততা'
      }
    }
  ] as SupportedGroupItem[],
  ctaText: {
    en: 'Contact Us About Support',
    bn: 'সহায়তা সম্পর্কে যোগাযোগ করুন'
  },
  ctaHref: '/contact',
  eligibilityNote: {
    en: 'For information about eligibility and available programs, please contact the organization directly.',
    bn: 'যোগ্যতার মানদণ্ড ও অনুমোদিত কর্মসূচি সম্পর্কিত সুনির্দিষ্ট তথ্যের জন্য অনুগ্রহ করে সরাসরি সংস্থার সাথে যোগাযোগ করুন।'
  }
};
