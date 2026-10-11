import { GalleryImageItem } from './types';

/**
 * Curated photo gallery preview items for Sonavan Old Rehabilitation Center About Us page.
 * 
 * Ethical & Privacy Compliance:
 * - Marked with `isIllustrative: true` to prevent presenting them as formal proof of center facilities.
 * - Adheres strictly to the Senior Dignity & Privacy Charter (unconditional respect for privacy;
 *   no unconsented identifiable resident photos).
 * - High aesthetic fidelity reflecting peaceful daily atmosphere, greenery, reading, and companionship.
 */
export const DEFAULT_ABOUT_GALLERY_IMAGES: GalleryImageItem[] = [
  {
    id: 'gallery-garden-walkways',
    title: {
      en: 'Morning Garden & Sunlit Veranda',
      bn: 'সকালের শান্ত প্রাঙ্গণ ও স্নিগ্ধ রোদ'
    },
    caption: {
      en: 'Open courtyard paths where residents enjoy morning fresh air, gentle sunshine, and natural greenery.',
      bn: 'উন্মুক্ত সবুজ প্রাঙ্গণ যেখানে প্রবীণরা সকালের স্নিগ্ধ রোদ, বিশুদ্ধ বাতাস ও প্রকৃতির সান্নিধ্য উপভোগ করেন।'
    },
    date: {
      en: 'Autumn 2025',
      bn: 'শরৎ ২০২৫'
    },
    category: {
      en: 'Sanctuary Grounds',
      bn: 'আবাস প্রাঙ্গণ'
    },
    altText: {
      en: 'Illustrative view of a sunlit garden pathway and comfortable outdoor benches in a peaceful elderly sanctuary',
      bn: 'শান্ত ও সবুজ উদ্যানে উন্মুক্ত হাঁটার পথ ও বিশ্রামের বেঞ্চের প্রতীকী চিত্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  },
  {
    id: 'gallery-reading-corner',
    title: {
      en: 'Quiet Reading & Reminiscence',
      bn: 'শান্ত বিকেলের বইপড়া ও স্মৃতিচারণ'
    },
    caption: {
      en: 'A peaceful library corner filled with natural daylight, books, and quiet armchairs for gentle reading.',
      bn: 'প্রচুর আলো-বাতাসসমৃদ্ধ শান্ত কর্নার, যেখানে রয়েছে প্রিয় বই ও নিরিবিলি অবসরের সুবর্ণ সুযোগ।'
    },
    date: {
      en: 'Winter 2024',
      bn: 'শীত ২০২৪'
    },
    category: {
      en: 'Library & Leisure',
      bn: 'পাঠাগার ও অবসর'
    },
    altText: {
      en: 'Illustrative view of a serene reading nook with natural light and books for quiet moments',
      bn: 'জানালা সংলগ্ন আলোছায়াময় নিরিবিলি বইপড়ার কোণের প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  },
  {
    id: 'gallery-tea-conversations',
    title: {
      en: 'Tea Time & Heartfelt Stories',
      bn: 'আন্তরিক চায়ের আড্ডা ও গল্পগুজব'
    },
    caption: {
      en: 'Afternoon tea gatherings encouraging warmth, deep companionship, and cherished lifelong memories.',
      bn: 'প্রতিদিনের সান্ধ্য চায়ের আসর যেখানে প্রবীণ বন্ধুরা সুখ-দুঃখের গল্প ও আন্তরিক সান্নিধ্য ভাগাভাগি করেন।'
    },
    date: {
      en: 'Spring 2025',
      bn: 'বসন্ত ২০২৫'
    },
    category: {
      en: 'Social Living',
      bn: 'সামাজিক সান্নিধ্য'
    },
    altText: {
      en: 'Warm tea cups on a wooden table representing peaceful conversation and compassionate companionship',
      bn: 'আন্তরিক আড্ডা ও চায়ের টেবিলের প্রতীকী দৃশ্যপট'
    },
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  },
  {
    id: 'gallery-creative-crafts',
    title: {
      en: 'Creative Expression & Crafts',
      bn: 'সৃজনশীল শিল্পকর্ম ও আনন্দময় চর্চা'
    },
    caption: {
      en: 'Gentle pottery, knitting, and mindful crafts keeping hands active and spirits bright.',
      bn: 'হস্তশিল্প ও মাটির কাজের মাধ্যমে সৃজনশীলতা চর্চা এবং মানসিক প্রফুল্লতা বজায় রাখার আয়োজন।'
    },
    date: {
      en: 'Summer 2025',
      bn: 'গ্রীষ্ম ২০২৫'
    },
    category: {
      en: 'Creative Arts',
      bn: 'সৃজনশীল কাজ'
    },
    altText: {
      en: 'Mindful creative craft activities promoting motor skills and peaceful engagement',
      bn: 'সৃজনশীল হস্তশিল্প ও মানসিক প্রশান্তির প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  },
  {
    id: 'gallery-veranda-overlook',
    title: {
      en: 'Veranda & Natural Breezes',
      bn: 'প্রকৃতির সান্নিধ্যে শান্ত বারান্দা'
    },
    caption: {
      en: 'Shaded verandas providing gentle cross-ventilation, birdsong, and open garden views.',
      bn: 'সবুজ বাগান সংলগ্ন ছায়াদার বারান্দা যেখানে বসে পাখির ডাক ও নির্মল বাতাস উপভোগ করা যায়।'
    },
    date: {
      en: 'Monsoon 2025',
      bn: 'বর্ষা ২০২৫'
    },
    category: {
      en: 'Living Spaces',
      bn: 'আবাসিক পরিবেশ'
    },
    altText: {
      en: 'Shaded veranda overlooking natural greenery offering a calm environment for reflection',
      bn: 'গাছপালায় ঘেরা শান্ত বারান্দা ও আরামদায়ক আবাসের প্রতীকী চিত্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  },
  {
    id: 'gallery-acoustic-melodies',
    title: {
      en: 'Acoustic Melodies & Inner Calm',
      bn: 'শান্ত সুর ও মিষ্টি সঙ্গীতের আবহ'
    },
    caption: {
      en: 'Acoustic melodies that evoke comforting memories, emotional solace, and tranquility.',
      bn: 'শান্ত ক্লাসিক্যাল সুর ও মিষ্টি বাজনার পরিবেশ যা হৃদয়ে অনাবিল প্রশান্তি ও স্মৃতি জাগিয়ে তোলে।'
    },
    date: {
      en: 'Autumn 2025',
      bn: 'শরৎ ২০২৫'
    },
    category: {
      en: 'Music & Solace',
      bn: 'সুর ও প্রশান্তি'
    },
    altText: {
      en: 'Classical acoustic instruments evoking peaceful melodic relaxation and nostalgic joy',
      bn: 'সঙ্গীত ও মানসিক প্রশান্তির প্রতীকী রূপরেখা'
    },
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isIllustrative: true,
    isVerifiedActualPhoto: false
  }
];
