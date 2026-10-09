export type Locale = 'en' | 'bn';

export interface TranslationContent {
  orgName: string;
  orgNameBn: string;
  orgTagline: string;
  verificationBadge: string;
  nav: {
    home: string;
    about: string;
    services: string;
    facilities: string;
    team: string;
    stories: string;
    getInvolved: string;
    donate: string;
    contact: string;
    elderlyCare?: string;
    campaigns?: string;
    transparency?: string;
    volunteer?: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaSponsor: string;
    ctaDonate: string;
    stats: {
      residentsCount: string;
      residentsLabel: string;
      careHoursCount: string;
      careHoursLabel: string;
      fundAuditedCount: string;
      fundAuditedLabel: string;
    };
  };
  elderlySection: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    monthlyNeeds: string;
    raisedSoFar: string;
    fullySponsored: string;
    sponsorBtn: string;
    viewAllBtn: string;
  };
  campaignsSection: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    target: string;
    raised: string;
    daysLeft: string;
    donateBtn: string;
  };
  transparencySection: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    dateLabel: string;
    categoryLabel: string;
    auditBadge: string;
    viewProofs: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  facilitiesPage: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      status: string;
    }>;
  };
  teamPage: {
    title: string;
    subtitle: string;
    disclaimer: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      status: string;
    }>;
  };
  storiesPage: {
    title: string;
    subtitle: string;
    articles: Array<{
      title: string;
      date: string;
      category: string;
      summary: string;
    }>;
  };
  getInvolvedPage: {
    title: string;
    subtitle: string;
    volunteerTitle: string;
    partnerTitle: string;
  };
  volunteerPage: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    occupationLabel: string;
    districtLabel: string;
    skillsTitle: string;
    motivationLabel: string;
    submitBtn: string;
    successMessage: string;
  };
  donationModal: {
    title: string;
    subtitle: string;
    amountLabel: string;
    customAmountPlaceholder: string;
    frequencyLabel: string;
    oneTime: string;
    monthly: string;
    donorNameLabel: string;
    donorEmailLabel: string;
    donorPhoneLabel: string;
    gatewayLabel: string;
    anonymousCheckbox: string;
    submitBtn: string;
    successMessage: string;
    disclaimer: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    contactInfo: string;
    taxExemptBadge: string;
    copyright: string;
    disclaimerNotice: string;
  };
}

