"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Search, FileText, Download, CheckCircle, Shield, Award, Calendar, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonorDashboardPage() {
  const [donorEmail, setDonorEmail] = useState('donor@example.org');
  const [donorData, setDonorData] = useState<any>(null);

  const fetchDonorHistory = () => {
    fetch(`http://localhost:5000/api/v1/donor/history/${encodeURIComponent(donorEmail)}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDonorData(data.data);
          confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
        }
      });
  };

  useEffect(() => {
    fetchDonorHistory();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-amber-600/80 px-3.5 py-1.5 rounded-full text-amber-200 text-xs font-bold uppercase">
          <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span>Donor Impact Portal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Your Generosity & Tax Exemption Ledger
        </h1>
        <p className="text-amber-100 text-base leading-relaxed max-w-2xl">
          Track all your contributions, active monthly grandparent sponsorships, and download official 80G tax exemption certificates.
        </p>
      </div>

      {/* Email Lookup */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="email"
            placeholder="Enter your donor email address..."
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
          />
        </div>
        <button
          onClick={fetchDonorHistory}
          className="w-full sm:w-auto px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md shrink-0"
        >
          View Dashboard
        </button>
      </div>

      {donorData && (
        <div className="space-y-8">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Total Contributed</span>
              <p className="text-3xl font-extrabold text-slate-900">${donorData.totalDonated}</p>
              <p className="text-xs text-emerald-700 font-semibold">100% Direct Aid Allocation</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Total Donations</span>
              <p className="text-3xl font-extrabold text-amber-600">{donorData.donationsCount}</p>
              <p className="text-xs text-slate-500 font-semibold">Transactions Logged</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Active Monthly Grandparents</span>
              <p className="text-3xl font-extrabold text-emerald-800">{donorData.activeSponsorshipsCount}</p>
              <p className="text-xs text-slate-500 font-semibold">Recurring Monthly Support</p>
            </div>
          </div>

          {/* Tax Receipts & Donation History */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Donation History & 80G Tax Receipts</h2>
                <p className="text-xs text-slate-500">Download official tax exemption receipts for your tax returns</p>
              </div>
            </div>

            <div className="space-y-4">
              {donorData.taxReceipts.map((tx: any) => (
                <div key={tx.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-slate-900">{tx.targetName || 'General Foundation Support'}</span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {tx.isRecurring ? 'Monthly Sponsorship' : 'One-Time'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">Date: {tx.createdAt} • Payment Rail: {tx.paymentMethod}</p>
                    <p className="text-xs text-slate-400">TXN Ref: {tx.transactionId}</p>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="text-lg font-extrabold text-slate-900">${tx.amount}</span>
                    <button
                      onClick={() => alert(`Downloading 80G Official Tax Receipt PDF for Ref ${tx.transactionId}`)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                      <span>80G Receipt PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
