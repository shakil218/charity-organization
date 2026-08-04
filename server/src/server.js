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
const localDonationsStore = [
  {
    id: "don-901",
    donorName: "Tanvir Ahsan",
    email: "donor@example.org",
    amount: 150,
    isRecurring: true,
    type: "resident",
    targetId: "res-001",
    targetName: "Dadi Amma Rahima",
    paymentMethod: "Stripe USD",
    status: "Completed",
    createdAt: "2026-07-15",
    transactionId: "TXN-DON89410"
  },
  {
    id: "don-902",
    donorName: "Tanvir Ahsan",
    email: "donor@example.org",
    amount: 250,
    isRecurring: false,
    type: "campaign",
    targetId: "camp-001",
    targetName: "Warm Winter Blankets Campaign",
    paymentMethod: "SSLCommerz bKash",
    status: "Completed",
    createdAt: "2026-07-28",
    transactionId: "TXN-DON89411"
  }
];

let localBeneficiariesStore = [...mockBeneficiaries];
let localResidentsStore = [...mockResidents];
let localCampaignsStore = [...mockCampaigns];
let localDisbursementsStore = [...mockDisbursements];
let localVisitsStore = [
  {
    id: "v-101",
    residentId: "res-001",
    residentName: "Dadi Amma Rahima",
    visitorName: "Sultana Parveen",
    visitorEmail: "sultana@example.com",
    visitorPhone: "+880 1711-223344",
    visitDate: "2026-08-10",
    timeSlot: "10:00 AM - 12:00 PM",
    purpose: "Reading storybooks & garden walk",
    visitorType: "Volunteer Visitor",
    status: "Confirmed"
  }
];

let localMedicalRecords = [
  {
    id: "med-1",
    residentId: "res-001",
    date: "2026-07-28",
    title: "Monthly Hypertension & Joint Medicine Batch",
    cost: 45,
    doctor: "Dr. Anisur Rahman",
    notes: "Amlodipine 5mg & Osteo-joint supplements provided for August.",
    receiptUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "med-2",
    residentId: "res-002",
    date: "2026-07-15",
    title: "Cataract Pre-Surgery Ophthalmic Checkup",
    cost: 85,
    doctor: "Dr. Farhana Yasmin",
    notes: "Eye pressure normal. Surgery scheduled for next month.",
    receiptUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
  }
];

let localVolunteers = [
  {
    email: "volunteer@example.org",
    name: "Tanvir Ahsan",
    hoursLogged: 24,
    role: "Senior Companion & Relief Coordinator",
    certificateId: "CERT-2026-8941",
    issuedDate: "2026-07-31"
  }
];

let localNotificationsLog = [
  {
    id: "notif-1",
    recipient: "All Monthly Grandparent Sponsors",
    channel: "Email & SMS",
    subject: "August Health Update & Grandparent Story",
    sentAt: "2026-08-01",
    status: "Delivered (148 Donors)"
  }
];

// 1. Health check & System Status
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Elderly Care & Charity API',
    databaseConnected: isDbConnected(),
    timestamp: new Date().toISOString()
  });
});

// 2. Donor Profile & Impact History API
app.get('/api/v1/donor/history/:email', (req, res) => {
  const { email } = req.params;
  const donorDonations = localDonationsStore.filter(d => d.email.toLowerCase() === email.toLowerCase());
  
  const totalDonated = donorDonations.reduce((sum, d) => sum + d.amount, 0);
  const activeSponsorships = donorDonations.filter(d => d.isRecurring);

  res.json({
    success: true,
    data: {
      email,
      donorName: donorDonations.length ? donorDonations[0].donorName : email.split('@')[0],
      totalDonated: totalDonated || 400,
      donationsCount: donorDonations.length || 2,
      activeSponsorshipsCount: activeSponsorships.length || 1,
      taxReceipts: donorDonations.length ? donorDonations : localDonationsStore
    }
  });
});

// 3. Admin Notification Dispatch API
app.post('/api/v1/admin/notifications/send', (req, res) => {
  const newNotif = {
    id: `notif-${Date.now()}`,
    recipient: req.body.recipient || 'All Registered Donors',
    channel: req.body.channel || 'Email & Firebase SMS',
    subject: req.body.subject,
    sentAt: new Date().toISOString().split('T')[0],
    status: 'Delivered'
  };

  localNotificationsLog.unshift(newNotif);
  res.status(201).json({ success: true, message: 'Notification broadcast dispatched successfully!', data: newNotif });
});

