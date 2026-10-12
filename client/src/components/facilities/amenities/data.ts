import { Home, Users, UtensilsCrossed, Trees, BookOpen, HeartHandshake } from 'lucide-react';
import { FacilityAmenityItem } from './types';
import type { BilingualText } from '../hero/types';

/**
 * 6 Main Facility & Amenity categories for Sonavan Old Rehabilitation Center.
 * Strict principle: Displayed as verified core categories and design principles
 * supporting older adults. Specific room capacities or medical claims are never invented.
 */
export const DEFAULT_FACILITIES_AMENITIES: FacilityAmenityItem[] = [
  {
    id: 'living-spaces',
    name: {
      en: 'Living & Accommodation Spaces',
      bn: 'আবাসিক ও বিশ্রামের কক্ষ'
    },
    category: {
      en: 'Residential Living',
      bn: 'আবাসিক ব্যবস্থা'
    },
    description: {
      en: 'Quiet, well-ventilated rooms planned with senior mobility and restful privacy in mind, designed to preserve personal dignity and safety.',
      bn: 'প্রবীণদের নিরিবিলি বিশ্রাম ও চলাচলের সুবিধার্থে আলো-বাতাসময় নিরাপদ কক্ষ, যা ব্যক্তিগত মর্যাদা ও স্বস্তি বজায় রাখতে সাহায্য করে।'
    },
    badge: {
      en: 'Core Space',
      bn: 'প্রধান সুবিধা'
    },
    icon: Home,
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Sunlit and calm bedroom environment supporting senior comfort and dignity',
      bn: 'প্রবীণদের মর্যাদা ও স্বাচ্ছন্দ্য নিশ্চিত করতে শান্তিময় ও আলোকিত শয়নকক্ষ'
    },
    photoDisclaimer: {
      en: 'Illustrative visual representing senior-friendly residential interior standards.',
      bn: 'প্রবীণবান্ধব আবাসিক পরিবেশ ও স্বাস্থ্যকর কক্ষের প্রতীকী রূপরেখা।'
    },
    isVerified: true
  },
  {
    id: 'shared-gathering',
    name: {
      en: 'Shared Sitting & Gathering Areas',
      bn: 'উন্মুক্ত বসার ও আড্ডার স্থান'
    },
    category: {
      en: 'Social Connection',
      bn: 'সামাজিক মেলামেশা'
    },
    description: {
      en: 'Welcoming communal lounges for daily conversations, newspaper reading, and neighborly interactions to foster connection and prevent loneliness.',
      bn: 'দৈনন্দিন কুশল বিনিময়, খবরের কাগজ পাঠ ও পারস্পরিক বন্ধুত্বের জন্য উন্মুক্ত বৈঠকখানা, যা একাকীত্ব দূর করতে সহায়তা করে।'
    },
    badge: {
      en: 'Community Lounge',
      bn: 'সামাজিক প্রাঙ্গণ'
    },
    icon: Users,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Warm communal lounge with comfortable armchairs for senior conversation and reading',
      bn: 'প্রবীণদের মেলামেশা ও খোশগল্পের জন্য তৈরি উন্মুক্ত লাউঞ্জ'
    },
    photoDisclaimer: {
      en: 'Illustrative depiction of communal gathering space designed to counter social isolation.',
      bn: 'সামাজিক বিচ্ছিন্নতা দূর করতে পরিকল্পিত উন্মুক্ত মিলনস্থলের প্রতীকী চিত্র।'
    },
    isVerified: true
  },
  {
    id: 'dining-areas',
    name: {
      en: 'Dining & Meal Areas',
      bn: 'খাবার ও ডাইনিং পরিসর'
    },
    category: {
      en: 'Nutrition & Care',
      bn: 'পুষ্টি ও আহার'
    },
    description: {
      en: 'Clean, communal dining spaces where residents can share fresh, nutritious meals together in a supportive and unhurried setting.',
      bn: 'পরিচ্ছন্ন ও সুশৃঙ্খল ডাইনিং পরিসর যেখানে নিবাসীরা আন্তরিক পরিবেশে সময় নিয়ে পুষ্টিকর ও সহজপাচ্য খাবার গ্রহণ করতে পারেন।'
    },
    badge: {
      en: 'Shared Dining',
      bn: 'সম্মিলিত আহার'
    },
    icon: UtensilsCrossed,
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Clean dining table with fresh nutritious meals in a bright room',
      bn: 'সুশৃঙ্খল ও পরিচ্ছন্ন যৌথ আহারের পরিবেশ'
    },
    photoDisclaimer: {
      en: 'Illustrative concept of hygienic, senior-accessible dining spaces.',
      bn: 'স্বাস্থ্যসম্মত ও প্রবীণবান্ধব খাবার পরিবেশের প্রতীকী রূপরেখা।'
    },
    isVerified: true
  },
  {
    id: 'outdoor-gardens',
    name: {
      en: 'Outdoor Spaces & Gardens',
      bn: 'উন্মুক্ত চত্বর ও বাগান'
    },
    category: {
      en: 'Nature & Wellness',
      bn: 'প্রকৃতি ও উন্মুক্ত বাতাস'
    },
    description: {
      en: 'Tranquil open green grounds in Gazipur Sadar offering fresh morning air, natural sunlight, and level walking pathways for peaceful strolls.',
      bn: 'গাজীপুর সদরে অবস্থিত শান্তিময় সবুজ প্রাঙ্গণ ও নিরাপদ হাঁটার পথ, যা প্রবীণদের উন্মুক্ত নির্মল বাতাস, স্নিগ্ধ রোদ ও প্রকৃতির সান্নিধ্য উপহার দেয়।'
    },
    badge: {
      en: 'Green Campus',
      bn: 'সবুজ প্রাঙ্গণ'
    },
    icon: Trees,
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Green campus garden with walking paths and plants for older adults',
      bn: 'ক্যাম্পাসের সবুজ বাগান ও নিরাপদে হাঁটাচলার উন্মুক্ত চত্বর'
    },
    photoDisclaimer: {
      en: 'Illustrative perspective of open-air campus garden and natural daylight.',
      bn: 'ক্যাম্পাসের উন্মুক্ত আলো-বাতাসময় প্রাকৃতিক বাগানের প্রতীকী দৃশ্যপট।'
    },
    isVerified: true
  },
  {
    id: 'activity-recreation',
    name: {
      en: 'Activity & Recreation Areas',
      bn: 'সৃজনশীল ও বিনোদনমূলক পরিসর'
    },
    category: {
      en: 'Active Aging',
      bn: 'মানসিক প্রফুল্লতা'
    },
    description: {
      en: 'Multipurpose community spaces for gentle mental stimulation, light hobbies, reading, cultural recitations, and uplifting group engagements.',
      bn: 'মানসিক প্রশান্তি ও প্রফুল্লতার জন্য হালকা সৃজনশীল শখ, স্মৃতিচর্চা, বইপড়া ও আনন্দময় দলীয় কার্যক্রমের উপযোগী উন্মুক্ত পরিসর।'
    },
    badge: {
      en: 'Enrichment',
      bn: 'সৃজনশীল চর্চা'
    },
    icon: BookOpen,
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Elder-friendly recreation and activity space for hobbies and learning',
      bn: 'প্রবীণদের সৃজনশীল বিনোদন ও আনন্দময় অবসরযাপনের স্থান'
    },
    photoDisclaimer: {
      en: 'Illustrative representation of recreational spaces promoting mental engagement.',
      bn: 'প্রবীণদের মানসিক সুস্থতা ও বিনোদনের জন্য পরিকল্পিত পরিবেশের প্রতীকী চিত্র।'
    },
    isVerified: true
  },
  {
    id: 'visitor-meeting',
    name: {
      en: 'Visitor & Family Meeting Areas',
      bn: 'স্বজন ও দর্শনার্থী মিলনকক্ষ'
    },
    category: {
      en: 'Family & Visiting',
      bn: 'পারিবারিক সাক্ষাৎ'
    },
    description: {
      en: 'Dedicated, respectful meeting spaces where visiting family members, relatives, and volunteers can spend uninterrupted quality time with residents.',
      bn: 'পরিবারের সদস্য, আত্মীয়স্বজন ও শুভাকাঙ্ক্ষীদের সাথে প্রবীণ নিবাসীদের আন্তরিক ও সম্মানজনক সাক্ষাতের জন্য নির্ধারিত বৈঠকখানা।'
    },
    badge: {
      en: 'Visitor Space',
      bn: 'সাক্ষাৎকার কক্ষ'
    },
    icon: HeartHandshake,
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
    imageAlt: {
      en: 'Warm visiting setting for family connection and elder comfort',
      bn: 'পরিবার ও প্রবীণদের সাক্ষাতের জন্য সম্মানজনক পরিবেশ'
    },
    photoDisclaimer: {
      en: 'Illustrative view of visiting lounge ensuring family dignity and privacy.',
      bn: 'স্বজনদের সম্মানজনক ও নিবিড় সাক্ষাতের জন্য নির্ধারিত লাউঞ্জের প্রতীকী দৃশ্য।'
    },
    isVerified: true

  }
];

