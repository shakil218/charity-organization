import { ValueCardItem } from './types';

/**
 * Default copy and bilingual content for the Services Overview Section.
 * Strictly adheres to foundational philosophy without claiming unverified programs.
 */
export const DEFAULT_SERVICES_OVERVIEW_DATA = {
  eyebrow: {
    en: 'HOW WE HELP',
    bn: 'আমাদের সেবামূলক ভাবনা'
  },
  heading: {
    en: 'Support Built Around Dignity and Respect',
    bn: 'মর্যাদা ও শ্রদ্ধাবোধের ভিত্তিতে গড়ে ওঠা সহায়তা'
  },
  description: {
    en: 'Older adults deserve to be treated with dignity, listened to with care, and included in their communities. Our services page explains the kinds of support visitors can learn about through Sonavan Old Rehabilitation Center.',
    bn: 'প্রতিটি প্রবীণ মানুষ শ্রদ্ধা ও মর্যাদাপূর্ণ আচরণ পাওয়ার যোগ্য; তাদের কথা যত্নসহকারে শোনা এবং সমাজে তাদের সক্রিয় অন্তর্ভুক্তি নিশ্চিত করা আমাদের দায়িত্ব। সোনাভান বয়স্ক পুনর্বাসন কেন্দ্রের মাধ্যমে সম্ভাব্য যেসব মানবিক সহায়তা সম্পর্কে জানা যায়, তা এখানে তুলে ধরা হয়েছে।'
  },
  secondaryDescription: {
    en: 'These foundational principles serve as our guiding service philosophy. As our initiatives develop, all activities remain anchored in human warmth, ethical accountability, and personal well-being.',
    bn: 'এই মূলনীতিগুলো আমাদের সামগ্রিক সেবা দর্শনের দিকনির্দেশক হিসেবে কাজ করে। সংস্থার ভবিষ্যৎ যেকোনো কার্যক্রম প্রবীণদের আন্তরিক মানবিক স্পর্শ, নৈতিক স্বচ্ছতা এবং ব্যক্তিগত প্রশান্তির ভিত্তিতে পরিচালিত হয়।'
  },
  valueCards: [
    {
      id: 'respect-needs',
      title: {
        en: 'Respect Individual Needs',
        bn: 'ব্যক্তিগত চাহিদার প্রতি শ্রদ্ধা'
      },
      description: {
        en: 'Listening attentively to each older adult\'s personal preferences, daily habits, and emotional comfort with empathy and patience.',
        bn: 'সহমর্মিতা ও ধৈর্যের সাথে প্রতিটি প্রবীণের নিজস্ব পছন্দ, প্রাত্যহিক অভ্যাস এবং মানসিক স্বস্তির প্রতি সযত্ন মনোযোগ প্রদান।'
      },
      iconName: 'HeartHandshake'
    },
    {
      id: 'encourage-connection',
      title: {
        en: 'Encourage Social Connection',
        bn: 'সামাজিক মেলবন্ধন সৃষ্টি'
      },
      description: {
        en: 'Fostering intergenerational warmth, meaningful conversations, and community engagement to alleviate feelings of loneliness.',
        bn: 'নিঃসঙ্গতা দূর করতে পারস্পরিক আন্তরিক কথোপকথন, সামাজিক মেলামেশা ও হৃদ্যতাপূর্ণ সান্নিধ্যের বিকাশ।'
      },
      iconName: 'Users'
    },
    {
      id: 'promote-dignity',
      title: {
        en: 'Promote Dignity and Inclusion',
        bn: 'মর্যাদা ও অন্তর্ভুক্তি সুরক্ষা'
      },
      description: {
        en: 'Ensuring older adults are celebrated and valued as cherished members of society within an accessible, welcoming environment.',
        bn: 'একটি নিরাপদ ও উন্মুক্ত পরিবেশে প্রবীণদের সমাজের সম্মানিত ও অপরিহার্য অংশ হিসেবে সর্বদা মূল্যায়ন করা।'
      },
      iconName: 'ShieldCheck'
    }
  ] as ValueCardItem[],
  governanceNote: {
    en: 'Guiding Philosophy: These statements outline our foundational ethical care philosophy. Specific operational schedules and programs are subject to official verification upon operationalization.',
    bn: 'দিকনির্দেশক নীতিমালা: এই মূলনীতিগুলো আমাদের প্রাতিষ্ঠানিক সেবা দর্শন ব্যক্ত করে। নির্দিষ্ট কার্যক্রম ও সময়সূচি সংস্থার আনুষ্ঠানিক অনুমোদনের ওপর নির্ভরশীল।'
  }
};
