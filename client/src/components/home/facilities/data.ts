import { FacilityImageItem } from './types';

/**
 * Verified facility environment images.
 * Strict principle: Clearly marked as illustrative concepts rather than confirmed actual facility photos,
 * strictly describing planned peaceful surroundings without inventing unverified equipment or clinics.
 */
export const defaultFacilityImages: FacilityImageItem[] = [
  {
    id: 'tranquil-grounds',
    title: {
      en: 'Tranquil Open Grounds',
      bn: 'প্রশান্ত উন্মুক্ত প্রাঙ্গণ'
    },
    caption: {
      en: 'An illustrative vision of peaceful green surroundings that promote relaxation, fresh air, and elder well-being.',
      bn: 'প্রবীণদের নির্মল নিঃশ্বাস, প্রশান্তি ও আত্মিক স্বস্তির জন্য পরিকল্পিত সবুজ প্রাঙ্গণের প্রতীকী দৃশ্যপট।'
    },
    altText: {
      en: 'Illustrative concept of peaceful green surroundings planned for senior elder living',
      bn: 'প্রবীণদের জন্য পরিকল্পিত শান্ত উন্মুক্ত সবুজ প্রাঙ্গণের প্রতীকী চিত্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200',
    tag: {
      en: 'Featured Concept',
      bn: 'প্রধান রূপরেখা'
    },
    isFeatured: true
  },
  {
    id: 'sunlit-spaces',
    title: {
      en: 'Natural Daylight & Airy Spaces',
      bn: 'উন্মুক্ত আলো-বাতাসময় পরিবেশ'
    },
    caption: {
      en: 'Illustrative representation of sunlit communal seating designed for morning warmth and conversation.',
      bn: 'সকালের স্নিগ্ধ রোদ ও খোলামেলা আলাপচারিতার জন্য সহায়ক পরিবেশের প্রতীকী রূপরেখা।'
    },
    altText: {
      en: 'Illustrative representation of airy, sunlit communal seating for older adults',
      bn: 'প্রবীণদের জন্য আলো-বাতাসময় সামাজিক চত্বরের প্রতীকী ছবি'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800',
    tag: {
      en: 'Illustrative Visual',
      bn: 'প্রতীকী চিত্র'
    }
  },
  {
    id: 'shaded-corners',
    title: {
      en: 'Shaded Conversation Corners',
      bn: 'ছায়াঘেরা আলাপচারিতার আঙিনা'
    },
    caption: {
      en: 'Illustrative concept of quiet, shaded outdoor resting spaces for neighborly intergenerational connection.',
      bn: 'নতুন প্রজন্মের সাথে গল্প ও বন্ধুত্বের সুযোগ তৈরিতে ছায়াঘেরা শান্ত চত্বরের প্রতীকী চিত্র।'
    },
    altText: {
      en: 'Illustrative depiction of shaded outdoor companion seating for older adults',
      bn: 'প্রবীণদের জন্য শান্ত উন্মুক্ত মিলনমেলার প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=800',
    tag: {
      en: 'Illustrative Visual',
      bn: 'প্রতীকী চিত্র'
    }
  },
  {
    id: 'gentle-walkways',
    title: {
      en: 'Gentle Companion Walkways',
      bn: 'হাঁটার নিরাপদ ছায়াঘেরা পথ'
    },
    caption: {
      en: 'Illustrative representation of level, barrier-free walking paths that encourage gentle daily movement.',
      bn: 'প্রতিদিনের নিরাপদ ও সহজ হাঁটাচলার অনুকূল পথ ও শান্ত আঙিনার প্রতীকী রূপরেখা।'
    },
    altText: {
      en: 'Illustrative representation of gentle walking paths for senior mobility',
      bn: 'প্রবীণদের চলাফেরার নিরাপদ পথের প্রতীকী চিত্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    tag: {
      en: 'Illustrative Visual',
      bn: 'প্রতীকী চিত্র'
    }
  }
];
