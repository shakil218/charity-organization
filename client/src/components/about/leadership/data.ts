import { 
  Building2, 
  Compass, 
  Scale, 
  HeartHandshake 
} from 'lucide-react';
import { GovernanceStructureItem, LeadershipProfile } from './types';

/**
 * Verified Institutional Governance Structure
 * Describes Sonavan Old Rehabilitation Center's management structure, 
 * multi-tier oversight, and decision-making processes.
 */
export const VERIFIED_GOVERNANCE_STRUCTURE: GovernanceStructureItem[] = [
  {
    id: 'management-board-oversight',
    title: {
      en: 'Management Structure & Board Oversight',
      bn: 'ব্যবস্থাপনা কাঠামো ও পরিচালনা পর্ষদীয় তদারকি'
    },
    category: {
      en: 'Fiduciary Stewardship',
      bn: 'প্রাতিষ্ঠানিক দায়িত্ব'
    },
    description: {
      en: 'Strategic leadership and institutional oversight are maintained by an accredited Board of Trustees dedicated to the non-profit welfare of older adults.',
      bn: 'প্রবীণদের সেবায় নিবেদিত ট্রাস্টি বোর্ডের মাধ্যমে সংস্থার কৌশলগত দিকনির্দেশনা ও সার্বিক প্রাতিষ্ঠানিক তদারকি পরিচালিত হয়।'
    },
    keyProtocols: {
      en: [
        'Periodic trustee policy reviews and compliance assessments',
        'Direct alignment with statutory non-profit welfare guidelines',
        'Transparent reporting to civic and regulatory authorities'
      ],
      bn: [
        'নিয়মিত ট্রাস্টি সভা ও নীতিগত কার্যক্রম পর্যালোচনা',
        'দাতব্য পুনর্বাসন সংক্রান্ত সকল সরকারি বিধানের যথাযথ অনুসরণ',
        'নিয়ন্ত্রক সংস্থা ও সাধারণের কাছে জবাবদিহিতামূলক প্রতিবেদন প্রদান'
      ]
    },
    icon: Building2,
    badge: {
      en: 'Trustee Oversight',
      bn: 'পর্ষদীয় তদারকি'
    }
  },
  {
    id: 'ethical-decision-making',
    title: {
      en: 'Consultative Decision-Making Processes',
      bn: 'সম্মিলিত ও নৈতিক সিদ্ধান্ত গ্রহণ প্রক্রিয়া'
    },
    category: {
      en: 'Ethics & Care Protocols',
      bn: 'সেবা মান ও নৈতিকতা'
    },
    description: {
      en: 'Operational and clinical care decisions follow a multidisciplinary consultative framework where elder dignity and comfort always take priority.',
      bn: 'দৈনন্দিন সেবা পরিচালনা ও প্রবীণদের সুরক্ষা সংক্রান্ত সিদ্ধান্তগুলো বহু-বিভাগীয় পরামর্শের ভিত্তিতে প্রবীণদের মর্যাদাকে সর্বোচ্চ অগ্রাধিকার দিয়ে গৃহীত হয়।'
    },
    keyProtocols: {
      en: [
        'Consensus-based welfare reviews involving caregivers and staff',
        'Rigorous assessment of elder privacy, dignity, and autonomy',
        'Continuous evaluation of resident well-being and feedback'
      ],
      bn: [
        'সেবাকর্মী ও কর্মকর্তাদের যৌথ মতামতের ভিত্তিতে সিদ্ধান্ত গ্রহণ',
        'প্রবীণদের ব্যক্তিগত গোপনীয়তা, স্বাধীনতা ও আত্মমর্যাদার কঠোর সুরক্ষা',
        'আবাসিক প্রবীণদের সুস্থতা ও সন্তুষ্টির নিয়মিত মূল্যায়ন'
      ]
    },
    icon: Compass,
    badge: {
      en: 'Consensus Framework',
      bn: 'সম্মিলিত পদ্ধতি'
    }
  },
  {
    id: 'financial-stewardship',
    title: {
      en: 'Financial Transparency & Audit Protocols',
      bn: 'আর্থিক স্বচ্ছতা ও নিরীক্ষা শৃঙ্খলা'
    },
    category: {
      en: 'Financial Accountability',
      bn: 'আর্থিক দায়বদ্ধতা'
    },
    description: {
      en: 'All donated funds, sustenance supplies, and operational disbursements are managed under rigorous multi-signature fiscal controls and transparent ledgers.',
      bn: 'সকল আর্থিক অনুদান, খাদ্যসামগ্রী ও দৈনন্দিন পরিচালনা ব্যয় সুনির্দিষ্ট যৌথ স্বাক্ষর এবং নিখুঁত হিসাবের মাধ্যমে সম্পূর্ণ স্বচ্ছতার সাথে পরিচালিত হয়।'
    },
    keyProtocols: {
      en: [
        'Dual-signatory verification for all shelter-related expenditures',
        'Itemized public contribution recording with zero arbitrary funds',
        'Preparation for comprehensive external third-party financial audits'
      ],
      bn: [
        'আবাসনের যেকোনো ব্যয়ের ক্ষেত্রে বাধ্যতামূলক দ্বৈত অনুমোদন',
        'প্রতিটি অনুদানের স্বচ্ছ হিসাবরক্ষণ ও অপচয়মুক্ত ব্যবস্থাপনা',
        'স্বতন্ত্র তৃতীয় পক্ষীয় পেশাদার আর্থিক নিরীক্ষার প্রস্তুতি'
      ]
    },
    icon: Scale,
    badge: {
      en: 'Dual-Signatory Control',
      bn: 'দ্বৈত অনুমোদন'
    }
  },
  {
    id: 'resident-ombudsman',
    title: {
      en: 'Resident Rights, Ombudsman & Grievance Redress',
      bn: 'আবাসিক অধিকার, ন্যায়পাল ও অভিযোগ নিষ্পত্তি'
    },
    category: {
      en: 'Quality Assurance',
      bn: 'মান নিশ্চিতকরণ'
    },
    description: {
      en: 'Ensuring every older adult has a secure, dignified voice through confidential resident feedback and immediate grievance resolution channels.',
      bn: 'প্রতিটি প্রবীণ সদস্য যাতে নির্ভয়ে তাদের মতামত প্রকাশ করতে পারেন, সে লক্ষ্যে গোপনীয় পরামর্শ বাক্স ও দ্রুততম অভিযোগ নিষ্পত্তি ব্যবস্থা বিদ্যমান।'
    },
    keyProtocols: {
      en: [
        'Regular listening circles and one-on-one welfare check-ins',
        'Unconditional protection of resident dignity and confidentiality',
        'Independent escalation pathway for resident and family concerns'
      ],
      bn: [
        'নিয়মিত মতবিনিময় এবং প্রবীণদের সুবিধা-অসুবিধা শ্রবণ',
        'প্রবীণদের মর্যাদা ও মানবিক অনুভূতির নিঃশর্ত সুরক্ষা',
        'প্রবীণ সদস্য বা পরিবারের যেকোনো উদ্বেগের দ্রুত সমাধান'
      ]
    },
    icon: HeartHandshake,
    badge: {
      en: 'Elder Advocacy',
      bn: 'প্রবীণ অধিকার রক্ষা'
    }
  }
];

/**
 * Approved Leadership Profiles
 * In accordance with organizational guidelines, we never invent personnel, founders,
 * qualifications, or titles. When formal profiles are approved by the Board of Trustees,
 * they are registered here.
 * 
 * Default is empty so the verified placeholder notice is displayed when unsupplied.
 */
export const APPROVED_LEADERSHIP_PROFILES: LeadershipProfile[] = [];
