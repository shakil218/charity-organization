import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, isDbConnected, getDb } from './db/connect.js';
import { mockResidents, mockCampaigns, mockDisbursements, mockBeneficiaries } from './db/seed.js';

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

// In-memory stores fallback
const localDonationsStore = [];
let localBeneficiariesStore = [...mockBeneficiaries];
let localResidentsStore = [...mockResidents];
let localCampaignsStore = [...mockCampaigns];
let localDisbursementsStore = [...mockDisbursements];

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
      return res.json({ success: true, data: residents.length ? residents : localResidentsStore });
    }
    return res.json({ success: true, data: localResidentsStore });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message, data: localResidentsStore });
  }
});

app.get('/api/v1/residents/:id', async (req, res) => {
  const { id } = req.params;
  const resident = localResidentsStore.find(r => r.id === id);
  if (!resident) {
    return res.status(404).json({ success: false, message: 'Resident profile not found' });
  }
  res.json({ success: true, data: resident });
});

// Admin Add Resident
app.post('/api/v1/admin/residents', async (req, res) => {
  try {
    const newResident = {
      id: `res-${Date.now()}`,
      ...req.body,
      currentSponsorship: 0,
      sponsorsCount: 0,
      status: 'Needs Sponsorship',
      admissionDate: new Date().toISOString().split('T')[0]
    };

    if (isDbConnected() && db) {
      await db.collection('residents').insertOne(newResident);
    }
    localResidentsStore.unshift(newResident);

    res.status(201).json({ success: true, message: 'New elderly resident profile registered!', data: newResident });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Campaigns API
app.get('/api/v1/campaigns', async (req, res) => {
  try {
    if (isDbConnected() && db) {
      const campaigns = await db.collection('campaigns').find({}).toArray();
      return res.json({ success: true, data: campaigns.length ? campaigns : localCampaignsStore });
    }
    return res.json({ success: true, data: localCampaignsStore });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message, data: localCampaignsStore });
  }
});

// Admin Add Campaign
app.post('/api/v1/admin/campaigns', async (req, res) => {
  try {
    const newCampaign = {
      id: `camp-${Date.now()}`,
      ...req.body,
      raisedAmount: 0,
      donorsCount: 0,
      status: 'Active'
    };

    if (isDbConnected() && db) {
      await db.collection('campaigns').insertOne(newCampaign);
    }
    localCampaignsStore.unshift(newCampaign);

    res.status(201).json({ success: true, message: 'Campaign launched successfully!', data: newCampaign });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Beneficiary Application & Verification Workflow
app.post('/api/v1/beneficiaries/apply', async (req, res) => {
  try {
    const newApplication = {
      id: `ben-${Date.now()}`,
      fullName: req.body.fullName,
      nidOrId: req.body.nidOrId,
      phone: req.body.phone,
      address: req.body.address,
      category: req.body.category || 'General Aid',
      amountRequested: Number(req.body.amountRequested) || 100,
      reason: req.body.reason,
      status: 'Pending Verification',
      verificationBadge: 'Unverified',
      submittedAt: new Date().toISOString().split('T')[0]
    };

    if (isDbConnected() && db) {
      await db.collection('beneficiaries').insertOne(newApplication);
    }
    localBeneficiariesStore.unshift(newApplication);

    res.status(201).json({
      success: true,
      message: 'Help request submitted! Verification staff will inspect your case within 48 hours.',
      data: newApplication
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Admin List Beneficiary Applications
app.get('/api/v1/admin/beneficiaries', async (req, res) => {
  try {
    if (isDbConnected() && db) {
      const beneficiaries = await db.collection('beneficiaries').find({}).toArray();
      return res.json({ success: true, data: beneficiaries.length ? beneficiaries : localBeneficiariesStore });
    }
    return res.json({ success: true, data: localBeneficiariesStore });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message, data: localBeneficiariesStore });
  }
});

// Admin Verify & Approve/Reject Beneficiary
app.patch('/api/v1/admin/beneficiaries/:id/verify', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, verificationBadge } = req.body;

    let updatedItem = null;
    localBeneficiariesStore = localBeneficiariesStore.map((b) => {
      if (b.id === id) {
        updatedItem = {
          ...b,
          status: status || 'Verified & Approved',
          verificationBadge: verificationBadge || 'Field KYC Verified'
        };
        return updatedItem;
      }
      return b;
    });

    if (isDbConnected() && db) {
      await db.collection('beneficiaries').updateOne(
        { id },
        { $set: { status, verificationBadge } }
      );
    }

    res.json({ success: true, message: `Beneficiary ${status}!`, data: updatedItem });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Donation Processing Endpoint
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
      type: type || 'campaign',
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

// 6. Transparency & Disbursements
app.get('/api/v1/transparency/disbursements', (req, res) => {
  res.json({
    success: true,
    data: localDisbursementsStore,
    totalDisbursed: localDisbursementsStore.reduce((sum, item) => sum + item.amount, 0)
  });
});

app.post('/api/v1/admin/disbursements', async (req, res) => {
  try {
    const newDisbursement = {
      id: `disb-${Date.now()}`,
      campaignTitle: req.body.campaignTitle,
      beneficiary: req.body.beneficiary,
      amount: Number(req.body.amount),
      date: new Date().toISOString().split('T')[0],
      proofUrl: req.body.proofUrl || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80',
      approvedBy: 'Admin Board',
      status: 'Verified & Delivered'
    };

    localDisbursementsStore.unshift(newDisbursement);
    if (isDbConnected() && db) {
      await db.collection('disbursements').insertOne(newDisbursement);
    }

    res.status(201).json({ success: true, message: 'Disbursement proof logged to public transparency ledger!', data: newDisbursement });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Impact Stats & Dashboard Overview Summary
app.get('/api/v1/stats', (req, res) => {
  const pendingApprovalsCount = localBeneficiariesStore.filter(b => b.status === 'Pending Verification').length;
  const totalDonationAmount = localDonationsStore.reduce((sum, d) => sum + d.amount, 0) + 48500;

  res.json({
    success: true,
    data: {
      totalElderlyCared: localResidentsStore.length + 42,
      familiesHelped: 1250 + localBeneficiariesStore.filter(b => b.status === 'Verified & Approved').length,
      totalFundsRaised: totalDonationAmount,
      pendingBeneficiariesCount: pendingApprovalsCount,
      transparencyScore: '100% Verified',
      activeCampaignsCount: localCampaignsStore.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Elderly Care & Charity Backend API listening on http://localhost:${PORT}`);
});
