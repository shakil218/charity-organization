import { ServicesFAQItem } from './types';

/**
 * Confirmed FAQ items for the Sonavan Old Rehabilitation Center (SORC) Services page.
 * Formulated with confirmed organizational information; unknown or case-by-case details
 * direct visitors to contact administrative staff directly.
 */
export const DEFAULT_SERVICES_FAQS: ServicesFAQItem[] = [
  {
    id: 'services-provided',
    question: {
      en: 'What services does the center provide?',
      bn: 'সোনাভান কেন্দ্র কী কী সেবাসমূহ প্রদান করে?'
    },
    answer: {
      en: 'SORC provides holistic residential care for elderly seniors, including dignified sheltered housing, 24/7 healthcare and vitals monitoring, balanced nutritious dining, assistance with daily living, gentle mobility and rehabilitation support, and social-emotional companionship programs.',
      bn: 'সোনাভান সেন্টার প্রবীণদের জন্য সার্বিক সেবা প্রদান করে। এর মধ্যে রয়েছে নিরাপদ ও মর্যাদাপূর্ণ আবাসন, ২৪/৭ স্বাস্থ্য ও চিকিৎসাসেবা পর্যবেক্ষণ, পুষ্টিকর খাবার, প্রাত্যহিক কার্যক্রমে সহায়তা, ফিজিওথেরাপি ও মৃদু গতিশীলতা পুনর্বাসন এবং সামাজিক ও মানসিক আনন্দদায়ক মেলবন্ধন কর্মসূচি।'
    },
    category: {
      en: 'Scope of Care',
      bn: 'সেবার পরিধি'
    },
    link: {
      href: '#services-overview',
      label: {
        en: 'Explore Service Categories',
        bn: 'সেবাসমূহের তালিকা দেখুন'
      }
    }
  },
  {
    id: 'how-to-ask-support',
    question: {
      en: 'How can I ask about available support?',
      bn: 'প্রয়োজনীয় সেবা বা সহযোগিতা সম্পর্কে কীভাবে জানতে পারি?'
    },
    answer: {
      en: 'You can contact our support desk directly via our official helpline (+880 1700-000000), send an email to info@sorc-bd.org, or complete the online inquiry form on our Contact Us page. Our care coordination team will discuss current intake availability and guide you through the process.',
      bn: 'আপনি আমাদের অফিশিয়াল হেল্পলাইনে (+৮৮০ ১৭০০-০০০০০০) সরাসরি ফোন করতে পারেন, info@sorc-bd.org ঠিকানায় ইমেইল পাঠাতে পারেন অথবা আমাদের ওয়েবসাইটের যোগাযোগ ফর্মে অনুসন্ধান বার্তা পাঠাতে পারেন। আমাদের কেয়ার কোঅর্ডিনেশন টিম বর্তমান আসন সংখ্যা ও প্রক্রিয়া সম্পর্কে আপনাকে বিস্তারিত জানাবে।'
    },
    category: {
      en: 'Inquiries',
      bn: 'অনুসন্ধান'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Go to Contact Desk',
        bn: 'যোগাযোগ ডেস্কে যান'
      }
    }
  },
  {
    id: 'eligibility-criteria',
    question: {
      en: 'Who may be eligible for services?',
      bn: 'কারা এই সেবাসমূহের অন্তর্ভুক্ত হতে পারেন?'
    },
    answer: {
      en: 'Our primary mission prioritizes vulnerable, low-income, or homeless elderly citizens who lack supportive family safety nets and require shelter, ongoing healthcare, or daily living assistance. Because each senior’s health profile and personal situation are unique, admissions are evaluated on an individual basis. Please contact us for specific case consultations.',
      bn: 'আমাদের প্রধান লক্ষ্য অসহায়, অসচ্ছল বা আশ্রয়হীন প্রবীণ নাগরিকরা—যাদের নির্ভরযোগ্য পারিবারিক অভিভাবকত্ব নেই এবং যাদের নিয়মিত বাসস্থান, চিকিৎসা বা পরিচর্যা প্রয়োজন। প্রতিটি প্রবীণের স্বাস্থ্যগত অবস্থা ও পরিস্থিতি স্বতন্ত্র হওয়ায় প্রতিটি আবেদন পৃথকভাবে মূল্যায়ন করা হয়। সুনির্দিষ্ট তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।'
    },
    category: {
      en: 'Eligibility',
      bn: 'যোগ্যতা ও নিয়মাবলী'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Inquire About Admission',
        bn: 'ভর্তি সংক্রান্ত পরামর্শ চান'
      }
    }
  },
  {
    id: 'rehabilitation-assistance',
    question: {
      en: 'Does the organization offer rehabilitation assistance?',
      bn: 'প্রতিষ্ঠানটি কি পুনর্বাসন সহায়তা প্রদান করে?'
    },
    answer: {
      en: 'Yes. SORC offers structured rehabilitation assistance focusing on gentle physical therapy, mobility maintenance, safe movement guidance, and recovery coordination. Our objective is to help elderly residents maintain maximum personal independence, physical comfort, and daily functional dignity.',
      bn: 'হ্যাঁ, সোনাভান সেন্টারে নিয়মিত পুনর্বাসন সহায়তা প্রদান করা হয়। এর মধ্যে রয়েছে হালকা শারীরিক কসরত, ফিজিওথেরাপি সমন্বয়, নিরাপদ চলাফেরার দিকনির্দেশনা এবং আরোগ্য পরিচর্যা—যাতে প্রবীণ বাসিন্দারা সর্বোচ্চ মাত্রায় স্বাবলম্বী, ব্যথামুক্ত এবং মর্যাদাপূর্ণ জীবনযাপন করতে পারেন।'
    },
    category: {
      en: 'Rehabilitation',
      bn: 'পুনর্বাসন সেবা'
    },
    link: {
      href: '#rehabilitation-assistance',
      label: {
        en: 'View Rehabilitation Details',
        bn: 'পুনর্বাসন বিবরণ দেখুন'
      }
    }
  },
  {
    id: 'service-fees',
    question: {
      en: 'Are there any fees?',
      bn: 'সেবা গ্রহণের জন্য কোনো ফি বা খরচ রয়েছে কি?'
    },
    answer: {
      en: 'Sonavan Old Rehabilitation Center is a non-profit humanitarian foundation funded through philanthropic donations and our "Sponsor a Grandparent" recurring program. Destitute and vulnerable elders are cared for without cost. For family-supported residents, contributions, or specific financial arrangements, please contact our administrative desk directly so our team can provide transparent, official guidance.',
      bn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র একটি অলাভজনক মানবসেবামূলক প্রতিষ্ঠান, যা মানবিক অনুদান এবং "স্পন্সর এ গ্র্যান্ডপ্যারেন্ট" তহবিলের সাহায্যে পরিচালিত হয়। নিঃস্ব ও অসহায় প্রবীণদের সম্পূর্ণ বিনামূল্যে সেবা দেওয়া হয়। পারিবারিক সহায়তাযুক্ত প্রবীণদের কোনো অনুদান বা বিশেষ ব্যবস্থার বিষয়ে নিশ্চিত তথ্যের জন্য অনুগ্রহ করে সরাসরি আমাদের প্রশাসনিক ডেস্কে যোগাযোগ করুন।'
    },
    category: {
      en: 'Financial Policy',
      bn: 'আর্থিক নীতিমালা'
    },
    link: {
      href: '/donate',
      label: {
        en: 'Learn About Sponsorship',
        bn: 'স্পন্সরশিপ সম্পর্কে জানুন'
      }
    }
  },
  {
    id: 'family-members-info',
    question: {
      en: 'How can family members learn more?',
      bn: 'পরিবারের সদস্যরা কীভাবে বিস্তারিত তথ্য জানতে পারেন?'
    },
    answer: {
      en: 'Family members and relatives are welcome to speak with our care administrators via phone (+880 1700-000000), review our website documentation, or request an in-person orientation meeting at our Gazipur center. You can also send detailed questions via our online contact form for prompt assistance.',
      bn: 'পরিবারের সদস্য বা আত্মীয়-স্বজনরা আমাদের হটলাইনে (+৮৮০ ১৭০০-০০০০০০) ফোন করে কথা বলতে পারেন, ওয়েবসাইটের সুযোগ-সুবিধা ও সেবা বিবরণী দেখতে পারেন অথবা গাজীপুর কেন্দ্রে এসে সরাসরি পরামর্শ করতে পারেন। এছাড়া যোগাযোগ ফর্মে লিখে পাঠালেও আমাদের দল দ্রুত সহায়তা প্রদান করবে।'
    },
    category: {
      en: 'Family Support',
      bn: 'পারিবারিক সহায়তা'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Connect With Care Team',
        bn: 'কেয়ার টিমের সাথে কথা বলুন'
      }
    }
  },
  {
    id: 'arrange-a-visit',
    question: {
      en: 'How can I arrange a visit?',
      bn: 'আমি কীভাবে কেন্দ্রে এসে সরাসরি দেখা করতে পারি?'
    },
    answer: {
      en: 'Our campus is located at Sonavan Tech, Gazipur Sadar, Gazipur-1700. Official visitor hours for donors, family sponsors, and well-wishers are every Friday and Saturday between 10:00 AM and 4:00 PM. We kindly ask you to contact us beforehand via phone or the Contact page so our team can schedule your arrival and ensure residents are comfortably prepared.',
      bn: 'আমাদের ক্যাম্পাস গাজীপুর সদর, গাজীপুর-১৭০০ তে অবস্থিত। শুভাকাঙ্ক্ষী, দাতা ও স্বজনদের জন্য পরিদর্শনের নির্ধারিত সময় প্রতি শুক্রবার ও শনিবার সকাল ১০:০০ টা থেকে বিকাল ৪:০০ টা পর্যন্ত। প্রবীণদের দৈনন্দিন সুবিধার স্বার্থে এবং পরিদর্শনের সঠিক প্রস্তুতির জন্য পূর্বে ফোন করে বা যোগাযোগ পেজের মাধ্যমে সময় নিশ্চিত করার অনুরোধ করা হচ্ছে।'
    },
    category: {
      en: 'Campus Visits',
      bn: 'ক্যাম্পাস পরিদর্শন'
    },
    link: {
      href: '/contact',
      label: {
        en: 'Schedule Campus Visit',
        bn: 'পরিদর্শনের সময় নির্ধারণ করুন'
      }
    }
  }
];
