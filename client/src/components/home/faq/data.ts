import { FAQItem } from './types';

/**
 * Default verified FAQs for Sonavan Old Rehabilitation Center.
 * Concise, factual answers adhering strictly to verified organizational information.
 * Where details require ongoing verification, visitors are directed to official contact channels.
 */
export const defaultFAQs: FAQItem[] = [
  {
    id: 'faq-what-is-sorc',
    question: {
      en: 'What is Sonavan Old Rehabilitation Center?',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কী এবং এর উদ্দেশ্য কী?'
    },
    answer: {
      en: 'Sonavan Old Rehabilitation Center (SORC) is a humanitarian non-profit organization located in Gazipur, Bangladesh. It is dedicated to providing safe shelter, compassionate daily care, and dignified companionship to vulnerable older adults who lack family support.',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) বাংলাদেশের গাজীপুরে অবস্থিত একটি মানবিক অলাভজনক প্রতিষ্ঠান। এটি পরিবারহীন ও অসহায় প্রবীণদের নিরাপদ আশ্রয়, আন্তরিক পরিচর্যা ও মর্যাদাপূর্ণ সামাজিক জীবন উপহার দিতে কাজ করে।'
    },
    category: {
      en: 'About Organization',
      bn: 'সংস্থার পরিচিতি'
    },
    link: {
      href: '/about',
      label: {
        en: 'Learn About Our Mission',
        bn: 'আমাদের লক্ষ্য ও উদ্দেশ্য জানুন'
      }
    }
  },
  {
    id: 'faq-services-offered',
    question: {
      en: 'What services does the organization offer?',
      bn: 'সংস্থাটি প্রবীণদের জন্য কী কী সেবা প্রদান করে?'
    },
    answer: {
      en: 'Our planned service framework encompasses elder living assistance, nutritional meals, routine primary wellness checkups, and meaningful intergenerational social connection. Certified clinical and facility details will be updated as organizational approvals are finalized.',
      bn: 'আমাদের সেবামূলক কার্যক্রমের মধ্যে রয়েছে প্রবীণদের নিরাপদ বাসস্থান, পুষ্টিকর খাবার, প্রাথমিক স্বাস্থ্য পর্যবেক্ষণ ও সামাজিক মিলনমেলা। সুযোগ-সুবিধার পূর্ণাঙ্গ বিবরণী প্রশাসনিক অনুমোদন সাপেক্ষে নিয়মিত হালনাগাদ করা হয়।'
    },
    category: {
      en: 'Services',
      bn: 'সেবাসমূহ'
    },
    link: {
      href: '/services',
      label: {
        en: 'Explore Service Categories',
        bn: 'সেবা সংক্রান্ত বিবরণী দেখুন'
      }
    }
  },
  {
    id: 'faq-how-to-volunteer',
    question: {
      en: 'How can I volunteer with the center?',
      bn: 'আমি কীভাবে কেন্দ্রে একজন স্বেচ্ছাসেবক হিসেবে যুক্ত হতে পারি?'
    },
    answer: {
      en: 'Community members can offer time through scheduled storytelling, empathetic listening, reading sessions, or administrative outreach. All volunteering engagements follow formal organizational approval and scheduled safety guidelines. Please apply via our Volunteer page.',
      bn: 'স্বেচ্ছাসেবক হিসেবে গল্প বলা, প্রবীণদের সময় দেওয়া বা সামাজিক সম্পৃক্ততামূলক কাজে অংশ নেওয়া যায়। সকল স্বেচ্ছাসেবা আনুষ্ঠানিক সাংগঠনিক অনুমোদন ও নিরাপত্তা বিধিমালার অধীনে পরিচালিত হয়। আবেদন করতে আমাদের ভলান্টিয়ার পাতা দেখুন।'
    },
    category: {
      en: 'Volunteering',
      bn: 'স্বেচ্ছাসেবা'
    },
    link: {
      href: '/volunteer',
      label: {
        en: 'Volunteer Application',
        bn: 'স্বেচ্ছাসেবার আবেদন করুন'
      }
    }
  },
  {
    id: 'faq-how-to-support',
    question: {
      en: 'How can I support the organization?',
      bn: 'আমি কীভাবে এই মানবিক সংস্থাকে সাহায্য করতে পারি?'
    },
    answer: {
      en: 'You can support by donating to approved resident care funds, sponsoring an elder’s monthly living amenities, or sharing our mission with your community. Every contribution is handled with strict ethical stewardship dedicated to resident welfare.',
      bn: 'অনুমোদিত তহবিলে অনুদান দিয়ে, প্রবীণ সদস্যদের মাসিক সেবার স্পন্সর হয়ে অথবা সামাজিক সচেতনতা বাড়িয়ে পাশে দাঁড়াতে পারেন। সংগৃহীত প্রতিটি দান সম্পূর্ণ সততার সাথে প্রবীণদের অন্ন, বস্ত্র ও আশ্রয়ে ব্যয় করা হয়।'
    },
    category: {
      en: 'Support & Donations',
      bn: 'সহায়তা ও অনুদান'
    },
    link: {
      href: '/donate',
      label: {
        en: 'Support Our Work',
        bn: 'অনুদান সংক্রান্ত তথ্য দেখুন'
      }
    }
  },
  {
    id: 'faq-how-to-contact',
    question: {
      en: 'How can I contact the center?',
      bn: 'সোনাভান কেন্দ্রের সাথে কীভাবে যোগাযোগ করা যাবে?'
    },
    answer: {
      en: 'You can submit an inquiry through our official website contact form, send an email to info@sorc-bd.org, or visit our Contact page for our verified administrative address in Gazipur, Bangladesh.',
      bn: 'আমাদের ওয়েবসাইটের যোগাযোগ ফর্ম পূরণ করে বার্তা পাঠাতে পারেন, info@sorc-bd.org ঠিকানায় ইমেইল করতে পারেন অথবা সরাসরি আমাদের যোগাযোগের পাতায় দেওয়া দাপ্তরিক ঠিকানায় অনুসন্ধান পাঠাতে পারেন।'
    },
    category: {
      en: 'Contact & Inquiry',
      bn: 'যোগাযোগ ও তথ্য'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Go to Contact Page',
        bn: 'যোগাযোগ পাতায় যান'
      }
    }
  },
  {
    id: 'faq-visiting-arrangements',
    question: {
      en: 'How can I learn about visiting arrangements?',
      bn: 'প্রবীণদের সাথে দেখা বা পরিদর্শন করার নিয়মাবলি কী?'
    },
    answer: {
      en: 'To safeguard resident health, dignity, and undisturbed rest, all campus visits require prior arrangement. For current visiting hours and coordination guidelines, please submit a visit request through our official Contact page.',
      bn: 'প্রবীণ সদস্যদের স্বাস্থ্য সুরক্ষা, গোপনীয়তা ও শান্ত পরিবেশ বজায় রাখতে সকল পরিদর্শন পূর্বানুমতি সাপেক্ষে নির্ধারিত হয়। বর্তমান পরিদর্শনের সময়সূচি ও দিকনির্দেশনা জানতে আমাদের যোগাযোগ পাতায় বার্তা পাঠান।'
    },
    category: {
      en: 'Visiting Policy',
      bn: 'পরিদর্শন নীতিমালা'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Request Visiting Information',
        bn: 'পরিদর্শন সংক্রান্ত তথ্য জানতে লিখুন'
      }
    }
  }
];
