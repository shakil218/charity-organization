import { HealthCoordinationItem } from './types';

/**
 * Default copy and bilingual content for Health and Wellbeing Coordination Section.
 * Strictly adheres to safety and non-clinical advisory boundaries:
 * - Does not claim the center operates a clinic or emergency facility
 * - Does not claim medical diagnosis, prescription management, nursing, or specialized treatment
 * - Clearly clarifies that coordination and general information never replace licensed medical advice
 */
export const DEFAULT_HEALTH_COORDINATION_DATA = {
  eyebrow: {
    en: 'HEALTH & WELLBEING COORDINATION',
    bn: 'স্বাস্থ্য ও কল্যাণ সমন্বয়'
  },
  heading: {
    en: 'Helping People Find Appropriate Support',
    bn: 'উপযুক্ত স্বাস্থ্য ও কল্যাণ সহায়তা প্রাপ্তির পথনির্দেশ'
  },
  description: {
    en: 'Access to suitable health information and qualified professionals can be an important part of older adults\' wellbeing.',
    bn: 'সঠিক স্বাস্থ্য তথ্য ও উপযুক্ত পেশাদারদের সেবা গ্রহণ প্রবীণদের সামগ্রিক কল্যাণ ও মানসিক সুস্থতার একটি অত্যন্ত গুরুত্বপূর্ণ অংশ।'
  },
  secondaryParagraph: {
    en: 'Navigating healthcare resources can be complex. While we do not operate a clinic or provide medical treatments ourselves, we help seniors and their families locate verified community resources, understand healthy living practices, and reach accredited practitioners.',
    bn: 'প্রবীণ বয়সে স্বাস্থ্যসেবার সঠিক পথ খুঁজে নেওয়া অনেক সময় পরিবার ও প্রবীণদের জন্য কষ্টসাধ্য হতে পারে। আমরা কোনো হাসপাতাল বা ক্লিনিক্যাল চিকিৎসা প্রদান না করলেও, উপযুক্ত প্রাতিষ্ঠানিক সুযোগ-সুবিধা খুঁজে পেতে এবং সরকারি-বেসরকারি পেশাদার স্বাস্থ্যসেবার সাথে যুক্ত হতে সার্বিক দিকনির্দেশনামূলক সহযোগিতা প্রদান করি।'
  },
  informationAreas: [
    {
      id: 'wellbeing-resources',
      title: {
        en: 'General Wellbeing Resources',
        bn: 'সাধারণ স্বাস্থ্য ও কল্যাণ বিষয়ক তথ্য'
      },
      description: {
        en: 'Clear, accessible educational materials covering healthy aging habits, gentle daily mobility, balanced nutrition, and preventive wellness awareness.',
        bn: 'সুস্থ বার্ধক্য, হালকা শরীরচর্চা, বয়সোচিত পুষ্টি ও প্রাথমিক স্বাস্থ্য সচেতনতা সংক্রান্ত তথ্যবহুল ও বোধগম্য দিকনির্দেশনা।'
      },
      iconName: 'FileText'
    },
    {
      id: 'qualified-referrals',
      title: {
        en: 'Referrals to Qualified Healthcare Providers, If Offered',
        bn: 'যোগ্য স্বাস্থ্যসেবা প্রদানকারীদের রেফারেল (উপলব্ধতা সাপেক্ষে)'
      },
      description: {
        en: 'Facilitating contact with external licensed physicians, specialized geriatric clinics, and public healthcare facilities when specialized attention is needed.',
        bn: 'প্রয়োজনীয় চিকিৎসা সেবার জন্য পরিবার ও প্রবীণদের সনদপ্রাপ্ত চিকিৎসক, বিশেষায়িত হাসপাতাল ও সরকারি স্বাস্থ্যকেন্দ্রের সাথে যোগাযোগের তথ্য ও সংযোগ সহায়তা।'
      },
      iconName: 'Stethoscope'
    },
    {
      id: 'family-service-coordination',
      title: {
        en: 'Coordination with Families & Relevant Services, If Available',
        bn: 'পরিবার ও সংশ্লিষ্ট সেবা সংস্থার সাথে সমন্বয়'
      },
      description: {
        en: 'Assisting family caregivers in organizing health-related documentation, understanding care recommendations, and liaising with external support agencies.',
        bn: 'পরিবারের সদস্যদের সাথে নিয়মিত মতবিনিময়, স্বাস্থ্য বিষয়ক নথিপত্র গুছিয়ে রাখা এবং সামাজিক কল্যাণমূলক বিভিন্ন সংস্থার সেবার সাথে কার্যকর সমন্বয় সাধনে সহায়তা।'
      },
      iconName: 'Users'
    },
    {
      id: 'professional-contact-guidance',
      title: {
        en: 'Guidance About Contacting Appropriate Health Professionals',
        bn: 'সঠিক চিকিৎসকদের সাথে যোগাযোগের দিকনির্দেশনা'
      },
      description: {
        en: 'Practical guidance on preparing questions for medical appointments, identifying suitable clinical specialties, and knowing when to seek professional medical advice.',
        bn: 'চিকিৎসকের সাথে পরামর্শের প্রস্তুতি, সঠিক বিশেষজ্ঞ বিভাগ নির্বাচন এবং জরুরি প্রয়োজনে করণীয় পদক্ষেপ ও স্বাস্থ্যকেন্দ্রে যোগাযোগের নিয়মাবলী সংক্রান্ত সহায়তা।'
      },
      iconName: 'PhoneCall'
    }
  ] as HealthCoordinationItem[],
  ctaText: {
    en: 'Contact Us for Guidance',
    bn: 'প্রয়োজনীয় তথ্যের জন্য যোগাযোগ করুন'
  },
  ctaHref: '/contact',
  imageSrc: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000',
  imageAlt: {
    en: 'A compassionate healthcare consultation session demonstrating dignified communication and attentive listening with an older adult',
    bn: 'একজন প্রবীণ ব্যক্তির সাথে স্বাস্থ্য পরামর্শকের আন্তরিক, শ্রদ্ধাপূর্ণ ও সহমর্মিতাপূর্ণ কথোপকথনের দৃশ্য'
  },
  imageBadge: {
    en: 'Verified Guidance • External Care',
    bn: 'নির্ভরযোগ্য পথনির্দেশ • বহিঃস্থ সেবা'
  },
  disclaimerNotice: {
    en: 'Sonavan Old Rehabilitation Center does not operate a medical clinic or emergency facility. We do not provide clinical diagnoses, medical treatments, prescription medication management, nursing, or emergency response services unless officially verified under confirmed institutional programs. Information provided here is educational and advisory; it never replaces professional medical evaluation or treatment from licensed healthcare professionals.',
    bn: 'সোনাভান ওল্ড রিহ্যাবিলিটেশন সেন্টার কোনো ক্লিনিক বা জরুরি স্বাস্থ্য কেন্দ্র পরিচালনা করে না। প্রাতিষ্ঠানিকভাবে চূড়ান্ত যাচাইকৃত ও অনুমোদিত কর্মসূচি ব্যতীত আমরা কোনো ক্লিনিক্যাল রোগ নির্ণয়, বিশেষায়িত চিকিৎসা, প্রেসক্রিপশনের ওষুধ ব্যবস্থাপনা, সার্বক্ষণিক নার্সিং বা জরুরি চিকিৎসাসেবা প্রদান করি না। এখানে উপস্থাপিত তথ্য সম্পূর্ণ শিক্ষামূলক ও দিকনির্দেশনামূলক; এটি কোনোভাবেই সনদপ্রাপ্ত বিশেষজ্ঞ চিকিৎসকের পেশাদার মূল্যায়নের বিকল্প নয়।'
  }
};
