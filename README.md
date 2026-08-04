# Elderly Care & Charity Foundation Platform

A modern full-stack web application designed for:
1. **Elderly Care Wing**: Providing dignified shelter, 24/7 medical monitoring, and monthly recurring sponsorship ("Sponsor a Grandparent") for elderly residents.
2. **Charity & Donation Wing**: Connecting donors with verified beneficiaries for seasonal relief, surgical emergency funds, and clean water infrastructure.
3. **Trust & Transparency**: 100% auditable fund utilization, public photo delivery proof, and tax-exemption receipt generation.

---

## 🛠️ Technology Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Framer Motion, Tailwind CSS, Lucide Icons, Canvas Confetti
- **Backend**: Node.js, Express.js REST API
- **Database**: MongoDB Native Driver (`mongodb`), seed data fallback
- **Payments Ready**: SSLCommerz (Bangladesh local rails) + Stripe (Global USD)
- **Version Control**: Git & GitHub (`https://github.com/shakil218/charity-organization.git`)

---

## 🚀 Getting Started

### 1. Client Setup (Next.js)
```bash
cd client
npm install
npm run dev
```
The client application will run at [http://localhost:3000](http://localhost:3000).

### 2. Backend Setup (Express + MongoDB Native Driver)
```bash
cd server
npm install
npm start
```
The API server will run at [http://localhost:5000](http://localhost:5000).

---

## 📌 Project Structure

```
.
├── client/                 # Next.js App Router Frontend
│   ├── src/app/            # Pages: /, /elderly-care, /campaigns, /transparency, /volunteer, /donate
│   └── src/components/     # Navbar, Footer, UI components
└── server/                 # Node.js Express REST API
    ├── src/db/             # MongoDB Native Driver client & Seed data
    └── src/server.js       # Express routes & endpoints
```
