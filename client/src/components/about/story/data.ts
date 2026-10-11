import { TimelineMilestone } from './types';

/**
 * Organizational Compliance Note:
 * In accordance with strict institutional truthfulness guidelines:
 * - We never invent founding years, founders, historical events, awards, or beneficiary numbers.
 * - By default, verified organizational milestones remain an empty collection until officially authenticated
 *   and released by the center's board of trustees.
 * - When empty, the Timeline component elegantly displays the verified placeholder notice:
 *   "Our story is being documented. Please check back for updates."
 */
export const verifiedOrganizationalMilestones: TimelineMilestone[] = [];

/**
 * Optional sample schema provided for future organizational documentation updates.
 * When the foundation's archives are formally certified, entries structured in this format
 * will be rendered automatically in the responsive interactive timeline.
 */
export const archivalMilestoneSchemaTemplate: TimelineMilestone[] = [
  {
    id: 'milestone-initiation',
    date: {
      en: 'Foundational Phase',
      bn: 'প্রারম্ভিক পর্যায়'
    },
    title: {
      en: 'Establishment of Compassionate Care Sanctuary',
      bn: 'মমতাময় আশ্রয় ও পুনর্বাসন কার্যক্রমের সূচনা'
    },
    description: {
      en: 'Initiated dedicated shelter and around-the-clock caregiver monitoring for vulnerable older adults lacking immediate familial support.',
      bn: 'পারিবারিক অভিভাবকহীন প্রবীণদের সুরক্ষা ও সার্বক্ষণিক সেবিকা সহায়তার মাধ্যমে আশ্রয় ও পরিচর্যা ব্যবস্থার সূত্রপাত।'
    },
    category: {
      en: 'Founding Purpose',
      bn: 'প্রাতিষ্ঠানিক লক্ষ্য'
    },
    badge: {
      en: 'Sanctuary',
      bn: 'আবাসন'
    },
    isVerified: true
  },
  {
    id: 'milestone-healthcare',
    date: {
      en: 'Healthcare Integration',
      bn: 'চিকিৎসা সেবার অন্তর্ভুক্তি'
    },
    title: {
      en: 'Structured Daily Medical Observation & Dining Care',
      bn: 'দৈনন্দিন স্বাস্থ্য পর্যবেক্ষণ ও সুষম পুষ্টি কার্যক্রম'
    },
    description: {
      en: 'Introduced routine vitals checkups, prescribed medication management, and dietitian-guided soft dining tailored for geriatric wellness.',
      bn: 'প্রবীণ স্বাস্থ্য সুরক্ষায় নিয়মিত ভাইটালস পরীক্ষা, নির্ধারিত ওষুধ সেবন এবং বয়োবৃদ্ধদের উপযোগী পুষ্টিকর খাদ্যাভ্যাস সংযোজন।'
    },
    category: {
      en: 'Healthcare',
      bn: 'স্বাস্থ্যসেবা'
    },
    badge: {
      en: 'Well-being',
      bn: 'সুস্থতা'
    },
    isVerified: true
  }
];
