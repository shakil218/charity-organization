import { CarePrincipleItem } from './types';

/**
 * Default copy and bilingual content for "Our Care Principles" section.
 * 
 * Strict Ethical Boundaries:
 * - Recommended principles for respectful support only.
 * - Not certified policies or statutory practices unless approved by the organization.
 * - Does not invent safeguarding certifications, clinical standards, privacy guarantees, or formal policy commitments.
 * - Links to actual organizational policies only when published.
 */
export const DEFAULT_CARE_PRINCIPLES_DATA = {
  eyebrow: {
    en: 'OUR GUIDING VALUES',
    bn: 'আমাদের দিকনির্দেশনামূলক মূল্যবোধ'
  },
  heading: {
    en: 'Principles Behind Respectful Support',
    bn: 'শ্রদ্ধাশীল সহায়তার পেছনের মূলনীতি'
  },
  description: {
    en: 'These recommended principles guide our mindset and approach toward respectful support, fostering an environment where every older adult is valued, heard, and treated with compassion.',
    bn: 'এই প্রস্তাবিত মূলনীতিসমূহ প্রবীণদের প্রতি আমাদের শ্রদ্ধাশীল আচরণ ও সহমর্মিতার ভিত্তি, যা প্রতিটি বয়োজ্যেষ্ঠ মানুষের মর্যাদা, ব্যক্তিস্বাধীনতা এবং সম্মান অক্ষুণ্ণ রাখতে দিকনির্দেশনা প্রদান করে।'
  },
  principles: [
    {
      id: 'principle-dignity-respect',
      principleNumber: '01',
      title: {
        en: 'Dignity and Respect',
        bn: 'মর্যাদা ও শ্রদ্ধা'
      },
      description: {
        en: 'Treating every older adult with inherent worth and deep reverence, listening attentively, honoring their lived experiences, and upholding personal self-esteem in every interaction.',
        bn: 'প্রত্যেক প্রবীণ ব্যক্তিকে তাদের সহজাত সম্মান ও শ্রদ্ধার সাথে মূল্যায়ন করা, গভীর সহমর্মিতায় কথা শোনা, তাদের অতীত অভিজ্ঞতাকে সম্মান জানানো এবং আত্মমর্যাদা রক্ষা করা।'
      },
      iconName: 'HeartHandshake',
      tag: {
        en: 'Core Ethos',
        bn: 'মূল চালিকাশক্তি'
      }
    },
    {
      id: 'principle-privacy-confidentiality',
      principleNumber: '02',
      title: {
        en: 'Privacy and Confidentiality',
        bn: 'ব্যক্তিগত গোপনীয়তা ও শালীনতা'
      },
      description: {
        en: 'Respecting personal boundaries and living spaces, handling personal circumstances and conversations discreetly, and honoring preferences for quiet personal time.',
        bn: 'ব্যক্তিগত সীমানা এবং বাসস্থানের শালীনতা বজায় রাখা, যেকোনো ব্যক্তিগত বিষয়াদি ও আলোচনা সতর্কতার সাথে গোপন রাখা এবং একান্ত সময়ের চাহিদাকে সম্মান করা।'
      },
      iconName: 'Shield',
      tag: {
        en: 'Discretion',
        bn: 'শালীনতা ও গোপনীয়তা'
      }
    },
    {
      id: 'principle-individual-choice',
      principleNumber: '03',
      title: {
        en: 'Individual Choice',
        bn: 'ব্যক্তিগত পছন্দ ও স্বাধীনতা'
      },
      description: {
        en: 'Supporting personal autonomy in daily routines, honoring personal decisions wherever practical, and avoiding assumptions about an individual’s wishes.',
        bn: 'দৈনন্দিন রুটিন ও পছন্দের ক্ষেত্রে প্রবীণদের নিজস্ব সিদ্ধান্ত ও স্বাধীনতাকে অগ্রাধিকার দেওয়া এবং কোনো পছন্দ জোর করে চাপিয়ে না দিয়ে তাদের মতামতকে মর্যাদা দেওয়া।'
      },
      iconName: 'Compass',
      tag: {
        en: 'Autonomy',
        bn: 'স্বাতন্ত্র্য ও স্বাধীনতা'
      }
    },
    {
      id: 'principle-inclusion-accessibility',
      principleNumber: '04',
      title: {
        en: 'Inclusion and Accessibility',
        bn: 'অন্তর্ভুক্তি ও সহজগম্যতা'
      },
      description: {
        en: 'Welcoming older adults of diverse backgrounds, creating an environment that minimizes physical and social barriers, and ensuring everyone feels safe and valued.',
        bn: 'সকল পটভূমির বয়োজ্যেষ্ঠ মানুষদের সমাদরে গ্রহণ করা, শারীরিক ও সামাজিক প্রতিবন্ধকতা দূর করার সচেষ্ট প্রয়াস রাখা এবং একটি আপন ও নিরাপদ পরিবেশ নিশ্চিত করা।'
      },
      iconName: 'Sparkles',
      tag: {
        en: 'Belonging',
        bn: 'সমতা ও আপনত্ব'
      }
    },
    {
      id: 'principle-responsible-communication',
      principleNumber: '05',
      title: {
        en: 'Responsible Communication',
        bn: 'দায়িত্বশীল ও সহমর্মী যোগাযোগ'
      },
      description: {
        en: 'Communicating with clarity, patience, and kindness; listening without condescension; and maintaining honest, considerate dialogue with families and caregivers.',
        bn: 'ধৈর্য ও স্পষ্টতার সাথে কথা বলা, কখনোই কাউকে হেয় না করে মনোযোগ দিয়ে অনুভূতি বোঝা এবং পরিবার ও শুভাকাঙ্ক্ষীদের সাথে দায়িত্বশীল ও খোলামেলা যোগাযোগ বজায় রাখা।'
      },
      iconName: 'MessageSquareHeart',
      tag: {
        en: 'Empathy',
        bn: 'সহমর্মিতা'
      }
    }
  ] as CarePrincipleItem[],
  noticeTitle: {
    en: 'Recommended Principles, Not Certified Policies',
    bn: 'প্রস্তাবিত মানবিক মূলনীতিমালা (নীতিমালা সংক্রান্ত স্পষ্টীকরণ)'
  },
  noticeText: {
    en: 'The principles outlined above represent recommended values for respectful, compassionate support and our guiding ethos. They do not constitute formal safeguarding certifications, clinical standards, privacy guarantees, or official statutory commitments unless approved and formally ratified by the organization.',
    bn: 'উপরে বর্ণিত মূলনীতিসমূহ প্রবীণদের প্রতি শ্রদ্ধাশীল আচরণ ও সহায়তার জন্য আমাদের প্রস্তাবিত মানবিক মূল্যবোধ নির্দেশ করে। এগুলো কোনো আনুষ্ঠানিক সেফগার্ড সনদ, ক্লিনিক্যাল স্ট্যান্ডার্ড, আইনি গোপনীয়তার নিশ্চয়তা বা সরকারি অঙ্গীকার নয়, যে পর্যন্ত না সংস্থা কর্তৃক আনুষ্ঠানিকভাবে অনুমোদিত ও কার্যকর হয়।'
  },
  policyNote: {
    en: 'Official organizational policies and governance documents will be linked here when formally reviewed and published.',
    bn: 'সংস্থার প্রাতিষ্ঠানিক আনুষ্ঠানিক নীতিমালা ও প্রশাসনিক নথি পর্যালোচনা ও অনুমোদনের পর এখানে সংযুক্ত করা হবে।'
  }
};
