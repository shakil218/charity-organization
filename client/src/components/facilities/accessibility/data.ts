import { Footprints, Users, ShieldCheck, Heart } from 'lucide-react';
import { AccessibilityCardItem } from './types';
import type { BilingualText } from '../hero/types';

/**
 * 4 Confirmed Accessibility, Safety & Comfort Cards.
 * Strictly adheres to truthfulness principles:
 * - Distinguishes general care principles from verified facility fixtures.
 * - Does not claim unverified wheelchair ramps, elevators, medical monitoring, or certifications.
 * - Explains transparent policies and directs visitors with specific needs to /contact.
 */
export const DEFAULT_ACCESSIBILITY_CARDS: AccessibilityCardItem[] = [
  {
    id: 'accessible-movement',
    title: {
      en: 'Accessible Movement',
      bn: 'সহজ ও নিরাপদ চলাফেরা'
    },
    badge: {
      en: 'Care Principle',
      bn: 'চলাচলের নীতিমালা'
    },
    description: {
      en: 'Prioritizing step-conscious layouts and keeping common walking passages free from clutter to assist seniors with everyday walking and natural mobility.',
      bn: 'প্রাত্যহিক চলাফেরায় স্বাচ্ছন্দ্য দিতে করিডোর ও হাঁটার পথগুলো বাধাহীন রাখা এবং প্রবীণদের ধীরস্থির পদচারণাকে সহানুভূতির সাথে সহায়তা করা।'
    },
    icon: Footprints,
    details: [
      {
        id: 'mv-1',
        text: {
          en: 'Unobstructed main walking passages',
          bn: 'বাধাহীন ও পরিচ্ছন্ন প্রধান যাতায়াত পথ'
        }
      },
      {
        id: 'mv-2',
        text: {
          en: 'Attentive companion assistance during walks',
          bn: 'হাঁটাচলার সময় সেবাকর্মীদের আন্তরিক সঙ্গ'
        }
      },
      {
        id: 'mv-3',
        text: {
          en: 'Unrushed, patient daily movement pace',
          bn: 'তাড়াহুড়োহীন স্বাভাবিক প্রাত্যহিক গতি'
        }
      }
    ],
    inquiryPrompt: {
      en: 'For specialized walking aids or custom mobility requirements, please verify during an intake inquiry.',
      bn: 'বিশেষ কোনো শারীরিক বা চলাচলের সহায়ক সরঞ্জামের প্রয়োজনে সরাসরি যোগাযোগ করে নিশ্চিত হন।'
    }
  },
  {
    id: 'comfortable-shared-spaces',
    title: {
      en: 'Comfortable Shared Spaces',
      bn: 'স্বাচ্ছন্দ্যময় সামাজিক পরিসর'
    },
    badge: {
      en: 'Living Environment',
      bn: 'আবাসিক পরিবেশ'
    },
    description: {
      en: 'Maintaining quiet, light-filled communal lounges with supportive seating where older adults can relax, read, and converse with peers in a calm atmosphere.',
      bn: 'আলো-বাতাসময় ও কোলাহলমুক্ত লাউঞ্জ যেখানে প্রবীণরা আরামদায়ক চেয়ারে বসে বিশ্রাম নিতে পারেন, বই ও পত্রিকা পড়তে পারেন এবং গল্পে মেতে উঠতে পারেন।'
    },
    icon: Users,
    details: [
      {
        id: 'sp-1',
        text: {
          en: 'Supportive seating with sturdy rests',
          bn: 'পিঠ ও হাতের সহায়ক আরামদায়ক আসন'
        }
      },
      {
        id: 'sp-2',
        text: {
          en: 'Cross-ventilated fresh air & daylight',
          bn: 'উন্মুক্ত আলো-বাতাসের স্বাভাবিক প্রবাহ'
        }
      },
      {
        id: 'sp-3',
        text: {
          en: 'Encouraging shared stories & companionship',
          bn: 'পারস্পরিক আড্ডা ও সামাজিক মেলবন্ধন'
        }
      }
    ],
    inquiryPrompt: {
      en: 'Common areas are structured to balance engaging social hours with quiet afternoon repose.',
      bn: 'সামাজিক মেলামেশা ও দুপুরের নিরিবিলি বিশ্রামের সমন্বয়ে সময়সূচি পরিচালিত হয়।'
    }
  },
  {
    id: 'environmental-safety',
    title: {
      en: 'Environmental Safety',
      bn: 'পরিবেশগত পরিচ্ছন্নতা ও সতর্কতা'
    },
    badge: {
      en: 'Physical Upkeep',
      bn: 'সতর্ক রক্ষণাবেক্ষণ'
    },
    description: {
      en: 'Focusing on consistent sanitation, clean drinking water, dry walking surfaces, and attentive caregiver presence to minimize daily physical hazards.',
      bn: 'নিয়মিত পরিচ্ছন্নতা, বিশুদ্ধ নিরাপদ খাবার পানি, শুকনো মেঝে এবং দায়িত্বশীল পরিচর্যাকারীদের উপস্থিতির মাধ্যমে প্রাত্যহিক ঝুঁকি হ্রাস করা।'
    },
    icon: ShieldCheck,
    details: [
      {
        id: 'sf-1',
        text: {
          en: 'Daily campus cleaning & floor sanitation',
          bn: 'নিয়মিত পরিষ্কার-পরিচ্ছন্নতা ও মেঝের যত্ন'
        }
      },
      {
        id: 'sf-2',
        text: {
          en: 'Caregivers on-site around the clock',
          bn: 'সার্বক্ষণিক দায়িত্বশীল সেবাকর্মীদের উপস্থিতি'
        }
      },
      {
        id: 'sf-3',
        text: {
          en: 'Safe filtered drinking water supply',
          bn: 'বিশুদ্ধ নিরাপদ ফিল্টারযুক্ত খাবার পানি'
        }
      }
    ],
    inquiryPrompt: {
      en: 'General safety practices minimize hazards; they do not represent clinical monitoring or formal safety certification.',
      bn: 'এই সতর্কতা সাধারণ ঝুঁকি কমাতে সহায়ক; এটি কোনো নিবিড় ক্লিনিক্যাল নজরদারি বা আনুষ্ঠানিক সনদপত্র নির্দেশ করে না।'
    }
  },
  {
    id: 'privacy-dignity',
    title: {
      en: 'Privacy and Personal Dignity',
      bn: 'ব্যক্তিগত গোপনীয়তা ও মানবিক মর্যাদা'
    },
    badge: {
      en: 'Core Ethos',
      bn: 'মৌলিক মূল্যবোধ'
    },
    description: {
      en: 'Upholding respectful interaction standards, honoring personal boundaries, and listening to each resident’s voice with empathy and patience.',
      bn: 'প্রতিটি প্রবীণের নিজস্ব সিদ্ধান্ত ও মর্যাদাকে সম্মান জানানো, ব্যক্তিগত সময়কে মূল্য দেওয়া এবং ধৈর্য সহকারে তাদের কথা শোনা।'
    },
    icon: Heart,
    details: [
      {
        id: 'dg-1',
        text: {
          en: 'Respect for personal quiet resting hours',
          bn: 'ব্যক্তিগত নিরিবিলি সময় ও বিশ্রামের সম্মান'
        }
      },
      {
        id: 'dg-2',
        text: {
          en: 'Patient, courteous communication standards',
          bn: 'ধৈর্যশীল ও বিনয়ী বাক্যালাপ'
        }
      },
      {
        id: 'dg-3',
        text: {
          en: 'Honoring personal autonomy and preferences',
          bn: 'ব্যক্তিগত পছন্দ-অপছন্দের প্রতি শ্রদ্ধা'
        }
      }
    ],
    inquiryPrompt: {
      en: 'Every senior is regarded with the high honor and compassion due to respected family elders.',
      bn: 'আমরা প্রতিটি প্রবীণ নাগরিককে পরিবারের জ্যেষ্ঠ সদস্যের মতো স্নেহ ও সর্বোচ্চ শ্রদ্ধার চোখে দেখি।'
    }
  }
];