export const DEFAULT_FACILITIES_AMENITIES_HEADER = {
  eyebrow: {
    en: 'OUR CAMPUS & AMENITIES',
    bn: 'আমাদের ক্যাম্পাস ও সুযোগ-সুবিধা'
  } as BilingualText,
  heading: {
    en: 'Explore Our Facilities',
    bn: 'আমাদের সুবিধাসমূহ ঘুরে দেখুন'
  } as BilingualText,
  subtitle: {
    en: "Learn about the spaces and amenities available to support the center's activities and the people it serves.",
    bn: 'কেন্দ্রের কার্যক্রম ও প্রবীণ নিবাসীদের দৈনন্দিন সেবা সহায়তায় পরিকল্পিত বিভিন্ন পরিসর ও সুযোগ-সুবিধা সম্পর্কে জানুন।'
  } as BilingualText,
  disclaimerNote: {
    en: 'These categories describe verified core facility areas and environmental care principles at our Gazipur Sadar center. We do not invent unverified equipment or medical capacities. For specific room inquiries, please contact our administrative desk.',
    bn: 'এই তালিকা আমাদের গাজীপুর সদর কেন্দ্রে প্রবীণদের কল্যাণে নির্ধারিত মূল পরিবেশগত সুবিধার রূপরেখা। কোনো অনিশ্চিত বা অবাস্তব সেবা আমরা উপস্থাপন করি না। নির্দিষ্ট তথ্যের জন্য আমাদের প্রশাসনিক কার্যালয়ে সরাসরি যোগাযোগ করুন।'
  } as BilingualText
};
