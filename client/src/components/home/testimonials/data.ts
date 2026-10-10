import { HeartHandshake, ShieldCheck, Heart, Users } from 'lucide-react';
import { ElderCommitmentItem, TestimonialItem } from './types';

/**
 * Our Commitment to Every Elder:
 * Displays four foundational pillars (Dignity, Respect, Compassion, Inclusion)
 * when verified, approved public testimonials are not yet on file.
 * Strictly adheres to truthfulness principles: no invented quotes, names, or ratings.
 */
export const defaultElderCommitments: ElderCommitmentItem[] = [
  {
    id: 'commitment-dignity',
    pillar: 'dignity',
    title: {
      en: 'Dignity in Every Detail',
      bn: 'ব্যক্তিগত মর্যাদা ও স্বকীয়তা'
    },
    badge: {
      en: 'Unconditional Dignity',
      bn: 'মর্যাদার সুরক্ষা'
    },
    promise: {
      en: 'Upholding self-respect, personal privacy, and freedom of choice in daily living.',
      bn: 'প্রতিটি প্রবীণ সদস্যের আত্মমর্যাদা, গোপনীয়তা ও ব্যক্তিগত সম্মানের পূর্ণ নিশ্চয়তা।'
    },
    description: {
      en: 'Personal care routines are guided by what brings peace, comfort, and autonomy to the individual without compromise.',
      bn: 'প্রতিদিনের পরিচর্যায় প্রতিটি মানুষের নিজস্ব অভ্যাস, পছন্দ ও মর্যাদাপূর্ণ অনুভূতিকে সর্বোচ্চ প্রাধান্য দেওয়া।'
    },
    icon: HeartHandshake
  },
  {
    id: 'commitment-respect',
    pillar: 'respect',
    title: {
      en: 'Respect for Life Stories',
      bn: 'জীবনাভিজ্ঞতার প্রতি গভীর শ্রদ্ধা'
    },
    badge: {
      en: 'Intergenerational Honor',
      bn: 'শ্রদ্ধাশীল দৃষ্টি'
    },
    promise: {
      en: 'Honoring each elder’s rich past, life wisdom, and cultural heritage with patient listening.',
      bn: 'প্রবীণদের জীবনের সোনালী অতীত, অভিজ্ঞতা ও সাংস্কৃতিক মূল্যবোধকে সশ্রদ্ধ চিত্তে গ্রহণ করা।'
    },
    description: {
      en: 'Creating an attentive atmosphere where older adults are valued as cherished wisdom keepers of our society.',
      bn: 'একটি সম্মানজনক পরিবেশ যেখানে প্রবীণরা সমাজে অবহেলিত নন, বরং সমাজের অভিভাবক হিসেবে সমাদৃত।'
    },
    icon: ShieldCheck
  },
  {
    id: 'commitment-compassion',
    pillar: 'compassion',
    title: {
      en: 'Gentle, Unhurried Care',
      bn: 'আন্তরিক ও মমতাময় সান্নিধ্য'
    },
    badge: {
      en: 'Loving Kindness',
      bn: 'মানবিক সহমর্মিতা'
    },
    promise: {
      en: 'Delivering patient emotional support, warmth, and attentive companionship in every interaction.',
      bn: 'ধৈর্যশীল শ্রবণ, পরম মমতায় সান্নিধ্য প্রদান এবং মানসিক প্রশান্তিতে নিবেদিত থাকা।'
    },
    description: {
      en: 'Caregivers and supporters engage with genuine empathy, ensuring no one feels rushed, overlooked, or unheard.',
      bn: 'প্রতিটি আলাপচারিতা, সেবা ও পরিচর্যার মুহূর্তে আন্তরিক স্নেহ ও মমতার স্পর্শ নিশ্চিত করা।'
    },
    icon: Heart
  },
  {
    id: 'commitment-inclusion',
    pillar: 'inclusion',
    title: {
      en: 'Belonging & Connection',
      bn: 'অর্থপূর্ণ সামাজিক মেলবন্ধন'
    },
    badge: {
      en: 'Community Family',
      bn: 'একাত্মতা ও বন্ধন'
    },
    promise: {
      en: 'Eliminating elder isolation through intergenerational friendships, celebrations, and shared joy.',
      bn: 'প্রজন্মের মেলবন্ধন ঘটিয়ে নিঃসঙ্গতা দূরীকরণ এবং আনন্দময় সামাজিক কার্যক্রমে সবার অংশগ্রহণ।'
    },
    description: {
      en: 'Fostering neighborly storytelling, tea gatherings, and communal belonging where every senior belongs.',
      bn: 'উন্মুক্ত স্মৃতিচারণ, উৎসব ও তরুণদের আন্তরিক মেলামেশার মাধ্যমে একটি ভালোবাসার পরিবার গড়ে তোলা।'
    },
    icon: Users
  }
];

/**
 * Approved Testimonials array.
 * Initialized to empty array [] because the organization has not yet gathered formal,
 * certified public testimonials with documented participant consent.
 * When real testimonials are approved, they are passed here and automatically rendered.
 */
export const defaultApprovedTestimonials: TestimonialItem[] = [];