export const DEFAULT_ACCESSIBILITY_HEADER = {
  eyebrow: {
    en: 'ENVIRONMENTAL CARE STANDARDS',
    bn: 'পরিবেশগত যত্ন ও নিরাপত্তা মানদণ্ড'
  } as BilingualText,
  heading: {
    en: 'Comfort, Accessibility and Respect Matter',
    bn: 'স্বাচ্ছন্দ্য, নিরাপত্তা ও মানবিক মর্যাদা'
  } as BilingualText,
  subtitle: {
    en: 'Understanding our confirmed environmental principles and how daily spaces are managed to support safety, companionship, and elder dignity.',
    bn: 'প্রবীণদের নিরাপত্তা, পারস্পরিক সান্নিধ্য ও আত্মমর্যাদা রক্ষায় আমাদের ঘোষিত আদর্শ এবং পরিবেশগত বাস্তব রূপরেখা সম্পর্কে জানুন।'
  } as BilingualText,
  contactPrompt: {
    title: {
      en: 'Have Specific Accessibility or Mobility Needs?',
      bn: 'সুনির্দিষ্ট এক্সেসিবিলিটি বা সেবা সংক্রান্ত প্রশ্ন আছে?'
    } as BilingualText,
    description: {
      en: 'Because every senior requires distinct levels of physical support, we encourage families to speak with our Gazipur administration directly to verify our current campus layout and confirm suitability for your loved one.',
      bn: 'প্রতিটি প্রবীণের চলাফেরা ও শারীরিক চাহিদা স্বতন্ত্র। আপনার প্রিয়জনের প্রয়োজনের সাথে আমাদের বর্তমান অবকাঠামো উপযুক্ত কিনা তা নিশ্চিত হতে আমাদের গাজীপুর কার্যালয়ে সরাসরি যোগাযোগ করার জন্য অনুরোধ জানানো হচ্ছে।'
    } as BilingualText,
    buttonText: {
      en: 'Ask About Specific Needs',
      bn: 'সুনির্দিষ্ট চাহিদা সম্পর্কে জানুন'
    } as BilingualText
  }
};