app.get('/api/v1/admin/notifications', (req, res) => {
  res.json({ success: true, data: localNotificationsLog });
});

// 4. Elderly Residents API
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

// 5. Visit Scheduling API
app.post('/api/v1/residents/schedule-visit', async (req, res) => {
  try {
    const newVisit = {
      id: `v-${Date.now()}`,
      residentId: req.body.residentId,
      residentName: req.body.residentName || 'Elderly Resident',
      visitorName: req.body.visitorName,
      visitorEmail: req.body.visitorEmail,
      visitorPhone: req.body.visitorPhone,
      visitDate: req.body.visitDate,
      timeSlot: req.body.timeSlot || '10:00 AM - 12:00 PM',
      purpose: req.body.purpose,
      visitorType: req.body.visitorType || 'Volunteer',
      status: 'Confirmed'
    };

    localVisitsStore.unshift(newVisit);
    if (isDbConnected() && db) {
      await db.collection('visits').insertOne(newVisit);
    }

    res.status(201).json({ success: true, message: 'Visit scheduled successfully!', data: newVisit });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/residents/visits', (req, res) => {
  res.json({ success: true, data: localVisitsStore });
});

// 6. Medical Record & Expense Tracker API
app.get('/api/v1/residents/:id/medical-records', (req, res) => {
  const { id } = req.params;
  const records = localMedicalRecords.filter(m => m.residentId === id);
  res.json({ success: true, data: records });
});

app.post('/api/v1/residents/:id/medical-records', (req, res) => {
  const { id } = req.params;
  const newRecord = {
    id: `med-${Date.now()}`,
    residentId: id,
    date: new Date().toISOString().split('T')[0],
    title: req.body.title,
    cost: Number(req.body.cost) || 0,
    doctor: req.body.doctor || 'Attending Physician',
    notes: req.body.notes,
    receiptUrl: req.body.receiptUrl || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  };

  localMedicalRecords.unshift(newRecord);
  res.status(201).json({ success: true, message: 'Medical record logged!', data: newRecord });
});

// 7. Volunteer Hour & Certificate API
app.get('/api/v1/volunteers/certificate/:email', (req, res) => {
  const { email } = req.params;
  const volunteer = localVolunteers.find(v => v.email.toLowerCase() === email.toLowerCase()) || {
    email: email,
    name: email.split('@')[0].toUpperCase(),
    hoursLogged: 16,
    role: "Community Relief Volunteer",
    certificateId: `CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    issuedDate: new Date().toISOString().split('T')[0]
  };

  res.json({ success: true, data: volunteer });
});

// 8. Campaigns API
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

// 9. Beneficiary Application & Verification Workflow
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
    res.status(500).json({ success: false, error: error.message, data: localBeneficiariesStore });
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

// 10. Donation Processing Endpoint
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
      createdAt: new Date().toISOString().split('T')[0],
      transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
    };

    if (isDbConnected() && db) {
      await db.collection('donations').insertOne(donationRecord);
    }
    localDonationsStore.unshift(donationRecord);

    res.status(201).json({
      success: true,
      message: 'Donation processed successfully! Thank you for your generosity.',
      data: donationRecord
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 11. Transparency & Financial Report Breakdown
app.get('/api/v1/transparency/disbursements', (req, res) => {
  res.json({
    success: true,
    data: localDisbursementsStore,
    totalDisbursed: localDisbursementsStore.reduce((sum, item) => sum + item.amount, 0)
  });
});

app.get('/api/v1/transparency/financial-summary', (req, res) => {
  res.json({
    success: true,
    data: {
      fiscalYear: "2025-2026",
      totalRaised: 48500,
      totalDisbursed: 42100,
      breakdown: [
        { category: "Elderly Housing & Medical Care", amount: 24500, percent: 58 },
        { category: "Seasonal Relief Aid (Blankets/Food)", amount: 12600, percent: 30 },
        { category: "Clean Water & Infrastructure", amount: 5000, percent: 12 }
      ],
      auditorStatus: "Fully Certified (Zero Leakage)",
      auditorName: "Standard & Global NGO Audit Board"
    }
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

// 12. Impact Stats & Dashboard Overview Summary
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
      activeCampaignsCount: localCampaignsStore.length,
      scheduledVisitsCount: localVisitsStore.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Elderly Care & Charity Backend API listening on http://localhost:${PORT}`);
});
