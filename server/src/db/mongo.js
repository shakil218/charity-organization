const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/sorc_db';
const client = new MongoClient(uri);

let dbInstance = null;

// Seed Data Fallback for Development & Demonstration
const mockDb = {
  residents: [
    {
      _id: 'res_001',
      slug: 'rahima-begum',
      name: { en: 'Rahima Begum', bn: 'রহিমা বেগম' },
      age: 78,
      story: {
        en: 'Lost family during severe river erosion. Needs continuous hypertension care and daily physiotherapy.',
        bn: 'নদী ভাঙনে সব হারিয়ে নিঃস্ব। নিয়মিত রক্তচাপ পরীক্ষা ও ফিজিওথেরাপির প্রয়োজন।'
      },
      medicalNeeds: ['Hypertension', 'Physiotherapy', 'Cataract Care'],
      monthlyCostBDT: 15000,
      sponsoredAmountBDT: 10000,
      isFullySponsored: false,
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
      joinedDate: '2023-05-12'
    },
    {
      _id: 'res_002',
      slug: 'abdul-jalil',
      name: { en: 'Abdul Jalil', bn: 'আব্দুল জলিল' },
      age: 82,
      story: {
        en: 'Former freedom fighter living without family support. Enjoys gardening and telling historical stories.',
        bn: 'একাকী জীবনযাপন করা প্রবীণ মুক্তিযোদ্ধা। বাগান করা ও গল্প বলতে ভালোবাসেন।'
      },
      medicalNeeds: ['Diabetes Care', 'Arthritis Relief'],
      monthlyCostBDT: 18000,
      sponsoredAmountBDT: 18000,
      isFullySponsored: true,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      joinedDate: '2022-11-01'
    },
    {
      _id: 'res_003',
      slug: 'sufia-khatun',
      name: { en: 'Sufia Khatun', bn: 'সুফিয়া খাতুন' },
      age: 74,
      story: {
        en: 'Requires specialized Alzheimer care and nutritious meals with 24/7 attendant support.',
        bn: 'ডিমেনশিয়া ও স্মৃতিভ্রম সংক্রান্ত সমস্যা রয়েছে। সার্বক্ষণিক সেবিকা ও বিশেষ যত্ন প্রয়োজন।'
      },
      medicalNeeds: ['Memory Care', 'Nutritional Support'],
      monthlyCostBDT: 20000,
      sponsoredAmountBDT: 7500,
      isFullySponsored: false,
      imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
      joinedDate: '2024-01-15'
    }
  ],
  campaigns: [
    {
      _id: 'camp_001',
      title: { en: 'Winter Warmth & Shelter Blanket Fund', bn: 'শীতকালীন উষ্ণতা ও কম্বল তহবিল' },
      targetBDT: 250000,
      raisedBDT: 185000,
      description: {
        en: 'Providing heavy winter blankets, room heaters, and warm clothing for 120 elderly residents.',
        bn: '১২০ জন প্রবীণ বাসিন্দার জন্য উষ্ণ কম্বল, হিটার ও শীতবস্ত্র প্রদান।'
      },
      endDate: '2026-12-31'
    },
    {
      _id: 'camp_002',
      title: { en: 'Surgical Emergency & Eye Care Camp', bn: 'জরুরি অস্ত্রোপচার ও চক্ষু চিকিৎসা ক্যাম্প' },
      targetBDT: 500000,
      raisedBDT: 340000,
      description: {
        en: 'Cataract surgeries and free eye checkups for 50 impoverished seniors.',
        bn: '৫০ জন সুবিধাবঞ্চিত প্রবীণের বিনামূল্যে ছানি অপারেশন ও চোখের যত্ন।'
      },
      endDate: '2026-11-30'
    }
  ],
  transparencyLogs: [
    {
      _id: 'log_001',
      title: { en: 'Monthly Medical Supplies & Doctor Fees - September', bn: 'সেপ্টেম্বর মাসের ওষুধ ও চিকিৎসক সেবা খরচ' },
      date: '2026-09-30',
      totalSpentBDT: 142000,
      category: 'medicine',
      proofImages: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600']
    },
    {
      _id: 'log_002',
      title: { en: 'Organic Food & Nutrition Stock Procurement', bn: 'পুষ্টিকর খাদ্যসামগ্রী ও ফলমূল ক্রয়' },
      date: '2026-09-15',
      totalSpentBDT: 98000,
      category: 'food',
      proofImages: ['https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600']
    }
  ]
};

async function getDb() {
  if (dbInstance) return dbInstance;
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    dbInstance = client.db('sorc_db');
    return dbInstance;
  } catch (err) {
    console.warn('MongoDB connection failed, using Seed Data fallback mode:', err.message);
    return null; // Signals routes to use mockDb fallback gracefully
  }
}

module.exports = { getDb, mockDb };
