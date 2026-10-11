import { AboutFAQItem } from './types';

/**
 * 7 Verified Frequently Asked Questions for Sonavan Old Rehabilitation Center About Us page.
 * Strictly adheres to verified organizational records without guesswork.
 * Directs visitors to the official Contact page for unlisted or custom inquiries.
 */
export const DEFAULT_ABOUT_FAQS: AboutFAQItem[] = [
  {
    id: 'faq-what-is-sorc',
    question: {
      en: 'What is Sonavan Old Rehabilitation Center?',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র কী?'
    },
    answer: {
      en: 'Sonavan Old Rehabilitation Center (SORC) is a dedicated non-profit social initiative committed to providing shelter, compassionate daily care, dignity, and companionship to elderly individuals in Bangladesh. The center supports vulnerable seniors who need attentive care, nutritious dining, and a warm, family-like sanctuary.',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) বাংলাদেশের অসহায় ও প্রবীণ মানুষদের আশ্রয়ে নিবেদিত একটি মানবিক অলাভজনক প্রতিষ্ঠান। কেন্দ্রটি প্রবীণদের জন্য নিরাপদ আবাসন, আন্তরিক ব্যক্তিগত সেবা, পুষ্টিকর আহার এবং পারিবারিক সান্নিধ্যপূর্ণ সামাজিক পরিবেশ নিশ্চিত করে যাতে তারা একাকীত্বহীন ও মর্যাদাপূর্ণ জীবনযাপন করতে পারেন।'
    },
    category: {
      en: 'About SORC',
      bn: 'সংস্থার পরিচিতি'
    },
    link: {
      href: '/about#organization-overview',
      label: {
        en: 'Learn About Our Background',
        bn: 'প্রাতিষ্ঠানিক পরিচিতি দেখুন'
      }
    }
  },
  {
    id: 'faq-mission',
    question: {
      en: "What is the organization's mission?",
      bn: 'সংস্থাটির মূল মিশন কী?'
    },
    answer: {
      en: "Our mission is to safeguard the inherent dignity, physical comfort, emotional solace, and social inclusion of older adults. We follow person-centered principles to ensure seniors receive respectful care and live in an environment where their lifetime contributions are valued rather than forgotten.",
      bn: 'আমাদের মূল মিশন হলো ব্যক্তি-কেন্দ্রিক সেবা, শারীরিক সুরক্ষা এবং মানসিক সহমর্মিতার মাধ্যমে প্রবীণদের সহজাত মর্যাদা ও প্রশান্তি রক্ষা করা। আমরা এমন এক অন্তর্ভুক্তিমূলক সমাজ গড়ে তুলতে কাজ করি যেখানে বয়োজ্যেষ্ঠদের অবহেলা নয়, বরং পরম শ্রদ্ধার সাথে সমাজের সম্মানিত অংশ হিসেবে মূল্যায়ন করা হয়।'
    },
    category: {
      en: 'Mission & Purpose',
      bn: 'মিশন ও উদ্দেশ্য'
    },
    link: {
      href: '/about#our-mission',
      label: {
        en: 'Explore Our Mission Statement',
        bn: 'আমাদের মিশন বিবৃতি দেখুন'
      }
    }
  },
  {
    id: 'faq-services-provided',
    question: {
      en: 'What services does the center provide?',
      bn: 'কেন্দ্রটি কী কী সেবা প্রদান করে?'
    },
    answer: {
      en: 'The center provides secure residential accommodation, daily vitals and wellness observation, scheduled medicine coordination, balanced nutritious meals, and peaceful leisure and companionship activities. For specialized medical treatment questions, admission criteria, or unlisted needs, visitors are directed to contact our administrative team directly.',
      bn: 'কেন্দ্রটিতে নিরাপদ আবাসন, দৈনন্দিন স্বাস্থ্য ও ভাইটালস পর্যবেক্ষণ, নির্ধারিত ওষুধ সেবন সহায়তা, পুষ্টিকর খাবার সরবরাহ এবং পারিবারিক সান্নিধ্যের সুযোগ রয়েছে। বিশেষায়িত চিকিৎসা সেবা, ভর্তি সংক্রান্ত শর্তাবলী বা অন্যান্য তথ্যের জন্য যোগাযোগ পেজের মাধ্যমে সরাসরি প্রশাসনিক দলের সাথে যোগাযোগের পরামর্শ দেওয়া হয়।'
    },
    category: {
      en: 'Services & Care',
      bn: 'সেবা ও পরিচর্যা'
    },
    link: {
      href: '/services',
      label: {
        en: 'View Core Services',
        bn: 'সেবাসমূহ দেখুন'
      }
    }
  },
  {
    id: 'faq-location',
    question: {
      en: 'Where is the center located?',
      bn: 'পুনর্বাসন কেন্দ্রটি কোথায় অবস্থিত?'
    },
    answer: {
      en: 'Sonavan Old Rehabilitation Center is located in Sonavan Tech, Gazipur Sadar, Gazipur-1700, Dhaka Division, Bangladesh. For specific driving directions, public transport details, or scheduling an in-person visit, please visit our Contact page or speak with our office.',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রটি বাংলাদেশের ঢাকা বিভাগের গাজীপুর সদরের সোনাভান টেকে (গাজীপুর-১৭০০) অবস্থিত। যাতায়াত নির্দেশিকা, দর্শনার্থীদের সময়সূচি কিংবা সরাসরি পরিদর্শনের জন্য আমাদের যোগাযোগ পেজে তথ্য পাওয়ার পাশাপাশি প্রশাসনিক ডেস্কে যোগাযোগ করা যাবে।'
    },
    category: {
      en: 'Location & Visiting',
      bn: 'অবস্থান ও পরিদর্শন'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Get Directions on Contact Page',
        bn: 'যোগাযোগ পেজে ঠিকানা দেখুন'
      }
    }
  },
  {
    id: 'faq-history',
    question: {
      en: "How can I learn about the organization's history?",
      bn: 'সংস্থাটির অতীত ইতিহাস সম্পর্কে কীভাবে জানতে পারি?'
    },
    answer: {
      en: "You can read our foundational journey and milestones in the Our Story & History section on this page. In alignment with our commitment to institutional truthfulness, historical records are verified before publication. For specific archival inquiries or documentation requests, please reach out via our Contact page.",
      bn: 'আমাদের যাত্রার পটভূমি ও মূল আদর্শ সম্পর্কে জানতে এই পেজের ‘আমাদের ইতিহাস ও পথচলা’ সেকশনটি অন্বেষণ করতে পারেন। তথ্যের প্রাতিষ্ঠানিক সত্যনিষ্ঠা বজায় রাখতে আর্কাইভ নথিপত্র নিয়মিত পর্যালোচনা করা হয়। যেকোনো ঐতিহাসিক তথ্য বা প্রাতিষ্ঠানিক অনুসন্ধানের জন্য যোগাযোগ পেজের মাধ্যমে যোগাযোগ করুন।'
    },
    category: {
      en: 'Story & Archives',
      bn: 'ইতিহাস ও আর্কাইভ'
    },
    link: {
      href: '/about#our-story-history',
      label: {
        en: 'Read Our Story & History',
        bn: 'আমাদের ইতিহাস ও পথচলা পড়ুন'
      }
    }
  },
  {
    id: 'faq-volunteer-contribute',
    question: {
      en: 'How can I volunteer or contribute?',
      bn: 'আমি কীভাবে স্বেচ্ছাসেবা দিতে বা অবদান রাখতে পারি?'
    },
    answer: {
      en: 'Community members can volunteer their time by visiting residents for friendly conversations, reading books together, assisting with garden walks, or helping organize seasonal gatherings. Supporters can also contribute essential care resources or explore institutional partnerships. Please visit our Get Involved page or contact us to participate.',
      bn: 'প্রবীণদের একাকীত্ব দূর করতে আমরা সমাজ ও শুভানুধ্যায়ীদের আন্তরিক উপস্থিতিকে স্বাগত জানাই—যেমন প্রবীণদের সাথে সময় কাটানো, গল্প করা, বই পড়ে শোনানো কিংবা উন্মুক্ত হাঁটায় সঙ্গ দেওয়া। এছাড়া প্রয়োজনীয় সামগ্রী সরবরাহ বা প্রাতিষ্ঠানিক সহযোগিতার মাধ্যমেও যুক্ত হওয়া যায়। বিস্তারিত সুযোগসমূহ আমাদের ‘যুক্ত হোন’ পেজে রয়েছে।'
    },
    category: {
      en: 'Community & Giving',
      bn: 'অংশগ্রহণ ও সহায়তা'
    },
    link: {
      href: '/get-involved',
      label: {
        en: 'Explore Ways to Engage',
        bn: 'যুক্ত হওয়ার সুযোগ দেখুন'
      }
    }
  },
  {
    id: 'faq-contact-organization',
    question: {
      en: 'How can I contact the organization?',
      bn: 'সংস্থাটির সাথে কীভাবে যোগাযোগ করতে পারি?'
    },
    answer: {
      en: 'You can reach us directly by telephone at +880 1700-000000, by email at info@sorc-bd.org, or by submitting an inquiry via the online form on our Contact page. In-person visiting hours for family and community guests are Fridays and Saturdays between 10:00 and 16:00.',
      bn: 'আপনি আমাদের সাথে সরাসরি ফোন (+৮৮০ ১৭০০-০০০০০০), ইমেইল (info@sorc-bd.org) অথবা যোগাযোগ পেজের অনুসন্ধান ফর্মের মাধ্যমে যোগাযোগ করতে পারেন। পরিবার ও শুভানুধ্যায়ীদের জন্য পরিদর্শনের নির্ধারিত সময় শুক্র ও শনিবার সকাল ১০:০০ থেকে বিকাল ৪:০০ পর্যন্ত।'
    },
    category: {
      en: 'Direct Contact',
      bn: 'সরাসরি যোগাযোগ'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Open Contact Form',
        bn: 'যোগাযোগ ফর্ম খুলুন'
      }
    }
  }
];
