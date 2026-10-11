const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getDb, mockDb } = require('./db/mongo');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    organization: 'Sonavan Old Rehabilitation Center (SORC)',
    banglaName: 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    timestamp: new Date()
  });
});

// 2. Residents API (Elderly Rehabilitation)
app.get('/api/residents', async (req, res) => {
  try {
    const db = await getDb();
    if (db) {
      const residents = await db.collection('residents').find({}).toArray();
      return res.json(residents);
    }
    return res.json(mockDb.residents);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: mockDb.residents });
  }
});

app.get('/api/residents/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const db = await getDb();
    if (db) {
      const resident = await db.collection('residents').findOne({ slug });
      if (resident) return res.json(resident);
    }
    const resident = mockDb.residents.find(r => r.slug === slug);
    if (resident) return res.json(resident);
    res.status(404).json({ error: 'Resident profile not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Campaigns API
app.get('/api/campaigns', async (req, res) => {
  try {
    const db = await getDb();
    if (db) {
      const campaigns = await db.collection('campaigns').find({}).toArray();
      return res.json(campaigns);
    }
    return res.json(mockDb.campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: mockDb.campaigns });
  }
});

// 4. Transparency Logs API
app.get('/api/transparency', async (req, res) => {
  try {
    const db = await getDb();
    if (db) {
      const logs = await db.collection('transparency_logs').find({}).toArray();
      return res.json(logs);
    }
    return res.json(mockDb.transparencyLogs);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: mockDb.transparencyLogs });
  }
});

// 5. Donation Submission API (Backend Ready for SSLCommerz / Stripe)
app.post('/api/donate', async (req, res) => {
  try {
    const { donorName, donorEmail, donorPhone, amount, currency, category, residentId, gateway } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: 'Valid donation amount is required' });
    }

    const donationRecord = {
      donorName: donorName || 'Anonymous Donor',
      donorEmail: donorEmail || 'N/A',
      donorPhone: donorPhone || 'N/A',
      amount: Number(amount),
      currency: currency || 'BDT',
      category: category || 'general',
      residentId: residentId || null,
      gateway: gateway || 'SSLCommerz',
      transactionId: `TXN-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'completed',
      receiptUrl: `/receipts/SORC-REC-${Date.now()}.pdf`,
      createdAt: new Date()
    };

    const db = await getDb();
    if (db) {
      await db.collection('donations').insertOne(donationRecord);
    }

    res.status(201).json({
      success: true,
      message: 'Donation processed successfully. Thank you for supporting SORC!',
      donation: donationRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 6. Volunteer Application Submission API
app.post('/api/volunteer', async (req, res) => {
  try {
    const { fullName, email, phone, occupation, skills, district, motivation } = req.body;
    
    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Full name, email, and phone are required' });
    }

    const volunteerRecord = {
      fullName,
      email,
      phone,
      occupation: occupation || 'Other',
      skills: skills || [],
      district: district || 'Dhaka',
      motivation: motivation || '',
      status: 'pending',
      createdAt: new Date()
    };

    const db = await getDb();
    if (db) {
      await db.collection('volunteers').insertOne(volunteerRecord);
    }

    res.status(201).json({
      success: true,
      message: 'Volunteer application submitted successfully. We will reach out soon!',
      volunteer: volunteerRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 7. General Inquiry API
app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
    }

    const inquiryRecord = {
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date()
    };

    const db = await getDb();
    if (db) {
      await db.collection('inquiries').insertOne(inquiryRecord);
    }

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. SORC team will reply shortly.',
      inquiry: inquiryRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Only listen on port when run directly (local dev / standalone node), not when imported as a serverless function
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`SORC API Server running on port ${PORT}`);
  });
}

module.exports = app;
