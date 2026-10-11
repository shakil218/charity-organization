import { 
  Building2, 
  FileText, 
  Scale, 
  BookOpenCheck, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';
import { TransparencyDocument } from './types';

/**
 * Transparency & Accountability Resource Documents
 * In accordance with organizational integrity guidelines, we never invent registration numbers,
 * legal statuses, audited figures, or certifications. Documents without confirmed publication
 * are marked as not yet published with zero fake download links.
 */
export const DEFAULT_TRANSPARENCY_DOCUMENTS: TransparencyDocument[] = [
  {
    id: 'org-registration',
    title: {
      en: 'Organizational Registration & Legal Identity',
      bn: 'সাংগঠনিক নিবন্ধন ও প্রাতিষ্ঠানিক সনদ'
    },
    category: {
      en: 'Registration & Mandate',
      bn: 'নিবন্ধন ও প্রাতিষ্ঠানিক ভিত্তি'
    },
    description: {
      en: 'Official documentation detailing the center’s non-profit constitution, organizational governance charter, and operational mandate for elder care.',
      bn: 'সংস্থার অলাভজনক গঠনতন্ত্র, পরিচালনা পর্ষদের কার্যপরিধি এবং প্রবীণ সেবার প্রাতিষ্ঠানিক আইনি ভিত্তি সংক্রান্ত নথিপত্র।'
    },
    icon: Building2,
    isAvailable: false,
    statusText: {
      en: 'Verification Archive Under Review',
      bn: 'প্রাতিষ্ঠানিক প্রত্যয়ন নথিপত্র পর্যালোচনাধীন'
    }
  },
  {
    id: 'annual-reports',
    title: {
      en: 'Annual Activity & Operational Reports',
      bn: 'বার্ষিক কার্যক্রম ও প্রাতিষ্ঠানিক প্রতিবেদন'
    },
    category: {
      en: 'Annual Reporting',
      bn: 'বার্ষিক প্রতিবেদন'
    },
    description: {
      en: 'Comprehensive overview of ongoing shelter initiatives, resident welfare milestones, and community engagement delivered throughout the operating cycle.',
      bn: 'প্রবীণ নিবাসের দৈনন্দিন সেবা কার্যক্রম, আবাসিক সদস্যদের সার্বিক কল্যাণ ও সামাজিক অংশীদারিত্বের সমন্বিত বিবরণী।'
    },
    icon: FileText,
    isAvailable: false,
    statusText: {
      en: 'Awaiting Formal Board Ratification',
      bn: 'পরিচালনা পর্ষদের অনুমোদনের অপেক্ষায়'
    }
  },
  {
    id: 'financial-summaries',
    title: {
      en: 'Financial Summaries & Contribution Accounts',
      bn: 'আর্থিক সারসংক্ষেপ ও অনুদান হিসাব'
    },
    category: {
      en: 'Fiscal Transparency',
      bn: 'আর্থিক স্বচ্ছতা'
    },
    description: {
      en: 'Transparent ledgers detailing voluntary community donations, meal sustenance expenditures, and medical care disbursements under strict fiscal controls.',
      bn: 'জনসাধারণের স্বেচ্ছা অনুদান, পুষ্টিকর খাদ্য সরবরাহ এবং প্রবীণদের চিকিৎসা সেবায় ব্যয়িত তহবিলের স্বচ্ছ আর্থিক হিসাব।'
    },
    icon: Scale,
    isAvailable: false,
    statusText: {
      en: 'External Audit Cycle in Progress',
      bn: 'নিরীক্ষা প্রক্রিয়া চলমান'
    }
  },
  {
    id: 'organizational-policies',
    title: {
      en: 'Organizational Policies & Care Ethics Code',
      bn: 'সাংগঠনিক নীতিমালা ও সেবা আচরণবিধি'
    },
    category: {
      en: 'Governance & Conduct',
      bn: 'পরিচালনা ও আচরণবিধি'
    },
    description: {
      en: 'Institutional guidelines governing caregiver ethical conduct, elder respect protocols, and transparent day-to-day management routines.',
      bn: 'সেবাকর্মীদের দায়িত্ববোধ, প্রবীণদের সম্মান প্রদর্শন নীতিমালা এবং দৈনন্দিন ব্যবস্থাপনার অভ্যন্তরীণ নিয়মাবলী।'
    },
    icon: BookOpenCheck,
    isAvailable: false,
    statusText: {
      en: 'Document Under Preparation',
      bn: 'নথিপত্র প্রণয়ন প্রক্রিয়াধীন'
    }
  },
  {
    id: 'safeguarding-privacy',
    title: {
      en: 'Safeguarding & Privacy Policy Charter',
      bn: 'মর্যাদা সুরক্ষা ও গোপনীয়তা নীতিমালা'
    },
    category: {
      en: 'Resident Rights & Privacy',
      bn: 'আবাসিক অধিকার ও গোপনীয়তা'
    },
    description: {
      en: 'Published policy safeguarding elder privacy, unconditional dignity, informed photography consent, and secure donor data protection.',
      bn: 'প্রবীণদের ব্যক্তিগত গোপনীয়তা, মানবিক আত্মমর্যাদা রক্ষা, ছবি তোলার সম্মতি এবং অনুদানকারীদের তথ্য সুরক্ষার ঘোষিত নীতিমালা।'
    },
    icon: ShieldCheck,
    isAvailable: true,
    documentUrl: '/privacy',
    actionType: 'view',
    fileType: 'Web Page',
    statusText: {
      en: 'Published & Available',
      bn: 'প্রকাশিত ও কার্যকর'
    }
  },
  {
    id: 'program-reports',
    title: {
      en: 'Program Reports & Relief Outreach',
      bn: 'সেবামূলক কর্মসূচি ও সামাজিক সহায়তা প্রতিবেদন'
    },
    category: {
      en: 'Program Delivery',
      bn: 'মাঠপর্যায়ের কার্যক্রম'
    },
    description: {
      en: 'Field summaries on seasonal elderly welfare initiatives, warm blanket distributions, conversational visits, and community volunteer circles.',
      bn: 'শীতবস্ত্র বিতরণ, মানসিক প্রফুল্লতা বৃদ্ধিতে গল্পের আসর এবং প্রবীণদের জন্য গৃহীত মৌসুমী সহায়তামূলক কর্মসূচির প্রতিবেদন।'
    },
    icon: HeartHandshake,
    isAvailable: false,
    statusText: {
      en: 'Field Records Being Finalized',
      bn: 'মাঠপর্যায়ের তথ্য সংকলন চলমান'
    }
  }
];
