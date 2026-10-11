import { ServiceStepItem } from './types';

/**
 * Default copy and bilingual content for "How Our Services Work" section.
 * Strictly adheres to ethical boundaries:
 * - General inquiry pathway only
 * - Not an official admission or clinical assessment procedure
 * - Does not invent appointments, fees, waitlists, eligibility checks, or admission requirements
 */
export const DEFAULT_HOW_SERVICES_WORK_DATA = {
  eyebrow: {
    en: 'INQUIRY & GUIDANCE PATHWAY',
    bn: 'তথ্য ও সহায়তা অনুসন্ধান প্রক্রিয়া'
  },
  heading: {
    en: 'Getting the Information You Need',
    bn: 'আপনার প্রয়োজনীয় তথ্য ও দিকনির্দেশনা পাওয়ার উপায়'
  },
  description: {
    en: 'We maintain an open, transparent pathway so older adults and their families can learn about our verified programs, ask questions without pressure, and find appropriate guidance.',
    bn: 'আমরা একটি উন্মুক্ত ও স্বচ্ছ যোগাযোগ ব্যবস্থা বজায় রাখি, যাতে প্রবীণ ব্যক্তি ও তাদের পরিবার আমাদের অনুমোদিত কার্যক্রম সম্পর্কে স্পষ্ট ধারণা লাভ করতে পারেন এবং প্রয়োজনীয় দিকনির্দেশনা পেতে পারেন।'
  },
  steps: [
    {
      id: 'step-get-in-touch',
      stepNumber: '01',
      title: {
        en: 'Get in Touch',
        bn: 'যোগাযোগ করুন'
      },
      description: {
        en: 'Contact the organization with your inquiry through our website contact form, phone line, or by reaching out to our community team.',
        bn: 'আমাদের ওয়েবসাইট, যোগাযোগ ফরম বা সরাসরি ফোন নম্বরের মাধ্যমে যেকোনো তথ্য অনুসন্ধানে সংস্থার সাথে যোগাযোগ করুন।'
      },
      iconName: 'MessageSquare'
    },
    {
      id: 'step-share-needs',
      stepNumber: '02',
      title: {
        en: 'Share Your Needs',
        bn: 'আপনার প্রয়োজনীয়তার কথা জানান'
      },
      description: {
        en: 'Explain what information or support you are seeking, sharing relevant personal preferences or questions at your own pace.',
        bn: 'আপনি কোন ধরনের তথ্য বা সহায়তা খুঁজছেন তা আমাদের জানান এবং আপনার স্বাচ্ছন্দ্য অনুযায়ী পরিস্থিতি বা প্রশ্নসমূহ তুলে ধরুন।'
      },
      iconName: 'ClipboardList'
    },
    {
      id: 'step-discuss-options',
      stepNumber: '03',
      title: {
        en: 'Discuss Available Options',
        bn: 'উপলব্ধ সুযোগ নিয়ে আলোচনা'
      },
      description: {
        en: 'Learn about services and informational resources that are actually available, ensuring complete clarity on confirmed programs.',
        bn: 'সংস্থার বর্তমানে নিশ্চিত ও অনুমোদিত সেবা এবং তথ্য সহায়তার প্রকৃত পরিধি সম্পর্কে বিস্তারিত ও স্পষ্টভাবে জেনে নিন।'
      },
      iconName: 'Compass'
    },
    {
      id: 'step-confirmed-process',
      stepNumber: '04',
      title: {
        en: 'Follow the Confirmed Process',
        bn: 'অনুমোদিত পদক্ষেপ অনুসরণ'
      },
      description: {
        en: 'Follow the organization\'s verified next steps or receive guidance on connecting with relevant external community services.',
        bn: 'সংস্থার আনুষ্ঠানিক ও যাচাইকৃত পরবর্তী নির্দেশনা অনুসরণ করুন অথবা প্রয়োজনে বাহ্যিক সামাজিক সেবার সঠিক দিকনির্দেশনা গ্রহণ করুন।'
      },
      iconName: 'ShieldCheck'
    }
  ] as ServiceStepItem[],
  ctaText: {
    en: 'Contact Our Team',
    bn: 'আমাদের টিমের সাথে যোগাযোগ করুন'
  },
  ctaHref: '/contact',
  disclaimerNotice: {
    en: 'This 4-step pathway outlines a general inquiry process for learning about our services. It is not an official admission application, medical evaluation, or clinical assessment. Sonavan Old Rehabilitation Center does not charge application fees or operate automated waitlists without official administrative confirmation.',
    bn: 'এই ৪-ধাপের প্রক্রিয়াটি আমাদের সেবাসমূহ সম্পর্কে তথ্য জানার একটি সাধারণ যোগাযোগের রূপরেখা মাত্র। এটি কোনো প্রাতিষ্ঠানিক ভর্তি আবেদন, চিকিৎসাগত মূল্যায়ন কিংবা ক্লিনিক্যাল পরীক্ষা নয়। সোনাভান ওল্ড রিহ্যাবিলিটেশন সেন্টার আনুষ্ঠানিক প্রশাসনিক অনুমোদন ব্যতীত কোনো আবেদন ফি বা স্বয়ংক্রিয় ওয়েটিং লিস্ট পরিচালনা করে না।'
  }
};
