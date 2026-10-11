import { RehabilitationFeatureItem } from './types';

/**
 * Default copy and bilingual content for Rehabilitation Assistance Section.
 * Strictly adheres to ethical transparency:
 * - Does not claim unverified clinical therapy, specialized equipment, or medical staff
 * - Respects senior agency, abilities, and individual preferences
 */
export const DEFAULT_REHABILITATION_DATA = {
  eyebrow: {
    en: 'REHABILITATION ASSISTANCE',
    bn: 'পুনর্বাসন সহায়তা ও সক্রিয় জীবন'
  },
  heading: {
    en: 'Supporting Independence and Everyday Participation',
    bn: 'স্বনির্ভরতা ও দৈনন্দিন অংশগ্রহণে সহায়তা'
  },
  description: {
    en: 'Appropriate rehabilitation support can help people work toward practical daily living goals and participate more comfortably in everyday life.',
    bn: 'উপযুক্ত পুনর্বাসন সহায়তা মানুষকে বাস্তবসম্মত দৈনন্দিন জীবনের লক্ষ্য অর্জনে এবং প্রতিদিনের স্বাভাবিক কাজকর্মে স্বাচ্ছন্দ্যের সাথে অংশ নিতে সাহায্য করতে পারে।'
  },
  secondaryParagraph: {
    en: 'We emphasize practical encouragement, accessible information, and structured routines designed to uphold personal dignity and autonomy at every stage.',
    bn: 'আমরা ব্যক্তিগত মর্যাদা ও আত্মনিয়ন্ত্রণ অক্ষুণ্ণ রেখে বাস্তবসম্মত উৎসাহ, সহজলভ্য তথ্য এবং সুশৃঙ্খল রুটিন গড়ে তুলতে বিশ্বাস করি।'
  },
  features: [
    {
      id: 'rehab-info',
      title: {
        en: 'Information About Rehabilitation Support',
        bn: 'পুনর্বাসন সহায়তা সংক্রান্ত তথ্য'
      },
      description: {
        en: 'Clear educational guidance on restorative routines and gentle exercises that encourage active aging and self-reliance.',
        bn: 'সক্রিয় জীবনযাপন ও আত্মনির্ভরশীলতাকে উৎসাহিত করতে সহায়ক অভ্যাস ও নিয়মিত অনুশীলনের সুস্পষ্ট তথ্য ও দিকনির্দেশনা।'
      },
      iconName: 'Compass'
    },
    {
      id: 'daily-routines',
      title: {
        en: 'Assistance with Daily Routines, Where Offered',
        bn: 'দৈনন্দিন অভ্যাসে সহায়তা (অনুমোদন সাপেক্ষে)'
      },
      description: {
        en: 'Thoughtful assistance with everyday living tasks, tailored to individual comfort, energy levels, and personal choices.',
        bn: 'ব্যক্তির সুবিধা ও শারীরিক সক্ষমতার সাথে সামঞ্জস্য রেখে প্রাত্যহিক স্বাভাবিক কাজকর্মে আন্তরিক সহায়তা ও পরিমিত সঙ্গ প্রদান।'
      },
      iconName: 'Activity'
    },
    {
      id: 'coordination-professionals',
      title: {
        en: 'Coordination with Qualified Professionals, If Available',
        bn: 'যোগ্য পেশাদারদের সাথে সমন্বয় (উপলব্ধতা সাপেক্ষে)'
      },
      description: {
        en: 'Facilitating scheduling and liaison with certified external healthcare practitioners when specialized clinical advice is required.',
        bn: 'বিশেষজ্ঞ চিকিৎসার প্রয়োজনে সনদপ্রাপ্ত বাহ্যিক স্বাস্থ্য পেশাদার বা চিকিৎসকদের সাথে যোগাযোগ ও সমন্বয়ে সার্বিক সহায়তা।'
      },
      iconName: 'UserCheck'
    },
    {
      id: 'external-resources',
      title: {
        en: 'Guidance About Appropriate External Resources',
        bn: 'উপযুক্ত বহিরাগত রিসোর্সের নির্দেশনা'
      },
      description: {
        en: 'Connecting seniors and families with authorized community health clinics, assistive support aids, and civic welfare initiatives.',
        bn: 'পরিবার ও প্রবীণদের নির্ভরযোগ্য কমিউনিটি স্বাস্থ্যকেন্দ্র, সহায়ক মাধ্যম এবং সরকারি সমাজকল্যাণ কর্মসূচির সাথে যুক্ত করা।'
      },
      iconName: 'ExternalLink'
    }
  ] as RehabilitationFeatureItem[],
  ctaText: {
    en: 'Ask About Available Support',
    bn: 'সহায়তা সম্পর্কে জিজ্ঞাসা করুন'
  },
  ctaHref: '/contact',
  imageSrc: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000',
  imageAlt: {
    en: 'An older adult participating in active daily movement with gentle encouragement and support',
    bn: 'মমতাময় সহায়তায় প্রবীণ ব্যক্তির স্বাভাবিক দৈনন্দিন চলাচল ও সক্রিয় জীবনযাপনের দৃশ্য'
  },
  imageBadge: {
    en: 'Active Independence • Everyday Dignity',
    bn: 'দৈনন্দিন স্বনির্ভরতা • সক্রিয় মর্যাদা'
  },
  disclaimerNotice: {
    en: 'Scope & Verification Notice: Sonavan Old Rehabilitation Center does not provide clinical physiotherapy, occupational therapy, or medical treatment without qualified licensed medical staff. Information provided here is educational and exploratory, subject to official confirmation.',
    bn: 'দাপ্তরিক তথ্য ও সীমাবদ্ধতা: যথাযথ সনদপ্রাপ্ত চিকিৎসক বা থেরাপিস্ট ব্যতীত সোনাভান ওল্ড রিহ্যাবিলিটেশন সেন্টার কোনো ক্লিনিক্যাল ফিজিওথেরাপি বা বিশেষায়িত চিকিৎসার নিশ্চয়তা দেয় না। এখানে বর্ণিত বিষয়াদি সাধারণ তথ্য ও দিকনির্দেশনামূলক।'
  }
};
