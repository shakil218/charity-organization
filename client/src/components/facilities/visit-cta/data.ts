import { FacilitiesContactInfo } from './types';
import type { BilingualText } from '../hero/types';

export const DEFAULT_FACILITIES_CONTACT_INFO: FacilitiesContactInfo = {
  phone: '+880 1700-000000',
  email: 'info@sorc-bd.org',
  address: {
    en: 'Sonavan Tech, Gazipur Sadar, Gazipur-1700, Bangladesh',
    bn: 'সোনাভান টেক, গাজীপুর সদর, গাজীপুর-১৭০০, বাংলাদেশ'
  },
  visitingNote: {
    en: 'Visits and campus walkthroughs are arranged strictly by prior direct inquiry to protect resident privacy, rest periods, and quiet routines. Online visit booking is not supported.',
    bn: 'প্রবীণদের গোপনীয়তা, প্রশান্তি ও দৈনন্দিন সেবার শিডিউল রক্ষা করতে কেবলমাত্র পূর্বানুমতি সাপেক্ষে পরিদর্শন সমন্বয় করা হয়। অনলাইন বুকিং ব্যবস্থা প্রযোজ্য নয়।'
  }
};

export const DEFAULT_FACILITIES_VISIT_CTA_DATA = {
  eyebrow: {
    en: 'VISIT & INQUIRIES',
    bn: 'সরাসরি পরিদর্শন ও অনুসন্ধান'
  } as BilingualText,
  heading: {
    en: 'Would You Like to Know More About Our Facilities?',
    bn: 'আমাদের সুযোগ-সুবিধা সম্পর্কে আরও জানতে চান?'
  } as BilingualText,
  description: {
    en: 'Contact Sonavan Old Rehabilitation Center to ask about the available facilities, visiting arrangements, accessibility, and other practical information.',
    bn: 'বিদ্যমান সুযোগ-সুবিধা, পরিদর্শন পদ্ধতি, অভিগম্যতা এবং যেকোনো প্রয়োজনীয় তথ্য জানতে সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের সাথে সরাসরি যোগাযোগ করুন।'
  } as BilingualText,
  primaryButton: {
    text: {
      en: 'Contact Us',
      bn: 'যোগাযোগ করুন'
    } as BilingualText,
    href: '/contact'
  },
  secondaryButton: {
    text: {
      en: 'Explore Our Services',
      bn: 'আমাদের সেবাসমূহ দেখুন'
    } as BilingualText,
    href: '/services'
  },
  imageSrc: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000',
  imageAlt: {
    en: 'Welcoming entrance pathway and landscaped grounds representing the center environment',
    bn: 'কেন্দ্রের মনোরম প্রবেশদ্বার ও সুসজ্জিত প্রাঙ্গণের প্রতীকী দৃশ্য'
  } as BilingualText
};
