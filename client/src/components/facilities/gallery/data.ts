import { FacilityGalleryItem, FacilityGalleryCategory } from './types';

export const FACILITY_GALLERY_CATEGORIES: {
  id: FacilityGalleryCategory;
  label: { en: string; bn: string };
}[] = [
  {
    id: 'all',
    label: { en: 'All Photos', bn: 'সব ছবি' }
  },
  {
    id: 'exterior',
    label: { en: 'Building Exterior', bn: 'ভবন ও প্রাঙ্গণ' }
  },
  {
    id: 'interior',
    label: { en: 'Interior Spaces', bn: 'আবাসিক কক্ষ' }
  },
  {
    id: 'common',
    label: { en: 'Common Areas', bn: 'সাধারণ স্থান' }
  },
  {
    id: 'outdoor',
    label: { en: 'Outdoor Environment', bn: 'সবুজ উদ্যান' }
  },
  {
    id: 'accessibility',
    label: { en: 'Accessibility Features', bn: 'অভিগম্যতা' }
  }
];

export const DEFAULT_FACILITY_GALLERY_IMAGES: FacilityGalleryItem[] = [
  {
    id: 'facility-exterior-campus',
    title: {
      en: 'Campus & Building Exterior',
      bn: 'ক্যাম্পাস ভবন ও উন্মুক্ত পরিবেশ'
    },
    caption: {
      en: 'A serene setting with greenery and peaceful surroundings at Gazipur Sadar, providing a calm atmosphere for residents.',
      bn: 'গাজীপুর সদরে অবস্থিত শান্ত ও সবুজে ঘেরা মনোরম ক্যাম্পাস প্রাঙ্গণ, যা প্রবীণদের জন্য নিরাপদ ও উন্মুক্ত পরিবেশ নিশ্চিত করে।'
    },
    category: 'exterior',
    categoryLabel: {
      en: 'Building Exterior',
      bn: 'ভবন ও প্রাঙ্গণ'
    },
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    altText: {
      en: 'Exterior view of the rehabilitation center building surrounded by lush green lawns and tranquil landscaped trees',
      bn: 'সবুজ প্রাঙ্গণ ও মনোরম বৃক্ষরাজিতে ঘেরা পুনর্বাসন কেন্দ্র ভবনের বাহ্যিক স্থাপত্যিক দৃশ্য'
    },
    isFeatured: true,
    isIllustrative: true,
    disclaimer: {
      en: 'Architectural illustration of the serene center campus environment.',
      bn: 'কেন্দ্রের শান্ত ও উন্মুক্ত পরিবেশের প্রতীকী স্থাপত্য রূপরেখা।'
    }
  },
  {
    id: 'facility-interior-bedrooms',
    title: {
      en: 'Restful Living & Bedrooms',
      bn: 'আবাসিক কক্ষ ও বিশ্রামের স্থান'
    },
    caption: {
      en: 'Well-ventilated, clean rooms with gentle natural lighting and uncluttered layouts designed for personal peace and comfort.',
      bn: 'প্রচুর আলো-বাতাস ও পরিচ্ছন্ন সমতল মেঝেবিশিষ্ট কক্ষ, যা প্রবীণদের শান্ত ঘুম ও শারীরিক স্বাচ্ছন্দ্য নিশ্চিত করে।'
    },
    category: 'interior',
    categoryLabel: {
      en: 'Interior Spaces',
      bn: 'আবাসিক কক্ষ'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1000',
    altText: {
      en: 'Bright and airy bedroom designed for senior living with comfortable bed and clean flooring',
      bn: 'প্রবীণদের বসবাসের উপযোগী আলো-বাতাসপূর্ণ পরিচ্ছন্ন শয়নকক্ষ'
    },
    isFeatured: false,
    isIllustrative: true,
    disclaimer: {
      en: 'Illustrative room interior showcasing planned natural lighting and simplicity.',
      bn: 'স্বাচ্ছন্দ্য ও প্রাকৃতিক আলোর পরিকল্পনা তুলে ধরতে প্রতীকী আবাসিক কক্ষ প্রদর্শিত।'
    }
  },
  {
    id: 'facility-common-lounge',
    title: {
      en: 'Shared Sitting & Conversation Lounge',
      bn: 'সাধারণ বসার ও আড্ডার লাউঞ্জ'
    },
    caption: {
      en: 'A welcoming communal gathering space arranged with supportive seating for conversations, quiet reading, and companionship.',
      bn: 'আরামদায়ক বসার সুবিধাযুক্ত উন্মুক্ত লাউঞ্জ, যেখানে প্রবীণরা গল্পগুজব, বই পড়া ও সান্নিধ্য উপভোগ করতে পারেন।'
    },
    category: 'common',
    categoryLabel: {
      en: 'Common Areas',
      bn: 'সাধারণ স্থান'
    },
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    altText: {
      en: 'Comfortable common lounge area with armchairs and warm natural lighting for senior conversations',
      bn: 'প্রবীণদের আন্তরিক আড্ডা ও মেলামেশার জন্য আরামদায়ক বসার সাধারণ কক্ষ'
    },
    isFeatured: false,
    isIllustrative: true,
    disclaimer: {
      en: 'Illustrative representation of shared community areas supporting mutual care.',
      bn: 'পারস্পরিক মেলামেশা ও সামাজিক সংযোগের প্রতীকী রূপরেখা।'
    }
  },
  {
    id: 'facility-common-dining',
    title: {
      en: 'Communal Dining & Nutrition Space',
      bn: 'খাবার ও পুষ্টি গ্রহণ কক্ষ'
    },
    caption: {
      en: 'Orderly dining arrangement planned for dignified shared meals, healthy hydration, and nutritional care.',
      bn: 'সুশৃঙ্খল ও পরিচ্ছন্ন ডাইনিং স্পেস, যা প্রবীণদের নিয়মিত পুষ্টিকর খাবার ও স্বাচ্ছন্দ্যপূর্ণ আহার নিশ্চিত করার জন্য পরিকল্পিত।'
    },
    category: 'common',
    categoryLabel: {
      en: 'Common Areas',
      bn: 'সাধারণ স্থান'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    altText: {
      en: 'Clean and orderly dining hall with tables and chairs for communal meal times',
      bn: 'একত্রে খাবার গ্রহণের সুশৃঙ্খল ও পরিচ্ছন্ন ডাইনিং টেবিল ও চেয়ার'
    },
    isFeatured: false,
    isIllustrative: true,
    disclaimer: {
      en: 'Illustrative representation of planned communal dining arrangements.',
      bn: 'একত্রে পুষ্টিকর আহার গ্রহণের প্রতীকী রূপরেখা।'
    }
  },
  {
    id: 'facility-outdoor-gardens',
    title: {
      en: 'Courtyard Greenery & Walkways',
      bn: 'সবুজ প্রাঙ্গণ ও মুক্ত বাতাস'
    },
    caption: {
      en: 'Natural garden walkways shaded by leafy trees, offering fresh air, gentle walks, and peaceful contemplation.',
      bn: 'ছায়াঘেরা সবুজ প্রাঙ্গণ ও সমতল হাঁটার পথ, যা মুক্ত বাতাস গ্রহণ, হালকা হাঁটাহাঁটি ও মনের প্রশান্তিতে সহায়ক।'
    },
    category: 'outdoor',
    categoryLabel: {
      en: 'Outdoor Environment',
      bn: 'সবুজ উদ্যান'
    },
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000',
    altText: {
      en: 'Paved garden path surrounded by lush trees and manicured natural greenery',
      bn: 'সবুজ বৃক্ষরাজি ও প্রকৃতির সান্নিধ্যে বাঁধানো হাঁটার পথ'
    },
    isFeatured: false,
    isIllustrative: true,
    disclaimer: {
      en: 'Illustrative outdoor garden setting prioritizing peaceful recreation.',
      bn: 'স্নিগ্ধ ও দূষণমুক্ত পরিবেশের প্রতীকী দৃশ্যপট।'
    }
  },
  {
    id: 'facility-accessibility-corridor',
    title: {
      en: 'Clear Movement & Accessible Corridors',
      bn: 'প্রশস্ত ও বাধাহীন চলাচলের পথ'
    },
    caption: {
      en: 'Step-free interior hallways designed with generous width to support assisted movement and obstacle-free passage.',
      bn: 'ধাপহীন প্রশস্ত অভ্যন্তরীণ করিডোর, যা সহায়ক সামগ্রী বা সহযোগীদের সাথে নিয়ে নিরাপদ ও নির্বিঘ্ন চলাচলের সুযোগ করে দেয়।'
    },
    category: 'accessibility',
    categoryLabel: {
      en: 'Accessibility Features',
      bn: 'অভিগম্যতা'
    },
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    altText: {
      en: 'Wide, well-illuminated interior corridor with smooth, level flooring for safe movement',
      bn: 'নিরাপদ চলাচলের উপযোগী সমতল ও উজ্জ্বল অভ্যন্তরীণ করিডোর'
    },
    isFeatured: false,
    isIllustrative: true,
    disclaimer: {
      en: 'Concept depiction of wide, barrier-free movement spaces for senior comfort.',
      bn: 'প্রবীণদের সুরক্ষায় প্রশস্ত ও বাধাহীন চলাচলের পথের প্রতীকী চিত্র।'
    }
  }
];
