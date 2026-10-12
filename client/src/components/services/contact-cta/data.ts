import { ServicesContactInfo } from './types';
import type { BilingualText } from '../faq/types';

export const DEFAULT_SERVICES_CONTACT_INFO: ServicesContactInfo = {
  phone: '+880 1700-000000',
  email: 'info@sorc-bd.org',
  address: {
    en: 'Sonavan Tech, Gazipur Sadar, Gazipur-1700, Bangladesh',
    bn: 'সোনাভান টেক, গাজীপুর সদর, গাজীপুর-১৭০০, বাংলাদেশ'
  },
  visitingHours: {
    en: 'Fri & Sat, 10:00 AM - 4:00 PM',
    bn: 'শুক্র ও শনি, ১০:০০ - ১৬:০০'
  }
};

export const DEFAULT_SERVICES_CONTACT_CTA_DATA = {
  heading: {
    en: 'Looking for More Information?',
    bn: 'আরও বিস্তারিত তথ্য খুঁজছেন?'
  } as BilingualText,
  subtitle: {
    en: 'CONTACT & INQUIRIES',
    bn: 'যোগাযোগ ও সরাসরি অনুসন্ধান'
  } as BilingualText,
  description: {
    en: 'Contact the organization to learn about confirmed services, eligibility, availability, and the next steps for making an inquiry.',
    bn: 'আমাদের নিশ্চিত সেবাসমূহ, আবেদনের যোগ্যতা, বর্তমান আসন প্রাপ্যতা এবং অনুসন্ধানের পরবর্তী ধাপ সম্পর্কে জানতে প্রতিষ্ঠানের সাথে যোগাযোগ করুন।'
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
      en: 'About Our Organization',
      bn: 'আমাদের সংস্থা সম্পর্কে জানুন'
    } as BilingualText,
    href: '/about'
  },
  imageSrc: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  imageAlt: {
    en: 'Dedicated care consultation and assistance at Sonavan Old Rehabilitation Center',
    bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রে দায়িত্বশীল পরিচর্যা ও পরামর্শ সেবা'
  } as BilingualText
};
