export const mockResidents = [
  {
    id: "res-001",
    name: "Dadi Amma Rahima",
    age: 78,
    gender: "Female",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    story: "Rahima spent 40 years as a weaver before losing her family. She loves storytelling and gardening in our peaceful courtyard.",
    healthStatus: "Hypertension, mild arthritis. Requires daily medication & joint care.",
    monthlyNeed: 150,
    currentSponsorship: 100,
    sponsorsCount: 3,
    status: "Partially Sponsored",
    urgentMedicalNeed: false,
    dietaryPreference: "Soft food, low sodium",
    admissionDate: "2023-04-12"
  },
  {
    id: "res-002",
    name: "Dada Abdul Jabbar",
    age: 82,
    gender: "Male",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    story: "Former school master who taught geometry for 35 years. He spends his afternoons reading classic poetry and mentoring young visitors.",
    healthStatus: "Cataract treatment needed, routine cardiac monitoring.",
    monthlyNeed: 200,
    currentSponsorship: 200,
    sponsorsCount: 5,
    status: "Fully Sponsored",
    urgentMedicalNeed: true,
    medicalDetails: "Requires eye surgery scheduled for next month ($350 estimated).",
    dietaryPreference: "Standard nutritious meals",
    admissionDate: "2022-09-18"
  },
  {
    id: "res-003",
    name: "Grandmother Fatema Begum",
    age: 74,
    gender: "Female",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80",
    story: "Fatema came to us after surviving a severe winter flood. She finds joy in knitting blankets for orphan children.",
    healthStatus: "Type 2 Diabetes, vision support required.",
    monthlyNeed: 180,
    currentSponsorship: 60,
    sponsorsCount: 1,
    status: "Needs Sponsorship",
    urgentMedicalNeed: false,
    dietaryPreference: "Diabetic friendly, low carb",
    admissionDate: "2024-01-05"
  }
];

export const mockCampaigns = [
  {
    id: "camp-001",
    title: "Warm Winter Blankets for 100 Underprivileged Families",
    category: "Seasonal Relief",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    targetAmount: 2500,
    raisedAmount: 1850,
    donorsCount: 42,
    daysLeft: 8,
    status: "Active",
    description: "Providing heavy quilted blankets and warm clothing bundles to rural families facing severe cold waves."
  },
  {
    id: "camp-002",
    title: "Emergency Medical & Surgical Fund for Elderly Residents",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    targetAmount: 5000,
    raisedAmount: 3900,
    donorsCount: 88,
    daysLeft: 15,
    status: "Active",
    description: "Sponsoring life-saving surgeries, cataract procedures, and specialized physiotherapy for abandoned seniors."
  },
  {
    id: "camp-003",
    title: "Clean Drinking Water Well in Dry Coastal Village",
    category: "Infrastructure & Aid",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    targetAmount: 3200,
    raisedAmount: 3200,
    donorsCount: 65,
    daysLeft: 0,
    status: "Completed",
    description: "Successfully installed a deep solar water pump bringing fresh drinking water to 350 villagers."
  }
];

export const mockDisbursements = [
  {
    id: "disb-101",
    campaignTitle: "Clean Drinking Water Well",
    beneficiary: "Char Shyamapur Village Council",
    amount: 3200,
    date: "2026-07-25",
    proofUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80",
    approvedBy: "Admin Board",
    status: "Verified & Delivered"
  },
  {
    id: "disb-102",
    campaignTitle: "Elderly Care Wing Medical Supplies",
    beneficiary: "Elderly Care Pharmacy Unit",
    amount: 1450,
    date: "2026-07-30",
    proofUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    approvedBy: "Medical Supervisor",
    status: "Verified & Delivered"
  }
];

export const mockBeneficiaries = [
  {
    id: "ben-501",
    fullName: "Kulsum Bibi",
    nidOrId: "NID-1984729104",
    phone: "+880 1812-345678",
    address: "Kurigram Rural District, Block B",
    category: "Winter Clothing Aid",
    amountRequested: 180,
    reason: "Widowed mother of 3 children. Facing intense cold wave with no warm blankets or jackets.",
    status: "Pending Verification",
    submittedAt: "2026-08-01",
    verificationBadge: "Unverified"
  },
  {
    id: "ben-502",
    fullName: "Kamal Hossain",
    nidOrId: "NID-1976204812",
    phone: "+880 1711-987654",
    address: "Rangpur Village 4",
    category: "Emergency Medical Procedure",
    amountRequested: 450,
    reason: "Requires urgent orthopedic leg brace following an agricultural accident.",
    status: "Verified & Approved",
    submittedAt: "2026-07-28",
    verificationBadge: "Field KYC Verified"
  }
];