export const translations: Record<Locale, TranslationContent> = {
  en: {
    orgName: 'Sonavan Old Rehabilitation Center (SORC)',
    orgNameBn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    orgTagline: 'Restoring dignity, care, health, and social inclusion to vulnerable seniors.',
    verificationBadge: 'Notice: Official Address & Reg Details Pending Final Verification',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      facilities: 'Facilities',
      team: 'Our Team',
      stories: 'Stories & News',
      getInvolved: 'Get Involved',
      donate: 'Donate',
      contact: 'Contact Us',
      elderlyCare: 'Elderly Care',
      campaigns: 'Campaigns',
      transparency: 'Transparency',
      volunteer: 'Volunteer'
    },
    hero: {
      badge: 'Registered Nonprofit Rehabilitation Center',
      titleLine1: 'Dignified Rehabilitation & Warmth for',
      titleHighlight: 'Our Revered Seniors',
      titleLine2: 'in Bangladesh',
      subtitle: 'Sonavan Old Rehabilitation Center (SORC) is dedicated to compassionate senior care, 24/7 medical oversight, emotional healing, and community integration.',
      ctaSponsor: 'Sponsor a Senior Resident',
      ctaDonate: 'Make a Contribution',
      stats: {
        residentsCount: '120+',
        residentsLabel: 'Seniors Sheltered & Cared For',
        careHoursCount: '24/7',
        careHoursLabel: 'Medical Oversight & Nursing Support',
        fundAuditedCount: '100%',
        fundAuditedLabel: 'Audited Fund Records'
      }
    },
    elderlySection: {
      sectionBadge: 'Elderly Rehabilitation Wing',
      title: 'Sponsor a Resident’s Monthly Care',
      subtitle: 'Your recurring support covers continuous doctor consultations, daily prescribed medications, specialized nutrition, and personal caretaking.',
      monthlyNeeds: 'Monthly Living Need',
      raisedSoFar: 'Raised so far',
      fullySponsored: 'Fully Sponsored',
      sponsorBtn: 'Sponsor This Resident',
      viewAllBtn: 'View All Resident Stories'
    },
    campaignsSection: {
      sectionBadge: 'Active Relief & Medical Campaigns',
      title: 'Urgent Needs & Special Programs',
      subtitle: 'Join hands to fund critical eye surgeries, winter warming gear, and rehabilitation facility upgrades.',
      target: 'Goal Target',
      raised: 'Collected',
      daysLeft: 'Active Campaign',
      donateBtn: 'Contribute to Campaign'
    },
    transparencySection: {
      sectionBadge: '100% Auditable Operations',
      title: 'Public Expense & Impact Ledger',
      subtitle: 'We believe transparency builds deep trust. Every Taka received is accounted for with public receipts, photos, and monthly financial summaries.',
      dateLabel: 'Audit Date',
      categoryLabel: 'Category',
      auditBadge: 'Verified Expense',
      viewProofs: 'View Receipt & Verification Photos'
    },
    servicesPage: {
      title: 'Comprehensive Rehabilitation & Care Services',
      subtitle: 'Holistic physical, medical, emotional, and social support tailored to individual senior needs.',
      items: [
        {
          title: '24/7 Medical & Nursing Supervision',
          desc: 'Continuous health tracking, vitals checking, specialized doctor visits, and daily medication administration.',
          icon: 'Activity'
        },
        {
          title: 'Physiotherapy & Mobility Rehabilitation',
          desc: 'Customized therapeutic movement routines designed to maintain posture, joint strength, and independent movement.',
          icon: 'Heart'
        },
        {
          title: 'Nutritional & Organic Meal Care',
          desc: 'Doctor-curated meal plans catering to diabetic, hypertensive, and specialized geriatric diets.',
          icon: 'Utensils'
        },
        {
          title: 'Psychological & Companionship Therapy',
          desc: 'Warm emotional counseling, memory exercises, group storytelling, and intergenerational social activities.',
          icon: 'Smile'
        }
      ]
    },
    facilitiesPage: {
      title: 'Campus & Care Facilities',
      subtitle: 'Designed with elder-friendly accessibility, safety, and tranquil natural surroundings.',
      items: [
        {
          title: 'Living Quarters & Bedroom Suites',
          desc: 'Well-ventilated rooms with elder-accessible emergency call bells, non-slip flooring, and supportive bedding.',
          status: 'Operational'
        },
        {
          title: 'On-Site Clinic & Pharmacy Desk',
          desc: 'Equipped with emergency oxygen, vital monitors, first-aid tools, and essential geriatric pharmaceuticals.',
          status: 'Operational'
        },
        {
          title: 'Therapeutic Garden & Walking Trail',
          desc: 'Lush green open courtyard enabling peaceful morning walks, gardening therapy, and sunlight exposure.',
          status: 'Operational'
        }
      ]
    },
    teamPage: {
      title: 'Our Dedicated Leadership & Care Staff',
      subtitle: 'Committed individuals driving compassionate rehabilitation and operational excellence.',
      disclaimer: '[Note: Executive Board & Staff Roster Awaiting Official Organization Confirmation]',
      members: [
        {
          name: 'Executive Leadership Panel',
          role: 'Board of Trustees & Operations',
          bio: 'Guiding SORC with ethical leadership, governance transparency, and community outreach.',
          status: 'Pending Confirmation'
        },
        {
          name: 'Medical & Nursing Team',
          role: 'Geriatric Healthcare Officers',
          bio: 'Registered doctors, nurses, and physical therapists delivering 24/7 healthcare.',
          status: 'Pending Confirmation'
        }
      ]
    },
    storiesPage: {
      title: 'Stories & News Updates',
      subtitle: 'Inspiring journey notes, resident updates, and community impact highlights.',
      articles: [
        {
          title: 'Restoring Smiles: Rahima Begum’s Story of Healing',
          date: 'October 2026',
          category: 'Resident Story',
          summary: 'How dedicated physical therapy and companionship transformed the life of 78-year-old Rahima Begum.'
        },
        {
          title: 'Annual Winter Warmth Relief Initiative Launched',
          date: 'September 2026',
          category: 'News & Relief',
          summary: 'Initiating distribution of high-grade winter blankets and room warming amenities across care suites.'
        }
      ]
    },
    getInvolvedPage: {
      title: 'Get Involved with SORC',
      subtitle: 'Partner with us through volunteering, sponsorships, corporate CSR, or community advocacy.',
      volunteerTitle: 'Become a Volunteer Caregiver',
      partnerTitle: 'Corporate & Institutional Partnerships'
    },
    volunteerPage: {
      title: 'Join Us as a Volunteer Caregiver',
      subtitle: 'Spend meaningful time with our elderly residents, offer specialized medical help, or assist in organizational outreach.',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Mobile Phone Number',
      occupationLabel: 'Current Occupation',
      districtLabel: 'Home District',
      skillsTitle: 'Areas You Can Support With',
      motivationLabel: 'Why would you like to volunteer with SORC?',
      submitBtn: 'Submit Volunteer Application',
      successMessage: 'Your application has been received! Our team will contact you soon.'
    },
    donationModal: {
      title: 'Make a Lifesaving Contribution',
      subtitle: 'Support Sonavan Old Rehabilitation Center with secure online contributions.',
      amountLabel: 'Select Contribution Amount (BDT)',
      customAmountPlaceholder: 'Or enter custom amount in BDT',
      frequencyLabel: 'Donation Frequency',
      oneTime: 'One-Time Contribution',
      monthly: 'Monthly Recurring Support',
      donorNameLabel: 'Full Name',
      donorEmailLabel: 'Email Address',
      donorPhoneLabel: 'Phone / Contact Number',
      gatewayLabel: 'Payment Gateway',
      anonymousCheckbox: 'Keep my donation anonymous on public board',
      submitBtn: 'Proceed to Secure Payment',
      successMessage: 'Thank you! Your donation was recorded successfully. A confirmation will be sent shortly.',
      disclaimer: 'Note: Payment processing rails are set to sandbox integration pending organization account verification.'
    },
    footer: {
      aboutText: 'Sonavan Old Rehabilitation Center (SORC) is a compassionate nonprofit dedicated to giving homeless and elderly seniors dignity, medical treatment, and a warm family atmosphere.',
      quickLinks: 'Main Navigation',
      contactInfo: 'Contact Information',
      taxExemptBadge: 'Approved Nonprofit Rehabilitation Center',
      copyright: '© 2026 Sonavan Old Rehabilitation Center (SORC). All rights reserved.',
      disclaimerNotice: 'Disclaimer: Exact address, registration details, and staff roster subject to final organization confirmation.'
    }
  },
  bn: {
    orgName: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC)',
    orgNameBn: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    orgTagline: 'অসহায় প্রবীণদের সম্মান, স্বাস্থ্যসেবা ও সমাজের অন্তর্ভুক্তির প্রতিশ্রুতি।',
    verificationBadge: 'বিজ্ঞপ্তি: দাপ্তরিক ঠিকানা ও নিবন্ধন সংক্রান্ত তথ্য চূড়ান্ত যাচাইকরণের অপেক্ষায়',
    nav: {
      home: 'মূল পাতা',
      about: 'আমাদের কথা',
      services: 'আমাদের সেবাসমূহ',
      facilities: 'অবকাঠামো',
      team: 'আমাদের টিম',
      stories: 'গল্প ও সংবাদ',
      getInvolved: 'যুক্ত হোন',
      donate: 'দান করুন',
      contact: 'যোগাযোগ',
      elderlyCare: 'প্রবীণ সেবা',
      campaigns: 'চলতি ক্যাম্পেইন',
      transparency: 'স্বচ্ছতা ও হিসাব',
      volunteer: 'স্বেচ্ছাসেবক'
    },
    hero: {
      badge: 'নিবন্ধিত অলাভজনক প্রবীণ আবাসন ও পুনর্বাসন কেন্দ্র',
      titleLine1: 'শ্রদ্ধেয় প্রবীণদের জন্য মর্যাদাশীল সেবাময়',
      titleHighlight: 'নিরাপদ নতুন ঠিকানা',
      titleLine2: 'সোনার বাংলাদেশে',
      subtitle: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) অসহায় ও স্বজনহীন প্রবীণদের জন্য ২৪/৭ চিকিৎসা সুবিধা, পুষ্টিকর খাদ্য, মনস্তাত্ত্বিক পরিচর্যা ও সামাজিক অন্তর্ভুক্তির নিশ্চয়তা দেয়।',
      ctaSponsor: 'একজন প্রবীণের দায়িত্ব নিন',
      ctaDonate: 'অনুদানে সাহায্য করুন',
      stats: {
        residentsCount: '১২০+',
        residentsLabel: 'আশ্রয়প্রাপ্ত প্রবীণ সদস্য',
        careHoursCount: '২৪/৭',
        careHoursLabel: 'চিকিৎসা ও নার্সিং সেবা',
        fundAuditedCount: '১০০%',
        fundAuditedLabel: 'অডিটকৃত তহবিল বিবরণী'
      }
    },
    elderlySection: {
      sectionBadge: 'প্রবীণ পুনর্বাসন উইং',
      title: 'প্রবীণ পিতামাতার মাসিক সেবার স্পন্সর হোন',
      subtitle: 'আপনার নিয়মিত সহযোগিতায় ডাক্তার ফি, দৈনন্দিন ওষুধ, বিশেষ খাদ্যসামগ্রী ও সার্বক্ষণিক সেবিকার ব্যবস্থা নিশ্চিত হয়।',
      monthlyNeeds: 'মাসিক সেবা খরচ',
      raisedSoFar: 'সংগৃহীত অনুদান',
      fullySponsored: 'সম্পূর্ণ স্পন্সরপ্রাপ্ত',
      sponsorBtn: 'স্পন্সর করুন',
      viewAllBtn: 'সকল প্রবীণ সদস্যদের গল্প দেখুন'
    },
    campaignsSection: {
      sectionBadge: 'জরুরি ত্রাণ ও বিশেষ তহবিল',
      title: 'চলতি জরুরি ক্যাম্পেইনসমূহ',
      subtitle: 'প্রবীণদের বিনামূল্যে ছানি অপারেশন, শীতবস্ত্র বিতরণ ও চিকিৎসা কেন্দ্র সম্প্রসারণে বাড়িয়ে দিন আপনার সাহায্যের হাত।',
      target: 'লক্ষ্যমাত্রা',
      raised: 'সংগৃহীত',
      daysLeft: 'চলতি ক্যাম্পেইন',
      donateBtn: 'ক্যাম্পেইনে অনুদান দিন'
    },
    transparencySection: {
      sectionBadge: '১০০% স্বচ্ছ ও নিরীক্ষিত হিসাব',
      title: 'প্রকাশ্য খরচ ও অডিট ভল্ট',
      subtitle: 'আমরা বিশ্বাস করি স্বচ্ছতাই আস্থার মূল ভিত্তি। প্রতি টাকার হিসাব, ক্রয়ের ভাউচার ও ছবি ওয়েবসাইটে প্রকাশ করা হয়।',
      dateLabel: 'অডিটের তারিখ',
      categoryLabel: 'খাত',
      auditBadge: 'যাচাইকৃত খরচ',
      viewProofs: 'রসিদ ও ক্রয়ের ছবি দেখুন'
    },
    servicesPage: {
      title: 'সমন্বিত প্রবীণ পুনর্বাসন ও চিকিৎসাসেবা',
      subtitle: 'শারীরিক, মানসিক, চিকিৎসাগত ও সামাজিক চাহিদাভিত্তিক সার্বক্ষণিক পরিচর্যা।',
      items: [
        {
          title: '২৪/৭ চিকিৎসা ও নার্সিং পর্যবেক্ষণ',
          desc: 'নিয়মিত ব্লাড প্রেসার, ডায়াবেটিস পরীক্ষা, বিশেষজ্ঞ চিকিৎসকের ভিজিট ও প্রেসক্রিপশন অনুযায়ী ওষুধ প্রয়োগ।',
          icon: 'Activity'
        },
        {
          title: 'ফিজিওথেরাপি ও অঙ্গসঞ্চালন পুনর্বাসন',
          desc: 'প্রবীণদের জয়েন্ট ও পেশীর সক্ষমতা বজায় রাখতে অভিজ্ঞ ফিজিওথেরাপিস্টের নির্দেশনায় থেরাপি।',
          icon: 'Heart'
        },
        {
          title: 'পুষ্টিকর সুষম খাদ্যসামগ্রী',
          desc: 'চিকিৎসকের পরামর্শ অনুযায়ী ডায়াবেটিক ও বার্ধক্যজনিত খাদ্যাভ্যাস উপযোগী খাবার পরিবেশন।',
          icon: 'Utensils'
        },
        {
          title: 'মানসিক যত্ন ও মানসিক সাহচর্য',
          desc: 'একাকীত্ব দূরীকরণে মানসিক কাউন্সেলিং, গল্প বলা এবং সামাজিক সম্প্রীতিমূলক কার্যক্রম।',
          icon: 'Smile'
        }
      ]
    },
    facilitiesPage: {
      title: 'আমাদের ক্যাম্পাস ও অবকাঠামো',
      subtitle: 'প্রবীণবান্ধব নিরাপত্তা, পরিচ্ছন্নতা ও মনোরম প্রাকৃতিক পরিবেশ সমৃদ্ধ।',
      items: [
        {
          title: 'বাসস্থান ও বেডরুম সুট',
          desc: 'জরুরি কল বেলযুক্ত পরিচ্ছন্ন বাতাসঘেরা কক্ষ, স্লিপ-বিরোধী মেঝের ব্যবস্থা।',
          status: 'চলমান'
        },
        {
          title: 'মেডিকেল ক্লিনিক ও ফার্মেসি কর্নার',
          desc: 'জরুরি অক্সিজেন সেবা, ভাইটাল মনিটর এবং প্রয়োজনীয় ওষুধ সংরক্ষণের ব্যবস্থা।',
          status: 'চলমান'
        },
        {
          title: 'প্রাকৃতিক উন্মুক্ত উদ্যান ও হাঁটার পথ',
          desc: 'সকালের রোদ উপভোগ ও হালকা শারীরিক ব্যায়ামের জন্য মনোরম উদ্যান।',
          status: 'চলমান'
        }
      ]
    },
    teamPage: {
      title: 'আমাদের নিবেদিত টিম ও পরিচালনা পরিষদ',
      subtitle: 'প্রবীণদের সেবায় আন্তরিক ও দায়িত্বশীল ব্যক্তিবর্গের সমন্বয়।',
      disclaimer: '[বিজ্ঞপ্তি: পরিচালনা পর্ষদ ও চিকিৎসক তালিকার চূড়ান্ত অনুমোদন প্রক্রিয়াধীন]',
      members: [
        {
          name: 'পরিচালনা পর্ষদ panel',
          role: 'ট্রাস্টি বোর্ড ও প্রশাসন',
          bio: 'স্বচ্ছতা ও নৈতিক কাঠামোর মাধ্যমে প্রতিষ্ঠান পরিচালনায় নিয়োজিত।',
          status: 'যাচাইধীন'
        },
        {
          name: 'চিকিৎসক ও সেবিকা দল',
          role: 'প্রবীণ স্বাস্থ্যসেবা কর্মকর্তা',
          bio: '২৪ ঘণ্টা প্রবীণদের স্বাস্থ্য পরীক্ষা ও জরুরি চিকিৎসাসেবা প্রদানে নিবেদিত।',
          status: 'যাচাইধীন'
        }
      ]
    },
    storiesPage: {
      title: 'গল্প ও সাম্প্রতিক সংবাদ',
      subtitle: 'প্রবীণ সদস্যদের জীবনের গল্প ও প্রতিষ্ঠানের উন্নয়নমূলক খবরাখবর।',
      articles: [
        {
          title: 'রহিমা বেগমের নতুন জীবনের গল্প',
          date: 'অক্টোবর ২০২৬',
          category: 'প্রবীণ সদস্যের গল্প',
          summary: 'নিয়মিত ফিজিওথেরাপি ও ভালোবাসায় কীভাবে পুনর্জীবন পেলেন ৭৮ বছর বয়সী রহিমা বেগম।'
        },
        {
          title: 'বার্ষিক শীতবস্ত্র বিতরণ কর্মসূচি শুরু',
          date: 'সেপ্টেম্বর ২০২৬',
          category: 'সংবাদ ও ত্রাণ',
          summary: 'বাসস্থান কক্ষে উষ্ণ কম্বল ও রুম হিটার বিতরণের নতুন উদ্যোগ।'
        }
      ]
    },
    getInvolvedPage: {
      title: 'আমাদের সাথে যুক্ত হোন',
      subtitle: 'স্বেচ্ছাসেবা, সিএসআর অনুদান বা অভিজ্ঞতার মাধ্যমে প্রবীণদের পাশে দাঁড়ান।',
      volunteerTitle: 'স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন',
      partnerTitle: 'প্রাতিষ্ঠানিক ও করপোরেট অংশীদারিত্ব'
    },
    volunteerPage: {
      title: 'স্বেচ্ছাসেবক হিসেবে আমাদের পাশে থাকুন',
      subtitle: 'প্রবীণদের সময় দিন, চিকিৎসাসেবায় সাহায্য করুন অথবা আমাদের বিভিন্ন সামাজিক উদ্যোগে ভূমিকা রাখুন।',
      nameLabel: 'আপনার পুরো নাম',
      emailLabel: 'ইমেইল ঠিকানা',
      phoneLabel: 'মোবাইল ফোন নম্বর',
      occupationLabel: 'বর্তমান পেশা',
      districtLabel: 'নিজ জেলা',
      skillsTitle: 'যেসব বিষয়ে সাহায্য করতে পারেন',
      motivationLabel: 'কেন আপনি SORC-এর সাথে যুক্ত হতে চান?',
      submitBtn: 'আবেদন জমা দিন',
      successMessage: 'আপনার আবেদনটি গৃহীত হয়েছে! খুব শিগগিরই আমাদের টিম আপনার সাথে যোগাযোগ করবে।'
    },
    donationModal: {
      title: 'আপনার কল্যাণময় অনুদান পাঠান',
      subtitle: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের কার্যক্রমে নিরাপদ ও স্বাচ্ছন্দ্যময় অনুদান পাঠান।',
      amountLabel: 'অনুদানের পরিমাণ নির্বাচন করুন (টাকা)',
      customAmountPlaceholder: 'অথবা পছন্দের টাকার পরিমাণ লিখুন',
      frequencyLabel: 'অনুদানের ধরন',
      oneTime: 'এককালীন অনুদান',
      monthly: 'মাসিক নিয়মিত সাহায্য',
      donorNameLabel: 'আপনার নাম',
      donorEmailLabel: 'ইমেইল ঠিকানা',
      donorPhoneLabel: 'মোবাইল / যোগাযোগ নম্বর',
      gatewayLabel: 'পেমেন্ট গেটওয়ে',
      anonymousCheckbox: 'পাবলিক বোর্ডে নাম গোপন রাখতে চাই',
      submitBtn: 'নিরাপদ পেমেন্টে এগিয়ে যান',
      successMessage: 'অসংখ্য ধন্যবাদ! আপনার অনুদান সফলভাবে নিবন্ধিত হয়েছে।',
      disclaimer: 'বিজ্ঞপ্তি: পেমেন্ট ব্যবস্থাটি স্যান্ডবক্স মোডে রয়েছে যা ব্যাংক হিসাব চূড়ান্ত অনুমোদনের পর চালু হবে।'
    },
    footer: {
      aboutText: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) একটি মানবিক অলাভজনক প্রতিষ্ঠান যা স্বজনহীন ও অসহায় প্রবীণদের বাসস্থান, চিকিৎসা ও সম্মানজনক জীবন উপহার দিতে কাজ করছে।',
      quickLinks: 'মূল নেভিগেশন',
      contactInfo: 'যোগাযোগের তথ্য',
      taxExemptBadge: 'অনুমোদিত অলাভজনক পুনর্বাসন কেন্দ্র',
      copyright: '© ২০২৬ সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC)। সর্বস্বত্ব সংরক্ষিত।',
      disclaimerNotice: 'বিজ্ঞপ্তি: প্রতিষ্ঠানের চূড়ান্ত অনুমোদন ও দাপ্তরিক যাচাইকরণ সাপেক্ষে তথ্যাবলী নিয়মিত হালনাগাদ করা হবে।'
    }
  }
};
