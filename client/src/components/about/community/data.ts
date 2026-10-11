import { 
  Users, 
  HeartHandshake, 
  Building2 
} from 'lucide-react';
import { CommunityEngagementCard, PartnerLogo } from './types';

/**
 * Three Core Community & Partnership Engagement Cards
 * In strict compliance with guidelines, these cards are presented as open opportunities
 * and pathways for collaboration rather than inventing completed initiatives or unverified agreements.
 */
export const DEFAULT_COMMUNITY_CARDS: CommunityEngagementCard[] = [
  {
    id: 'community-engagement',
    title: {
      en: 'Community Engagement',
      bn: 'সামাজিক সম্পৃক্ততা ও মেলবন্ধন'
    },
    badge: {
      en: 'Civic Inclusion Opportunity',
      bn: 'সামাজিক মেলবন্ধনের সুযোগ'
    },
    description: {
      en: 'Fostering warm neighborhood ties, festive visits, and intergenerational dialogue so older adults remain embraced by the wider community.',
      bn: 'এলাকাবাসী, পরিবার ও তরুণ সমাজের সাথে আন্তরিক যোগাযোগ ও উৎসব উদযাপনের মাধ্যমে প্রবীণদের সামাজিক একাত্মতা নিশ্চিত করার প্রয়াস।'
    },
    opportunities: {
      en: [
        'Organizing friendly conversational circles and recreational gatherings',
        'Seasonal cultural celebrations and festival gift sharing',
        'Bridging youth and elder connections through shared storytelling'
      ],
      bn: [
        'প্রবীণদের সাথে নিয়মিত মতবিনিময় ও গল্পের আসর আয়োজন',
        'মৌসুমী উৎসব উদযাপন ও শুভেচ্ছা বিনিময় কার্যক্রম',
        'নতুন প্রজন্মের সাথে প্রবীণদের পারস্পরিক শ্রদ্ধাবোধ জাগ্রত করা'
      ]
    },
    icon: Users,
    primaryCta: {
      text: {
        en: 'Explore Ways to Engage',
        bn: 'যুক্ত হওয়ার উপায় দেখুন'
      },
      href: '/get-involved'
    },
    secondaryCta: {
      text: {
        en: 'Connect With Us',
        bn: 'যোগাযোগ করুন'
      },
      href: '/contact'
    }
  },
  {
    id: 'volunteer-participation',
    title: {
      en: 'Volunteer Participation',
      bn: 'স্বেচ্ছাসেবকদের সক্রিয় অংশগ্রহণ'
    },
    badge: {
      en: 'Active Volunteer Pathway',
      bn: 'স্বেচ্ছাসেবী হিসেবে অংশগ্রহণের সুযোগ'
    },
    description: {
      en: 'Welcoming compassionate citizens, students, and caregivers who wish to share their time, warmth, and supportive talents with elder residents.',
      bn: 'সহৃদয় তরুণ, শিক্ষার্থী ও শুভানুধ্যায়ীদের আন্তরিক উপস্থিতি প্রবীণদের একাকীত্ব দূর করতে ও দৈনন্দিন প্রফুল্লতা ফিরিয়ে আনতে অনন্য ভূমিকা রাখে।'
    },
    opportunities: {
      en: [
        'Dedicated companionship visits and attentive listening support',
        'Assisting with recreational courtyard walks and leisure reading',
        'Contributing creative, organizational, or event support skills'
      ],
      bn: [
        'নিয়মিত সময় দেওয়া ও প্রবীণদের সুখ-দুঃখের কথা শোনা',
        'বাগান পরিচর্যা, উন্মুক্ত হাঁটা ও বই পড়ে শোনানোয় সহায়তা',
        'সাংগঠনিক প্রচারণা ও বিশেষ সেবামূলক আয়োজনে অংশগ্রহণ'
      ]
    },
    icon: HeartHandshake,
    primaryCta: {
      text: {
        en: 'Join as a Volunteer',
        bn: 'স্বেচ্ছাসেবক হিসেবে যুক্ত হোন'
      },
      href: '/get-involved'
    },
    secondaryCta: {
      text: {
        en: 'Send an Inquiry',
        bn: 'তথ্য জানতে লিখুন'
      },
      href: '/contact'
    }
  },
  {
    id: 'organizational-partnerships',
    title: {
      en: 'Organizational Partnerships',
      bn: 'প্রাতিষ্ঠানিক ও সামাজিক অংশীদারিত্ব'
    },
    badge: {
      en: 'Partnership Exploration',
      bn: 'প্রাতিষ্ঠানিক অংশীদারিত্বের সুযোগ'
    },
    description: {
      en: 'Inviting healthcare providers, educational bodies, corporate CSR programs, and non-profits to build verified collaborations for elderly welfare.',
      bn: 'চিকিৎসা প্রতিষ্ঠান, শিক্ষাপ্রতিষ্ঠান, করপোরেট সিএসআর এবং সেবামূলক সংস্থাসমূহের সাথে যৌথ উদ্যোগে প্রবীণদের কল্যাণে কাজের উন্মুক্ত সুযোগ।'
    },
    opportunities: {
      en: [
        'Collaborative health wellness checkups and medical aid coordination',
        'Corporate social responsibility (CSR) sponsorships for living amenities',
        'Academic research and dignified gerontology care advocacy'
      ],
      bn: [
        'প্রবীণদের স্বাস্থ্য সুরক্ষায় যৌথ হেলথ ক্যাম্প ও চিকিৎসা সহায়তা',
        'বাসস্থান উন্নয়ন ও পুষ্টিকর খাবার সরবরাহে করপোরেট সিএসআর সহায়তা',
        'প্রবীণ অধিকার রক্ষা ও মানবিক পুনর্বাসন বিষয়ে জনসচেতনতা সৃষ্টি'
      ]
    },
    icon: Building2,
    primaryCta: {
      text: {
        en: 'Partner With Us',
        bn: 'অংশীদারিত্বের জন্য যোগাযোগ'
      },
      href: '/contact'
    },
    secondaryCta: {
      text: {
        en: 'Learn About Outreach',
        bn: 'কার্যক্রম বিস্তারিত জানুন'
      },
      href: '/get-involved'
    }
  }
];

/**
 * Approved Partner Logos
 * Strict honesty compliance: We never invent partner organizations, sponsorships,
 * or completed collaboration agreements. Logos are displayed only upon formal confirmation.
 * Default is empty so the transparent partnership invitation banner is shown.
 */
export const APPROVED_PARTNERS: PartnerLogo[] = [];
