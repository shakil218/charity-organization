import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, isDbConnected, getDb } from './db/connect.js';
import { mockResidents, mockCampaigns, mockDisbursements } from './db/seed.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));

app.use(express.json());

// Initialize DB Connection
let db = null;
connectDB().then((database) => {
  db = database;
});

// Store donations in-memory if DB is offline, or insert into MongoDB if connected
const localDonationsStore = [];

// 1. Health check & System Status
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Elderly Care & Charity API',
    databaseConnected: isDbConnected(),
    timestamp: new Date().toISOString()
  });
});

// 2. Elderly Residents API
app.get('/api/v1/residents', async (req, res) => {
  try {
    if (isDbConnected() && db) {
      const residents = await db.collection('residents').find({}).toArray();
      return res.json({ success: true, data: residents.length ? residents : mockResidents });
    }
    return res.json({ success: true, data: mockResidents });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message, data: mockResidents });
  }
});

app.get('/api/v1/residents/:id', async (req, res) => {
  const { id } = req.params;
  const resident = mockResidents.find(r => r.id === id);
  if (!resident) {
    return res.status(404).json({ success: false, message: 'Resident profile not found' });
  }
  res.json({ success: true, data: resident });
});

// 3. Campaigns API
app.get('/api/v1/campaigns', async (req, res) => {
  try {
    if (isDbConnected() && db) {
      const campaigns = await db.collection('campaigns').find({}).toArray();
      return res.json({ success: true, data: campaigns.length ? campaigns : mockCampaigns });
    }
    return res.json({ success: true, data: mockCampaigns });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message, data: mockCampaigns });
  }
});

// 4. Donation Processing Endpoint
app.post('/api/v1/donations', async (req, res) => {
  try {
    const { donorName, email, amount, isRecurring, type, targetId, paymentMethod } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Valid donation amount is required' });
    }

    const donationRecord = {
      id: `don-${Date.now()}`,
      donorName: donorName || 'Generous Donor (Anonymous)',
      email: email || 'donor@example.org',
      amount: Number(amount),
      isRecurring: Boolean(isRecurring),
      type: type || 'campaign', // 'campaign' or 'resident'
      targetId: targetId || 'general',
      paymentMethod: paymentMethod || 'Stripe / SSLCommerz Simulation',
      status: 'Completed',
      createdAt: new Date().toISOString(),
      transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
    };

    if (isDbConnected() && db) {
      await db.collection('donations').insertOne(donationRecord);
    } else {
      localDonationsStore.push(donationRecord);
    }

    res.status(201).json({
      success: true,
      message: 'Donation processed successfully! Thank you for your generosity.',
      data: donationRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. Transparency & Disbursements
app.get('/api/v1/transparency/disbursements', (req, res) => {
  res.json({
    success: true,
    data: mockDisbursements,
    totalDisbursed: mockDisbursements.reduce((sum, item) => sum + item.amount, 0)
  });
});

// 6. Impact Stats Summary
app.get('/api/v1/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      totalElderlyCared: 45,
      familiesHelped: 1250,
      totalFundsRaised: 48500,
      transparencyScore: '100% Verified',
      activeCampaignsCount: mockCampaigns.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Elderly Care & Charity Backend API listening on http://localhost:${PORT}`);
});
