import { PracticalInfoItem } from './types';

/**
 * Default copy and data structures for Practical Information section.
 * 
 * Strict compliance with safety guidelines:
 * - General information is clearly segregated from official requirements.
 * - Where details are subject to case-by-case review or unconfirmed (fees, admission eligibility, waiting periods),
 *   it explicitly states: "Please contact the organization for current information".
 * - Verified visiting hours: Fri & Sat, 10:00 AM – 4:00 PM (prior confirmation encouraged).
 * - Verified contact: Sonavan Tech, Gazipur Sadar, Gazipur-1700; Phone: +880 1700-000000; Email: info@sorc-bd.org.
 * - No invented prices, deadlines, or clinical admission tests.
 */
export const DEFAULT_PRACTICAL_INFO_DATA = {
  eyebrow: {
    en: 'SERVICE AVAILABILITY & VERIFIED DETAILS',
    bn: 'সেবা প্রাপ্যতা ও যাচাইকৃত বিবরণ'
  },
  heading: {
    en: 'Practical Information',
    bn: 'বাস্তবধর্মী ও প্রাতিষ্ঠানিক তথ্য'
  },
  description: {
    en: 'An organized reference of verified details, visiting arrangements, and general inquiry guidance. Official admission and financial determinations are handled on an individualized basis.',
    bn: 'আমাদের নিশ্চিত সেবাসমূহ, প্রবীণ নিবাস পরিদর্শন সময়সূচি এবং তথ্য অনুসন্ধান নির্দেশিকার একটি সুসংহত বিবরণ। প্রাতিষ্ঠানিক ভর্তি ও সহায়তা সংক্রান্ত সিদ্ধান্ত সরাসরি যোগাযোগ সাপেক্ষে নির্ধারিত হয়।'
  },
  filterAllLabel: {
    en: 'All Details',
    bn: 'সকল তথ্যাবলী'
  },
  filterGeneralLabel: {
    en: 'General Information',
    bn: 'সাধারণ তথ্য'
  },
  filterOfficialLabel: {
    en: 'Official Requirements',
    bn: 'প্রাতিষ্ঠানিক শর্তাবলী'
  },
  viewCardsLabel: {
    en: 'Card View',
    bn: 'কার্ড ভিউ'
  },
  viewTableLabel: {
    en: 'Summary Table',
    bn: 'তুলনামূলক টেবিল'
  },
  ctaText: {
    en: 'Contact Us for Inquiries',
    bn: 'তথ্য অনুসন্ধানে যোগাযোগ করুন'
  },
  ctaHref: '/contact',
  disclaimerNotice: {
    en: 'Important Clarification: General information is provided as an open guide to help you navigate our services. Formal eligibility, admissions, and financial support are not automated and must be confirmed directly with the organization.',
    bn: 'গুরুত্বপূর্ণ স্পষ্টীকরণ: সাধারণ তথ্যাবলী প্রবীণ ও পরিবারের দিকনির্দেশনার জন্য উন্মুক্ত রাখা হয়েছে। আনুষ্ঠানিক ভর্তি যোগ্যতা, ভর্তির আবেদন এবং আর্থিক সহায়তার সুনির্দিষ্ট নিয়মাবলী কোনো স্বয়ংক্রিয় প্রক্রিয়ায় হয় না—এ বিষয়ে সংস্থার সাথে সরাসরি যোগাযোগ সাপেক্ষে নিশ্চিত হতে হবে।'
  },
  items: [
    // 1. Available Services (General Information)
    {
      id: 'info-available-services',
      category: 'general' as const,
      categoryLabel: {
        en: 'General Information',
        bn: 'সাধারণ তথ্য'
      },
      title: {
        en: 'Available Services',
        bn: 'বর্তমান সেবাসমূহ'
      },
      summary: {
        en: 'Community senior shelter, everyday living assistance, social and emotional wellbeing activities, and coordination with qualified health services when available.',
        bn: 'বয়োজ্যেষ্ঠদের জন্য আশ্রয় ও পরিচর্যা, দৈনন্দিন জীবনযাপনে সহায়তা, সামাজিক ও মানসিক প্রশান্তিমূলক সম্পৃক্ততা এবং উপযুক্ত স্বাস্থ্যসেবা প্রতিষ্ঠানের সাথে সংযোগ স্থাপন।'
      },
      statusValue: {
        en: 'Verified Active Programs',
        bn: 'নিশ্চিত সমাজসেবামূলক কার্যক্রম'
      },
      isUnknownOrPending: false,
      iconName: 'HeartPulse' as const,
      badgeColor: 'teal' as const,
      details: [
        {
          label: { en: 'Shelter & Daily Living', bn: 'আবাসন ও দৈনন্দিন সহায়তা' },
          value: { en: 'Comfortable living assistance and routines', bn: 'স্বাচ্ছন্দ্যময় আবাসন ও জীবনযাপনে সহায়তা' }
        },
        {
          label: { en: 'Wellbeing Support', bn: 'সামাজিক সম্পৃক্ততা' },
          value: { en: 'Respectful companionship and interaction', bn: 'সম্মানজনক মেলামেশা ও সামাজিক সঙ্গ' }
        }
      ]
    },

    // 2. Operating & Office Hours (General Information)
    {
      id: 'info-operating-hours',
      category: 'general' as const,
      categoryLabel: {
        en: 'General Information',
        bn: 'সাধারণ তথ্য'
      },
      title: {
        en: 'Operating & Office Hours',
        bn: 'প্রাতিষ্ঠানিক ও সেবা সময়সূচি'
      },
      summary: {
        en: 'Our administrative inquiry office is open Sunday through Thursday from 9:00 AM to 5:00 PM. On-site resident care and emergency support operate 24/7.',
        bn: 'আমাদের প্রশাসনিক তথ্য অনুসন্ধান কার্যালয় রবিবার থেকে বৃহস্পতিবার সকাল ৯:০০ থেকে বিকাল ৫:০০ পর্যন্ত খোলা থাকে। নিবাসীদের দৈনন্দিন সেবা ও জরুরি সহায়তা ২৪/৭ সার্বক্ষণিক কার্যকর থাকে।'
      },
      statusValue: {
        en: 'Sun – Thu, 9:00 AM – 5:00 PM (Care: 24/7)',
        bn: 'রবি – বৃহস্পতি, ৯:০০ – ১৭:০০ (পরিচর্যা: ২৪/৭)'
      },
      isUnknownOrPending: false,
      iconName: 'Clock' as const,
      badgeColor: 'green' as const,
      details: [
        {
          label: { en: 'Inquiry Office', bn: 'প্রশাসনিক অফিস' },
          value: { en: 'Sunday – Thursday: 9:00 AM – 5:00 PM', bn: 'রবিবার – বৃহস্পতিবার: সকাল ৯:০০ – বিকাল ৫:০০' }
        },
        {
          label: { en: 'Elder Care Support', bn: 'নিবাসীদের পরিচর্যা' },
          value: { en: '24/7 Continuous Support', bn: '২৪/৭ সার্বক্ষণিক যত্ন ও উপস্থিতি' }
        }
      ]
    },

    // 3. Visiting Arrangements (General Information)
    {
      id: 'info-visiting-arrangements',
      category: 'general' as const,
      categoryLabel: {
        en: 'General Information',
        bn: 'সাধারণ তথ্য'
      },
      title: {
        en: 'Visiting Arrangements',
        bn: 'প্রবীণ নিবাস পরিদর্শন সময়সূচি'
      },
      summary: {
        en: 'Family members and community well-wishers are welcomed on Fridays and Saturdays between 10:00 AM and 4:00 PM. Prior notification is recommended to respect residents’ rest schedules.',
        bn: 'পরিবারের সদস্য ও শুভানুধ্যায়ীদের জন্য শুক্রবার ও শনিবার সকাল ১০:০০ থেকে বিকাল ৪:০০ পর্যন্ত পরিদর্শনের ব্যবস্থা রয়েছে। নিবাসীদের বিশ্রামের সুবিধার্থে পূর্বেই যোগাযোগ করে সময় নির্ধারণ কাম্য।'
      },
      statusValue: {
        en: 'Fri & Sat, 10:00 AM – 4:00 PM',
        bn: 'শুক্র ও শনিবার, ১০:০০ – ১৬:০০'
      },
      isUnknownOrPending: false,
      iconName: 'Users' as const,
      badgeColor: 'teal' as const,
      details: [
        {
          label: { en: 'Designated Days', bn: 'পরিদর্শনের দিন' },
          value: { en: 'Fridays and Saturdays', bn: 'প্রতি শুক্রবার ও শনিবার' }
        },
        {
          label: { en: 'Visiting Windows', bn: 'নির্ধারিত সময়' },
          value: { en: '10:00 AM – 4:00 PM (Prior notification appreciated)', bn: 'সকাল ১০:০০ – বিকাল ৪:০০ (পূর্ব নোটিশ কাম্য)' }
        }
      ]
    },

    // 4. Contact & Location Information (General Information)
    {
      id: 'info-contact-details',
      category: 'general' as const,
      categoryLabel: {
        en: 'General Information',
        bn: 'সাধারণ তথ্য'
      },
      title: {
        en: 'Contact & Location',
        bn: 'যোগাযোগ ও কেন্দ্রের অবস্থান'
      },
      summary: {
        en: 'Located at Sonavan Tech, Gazipur Sadar, Gazipur-1700, Bangladesh. You can reach our team via telephone at +880 1700-000000 or email at info@sorc-bd.org.',
        bn: 'কেন্দ্রের ঠিকানা: সোনাভান টেক, গাজীপুর সদর, গাজীপুর-১৭০০, বাংলাদেশ। সরাসরি ফোনে যোগাযোগ: +৮৮০ ১৭০০-০০০০০০ অথবা ইমেইল: info@sorc-bd.org।'
      },
      statusValue: {
        en: 'Open for Inquiries',
        bn: 'অনুসন্ধানের জন্য উন্মুক্ত'
      },
      isUnknownOrPending: false,
      iconName: 'MapPin' as const,
      badgeColor: 'gold' as const,
      details: [
        {
          label: { en: 'Direct Phone', bn: 'টেলিফোন' },
          value: { en: '+880 1700-000000', bn: '+৮৮০ ১৭০০-০০০০০০' }
        },
        {
          label: { en: 'Official Email', bn: 'ইমেইল' },
          value: { en: 'info@sorc-bd.org', bn: 'info@sorc-bd.org' }
        }
      ]
    },

    // 5. Service Eligibility Criteria (Official Requirements)
    {
      id: 'info-service-eligibility',
      category: 'official' as const,
      categoryLabel: {
        en: 'Official Requirements',
        bn: 'প্রাতিষ্ঠানিক শর্তাবলী'
      },
      title: {
        en: 'Service Eligibility Criteria',
        bn: 'সেবা যোগ্যতা ও ভর্তি মানদণ্ড'
      },
      summary: {
        en: 'Eligibility criteria depend on individual vulnerability, senior wellbeing considerations, and verified shelter capacity. No rigid age thresholds or automated filters are published.',
        bn: 'সেবার যোগ্যতা প্রবীণদের ব্যক্তিগত অসহায়ত্ব, স্বাস্থ্যগত পরিস্থিতি এবং কেন্দ্রের আবাসন সক্ষমতার ওপর নির্ভরশীল। কোনো বাঁধাধরা বয়স বা কৃত্রিম যোগ্যতা নির্ধারণ করা হয়নি।'
      },
      statusValue: {
        en: 'Please contact the organization for current information',
        bn: 'হালনাগাদ তথ্যের জন্য অনুগ্রহ করে সংস্থার সাথে যোগাযোগ করুন'
      },
      isUnknownOrPending: true,
      contactPrompt: {
        en: 'Please contact the organization for current information regarding admission eligibility, age guidelines, and specific support suitability.',
        bn: 'ভর্তি যোগ্যতা, বয়সের নির্দেশনা এবং সেবার উপযোগিতা সম্পর্কিত সুনির্দিষ্ট তথ্যের জন্য অনুগ্রহ করে সরাসরি সংস্থার সাথে যোগাযোগ করুন।'
      },
      iconName: 'ShieldCheck' as const,
      badgeColor: 'gold' as const,
      details: [
        {
          label: { en: 'Age Guidelines', bn: 'বয়সের মানদণ্ড' },
          value: { en: 'Please contact organization for current info', bn: 'হালনাগাদ তথ্যের জন্য সংস্থার সাথে যোগাযোগ করুন' }
        },
        {
          label: { en: 'Assessment Protocol', bn: 'মূল্যায়ন প্রক্রিয়া' },
          value: { en: 'Individual case review by administration', bn: 'প্রশাসনের সরাসরি পর্যালোচনা সাপেক্ষে' }
        }
      ]
    },

    // 6. Fees & Financial Assistance (Official Requirements)
    {
      id: 'info-fees-financial',
      category: 'official' as const,
      categoryLabel: {
        en: 'Official Requirements',
        bn: 'প্রাতিষ্ঠানিক শর্তাবলী'
      },
      title: {
        en: 'Fees & Financial Assistance',
        bn: 'সেবামূল্য ও আর্থিক সহায়তা'
      },
      summary: {
        en: 'As a non-profit humanitarian center, subsidized care, community sponsorships, and charitable assistance vary by verified organizational funding. No fixed price lists or commercial rate cards exist.',
        bn: 'একটি দাতব্য ও অলাভজনক মানবিক পুনর্বাসন কেন্দ্র হিসেবে সুবিধাবঞ্চিত প্রবীণদের জন্য সহায়তা ব্যবস্থা অনুদান ও সংস্থার তহবিলের ওপর নির্ভরশীল। এখানে কোনো বাণিজ্যিক মূল্য তালিকা প্রযোজ্য নয়।'
      },
      statusValue: {
        en: 'Please contact the organization for current information',
        bn: 'হালনাগাদ তথ্যের জন্য অনুগ্রহ করে সংস্থার সাথে যোগাযোগ করুন'
      },
      isUnknownOrPending: true,
      contactPrompt: {
        en: 'Please contact the organization for current information regarding fee structures, charitable subsidies, or community sponsorships.',
        bn: 'খরচ বা আর্থিক সহায়তা, দাতব্য ছাড় বা শুভানুধ্যায়ীদের সহায়তা সম্পর্কিত বর্তমান তথ্য জানতে অনুগ্রহ করে সংস্থার সাথে যোগাযোগ করুন।'
      },
      iconName: 'HandCoins' as const,
      badgeColor: 'gold' as const,
      details: [
        {
          label: { en: 'Fee Structure', bn: 'সেবামূল্য কাঠামো' },
          value: { en: 'Please contact organization for current info', bn: 'হালনাগাদ তথ্যের জন্য সংস্থার সাথে যোগাযোগ করুন' }
        },
        {
          label: { en: 'Charitable Subsidy', bn: 'দাতব্য সহায়তা' },
          value: { en: 'Contingent on humanitarian funding', bn: 'মানবিক অনুদান ও সংস্থার তহবিলের ওপর নির্ভরশীল' }
        }
      ]
    },

    // 7. Application & Inquiry Procedures (Official Requirements)
    {
      id: 'info-application-procedures',
      category: 'official' as const,
      categoryLabel: {
        en: 'Official Requirements',
        bn: 'প্রাতিষ্ঠানিক শর্তাবলী'
      },
      title: {
        en: 'Application & Inquiry Procedures',
        bn: 'আবেদন ও তথ্য অনুসন্ধান পদ্ধতি'
      },
      summary: {
        en: 'Families and caregivers begin with an exploratory inquiry. Verified next steps are shared in dialogue with our coordinators. There are no automated deadlines or computerized waitlists.',
        bn: 'পরিবার বা শুভাকাঙ্ক্ষীরা একটি প্রাথমিক অনুসন্ধানের মাধ্যমে আলোচনা শুরু করতে পারেন। সংস্থার সাথে কথা বলে পরবর্তী ধাপগুলো নির্ধারণ করা হয়। কোনো কৃত্রিম ডেডলাইন বা অপেক্ষমাণ তালিকা নেই।'
      },
      statusValue: {
        en: 'Please contact the organization for current information',
        bn: 'হালনাগাদ তথ্যের জন্য অনুগ্রহ করে সংস্থার সাথে যোগাযোগ করুন'
      },
      isUnknownOrPending: true,
      contactPrompt: {
        en: 'Please contact the organization for current information regarding application steps, documentation guidance, and shelter availability.',
        bn: 'আবেদনের সঠিক ধাপ, নথিপত্র এবং আবাসন প্রাপ্যতা সম্পর্কে স্পষ্ট নির্দেশনার জন্য অনুগ্রহ করে সরাসরি যোগাযোগ করুন।'
      },
      iconName: 'FileText' as const,
      badgeColor: 'gold' as const,
      details: [
        {
          label: { en: 'Application Deadlines', bn: 'আবেদনের সময়সীমা' },
          value: { en: 'No fixed deadlines (Open inquiry pathway)', bn: 'কোনো নির্দিষ্ট ডেডলাইন নেই (উন্মুক্ত অনুসন্ধান)' }
        },
        {
          label: { en: 'Procedure Guidance', bn: 'প্রক্রিয়া নির্দেশিকা' },
          value: { en: 'Provided directly upon initial inquiry', bn: 'প্রাথমিক আলোচনার পর সরাসরি বুঝিয়ে দেওয়া হয়' }
        }
      ]
    }
  ] as PracticalInfoItem[]
};
