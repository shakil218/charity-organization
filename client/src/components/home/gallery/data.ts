import { GalleryImageItem } from './types';

/**
 * Six representative community images for the Photo Gallery preview.
 * Strictly adheres to privacy & dignity guidelines:
 * - Marked as `isIllustrative: true` to prevent mistaking them for real medical/resident records.
 * - Protects elder privacy by not publishing identifiable photographs without formal consent.
 * - Showcases 1 featured large image and 5 supporting images.
 */
export const defaultGalleryImages: GalleryImageItem[] = [
  {
    id: 'gallery-garden-walk',
    title: {
      en: 'Tranquil Morning Walkways',
      bn: 'সকালের শান্ত পদচারণা ও নির্মল বাতাস'
    },
    caption: {
      en: 'Gentle green pathways designed for safe morning strolls and quiet outdoor reflection.',
      bn: 'সকালের স্নিগ্ধ রোদে নিরাপদ হাঁটাচলা ও মানসিক প্রশান্তির জন্য উন্মুক্ত সবুজ চত্বর।'
    },
    altText: {
      en: 'Illustrative visual of a sunlit garden pathway surrounded by greenery for older adults',
      bn: 'সবুজ গাছপালায় ঘেরা শান্ত ও নিরাপদ প্রাঙ্গণের প্রতীকী দৃশ্যপট'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
    isIllustrative: true,
    categoryTag: {
      en: 'Outdoor Grounds',
      bn: 'উন্মুক্ত প্রাঙ্গণ'
    }
  },
  {
    id: 'gallery-reading-corner',
    title: {
      en: 'Quiet Reading & Story Corner',
      bn: 'শান্ত বইপড়ার চত্বর ও স্মৃতিচারণ'
    },
    caption: {
      en: 'Comfortable seating for quiet reading, reflection, and peaceful afternoon pastimes.',
      bn: 'শান্ত বিকেলে বইপড়া, স্মৃতিচারণ ও নিরিবিলি বিশ্রামের উপযোগী আরামদায়ক চত্বর।'
    },
    altText: {
      en: 'Illustrative visual of a serene reading nook with natural light and books',
      bn: 'প্রবীণদের পড়ার জন্য আলো-বাতাসময় শান্ত কর্নারের প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    isIllustrative: true,
    categoryTag: {
      en: 'Library & Leisure',
      bn: 'পাঠ ও অবসর'
    }
  },
  {
    id: 'gallery-tea-conversations',
    title: {
      en: 'Shared Tea & Warm Conversations',
      bn: 'চায়ের আড্ডা ও আন্তরিক আলাপ'
    },
    caption: {
      en: 'Gathering over morning tea for neighborly stories and joyful companionship.',
      bn: 'প্রতিদিনের চায়ের কাপে পারিবারিক সান্নিধ্য ও আন্তরিক সুখ-দুঃখের স্মৃতিচারণ।'
    },
    altText: {
      en: 'Illustrative visual of warm tea cups on a wooden table representing peaceful conversation',
      bn: 'আন্তরিক আড্ডা ও চায়ের টেবিলের প্রতীকী দৃশ্যপট'
    },
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800',
    isIllustrative: true,
    categoryTag: {
      en: 'Social Hours',
      bn: 'সামাজিক মেলবন্ধন'
    }
  },
  {
    id: 'gallery-creative-crafts',
    title: {
      en: 'Mindful Crafts & Activities',
      bn: 'সৃজনশীল শিল্পকর্ম ও আনন্দময় সময়'
    },
    caption: {
      en: 'Engaging gentle hands and creative minds in pottery, painting, and craftwork.',
      bn: 'সহজ শিল্পকর্ম ও চিত্রাঙ্কনের মাধ্যমে মানসিক প্রফুল্লতা বজায় রাখার আয়োজন।'
    },
    altText: {
      en: 'Illustrative visual of mindful creative craft activities promoting well-being',
      bn: 'সৃজনশীল হস্তশিল্প ও মানসিক প্রশান্তির প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    isIllustrative: true,
    categoryTag: {
      en: 'Creative Arts',
      bn: 'সৃজনশীল কাজ'
    }
  },
  {
    id: 'gallery-shaded-veranda',
    title: {
      en: 'Sunlit Veranda & Garden Breeze',
      bn: 'ছায়াঘেরা বারান্দা ও স্নিগ্ধ বাতাস'
    },
    caption: {
      en: 'Open verandas offering fresh cross-ventilation and calming views of natural surroundings.',
      bn: 'উন্মুক্ত বারান্দায় বসে স্নিগ্ধ বাতাস ও প্রকৃতির অপরূপ সৌন্দর্য উপভোগের সুযোগ।'
    },
    altText: {
      en: 'Illustrative visual of a shaded veranda overlooking a peaceful landscape',
      bn: 'প্রকৃতির সান্নিধ্যে ছায়াদার বারান্দার প্রতীকী রূপরেখা'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800',
    isIllustrative: true,
    categoryTag: {
      en: 'Living Spaces',
      bn: 'আবাসন আঙিনা'
    }
  },
  {
    id: 'gallery-serene-music',
    title: {
      en: 'Gentle Melodies & Shared Music',
      bn: 'শান্ত সুর ও মিষ্টি গানের আসর'
    },
    caption: {
      en: 'Quiet acoustic melodies that evoke cherished memories, warmth, and peace of mind.',
      bn: 'প্রবীণদের প্রিয় পুরনো গান ও শান্ত সুরের মূর্ছনায় মনের ক্লান্তি দূর করার সময়।'
    },
    altText: {
      en: 'Illustrative visual of acoustic musical companionship evoking nostalgia and calm',
      bn: 'সঙ্গীত ও মানসিক প্রশান্তির প্রতীকী দৃশ্য'
    },
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    isIllustrative: true,
    categoryTag: {
      en: 'Music & Calm',
      bn: 'সঙ্গীত ও শান্তি'
    }
  }
];
